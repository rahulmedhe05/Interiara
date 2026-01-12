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

// SEO Keywords: Eco Friendly Interior Design Al Jaddaf, Eco Friendly Interior Design in Al Jaddaf, Best eco friendly interior design Al Jaddaf, Professional eco friendly interior design Al Jaddaf, Luxury eco friendly interior design Al Jaddaf, Eco Friendly Interior Design Al Jaddaf Dubai, Eco Friendly Interior Design designer Al Jaddaf, Eco Friendly Interior Design company Al Jaddaf, Eco Friendly Interior Design contractor Al Jaddaf, Affordable eco friendly interior design Al Jaddaf, Modern eco friendly interior design Al Jaddaf, Eco Friendly Interior Design consultation Al Jaddaf, Eco Friendly Interior Design cost Al Jaddaf, Eco Friendly Interior Design price Al Jaddaf, Top eco friendly interior design Al Jaddaf

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
  { src: "/dubai-interior-design-luxury.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Luxury design" },
  { src: "/Reception-9.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Modern space" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Contemporary style" },
  { src: "/Top-Living-Room-Decor.png", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Elegant interior" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Lighting design" },
  { src: "/top-interior-designers-dubai.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Professional design" },
  { src: "/dubai-luxury-interior-design-585x734.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Luxury spaces" },
  { src: "/Villa-interior-design-Al Jaddaf Dubai-with-Accouter-Design.webp", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Premium interiors" },
  { src: "/meet.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Modern design" },
  { src: "/2b-scaled.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Custom design" },
  { src: "/DSC01457-min-scaled.webp", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Expert execution" },
  { src: "/98488683052973.5d304d1b15e83.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Quality finishes" },
  { src: "/Color-Scheme-Modular-kitchen-Interior-Design-and-Fit-Out-DesignMaster-Al Jaddaf Dubai-2.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Functional design" },
  { src: "/Al-Barari-Kitchen.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Premium fixtures" },
  { src: "/kitchen-aesthetic-harmony-modern-luxury-fusion-interior-design-dream-home-1-min.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Aesthetic design" },
  { src: "/L-Shaped-Modern-kitchen-Layout-DesignMaster-Al Jaddaf Dubai.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Space planning" },
  { src: "/9f76af35953159a45c406d49cb9bc4d0.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Design excellence" },
  { src: "/Zen_PalmD1_07b-scaled-1.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Serene spaces" },
  { src: "/1-Unique-Bathroom-Projects.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Unique projects" },
  { src: "/8-Bathroom-Inspiration-By-Al Jaddaf Dubai-Top-Interior-Designers.jpeg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Design inspiration" },
  { src: "/Al Jaddaf Dubai-Bathroom-Design-2.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Al Jaddaf Dubai design" },
  { src: "/bathroom-1024x683.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Luxury bathroom" },
  { src: "/gf-ktchen-view2.jpg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Kitchen design" },
  { src: "/10-Stunning-Kitchen-Island-Designs-to-Elevate-Your-Culinary-Space.jpeg", alt: "Eco Friendly Interior Design Al Jaddaf Dubai - Island designs" },
]

export default function EcoFriendlyInteriorDesignAlJaddaf() {
  const [showAllImages, setShowAllImages] = useState(false)
  const whatsappNumber = "916353583148"
  const whatsappMessage = encodeURIComponent("Hi Interiara! I'm interested in Eco Friendly Interior Design Al Jaddaf Dubai services in Al Jaddaf Dubai. Please share more details.")
  
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6)

  return (
    <main className="min-h-screen bg-background">
      <Navigation darkLogo hideMenu />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3 order-1 lg:order-none">
              <p className="text-accent font-mono uppercase tracking-wider mb-4">Best eco friendly interior design Al Jaddaf Company Al Jaddaf</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Expert Eco Friendly Interior Design Al Jaddaf Dubai - <span className="text-primary">Transform Your Space</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                Looking for professional <strong>Eco Friendly Interior Design Al Jaddaf Dubai</strong>? Interiara is Al Jaddaf Dubai's premier <strong>Eco Friendly Interior Design Al Jaddaf Dubai company</strong>, specializing in creating beautiful, functional spaces. With 300+ projects completed and 15+ years of experience, we deliver exceptional results tailored to your needs.
              </p>
              
              <div className="relative mb-8 hidden lg:block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/dubai-interior-design-luxury.jpg" 
                    alt="Eco Friendly Interior Design Al Jaddaf Dubai by Interiara"
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
              <ServicePageForm serviceName="Eco Friendly Interior Design Al Jaddaf Dubai" />
            </div>
            
            <div className="order-3 lg:hidden w-full">
              <div className="relative mb-8">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/dubai-interior-design-luxury.jpg" 
                    alt="Eco Friendly Interior Design Al Jaddaf Dubai by Interiara"
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
              Why Choose Interiara for Eco Friendly Interior Design Al Jaddaf Dubai?
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                At Interiara, we believe that exceptional <strong>Eco Friendly Interior Design Al Jaddaf Dubai</strong> creates spaces that inspire and delight. With over 15 years of experience in the Al Jaddaf Dubai design industry, our team of 25+ expert designers understands the nuances of creating beautiful, functional spaces that exceed expectations.
              </p>

              <p>
                We've completed 300+ successful projects across Al Jaddaf Dubai and the UAE, ranging from residential to commercial spaces. Our portfolio showcases our versatility in Eco Friendly Interior Design Al Jaddaf Dubai, from contemporary minimalist designs to luxurious traditional aesthetics. Whether you're looking for budget-friendly solutions or premium luxury finishes, Interiara delivers excellence at every level.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Our Eco Friendly Interior Design Al Jaddaf Dubai Approach</h3>
              
              <p>
                We follow a proven design process that ensures your project is completed on time, within budget, and to your complete satisfaction. Our process begins with understanding your vision, lifestyle, and specific requirements.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Comprehensive Services</h3>
              
              <p>
                Our <strong>Eco Friendly Interior Design Al Jaddaf Dubai</strong> services include:
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
                Interiara stands out in the crowded Al Jaddaf Dubai design market through our commitment to quality, innovation, and client satisfaction. We don't just create beautiful spaces—we create experiences that enhance your daily life or business operations.
              </p>

              <p>
                Our team stays updated with the latest design trends and technologies, ensuring your project incorporates modern solutions. We work with premium suppliers and skilled craftsmen to guarantee that every element meets our exacting standards.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Investment in Your Space</h3>

              <p>
                Professional Eco Friendly Interior Design Al Jaddaf Dubai is an investment in your property's value and your quality of life. Well-designed spaces command higher property values, improve functionality, and create lasting impressions on clients and visitors.
              </p>

              <p>
                Whether you're renovating your home, opening a new business, or refreshing your existing space, Interiara is your trusted partner for exceptional <strong>Eco Friendly Interior Design Al Jaddaf Dubai</strong>. Contact us today for a free consultation and let's transform your space together.
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
              Why Choose Our Eco Friendly Interior Design Al Jaddaf Dubai Services
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
              Our Eco Friendly Interior Design Al Jaddaf Dubai Projects
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

      
      {/* Location Services Footer */}
      <section className="py-16 bg-muted/50 border-t">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              All Al Jaddaf Services
            </h2>
            <p className="text-muted-foreground mb-8">
              Explore our complete range of interior design services available in Al Jaddaf. 
              Each service is tailored to meet the unique needs and preferences of this area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <Link href="/3d-interior-rendering-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                3D Interior Rendering
              </Link>
              <Link href="/acoustic-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Acoustic Design
              </Link>
              <Link href="/affordable-interior-solutions-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Affordable Interior Solutions
              </Link>
              <Link href="/apartment-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Apartment Interior Design
              </Link>
              <Link href="/arabic-style-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Arabic Style Interior Design
              </Link>
              <Link href="/art-consultation-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Art Consultation
              </Link>
              <Link href="/balcony-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Balcony Interior Design
              </Link>
              <Link href="/banquet-hall-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Banquet Hall Interior Design
              </Link>
              <Link href="/bathroom-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Bathroom Interior Design
              </Link>
              <Link href="/bedroom-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Bedroom Interior Design
              </Link>
              <Link href="/bespoke-furniture-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Bespoke Furniture Design
              </Link>
              <Link href="/budget-interior-solutions-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Budget Interior Solutions
              </Link>
              <Link href="/cafe-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Cafe Interior Design
              </Link>
              <Link href="/childrens-room-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Childrens Room Interior Design
              </Link>
              <Link href="/clinic-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Clinic Interior Design
              </Link>
              <Link href="/closet-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Closet Design
              </Link>
              <Link href="/co-working-space-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Co Working Space Interior Design
              </Link>
              <Link href="/color-theme-consultation-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Color Theme Consultation
              </Link>
              <Link href="/commercial-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Commercial Interior Design
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="/contemporary-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Contemporary Interior Design
              </Link>
              <Link href="/corporate-office-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Corporate Office Interior Design
              </Link>
              <Link href="/custom-furniture-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Custom Furniture Design
              </Link>
              <Link href="/dining-room-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Dining Room Interior Design
              </Link>
              <Link href="/drapes-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Drapes
              </Link>
              <Link href="/eco-friendly-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Eco Friendly Interior Design
              </Link>
              <Link href="/event-hall-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Event Hall Interior Design
              </Link>
              <Link href="/fitness-studio-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Fitness Studio Interior Design
              </Link>
              <Link href="/gym-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Gym Interior Design
              </Link>
              <Link href="/healthcare-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Healthcare Interior Design
              </Link>
              <Link href="/home-decor-consultation-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Home Decor Consultation
              </Link>
              <Link href="/home-office-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Home Office Interior Design
              </Link>
              <Link href="/home-remodeling-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Home Remodeling
              </Link>
              <Link href="/home-renovation-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Home Renovation
              </Link>
              <Link href="/home-theater-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Home Theater Interior Design
              </Link>
              <Link href="/hotel-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Hotel Interior Design
              </Link>
              <Link href="/interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Interior Design
              </Link>
              <Link href="/interior-space-optimization-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Interior Space Optimization
              </Link>
              <Link href="/interior-visualization-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Interior Visualization
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="/kids-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Kids Interior Design
              </Link>
              <Link href="/kitchen-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Kitchen Interior Design
              </Link>
              <Link href="/lighting-automation-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Lighting Automation
              </Link>
              <Link href="/lighting-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Lighting Design
              </Link>
              <Link href="/living-room-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Living Room Interior Design
              </Link>
              <Link href="/luxury-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Luxury Interior Design
              </Link>
              <Link href="/mall-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Mall Interior Design
              </Link>
              <Link href="/media-room-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Media Room Interior Design
              </Link>
              <Link href="/minimalist-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Minimalist Interior Design
              </Link>
              <Link href="/modern-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Modern Interior Design
              </Link>
              <Link href="/modular-kitchens-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Modular Kitchens
              </Link>
              <Link href="/office-fit-out-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Office Fit Out
              </Link>
              <Link href="/office-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Office Interior Design
              </Link>
              <Link href="/office-renovation-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Office Renovation
              </Link>
              <Link href="/outdoor-living-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Outdoor Living Design
              </Link>
              <Link href="/penthouse-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Penthouse Interior Design
              </Link>
              <Link href="/residential-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Residential Interior Design
              </Link>
              <Link href="/restaurant-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Restaurant Interior Design
              </Link>
              <Link href="/retail-shop-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Retail Shop Interior Design
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="/salon-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Salon Interior Design
              </Link>
              <Link href="/showroom-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Showroom Interior Design
              </Link>
              <Link href="/smart-home-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Smart Home Interior Design
              </Link>
              <Link href="/smart-lighting-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Smart Lighting
              </Link>
              <Link href="/soundproofing-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Soundproofing Design
              </Link>
              <Link href="/spa-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Spa Interior Design
              </Link>
              <Link href="/space-planning-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Space Planning
              </Link>
              <Link href="/sustainable-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Sustainable Interior Design
              </Link>
              <Link href="/terrace-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Terrace Interior Design
              </Link>
              <Link href="/villa-interior-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Villa Interior Design
              </Link>
              <Link href="/wall-coverings-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Wall Coverings
              </Link>
              <Link href="/wall-flooring-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Wall Flooring Design
              </Link>
              <Link href="/wallpaper-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Wallpaper Design
              </Link>
              <Link href="/wardrobe-design-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Wardrobe Design
              </Link>
              <Link href="/window-blinds-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Window Blinds
              </Link>
              <Link href="/window-curtains-al-jaddaf-dubai" className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium">
                Window Curtains
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <p className="text-center text-sm text-muted-foreground">
              Looking for a specific service in Al Jaddaf? 
              <Link href="/" className="text-primary hover:underline ml-1">
                Explore all our services
              </Link>
            </p>
          </div>
        </div>
      </section>


      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
