#!/usr/bin/env python3
"""Add comprehensive SEO enhancements to all pages"""

import re
from pathlib import Path
from collections import defaultdict

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

# Services to include in internal linking
SERVICES = [
    "3d-interior-rendering",
    "apartment-interior-design",
    "bathroom-interior-design",
    "bedroom-interior-design",
    "commercial-interior-design",
    "contemporary-interior-design",
    "corporate-office-interior-design",
    "custom-furniture-design",
    "dining-room-interior-design",
    "home-decor-consultation",
    "home-office-interior-design",
    "home-renovation",
    "interior-design",
    "kitchen-interior-design",
    "lighting-design",
    "living-room-interior-design",
    "luxury-interior-design",
    "modern-interior-design",
    "modular-kitchens",
    "office-fit-out",
    "office-interior-design",
    "office-renovation",
    "outdoor-living-design",
    "residential-interior-design",
    "villa-interior-design",
    "wardrobe-design",
]

def extract_service_and_city(dir_name):
    """Extract service and city from directory name"""
    if dir_name.endswith("-dubai"):
        dir_name = dir_name[:-6]
    
    sorted_cities = sorted(CITY_DISPLAY_NAMES.keys(), key=len, reverse=True)
    
    for city in sorted_cities:
        if dir_name.endswith("-" + city):
            service = dir_name[:-len(city)-1]
            return service, city
        elif dir_name == city:
            return "", city
    
    return None, None

def get_related_services_for_city(city_key):
    """Get list of related services in same city"""
    app_dir = Path("/Applications/Interiara/app")
    related = []
    
    for dir_path in sorted(app_dir.iterdir()):
        if dir_path.is_dir() and dir_path.name.endswith("-dubai"):
            service, city = extract_service_and_city(dir_path.name)
            if city == city_key and service:
                related.append((service, dir_path.name))
    
    return related[:8]  # Return top 8 related services

def create_schema_markup(service, city_key, page_title):
    """Create JSON-LD schema markup"""
    city = CITY_DISPLAY_NAMES.get(city_key, city_key)
    service_display = service.replace("-", " ").title()
    
    schema = '''<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{__html: JSON.stringify({{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Interiara",
    "description": "''' + service_display + ''' in ''' + city + ''', Dubai",
    "url": "https://interiara.com/''' + service + '''-''' + city_key + '''",
    "telephone": "+91 635 358 3148",
    "email": "info@interiara.com",
    "areaServed": "''' + city + ''', Dubai",
    "service": {{
      "@type": "Service",
      "name": "''' + service_display + '''",
      "areaServed": "''' + city + ''', Dubai",
      "provider": {{
        "@type": "LocalBusiness",
        "name": "Interiara"
      }}
    }},
    "address": {{
      "@type": "PostalAddress",
      "addressLocality": "''' + city + '''",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    }},
    "aggregateRating": {{
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "98"
    }}
  }})} />'''
    return schema.strip()

def create_breadcrumb_schema(service, city_key):
    """Create breadcrumb schema"""
    city = CITY_DISPLAY_NAMES.get(city_key, city_key)
    service_display = service.replace("-", " ").title()
    
    schema = '''<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{__html: JSON.stringify({{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://interiara.com"
      }},
      {{
        "@type": "ListItem",
        "position": 2,
        "name": "''' + city + '''",
        "item": "https://interiara.com/''' + city_key + '''"
      }},
      {{
        "@type": "ListItem",
        "position": 3,
        "name": "''' + service_display + '''",
        "item": "https://interiara.com/''' + service + '''-''' + city_key + '''"
      }}
    ]
  }})} />'''
    return schema.strip()

def create_internal_links_section(service, city_key):
    """Create related services section with internal links"""
    city = CITY_DISPLAY_NAMES.get(city_key, city_key)
    related = get_related_services_for_city(city_key)
    
    if not related:
        return ""
    
    links_html = """
{/* Related Services in this Area */}
<section className="py-16 bg-muted/50 border-t">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-2">
        Other Services in """ + city + """
      </h2>
      <p className="text-muted-foreground mb-8">
        Explore our complete range of interior design services in """ + city + """
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
"""
    
    for rel_service, rel_page in related:
        if rel_service == service:
            continue
        service_display = rel_service.replace("-", " ").title()
        rel_page_path = rel_page.replace('-dubai', '')
        links_html += '''        <Link 
          href="/{rel_path}"
          className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
        >
          <p className="font-semibold text-foreground hover:text-primary">{svc_name}</p>
          <p className="text-xs text-muted-foreground">{city_name}</p>
        </Link>
'''.replace('{rel_path}', rel_page_path).replace('{svc_name}', service_display).replace('{city_name}', city)
    
    links_html += """      </div>
    </div>
  </div>
</section>
"""
    
    return links_html

