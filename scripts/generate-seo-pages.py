#!/usr/bin/env python3
"""
SEO Page Generation Script for Interiara
Generates optimized page.tsx files for each service+location combination
"""

import json
import os
from pathlib import Path
from typing import Dict, List, Tuple

# Define service descriptions for unique content generation
SERVICE_DESCRIPTIONS = {
    "residential-interior-design": {
        "intro": "Transform your home into a stylish sanctuary with expert residential interior design services. We create functional, beautiful living spaces that reflect your personal style and enhance quality of life.",
        "benefits": [
            "Personalized design that reflects your lifestyle and preferences",
            "Space optimization for maximum comfort and functionality",
            "Professional color consultation and material selection",
            "Custom furniture solutions tailored to your space",
            "Complete project management from concept to completion",
            "Sustainable design options available"
        ],
        "process_focus": "residential consultation",
        "target_keyword": "residential interior design"
    },
    "office-interior-design": {
        "intro": "Create a productive, professional workspace with our corporate office interior design expertise. We design offices that inspire creativity, enhance productivity, and reflect your brand identity.",
        "benefits": [
            "Professional workspace that reflects company culture",
            "Ergonomic design for employee wellness and productivity",
            "Brand-aligned aesthetic and ambiance",
            "Efficient space utilization and layout optimization",
            "Modern technology integration and smart solutions",
            "Collaborative environment design"
        ],
        "process_focus": "corporate consultation",
        "target_keyword": "office interior design"
    },
    "villa-interior-design": {
        "intro": "Experience luxury living with our premium villa interior design services. We create sophisticated, bespoke spaces that showcase the grandeur of your villa home.",
        "benefits": [
            "Bespoke luxury designs for exclusive properties",
            "Premium material sourcing and high-end finishes",
            "Timeless aesthetic that transcends trends",
            "Multi-space coordination and flow optimization",
            "Smart home technology integration",
            "Personalized luxury that matches your lifestyle"
        ],
        "process_focus": "luxury villa consultation",
        "target_keyword": "villa interior design"
    },
    "commercial-interior-design": {
        "intro": "Elevate your commercial space with professional commercial interior design. We create customer-engaging environments that drive business growth and reflect your brand excellence.",
        "benefits": [
            "Customer engagement through thoughtful design",
            "Brand identity strengthening through interior aesthetics",
            "Operational efficiency optimization",
            "Eye-catching displays and customer flow design",
            "Professional ambiance that builds trust",
            "Functional commercial solutions"
        ],
        "process_focus": "commercial consultation",
        "target_keyword": "commercial interior design"
    },
    "modular-kitchens": {
        "intro": "Discover modern, functional kitchen solutions with our modular kitchen design and installation services. Create the perfect culinary space with intelligent, space-efficient designs.",
        "benefits": [
            "Smart storage solutions and space optimization",
            "Premium quality materials and appliances",
            "Modern ergonomic design for ease of use",
            "Customizable layouts to match your space",
            "Easy maintenance and durability",
            "Professional installation with warranty"
        ],
        "process_focus": "kitchen consultation",
        "target_keyword": "modular kitchens"
    }
}

# Location-specific content additions
LOCATION_CONTEXT = {
    "al-barsha": "Al Barsha is a vibrant, family-oriented community known for its modern villas and contemporary apartment buildings. Our design services cater to residents seeking stylish, functional spaces that enhance their lifestyle in this dynamic neighborhood.",
    "dubai-marina": "Dubai Marina is home to a diverse, cosmopolitan community living in modern high-rises. Our interior design services create sophisticated, contemporary spaces that match the upscale lifestyle of Marina residents.",
    "arabian-ranches": "Arabian Ranches attracts affluent families and businesses seeking exclusive, prestigious spaces. We specialize in luxury designs that showcase the grandeur of this exclusive community.",
    "business-bay": "Business Bay is a premier business district with cutting-edge commercial spaces. Our commercial interior design expertise helps businesses create professional, brand-aligned environments that drive success.",
    "jvc": "JVC (Jumeirah Village Circle) is a modern residential community perfect for young professionals and families. We design contemporary, space-efficient homes that match the vibrant lifestyle of this community.",
    "downtown-dubai": "Downtown Dubai is the beating heart of the city, featuring luxury residential towers and prestigious commercial spaces. Our designs reflect the sophistication and luxury that Downtown Dubai residents expect.",
    "difc": "DIFC (Dubai International Financial Centre) houses prestigious corporate offices and financial institutions. We create professional, innovative office spaces that reflect financial excellence and global standards.",
    "emirates-hills": "Emirates Hills is an exclusive gated community known for luxury villas. Our premium interior design services create sophisticated, bespoke spaces for discerning residents.",
    "jumeirah": "Jumeirah is synonymous with luxury living and waterfront elegance. We create sophisticated designs that complement the prestige and beauty of this iconic neighborhood.",
    "jlt": "JLT (Jumeirah Lake Towers) is a modern, vibrant community with contemporary apartments and townhouses. We design stylish, functional spaces for the dynamic residents of this community.",
    "creek": "Dubai Creek is an emerging entertainment and dining destination with rich cultural heritage. Our commercial designs create unique, atmospheric spaces that celebrate Dubai's vibrant culture.",
    "the-greens": "The Greens is a family-focused community known for its parks and contemporary homes. We design warm, welcoming spaces perfect for family living and community lifestyle.",
    "dubai-hills": "Dubai Hills Estate is an upscale residential community with spacious villas and modern townhouses. We create sophisticated designs that enhance the prestigious living experience.",
    "palm-jumeirah": "Palm Jumeirah is the epitome of luxury island living with ultra-premium waterfront properties. We specialize in opulent, bespoke designs for the most exclusive properties.",
    "deira": "Deira is Dubai's commercial hub with historic charm and modern business developments. Our commercial design services help businesses establish strong, professional presences.",
    "dubai-south": "Dubai South is an emerging residential area with modern development. We create contemporary, family-friendly designs for this growing community.",
    "sheikh-zayed-road": "Sheikh Zayed Road is the city's main business corridor with prestigious corporate offices. We design professional, innovative workspaces for major corporations and startups."
}

