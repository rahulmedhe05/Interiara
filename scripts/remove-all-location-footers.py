#!/usr/bin/env python3
"""Remove location footer from all pages except home and general Dubai pages"""

import re
from pathlib import Path

def get_service_and_location_from_dir(dir_name):
    """Extract service and location from directory name"""
    parts = dir_name.rsplit('-dubai', 1)[0]
    components = parts.split('-')
    
    location_prefixes = ['al-', 'dubai-', 'the-', 'um-']
    location_start = 0
    for i, component in enumerate(components):
        if any(component.lower().startswith(prefix) for prefix in location_prefixes):
            location_start = i
            break
    
    service_parts = components[:location_start] if location_start > 0 else components[:-2]
    location_parts = components[location_start:] if location_start > 0 else components[-2:]
    
    service = '-'.join(service_parts) if service_parts else '-'.join(components[:-2])
    location = '-'.join(location_parts) if location_parts else components[-1]
    
    return service, location

def should_remove_footer(dir_name):
    """Check if this page should have footer removed"""
    service, location = get_service_and_location_from_dir(dir_name)
    
    # KEEP footer on:
    # 1. Home page/index
    # 2. General Dubai pages (no location, only service)
    if dir_name in ['page', 'index']:
        return False
    
    if location == 'dubai' or location == 'rendering' or location == 'design' or location == 'visualization':
        return False
    
    # REMOVE footer from all other pages (location-specific)
    return True

def remove_location_footer(content):
    """Remove the location services footer section"""
    pattern = r'\n\s*{/\* Location Services Footer \*/}[\s\S]*?</section>\s*\n\s*<Footer'
    replacement = '\n\n      <Footer'
    
    # Try the pattern
    if re.search(pattern, content):
        content = re.sub(pattern, replacement, content)
        return content, True
    
    # Alternative pattern if first doesn't match
    pattern2 = r'{/\* Location Services Footer \*/}[\s\S]*?</section>\s*\n\s*<Footer'
    replacement2 = '<Footer'
    
    if re.search(pattern2, content):
        content = re.sub(pattern2, replacement2, content)
        return content, True
    
    return content, False

def process_page(page_path, should_remove):
    """Process a single page file"""
    try:
        content = page_path.read_text(encoding='utf-8')
        original_size = len(content)
        
        if should_remove:
            content, was_removed = remove_location_footer(content)
            
            if was_removed:
                page_path.write_text(content, encoding='utf-8')
                new_size = len(content)
                return True, original_size - new_size
        
        return False, 0
    except Exception as e:
        return False, 0

def main():
    app_dir = Path('/Applications/Interiara/app')
    
    all_dirs = sorted([d.name for d in app_dir.iterdir() if d.is_dir() and (d / 'page.tsx').exists()])
    
    print(f"🚀 Removing location footer from all location-specific pages")
    print("=" * 80)
    
    removed_count = 0
    kept_count = 0
    total_bytes_removed = 0
    kept_pages = []
    
    for idx, dir_name in enumerate(all_dirs, 1):
        page_path = app_dir / dir_name / 'page.tsx'
        should_remove = should_remove_footer(dir_name)
        
        if page_path.exists():
            was_removed, bytes_removed = process_page(page_path, should_remove)
            if was_removed:
                removed_count += 1
                total_bytes_removed += bytes_removed
            elif not should_remove:
                kept_count += 1
                if len(kept_pages) < 20:
                    kept_pages.append(dir_name)
        
        if idx % 500 == 0:
            print(f"✅ Progress: {idx}/{len(all_dirs)} pages processed ({removed_count} cleaned)")
    
    print("=" * 80)
    print(f"🎉 Complete!")
    print(f"✅ Removed footer from: {removed_count} location-specific pages")
    print(f"✅ Kept footer on: {kept_count} general/home pages")
    print(f"📊 Total pages: {len(all_dirs)}")
    print(f"📈 Total data removed: {total_bytes_removed:,} bytes ({total_bytes_removed / 1024 / 1024:.1f} MB)")
    print(f"\n📍 Sample pages that KEPT footer:")
    for page in kept_pages[:5]:
        print(f"   - {page}")

if __name__ == "__main__":
    main()
