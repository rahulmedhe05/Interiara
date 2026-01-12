#!/usr/bin/env python3
import os
import re

# Directory containing all pages
app_dir = "/Applications/Interiara/app"

print("🗑️ Removing CompactLocationFooter from all pages...")
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
        lines = f.readlines()
    
    original_lines = lines.copy()
    new_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Skip import statement
        if 'import { CompactLocationFooter }' in line and '@/components/compact-location-footer' in line:
            i += 1
            continue
        
        # Skip comment and component
        if '{/* Compact Location Footer */}' in line:
            i += 1
            # Skip the component lines
            while i < len(lines) and '<CompactLocationFooter' not in lines[i]:
                i += 1
            if i < len(lines):
                # Skip until we find closing />
                while i < len(lines) and '/>' not in lines[i]:
                    i += 1
                i += 1  # Skip the /> line
            continue
        
        new_lines.append(line)
        i += 1
    
    if new_lines != original_lines:
        with open(page_file, 'w') as f:
            f.writelines(new_lines)
        updated_count += 1
    
    if updated_count % progress_interval == 0:
        print(f"✅ Progress: {updated_count}/5165 pages processed")

print(f"\n🎉 Complete!")
print(f"✅ Removed CompactLocationFooter from: {updated_count} pages")
