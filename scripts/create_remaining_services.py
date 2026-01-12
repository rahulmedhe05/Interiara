#!/usr/bin/env python3
import json
import os

# Template services for all areas
services_template = [
    {"slug": "residential-interior-design-AREA", "serviceName": "Residential Interior Design AREA"},
    {"slug": "office-interior-design-AREA", "serviceName": "Office Interior Design AREA"},
    {"slug": "commercial-interior-design-AREA", "serviceName": "Commercial Interior Design AREA"},
    {"slug": "villa-interior-design-AREA", "serviceName": "Villa Interior Design AREA"},
    {"slug": "apartment-interior-design-AREA", "serviceName": "Apartment Interior Design AREA"},
    {"slug": "penthouse-interior-design-AREA", "serviceName": "Penthouse Interior Design AREA"},
    {"slug": "luxury-interior-design-AREA", "serviceName": "Luxury Interior Design AREA"},
    {"slug": "modern-interior-design-AREA", "serviceName": "Modern Interior Design AREA"},
    {"slug": "minimalist-interior-design-AREA", "serviceName": "Minimalist Interior Design AREA"},
    {"slug": "contemporary-interior-design-AREA", "serviceName": "Contemporary Interior Design AREA"},
    {"slug": "arabic-style-interior-design-AREA", "serviceName": "Arabic Style Interior Design AREA"},
    {"slug": "kitchen-interior-design-AREA", "serviceName": "Kitchen Interior Design AREA"},
    {"slug": "modular-kitchens-AREA", "serviceName": "Modular Kitchens AREA"},
    {"slug": "wardrobe-design-AREA", "serviceName": "Wardrobe Design AREA"},
    {"slug": "closet-design-AREA", "serviceName": "Closet Design AREA"},
    {"slug": "bathroom-interior-design-AREA", "serviceName": "Bathroom Interior Design AREA"},
    {"slug": "living-room-interior-design-AREA", "serviceName": "Living Room Interior Design AREA"},
    {"slug": "bedroom-interior-design-AREA", "serviceName": "Bedroom Interior Design AREA"},
    {"slug": "dining-room-interior-design-AREA", "serviceName": "Dining Room Interior Design AREA"},
    {"slug": "home-office-interior-design-AREA", "serviceName": "Home Office Interior Design AREA"},
    {"slug": "office-fit-out-AREA", "serviceName": "Office Fit Out AREA"},
    {"slug": "corporate-office-interior-design-AREA", "serviceName": "Corporate Office Interior Design AREA"},
    {"slug": "retail-shop-interior-design-AREA", "serviceName": "Retail Shop Interior Design AREA"},
    {"slug": "mall-interior-design-AREA", "serviceName": "Mall Interior Design AREA"},
    {"slug": "restaurant-interior-design-AREA", "serviceName": "Restaurant Interior Design AREA"},
    {"slug": "cafe-interior-design-AREA", "serviceName": "Cafe Interior Design AREA"},
    {"slug": "hotel-interior-design-AREA", "serviceName": "Hotel Interior Design AREA"},
    {"slug": "showroom-interior-design-AREA", "serviceName": "Showroom Interior Design AREA"},
    {"slug": "clinic-interior-design-AREA", "serviceName": "Clinic Interior Design AREA"},
    {"slug": "healthcare-interior-design-AREA", "serviceName": "Healthcare Interior Design AREA"},
    {"slug": "salon-interior-design-AREA", "serviceName": "Salon Interior Design AREA"},
    {"slug": "spa-interior-design-AREA", "serviceName": "Spa Interior Design AREA"},
    {"slug": "custom-furniture-design-AREA", "serviceName": "Custom Furniture Design AREA"},
    {"slug": "bespoke-furniture-design-AREA", "serviceName": "Bespoke Furniture Design AREA"},
    {"slug": "lighting-design-AREA", "serviceName": "Lighting Design AREA"},
    {"slug": "lighting-automation-AREA", "serviceName": "Lighting Automation AREA"},
    {"slug": "smart-lighting-AREA", "serviceName": "Smart Lighting AREA"},
    {"slug": "wall-flooring-design-AREA", "serviceName": "Wall & Flooring Design AREA"},
    {"slug": "wallpaper-design-AREA", "serviceName": "Wallpaper Design AREA"},
    {"slug": "wall-coverings-AREA", "serviceName": "Wall Coverings AREA"},
    {"slug": "window-blinds-AREA", "serviceName": "Window Blinds AREA"},
    {"slug": "window-curtains-AREA", "serviceName": "Window Curtains AREA"},
    {"slug": "drapes-AREA", "serviceName": "Drapes AREA"},
    {"slug": "home-decor-consultation-AREA", "serviceName": "Home Decor Consultation AREA"},
    {"slug": "color-theme-consultation-AREA", "serviceName": "Color Theme Consultation AREA"},
    {"slug": "art-consultation-AREA", "serviceName": "Art Consultation AREA"},
    {"slug": "home-remodeling-AREA", "serviceName": "Home Remodeling AREA"},
    {"slug": "home-renovation-AREA", "serviceName": "Home Renovation AREA"},
    {"slug": "office-renovation-AREA", "serviceName": "Office Renovation AREA"},
    {"slug": "space-planning-AREA", "serviceName": "Space Planning AREA"},
    {"slug": "interior-space-optimization-AREA", "serviceName": "Interior Space Optimization AREA"},
    {"slug": "3d-interior-rendering-AREA", "serviceName": "3D Interior Rendering AREA"},
    {"slug": "interior-visualization-AREA", "serviceName": "Interior Visualization AREA"},
    {"slug": "sustainable-interior-design-AREA", "serviceName": "Sustainable Interior Design AREA"},
    {"slug": "eco-friendly-interior-design-AREA", "serviceName": "Eco-Friendly Interior Design AREA"},
    {"slug": "smart-home-interior-design-AREA", "serviceName": "Smart Home Interior Design AREA"},
    {"slug": "acoustic-design-AREA", "serviceName": "Acoustic Design AREA"},
    {"slug": "soundproofing-design-AREA", "serviceName": "Soundproofing Design AREA"},
    {"slug": "balcony-interior-design-AREA", "serviceName": "Balcony Interior Design AREA"},
    {"slug": "terrace-interior-design-AREA", "serviceName": "Terrace Interior Design AREA"},
    {"slug": "outdoor-living-design-AREA", "serviceName": "Outdoor Living Design AREA"},
    {"slug": "media-room-interior-design-AREA", "serviceName": "Media Room Interior Design AREA"},
    {"slug": "home-theater-interior-design-AREA", "serviceName": "Home Theater Interior Design AREA"},
    {"slug": "kids-interior-design-AREA", "serviceName": "Kids Interior Design AREA"},
    {"slug": "childrens-room-interior-design-AREA", "serviceName": "Children's Room Interior Design AREA"},
    {"slug": "co-working-space-interior-design-AREA", "serviceName": "Co-Working Space Interior Design AREA"},
    {"slug": "gym-interior-design-AREA", "serviceName": "Gym Interior Design AREA"},
    {"slug": "fitness-studio-interior-design-AREA", "serviceName": "Fitness Studio Interior Design AREA"},
    {"slug": "event-hall-interior-design-AREA", "serviceName": "Event Hall Interior Design AREA"},
    {"slug": "banquet-hall-interior-design-AREA", "serviceName": "Banquet Hall Interior Design AREA"},
    {"slug": "budget-interior-solutions-AREA", "serviceName": "Budget Interior Solutions AREA"},
    {"slug": "affordable-interior-solutions-AREA", "serviceName": "Affordable Interior Solutions AREA"},
    {"slug": "interior-design-AREA", "serviceName": "Interior Design AREA"}
]

areas = [
    "dubai-harbour", "culture-village", "al-safouh", "discovery-hills", "dubai-marina-heights",
    "silicon-oasis-villas", "the-sustainable-city", "al-furjan", "dubai-marina-promenade", "city-walk",
    "jebel-ali", "dubai-waterfront", "dubai-marina-residences", "al-satwa", "al-karama",
    "al-jaddaf", "business-bay-south", "al-hamriya", "bur-dubai", "deira"
]

os.chdir(os.path.dirname(os.path.abspath(__file__)))
count = 0
for area in areas:
    services = []
    for service in services_template:
        new_service = {
            "slug": service["slug"].replace("AREA", area),
            "serviceName": service["serviceName"].replace("AREA", area)
        }
        services.append(new_service)
    
    filename = f"{area}-services.json"
    with open(filename, 'w') as f:
        json.dump(services, f, indent=2)
    count += 1
    print(f"Created {filename}")

print(f"\nSuccessfully created {count} files!")
