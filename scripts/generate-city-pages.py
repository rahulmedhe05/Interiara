#!/usr/bin/env python3
"""
Generate city landing pages with links to all services in each city
These hub pages will improve local SEO and internal linking structure
"""

import os
import re
from pathlib import Path
from collections import defaultdict

# Define cities and display names
CITY_DISPLAY_NAMES = {
    "al-barsha": "Al Barsha",
    "al-furjan": "Al Furjan",
    "al-quoz": "Al Quoz",
    "al-safa": "Al Safa",
    "al-wasl": "Al Wasl",
    "arabian-ranches": "Arabian Ranches",
    "business-bay": "Business Bay",
    "city-walk": "City Walk",
    "downtown-dubai": "Downtown Dubai",
    "dubai-creek-harbour": "Dubai Creek Harbour",
    "dubai-design-district": "Dubai Design District",
    "dubai-festival-city": "Dubai Festival City",
    "dubai-harbour": "Dubai Harbour",
    "dubai-hills-estate": "Dubai Hills Estate",
    "dubai-international-city": "Dubai International City",
    "dubai-investment-park": "Dubai Investment Park",
    "dubai-land": "Dubai Land",
    "dubai-marina": "Dubai Marina",
    "dubai-marina-heights": "Dubai Marina Heights",
    "dubai-marina-promenade": "Dubai Marina Promenade",
    "dubai-marina-residences": "Dubai Marina Residences",
    "dubai-silicon-oasis": "Dubai Silicon Oasis",
    "dubai-silicon-park": "Dubai Silicon Park",
    "dubai-south": "Dubai South",
    "dubai-sports-city": "Dubai Sports City",
    "dubai-waterfront": "Dubai Waterfront",
    "jbr": "JBR",
    "jlt": "JLT",
    "jumeirah": "Jumeirah",
    "jvc": "JVC",
    "jvt": "JVT",
    "meadows": "Meadows",
    "mirdif": "Mirdif",
    "nad-al-sheba": "Nad Al Sheba",
    "palm-jumeirah": "Palm Jumeirah",
    "springs": "Springs",
    "the-villa": "The Villa",
    "town-square": "Town Square",
    "umm-suqeim": "Umm Suqeim",
}

BASE_PATH = Path("/Applications/Interiara/app")

def extract_city_from_dir(dir_name):
    """Extract city from directory name"""
    # Remove service prefix
    parts = dir_name.rsplit("-dubai", 1)
    if len(parts) == 2:
        service_and_city = parts[0]
        # Find the city part
        for city_slug in CITY_DISPLAY_NAMES.keys():
            if service_and_city.endswith(city_slug):
                return city_slug
    return None

def get_service_name(dir_name, city_slug):
    """Extract service name from directory"""
    # Remove the city part from the end
    service_part = dir_name.replace(f"-{city_slug}-dubai", "").replace("-", " ").title()
    return service_part

def scan_services_by_city():
    """Scan all directories and group services by city"""
    services_by_city = defaultdict(list)
    
    entries = sorted(BASE_PATH.iterdir())
    for entry in entries:
        if not entry.is_dir() or entry.name.startswith('.'):
            continue
        
        city_slug = extract_city_from_dir(entry.name)
        if city_slug and city_slug in CITY_DISPLAY_NAMES:
            service_name = get_service_name(entry.name, city_slug)
            services_by_city[city_slug].append({
                "slug": entry.name,
                "name": service_name
            })
    
    return services_by_city

