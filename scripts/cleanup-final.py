#!/usr/bin/env python3
"""Clean up - delete ALL remaining pages not for allowed cities"""

import shutil
from pathlib import Path

# ONLY ALLOWED CITIES
ALLOWED_CITIES = {
    # Tier 1
    "downtown-dubai",
    "business-bay",
    "dubai-marina",
    "palm-jumeirah",
    "jumeirah",
    "jbr",
    "dubai-hills-estate",
    "arabian-ranches",
    "al-wasl",
    "dubai-creek-harbour",
    # Tier 2
    "jlt",
    "al-barsha",
    "dubai-festival-city",
    "city-walk",
    "umm-suqeim",
    "al-safa",
    "meadows",
    "springs",
    "the-villa",
    "nad-al-sheba",
    # Tier 3
    "jvc",
    "jvt",
    "dubai-sports-city",
    "town-square",
    "dubai-south",
    "al-furjan",
    "al-quoz",
    "mirdif",
    "dubai-design-district",
    "dubai-land",
}

def extract_city_from_dir(dir_name):
    """Extract city from directory name, checking all possible city patterns"""
    if not dir_name.endswith("-dubai"):
        return None
    
    # Remove -dubai suffix
    base = dir_name[:-6]
    
    # Try matching from longest to shortest city name
    # to handle cases like "al-barsha-south-dubai" properly
    sorted_cities = sorted(ALLOWED_CITIES, key=len, reverse=True)
    
    for city in sorted_cities:
        if base.endswith("-" + city):
            return city
        elif base == city:
            return city
    
    return None

def should_delete(dir_name):
    """Check if directory should be deleted"""
    if not dir_name.endswith("-dubai"):
        return False
    
    city = extract_city_from_dir(dir_name)
    
    # Delete if no city found, or city not allowed
    if city is None:
        return True
    
    return False

def main():
    app_dir = Path("/Applications/Interiara/app")
    
    dirs_to_delete = []
    dirs_to_keep = []
    
    for dir_path in sorted(app_dir.iterdir()):
        if dir_path.is_dir() and not dir_path.name.startswith('.'):
            if dir_path.name.endswith("-dubai"):
                if should_delete(dir_path.name):
                    dirs_to_delete.append(dir_path)
                else:
                    city = extract_city_from_dir(dir_path.name)
                    dirs_to_keep.append((dir_path.name, city))
    
    print(f"Directories to DELETE: {len(dirs_to_delete)}")
    print(f"Directories to KEEP: {len(dirs_to_keep)}")
    print()
    
    if dirs_to_delete:
        print("Sample directories to DELETE:")
        for dir_path in dirs_to_delete[:15]:
            print(f"  - {dir_path.name}")
        if len(dirs_to_delete) > 15:
            print(f"  ... and {len(dirs_to_delete) - 15} more")
        print()
        
        response = input(f"Delete {len(dirs_to_delete)} directories? (yes/no): ").strip().lower()
        
        if response == 'yes':
            deleted_count = 0
            for dir_path in dirs_to_delete:
                try:
                    shutil.rmtree(dir_path)
                    deleted_count += 1
                    if deleted_count % 50 == 0:
                        print(f"Deleted {deleted_count}...")
                except Exception as e:
                    print(f"Error deleting {dir_path.name}: {e}")
            
            print(f"\nSuccessfully deleted {deleted_count} directories")
            print(f"Remaining directories: {len(dirs_to_keep)}")
        else:
            print("Deletion cancelled")
    else:
        print("No directories to delete")
        print("\nRemaining city breakdown:")
        city_counts = {}
        for dir_name, city in dirs_to_keep:
            city_counts[city] = city_counts.get(city, 0) + 1
        
        for city in sorted(city_counts.keys()):
            print(f"  {city}: {city_counts[city]} pages")

if __name__ == "__main__":
    main()
