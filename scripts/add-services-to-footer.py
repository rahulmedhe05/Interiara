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

print(f"\n🚀 Updating pages with service lists...")
print("=" * 60)

updated_count = 0
skipped_count = 0
progress_interval = 500

# Second pass: update pages with service lists
for dir_name in os.listdir(app_dir):
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
    
    location_parts = slug_parts[1:]
    location = ' '.join(location_parts)
    
    # Skip if location not in our collected services
    if location not in services_by_location:
        skipped_count += 1
        continue
    
    services_list = services_by_location[location]
    
    # Read the page file
    with open(page_file, 'r') as f:
        content = f.read()
    
    # Skip if already updated (has allServices prop)
    if 'allServices=' in content:
        skipped_count += 1
        continue
    
    # Create services array string
    services_array = ', '.join([f'"{s}"' for s in services_list])
    
    # Update the CompactLocationFooter component
    old_pattern = r'<CompactLocationFooter\s+location="[^"]*"\s+service="[^"]*"\s+serviceUrl="[^"]*"\s*/>'
    new_component = f'''<CompactLocationFooter 
        location="{location}" 
        service="{services_list[0] if services_list else 'Design'}" 
        serviceUrl="/{dir_name}"
        allServices={{{services_array}}}
      />'''
    
    content = re.sub(old_pattern, new_component, content)
    
    # Write back
    with open(page_file, 'w') as f:
        f.write(content)
    
    updated_count += 1
    
    if updated_count % progress_interval == 0:
        print(f"✅ Progress: {updated_count}/5165 pages processed")

print(f"\n🎉 Complete!")
print(f"✅ Updated pages: {updated_count}")
print(f"⏭️  Skipped pages: {skipped_count}")
print(f"📊 Total locations: {len(services_by_location)}")
