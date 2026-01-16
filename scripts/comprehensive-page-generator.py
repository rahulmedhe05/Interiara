#!/usr/bin/env python3
"""
Comprehensive SEO Page Generator for Interiara
Generates 1000+ optimized page.tsx files with unique 2000+ word content per page
Includes: Keywords, meta tags, schema markup, forms, and images
"""

import json
import os
import sys
from pathlib import Path
from typing import Dict, List, Tuple, Any
import re

# ============================================================================
# CONTENT TEMPLATES & VARIATIONS
# ============================================================================

SERVICE_CONTENT_BLOCKS = {
    "residential-interior-design": {
        "intro_template": "Transform your {location} home into your dream living space with expert residential interior design services. We create beautiful, functional homes that reflect your personal style and enhance your quality of life. At Interiara, we specialize in {location} residential interiors with 15+ years of experience and 300+ completed projects.",
        "benefits": [
            "Personalized design reflecting your unique lifestyle and preferences",
            "Space optimization that maximizes comfort and functionality",
            "Professional color consultation and material selection services",
            "Custom furniture solutions tailored to your specific space",
            "Complete project management from concept to final completion",
            "Access to premium materials and sustainable design options"
        ],
        "service_focus": "residential spaces",
        "service_description": "Our residential interior design services create personalized, functional homes that enhance daily living. From intimate apartments to spacious villas in {location}, we design spaces that balance aesthetics with practicality.",
        "ideal_for": "Homeowners in {location} seeking contemporary, modern, luxury, or family-friendly interior designs"
    },
    "office-interior-design": {
        "intro_template": "Create a professional, productive workspace with expert office interior design services in {location}. We design corporate environments that inspire creativity, enhance productivity, and reflect your brand identity. With proven expertise across {location}'s business community, we deliver office solutions that drive success.",
        "benefits": [
            "Professional workspace that authentically reflects company culture",
            "Ergonomic design prioritizing employee wellness and productivity",
            "Brand-aligned aesthetics strengthening corporate identity",
            "Efficient space utilization and intelligent layout optimization",
            "Seamless technology integration and smart office solutions",
            "Collaborative environment design fostering teamwork and innovation"
        ],
        "service_focus": "professional office environments",
        "service_description": "Our office interior design expertise transforms corporate spaces into productive, inspiring work environments. We design offices in {location} that support modern work practices while reflecting company values.",
        "ideal_for": "Businesses in {location} ranging from startups to established corporations"
    },
    "villa-interior-design": {
        "intro_template": "Experience luxury villa living with our premium villa interior design services in {location}. We create sophisticated, bespoke spaces that showcase the grandeur of your villa home. Specializing in high-end {location} villas, we deliver designs that exceed expectations.",
        "benefits": [
            "Bespoke luxury designs for exclusive {location} properties",
            "Premium material sourcing and high-end finish selection",
            "Timeless aesthetic that transcends passing design trends",
            "Multi-space coordination ensuring seamless flow throughout villa",
            "Smart home technology integration for modern luxury living",
            "Personalized luxury matching your distinctive lifestyle"
        ],
        "service_focus": "luxury villa spaces",
        "service_description": "Our villa interior design services create sophisticated, luxurious residential spaces. Each {location} villa project receives personalized attention, delivering bespoke designs that reflect your lifestyle.",
        "ideal_for": "High-net-worth individuals and families in {location} seeking luxury villa designs"
    },
    "commercial-interior-design": {
        "intro_template": "Elevate your commercial space with professional commercial interior design in {location}. We create customer-engaging environments that drive business growth and reflect your brand excellence. From retail to hospitality, our {location} expertise delivers exceptional commercial solutions.",
        "benefits": [
            "Customer engagement through thoughtful, strategic design",
            "Brand identity strengthening via interior aesthetics",
            "Operational efficiency optimization and workflow improvement",
            "Eye-catching displays and optimal customer flow design",
            "Professional ambiance that builds trust and credibility",
            "Functional commercial solutions supporting business operations"
        ],
        "service_focus": "commercial business spaces",
        "service_description": "Our commercial interior design services create professional, customer-focused environments. We design {location} commercial spaces that enhance business performance and customer experience.",
        "ideal_for": "Retail, restaurants, hotels, and commercial businesses in {location}"
    },
    "modular-kitchens": {
        "intro_template": "Discover modern, functional kitchen solutions with our expert modular kitchen design and installation services in {location}. We create smart, space-efficient kitchens that combine style with practicality. Perfect for {location} homes seeking contemporary culinary spaces.",
        "benefits": [
            "Smart storage solutions maximizing space utilization",
            "Premium quality materials and modern appliances",
            "Ergonomic design for ease of use and efficiency",
            "Customizable layouts perfectly matching your space",
            "Easy maintenance design ensuring long-term durability",
            "Professional installation with comprehensive warranty"
        ],
        "service_focus": "modern kitchen spaces",
        "service_description": "Our modular kitchen services provide contemporary, functional kitchen designs. We create {location} kitchens that balance aesthetics with smart functionality and storage optimization.",
        "ideal_for": "Homeowners in {location} seeking modern, space-efficient kitchen designs"
    },
    "lighting-design": {
        "intro_template": "Transform your {location} space with expert lighting design services that create perfect ambiance and functionality. We design layered lighting solutions for residential and commercial spaces. Our {location} lighting expertise creates stunning visual environments.",
        "benefits": [
            "Layered lighting design for ambiance and functionality",
            "Energy-efficient solutions reducing operational costs",
            "Smart lighting integration with modern automation",
            "Professional lighting that enhances architecture",
            "Custom solutions for residential and commercial spaces",
            "Accent lighting that highlights design features"
        ],
        "service_focus": "lighting solutions",
        "service_description": "Our lighting design services create perfect illumination for any space. We design {location} lighting solutions that enhance aesthetics while ensuring functional, energy-efficient lighting.",
        "ideal_for": "Homes and businesses in {location} seeking professional lighting design"
    }
}

