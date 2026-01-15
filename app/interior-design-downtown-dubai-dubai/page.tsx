'use client'

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import type { Metadata } from "next"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Interior Design Services in Downtown Dubai, Dubai | Interiara",
  description: "Explore all interior design services available in Downtown Dubai, Dubai. From luxury villas to modern apartments, custom furniture, kitchens, and commercial spaces. Professional designers for every style and budget.",
  keywords: [
    "interior design Downtown Dubai",
    "interior designer Downtown Dubai Dubai",
    "home design Downtown Dubai",
    "luxury interior design Downtown Dubai",
    "apartment design Downtown Dubai",
    "villa design Downtown Dubai",
  ],
  alternates: {
    canonical: "https://interiara.com/interior-design-downtown-dubai-dubai",
  },
  openGraph: {
    title: "Interior Design Services in Downtown Dubai, Dubai",
    description: "Professional interior design services in Downtown Dubai, Dubai. Explore all our services.",
    type: "website",
    url: "https://interiara.com/interior-design-downtown-dubai-dubai",
    images: [
      {
        url: "https://interiara.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design in Downtown Dubai, Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Services in Downtown Dubai",
    description: "Professional interior design services in Downtown Dubai, Dubai",
  },
}

export default function CityPage() {
  const services = 16
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {"/* Breadcrumb */"}
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight size={16} />
          <span className="text-gray-800 font-medium">Downtown Dubai</span>
        </div>
        
        {"/* Hero Section */"}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interior Design in Downtown Dubai, Dubai
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            Discover our comprehensive range of professional interior design services in Downtown Dubai. 
            From residential to commercial projects, we bring your vision to life with expert craftsmanship and innovative design.
          </p>
          <div className="flex gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-amber-600">16+</div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Services in Downtown Dubai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/3d-interior-rendering-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">3D Interior Rendering</h3>
                  <p className="text-sm text-gray-600">Professional 3d interior rendering services in Downtown Dubai</p>
                </Link>
                <Link href="/apartment-interior-design-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Apartment Interior Design</h3>
                  <p className="text-sm text-gray-600">Professional apartment interior design services in Downtown Dubai</p>
                </Link>
                <Link href="/bathroom-interior-design-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Bathroom Interior Design</h3>
                  <p className="text-sm text-gray-600">Professional bathroom interior design services in Downtown Dubai</p>
                </Link>
                <Link href="/commercial-interior-design-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Commercial Interior Design</h3>
                  <p className="text-sm text-gray-600">Professional commercial interior design services in Downtown Dubai</p>
                </Link>
                <Link href="/custom-furniture-design-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Custom Furniture Design</h3>
                  <p className="text-sm text-gray-600">Professional custom furniture design services in Downtown Dubai</p>
                </Link>
                <Link href="/home-decor-consultation-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Home Decor Consultation</h3>
                  <p className="text-sm text-gray-600">Professional home decor consultation services in Downtown Dubai</p>
                </Link>
                <Link href="/home-renovation-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Home Renovation</h3>
                  <p className="text-sm text-gray-600">Professional home renovation services in Downtown Dubai</p>
                </Link>
                <Link href="/kitchen-interior-design-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Kitchen Interior Design</h3>
                  <p className="text-sm text-gray-600">Professional kitchen interior design services in Downtown Dubai</p>
                </Link>
                <Link href="/lighting-design-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Lighting Design</h3>
                  <p className="text-sm text-gray-600">Professional lighting design services in Downtown Dubai</p>
                </Link>
                <Link href="/modular-kitchens-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Modular Kitchens</h3>
                  <p className="text-sm text-gray-600">Professional modular kitchens services in Downtown Dubai</p>
                </Link>
                <Link href="/office-fit-out-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Office Fit Out</h3>
                  <p className="text-sm text-gray-600">Professional office fit out services in Downtown Dubai</p>
                </Link>
                <Link href="/office-interior-design-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Office Interior Design</h3>
                  <p className="text-sm text-gray-600">Professional office interior design services in Downtown Dubai</p>
                </Link>
                <Link href="/office-renovation-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Office Renovation</h3>
                  <p className="text-sm text-gray-600">Professional office renovation services in Downtown Dubai</p>
                </Link>
                <Link href="/residential-interior-design-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Residential Interior Design</h3>
                  <p className="text-sm text-gray-600">Professional residential interior design services in Downtown Dubai</p>
                </Link>
                <Link href="/space-planning-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Space Planning</h3>
                  <p className="text-sm text-gray-600">Professional space planning services in Downtown Dubai</p>
                </Link>
                <Link href="/villa-interior-design-downtown-dubai-dubai" className="group block p-4 bg-white border border-neutral-200 rounded-lg hover:border-amber-500 hover:shadow-lg transition-all">
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors mb-1">Villa Interior Design</h3>
                  <p className="text-sm text-gray-600">Professional villa interior design services in Downtown Dubai</p>
                </Link>
          </div>
        </div>
        
        {"/* CTA Section */"}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Space?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free consultation and 3D visualization of your dream interior design project in Downtown Dubai.
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
            "name": "Interiara Interior Design - Downtown Dubai",
            "description": "Professional interior design services in Downtown Dubai, Dubai",
            "image": "https://interiara.com/logo.png",
            "url": "https://interiara.com/interior-design-downtown-dubai-dubai",
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
