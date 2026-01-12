#!/usr/bin/env python3
"""Fix function names across all page.tsx files to match their service and location"""

import os
import re
from pathlib import Path

def get_service_and_location_from_dir(dir_name):
    """Extract service and location from directory name"""
    # Split by last occurrence of '-dubai'
    parts = dir_name.rsplit('-dubai', 1)[0]  # Remove trailing '-dubai'
    
    # Split the remaining by hyphens
    components = parts.split('-')
    
    # Find where location starts (heuristic: locations usually have 2+ parts)
    # Services typically have 2-3 words, locations have 1-3 words
    
    # Common location indicators
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

def format_function_name(service, location):
    """Format service and location into function name"""
    # Convert to title case and remove hyphens
    service_title = service.replace('-', ' ').title().replace(' ', '')
    location_title = location.replace('-', ' ').title().replace(' ', '')
    return f"{service_title}{location_title}"

def fix_page_file(file_path):
    """Fix the function name in a page.tsx file"""
    try:
        content = file_path.read_text(encoding='utf-8')
        
        # Extract service and location from directory name
        dir_name = file_path.parent.name
        service, location = get_service_and_location_from_dir(dir_name)
        new_function_name = format_function_name(service, location)
        
        # Find the old function name pattern: export default function SomeName() {
        # Match function names with spaces (e.g., "TerraceInteriorDesignAl Karama Dubai")
        pattern = r'export default function ([^\(]+)\(\) {'
        match = re.search(pattern, content)
        
        if match:
            old_function_name = match.group(1)
            
            # Only replace if different
            if old_function_name != new_function_name:
                old_line = match.group(0)
                new_line = f'export default function {new_function_name}() {{'
                new_content = content.replace(old_line, new_line)
                file_path.write_text(new_content, encoding='utf-8')
                return True
        
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    app_dir = Path('/Applications/Interiara/app')
    
    # Find all page.tsx files
    page_files = list(app_dir.glob('*/page.tsx'))
    total = len(page_files)
    
    print(f"🚀 Fixing function names for {total} pages")
    print("=" * 60)
    
    fixed_count = 0
    
    for idx, file_path in enumerate(sorted(page_files), 1):
        if fix_page_file(file_path):
            fixed_count += 1
        
        if idx % 100 == 0:
            print(f"✅ Progress: {idx}/{total} pages processed ({fixed_count} fixed)")
    
    print("=" * 60)
    print(f"🎉 Complete!")
    print(f"✅ Fixed: {fixed_count}")
    print(f"📊 Total: {total} pages")

if __name__ == "__main__":
    main()