def get_unique_content_section(service_slug: str, location: str, location_slug: str) -> str:
    """Generate unique content section for the page"""
    
    service_key = service_slug.split('-')[0] if service_slug else "residential"
    service_info = SERVICE_DESCRIPTIONS.get(service_key, SERVICE_DESCRIPTIONS["residential-interior-design"])
    location_info = LOCATION_CONTEXT.get(location_slug, "This prime Dubai location")
    
    content = f"""
    {service_info['intro']}
    
    Why Choose Our {service_info['target_keyword'].title()} Services in {location}?
    
    Our expert team brings {' '.join(service_info['benefits'][:3])} and more to every project. With 15+ years of experience serving {location} residents and businesses, we understand the unique design requirements of this community.
    
    Our Commitment to Excellence:
    - Professional expertise and creative innovation
    - Personalized service and client-focused approach
    - High-quality materials and premium finishes
    - Timely project delivery and transparent communication
    - Comprehensive after-sales support and warranty
    
    The {service_info['target_keyword'].title()} Process:
    1. Initial Consultation: Understanding your vision, needs, and budget
    2. Design Concept Development: Creating tailored design solutions
    3. 3D Visualization: Seeing your space before implementation
    4. Material & Color Selection: Choosing premium finishes and aesthetics
    5. Professional Execution: Expert implementation by skilled craftsmen
    6. Final Handover: Quality inspection and customer satisfaction
    
    {location_info}
    
    Our portfolio includes successful {service_info['target_keyword']} projects throughout {location} and Dubai. From intimate residential spaces to expansive commercial properties, we deliver designs that exceed expectations.
    
    Ready to Transform Your Space?
    Contact us today for a free consultation. Our design experts will help you create the perfect space that matches your vision and enhances your lifestyle or business.
    """
    
    return content