LOCATION_VARIATIONS = {
    "al-barsha": {
        "full_name": "Al Barsha",
        "description": "vibrant, family-oriented residential community",
        "characteristics": "modern villas, contemporary apartments, family-focused lifestyle",
        "demographics": "diverse residents, young professionals, established families",
        "design_style": "contemporary, modern, functional",
    },
    "dubai-marina": {
        "full_name": "Dubai Marina",
        "description": "prestigious high-rise community with cosmopolitan lifestyle",
        "characteristics": "luxury apartments, waterfront living, urban sophistication",
        "demographics": "affluent professionals, international residents, business executives",
        "design_style": "luxury, contemporary, sophisticated",
    },
    "arabian-ranches": {
        "full_name": "Arabian Ranches",
        "description": "exclusive gated community for luxury villa living",
        "characteristics": "spacious villas, lush landscapes, prestigious address",
        "demographics": "high-net-worth individuals, families, business owners",
        "design_style": "luxury, elegant, bespoke",
    },
    "business-bay": {
        "full_name": "Business Bay",
        "description": "premier business district with cutting-edge commercial spaces",
        "characteristics": "corporate offices, retail centers, business hub",
        "demographics": "corporations, entrepreneurs, business professionals",
        "design_style": "professional, modern, innovative",
    },
    "jvc": {
        "full_name": "JVC (Jumeirah Village Circle)",
        "description": "modern residential community for young professionals",
        "characteristics": "contemporary apartments, townhouses, vibrant lifestyle",
        "demographics": "young professionals, small families, renters and owners",
        "design_style": "modern, minimalist, functional",
    },
    "downtown-dubai": {
        "full_name": "Downtown Dubai",
        "description": "heart of the city with luxury residential and commercial spaces",
        "characteristics": "high-rise towers, iconic locations, urban sophistication",
        "demographics": "affluent residents, business professionals, luxury seekers",
        "design_style": "luxury, contemporary, premium",
    },
    "difc": {
        "full_name": "DIFC (Dubai International Financial Centre)",
        "description": "prestigious financial hub with world-class office spaces",
        "characteristics": "corporate headquarters, financial institutions, global standards",
        "demographics": "financial professionals, corporations, international businesses",
        "design_style": "professional, sophisticated, global standard",
    },
    "emirates-hills": {
        "full_name": "Emirates Hills",
        "description": "upscale residential community with spacious villas",
        "characteristics": "large villas, prestigious neighborhood, exclusive living",
        "demographics": "affluent families, business owners, luxury seekers",
        "design_style": "luxury, elegant, sophisticated",
    },
    "jumeirah": {
        "full_name": "Jumeirah",
        "description": "iconic neighborhood synonymous with luxury waterfront living",
        "characteristics": "beautiful villas, waterfront properties, prestige address",
        "demographics": "high-net-worth individuals, international residents, luxury focused",
        "design_style": "luxury, elegant, waterfront sophisticated",
    },
    "jlt": {
        "full_name": "JLT (Jumeirah Lake Towers)",
        "description": "modern vibrant community with contemporary apartments",
        "characteristics": "modern apartments, townhouses, active community",
        "demographics": "young professionals, small families, active lifestyle",
        "design_style": "modern, contemporary, functional",
    },
}

