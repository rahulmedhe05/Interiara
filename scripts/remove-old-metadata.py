#!/usr/bin/env python3
"""Remove existing metadata and regenerate with new format"""

import os
import re
from pathlib import Path

def remove_existing_metadata(file_path):
    """Remove the export const metadata block if it exists"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find and remove metadata block
    # Pattern: export const metadata = { ... }
    pattern = r'\n*export const metadata = \{[\s\S]*?\n\}\n*'
    
    new_content = re.sub(pattern, '\n', content)
    
    # Clean up multiple newlines
    new_content = re.sub(r'\n\n+export', '\n\nexport', new_content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    app_dir = Path("/Applications/Interiara/app")
    
    removed_count = 0
    
    for dir_path in sorted(app_dir.iterdir()):
        if dir_path.is_dir() and dir_path.name.endswith("-dubai"):
            page_file = dir_path / "page.tsx"
            if page_file.exists():
                try:
                    remove_existing_metadata(str(page_file))
                    removed_count += 1
                except Exception as e:
                    print(f"Error processing {dir_path.name}: {e}")
    
    print(f"✅ Removed existing metadata from {removed_count} pages")

if __name__ == "__main__":
    main()
