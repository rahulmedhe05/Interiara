const fs = require("fs")
const path = require("path")

// All services (same for every location)
const serviceTemplates = [
  "residential-interior-design",
  "office-interior-design",
  "commercial-interior-design",
  "villa-interior-design",
  "apartment-interior-design",
  "penthouse-interior-design",
  "luxury-interior-design",
  "modern-interior-design",
  "minimalist-interior-design",
  "contemporary-interior-design",
  "arabic-style-interior-design",
  "kitchen-interior-design",
  "modular-kitchens",
  "wardrobe-design",
  "closet-design",
  "bathroom-interior-design",
  "living-room-interior-design",
  "bedroom-interior-design",
  "dining-room-interior-design",
  "home-office-interior-design",
  "office-fit-out",
  "corporate-office-interior-design",
  "retail-shop-interior-design",
  "mall-interior-design",
  "restaurant-interior-design",
  "cafe-interior-design",
  "hotel-interior-design",
  "showroom-interior-design",
  "clinic-interior-design",
  "healthcare-interior-design",
  "salon-interior-design",
  "spa-interior-design",
  "custom-furniture-design",
  "bespoke-furniture-design",
  "lighting-design",
  "lighting-automation",
  "smart-lighting",
  "wall-flooring-design",
  "wallpaper-design",
  "wall-coverings",
  "window-blinds",
  "window-curtains",
  "drapes",
  "home-decor-consultation",
  "color-theme-consultation",
  "art-consultation",
  "home-remodeling",
  "home-renovation",
  "office-renovation",
  "space-planning",
  "interior-space-optimization",
  "3d-interior-rendering",
  "interior-visualization",
  "sustainable-interior-design",
  "eco-friendly-interior-design",
  "smart-home-interior-design",
  "acoustic-design",
  "soundproofing-design",
  "balcony-interior-design",
  "terrace-interior-design",
  "outdoor-living-design",
  "media-room-interior-design",
  "home-theater-interior-design",
  "kids-interior-design",
  "childrens-room-interior-design",
  "co-working-space-interior-design",
  "gym-interior-design",
  "fitness-studio-interior-design",
  "event-hall-interior-design",
  "banquet-hall-interior-design",
  "budget-interior-solutions",
  "affordable-interior-solutions",
  "interior-design",
]

function toTitleCase(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function generateServiceList(location, locationName) {
  return serviceTemplates.map((service) => ({
    slug: `${service}-${location}`,
    serviceName: `${toTitleCase(service)} ${locationName}`,
  }))
}

function autoGenerateKeywords(slug, serviceName) {
  return [
    slug,
    serviceName.toLowerCase(),
    `${serviceName.toLowerCase()} services`,
    `best ${serviceName.toLowerCase()}`,
    `professional ${serviceName.toLowerCase()}`,
    `${serviceName.toLowerCase()} company`,
    `${serviceName.toLowerCase()} specialist`,
    `expert ${serviceName.toLowerCase()}`,
  ]
}

function generateDescription(slug, serviceName) {
  const baseService = slug.split("-").slice(0, -3).join(" ")
  return `Professional ${serviceName.toLowerCase()} services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.`
}

function generatePageContent(serviceName, slug, keywords) {
  const mainKeyword = keywords[0] || serviceName.toLowerCase()
  return `"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  "/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg", "/gallery/5.jpg", "/gallery/6.jpg",
  "/gallery/7.jpg", "/gallery/8.jpg", "/gallery/9.jpg", "/gallery/10.jpg", "/gallery/11.jpg", "/gallery/12.jpg",
  "/gallery/13.jpg", "/gallery/14.jpg", "/gallery/15.jpg", "/gallery/16.jpg", "/gallery/17.jpg", "/gallery/18.jpg",
  "/gallery/19.jpg", "/gallery/20.jpg", "/gallery/21.jpg", "/gallery/22.jpg", "/gallery/23.jpg", "/gallery/24.jpg",
]

export default function ${serviceName.replace(/[^a-zA-Z0-9]/g, "").replace(/^(\d+)/, "S$1")}() {
  const [showAllGallery, setShowAllGallery] = useState(false)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              ${serviceName} - Transform Your Space
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Premium ${serviceName.toLowerCase()} solutions. Expert design team creating stunning, functional spaces with attention to detail. 300+ projects completed • 15+ years experience • 98% client satisfaction
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/916353583148" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
              <a href="tel:+916353583148">
                <Button size="lg" variant="outline" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <p className="text-sm text-secondary-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-secondary-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-sm text-secondary-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-sm text-secondary-foreground">Design Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our ${serviceName} Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "✨", title: "Design Consultation", description: "Expert guidance on design concepts, materials, and aesthetic direction for your project" },
              { icon: "🎨", title: "Concept Development", description: "Creative design concepts tailored to your vision, style preferences, and requirements" },
              { icon: "📐", title: "Space Planning", description: "Efficient layout optimization to maximize functionality and traffic flow" },
              { icon: "🛋️", title: "Furniture Selection", description: "Curated furniture and decor pieces that match your style and budget" },
              { icon: "💡", title: "Lighting Design", description: "Strategic lighting solutions for ambiance, function, and energy efficiency" },
              { icon: "🎯", title: "Project Management", description: "End-to-end project oversight ensuring timely delivery and quality results" },
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-secondary-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Discovery & Consultation", description: "We understand your needs, style preferences, budget, and timeline" },
              { step: "02", title: "Concept & Design", description: "Our team creates detailed design concepts with 3D visualizations" },
              { step: "03", title: "Planning & Approval", description: "Finalize designs, materials, and project timeline with your approval" },
              { step: "04", title: "Procurement", description: "Source quality materials, furniture, and furnishings" },
              { step: "05", title: "Implementation", description: "Professional execution of the design with attention to detail" },
              { step: "06", title: "Final Touches", description: "Quality check and final styling to bring your vision to life" },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-2xl font-bold text-primary min-w-12">{item.step}</div>
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.slice(0, showAllGallery ? 24 : 6).map((img, index) => (
              <div key={index} className="relative aspect-square bg-secondary/10 rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt={\`${serviceName} Design \${index + 1}\`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          {!showAllGallery && (
            <div className="mt-6 text-center">
              <Button onClick={() => setShowAllGallery(true)} variant="outline">
                View All 24 Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-8 opacity-90">Get a free consultation and custom design proposal from our expert team</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/916353583148" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </Button>
            </a>
            <a href="tel:+916353583148">
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="w-5 h-5" />
                Call +91 635 358 3148
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
`
}

function sanitizeFunctionName(name) {
  return name
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/^(\d+)/, "S$1")
}

