#!/usr/bin/env python3
import os
import json
import re

# Load all keywords
with open('keywords-all-pages.json', 'r') as f:
    keywords_data = json.load(f)

app_dir = "/Applications/Interiara/app"

print("🎯 Placing 15 keywords × 3 times each on all pages")
print("=" * 60)

updated_count = 0
progress_interval = 500

for page_key, page_data in keywords_data.items():
    dir_name = page_key
    dir_path = os.path.join(app_dir, dir_name)
    page_file = os.path.join(dir_path, "page.tsx")
    
    if not os.path.isfile(page_file):
        continue
    
    # Get 15 keywords
    keywords = page_data.get("keywords", [])[:15]
    if len(keywords) < 15:
        continue
    
    # Read the page file
    with open(page_file, 'r') as f:
        content = f.read()
    
    # Strategy for placing keywords 3 times each:
    # - Position 1: In h1/title area (top)
    # - Position 2: In first/second paragraph (early content)
    # - Position 3: In service features or process section (middle)
    
    # Find all paragraph tags with content
    paragraphs = list(re.finditer(r'<p[^>]*>([^<]{50,}?)</p>', content, re.DOTALL))
    
    # Find all section heading patterns
    headings = list(re.finditer(r'<h[2-3][^>]*>([^<]{10,}?)</h[2-3]>', content, re.DOTALL))
    
    if not paragraphs:
        continue
    
    placement_count = {}
    
    for idx, keyword in enumerate(keywords):
        placement_count[keyword] = 0
        keyword_lower = keyword.lower()
        
        # Only place if keyword not already heavily present
        keyword_occurrences = len(re.findall(re.escape(keyword_lower), content.lower()))
        if keyword_occurrences >= 3:
            placement_count[keyword] = keyword_occurrences
            continue
        
        placements_needed = 3 - keyword_occurrences
        
        # Placement 1: In first paragraph (intro)
        if placements_needed > 0 and paragraphs:
            first_p_match = paragraphs[0]
            if keyword not in first_p_match.group(0):
                old_p = first_p_match.group(0)
                # Insert keyword at start of paragraph
                new_p = old_p.replace(
                    first_p_match.group(1)[:20],
                    f'{keyword}. ' + first_p_match.group(1)[:20]
                )
                content = content.replace(old_p, new_p, 1)
                placement_count[keyword] += 1
                placements_needed -= 1
        
        # Placement 2: In a middle paragraph (if available)
        if placements_needed > 0 and len(paragraphs) > 1:
            mid_idx = min(2, len(paragraphs) - 1)
            mid_p_match = paragraphs[mid_idx]
            if keyword not in mid_p_match.group(0):
                old_p = mid_p_match.group(0)
                # Insert keyword naturally
                new_p = old_p.replace(
                    '</p>',
                    f' Our {keyword.lower()} service ensures quality.</p>'
                )
                content = content.replace(old_p, new_p, 1)
                placement_count[keyword] += 1
                placements_needed -= 1
        
        # Placement 3: In description or feature section
        if placements_needed > 0:
            # Find "professional" or "premium" sections and add keyword
            desc_pattern = r'(Premier|Professional|Expert)([^<]{20,}?)</p>'
            desc_match = re.search(desc_pattern, content, re.DOTALL)
            if desc_match and keyword not in desc_match.group(0):
                old_text = desc_match.group(0)
                new_text = old_text.replace(
                    '</p>',
                    f' - {keyword} specialists.</p>'
                )
                content = content.replace(old_text, new_text, 1)
                placement_count[keyword] += 1
                placements_needed -= 1
    
    # Update the SEO keywords comment with all 15 keywords
    keywords_str = ", ".join(keywords)
    old_comment = r'// SEO Keywords:.*?\n'
    new_comment = f'// SEO Keywords: {keywords_str}\n'
    content = re.sub(old_comment, new_comment, content, flags=re.DOTALL)
    
    # Write back
    with open(page_file, 'w') as f:
        f.write(content)
    
    # Update JSON with placement tracking
    page_data["keyword_placements"] = placement_count
    page_data["total_placement_density"] = "15 keywords × 3 placements = 45 keyword references"
    
    updated_count += 1
    
    if updated_count % progress_interval == 0:
        print(f"✅ Progress: {updated_count}/5165 pages processed")

# Save updated keywords data
with open('keywords-all-pages.json', 'w') as f:
    json.dump(keywords_data, f, indent=2)

print(f"\n🎉 Complete!")
print(f"✅ Updated: {updated_count} pages")
print(f"📊 Keyword density: 15 keywords × 3 placements each")
print(f"🎯 Total keyword references per page: ~45")
print(f"💾 Placement tracking saved to keywords-all-pages.json")
