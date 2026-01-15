#!/usr/bin/env python3
"""Generate and inject optimized meta titles and descriptions for all pages"""

import os
import re
from pathlib import Path
from collections import defaultdict

# City mapping for display names
CITY_DISPLAY_NAMES = {
    "downtown-dubai": "Downtown Dubai",
    "business-bay": "Business Bay",
    "dubai-marina": "Dubai Marina",
    "palm-jumeirah": "Palm Jumeirah",
    "jumeirah": "Jumeirah",
    "jbr": "JBR",
    "dubai-hills-estate": "Dubai Hills Estate",
    "arabian-ranches": "Arabian Ranches",
    "al-wasl": "Al Wasl",
    "dubai-creek-harbour": "Dubai Creek Harbour",
    "jlt": "JLT",
    "al-barsha": "Al Barsha",
    "dubai-festival-city": "Dubai Festival City",
    "city-walk": "City Walk",
    "umm-suqeim": "Umm Suqeim",
    "al-safa": "Al Safa",
    "meadows": "Meadows",
    "springs": "Springs",
    "the-villa": "The Villa",
    "nad-al-sheba": "Nad Al Sheba",
    "jvc": "JVC",
    "jvt": "JVT",
    "dubai-sports-city": "Dubai Sports City",
    "town-square": "Town Square",
    "dubai-south": "Dubai South",
    "al-furjan": "Al Furjan",
    "al-quoz": "Al Quoz",
    "mirdif": "Mirdif",
    "dubai-design-district": "Dubai Design District",
    "dubai-land": "Dubai Land",
}

def extract_service_and_city(dir_name):
    """Extract service and city from directory name"""
    if dir_name.endswith("-dubai"):
        dir_name = dir_name[:-6]
    
    # Try to find city (longest match first)
    sorted_cities = sorted(CITY_DISPLAY_NAMES.keys(), key=len, reverse=True)
    
    for city in sorted_cities:
        if dir_name.endswith("-" + city):
            service = dir_name[:-len(city)-1]
            return service, city
        elif dir_name == city:
            return "", city
    
    return None, None

def generate_meta_title(service, city_key):
    """Generate SEO-optimized meta title"""
    city = CITY_DISPLAY_NAMES.get(city_key, city_key)
    
    # Service name with better formatting
    service_display = service.replace("-", " ").title()
    
    # Create compelling meta title (55-60 chars ideal)
    # Format: "Service in City, Dubai | Interiara"
    title = f"{service_display} in {city}, Dubai | Interiara"
    
    return title

def generate_meta_description(service, city_key):
    """Generate SEO-optimized meta description"""
    city = CITY_DISPLAY_NAMES.get(city_key, city_key)
    service_display = service.replace("-", " ").lower()
    
    # Create compelling meta description (155-160 chars ideal)
    descriptions = {
        "3d-interior-rendering": f"Professional {service_display} services in {city}. Expert designers creating stunning 3D visualizations. Get your free consultation today!",
        "interior-design": f"Transform your space with premium {service_display} in {city}. Award-winning designs for homes & offices. Contact us for free consultation.",
        "luxury-interior-design": f"Luxury {service_display} in {city} by Interiara. Premium finishes & bespoke designs. 15+ years experience. Book your consultation now!",
        "villa-interior-design": f"Elegant {service_display} in {city}. Bespoke villa interiors by expert designers. Premium quality & timely delivery. Get free quote!",
        "penthouse-interior-design": f"Exclusive {service_display} in {city}. Luxury penthouse designs with stunning finishes. 300+ projects completed. Consult now!",
        "residential-interior-design": f"Professional {service_display} in {city}. Beautiful home spaces designed for modern living. Free consultation available!",
        "office-interior-design": f"Expert {service_display} in {city}. Productive office spaces for your business. 300+ projects. Get free quote today!",
        "office-fit-out": f"Complete {service_display} services in {city}. Professional execution & quality assurance. Fast turnaround. Consult now!",
        "commercial-interior-design": f"Professional {service_display} in {city}. Retail, restaurant & office spaces designed for success. Expert team.",
        "kitchen-interior-design": f"Modern {service_display} in {city}. Functional & beautiful kitchens. Premium materials & expert craftsmanship. Free consultation!",
        "bedroom-interior-design": f"Luxurious {service_display} in {city}. Peaceful & stylish bedrooms designed for relaxation. Get your dream bedroom!",
        "lighting-design": f"Professional {service_display} in {city}. Enhance ambiance & functionality with expert lighting. Free consultation available!",
        "modular-kitchens": f"Premium {service_display} in {city}. Innovative designs with quality materials. Space-efficient solutions. Quote today!",
        "wardrobe-design": f"Custom {service_display} in {city}. Bespoke wardrobes designed for your space. Professional installation. Consult now!",
        "custom-furniture-design": f"Bespoke {service_display} in {city}. Handcrafted furniture tailored to your style. Premium quality. Get quote!",
        "outdoor-living-design": f"Beautiful {service_display} in {city}. Stunning outdoor spaces for relaxation & entertainment. Expert design & build!",
    }
    
    # Find matching description or use generic
    for key, desc in descriptions.items():
        if key in service:
            return desc
    
    # Generic fallback
    return f"Expert {service_display} in {city}, Dubai. Premium design & professional execution. 300+ projects completed. Book your free consultation!"

