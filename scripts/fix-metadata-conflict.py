#!/usr/bin/env python3
import os
import re

app_dir = "/Applications/Interiara/app"

print("🔧 Fixing pages: Remove metadata export, restore 'use client'...")
print("=" * 60)

fixed_count = 0
progress_interval = 500

for dir_name in sorted(os.listdir(app_dir)):
    dir_path = os.path.join(app_dir, dir_name)
    page_file = os.path.join(dir_path, "page.tsx")
    
    if not os.path.isfile(page_file):
        continue
    
    with open(page_file, 'r') as f:
        content = f.read()
    
    # Remove metadata export block
    content = re.sub(
        r'export const metadata = \{[^}]*(?:\{[^}]*\}[^}]*)*\}\n\n',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Add "use client" at the very top if not present
    if '"use client"' not in content:
        content = '"use client"\n\n' + content
    
    with open(page_file, 'w') as f:
        f.write(content)
    
    fixed_count += 1
    
    if fixed_count % progress_interval == 0:
        print(f"✅ Progress: {fixed_count}/5165 pages processed")

print(f"\n🎉 Complete!")
print(f"✅ Fixed: {fixed_count} pages")
print(f"📊 Changes:")
print(f"   • Removed metadata export (conflicts with useState)")
print(f"   • Restored 'use client' directive")
print(f"   • Global metadata in layout.tsx handles SEO")
