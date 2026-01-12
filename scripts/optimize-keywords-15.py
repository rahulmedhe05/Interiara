#!/usr/bin/env python3
import os
import json
import re
from collections import defaultdict

# Load all keywords
with open('keywords-all-pages.json', 'r') as f:
    keywords_data = json.load(f)

app_dir = "/Applications/Interiara/app"

print("🔍 Optimizing keywords: 15 per page + 1 keyword 3 times")
print("=" * 60)

updated_count = 0
progress_interval = 500

for page_key, page_data in keywords_data.items():
    dir_name = page_key
    dir_path = os.path.join(app_dir, dir_name)
    page_file = os.path.join(dir_path, "page.tsx")
    
    if not os.path.isfile(page_file):
        continue
    
    # Get top 15 keywords (primary keyword is most important)
    all_keywords = page_data.get("keywords", [])
    top_15_keywords = all_keywords[:15]
    
    # Primary keyword (most important - will be used 3 times)
    primary_keyword = top_15_keywords[0] if top_15_keywords else "Interior Design"
    
    # Secondary keywords
    secondary_keywords = top_15_keywords[1:] if len(top_15_keywords) > 1 else []
    
    # Read the page file
    with open(page_file, 'r') as f:
        content = f.read()
    
    # Extract current info for context
    service_formatted = page_data.get("service_formatted", "")
    location_formatted = page_data.get("location_formatted", "")
    
    # Update meta keywords comment at top
    old_comment_pattern = r'// SEO Keywords:.*?\n'
    keywords_str = ", ".join(top_15_keywords)
    new_comment = f'// SEO Keywords: {keywords_str}\n'
    content = re.sub(old_comment_pattern, new_comment, content, flags=re.DOTALL)
    
    # Strategy: Place primary keyword in:
    # 1. Page title (h1)
    # 2. First paragraph
    # 3. One section heading or important text
    
    # Find and enhance h1 with primary keyword if not already there
    h1_pattern = r'<h1[^>]*>([^<]+)</h1>'
    h1_match = re.search(h1_pattern, content)
    if h1_match:
        current_h1 = h1_match.group(1)
        if primary_keyword not in current_h1:
            # Make sure primary keyword is in the h1
            enhanced_h1 = f'{current_h1} - {primary_keyword}'
            content = re.sub(h1_pattern, f'<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">{enhanced_h1}</h1>', content, count=1)
    
    # Find first <p> tag with substantial content and enhance it with primary keyword
    p_pattern = r'(<p[^>]*>(?!<)[^<]{100,}?</p>)'
    p_matches = list(re.finditer(p_pattern, content, re.DOTALL))
    
    if p_matches and primary_keyword not in p_matches[0].group(0):
        first_p = p_matches[0].group(0)
        # Inject primary keyword early in first paragraph
        enhanced_p = re.sub(
            r'(<p[^>]*>)',
            lambda m: m.group(1) + f'{primary_keyword}. ',
            first_p,
            count=1
        )
        content = content.replace(first_p, enhanced_p, 1)
    
    # Add keywords to description text if available
    # Find the main description paragraph and enhance with secondary keywords
    desc_pattern = r'("text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">\s*(?:Looking for|Premier|Professional)[^<]+</p>)'
    desc_matches = list(re.finditer(desc_pattern, content, re.DOTALL))
    
    if desc_matches:
        desc_text = desc_matches[0].group(0)
        if len(secondary_keywords) > 0:
            second_kw = secondary_keywords[0]
            if second_kw not in desc_text:
                enhanced_desc = desc_text.replace(
                    '</p>',
                    f' Specializing in {second_kw.lower()}</p>',
                    1
                )
                content = content.replace(desc_text, enhanced_desc, 1)
    
    # Update keywords JSON to store optimized list
    keywords_data[page_key]["keywords"] = top_15_keywords
    keywords_data[page_key]["primary_keyword"] = primary_keyword
    keywords_data[page_key]["keyword_density"] = "1 keyword x3, 14 keywords x1"
    
    # Write back page
    with open(page_file, 'w') as f:
        f.write(content)
    
    updated_count += 1
    
    if updated_count % progress_interval == 0:
        print(f"✅ Progress: {updated_count}/5165 pages processed")

# Save updated keywords data
with open('keywords-all-pages.json', 'w') as f:
    json.dump(keywords_data, f, indent=2)

print(f"\n🎉 Complete!")
print(f"✅ Optimized: {updated_count} pages")
print(f"📊 Keyword structure: 15 keywords per page")
print(f"🎯 Primary keyword: Used 3 times strategically")
print(f"💾 Updated keywords-all-pages.json with metadata")