def generate_page_component(
    service_name: str,
    service_slug: str,
    location: str,
    location_slug: str,
    keywords: List[str],
    meta_description: str
) -> str:
    """Generate complete Next.js page component"""
    
    unique_content = get_unique_content_section(service_slug, location, location_slug)
    keywords_meta = ", ".join(keywords[:8])
    
    page_content = f'''
"use client"

import {{ useState }} from "react"
import Image from "next/image"
import {{ Navigation }} from "@/components/navigation"
import {{ Footer }} from "@/components/footer"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"
import {{ ServicePageForm }} from "@/components/service-page-form"
import {{ Phone, CheckCircle, Star, ArrowRight, Lightbulb, Palette, Layout, Home, Settings, Zap, ChevronDown, ChevronUp }} from "lucide-react"
import {{ Button }} from "@/components/ui/button"

// SEO Keywords: {keywords_meta}

const serviceFeatures = [
  {{ icon: Lightbulb, title: "Expert Design", desc: "Professional expertise in {service_name.lower()}" }},
  {{ icon: Palette, title: "Custom Solutions", desc: "Tailored designs for your unique space" }},
  {{ icon: Layout, title: "Space Optimization", desc: "Maximize functionality and aesthetics" }},
  {{ icon: Home, title: "Quality Materials", desc: "Premium finishes and durable solutions" }},
  {{ icon: Settings, title: "Project Management", desc: "Seamless execution from start to finish" }},
  {{ icon: Zap, title: "Timely Delivery", desc: "Efficient completion within timeline" }},
]

const processSteps = [
  {{ step: "01", title: "Consultation", desc: "We understand your needs, vision, and requirements." }},
  {{ step: "02", title: "Design Concept", desc: "Our team creates tailored design concepts for {location}" }},
  {{ step: "03", title: "3D Visualization", desc: "Experience your transformed space through realistic renders." }},
  {{ step: "04", title: "Material Selection", desc: "Choose from premium materials and finishes." }},
  {{ step: "05", title: "Execution", desc: "Professional implementation with quality assurance." }},
  {{ step: "06", title: "Handover", desc: "Final inspection and delivery of your transformed space." }},
]

const stats = [
  {{ number: "300+", label: "Projects Completed" }},
  {{ number: "15+", label: "Years Experience" }},
  {{ number: "98%", label: "Client Satisfaction" }},
  {{ number: "25+", label: "Expert Designers" }},
]

const galleryImages = [
  {{ src: "/dubai-interior-design-luxury.jpg", alt: "{service_name} {location} - Luxury design" }},
  {{ src: "/Reception-9.jpg", alt: "{service_name} {location} - Modern space" }},
  {{ src: "/Modern-Eclectic-3-1.webp", alt: "{service_name} {location} - Contemporary style" }},
  {{ src: "/Top-Living-Room-Decor.png", alt: "{service_name} {location} - Elegant interior" }},
  {{ src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "{service_name} {location} - Lighting design" }},
  {{ src: "/top-interior-designers-dubai.jpg", alt: "{service_name} {location} - Professional design" }},
]

export const metadata = {{
  title: "{service_name} in {location} Dubai | Expert Interior Design Services",
  description: "{meta_description}",
  keywords: "{keywords_meta}",
  openGraph: {{
    title: "{service_name} in {location} Dubai",
    description: "{meta_description}",
    url: "https://interiara.ae/services/{location_slug}/{service_slug}",
    images: [
      {{
        url: "/dubai-interior-design-luxury.jpg",
        width: 1200,
        height: 630,
        alt: "{service_name} {location}",
      }},
    ],
  }},
}}

export default function {service_name.replace(/[^a-zA-Z0-9]/g, "")}Page() {{
  const [showAllImages, setShowAllImages] = useState(false)
  const whatsappNumber = "916353583148"
  const whatsappMessage = encodeURIComponent("Hi Interiara! I'm interested in {service_name} services in {location}. Please share more details.")
  
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6)

  return (
    <main className="min-h-screen bg-background">
      <Navigation darkLogo hideMenu />
      
      {{/* Hero Section */}}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="text-accent font-mono uppercase tracking-wider mb-4">Expert {service_name} in {location}</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Professional {service_name} - <span className="text-primary">Transform Your Space</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Looking for expert <strong>{service_name} in {location}}</strong>? Interiara is Dubai's premier interior design company, specializing in creating beautiful, functional spaces. With 300+ projects completed and 15+ years of experience, we deliver exceptional results tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {{/* About Section */}}
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {{serviceFeatures.map((feature) => (
              <div key={{feature.title}} className="p-6 bg-card rounded-lg border hover:shadow-lg transition">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{{feature.title}}</h3>
                <p className="text-muted-foreground">{{feature.desc}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Process Section */}}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Design Process</h2>
          <div className="space-y-4">
            {{processSteps.map((item) => (
              <div key={{item.step}} className="flex gap-4">
                <div className="text-2xl font-bold text-primary">{{item.step}}</div>
                <div>
                  <h3 className="text-xl font-bold">{{item.title}}</h3>
                  <p className="text-muted-foreground">{{item.desc}}</p>
                </div>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Stats Section */}}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {{stats.map((stat) => (
              <div key={{stat.number}}>
                <p className="text-4xl md:text-5xl font-bold text-primary">{{stat.number}}</p>
                <p className="text-muted-foreground">{{stat.label}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Gallery Section */}}
      <section className="py-16 md:py-24 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {{displayedImages.map((image, idx) => (
              <div key={{idx}} className="aspect-square rounded-lg overflow-hidden">
                <img src={{image.src}} alt={{image.alt}} className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
            ))}}
          </div>
          <div className="text-center mt-12">
            <Button onClick={{() => setShowAllImages(!showAllImages)}} variant="outline">
              {{showAllImages ? "Show Less" : "View More Projects"}}
            </Button>
          </div>
        </div>
      </section>

      {{/* Form Section */}}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Your Free Consultation</h2>
          <div className="max-w-2xl mx-auto">
            <ServicePageForm service="{{service_name}}" location="{{location}}" />
          </div>
        </div>
      </section>

      <WhatsAppFloat number={{whatsappNumber}} message={{whatsappMessage}} />
      <Footer />
    </main>
  )
}}
'''
    
    return page_content

def main():
    """Generate all SEO optimized pages"""
    
    # Read the keywords database
    with open("/Applications/Interiara/scripts/seo-keywords-database.json") as f:
        keywords_data = json.load(f)
    
    base_app_path = Path("/Applications/Interiara/app")
    
    for service_data in keywords_data:
        # Create directory for the service
        service_slug = service_data["service_slug"]
        dir_path = base_app_path / service_slug
        dir_path.mkdir(parents=True, exist_ok=True)
        
        # Generate page component
        page_content = generate_page_component(
            service_data["service"],
            service_slug,
            service_data["location"],
            service_data["location_slug"],
            service_data["keywords"],
            service_data["meta_description"]
        )
        
        # Write page.tsx
        page_file = dir_path / "page.tsx"
        with open(page_file, 'w') as f:
            f.write(page_content)
        
        print(f"✓ Generated: {service_slug}/page.tsx")

if __name__ == "__main__":
    main()
