"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ServicePageForm } from "@/components/service-page-form"
import { Phone, CheckCircle, Star, ArrowRight, Lightbulb, Palette, Layout, Home, Settings, Zap, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{__html: JSON.stringify({{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Interiara",
    "description": "Space Planning in Mirdif, Dubai",
    "url": "https://interiara.com/space-planning-mirdif",
    "telephone": "+91 635 358 3148",
    "email": "info@interiara.com",
    "areaServed": "Mirdif, Dubai",
    "service": {{
      "@type": "Service",
      "name": "Space Planning",
      "areaServed": "Mirdif, Dubai",
      "provider": {{
        "@type": "LocalBusiness",
        "name": "Interiara"
      }}
    }},
    "address": {{
      "@type": "PostalAddress",
      "addressLocality": "Mirdif",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    }},
    "aggregateRating": {{
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "98"
    }}
  }})} />
<script
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
        "name": "Mirdif",
        "item": "https://interiara.com/mirdif"
      }},
      {{
        "@type": "ListItem",
        "position": 3,
        "name": "Space Planning",
        "item": "https://interiara.com/space-planning-mirdif"
      }}
    ]
  }})} />

export const metadata = {
  title: "Space Planning in Mirdif, Dubai | Interiara",
  description: "Expert space planning in Mirdif, Dubai. Premium design & professional execution. 300+ projects completed. Book your free consultation!",
  keywords: [
    "space planning",
    "space planning Mirdif",
    "space planning Mirdif Dubai",
    "professional space planning",
    "best space planning",
    "space planning services",
    "luxury space planning",
    "affordable space planning",
    "expert space planning",
    "custom space planning",
  ],
  openGraph: {
    title: "Space Planning in Mirdif, Dubai | Interiara",
    description: "Expert space planning in Mirdif, Dubai. Premium design & professional execution. 300+ projects completed. Book your free consultation!",
    url: "https://interiara.com/space-planning-mirdif",
    siteName: "Interiara",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  canonical: "https://interiara.com/space-planning-mirdif",
  twitter: {
    card: "summary_large_image",
    title: "Space Planning in Mirdif, Dubai | Interiara",
    description: "Expert space planning in Mirdif, Dubai. Premium design & professional execution. 300+ projects completed. Book your free consultation!",
    images: ["/og-image.jpg"],
  },
}
// SEO Keywords: Space Planning Mirdif, Space in Planning Mirdif, Best space Planning Mirdif, Professional space Planning Mirdif, Luxury space Planning Mirdif, Space Planning Mirdif Dubai, Space designer Planning Mirdif, Space company Planning Mirdif, Space contractor Planning Mirdif, Affordable space Planning Mirdif, Modern space Planning Mirdif, Space consultation Planning Mirdif, Space cost Planning Mirdif, Space price Planning Mirdif, Top space Planning Mirdif, Space near Planning Mirdif, Space specialists Planning Mirdif, Space experts Planning Mirdif, Space solutions Planning Mirdif, Space packages Planning Mirdif, Space quotes Planning Mirdif, Space estimates Planning Mirdif, Space services near me Planning Mirdif, Cheap Space Planning Mirdif, Quality Space Planning Mirdif, Trusted Space Planning Mirdif, Space transformation Planning Mirdif, Space renovation Planning Mirdif, Space makeover Planning Mirdif, Best Space company Planning Mirdif

const serviceFeatures = [
  { icon: Lightbulb, title: "Expert Design", desc: "Professional expertise with proven track record" },
  { icon: Palette, title: "Custom Solutions", desc: "Tailored designs matching your vision" },
  { icon: Layout, title: "Space Optimization", desc: "Smart layouts maximizing functionality" },
  { icon: Home, title: "Quality Materials", desc: "Premium finishes and durable solutions" },
  { icon: Settings, title: "Project Management", desc: "Seamless execution from start to finish" },
  { icon: Zap, title: "Timely Delivery", desc: "Efficient completion within timeline" },
]

const processSteps = [
  { step: "01", title: "Consultation", desc: "We understand your needs, vision, and requirements." },
  { step: "02", title: "Design Concept", desc: "Our team creates tailored design concepts for approval." },
  { step: "03", title: "3D Visualization", desc: "Experience your space through photorealistic renders." },
  { step: "04", title: "Material Selection", desc: "Choose from premium materials and finishes." },
  { step: "05", title: "Execution", desc: "Professional implementation with quality assurance." },
  { step: "06", title: "Handover", desc: "Final inspection and delivery of your transformed space." },
]

const stats = [
  { number: "300+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "25+", label: "Expert Designers" },
]

const galleryImages = [
  { src: "/dubai-interior-design-luxury.jpg", alt: "Space Planning Mirdif Dubai - Luxury design" },
  { src: "/Reception-9.jpg", alt: "Space Planning Mirdif Dubai - Modern space" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "Space Planning Mirdif Dubai - Contemporary style" },
  { src: "/Top-Living-Room-Decor.png", alt: "Space Planning Mirdif Dubai - Elegant interior" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "Space Planning Mirdif Dubai - Lighting design" },
  { src: "/top-interior-designers-dubai.jpg", alt: "Space Planning Mirdif Dubai - Professional design" },
  { src: "/dubai-luxury-interior-design-585x734.jpg", alt: "Space Planning Mirdif Dubai - Luxury spaces" },
  { src: "/Villa-interior-design-Mirdif Dubai-with-Accouter-Design.webp", alt: "Space Planning Mirdif Dubai - Premium interiors" },
  { src: "/meet.jpg", alt: "Space Planning Mirdif Dubai - Modern design" },
  { src: "/2b-scaled.jpg", alt: "Space Planning Mirdif Dubai - Custom design" },
  { src: "/DSC01457-min-scaled.webp", alt: "Space Planning Mirdif Dubai - Expert execution" },
  { src: "/98488683052973.5d304d1b15e83.jpg", alt: "Space Planning Mirdif Dubai - Quality finishes" },
  { src: "/Color-Scheme-Modular-kitchen-Interior-Design-and-Fit-Out-DesignMaster-Mirdif Dubai-2.jpg", alt: "Space Planning Mirdif Dubai - Functional design" },
  { src: "/Al-Barari-Kitchen.jpg", alt: "Space Planning Mirdif Dubai - Premium fixtures" },
  { src: "/kitchen-aesthetic-harmony-modern-luxury-fusion-interior-design-dream-home-1-min.jpg", alt: "Space Planning Mirdif Dubai - Aesthetic design" },
  { src: "/L-Shaped-Modern-kitchen-Layout-DesignMaster-Mirdif Dubai.jpg", alt: "Space Planning Mirdif Dubai - Space planning" },
  { src: "/9f76af35953159a45c406d49cb9bc4d0.jpg", alt: "Space Planning Mirdif Dubai - Design excellence" },
  { src: "/Zen_PalmD1_07b-scaled-1.jpg", alt: "Space Planning Mirdif Dubai - Serene spaces" },
  { src: "/1-Unique-Bathroom-Projects.jpg", alt: "Space Planning Mirdif Dubai - Unique projects" },
  { src: "/8-Bathroom-Inspiration-By-Mirdif Dubai-Top-Interior-Designers.jpeg", alt: "Space Planning Mirdif Dubai - Design inspiration" },
  { src: "/Mirdif Dubai-Bathroom-Design-2.jpg", alt: "Space Planning Mirdif Dubai - Mirdif Dubai design" },
  { src: "/bathroom-1024x683.jpg", alt: "Space Planning Mirdif Dubai - Luxury bathroom" },
  { src: "/gf-ktchen-view2.jpg", alt: "Space Planning Mirdif Dubai - Kitchen design" },
  { src: "/10-Stunning-Kitchen-Island-Designs-to-Elevate-Your-Culinary-Space.jpeg", alt: "Space Planning Mirdif Dubai - Island designs" },
]

export default function SpacePlanningMirdif() {
  const [showAllImages, setShowAllImages] = useState(false)
  const whatsappNumber = "916353583148"
  const whatsappMessage = encodeURIComponent("Hi Interiara! I'm interested in Space Planning Mirdif Dubai services in Mirdif Dubai. Please share more details.")
  
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6)

  return (
    <main className="min-h-screen bg-background">
      <Navigation darkLogo hideMenu />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3 order-1 lg:order-none">
              <p className="text-accent font-mono uppercase tracking-wider mb-4">Space in Planning Mirdif. Best space Planning Mirdif Company Planning Mirdif Our luxury space planning mirdif services are designed for excellence.</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Expert Space Planning Mirdif Dubai - <span className="text-primary">Transform Your Space</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                Looking for professional <strong>Space Planning Mirdif Dubai</strong>? Interiara is Mirdif Dubai's premier <strong>Space Planning Mirdif Dubai company</strong>, specializing in creating beautiful, functional spaces. With 300+ projects completed and 15+ years of experience, we deliver exceptional results tailored to your needs.
              </p>
              
              <div className="relative mb-8 hidden lg:block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/dubai-interior-design-luxury.jpg" 
                    alt="Space Planning Mirdif Dubai by Interiara"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">300+</p>
                  <p className="text-xs">Projects Completed</p>
                </div>
              </div>
              
              <div className="grid-cols-3 gap-4 hidden lg:grid">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">25+</p>
                  <p className="text-xs text-muted-foreground">Expert Designers</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 order-2 lg:order-none w-full">
              <ServicePageForm serviceName="Space Planning Mirdif Dubai" />
            </div>
            
            <div className="order-3 lg:hidden w-full">
              <div className="relative mb-8">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/dubai-interior-design-luxury.jpg" 
                    alt="Space Planning Mirdif Dubai by Interiara"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">300+</p>
                  <p className="text-xs">Projects Completed</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">25+</p>
                  <p className="text-xs text-muted-foreground">Expert Designers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-primary-foreground/80 font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why Choose Interiara for Space Planning Mirdif Dubai?
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                At Interiara, we believe that exceptional <strong>Space Planning Mirdif Dubai</strong> creates spaces that inspire and delight. With over 15 years of experience in the Mirdif Dubai design industry, our team of 25+ expert designers understands the nuances of creating beautiful, functional spaces that exceed expectations.
              </p>

              <p>
                We've completed 300+ successful projects across Mirdif Dubai and the UAE, ranging from residential to commercial spaces. Our portfolio showcases our versatility in Space Planning Mirdif Dubai, from contemporary minimalist designs to luxurious traditional aesthetics. Whether you're looking for budget-friendly solutions or premium luxury finishes, Interiara delivers excellence at every level.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Our Space Planning Mirdif Dubai Approach</h3>
              
              <p>
                We follow a proven design process that ensures your project is completed on time, within budget, and to your complete satisfaction. Our process begins with understanding your vision, lifestyle, and specific requirements.
               Our space in planning mirdif service ensures quality.</p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Comprehensive Services</h3>
              
              <p>
                Our <strong>Space Planning Mirdif Dubai</strong> services include:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Initial consultation and space analysis</li>
                <li>Concept design and mood boards</li>
                <li>3D visualization and virtual walkthroughs</li>
                <li>Material and color selection</li>
                <li>Project management and execution</li>
                <li>Final handover and after-sales support</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Why We're Different</h3>

              <p>
                Interiara stands out in the crowded Mirdif Dubai design market through our commitment to quality, innovation, and client satisfaction. We don't just create beautiful spaces—we create experiences that enhance your daily life or business operations.
               Specializing in space near planning mirdif.</p>

              <p>
                Our team stays updated with the latest design trends and technologies, ensuring your project incorporates modern solutions. We work with premium suppliers and skilled craftsmen to guarantee that every element meets our exacting standards.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Investment in Your Space</h3>

              <p>
                Professional Space Planning Mirdif Dubai is an investment in your property's value and your quality of life. Well-designed spaces command higher property values, improve functionality, and create lasting impressions on clients and visitors.
              </p>

              <p>
                Whether you're renovating your home, opening a new business, or refreshing your existing space, Interiara is your trusted partner for exceptional <strong>Space Planning Mirdif Dubai</strong>. Contact us today for a free consultation and let's transform your space together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our Space Planning Mirdif Dubai Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional expertise delivered with excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A seamless journey from concept to completion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-8 rounded-xl border border-border h-full">
                  <span className="text-6xl font-bold text-primary/20 absolute top-4 right-4">{item.step}</span>
                  <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">{item.title}</h3>
                  <p className="text-muted-foreground relative z-10">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Space Planning Mirdif Dubai Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of beautifully designed spaces
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {displayedImages.map((image, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAllImages(!showAllImages)}
            >
              {showAllImages ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 w-5 h-5" />
                </>
              ) : (
                <>
                  View More
                  <ChevronDown className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book your free consultation today. Our expert team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                  WhatsApp Us Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="tel:+916353583148">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +91 635 358 3148
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      
{/* Related Services in this Area */}
<section className="py-16 bg-muted/50 border-t">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-2">
        Other Services in Mirdif
      </h2>
      <p className="text-muted-foreground mb-8">
        Explore our complete range of interior design services in Mirdif
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Link 
          href="/3d-interior-rendering-mirdif"
          className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
        >
          <p className="font-semibold text-foreground hover:text-primary">3D Interior Rendering</p>
          <p className="text-xs text-muted-foreground">Mirdif</p>
        </Link>
        <Link 
          href="/acoustic-design-mirdif"
          className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
        >
          <p className="font-semibold text-foreground hover:text-primary">Acoustic Design</p>
          <p className="text-xs text-muted-foreground">Mirdif</p>
        </Link>
        <Link 
          href="/affordable-interior-solutions-mirdif"
          className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
        >
          <p className="font-semibold text-foreground hover:text-primary">Affordable Interior Solutions</p>
          <p className="text-xs text-muted-foreground">Mirdif</p>
        </Link>
        <Link 
          href="/apartment-interior-design-mirdif"
          className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
        >
          <p className="font-semibold text-foreground hover:text-primary">Apartment Interior Design</p>
          <p className="text-xs text-muted-foreground">Mirdif</p>
        </Link>
        <Link 
          href="/arabic-style-interior-design-mirdif"
          className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
        >
          <p className="font-semibold text-foreground hover:text-primary">Arabic Style Interior Design</p>
          <p className="text-xs text-muted-foreground">Mirdif</p>
        </Link>
        <Link 
          href="/art-consultation-mirdif"
          className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
        >
          <p className="font-semibold text-foreground hover:text-primary">Art Consultation</p>
          <p className="text-xs text-muted-foreground">Mirdif</p>
        </Link>
        <Link 
          href="/balcony-interior-design-mirdif"
          className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
        >
          <p className="font-semibold text-foreground hover:text-primary">Balcony Interior Design</p>
          <p className="text-xs text-muted-foreground">Mirdif</p>
        </Link>
        <Link 
          href="/banquet-hall-interior-design-mirdif"
          className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
        >
          <p className="font-semibold text-foreground hover:text-primary">Banquet Hall Interior Design</p>
          <p className="text-xs text-muted-foreground">Mirdif</p>
        </Link>
      </div>
    </div>
  </div>
</section>

      <WhatsAppFloat />
    </main>
  )
}
