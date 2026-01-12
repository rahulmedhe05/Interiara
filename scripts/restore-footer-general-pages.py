#!/usr/bin/env python3
"""Restore global Footer component to general Dubai service pages"""

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

def is_general_dubai_page(dir_name):
    """Check if page is a general Dubai service page"""
    service, location = get_service_and_location_from_dir(dir_name)
    
    # General Dubai pages (location is 'dubai', 'rendering', 'design', 'visualization', 'consultation', 'solutions')
    return location in ['dubai', 'rendering', 'design', 'visualization', 'consultation', 'solutions']

def add_footer_to_page(content):
    """Add Footer component back to page"""
    # Check if Footer import already exists
    if 'import { Footer }' not in content:
        # Add Footer import after other imports
        import_pattern = r'(import { Button } from "@/components/ui/button"\n)'
        replacement = r'\1import { Footer } from "@/components/footer"\n'
        content = re.sub(import_pattern, replacement, content)
    
    # Add <Footer /> before <WhatsAppFloat />
    if '<Footer />' not in content and '<WhatsAppFloat />' in content:
        content = content.replace('<WhatsAppFloat />', '<Footer />\n      <WhatsAppFloat />')
    
    return content

def process_page(page_path):
    """Process a single page file"""
    try:
        content = page_path.read_text(encoding='utf-8')
        
        new_content = add_footer_to_page(content)
        
        if new_content != content:
            page_path.write_text(new_content, encoding='utf-8')
            return True
        
        return False
    except Exception as e:
        print(f"Error: {e}")
        return False

def main():
    app_dir = Path('/Applications/Interiara/app')
    
    all_dirs = sorted([d.name for d in app_dir.iterdir() if d.is_dir() and (d / 'page.tsx').exists()])
    
    print(f"🚀 Restoring global Footer to general Dubai pages")
    print("=" * 80)
    
    restored_count = 0
    
    for idx, dir_name in enumerate(all_dirs, 1):
        page_path = app_dir / dir_name / 'page.tsx'
        
        if page_path.exists() and is_general_dubai_page(dir_name):
            if process_page(page_path):
                restored_count += 1
        
        if idx % 500 == 0:
            print(f"✅ Progress: {idx}/{len(all_dirs)} pages processed ({restored_count} restored)")
    
    print("=" * 80)
    print(f"🎉 Complete!")
    print(f"✅ Restored Footer to: {restored_count} general Dubai pages")

if __name__ == "__main__":
    main()