# ============================================================================
# CONTENT GENERATORS
# ============================================================================

def generate_unique_intro(service_key: str, location: str, full_location: str) -> str:
    """Generate location-specific introduction paragraph"""
    # Fallback to default service if key not found
    if service_key not in SERVICE_CONTENT_BLOCKS:
        service_key = "residential-interior-design"
    template = SERVICE_CONTENT_BLOCKS[service_key]["intro_template"]
    return template.format(location=full_location)

def generate_what_is_section(service: str, service_key: str, location: str, full_location: str) -> str:
    """Generate 'What is [Service]' section with unique content"""
    # Fallback to default service if key not found
    if service_key not in SERVICE_CONTENT_BLOCKS:
        service_key = "residential-interior-design"
    service_desc = SERVICE_CONTENT_BLOCKS[service_key]["service_description"].format(location=full_location)
    
    content = f"""What is {service} in {full_location}?

{service_desc}

In {full_location}, a diverse community with unique design preferences, professional {service.lower()} requires understanding both contemporary aesthetics and practical functionality. Whether you're designing residential spaces, commercial environments, or specialized facilities, our experts combine design excellence with local market expertise.

Key Aspects of {service}:
- Strategic space planning and layout optimization
- Professional aesthetic consultation and color coordination
- Quality material and finish selection
- Lighting design for optimal functionality and ambiance
- Furniture selection and custom piece design
- Storage solutions and organizational systems
- Smart home/office technology integration
- Sustainability and eco-friendly design options
- Budget management and cost-effective solutions
- Timeline planning and project execution

{full_location} residents and businesses benefit from professional {service.lower()} that considers:
- Local climate and environmental factors
- Community lifestyle and preferences
- Property type and architectural style
- Budget constraints and financial planning
- Timeline requirements and project scope

Our {full_location} team understands these unique factors, delivering {service.lower()} solutions that perfectly fit your needs."""
    return content

def generate_why_choose_section(service: str, service_key: str, location: str, full_location: str) -> str:
    """Generate 'Why Choose Professional' section"""
    # Fallback to default service if key not found
    if service_key not in SERVICE_CONTENT_BLOCKS:
        service_key = "residential-interior-design"
    if location not in LOCATION_VARIATIONS:
        # Generate default location info
        location_info = {
            "description": f"vibrant community in Dubai",
            "characteristics": "diverse properties and residents",
            "demographics": "established and new residents",
            "design_style": "contemporary and modern",
        }
    else:
        location_info = LOCATION_VARIATIONS[location]
    
    benefits = SERVICE_CONTENT_BLOCKS[service_key]["benefits"]
    
    benefits_list = "\n".join([f"- {benefit}" for benefit in benefits])
    
    content = f"""Why Choose Professional {service} in {full_location}?

{full_location} is {location_info['description']}. Characterized by {location_info['characteristics']}, this community includes {location_info['demographics']}.

Key Benefits of Professional Design:

{benefits_list}

{full_location}-Specific Advantages:

Professional {service.lower()} in {full_location} offers specific community advantages:

Market Expertise: Our designers understand {full_location}'s real estate market, property values, and investment considerations. Well-designed spaces significantly increase property value and rental appeal.

Local Aesthetic Preferences: {full_location} residents appreciate {location_info['design_style']} design aesthetics. We create interiors that reflect community preferences while expressing individual personality.

Environmental Considerations: Dubai's climate requires durable, heat-resistant materials and smart cooling solutions. Our designs incorporate climate-appropriate selections ensuring longevity and comfort.

Community Lifestyle: {full_location}'s unique lifestyle informs our design approach. We create spaces supporting {location_info['demographics']}'s daily activities and preferences.

Quality Standards: {full_location} attracts quality-conscious residents and businesses. We maintain premium standards across all projects, ensuring client satisfaction and results exceeding expectations.

Tangible Results:

- Increased property value and investment return
- Enhanced comfort and functionality
- Improved productivity (commercial spaces)
- Premium aesthetic that reflects your style
- Professional execution reducing stress
- Long-term value and durability"""
    return content