def create_metadata_export(service, city_key):
    """Create the metadata export code"""
    city = CITY_DISPLAY_NAMES.get(city_key, city_key)
    title = generate_meta_title(service, city_key)
    description = generate_meta_description(service, city_key)
    
    # Service name for keywords
    service_display = service.replace("-", " ")
    
    metadata_code = f'''
export const metadata = {{
  title: "{title}",
  description: "{description}",
  keywords: [
    "{service_display}",
    "{service_display} {city}",
    "{service_display} {city} Dubai",
    "professional {service_display}",
    "best {service_display}",
    "{service_display} services",
    "luxury {service_display}",
    "affordable {service_display}",
    "expert {service_display}",
    "custom {service_display}",
  ],
  openGraph: {{
    title: "{title}",
    description: "{description}",
    url: "https://interiara.com/{service}-{city_key}",
    siteName: "Interiara",
    images: [
      {{
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      }},
    ],
    type: "website",
  }},
  twitter: {{
    card: "summary_large_image",
    title: "{title}",
    description: "{description}",
    images: ["/og-image.jpg"],
  }},
}}
'''
    
    return metadata_code.strip()

def should_inject_metadata(file_content):
    """Check if metadata is already present"""
    return "export const metadata" in file_content or "generateMetadata" in file_content

def inject_metadata(file_path, service, city_key):
    """Inject metadata into page file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Don't overwrite existing metadata
    if should_inject_metadata(content):
        return False
    
    # Create metadata
    metadata = create_metadata_export(service, city_key)
    
    # Insert metadata after imports, before the component definition
    # Find the last import statement
    import_match = None
    for match in re.finditer(r'^import .*$', content, re.MULTILINE):
        import_match = match
    
    if import_match:
        insert_pos = import_match.end()
        # Find the next newline
        next_newline = content.find('\n', insert_pos)
        insert_pos = next_newline + 1
    else:
        insert_pos = 0
    
    # Insert metadata
    new_content = content[:insert_pos] + '\n' + metadata + '\n' + content[insert_pos:]
    
    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    app_dir = Path("/Applications/Interiara/app")
    
    stats = defaultdict(int)
    errors = []
    
    # Process each directory
    for dir_path in sorted(app_dir.iterdir()):
        if dir_path.is_dir() and dir_path.name.endswith("-dubai"):
            service, city = extract_service_and_city(dir_path.name)
            
            if service is None or city is None:
                continue
            
            page_file = dir_path / "page.tsx"
            if page_file.exists():
                try:
                    if inject_metadata(str(page_file), service, city):
                        stats["injected"] += 1
                    else:
                        stats["skipped"] += 1
                except Exception as e:
                    stats["errors"] += 1
                    errors.append(f"{dir_path.name}: {str(e)}")
    
    print(f"✅ Metadata Injection Complete!")
    print(f"  Injected: {stats['injected']}")
    print(f"  Skipped (already has metadata): {stats['skipped']}")
    print(f"  Errors: {stats['errors']}")
    
    if errors:
        print(f"\n⚠️ Errors encountered:")
        for error in errors[:10]:
            print(f"  - {error}")
        if len(errors) > 10:
            print(f"  ... and {len(errors) - 10} more")

if __name__ == "__main__":
    main()
