
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
// Home Decor Consultation JBR, Home Decor Consultation JBR Dubai, best Home Decor Consultation in JBR, professional Home Decor Consultation JBR, expert Home Decor Consultation JBR Dubai
// Home Decor Consultation services JBR, Home Decor Consultation company JBR, Home Decor Consultation specialist JBR, luxury Home Decor Consultation JBR, affordable Home Decor Consultation JBR
// Home Decor Consultation contractor JBR Dubai, top Home Decor Consultation in JBR, Home Decor Consultation designer JBR, custom Home Decor Consultation JBR, transform space with Home Decor Consultation JBR

const serviceFeatures = [
  { icon: Lightbulb, title: "Expert Design", desc: "Skilled designers creating beautiful home decor consultation for JBR homes" },
  { icon: Palette, title: "Color & Materials", desc: "Professional material selection ensuring perfect home decor consultation results" },
  { icon: Layout, title: "Smart Planning", desc: "Strategic space planning optimizing home decor consultation functionality" },
  { icon: Home, title: "Full Service", desc: "Complete home decor consultation management from concept to completion" },
  { icon: Settings, title: "Tech Integration", desc: "Modern smart home solutions in home decor consultation design" },
  { icon: Zap, title: "Quality Work", desc: "Professional craftsmanship ensuring exceptional home decor consultation results" }
]

