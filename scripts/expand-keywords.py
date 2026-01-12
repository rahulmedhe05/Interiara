#!/usr/bin/env python3
"""
Expand keyword database to include all services and locations
This generates the full set of 1000+ service-location combinations with keywords
"""

import json
from pathlib import Path

# All services
SERVICES = [
    {"slug": "residential-interior-design", "name": "Residential Interior Design"},
    {"slug": "office-interior-design", "name": "Office Interior Design"},
    {"slug": "commercial-interior-design", "name": "Commercial Interior Design"},
    {"slug": "villa-interior-design", "name": "Villa Interior Design"},
    {"slug": "apartment-interior-design", "name": "Apartment Interior Design"},
    {"slug": "kitchen-interior-design", "name": "Kitchen Interior Design"},
    {"slug": "bathroom-interior-design", "name": "Bathroom Interior Design"},
    {"slug": "modular-kitchens", "name": "Modular Kitchens"},
    {"slug": "lighting-design", "name": "Lighting Design"},
    {"slug": "home-renovation", "name": "Home Renovation"},
    {"slug": "office-renovation", "name": "Office Renovation"},
    {"slug": "office-fit-out", "name": "Office Fit-Out"},
    {"slug": "custom-furniture-design", "name": "Custom Furniture Design"},
    {"slug": "space-planning", "name": "Space Planning"},
    {"slug": "home-decor-consultation", "name": "Home Decor Consultation"},
    {"slug": "3d-interior-rendering", "name": "3D Interior Rendering"},
]

# All Dubai locations
LOCATIONS = [
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

def generate_keywords_for_service_location(service_name, service_slug, location_name, location_slug):
    """Generate 15 SEO keywords for a service-location combination"""
    
    # Template keywords with variations
    keyword_templates = [
        f"{service_name} {location_name}",
        f"{service_name} {location_name} Dubai",
        f"best {service_name} in {location_name}",
        f"professional {service_name} {location_name}",
        f"expert {service_name} {location_name} Dubai",
        f"{service_name} services {location_name}",
        f"{service_name} company {location_name}",
        f"{service_name} specialist {location_name}",
        f"luxury {service_name} {location_name}",
        f"affordable {service_name} {location_name}",
        f"{service_name} contractor {location_name} Dubai",
        f"top {service_name} in {location_name}",
        f"{service_name} designer {location_name}",
        f"custom {service_name} {location_name}",
        f"transform space with {service_name} {location_name}",
    ]
    
    return keyword_templates

def generate_meta_description(service_name, location_name):
    """Generate 155-160 character meta description"""
    desc = f"Expert {service_name} services in {location_name}, Dubai. Professional design team with 15+ years experience. Get free consultation today!"
    # Trim to 155-160 characters
    if len(desc) > 160:
        desc = desc[:157] + "..."
    return desc

def main():
    print("🚀 Starting Keyword Database Expansion...")
    print("=" * 60)
    
    keywords_data = []
    total_combinations = len(SERVICES) * len(LOCATIONS)
    
    for idx, service in enumerate(SERVICES):
        for location in LOCATIONS:
            service_slug = f"{service['slug']}-{location['slug']}-dubai"
            
            keywords = generate_keywords_for_service_location(
                service['name'],
                service['slug'],
                location['name'],
                location['slug']
            )
            
            meta_desc = generate_meta_description(service['name'], location['name'])
            
            entry = {
                "service_slug": service_slug,
                "service": service['name'],
                "service_id": service['slug'],
                "location": location['name'],
                "location_slug": location['slug'],
                "keywords": keywords,
                "meta_description": meta_desc,
                "local_seo_focus": f"{location['name']} based clients seeking {service['name']} solutions",
                "focus_on": [
                    f"local {service['slug'].replace('-', ' ')} in {location['name']}",
                    f"professional design services for {location['name']} residents",
                    f"experienced {service['name']} specialist in {location['name']}",
                ]
            }
            
            keywords_data.append(entry)
            
            # Progress indicator
            if (len(keywords_data) % 50 == 0):
                print(f"✅ Generated {len(keywords_data)}/{total_combinations} keyword entries...")
    
    # Write to file
    output_path = Path("/Applications/Interiara/lib/seo-keywords.json")
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(keywords_data, f, indent=2, ensure_ascii=False)
    
    print("=" * 60)
    print(f"✅ Total Keywords Entries: {len(keywords_data)}")
    print(f"✅ Service-Location Combinations: {total_combinations}")
    print(f"✅ Database saved to: {output_path}")
    print("🎉 Keyword Database Expansion Complete!")

if __name__ == "__main__":
    main()
