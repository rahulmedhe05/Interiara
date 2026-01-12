#!/usr/bin/env python3
"""Update all pages to include location-specific footer with internal linking"""

import json
from pathlib import Path
import re
from collections import defaultdict

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

def load_footer_data():
    """Load footer location data"""
    with open('/Applications/Interiara/footer-location-data.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_footer_jsx(location, services):
    """Generate JSX code for location footer"""
    location_formatted = format_text(location)
    
    # Group services into columns (4 columns)
    columns = 4
    services_per_column = (len(services) + columns - 1) // columns
    
    jsx = f'''
      {{/* Location Services Footer */}}
      <section className="py-16 bg-muted/50 border-t">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              All {location_formatted} Services
            </h2>
            <p className="text-muted-foreground mb-8">
              Explore our complete range of interior design services available in {location_formatted}. 
              Each service is tailored to meet the unique needs and preferences of this area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
'''
    
    # Add service columns
    for col_idx in range(columns):
        start = col_idx * services_per_column
        end = min(start + services_per_column, len(services))
        
        jsx += f'''            <div className="space-y-3">
'''
        for service_data in services[start:end]:
            service_formatted = format_text(service_data['service'])
            url = service_data['url']
            jsx += f'''              <Link href="{url}" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                {service_formatted}
              </Link>
'''
        jsx += f'''            </div>
'''
    
    jsx += f'''          </div>

          <div className="mt-12 pt-8 border-t">
            <p className="text-center text-sm text-muted-foreground">
              Looking for a specific service in {location_formatted}? 
              <Link href="/" className="text-primary hover:underline ml-1">
                Explore all our services
              </Link>
            </p>
          </div>
        </div>
      </section>
'''
    
    return jsx

def update_page_with_location_footer(page_path, location, services):
    """Update a page file to include location footer"""
    try:
        content = page_path.read_text(encoding='utf-8')
        
        # Check if Link import exists
        if 'import Link from "next/link"' not in content:
            # Add Link import after other imports
            import_pattern = r'(import { Button } from "@/components/ui/button")'
            replacement = r'\1\nimport Link from "next/link"'
            content = re.sub(import_pattern, replacement, content)
        
        # Generate footer JSX
        footer_jsx = generate_footer_jsx(location, services)
        
        # Find the location to insert footer (before final Footer component)
        pattern = r'(<Footer />)'
        replacement = footer_jsx + '\n\n      <Footer />'
        content = re.sub(pattern, replacement, content)
        
        page_path.write_text(content, encoding='utf-8')
        return True
    except Exception as e:
        return False

def main():
    app_dir = Path('/Applications/Interiara/app')
    footer_data = load_footer_data()
    
    # Group all directories by location
    location_pages = defaultdict(list)
    
    all_dirs = sorted([d.name for d in app_dir.iterdir() if d.is_dir() and (d / 'page.tsx').exists()])
    
    for dir_name in all_dirs:
        service, location = get_service_and_location_from_dir(dir_name)
        location_pages[location].append({
            'dir': dir_name,
            'service': service,
            'service_formatted': format_text(service),
            'url': f"/{dir_name}"
        })
    
    print(f"🚀 Adding location-specific footer to all pages")
    print("=" * 60)
    
    updated_count = 0
    total = len(all_dirs)
    
    for idx, dir_name in enumerate(all_dirs, 1):
        service, location = get_service_and_location_from_dir(dir_name)
        page_path = app_dir / dir_name / 'page.tsx'
        
        if page_path.exists() and location in location_pages:
            services = sorted(location_pages[location], key=lambda x: x['service_formatted'])
            if update_page_with_location_footer(page_path, location, services):
                updated_count += 1
        
        if idx % 500 == 0:
            print(f"✅ Progress: {idx}/{total} pages processed")
    
    print("=" * 60)
    print(f"🎉 Complete!")
    print(f"✅ Updated: {updated_count}/{total} pages with location-specific footers")
    print(f"📊 Coverage: {len(location_pages)} unique locations")
    print(f"\n📝 Each footer includes:")
    print(f"   - All services available in that location")
    print(f"   - Internal linking to each service page")
    print(f"   - Location-specific heading and description")
    print(f"   - Grid layout (4 columns on desktop)")

if __name__ == "__main__":
    main()