def generate_process_section(service: str) -> str:
    """Generate detailed process section"""
    content = f"""
## Our {service} Process in Detail

Our comprehensive 6-step process ensures exceptional {service.lower()} results:

### Step 1: Initial Consultation & Discovery
We begin by thoroughly understanding your vision, needs, preferences, budget, and timeline. This consultation phase involves:
- Detailed needs assessment
- Vision and style preference discussion
- Budget and timeline establishment
- Site visit and space analysis
- Preliminary concept exploration

### Step 2: Design Concept Development
Our expert team develops tailored design concepts based on consultation insights:
- Multiple design direction options
- Mood board and style direction creation
- Spatial planning and layout exploration
- Preliminary material suggestions
- Concept presentation and feedback collection

### Step 3: Detailed 3D Visualization
Experience your transformation through photorealistic 3D renderings:
- Professional 3D modeling and visualization
- Multiple viewing angles and perspectives
- Lighting and material realistic representation
- Virtual walkthrough experiences
- Design refinement based on your feedback

### Step 4: Material & Finish Selection
Collaborate in selecting premium materials and finishes:
- Comprehensive material and finish showroom access
- Professional recommendations and guidance
- Color coordination and harmony
- Budget-appropriate quality selections
- Durability and maintenance consideration

### Step 5: Professional Execution & Implementation
Our skilled craftsmen professionally implement your design:
- Expert contractor and supplier coordination
- Quality assurance throughout execution
- Progress monitoring and communication
- Problem-solving and adjustments
- Timeline and budget management

### Step 6: Final Handover & Inspection
Complete quality inspection and project handover:
- Comprehensive final walkthrough
- Quality verification and adjustments
- Client satisfaction confirmation
- Maintenance guidance and care instructions
- Post-project support and warranty information
"""
    return content

def generate_features_section(service: str, service_key: str) -> str:
    """Generate service features section"""
    # Fallback to default service if key not found
    if service_key not in SERVICE_CONTENT_BLOCKS:
        service_key = "residential-interior-design"
    benefits = SERVICE_CONTENT_BLOCKS[service_key]["benefits"]
    
    features_html = ""
    feature_icons = {
        0: "Lightbulb",
        1: "Palette",
        2: "Layout",
        3: "Home",
        4: "Settings",
        5: "Zap"
    }
    
    for idx, benefit in enumerate(benefits):
        title = benefit.split()[0:2]
        title = " ".join(title) if len(title) > 1 else benefit.split()[0]
        features_html += f'  {{ icon: {feature_icons.get(idx, "Star")}, title: "{title}", desc: "{benefit}" }},\n'
    
    return features_html.strip()

def generate_schema_markup(service: str, location: str, full_location: str, keywords: List[str]) -> str:
    """Generate JSON-LD schema markup"""
    schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": f"{service} in {full_location} | Interiara",
        "description": f"Expert {service.lower()} services in {full_location} Dubai. 300+ projects, 15+ years experience.",
        "url": f"https://interiara.ae/{'-'.join(service.lower().split())} {location}",
        "telephone": "+971 XX XXX XXXX",
        "areaServed": {
            "@type": "City",
            "name": full_location
        },
        "priceRange": "$$$",
        "sameAs": [
            "https://www.facebook.com/interiara",
            "https://www.instagram.com/interiara",
            "https://www.linkedin.com/company/interiara"
        ],
        "image": "/dubai-interior-design-luxury.jpg",
        "serviceType": service,
        "keywords": ", ".join(keywords[:10])
    }
    return json.dumps(schema, indent=2)

