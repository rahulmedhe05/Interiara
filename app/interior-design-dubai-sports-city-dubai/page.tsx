'use client'

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import type { Metadata } from "next"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Interior Design Services in Dubai Sports City, Dubai | Interiara",
  description: "Explore all interior design services available in Dubai Sports City, Dubai. From luxury villas to modern apartments, custom furniture, kitchens, and commercial spaces. Professional designers for every style and budget.",
  keywords: [
    "interior design Dubai Sports City",
    "interior designer Dubai Sports City Dubai",
    "home design Dubai Sports City",
    "luxury interior design Dubai Sports City",
    "apartment design Dubai Sports City",
    "villa design Dubai Sports City",
  ],
  alternates: {
    canonical: "https://interiara.com/interior-design-dubai-sports-city-dubai",
  },
  openGraph: {
    title: "Interior Design Services in Dubai Sports City, Dubai",
    description: "Professional interior design services in Dubai Sports City, Dubai. Explore all our services.",
    type: "website",
    url: "https://interiara.com/interior-design-dubai-sports-city-dubai",
    images: [
      {
        url: "https://interiara.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design in Dubai Sports City, Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Services in Dubai Sports City",
    description: "Professional interior design services in Dubai Sports City, Dubai",
  },
}

export default function CityPage() {
  const services = 1
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {"/* Breadcrumb */"}
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight size={16} />
          <span className="text-gray-800 font-medium">Dubai Sports City</span>
        </div>
        
        {"/* Hero Section */"}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interior Design in Dubai Sports City, Dubai
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            Discover our comprehensive range of professional interior design services in Dubai Sports City. 
            From residential to commercial projects, we bring your vision to life with expert craftsmanship and innovative design.
          </p>
          <div className="flex gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-amber-600">1+</div>
              <div className="text-gray-600 text-sm">Services Available</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-amber-600">500+</div>
              <div className="text-gray-600 text-sm">Completed Projects</div>
            </div>
          </div>
        </div>
        
        {"/* Services Grid */"}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Services in Dubai Sports City</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/space-planning-dubai-sports-city-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Space Planning</h3>
                  <p className="text-sm text-gray-600">Professional space planning services in Dubai Sports City</p>
                </Link>
          </div>
        </div>
        
        {"/* CTA Section */"}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Space?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free consultation and 3D visualization of your dream interior design project in Dubai Sports City.
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
      
      {"/* Schema Markup */"}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Interiara Interior Design - Dubai Sports City",
            "description": "Professional interior design services in Dubai Sports City, Dubai",
            "image": "https://interiara.com/logo.png",
            "url": "https://interiara.com/interior-design-dubai-sports-city-dubai",
            "telephone": "+971635358314",
            "email": "info@interiara.com",
            "areaServed": "{city_display}, Dubai",
            "priceRange": "AED 5,000 - AED 500,000+",
            "rating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "98"
            }
          }),
        }}
      />
      
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
