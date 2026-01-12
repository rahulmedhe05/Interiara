#!/usr/bin/env python3
"""Add compact location footer to all area-specific pages"""

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

def format_text(text):
    """Format hyphenated text to title case"""
    return text.replace('-', ' ').title()

def should_add_footer(dir_name):
    """Check if page should get the compact location footer"""
    service, location = get_service_and_location_from_dir(dir_name)
    
    # Skip general Dubai pages and home
    if location in ['dubai', 'rendering', 'design', 'visualization', 'consultation', 'solutions']:
        return False
    
    # Add footer to all area-specific pages
    return True

def add_compact_footer_to_page(content, dir_name):
    """Add compact location footer to page"""
    service, location = get_service_and_location_from_dir(dir_name)
    service_formatted = format_text(service)
    location_formatted = format_text(location)
    
    # Add import for CompactLocationFooter
    if 'import { CompactLocationFooter }' not in content:
        import_pattern = r'(import Link from "next/link")'
        if re.search(import_pattern, content):
            replacement = r'import Link from "next/link"\nimport { CompactLocationFooter } from "@/components/compact-location-footer"'
            content = re.sub(import_pattern, replacement, content)
        else:
            # Add after other imports
            import_pattern = r'(import { Button } from "@/components/ui/button")'
            replacement = r'\1\nimport { CompactLocationFooter } from "@/components/compact-location-footer"'
            content = re.sub(import_pattern, replacement, content)
    
    # Create footer JSX
    footer_jsx = f'''
      {{/* Compact Location Footer */}}
      <CompactLocationFooter 
        location="{location_formatted}" 
        service="{service_formatted}" 
        serviceUrl="/{dir_name}"
      />
'''
    
    # Add before WhatsAppFloat
    pattern = r'(<WhatsAppFloat \/>)'
    if re.search(pattern, content):
        replacement = footer_jsx + '\n      <WhatsAppFloat />'
        content = re.sub(pattern, replacement, content)
    else:
        # Add before final closing tags
        pattern = r'(</main>\s*\))'
        replacement = footer_jsx + '\n    </main>\n  )'
        content = re.sub(pattern, replacement, content)
    
    return content

def process_page(page_path, should_add):
    """Process a single page file"""
    try:
        content = page_path.read_text(encoding='utf-8')
        dir_name = page_path.parent.name
        
        if should_add:
            new_content = add_compact_footer_to_page(content, dir_name)
            
            if new_content != content:
                page_path.write_text(new_content, encoding='utf-8')
                return True
        
        return False
    except Exception as e:
        print(f"Error in {page_path}: {e}")
        return False

def main():
    app_dir = Path('/Applications/Interiara/app')
    
    all_dirs = sorted([d.name for d in app_dir.iterdir() if d.is_dir() and (d / 'page.tsx').exists()])
    
    print(f"🚀 Adding compact location footers to area pages")
    print("=" * 80)
    
    added_count = 0
    skipped_count = 0
    
    for idx, dir_name in enumerate(all_dirs, 1):
        page_path = app_dir / dir_name / 'page.tsx'
        should_add = should_add_footer(dir_name)
        
        if page_path.exists():
            if process_page(page_path, should_add):
                added_count += 1
            elif not should_add:
                skipped_count += 1
        
        if idx % 500 == 0:
            print(f"✅ Progress: {idx}/{len(all_dirs)} pages processed ({added_count} updated)")
    
    print("=" * 80)
    print(f"🎉 Complete!")
    print(f"✅ Added compact footers to: {added_count} area pages")
    print(f"⏭️  Skipped: {skipped_count} general/home pages")
    print(f"📊 Total pages: {len(all_dirs)}")

if __name__ == "__main__":
    main()
