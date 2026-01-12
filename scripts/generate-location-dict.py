#!/usr/bin/env python3
"""
Update comprehensive-page-generator.py to include all location variations
"""

import json
from pathlib import Path

ALL_LOCATIONS = [
    {"slug": "al-barsha", "name": "Al Barsha"},
    {"slug": "al-barsha-south", "name": "Al Barsha South"},
    {"slug": "al-furjan", "name": "Al Furjan"},
    {"slug": "al-hamriya", "name": "Al Hamriya"},
    {"slug": "al-jaddaf", "name": "Al Jaddaf"},
    {"slug": "al-karama", "name": "Al Karama"},
    {"slug": "al-khawaneej", "name": "Al Khawaneej"},
    {"slug": "al-mizhar", "name": "Al Mizhar"},
    {"slug": "al-quoz", "name": "Al Quoz"},
    {"slug": "al-safa", "name": "Al Safa"},
    {"slug": "al-satwa", "name": "Al Satwa"},
    {"slug": "al-warqaa", "name": "Al Warqaa"},
    {"slug": "al-wasl", "name": "Al Wasl"},
    {"slug": "arabian-ranches", "name": "Arabian Ranches"},
    {"slug": "bur-dubai", "name": "Bur Dubai"},
    {"slug": "business-bay", "name": "Business Bay"},
    {"slug": "city-walk", "name": "City Walk"},
    {"slug": "culture-village", "name": "Culture Village"},
    {"slug": "deira", "name": "Deira"},
    {"slug": "difc", "name": "DIFC"},
    {"slug": "discovery-gardens", "name": "Discovery Gardens"},
    {"slug": "discovery-hills", "name": "Discovery Hills"},
    {"slug": "downtown-dubai", "name": "Downtown Dubai"},
    {"slug": "dubai-creek-harbour", "name": "Dubai Creek Harbour"},
    {"slug": "dubai-design-district", "name": "Dubai Design District"},
    {"slug": "dubai-festival-city", "name": "Dubai Festival City"},
    {"slug": "dubai-harbour", "name": "Dubai Harbour"},
    {"slug": "dubai-hills", "name": "Dubai Hills"},
    {"slug": "dubai-hills-estate", "name": "Dubai Hills Estate"},
    {"slug": "dubai-marina", "name": "Dubai Marina"},
    {"slug": "emirates-hills", "name": "Emirates Hills"},
    {"slug": "jbr", "name": "JBR"},
    {"slug": "jlt", "name": "JLT"},
    {"slug": "jumeirah", "name": "Jumeirah"},
    {"slug": "jvc", "name": "JVC"},
    {"slug": "jvt", "name": "JVT"},
    {"slug": "lakes", "name": "Lakes"},
    {"slug": "marina", "name": "Marina"},
    {"slug": "meadows", "name": "Meadows"},
    {"slug": "mirdif", "name": "Mirdif"},
    {"slug": "palm-jumeirah", "name": "Palm Jumeirah"},
    {"slug": "sheikh-zayed-road", "name": "Sheikh Zayed Road"},
    {"slug": "springs", "name": "Springs"},
    {"slug": "the-sustainable-city", "name": "The Sustainable City"},
    {"slug": "town-square", "name": "Town Square"},
    {"slug": "umm-suqeim", "name": "Umm Suqeim"},
]

# Generate location variations Python code
location_dict_code = "LOCATION_VARIATIONS = {\n"

for location in ALL_LOCATIONS:
    slug = location["slug"]
    name = location["name"]
    
    location_dict_code += f'''    "{slug}": {{
        "full_name": "{name}",
        "description": "premium {name} area in Dubai",
        "characteristics": "diverse properties, professional services, vibrant community",
        "demographics": "residents and businesses in {name}",
        "design_style": "professional, contemporary, functional",
    }},
'''

location_dict_code += "}\n"

# Print for reference
print("Generated LOCATION_VARIATIONS code:")
print(location_dict_code[:500])
print("...")
print(f"\nTotal locations: {len(ALL_LOCATIONS)}")
print("\nSave this to comprehensive-page-generator.py to replace the old LOCATION_VARIATIONS dict")