def generate_city_page(city_slug, city_display, services):
    """Generate TypeScript page content for a city hub"""
    
    service_links = "\n                ".join([
        f'<Link href="/{service["slug"]}" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">'
        f'\n                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">{service["name"]}</h3>'
        f'\n                  <p className="text-sm text-gray-600">Professional {service["name"].lower()} services in {city_display}</p>'
        f'\n                </Link>'
        for service in sorted(services, key=lambda x: x["name"])
    ])
    
    breadcrumb_items = [
        '{ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [',
        '  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://interiara.com" },',
        f'  {{ "@type": "ListItem", "position": 2, "name": "{city_display}", "item": "https://interiara.com/interior-design-{city_slug}-dubai" }}',
        '] }'
    ]
    
    content = f'''\'use client\'

import Link from "next/link"
import {{ Navigation }} from "@/components/navigation"
import {{ Footer }} from "@/components/footer"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"
import type {{ Metadata }} from "next"
import {{ ChevronRight }} from "lucide-react"

export const metadata: Metadata = {{
  title: "Interior Design Services in {city_display}, Dubai | Interiara",
  description: "Explore all interior design services available in {city_display}, Dubai. From luxury villas to modern apartments, custom furniture, kitchens, and commercial spaces. Professional designers for every style and budget.",
  keywords: [
    "interior design {city_display}",
    "interior designer {city_display} Dubai",
    "home design {city_display}",
    "luxury interior design {city_display}",
    "apartment design {city_display}",
    "villa design {city_display}",
  ],
  alternates: {{
    canonical: "https://interiara.com/interior-design-{city_slug}-dubai",
  }},
  openGraph: {{
    title: "Interior Design Services in {city_display}, Dubai",
    description: "Professional interior design services in {city_display}, Dubai. Explore all our services.",
    type: "website",
    url: "https://interiara.com/interior-design-{city_slug}-dubai",
    images: [
      {{
        url: "https://interiara.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design in {city_display}, Dubai",
      }},
    ],
  }},
  twitter: {{
    card: "summary_large_image",
    title: "Interior Design Services in {city_display}",
    description: "Professional interior design services in {city_display}, Dubai",
  }},
}}

export default function CityPage() {{
  const services = {len(services)}
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {{"/* Breadcrumb */"}}
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight size={{16}} />
          <span className="text-gray-800 font-medium">{city_display}</span>
        </div>
        
        {{"/* Hero Section */"}}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interior Design in {city_display}, Dubai
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            Discover our comprehensive range of professional interior design services in {city_display}. 
            From residential to commercial projects, we bring your vision to life with expert craftsmanship and innovative design.
          </p>
          <div className="flex gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-amber-600">{len(services)}+</div>
              <div className="text-gray-600 text-sm">Services Available</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-amber-600">500+</div>
              <div className="text-gray-600 text-sm">Completed Projects</div>
            </div>
          </div>
        </div>
        
        {{"/* Services Grid */"}}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Services in {city_display}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service_links}
          </div>
        </div>
        
        {{"/* CTA Section */"}}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Space?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free consultation and 3D visualization of your dream interior design project in {city_display}.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://wa.me/971635358314" target="_blank" rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              WhatsApp Now
            </a>
            <a href="tel:+971635358314" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </div>
      
      {{"/* Schema Markup */"}}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{
          __html: JSON.stringify({{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Interiara Interior Design - {city_display}",
            "description": "Professional interior design services in {city_display}, Dubai",
            "image": "https://interiara.com/logo.png",
            "url": "https://interiara.com/interior-design-{city_slug}-dubai",
            "telephone": "+971635358314",
            "email": "info@interiara.com",
            "areaServed": "{{city_display}}, Dubai",
            "priceRange": "AED 5,000 - AED 500,000+",
            "rating": {{
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "98"
            }}
          }}),
        }}}}
      />
      
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}}
'''
    
    return content

def create_city_pages():
    """Create city landing pages"""
    services_by_city = scan_services_by_city()
    
    created = 0
    for city_slug in sorted(services_by_city.keys()):
        city_display = CITY_DISPLAY_NAMES[city_slug]
        services = services_by_city[city_slug]
        
        # Create directory
        city_dir = BASE_PATH / f"interior-design-{city_slug}-dubai"
        city_dir.mkdir(parents=True, exist_ok=True)
        
        # Create page.tsx
        page_path = city_dir / "page.tsx"
        if not page_path.exists():
            page_content = generate_city_page(city_slug, city_display, services)
            page_path.write_text(page_content)
            created += 1
            print(f"✓ Created: interior-design-{city_slug}-dubai/page.tsx ({len(services)} services)")
        else:
            print(f"~ Already exists: interior-design-{city_slug}-dubai/page.tsx")
    
    print(f"\n✅ Created {created} city landing pages")
    print(f"📊 Total cities: {len(services_by_city)}")
    return created

if __name__ == "__main__":
    try:
        create_city_pages()
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