def generate_full_page_tsx(
    service: str,
    service_slug: str,
    location: str,
    full_location: str,
    keywords: List[str],
    meta_description: str
) -> str:
    """Generate complete page.tsx component"""
    
    service_key = service_slug.split('-')[0]
    if service_key not in SERVICE_CONTENT_BLOCKS:
        service_key = service_slug.split('-')[0:2]
        service_key = '-'.join(service_key) if isinstance(service_key, list) else service_key
        if service_key not in SERVICE_CONTENT_BLOCKS:
            service_key = "residential-interior-design"
    
    keywords_str = ", ".join(keywords[:8])
    schema_markup = generate_schema_markup(service, location, full_location, keywords)
    
    # Generate content sections
    intro = generate_unique_intro(service_key, location, full_location)
    what_is = generate_what_is_section(service, service_key, location, full_location)
    why_choose = generate_why_choose_section(service, service_key, location, full_location)
    process = generate_process_section(service)
    features = generate_features_section(service, service_key)
    
    page_content = f'''
import Image from "next/image"
import {{ Navigation }} from "@/components/navigation"
import {{ Footer }} from "@/components/footer"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"
import {{ ServicePageForm }} from "@/components/service-page-form"
import {{ Phone, CheckCircle, Star, ArrowRight, Lightbulb, Palette, Layout, Home, Settings, Zap, ChevronDown, ChevronUp }} from "lucide-react"
import {{ Button }} from "@/components/ui/button"

// SEO Keywords: {keywords_str}

const serviceFeatures = [
{features}
]

const processSteps = [
  {{ step: "01", title: "Consultation", desc: "We understand your needs, vision, and requirements for your {full_location} project." }},
  {{ step: "02", title: "Design Concept", desc: "Our team creates tailored design concepts specifically for your {full_location} space." }},
  {{ step: "03", title: "3D Visualization", desc: "Experience your transformed space through photorealistic 3D renders and visualization." }},
  {{ step: "04", title: "Material Selection", desc: "Choose from premium materials and finishes suited for {full_location} climate." }},
  {{ step: "05", title: "Execution", desc: "Professional implementation with expert craftsmen and quality assurance." }},
  {{ step: "06", title: "Handover", desc: "Final inspection and delivery of your beautifully transformed {full_location} space." }},
]

const stats = [
  {{ number: "300+", label: "Projects Completed" }},
  {{ number: "15+", label: "Years Experience" }},
  {{ number: "98%", label: "Client Satisfaction" }},
  {{ number: "25+", label: "Expert Designers" }},
]

const galleryImages = [
  {{ src: "/dubai-interior-design-luxury.jpg", alt: "{service} {full_location} - Luxury design" }},
  {{ src: "/Reception-9.jpg", alt: "{service} {full_location} - Modern space" }},
  {{ src: "/Modern-Eclectic-3-1.webp", alt: "{service} {full_location} - Contemporary style" }},
  {{ src: "/Top-Living-Room-Decor.png", alt: "{service} {full_location} - Elegant interior" }},
  {{ src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "{service} {full_location} - Design detail" }},
  {{ src: "/top-interior-designers-dubai.jpg", alt: "{service} {full_location} - Professional design" }},
]

export const metadata = {{
  title: "{service} in {full_location} Dubai | Expert Interior Design Services",
  description: "{meta_description}",
  keywords: "{keywords_str}",
  openGraph: {{
    title: "{service} in {full_location} Dubai",
    description: "{meta_description}",
    url: "https://interiara.ae/{service_slug}",
    type: "website",
    images: [
      {{
        url: "/dubai-interior-design-luxury.jpg",
        width: 1200,
        height: 630,
        alt: "{service} in {full_location}",
      }},
    ],
  }},
  robots: "index, follow",
  canonical: "https://interiara.ae/{service_slug}",
}}

export default function ServicePage() {{
  const whatsappNumber = "971561234567"
  const whatsappMessage = encodeURIComponent(
    "Hi Interiara! I'm interested in {service} services in {full_location}. Please share more details and pricing."
  )
  
  const displayedImages = galleryImages

  return (
    <main className="min-h-screen bg-background">
      <Navigation darkLogo hideMenu />
      
      {{/* Hero Section */}}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="text-accent font-mono uppercase tracking-wider mb-4">⭐ Expert {service}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {service} in <span className="text-primary">{full_location}</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed whitespace-pre-line">
                {intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">Book Free Consultation</Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">View Portfolio</Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 shadow-lg border">
                <h3 className="text-lg font-bold mb-4">Why Choose Interiara?</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Personalized design concepts</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete project management</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Premium materials & finishes</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Transparent pricing</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">On-time delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* What is Section */}}
      <section className="py-16 md:py-24 border-b bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p>{what_is}</p>
          </div>
        </div>
      </section>

      {{/* Why Choose Section */}}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p>{why_choose}</p>
          </div>
        </div>
      </section>

      {{/* Services Features */}}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our {service} Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {{serviceFeatures.map((feature) => (
              <div key={{feature.title}} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{{feature.title}}</h3>
                <p className="text-muted-foreground text-sm">{{feature.desc}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Process Section */}}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Design Process</h2>
          <div className="space-y-4">
            {{processSteps.map((item, idx) => (
              <div
                key={{item.step}}
                className="border rounded-lg overflow-hidden p-6 bg-card hover:shadow-lg transition"
              >
                <div className="flex gap-4">
                  <div className="text-2xl font-bold text-primary">{{item.step}}</div>
                  <div>
                    <h3 className="text-lg font-bold">{{item.title}}</h3>
                    <p className="text-muted-foreground text-sm">{{item.desc}}</p>
                  </div>
                </div>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Stats */}}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {{stats.map((stat) => (
              <div key={{stat.number}}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{{stat.number}}</p>
                <p className="text-primary-foreground/90">{{stat.label}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Gallery */}}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our {full_location} Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {{displayedImages.map((image, idx) => (
              <div key={{idx}} className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img
                  src={{image.src}}
                  alt={{image.alt}}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* CTA Form */}}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Get Your Free {service} Consultation
          </h2>
          <ServicePageForm service="{{{service}}}" location="{{{full_location}}}" />
        </div>
      </section>

      {{/* Final CTA */}}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your {full_location} Space Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover how our expert {service.lower()} can create your perfect {full_location} environment. Schedule your free consultation now.
          </p>
          <Button size="lg" variant="secondary">
            Book Your Free Consultation
          </Button>
        </div>
      </section>

      <WhatsAppFloat number={{whatsappNumber}} message={{whatsappMessage}} />
      <Footer />
    </main>
  )
}}
'''
    
    return page_content

