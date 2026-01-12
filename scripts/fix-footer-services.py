#!/usr/bin/env python3
import os
import re
from collections import defaultdict

# Directory containing all pages
app_dir = "/Applications/Interiara/app"

# Collect all services by location
services_by_location = defaultdict(set)

print("🔍 Scanning all pages to extract services by location...")
print("=" * 60)

# First pass: collect all services for each location
for dir_name in os.listdir(app_dir):
    dir_path = os.path.join(app_dir, dir_name)
    if not os.path.isdir(dir_path) or not dir_name.count('-') >= 2:
        continue
    
    # Extract service and location from directory name
    parts = dir_name.rsplit('-dubai', 1)
    if len(parts) != 2:
        continue
    
    slug = parts[0]
    slug_parts = slug.split('-')
    
    if len(slug_parts) < 2:
        continue
    
    service = slug_parts[0]  # First part is the service
    location_parts = slug_parts[1:]
    location = ' '.join(location_parts)
    
    # Capitalize service name for display
    service_display = service.replace('-', ' ').title()
    
    services_by_location[location].add(service_display)

# Convert sets to sorted lists
services_by_location = {loc: sorted(list(services)) for loc, services in services_by_location.items()}

print(f"✅ Found {len(services_by_location)} unique locations")
print(f"📊 Extracting services for each location...\n")

# Sample locations
for loc, services in list(services_by_location.items())[:5]:
    print(f"  • {loc}: {', '.join(services[:3])}...")

print(f"\n🚀 Updating pages with correct service lists...")
print("=" * 60)

updated_count = 0
skipped_count = 0
progress_interval = 500

# Second pass: update pages with service lists
for dir_name in sorted(os.listdir(app_dir)):
    dir_path = os.path.join(app_dir, dir_name)
    page_file = os.path.join(dir_path, "page.tsx")
    
    if not os.path.isfile(page_file):
        continue
    
    if not dir_name.count('-') >= 2:
        skipped_count += 1
        continue
    
    # Extract location
    parts = dir_name.rsplit('-dubai', 1)
    if len(parts) != 2:
        skipped_count += 1
        continue
    
    slug = parts[0]
    slug_parts = slug.split('-')
    
    if len(slug_parts) < 2:
        skipped_count += 1
        continue
    
    service = slug_parts[0]
    location_parts = slug_parts[1:]
    location = ' '.join(location_parts)
    
    # Format location with proper capitalization
    location_display = location.title()
    
    # Skip if location not in our collected services
    if location not in services_by_location:
        skipped_count += 1
        continue
    
    services_list = services_by_location[location]
    
    # Read the page file
    with open(page_file, 'r') as f:
        content = f.read()
    
    # Find and replace the CompactLocationFooter component
    # Match the multi-line component with any allServices format
    old_pattern = r'<CompactLocationFooter\s+location="[^"]*"\s+service="[^"]*"\s+serviceUrl="[^"]*"\s+allServices=\{[^}]*\}\s*/>'
    
    # Create new component with CORRECT array syntax: allServices={["item1", "item2", ...]}
    services_str = ', '.join([f'"{s}"' for s in services_list])
    new_component = f'''<CompactLocationFooter 
        location="{location_display}" 
        service="{services_list[0] if services_list else 'Design'}" 
        serviceUrl="/{dir_name}"
        allServices={{[{services_str}]}}
      />'''
    
    new_content = re.sub(old_pattern, new_component, content, flags=re.DOTALL)
    
    if new_content != content:
        # Write back
        with open(page_file, 'w') as f:
            f.write(new_content)
        
        updated_count += 1
    else:
        skipped_count += 1
    
    if updated_count % progress_interval == 0:
        print(f"✅ Progress: {updated_count}/5165 pages processed")

print(f"\n🎉 Complete!")
print(f"✅ Updated pages: {updated_count}")
print(f"⏭️  Skipped pages: {skipped_count}")
print(f"📊 Total locations: {len(services_by_location)}")
