
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
// Residential Interior Design Al Satwa, Residential Interior Design Al Satwa Dubai, best Residential Interior Design in Al Satwa, professional Residential Interior Design Al Satwa, expert Residential Interior Design Al Satwa Dubai
// Residential Interior Design services Al Satwa, Residential Interior Design company Al Satwa, Residential Interior Design specialist Al Satwa, luxury Residential Interior Design Al Satwa, affordable Residential Interior Design Al Satwa
// Residential Interior Design contractor Al Satwa Dubai, top Residential Interior Design in Al Satwa, Residential Interior Design designer Al Satwa, custom Residential Interior Design Al Satwa, transform space with Residential Interior Design Al Satwa

const serviceFeatures = [
  { icon: Lightbulb, title: "Expert Design", desc: "Skilled designers creating beautiful residential interior design for Al Satwa homes" },
  { icon: Palette, title: "Color & Materials", desc: "Professional material selection ensuring perfect residential interior design results" },
  { icon: Layout, title: "Smart Planning", desc: "Strategic space planning optimizing residential interior design functionality" },
  { icon: Home, title: "Full Service", desc: "Complete residential interior design management from concept to completion" },
  { icon: Settings, title: "Tech Integration", desc: "Modern smart home solutions in residential interior design design" },
  { icon: Zap, title: "Quality Work", desc: "Professional craftsmanship ensuring exceptional residential interior design results" }
]