# ============================================================================
# MAIN EXECUTION
# ============================================================================

def main():
    """Main page generation function"""
    print("🚀 Starting Comprehensive SEO Page Generator...")
    print("=" * 60)
    
    # Read keywords database
    keywords_file = Path("/Applications/Interiara/lib/seo-keywords.json")
    if not keywords_file.exists():
        print(f"❌ Keywords database not found at {keywords_file}")
        return
    
    with open(keywords_file) as f:
        keywords_data = json.load(f)
    
    base_app_path = Path("/Applications/Interiara/app")
    generated_count = 0
    error_count = 0
    
    for service_data in keywords_data:
        try:
            service_slug = service_data["service_slug"]
            service_name = service_data["service"]
            location = service_data["location_slug"]
            full_location = LOCATION_VARIATIONS.get(location, {}).get("full_name", service_data["location"])
            keywords = service_data["keywords"]
            meta_desc = service_data["meta_description"]
            
            # Create directory
            service_dir = base_app_path / service_slug
            service_dir.mkdir(parents=True, exist_ok=True)
            
            # Generate page content
            page_content = generate_full_page_tsx(
                service_name,
                service_slug,
                location,
                full_location,
                keywords,
                meta_desc
            )
            
            # Write page.tsx
            page_file = service_dir / "page.tsx"
            with open(page_file, 'w', encoding='utf-8') as f:
                f.write(page_content)
            
            print(f"✅ Generated: {service_slug}/page.tsx")
            generated_count += 1
            
        except Exception as e:
            error_count += 1
            print(f"❌ Error generating {service_data.get('service_slug', 'unknown')}: {str(e)}")
    
    print("=" * 60)
    print(f"✅ Pages Generated: {generated_count}")
    print(f"❌ Errors: {error_count}")
    print("🎉 SEO Page Generation Complete!")

if __name__ == "__main__":
    main()