async function generateAllLocations() {
  try {
    const locationsConfig = require("./locations.json")
    const locations = locationsConfig.locations

    console.log(`\n${"=".repeat(60)}`)
    console.log(`🚀 MASTER GENERATOR - Creating pages for ${locations.length} locations`)
    console.log(`${"=".repeat(60)}\n`)

    let totalPages = 0

    for (const location of locations) {
      // Convert slug to title case for display
      const locationName = toTitleCase(location)
      const services = generateServiceList(location, locationName)

      console.log(`\n📍 Generating ${services.length} pages for: ${locationName}`)

      let locationSuccessCount = 0
      let locationErrorCount = 0

      for (const service of services) {
        try {
          const serviceDir = path.join(__dirname, `../app/${service.slug}`)

          // Create directory if it doesn't exist
          if (!fs.existsSync(serviceDir)) {
            fs.mkdirSync(serviceDir, { recursive: true })
          }

          // Generate keywords
          const keywords = autoGenerateKeywords(service.slug, service.serviceName)

          // Create layout.tsx
          const layoutContent = `import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "${service.serviceName} | Premium Design Services | Interiara",
  description: "${generateDescription(service.slug, service.serviceName)}",
  keywords: [
    "${keywords.join('", "')}",
  ],
  openGraph: {
    title: "${service.serviceName} | Transform Your Space | Interiara",
    description: "${generateDescription(service.slug, service.serviceName)}",
    url: "https://interiara.com/${service.slug}",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/${service.slug}",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
`

          fs.writeFileSync(path.join(serviceDir, "layout.tsx"), layoutContent)

          // Create page.tsx
          const pageContent = generatePageContent(service.serviceName, service.slug, keywords)
          fs.writeFileSync(path.join(serviceDir, "page.tsx"), pageContent)

          locationSuccessCount++
        } catch (error) {
          console.error(`  ❌ Error: ${service.slug}`)
          locationErrorCount++
        }
      }

      console.log(`  ✅ Created: ${locationSuccessCount}/${services.length}`)
      if (locationErrorCount > 0) console.log(`  ⚠️  Failed: ${locationErrorCount}`)
      totalPages += locationSuccessCount
    }

    console.log(`\n${"=".repeat(60)}`)
    console.log(`✅ COMPLETE! Generated ${totalPages} total pages`)
    console.log(`📍 Locations: ${locations.length}`)
    console.log(`📄 Pages per location: 73`)
    console.log(`${"=".repeat(60)}\n`)
  } catch (error) {
    console.error("❌ Error:", error.message)
  }
}

generateAllLocations().catch(console.error)
