#!/usr/bin/env python3
import os
import re

# Directory containing all pages
app_dir = "/Applications/Interiara/app"

print("🧹 Removing allServices props from all pages...")
print("=" * 60)

updated_count = 0
progress_interval = 500

for dir_name in sorted(os.listdir(app_dir)):
    dir_path = os.path.join(app_dir, dir_name)
    page_file = os.path.join(dir_path, "page.tsx")
    
    if not os.path.isfile(page_file):
        continue
    
    # Read the page file
    with open(page_file, 'r') as f:
        content = f.read()
    
    # Skip if no allServices
    if 'allServices=' not in content:
        continue
    
    # Remove the allServices prop and its values (multi-line)
    # This regex handles the allServices array which spans multiple lines
    new_content = re.sub(
        r'\s+allServices=\{[^}]*\}',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Write back
    with open(page_file, 'w') as f:
        f.write(new_content)
    
    updated_count += 1
    
    if updated_count % progress_interval == 0:
        print(f"✅ Progress: {updated_count}/5165 pages processed")

print(f"\n🎉 Complete!")
print(f"✅ Removed allServices from: {updated_count} pages")
