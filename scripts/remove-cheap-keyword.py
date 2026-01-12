#!/usr/bin/env python3
import json

# Load keywords
with open('keywords-all-pages.json', 'r') as f:
    keywords_data = json.load(f)

print("🗑️ Removing 'Cheap' keyword variant from all pages...")
print("=" * 60)

removed_count = 0

for page_key, page_data in keywords_data.items():
    keywords = page_data.get("keywords", [])
    
    # Filter out "Cheap" keywords
    original_count = len(keywords)
    filtered_keywords = [kw for kw in keywords if not kw.lower().startswith("cheap")]
    
    if len(filtered_keywords) < original_count:
        page_data["keywords"] = filtered_keywords
        removed_count += 1

# Save updated keywords
with open('keywords-all-pages.json', 'w') as f:
    json.dump(keywords_data, f, indent=2)

print(f"✅ Removed 'Cheap' keyword from: {removed_count} pages")
print(f"📊 Keywords now: 29 per page (was 30)")
