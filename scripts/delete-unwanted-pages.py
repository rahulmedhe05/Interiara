#!/usr/bin/env python3
"""Delete unwanted service-based pages, keeping only specified location pages"""

import shutil
from pathlib import Path

# Tier 1 cities - Ultra High Intent
TIER_1_CITIES = [
    "downtown-dubai",
    "business-bay",
    "dubai-marina",
    "palm-jumeirah",
    "jumeirah",
    "jbr",  # Jumeirah Beach Residence
    "dubai-hills-estate",
    "arabian-ranches",
    "al-wasl",
    "dubai-creek-harbour",
]

# Tier 2 cities - High Intent Residential + Villa Demand
TIER_2_CITIES = [
    "jlt",  # Jumeirah Lake Towers
    "al-barsha",
    "dubai-festival-city",
    "city-walk",
    "umm-suqeim",
    "al-safa",
    "meadows",
    "springs",
    "the-villa",  # The Villa (Dubailand)
    "nad-al-sheba",
]

# Tier 3 cities - Volume + Growing Areas
TIER_3_CITIES = [
    "jvc",  # Jumeirah Village Circle
    "jvt",  # Jumeirah Village Triangle
    "dubai-sports-city",
    "town-square",
    "dubai-south",
    "al-furjan",
    "al-quoz",
    "mirdif",
    "dubai-design-district",
    "dubai-land",
]

# Combine all allowed cities
ALLOWED_CITIES = set(TIER_1_CITIES + TIER_2_CITIES + TIER_3_CITIES)

# Services to DELETE (all of these)
SERVICES_TO_DELETE = [
    "luxury-interior-design",
    "villa-interior-design",
    "penthouse-interior-design",
    "residential-interior-design",
    "office-interior-design",
    "office-fit-out",
    "commercial-interior-design",
    "hotel-interior-design",
    "restaurant-interior-design",
    "retail-shop-interior-design",
    "clinic-interior-design",
    "healthcare-interior-design",
    "salon-interior-design",
    "spa-interior-design",
    "co-working-space-interior-design",
    "custom-furniture-design",
    "modular-kitchens",
    "wardrobe-design",
    "closet-design",
    "home-remodeling",
    "home-renovation",
    "smart-home-interior-design",
    "lighting-design",
    "3d-interior-rendering",
    "outdoor-living-design",
]

def extract_location_from_dir(dir_name):
    """Extract location from directory name like 'luxury-interior-design-al-barsha-dubai'"""
    # Remove -dubai suffix first
    if dir_name.endswith("-dubai"):
        dir_name = dir_name[:-6]
    
    # Try to find which service this belongs to
    for service in SERVICES_TO_DELETE:
        if dir_name.startswith(service + "-"):
            location_part = dir_name[len(service) + 1:]
            return location_part, service
    
    return None, None

def should_delete_directory(dir_name):
    """Determine if a directory should be deleted"""
    if not dir_name.endswith("-dubai"):
        return False
    
    location, service = extract_location_from_dir(dir_name)
    
    if service is None:
        # Not a service-based page, keep it
        return False
    
    if location is None:
        # Can't determine location, keep it
        return False
    
    # Check if location is in allowed cities
    if location not in ALLOWED_CITIES:
        # Location not in allowed list, DELETE
        return True
    
    # Location is allowed, keep this directory
    return False

def main():
    app_dir = Path("/Applications/Interiara/app")
    
    if not app_dir.exists():
        print(f"Error: {app_dir} does not exist")
        return
    
    dirs_to_delete = []
    dirs_to_keep = []
    
    # Scan all directories
    for dir_path in sorted(app_dir.iterdir()):
        if dir_path.is_dir() and not dir_path.name.startswith('.'):
            if should_delete_directory(dir_path.name):
                dirs_to_delete.append(dir_path)
            else:
                location, service = extract_location_from_dir(dir_path.name)
                if service:
                    dirs_to_keep.append(dir_path.name)
    
    print(f"Found {len(dirs_to_delete)} directories to DELETE")
    print(f"Found {len(dirs_to_keep)} directories to KEEP (from allowed cities)")
    print()
    
    if dirs_to_delete:
        print("Directories to DELETE:")
        for dir_path in dirs_to_delete[:10]:  # Show first 10
            print(f"  - {dir_path.name}")
        if len(dirs_to_delete) > 10:
            print(f"  ... and {len(dirs_to_delete) - 10} more")
        print()
        
        # Confirm deletion
        response = input(f"Delete {len(dirs_to_delete)} directories? (yes/no): ").strip().lower()
        if response == 'yes':
            deleted_count = 0
            for dir_path in dirs_to_delete:
                try:
                    shutil.rmtree(dir_path)
                    deleted_count += 1
                    if deleted_count % 10 == 0:
                        print(f"Deleted {deleted_count}...")
                except Exception as e:
                    print(f"Error deleting {dir_path.name}: {e}")
            
            print(f"Successfully deleted {deleted_count} directories")
        else:
            print("Deletion cancelled")
    else:
        print("No directories to delete")

if __name__ == "__main__":
    main()
