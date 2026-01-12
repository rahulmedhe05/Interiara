#!/usr/bin/env python3
"""Remove broken/duplicate footer sections from all pages"""

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
    """Check if this page should have broken footer removed"""
    # Remove footer from service pages (those with locations like 'al-barsha', 'business-bay', etc.)
    # Keep footer for:
    # 1. Home page (if it exists as special case)
    # 2. General Dubai pages (pages where location is just 'dubai' or 'rendering')
    
    service, location = get_service_and_location_from_dir(dir_name)
    
    # These should KEEP the broken footer (only home/general pages)
    if location in ['dubai', 'rendering', 'design', 'visualization']:
        return False
    
    # Everything else (all location-specific pages) should have it removed
    return True

def remove_broken_footer_from_page(content):
    """Remove the broken 'All Interior Design Services' footer"""
    # This footer has:
    # 1. Title: "All Interior Design Services"
    # 2. Description mentioning "Interior Design" as location (wrong)
    # 3. Many empty Links (no text displayed)
    
    # Find and remove the section with empty links
    pattern = r'{/\* Location Services Footer \*/}[\s\S]*?(?=<Footer \/>)'
    
    # Match the footer section
    match = re.search(pattern, content, re.DOTALL)
    if match:
        footer_section = match.group(0)
        
        # Check if this is the broken one (has "All Interior Design Services" and empty links)
        if 'All Interior Design Services' in footer_section or (
            'Interior Design' in footer_section and 
            'available in Interior Design' in footer_section
        ):
            # This is the broken footer, remove it
            content = content.replace(footer_section, '')
            return content, True
    
    return content, False

def process_page(page_path, should_remove):
    """Process a single page file"""
    try:
        content = page_path.read_text(encoding='utf-8')
        original_size = len(content)
        
        if should_remove:
            content, was_removed = remove_broken_footer_from_page(content)
            
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
    
    print(f"🚀 Removing broken footer sections from pages")
    print("=" * 80)
    
    removed_count = 0
    kept_count = 0
    total_bytes_removed = 0
    
    for idx, dir_name in enumerate(all_dirs, 1):
        page_path = app_dir / dir_name / 'page.tsx'
        should_remove = should_remove_footer(dir_name)
        
        if page_path.exists():
            was_removed, bytes_removed = process_page(page_path, should_remove)
            if was_removed:
                removed_count += 1
                total_bytes_removed += bytes_removed
            elif should_remove:
                kept_count += 1
        
        if idx % 500 == 0:
            print(f"✅ Progress: {idx}/{len(all_dirs)} pages processed ({removed_count} cleaned)")
    
    print("=" * 80)
    print(f"🎉 Complete!")
    print(f"✅ Removed broken footers from: {removed_count} pages")
    print(f"📊 Total pages: {len(all_dirs)}")
    print(f"📈 Total data removed: {total_bytes_removed:,} bytes")
    print(f"\n✅ Kept footer on: General/Dubai pages")
    print(f"❌ Removed footer from: All location-specific service pages")

if __name__ == "__main__":
    main()
