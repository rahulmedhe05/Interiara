#!/usr/bin/env python3
"""Remove global Footer component from all location-specific area pages"""

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

def should_remove_global_footer(dir_name):
    """Check if this page should have global footer removed (only area pages)"""
    service, location = get_service_and_location_from_dir(dir_name)
    
    # Keep global footer on:
    # 1. General Dubai pages (location is 'dubai', 'rendering', 'design', 'visualization', 'consultation', 'solutions')
    if location in ['dubai', 'rendering', 'design', 'visualization', 'consultation', 'solutions']:
        return False
    
    # Remove global footer from all location-specific pages (Al Barsha, Business Bay, etc.)
    return True

def remove_global_footer_from_page(content):
    """Remove the global Footer component and imports if needed"""
    # Remove the <Footer /> component
    pattern = r'\s*<Footer />\s*'
    
    if '<Footer />' in content:
        content = re.sub(pattern, '', content)
        
        # Check if Footer import is still used elsewhere
        if 'Footer' not in content:
            # Remove the Footer import line
            import_pattern = r'import { Footer } from "@/components/footer"\s*\n'
            content = re.sub(import_pattern, '', content)
        
        return content, True
    
    return content, False

def process_page(page_path, should_remove):
    """Process a single page file"""
    try:
        content = page_path.read_text(encoding='utf-8')
        original_size = len(content)
        
        if should_remove:
            content, was_removed = remove_global_footer_from_page(content)
            
            if was_removed:
                page_path.write_text(content, encoding='utf-8')
                new_size = len(content)
                return True, original_size - new_size
        
        return False, 0
    except Exception as e:
        print(f"Error: {e}")
        return False, 0

def main():
    app_dir = Path('/Applications/Interiara/app')
    
    all_dirs = sorted([d.name for d in app_dir.iterdir() if d.is_dir() and (d / 'page.tsx').exists()])
    
    print(f"🚀 Removing global Footer component from area pages")
    print("=" * 80)
    
    removed_count = 0
    kept_count = 0
    total_bytes_removed = 0
    
    for idx, dir_name in enumerate(all_dirs, 1):
        page_path = app_dir / dir_name / 'page.tsx'
        should_remove = should_remove_global_footer(dir_name)
        
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
    print(f"✅ Removed global Footer from: {removed_count} pages")
    print(f"📊 Total pages: {len(all_dirs)}")
    print(f"📈 Total data removed: {total_bytes_removed:,} bytes (~{total_bytes_removed/1024/1024:.1f} MB)")
    print(f"\n✅ Kept Footer on: General Dubai service pages")
    print(f"❌ Removed Footer from: All location-specific area pages (Al Barsha, Business Bay, etc.)")

if __name__ == "__main__":
    main()
