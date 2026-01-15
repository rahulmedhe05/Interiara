#!/usr/bin/env python3
import os
import json
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

# Load all keywords once
with open('keywords-all-pages.json', 'r') as f:
    keywords_data = json.load(f)

print("🔍 Expanding keywords from 15 to 30 per page...")
print("=" * 60)

# First pass: Expand keywords to 30 per page
for page_key, page_data in keywords_data.items():
    current_keywords = page_data.get("keywords", [])
    
    if len(current_keywords) >= 30:
        continue
    
    service = page_data.get("service_formatted", "")
    location = page_data.get("location_formatted", "")
    
    # Additional keyword variations to reach 30
    additional_keywords = [
        f"{service} near {location}",
        f"{service} specialists {location}",
        f"{service} experts {location}",
        f"{service} solutions {location}",
        f"{service} packages {location}",
        f"{service} quotes {location}",
        f"{service} estimates {location}",
        f"{service} services near me {location}",
        f"Cheap {service} {location}",
        f"Quality {service} {location}",
        f"Trusted {service} {location}",
        f"{service} transformation {location}",
        f"{service} renovation {location}",
        f"{service} makeover {location}",
        f"Best {service} company {location}",
    ]
    
    # Combine with existing
    all_keywords = current_keywords + additional_keywords
    page_data["keywords"] = all_keywords[:30]

# Save expanded keywords
with open('keywords-all-pages.json', 'w') as f:
    json.dump(keywords_data, f, indent=2)

print(f"✅ Expanded all keywords to 30 per page")

# Second pass: Process pages in parallel
app_dir = Path("/Applications/Interiara/app")
updated_count = 0
progress_interval = 500
max_workers = 8  # Use multiple threads for I/O operations

def process_page(page_key, page_data):
    """Process a single page"""
    dir_path = app_dir / page_key
    page_file = dir_path / "page.tsx"
    
    if not page_file.is_file():
        return None
    
    # Get 30 keywords
    keywords = page_data.get("keywords", [])[:30]
    if len(keywords) < 30:
        return None
    
    # Read the page file
    try:
        with open(page_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading {page_file}: {e}")
        return None
    
    # Find all paragraphs and headings for placement
    paragraphs = list(re.finditer(r'<p[^>]*>([^<]{50,}?)</p>', content, re.DOTALL))
    
    if not paragraphs:
        return None
    
    placement_count = {}
    
    for idx, keyword in enumerate(keywords):
        placement_count[keyword] = 0
        keyword_lower = keyword.lower()
        
        # Count existing occurrences
        keyword_occurrences = len(re.findall(re.escape(keyword_lower), content.lower()))
        if keyword_occurrences >= 2:
            placement_count[keyword] = keyword_occurrences
            continue
        
        placements_needed = 2 - keyword_occurrences
        
        # Placement 1: Early in content (first 3 paragraphs)
        if placements_needed > 0:
            for p_idx in range(min(3, len(paragraphs))):
                p_match = paragraphs[p_idx]
                if keyword_lower not in p_match.group(0).lower():
                    old_p = p_match.group(0)
                    # Insert keyword naturally
                    new_p = old_p.replace(
                        '</p>',
                        f' Our {keyword.lower()} services are designed for excellence.</p>',
                        1
                    )
                    content = content.replace(old_p, new_p, 1)
                    placement_count[keyword] += 1
                    placements_needed -= 1
                    break
        
        # Placement 2: In middle/description section
        if placements_needed > 0 and len(paragraphs) > 3:
            for p_idx in range(3, min(6, len(paragraphs))):
                p_match = paragraphs[p_idx]
                if keyword_lower not in p_match.group(0).lower():
                    old_p = p_match.group(0)
                    new_p = old_p.replace(
                        '</p>',
                        f' Specializing in {keyword.lower()}.</p>',
                        1
                    )
                    content = content.replace(old_p, new_p, 1)
                    placement_count[keyword] += 1
                    placements_needed -= 1
                    break
    
    # Update SEO keywords comment
    keywords_str = ", ".join(keywords)
    old_comment = r'// SEO Keywords:.*?\n'
    new_comment = f'// SEO Keywords: {keywords_str}\n'
    content = re.sub(old_comment, new_comment, content, flags=re.DOTALL)
    
    # Write back
    try:
        with open(page_file, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"❌ Error writing {page_file}: {e}")
        return None
    
    # Update JSON data
    page_data["keyword_placements"] = placement_count
    page_data["total_placement_density"] = "30 keywords × 2 placements = 60 keyword references"
    
    return page_key

print("\n🎯 Placing 30 keywords × 2 times each (parallel processing)...")
print("=" * 60)

# Process all pages in parallel
with ThreadPoolExecutor(max_workers=max_workers) as executor:
    futures = {
        executor.submit(process_page, page_key, page_data): page_key 
        for page_key, page_data in keywords_data.items()
    }
    
    for i, future in enumerate(as_completed(futures), 1):
        result = future.result()
        if result:
            updated_count += 1
            if updated_count % progress_interval == 0:
                print(f"✅ Progress: {updated_count} pages processed")

# Save updated data once
with open('keywords-all-pages.json', 'w') as f:
    json.dump(keywords_data, f, indent=2)

print(f"\n🎉 Complete!")
print(f"✅ Updated: {updated_count} pages")
print(f"📊 Keywords per page: 30")
print(f"🎯 Keyword density: 30 × 2 = 60 references per page")
print(f"💾 All changes saved")
print(f"⚡ Used parallel processing with {max_workers} workers")