def inject_seo_enhancements(file_path, service, city_key):
    """Inject all SEO enhancements into page"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    page_title = f"{service.replace('-', ' ').title()} in {CITY_DISPLAY_NAMES[city_key]}, Dubai | Interiara"
    
    # 1. Add schema markup before first component
    schema_local = create_schema_markup(service, city_key, page_title)
    schema_breadcrumb = create_breadcrumb_schema(service, city_key)
    schemas = schema_local + "\n" + schema_breadcrumb
    
    # Insert schemas after imports
    import_match = None
    for match in re.finditer(r'^import .*$', content, re.MULTILINE):
        import_match = match
    
    if import_match:
        insert_pos = import_match.end()
        next_newline = content.find('\n', insert_pos)
        insert_pos = next_newline + 1
    else:
        insert_pos = 0
    
    content = content[:insert_pos] + "\n" + schemas + "\n" + content[insert_pos:]
    
    # 2. Add canonical tag (in metadata if it exists)
    canonical = f'canonical: "https://interiara.com/{service}-{city_key}",'
    if 'export const metadata' in content:
        # Add canonical to metadata
        metadata_end = content.find('twitter: {')
        if metadata_end > 0:
            content = content[:metadata_end] + canonical + "\n  " + content[metadata_end:]
    
    # 3. Add internal links before WhatsAppFloat component
    internal_links = create_internal_links_section(service, city_key)
    whatsapp_pos = content.find('<WhatsAppFloat />')
    if whatsapp_pos > 0 and internal_links:
        content = content[:whatsapp_pos] + internal_links + "\n      " + content[whatsapp_pos:]
    
    # 4. Optimize H1 tag (find first h1 and ensure it has service + city)
    h1_pattern = r'<h1[^>]*>.*?</h1>'
    if not re.search(h1_pattern, content):
        # If no H1, add one after Navigation
        nav_pos = content.find('<Navigation />')
        if nav_pos > 0:
            nav_end = content.find('\n', nav_pos) + 1
            h1 = f'<h1 className="sr-only">{service.replace("-", " ").title()} in {CITY_DISPLAY_NAMES[city_key]}, Dubai</h1>\n      '
            content = content[:nav_end] + h1 + content[nav_end:]
    
    # 5. Optimize image alt texts with service + city
    service_display = service.replace("-", " ")
    city = CITY_DISPLAY_NAMES[city_key]
    alt_pattern = r'alt="([^"]*)"'
    
    def replace_alt(match):
        original_alt = match.group(1)
        if not service_display.lower() in original_alt.lower():
            return f'alt="{service_display.title()} {city}, Dubai - {original_alt}"'
        return match.group(0)
    
    # Only replace alts in gallery/image sections
    gallery_pattern = r'({galleryImages\.map.*?</div>\s*</div>\s*</div>)'
    if re.search(gallery_pattern, content, re.DOTALL):
        content = re.sub(alt_pattern, replace_alt, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    app_dir = Path("/Applications/Interiara/app")
    
    stats = {"enhanced": 0, "skipped": 0, "errors": 0}
    
    for dir_path in sorted(app_dir.iterdir()):
        if dir_path.is_dir() and dir_path.name.endswith("-dubai"):
            service, city = extract_service_and_city(dir_path.name)
            
            if service is None or city is None:
                continue
            
            page_file = dir_path / "page.tsx"
            if page_file.exists():
                try:
                    inject_seo_enhancements(str(page_file), service, city)
                    stats["enhanced"] += 1
                    if stats["enhanced"] % 100 == 0:
                        print(f"Enhanced {stats['enhanced']}...")
                except Exception as e:
                    stats["errors"] += 1
                    print(f"Error processing {dir_path.name}: {str(e)[:50]}")
    
    print(f"\n✅ SEO Enhancements Complete!")
    print(f"  Enhanced: {stats['enhanced']}")
    print(f"  Errors: {stats['errors']}")

if __name__ == "__main__":
    main()
