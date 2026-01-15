#!/usr/bin/env python3
"""Verify that only allowed city pages remain"""

from pathlib import Path
from collections import defaultdict

# Tier 1, 2, 3 cities
TIER_1_CITIES = [
    "downtown-dubai", "business-bay", "dubai-marina", "palm-jumeirah",
    "jumeirah", "jbr", "dubai-hills-estate", "arabian-ranches",
    "al-wasl", "dubai-creek-harbour",
]
TIER_2_CITIES = [
    "jlt", "al-barsha", "dubai-festival-city", "city-walk",
    "umm-suqeim", "al-safa", "meadows", "springs",
    "the-villa", "nad-al-sheba",
]
TIER_3_CITIES = [
    "jvc", "jvt", "dubai-sports-city", "town-square",
    "dubai-south", "al-furjan", "al-quoz", "mirdif",
    "dubai-design-district", "dubai-land",
]

ALLOWED_CITIES = set(TIER_1_CITIES + TIER_2_CITIES + TIER_3_CITIES)

def extract_location_from_dir(dir_name):
    """Extract location from directory name"""
    if dir_name.endswith("-dubai"):
        dir_name = dir_name[:-6]
    
    # Split by hyphens and find which part is the city
    parts = dir_name.split('-')
    
    # Try to match against known cities
    for i in range(len(parts), 0, -1):
        potential_city = '-'.join(parts[i-1:])
        if potential_city in ALLOWED_CITIES:
            return potential_city
    
    return None

def main():
    app_dir = Path("/Applications/Interiara/app")
    
    cities_found = defaultdict(int)
    unexpected_dirs = []
    
    for dir_path in sorted(app_dir.iterdir()):
        if dir_path.is_dir() and dir_path.name.endswith("-dubai"):
            location = extract_location_from_dir(dir_path.name)
            
            if location:
                cities_found[location] += 1
            else:
                unexpected_dirs.append(dir_path.name)
    
    print("=== VERIFICATION RESULTS ===\n")
    
    # Show cities by tier
    print("TIER 1 - Ultra High Intent:")
    for city in sorted(TIER_1_CITIES):
        count = cities_found.get(city, 0)
        print(f"  {city}: {count} pages")
    print()
    
    print("TIER 2 - High Intent Residential:")
    for city in sorted(TIER_2_CITIES):
        count = cities_found.get(city, 0)
        print(f"  {city}: {count} pages")
    print()
    
    print("TIER 3 - Volume + Growing Areas:")
    for city in sorted(TIER_3_CITIES):
        count = cities_found.get(city, 0)
        print(f"  {city}: {count} pages")
    print()
    
    total_pages = sum(cities_found.values())
    print(f"Total city-specific pages: {total_pages}")
    
    if unexpected_dirs:
        print(f"\n⚠️  Unexpected directories found ({len(unexpected_dirs)}):")
        for dir_name in unexpected_dirs[:10]:
            print(f"  - {dir_name}")
        if len(unexpected_dirs) > 10:
            print(f"  ... and {len(unexpected_dirs) - 10} more")
    else:
        print("\n✅ All remaining directories are for allowed cities!")

if __name__ == "__main__":
    main()