const stats = [
  { number: "300+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "25+", label: "Expert Designers" },
]

const galleryImages = [
  { src: "/dubai-interior-design-luxury.jpg", alt: "Home Decor Consultation JBR - Luxury design" },
  { src: "/Reception-9.jpg", alt: "Professional home decor consultation for JBR modern spaces" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "home decor consultation JBR - Contemporary style" },
  { src: "/Top-Living-Room-Decor.png", alt: "Expert home decor consultation creating elegant JBR interiors" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "home decor consultation detail - Professional design" },
  { src: "/top-interior-designers-dubai.jpg", alt: "Top home decor consultation designers in JBR" },
]

const faqs = [
  { question: "What makes home decor consultation different in JBR?", answer: "JBR has unique architectural styles. Our expertise considers local preferences, climate factors, and community standards." },
  { question: "How long does home decor consultation take?", answer: "Most projects take 6-12 weeks. We establish clear timelines upfront and provide regular progress updates." },
  { question: "What budget for home decor consultation?", answer: "Costs vary by scope and materials. We provide transparent quotes and work with various budgets." },
  { question: "Do you guarantee home decor consultation work?", answer: "Yes, we provide comprehensive warranties on all materials and craftsmanship." },
]

export const metadata = {
  title: "Home Decor Consultation in JBR | Interiara Design Services",
  description: "Expert Home Decor Consultation services in JBR, Dubai. Professional design team with 15+ years experience. Get free consultation today!",
  keywords: "Home Decor Consultation JBR, Home Decor Consultation JBR Dubai, best Home Decor Consultation in JBR, professional Home Decor Consultation JBR, expert Home Decor Consultation JBR Dubai, Home Decor Consultation services JBR, Home Decor Consultation company JBR, Home Decor Consultation specialist JBR, luxury Home Decor Consultation JBR, affordable Home Decor Consultation JBR",
  openGraph: {
    title: "Home Decor Consultation in JBR",
    description: "Expert Home Decor Consultation services in JBR, Dubai. Professional design team with 15+ years experience. Get free consultation today!",
    url: "https://interiara.ae/home-decor-consultation-jbr-dubai",
    type: "website",
  },
  robots: "index, follow",
  canonical: "https://interiara.ae/home-decor-consultation-jbr-dubai",
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
              <p className="text-accent font-mono uppercase tracking-wider mb-4">⭐ Expert Home Decor Consultation</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Home Decor Consultation in <span className="text-primary">JBR</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed whitespace-pre-line">
                {Transform your JBR home into your dream living space with expert home decor consultation services. 

At Interiara, we specialize in Home Decor Consultation JBR with 15+ years of experience creating over 300 exceptional projects. Our team understands what Home Decor Consultation JBR Dubai means for JBR homeowners—it's about creating spaces that are both beautiful and functional.

Whether you're seeking best Home Decor Consultation in JBR, modern updates, or complete transformations, our home decor consultation expertise delivers results. We provide the best professional Home Decor Consultation JBR in JBR through thoughtful design, quality materials, and professional execution.

Every home decor consultation project in JBR receives personalized attention. Our designers work closely with you to bring your vision to life, ensuring your new space perfectly reflects your lifestyle and preferences.}
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
                    <span className="text-sm">Expert home decor consultation design</span>
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
              {## Key Benefits of expert Home Decor Consultation JBR Dubai in JBR

Our professional home decor consultation in JBR delivers multiple tangible benefits:

**Enhanced Living Quality**: Professional Home Decor Consultation services JBR transforms how you experience your home daily. Better layouts, improved lighting, and thoughtful material selections create spaces where you genuinely enjoy spending time.

**Property Value Appreciation**: Homes with professional Home Decor Consultation company JBR command higher market values and rental rates. Investment in quality design pays dividends through property appreciation and enhanced appeal to future buyers.

**Optimized Functionality**: Strategic planning ensures your Home Decor Consultation specialist JBR serves your lifestyle needs perfectly. Storage solutions, traffic flow, and spatial arrangement all contribute to improved daily functionality.

**Aesthetic Excellence**: Curated design creates beautiful spaces that you'll love living in. Professional luxury Home Decor Consultation JBR ensures color harmony, material coordination, and visual balance throughout your home.

**Stress-Free Execution**: Our comprehensive project management handles every detail of affordable Home Decor Consultation JBR, reducing your stress and ensuring timely, within-budget completion.

**Long-Term Durability**: Quality materials and professional execution mean your Home Decor Consultation contractor JBR Dubai investment lasts years without major renovations, protecting your investment in JBR.

**Personalized Solutions**: Rather than generic designs, we create top Home Decor Consultation in JBR specifically tailored to your JBR home, lifestyle, and preferences.

**Future-Ready Spaces**: Our designs incorporate smart technology and sustainable options, ensuring your JBR home remains current and efficient.}
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Home Decor Consultation Services</h2>
          <p className="text-center text-muted-foreground mb-12">Comprehensive home decor consultation solutions</p>
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
              {## Our Home Decor Consultation Process - 6 Steps to Your Dream Space

### Step 1: Consultation & Discovery
We begin by thoroughly understanding your vision for Home Decor Consultation designer JBR in JBR. We discuss your needs, preferences, budget, and timeline.

### Step 2: Design Concept Development
Our expert team creates tailored custom Home Decor Consultation JBR concepts specifically for your JBR space and lifestyle.

### Step 3: Detailed 3D Visualization
Experience your transformation through photorealistic 3D renderings and virtual walkthroughs of your new home decor consultation.

### Step 4: Material & Finish Selection
Select premium materials perfectly suited for transform space with Home Decor Consultation JBR work and JBR's climate.

### Step 5: Professional Implementation
Expert craftsmen professionally execute your design with quality assurance throughout.

### Step 6: Final Handover & Inspection
Complete inspection, delivery, and handover of your beautifully transformed JBR space.}
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">JBR Portfolio</h2>
          <p className="text-center text-muted-foreground mb-12">Beautiful home decor consultation projects</p>
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
                {## Frequently Asked Questions About Home Decor Consultation in JBR

**Q: What makes home decor consultation different in JBR?**
A: JBR has unique architectural styles and lifestyle needs. Our Home Decor Consultation JBR expertise considers local preferences, climate factors, and community standards, ensuring designs that feel perfectly suited to JBR.

**Q: How long does home decor consultation typically take?**
A: Most Home Decor Consultation JBR Dubai projects in JBR take 6-12 weeks depending on complexity. We establish clear timelines upfront and provide regular progress updates throughout your project.

**Q: What budget should I plan for home decor consultation work?**
A: home decor consultation costs vary based on project scope, materials, and timeline. We provide transparent quotes and work with various budgets. Many JBR clients find our best Home Decor Consultation in JBR value exceptional given the quality delivered.

**Q: Do you offer guarantees on your home decor consultation work?**
A: Yes, we provide comprehensive warranties on all materials and craftsmanship for professional Home Decor Consultation JBR projects. Our quality standards ensure your investment remains protected for years to come.

**Q: Can you work with my existing contractor?**
A: Yes, we collaborate effectively with existing contractors. Our project management ensures quality coordination for your JBR expert Home Decor Consultation JBR Dubai project.

**Q: What makes your home decor consultation approach special?**
A: Our combination of Home Decor Consultation services JBR expertise, local market knowledge, premium materials, and personalized service sets us apart in JBR.}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Get Your Free Home Decor Consultation Consultation
          </h2>
          <ServicePageForm service="Home Decor Consultation" location="JBR" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your JBR Home Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover how our expert home decor consultation services create beautiful, functional spaces.
          </p>
          <Button size="lg" variant="secondary">
            Book Free Consultation
          </Button>
        </div>
      </section>

      <WhatsAppFloat number="971561234567" message="Hi Interiara! I'm interested in home decor consultation services in JBR." />
      <Footer />
    </main>
  )
}
