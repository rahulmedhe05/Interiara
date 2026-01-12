#!/usr/bin/env python3
"""Generate location-specific footer components with internal linking"""

import json
from pathlib import Path
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

def main():
    app_dir = Path('/Applications/Interiara/app')
    
    # Get all directories and group by location
    all_dirs = sorted([d.name for d in app_dir.iterdir() if d.is_dir() and (d / 'page.tsx').exists()])
    
    location_services = defaultdict(list)
    
    print(f"🚀 Creating location-specific footer components")
    print("=" * 60)
    
    for dir_name in all_dirs:
        service, location = get_service_and_location_from_dir(dir_name)
        location_services[location].append({
            'dir': dir_name,
            'service': service,
            'service_formatted': format_text(service),
            'url': f"/{dir_name}"
        })
    
    print(f"✅ Found {len(location_services)} unique locations")
    print(f"✅ Total services: {len(all_dirs)}")
    
    # Generate footer components for each location
    footers_data = {}
    
    for location, services in sorted(location_services.items()):
        location_formatted = format_text(location)
        
        # Group services into columns (4 columns for better layout)
        services_sorted = sorted(services, key=lambda x: x['service_formatted'])
        columns = 4
        services_per_column = (len(services_sorted) + columns - 1) // columns
        
        footers_data[location] = {
            'location': location,
            'location_formatted': location_formatted,
            'total_services': len(services),
            'services': services_sorted
        }
    
    # Create footer data JSON
    output_file = Path('/Applications/Interiara/footer-location-data.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(footers_data, f, indent=2, ensure_ascii=False)
    
    print(f"📁 Saved footer data to: {output_file}")
    
    # Create a sample footer component
    sample_location = list(footers_data.keys())[0]
    sample_data = footers_data[sample_location]
    
    print(f"\n📊 Sample Footer Data ({sample_data['location_formatted']}):")
    print(f"   Total Services: {sample_data['total_services']}")
    print(f"   First 5 Services:")
    for service in sample_data['services'][:5]:
        print(f"   - {service['service_formatted']}")
    
    # Create footer component template file
    footer_component = '''// Location-Specific Footer Component
// This component displays all services available in a specific location
// with internal linking for better SEO and user navigation

import Link from "next/link"

export function LocationFooter({ location, services }) {
  if (!location || !services || services.length === 0) {
    return null
  }

  // Group services into columns
  const columns = 4
  const servicesPerColumn = Math.ceil(services.length / columns)
  const serviceColumns = []

  for (let i = 0; i < columns; i++) {
    const start = i * servicesPerColumn
    const end = Math.min(start + servicesPerColumn, services.length)
    if (start < services.length) {
      serviceColumns.push(services.slice(start, end))
    }
  }

  return (
    <section className="py-16 bg-muted/50 border-t">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            All {location} Services
          </h2>
          <p className="text-muted-foreground mb-8">
            Explore our complete range of interior design services available in {location}. 
            Each service is tailored to meet the unique needs and preferences of this area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceColumns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-3">
              {column.map((service) => (
                <Link
                  key={service.url}
                  href={service.url}
                  className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium"
                >
                  {service.service_formatted}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            Looking for a specific service in {location}? 
            <Link href="/" className="text-primary hover:underline ml-1">
              Explore all our services
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
'''

    footer_component_file = Path('/Applications/Interiara/components/location-footer.tsx')
    footer_component_file.write_text(footer_component, encoding='utf-8')
    print(f"📄 Created footer component: {footer_component_file}")
    
    print("\n" + "=" * 60)
    print(f"✅ Footer data prepared for {len(footers_data)} locations")

if __name__ == "__main__":
    main()
