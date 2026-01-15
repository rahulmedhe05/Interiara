'use client'

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ServicePageForm } from "@/components/service-page-form"
import { Phone, Lightbulb, Palette, Layout, Home, Settings, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  { src: "/dubai-interior-design-luxury.jpg", alt: "Luxury design" },
  { src: "/Reception-9.jpg", alt: "Modern space" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "Contemporary style" },
  { src: "/Top-Living-Room-Decor.png", alt: "Elegant interior" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "Lighting design" },
  { src: "/top-interior-designers-dubai.jpg", alt: "Professional design" },
  { src: "/dubai-luxury-interior-design-585x734.jpg", alt: "Luxury spaces" },
  { src: "/Villa-interior-design-Dubai Marina Dubai-with-Accouter-Design.webp", alt: "Premium interiors" },
  { src: "/meet.jpg", alt: "Modern design" },
  { src: "/2b-scaled.jpg", alt: "Custom design" },
  { src: "/DSC01457-min-scaled.webp", alt: "Expert execution" },
  { src: "/98488683052973.5d304d1b15e83.jpg", alt: "Quality finishes" },
]

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function DynamicServicePageContent({ slug }: { slug: string }) {
  const [showAllImages, setShowAllImages] = useState(false)
  const whatsappNumber = "916353583148"
  
  if (!slug) {
    return <div>Loading...</div>
  }
  
  const serviceName = formatSlug(slug)
  const whatsappMessage = encodeURIComponent(`Hi Interiara! I'm interested in ${serviceName} services in Dubai. Please share more details.`)
  
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6)

  return (
    <main className="min-h-screen bg-background">
      <Navigation darkLogo hideMenu />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3 order-1 lg:order-none">
              <p className="text-accent font-mono uppercase tracking-wider mb-4">Premium Services</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {serviceName} - <span className="text-primary">Transform Your Space</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                Looking for professional <strong>{serviceName}</strong>? Interiara is Dubai's premier interior design company, specializing in creating beautiful, functional spaces. With 300+ projects completed and 15+ years of experience, we deliver exceptional results tailored to your needs.
              </p>
              
              <div className="relative mb-8 hidden lg:block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/dubai-interior-design-luxury.jpg" 
                    alt={serviceName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">300+</p>
                  <p className="text-xs">Projects Completed</p>
                </div>
              </div>
              
              <div className="grid-cols-3 gap-4 hidden lg:grid">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-card rounded-lg border border-border">
                    <p className="text-2xl font-bold text-primary">{stat.number}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 order-2 lg:order-none w-full">
              <ServicePageForm serviceName={serviceName} />
            </div>
            
            <div className="order-3 lg:hidden w-full">
              <div className="relative mb-8">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/dubai-interior-design-luxury.jpg" 
                    alt={serviceName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">300+</p>
                  <p className="text-xs">Projects Completed</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-card rounded-lg border border-border">
                    <p className="text-2xl font-bold text-primary">{stat.number}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 md:py-24 bg-card/50 border-t border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our {serviceName} Services?</h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {serviceFeatures.map((feature, i) => (
              <div key={i} className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((process, i) => (
              <div key={i} className="p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-3">{process.step}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {displayedImages.map((image, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
          {galleryImages.length > 6 && (
            <div className="text-center mt-8">
              <Button 
                onClick={() => setShowAllImages(!showAllImages)}
                variant="outline"
              >
                {showAllImages ? 'Show Less' : 'View More'}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's bring your vision to life with our expert {serviceName.toLowerCase()} services.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            <Phone className="w-5 h-5" />
            Contact Us on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
