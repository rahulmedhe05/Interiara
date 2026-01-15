#!/usr/bin/env python3
"""
Add ISR (Incremental Static Regeneration) revalidate setting to all page.tsx files.
This allows pages to be regenerated on-demand without rebuilding the entire site.
"""
import os
import re
from pathlib import Path

app_dir = Path("/Applications/Interiara/app")
revalidate_time = 86400  # 24 hours
updated_count = 0

print("🔄 Adding ISR revalidation to all pages...")
print("=" * 60)

for page_file in app_dir.rglob("page.tsx"):
    # Skip if already has revalidate
    if page_file.stat().st_size == 0:
        continue
    
    try:
        with open(page_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading {page_file}: {e}")
        continue
    
    # Skip if already has revalidate
    if "export const revalidate" in content:
        continue
    
    # Add revalidate after "use client" or at the top
    if '"use client"' in content:
        # Add after "use client"
        new_content = content.replace(
            '"use client"',
            '"use client"\n\n// Revalidate every 24 hours (ISR)\nexport const revalidate = ' + str(revalidate_time),
            1
        )
    elif "import type" in content or "import" in content:
        # Add before first import
        lines = content.split('\n')
        insert_idx = 0
        for i, line in enumerate(lines):
            if line.startswith('import '):
                insert_idx = i
                break
        lines.insert(insert_idx, f"// Revalidate every 24 hours (ISR)\nexport const revalidate = {revalidate_time}\n")
        new_content = '\n'.join(lines)
    else:
        continue
    
    try:
        with open(page_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        updated_count += 1
        if updated_count % 500 == 0:
            print(f"✅ Progress: {updated_count} pages updated")
    except Exception as e:
        print(f"❌ Error writing {page_file}: {e}")

print(f"\n🎉 Complete!")
print(f"✅ Updated: {updated_count} pages with ISR revalidation")
print(f"⏱️  Revalidation interval: {revalidate_time} seconds ({revalidate_time//3600} hours)")
print(f"📝 ISR enabled: Pages will regenerate on-demand, improving build speed")