const stats = [
  { number: "300+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "25+", label: "Expert Designers" },
]

const galleryImages = [
  { src: "/dubai-interior-design-luxury.jpg", alt: "Residential Interior Design Al Satwa - Luxury design" },
  { src: "/Reception-9.jpg", alt: "Professional residential interior design for Al Satwa modern spaces" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "residential interior design Al Satwa - Contemporary style" },
  { src: "/Top-Living-Room-Decor.png", alt: "Expert residential interior design creating elegant Al Satwa interiors" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "residential interior design detail - Professional design" },
  { src: "/top-interior-designers-dubai.jpg", alt: "Top residential interior design designers in Al Satwa" },
]

const faqs = [
  { question: "What makes residential interior design different in Al Satwa?", answer: "Al Satwa has unique architectural styles. Our expertise considers local preferences, climate factors, and community standards." },
  { question: "How long does residential interior design take?", answer: "Most projects take 6-12 weeks. We establish clear timelines upfront and provide regular progress updates." },
  { question: "What budget for residential interior design?", answer: "Costs vary by scope and materials. We provide transparent quotes and work with various budgets." },
  { question: "Do you guarantee residential interior design work?", answer: "Yes, we provide comprehensive warranties on all materials and craftsmanship." },
]

export const metadata = {
  title: "Residential Interior Design in Al Satwa | Interiara Design Services",
  description: "Expert Residential Interior Design services in Al Satwa, Dubai. Professional design team with 15+ years experience. Get free consultation today!",
  keywords: "Residential Interior Design Al Satwa, Residential Interior Design Al Satwa Dubai, best Residential Interior Design in Al Satwa, professional Residential Interior Design Al Satwa, expert Residential Interior Design Al Satwa Dubai, Residential Interior Design services Al Satwa, Residential Interior Design company Al Satwa, Residential Interior Design specialist Al Satwa, luxury Residential Interior Design Al Satwa, affordable Residential Interior Design Al Satwa",
  openGraph: {
    title: "Residential Interior Design in Al Satwa",
    description: "Expert Residential Interior Design services in Al Satwa, Dubai. Professional design team with 15+ years experience. Get free consultation today!",
    url: "https://interiara.ae/residential-interior-design-al-satwa-dubai",
    type: "website",
  },
  robots: "index, follow",
  canonical: "https://interiara.ae/residential-interior-design-al-satwa-dubai",
}

export default function ServicePage() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [showAllImages, setShowAllImages] = useState(false)
  
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6)

  return (
    <main className="min-h-screen bg-background">
      <Navigation darkLogo hideMenu />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="text-accent font-mono uppercase tracking-wider mb-4">⭐ Expert Residential Interior Design</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Residential Interior Design in <span className="text-primary">Al Satwa</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed whitespace-pre-line">
                {Transform your Al Satwa home into your dream living space with expert residential interior design services. 

At Interiara, we specialize in Residential Interior Design Al Satwa with 15+ years of experience creating over 300 exceptional projects. Our team understands what Residential Interior Design Al Satwa Dubai means for Al Satwa homeowners—it's about creating spaces that are both beautiful and functional.

Whether you're seeking best Residential Interior Design in Al Satwa, modern updates, or complete transformations, our residential interior design expertise delivers results. We provide the best professional Residential Interior Design Al Satwa in Al Satwa through thoughtful design, quality materials, and professional execution.

Every residential interior design project in Al Satwa receives personalized attention. Our designers work closely with you to bring your vision to life, ensuring your new space perfectly reflects your lifestyle and preferences.}
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
                    <span className="text-sm">Expert residential interior design design</span>
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

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-line text-base leading-relaxed">
              {## Key Benefits of expert Residential Interior Design Al Satwa Dubai in Al Satwa

Our professional residential interior design in Al Satwa delivers multiple tangible benefits:

**Enhanced Living Quality**: Professional Residential Interior Design services Al Satwa transforms how you experience your home daily. Better layouts, improved lighting, and thoughtful material selections create spaces where you genuinely enjoy spending time.

**Property Value Appreciation**: Homes with professional Residential Interior Design company Al Satwa command higher market values and rental rates. Investment in quality design pays dividends through property appreciation and enhanced appeal to future buyers.

**Optimized Functionality**: Strategic planning ensures your Residential Interior Design specialist Al Satwa serves your lifestyle needs perfectly. Storage solutions, traffic flow, and spatial arrangement all contribute to improved daily functionality.

**Aesthetic Excellence**: Curated design creates beautiful spaces that you'll love living in. Professional luxury Residential Interior Design Al Satwa ensures color harmony, material coordination, and visual balance throughout your home.

**Stress-Free Execution**: Our comprehensive project management handles every detail of affordable Residential Interior Design Al Satwa, reducing your stress and ensuring timely, within-budget completion.

**Long-Term Durability**: Quality materials and professional execution mean your Residential Interior Design contractor Al Satwa Dubai investment lasts years without major renovations, protecting your investment in Al Satwa.

**Personalized Solutions**: Rather than generic designs, we create top Residential Interior Design in Al Satwa specifically tailored to your Al Satwa home, lifestyle, and preferences.

**Future-Ready Spaces**: Our designs incorporate smart technology and sustainable options, ensuring your Al Satwa home remains current and efficient.}
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Residential Interior Design Services</h2>
          <p className="text-center text-muted-foreground mb-12">Comprehensive residential interior design solutions</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceFeatures.map((feature) => (
              <div key={feature.title} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all">
                {(() => {
                  const Icon = feature.icon
                  return (
                    <>
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </>
                  )
                })()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-line text-base leading-relaxed">
              {## Our Residential Interior Design Process - 6 Steps to Your Dream Space

### Step 1: Consultation & Discovery
We begin by thoroughly understanding your vision for Residential Interior Design designer Al Satwa in Al Satwa. We discuss your needs, preferences, budget, and timeline.

### Step 2: Design Concept Development
Our expert team creates tailored custom Residential Interior Design Al Satwa concepts specifically for your Al Satwa space and lifestyle.

### Step 3: Detailed 3D Visualization
Experience your transformation through photorealistic 3D renderings and virtual walkthroughs of your new residential interior design.

### Step 4: Material & Finish Selection
Select premium materials perfectly suited for transform space with Residential Interior Design Al Satwa work and Al Satwa's climate.

### Step 5: Professional Implementation
Expert craftsmen professionally execute your design with quality assurance throughout.

### Step 6: Final Handover & Inspection
Complete inspection, delivery, and handover of your beautifully transformed Al Satwa space.}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Al Satwa Portfolio</h2>
          <p className="text-center text-muted-foreground mb-12">Beautiful residential interior design projects</p>
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

      {/* FAQ Section */}
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
                {## Frequently Asked Questions About Residential Interior Design in Al Satwa

**Q: What makes residential interior design different in Al Satwa?**
A: Al Satwa has unique architectural styles and lifestyle needs. Our Residential Interior Design Al Satwa expertise considers local preferences, climate factors, and community standards, ensuring designs that feel perfectly suited to Al Satwa.

**Q: How long does residential interior design typically take?**
A: Most Residential Interior Design Al Satwa Dubai projects in Al Satwa take 6-12 weeks depending on complexity. We establish clear timelines upfront and provide regular progress updates throughout your project.

**Q: What budget should I plan for residential interior design work?**
A: residential interior design costs vary based on project scope, materials, and timeline. We provide transparent quotes and work with various budgets. Many Al Satwa clients find our best Residential Interior Design in Al Satwa value exceptional given the quality delivered.

**Q: Do you offer guarantees on your residential interior design work?**
A: Yes, we provide comprehensive warranties on all materials and craftsmanship for professional Residential Interior Design Al Satwa projects. Our quality standards ensure your investment remains protected for years to come.

**Q: Can you work with my existing contractor?**
A: Yes, we collaborate effectively with existing contractors. Our project management ensures quality coordination for your Al Satwa expert Residential Interior Design Al Satwa Dubai project.

**Q: What makes your residential interior design approach special?**
A: Our combination of Residential Interior Design services Al Satwa expertise, local market knowledge, premium materials, and personalized service sets us apart in Al Satwa.}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Get Your Free Residential Interior Design Consultation
          </h2>
          <ServicePageForm service="Residential Interior Design" location="Al Satwa" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Al Satwa Home Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover how our expert residential interior design services create beautiful, functional spaces.
          </p>
          <Button size="lg" variant="secondary">
            Book Free Consultation
          </Button>
        </div>
      </section>

      <WhatsAppFloat number="971561234567" message="Hi Interiara! I'm interested in residential interior design services in Al Satwa." />
      <Footer />
    </main>
  )
}
