
"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ServicePageForm } from "@/components/service-page-form"
import { Phone, CheckCircle, Star, ArrowRight, Lightbulb, Palette, Layout, Home, Settings, Zap, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// SEO Keywords (15 keywords x 3 placements = 45 total occurrences)
// Lighting Design JBR, Lighting Design JBR Dubai, best Lighting Design in JBR, professional Lighting Design JBR, expert Lighting Design JBR Dubai
// Lighting Design services JBR, Lighting Design company JBR, Lighting Design specialist JBR, luxury Lighting Design JBR, affordable Lighting Design JBR
// Lighting Design contractor JBR Dubai, top Lighting Design in JBR, Lighting Design designer JBR, custom Lighting Design JBR, transform space with Lighting Design JBR

const serviceFeatures = [
  { icon: Lightbulb, title: "Expert Design", desc: "Skilled designers creating beautiful lighting design for JBR homes" },
  { icon: Palette, title: "Color & Materials", desc: "Professional material selection ensuring perfect lighting design results" },
  { icon: Layout, title: "Smart Planning", desc: "Strategic space planning optimizing lighting design functionality" },
  { icon: Home, title: "Full Service", desc: "Complete lighting design management from concept to completion" },
  { icon: Settings, title: "Tech Integration", desc: "Modern smart home solutions in lighting design design" },
  { icon: Zap, title: "Quality Work", desc: "Professional craftsmanship ensuring exceptional lighting design results" }
]

const stats = [
  { number: "300+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "25+", label: "Expert Designers" },
]

const galleryImages = [
  { src: "/dubai-interior-design-luxury.jpg", alt: "Lighting Design JBR - Luxury design" },
  { src: "/Reception-9.jpg", alt: "Professional lighting design for JBR modern spaces" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "lighting design JBR - Contemporary style" },
  { src: "/Top-Living-Room-Decor.png", alt: "Expert lighting design creating elegant JBR interiors" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "lighting design detail - Professional design" },
  { src: "/top-interior-designers-dubai.jpg", alt: "Top lighting design designers in JBR" },
]

const faqs = [
  { question: "What makes lighting design different in JBR?", answer: "JBR has unique architectural styles. Our expertise considers local preferences, climate factors, and community standards." },
  { question: "How long does lighting design take?", answer: "Most projects take 6-12 weeks. We establish clear timelines upfront and provide regular progress updates." },
  { question: "What budget for lighting design?", answer: "Costs vary by scope and materials. We provide transparent quotes and work with various budgets." },
  { question: "Do you guarantee lighting design work?", answer: "Yes, we provide comprehensive warranties on all materials and craftsmanship." },
]

export const metadata = {
  title: "Lighting Design in JBR | Interiara Design Services",
  description: "Expert Lighting Design services in JBR, Dubai. Professional design team with 15+ years experience. Get free consultation today!",
  keywords: "Lighting Design JBR, Lighting Design JBR Dubai, best Lighting Design in JBR, professional Lighting Design JBR, expert Lighting Design JBR Dubai, Lighting Design services JBR, Lighting Design company JBR, Lighting Design specialist JBR, luxury Lighting Design JBR, affordable Lighting Design JBR",
  openGraph: {
    title: "Lighting Design in JBR",
    description: "Expert Lighting Design services in JBR, Dubai. Professional design team with 15+ years experience. Get free consultation today!",
    url: "https://interiara.ae/lighting-design-jbr-dubai",
    type: "website",
  },
  robots: "index, follow",
  canonical: "https://interiara.ae/lighting-design-jbr-dubai",
}

export default function ServicePage() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [showAllImages, setShowAllImages] = useState(false)
  
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6)

  return (
    <main className="min-h-screen bg-background">
      <Navigation darkLogo hideMenu />
      
      {"/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="text-accent font-mono uppercase tracking-wider mb-4">⭐ Expert Lighting Design</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Lighting Design in <span className="text-primary">JBR</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed whitespace-pre-line">
                {`Transform your JBR home into your dream living space with expert lighting design services. 

At Interiara, we specialize in Lighting Design JBR with 15+ years of experience creating over 300 exceptional projects. Our team understands what Lighting Design JBR Dubai means for JBR homeowners—it's about creating spaces that are both beautiful and functional.

Whether you're seeking best Lighting Design in JBR, modern updates, or complete transformations, our lighting design expertise delivers results. We provide the best professional Lighting Design JBR in JBR through thoughtful design, quality materials, and professional execution.

Every lighting design project in JBR receives personalized attention. Our designers work closely with you to bring your vision to life, ensuring your new space perfectly reflects your lifestyle and preferences.`}
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
                    <span className="text-sm">Expert lighting design design</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">15+ years experience</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Premium materials</span>
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

      {"/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-line text-base leading-relaxed">
              {`## Key Benefits of expert Lighting Design JBR Dubai in JBR

Our professional lighting design in JBR delivers multiple tangible benefits:

**Enhanced Living Quality**: Professional Lighting Design services JBR transforms how you experience your home daily. Better layouts, improved lighting, and thoughtful material selections create spaces where you genuinely enjoy spending time.

**Property Value Appreciation**: Homes with professional Lighting Design company JBR command higher market values and rental rates. Investment in quality design pays dividends through property appreciation and enhanced appeal to future buyers.

**Optimized Functionality**: Strategic planning ensures your Lighting Design specialist JBR serves your lifestyle needs perfectly. Storage solutions, traffic flow, and spatial arrangement all contribute to improved daily functionality.

**Aesthetic Excellence**: Curated design creates beautiful spaces that you'll love living in. Professional luxury Lighting Design JBR ensures color harmony, material coordination, and visual balance throughout your home.

**Stress-Free Execution**: Our comprehensive project management handles every detail of affordable Lighting Design JBR, reducing your stress and ensuring timely, within-budget completion.

**Long-Term Durability**: Quality materials and professional execution mean your Lighting Design contractor JBR Dubai investment lasts years without major renovations, protecting your investment in JBR.

**Personalized Solutions**: Rather than generic designs, we create top Lighting Design in JBR specifically tailored to your JBR home, lifestyle, and preferences.

**Future-Ready Spaces**: Our designs incorporate smart technology and sustainable options, ensuring your JBR home remains current and efficient.`}
            </div>
          </div>
        </div>
      </section>

      {"/* Service Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Lighting Design Services</h2>
          <p className="text-center text-muted-foreground mb-12">Comprehensive lighting design solutions</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              )
            }))}
          </div>
        </div>
      </section>

      {"/* Process Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-line text-base leading-relaxed">
              {`## Our Lighting Design Process - 6 Steps to Your Dream Space

### Step 1: Consultation & Discovery
We begin by thoroughly understanding your vision for Lighting Design designer JBR in JBR. We discuss your needs, preferences, budget, and timeline.

### Step 2: Design Concept Development
Our expert team creates tailored custom Lighting Design JBR concepts specifically for your JBR space and lifestyle.

### Step 3: Detailed 3D Visualization
Experience your transformation through photorealistic 3D renderings and virtual walkthroughs of your new lighting design.

### Step 4: Material & Finish Selection
Select premium materials perfectly suited for transform space with Lighting Design JBR work and JBR's climate.

### Step 5: Professional Implementation
Expert craftsmen professionally execute your design with quality assurance throughout.

### Step 6: Final Handover & Inspection
Complete inspection, delivery, and handover of your beautifully transformed JBR space.`}
            </div>
          </div>
        </div>
      </section>

      {"/* Stats */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.number}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-primary-foreground/90 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {"/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">JBR Portfolio</h2>
          <p className="text-center text-muted-foreground mb-12">Beautiful lighting design projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {displayedImages.map((image, idx) => (
              <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
          {displayedImages.length < galleryImages.length && (
            <div className="text-center">
              <Button onClick={() => setShowAllImages(true)} variant="outline" size="lg">
                View More Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {"/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs</h2>
          <p className="text-muted-foreground mb-12">Common questions about our services</p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card rounded-lg border">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition"
                >
                  <h3 className="font-bold">{faq.question}</h3>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-primary" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12">
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-line text-base leading-relaxed">
                {`## Frequently Asked Questions About Lighting Design in JBR

**Q: What makes lighting design different in JBR?**
A: JBR has unique architectural styles and lifestyle needs. Our Lighting Design JBR expertise considers local preferences, climate factors, and community standards, ensuring designs that feel perfectly suited to JBR.

**Q: How long does lighting design typically take?**
A: Most Lighting Design JBR Dubai projects in JBR take 6-12 weeks depending on complexity. We establish clear timelines upfront and provide regular progress updates throughout your project.

**Q: What budget should I plan for lighting design work?**
A: lighting design costs vary based on project scope, materials, and timeline. We provide transparent quotes and work with various budgets. Many JBR clients find our best Lighting Design in JBR value exceptional given the quality delivered.

**Q: Do you offer guarantees on your lighting design work?**
A: Yes, we provide comprehensive warranties on all materials and craftsmanship for professional Lighting Design JBR projects. Our quality standards ensure your investment remains protected for years to come.

**Q: Can you work with my existing contractor?**
A: Yes, we collaborate effectively with existing contractors. Our project management ensures quality coordination for your JBR expert Lighting Design JBR Dubai project.

**Q: What makes your lighting design approach special?**
A: Our combination of Lighting Design services JBR expertise, local market knowledge, premium materials, and personalized service sets us apart in JBR.`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {"/* CTA Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Get Your Free Lighting Design Consultation
          </h2>
          <ServicePageForm service="Lighting Design" location="JBR" />
        </div>
      </section>

      {"/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your JBR Home Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover how our expert lighting design services create beautiful, functional spaces.
          </p>
          <Button size="lg" variant="secondary">
            Book Free Consultation
          </Button>
        </div>
      </section>

      <WhatsAppFloat number="971561234567" message="Hi Interiara! I'm interested in lighting design services in JBR." />
      <Footer />
    </main>
  )
}
