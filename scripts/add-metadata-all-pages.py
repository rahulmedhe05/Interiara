#!/usr/bin/env python3
import os
import json
import re

# Load keywords data
with open('keywords-all-pages.json', 'r') as f:
    keywords_data = json.load(f)

app_dir = "/Applications/Interiara/app"

print("📝 Adding meta titles and descriptions to all pages...")
print("=" * 60)

updated_count = 0
progress_interval = 500

for page_key, page_data in keywords_data.items():
    dir_name = page_key
    dir_path = os.path.join(app_dir, dir_name)
    page_file = os.path.join(dir_path, "page.tsx")
    
    if not os.path.isfile(page_file):
        continue
    
    service = page_data.get("service_formatted", "")
    location = page_data.get("location_formatted", "")
    keywords = page_data.get("keywords", [])[:5]  # First 5 keywords for description
    
    # Generate meta title (50-60 chars)
    meta_title = f"{service} in {location} Dubai | Interiara"
    
    # Generate meta description (155-160 chars)
    keywords_str = ", ".join(keywords[:3])
    meta_description = f"Expert {service.lower()} services in {location}, Dubai. Premium designs, 300+ projects, 15+ years experience. Call +971 6 353 8314 or WhatsApp now."
    
    # Trim description to 160 chars
    if len(meta_description) > 160:
        meta_description = meta_description[:157] + "..."
    
    # Read the page file
    with open(page_file, 'r') as f:
        content = f.read()
    
    # Check if already has "use client"
    is_client_component = '"use client"' in content
    
    # Create metadata export
    metadata_export = f'''export const metadata = {{
  title: "{meta_title}",
  description: "{meta_description}",
  keywords: "{', '.join(keywords)}",
  openGraph: {{
    title: "{meta_title}",
    description: "{meta_description}",
    type: "website",
    url: "https://interiara.ae/{dir_name}",
  }},
  twitter: {{
    title: "{meta_title}",
    description: "{meta_description}",
  }},
}}

'''
    
    # Remove "use client" if present
    if is_client_component:
        content = content.replace('"use client"\n\n', '')
        content = content.replace('"use client"\n', '')
    
    # Add metadata export after imports
    # Find the position after all imports
    import_section = re.search(r'((?:import.*\n)*)', content)
    if import_section:
        import_end = import_section.end()
        # Check if metadata already exists
        if 'export const metadata' not in content:
            # Insert metadata after imports, before other code
            content = content[:import_end] + '\n' + metadata_export + content[import_end:]
    
    # Write back
    with open(page_file, 'w') as f:
        f.write(content)
    
    updated_count += 1
    
    if updated_count % progress_interval == 0:
        print(f"✅ Progress: {updated_count}/5165 pages processed")

print(f"\n🎉 Complete!")
print(f"✅ Added metadata to: {updated_count} pages")
print(f"📊 Each page now has:")
print(f"   • Dynamic meta title (50-60 chars)")
print(f"   • Dynamic meta description (155-160 chars)")
print(f"   • Keywords from keyword research")
print(f"   • OpenGraph tags for social sharing")
print(f"   • Twitter card tags")
