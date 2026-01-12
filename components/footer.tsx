"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const residentialServices = [
    { name: "Villa Design Dubai", slug: "villa-interior-design-dubai" },
    { name: "Apartment Design Dubai", slug: "apartment-interior-design-dubai" },
    { name: "Penthouse Design Dubai", slug: "penthouse-interior-design-dubai" },
    { name: "Kitchen Design Dubai", slug: "kitchen-interior-design-dubai" },
    { name: "Bedroom Design Dubai", slug: "bedroom-interior-design-dubai" },
    { name: "Living Room Design Dubai", slug: "living-room-interior-design-dubai" },
    { name: "Bathroom Design Dubai", slug: "bathroom-interior-design-dubai" },
    { name: "Home Office Design Dubai", slug: "home-office-interior-design-dubai" },
  ]

  const commercialServices = [
    { name: "Office Design Dubai", slug: "office-interior-design-dubai" },
    { name: "Office Fit Out Dubai", slug: "office-fit-out-dubai" },
    { name: "Commercial Design Dubai", slug: "commercial-interior-design-dubai" },
    { name: "Restaurant Design Dubai", slug: "restaurant-interior-design-dubai" },
    { name: "Cafe Design Dubai", slug: "cafe-interior-design-dubai" },
    { name: "Hotel Design Dubai", slug: "hotel-interior-design-dubai" },
    { name: "Retail Shop Design Dubai", slug: "retail-shop-interior-design-dubai" },
    { name: "Showroom Design Dubai", slug: "showroom-interior-design-dubai" },
  ]

  const styleServices = [
    { name: "Luxury Design Dubai", slug: "luxury-interior-design-dubai" },
    { name: "Modern Design Dubai", slug: "modern-interior-design-dubai" },
    { name: "Arabic Style Design Dubai", slug: "arabic-style-interior-design-dubai" },
    { name: "Minimalist Design Dubai", slug: "minimalist-interior-design-dubai" },
    { name: "Contemporary Design Dubai", slug: "contemporary-interior-design-dubai" },
    { name: "Sustainable Design Dubai", slug: "sustainable-interior-design-dubai" },
  ]

  const specializedServices = [
    { name: "Modular Kitchens Dubai", slug: "modular-kitchens-dubai" },
    { name: "Custom Furniture Dubai", slug: "custom-furniture-design-dubai" },
    { name: "Lighting Design Dubai", slug: "lighting-design-dubai" },
    { name: "3D Rendering Dubai", slug: "3d-interior-rendering-dubai" },
    { name: "Space Planning Dubai", slug: "space-planning-dubai" },
    { name: "Wardrobe Design Dubai", slug: "wardrobe-design-dubai" },
  ]

  const allServices = [
    { name: "Residential Interior Design Dubai", slug: "residential-interior-design-dubai" },
    { name: "Commercial Interior Design Dubai", slug: "commercial-interior-design-dubai" },
    { name: "Penthouse Interior Design Dubai", slug: "penthouse-interior-design-dubai" },
    { name: "Office Interior Design Dubai", slug: "office-interior-design-dubai" },
    { name: "Office Fit Out Dubai", slug: "office-fit-out-dubai" },
    { name: "Luxury Interior Design Dubai", slug: "luxury-interior-design-dubai" },
    { name: "Modern Interior Design Dubai", slug: "modern-interior-design-dubai" },
    { name: "Arabic Style Interior Design Dubai", slug: "arabic-style-interior-design-dubai" },
    { name: "Minimalist Interior Design Dubai", slug: "minimalist-interior-design-dubai" },
    { name: "Contemporary Interior Design Dubai", slug: "contemporary-interior-design-dubai" },
    { name: "Kitchen Interior Design Dubai", slug: "kitchen-interior-design-dubai" },
    { name: "Modular Kitchens Dubai", slug: "modular-kitchens-dubai" },
    { name: "Bathroom Interior Design Dubai", slug: "bathroom-interior-design-dubai" },
    { name: "Living Room Interior Design Dubai", slug: "living-room-interior-design-dubai" },
    { name: "Bedroom Interior Design Dubai", slug: "bedroom-interior-design-dubai" },
    { name: "Dining Room Interior Design Dubai", slug: "dining-room-interior-design-dubai" },
    { name: "Home Office Interior Design Dubai", slug: "home-office-interior-design-dubai" },
    { name: "Restaurant Interior Design Dubai", slug: "restaurant-interior-design-dubai" },
    { name: "Cafe Interior Design Dubai", slug: "cafe-interior-design-dubai" },
    { name: "Hotel Interior Design Dubai", slug: "hotel-interior-design-dubai" },
    { name: "Retail Shop Interior Design Dubai", slug: "retail-shop-interior-design-dubai" },
    { name: "Showroom Interior Design Dubai", slug: "showroom-interior-design-dubai" },
    { name: "Clinic Interior Design Dubai", slug: "clinic-interior-design-dubai" },
    { name: "Salon Interior Design Dubai", slug: "salon-interior-design-dubai" },
    { name: "Spa Interior Design Dubai", slug: "spa-interior-design-dubai" },
    { name: "Gym Interior Design Dubai", slug: "gym-interior-design-dubai" },
    { name: "Fitness Studio Interior Design Dubai", slug: "fitness-studio-interior-design-dubai" },
    { name: "Event Hall Interior Design Dubai", slug: "event-hall-interior-design-dubai" },
    { name: "Co-Working Space Interior Design Dubai", slug: "co-working-space-interior-design-dubai" },
    { name: "Wardrobe Design Dubai", slug: "wardrobe-design-dubai" },
    { name: "Closet Design Dubai", slug: "closet-design-dubai" },
    { name: "Custom Furniture Design Dubai", slug: "custom-furniture-design-dubai" },
    { name: "Modular Furniture Solutions Dubai", slug: "modular-furniture-solutions-dubai" },
    { name: "Window Blinds Dubai", slug: "window-blinds-dubai" },
    { name: "Window Curtains Dubai", slug: "window-curtains-dubai" },
    { name: "Window Treatment Dubai", slug: "window-treatment-dubai" },
    { name: "Lighting Design Dubai", slug: "lighting-design-dubai" },
    { name: "Lighting Automation Dubai", slug: "lighting-automation-dubai" },
    { name: "Smart Lighting Dubai", slug: "smart-lighting-dubai" },
    { name: "Wall & Flooring Design Dubai", slug: "wall-flooring-design-dubai" },
    { name: "Wallpaper Dubai", slug: "wallpaper-dubai" },
    { name: "Wall Coverings Dubai", slug: "wall-coverings-dubai" },
    { name: "Curtains Dubai", slug: "curtains-dubai" },
    { name: "Drapes Dubai", slug: "drapes-dubai" },
    { name: "Home Decor Consultation Dubai", slug: "home-decor-consultation-dubai" },
    { name: "Color Theme Consultation Dubai", slug: "color-theme-consultation-dubai" },
    { name: "Art Consultation Dubai", slug: "art-consultation-dubai" },
    { name: "Wall Art Consultation Dubai", slug: "wall-art-consultation-dubai" },
    { name: "Flooring Material Consultation Dubai", slug: "flooring-material-consultation-dubai" },
    { name: "Home Remodeling Dubai", slug: "home-remodeling-dubai" },
    { name: "Home Renovation Dubai", slug: "home-renovation-dubai" },
    { name: "Office Renovation Dubai", slug: "office-renovation-dubai" },
    { name: "Space Planning Dubai", slug: "space-planning-dubai" },
    { name: "3D Interior Rendering Dubai", slug: "3d-interior-rendering-dubai" },
    { name: "Sustainable Interior Design Dubai", slug: "sustainable-interior-design-dubai" },
    { name: "Eco-Friendly Interior Design Dubai", slug: "eco-friendly-interior-design-dubai" },
    { name: "Smart Home Interior Design Dubai", slug: "smart-home-interior-design-dubai" },
    { name: "Balcony Interior Design Dubai", slug: "balcony-interior-design-dubai" },
    { name: "Terrace Interior Design Dubai", slug: "terrace-interior-design-dubai" },
    { name: "Garden Interior Design Dubai", slug: "garden-interior-design-dubai" },
    { name: "Outdoor Living Design Dubai", slug: "outdoor-living-design-dubai" },
    { name: "Media Room Interior Design Dubai", slug: "media-room-interior-design-dubai" },
    { name: "Home Theater Interior Design Dubai", slug: "home-theater-interior-design-dubai" },
    { name: "Children's Room Interior Design Dubai", slug: "childrens-room-interior-design-dubai" },
    { name: "Kids Interior Design Dubai", slug: "kids-interior-design-dubai" },
    { name: "Acoustic Design Dubai", slug: "acoustic-design-dubai" },
    { name: "Soundproofing Design Dubai", slug: "soundproofing-design-dubai" },
    { name: "Facade Design Dubai", slug: "facade-design-dubai" },
    { name: "Exterior Design Dubai", slug: "exterior-design-dubai" },
    { name: "Budget Interior Solutions Dubai", slug: "budget-interior-solutions-dubai" },
    { name: "Affordable Interior Solutions Dubai", slug: "affordable-interior-solutions-dubai" },
    { name: "Healthcare Interior Design Dubai", slug: "healthcare-interior-design-dubai" },
    { name: "Interior Design Dubai", slug: "interior-design-dubai" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-2 text-accent">Interiara</h3>
            <p className="text-primary-foreground/80 text-xs leading-relaxed mb-4">
              Premier interior design studio in Dubai. Transforming spaces into stunning experiences.
            </p>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Dubai, UAE</span>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+916353583148" className="text-primary-foreground/80 hover:text-accent">
                  +91 635 358 3148
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:info@interiara.com" className="text-primary-foreground/80 hover:text-accent">
                  info@interiara.com
                </a>
              </p>
            </div>
          </div>

          {/* Residential */}
          <div>
            <h4 className="text-sm font-bold mb-3 text-accent">Residential</h4>
            <ul className="space-y-1">
              {residentialServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="text-xs text-primary-foreground/80 hover:text-accent transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial */}
          <div>
            <h4 className="text-sm font-bold mb-3 text-accent">Commercial</h4>
            <ul className="space-y-1">
              {commercialServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="text-xs text-primary-foreground/80 hover:text-accent transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Styles */}
          <div>
            <h4 className="text-sm font-bold mb-3 text-accent">Design Styles</h4>
            <ul className="space-y-1">
              {styleServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="text-xs text-primary-foreground/80 hover:text-accent transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized */}
          <div>
            <h4 className="text-sm font-bold mb-3 text-accent">Specialized</h4>
            <ul className="space-y-1">
              {specializedServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="text-xs text-primary-foreground/80 hover:text-accent transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* All Services Links (for SEO) */}
        <div className="pt-6 border-t border-primary-foreground/10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
            {allServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-primary-foreground/60 text-center md:text-left">
              © 2026 Interiara. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        <h2>Interiara - Best Interior Design Company in Dubai UAE</h2>
        <p>
          {allServices.map(s => s.name).join(", ")}
        </p>
      </div>
    </footer>
  )
}
