"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const services = [
    { name: "Residential Interior Design", slug: "residential-interior-design-dubai" },
    { name: "Commercial Interior Design", slug: "commercial-interior-design-dubai" },
    { name: "Villa Interior Design", slug: "villa-interior-design-dubai" },
    { name: "Apartment Interior Design", slug: "apartment-interior-design-dubai" },
    { name: "Penthouse Interior Design", slug: "penthouse-interior-design-dubai" },
    { name: "Office Interior Design", slug: "office-interior-design-dubai" },
    { name: "Office Fit Out", slug: "office-fit-out-dubai" },
    { name: "Luxury Interior Design", slug: "luxury-interior-design-dubai" },
    { name: "Modern Interior Design", slug: "modern-interior-design-dubai" },
    { name: "Arabic Style Interior Design", slug: "arabic-style-interior-design-dubai" },
    { name: "Minimalist Interior Design", slug: "minimalist-interior-design-dubai" },
    { name: "Contemporary Interior Design", slug: "contemporary-interior-design-dubai" },
    { name: "Kitchen Interior Design", slug: "kitchen-interior-design-dubai" },
    { name: "Modular Kitchens", slug: "modular-kitchens-dubai" },
    { name: "Bathroom Interior Design", slug: "bathroom-interior-design-dubai" },
    { name: "Living Room Interior Design", slug: "living-room-interior-design-dubai" },
    { name: "Bedroom Interior Design", slug: "bedroom-interior-design-dubai" },
    { name: "Dining Room Interior Design", slug: "dining-room-interior-design-dubai" },
    { name: "Home Office Interior Design", slug: "home-office-interior-design-dubai" },
    { name: "Restaurant Interior Design", slug: "restaurant-interior-design-dubai" },
    { name: "Cafe Interior Design", slug: "cafe-interior-design-dubai" },
    { name: "Hotel Interior Design", slug: "hotel-interior-design-dubai" },
    { name: "Retail Shop Interior Design", slug: "retail-shop-interior-design-dubai" },
    { name: "Showroom Interior Design", slug: "showroom-interior-design-dubai" },
    { name: "Clinic Interior Design", slug: "clinic-interior-design-dubai" },
    { name: "Salon Interior Design", slug: "salon-interior-design-dubai" },
    { name: "Spa Interior Design", slug: "spa-interior-design-dubai" },
    { name: "Gym Interior Design", slug: "gym-interior-design-dubai" },
    { name: "Fitness Studio Interior Design", slug: "fitness-studio-interior-design-dubai" },
    { name: "Event Hall Interior Design", slug: "event-hall-interior-design-dubai" },
    { name: "Co-Working Space Interior Design", slug: "co-working-space-interior-design-dubai" },
    { name: "Wardrobe Design", slug: "wardrobe-design-dubai" },
    { name: "Closet Design", slug: "closet-design-dubai" },
    { name: "Custom Furniture Design", slug: "custom-furniture-design-dubai" },
    { name: "Modular Furniture Solutions", slug: "modular-furniture-solutions-dubai" },
    { name: "Window Blinds", slug: "window-blinds-dubai" },
    { name: "Window Curtains", slug: "window-curtains-dubai" },
    { name: "Window Treatment", slug: "window-treatment-dubai" },
    { name: "Lighting Design", slug: "lighting-design-dubai" },
    { name: "Lighting Automation", slug: "lighting-automation-dubai" },
    { name: "Smart Lighting", slug: "smart-lighting-dubai" },
    { name: "Wall & Flooring Design", slug: "wall-flooring-design-dubai" },
    { name: "Wallpaper", slug: "wallpaper-dubai" },
    { name: "Wall Coverings", slug: "wall-coverings-dubai" },
    { name: "Curtains", slug: "curtains-dubai" },
    { name: "Drapes", slug: "drapes-dubai" },
    { name: "Home Decor Consultation", slug: "home-decor-consultation-dubai" },
    { name: "Color Theme Consultation", slug: "color-theme-consultation-dubai" },
    { name: "Art Consultation", slug: "art-consultation-dubai" },
    { name: "Wall Art Consultation", slug: "wall-art-consultation-dubai" },
    { name: "Flooring Material Consultation", slug: "flooring-material-consultation-dubai" },
    { name: "Home Remodeling", slug: "home-remodeling-dubai" },
    { name: "Home Renovation", slug: "home-renovation-dubai" },
    { name: "Office Renovation", slug: "office-renovation-dubai" },
    { name: "Space Planning", slug: "space-planning-dubai" },
    { name: "3D Interior Rendering", slug: "3d-interior-rendering-dubai" },
    { name: "Sustainable Interior Design", slug: "sustainable-interior-design-dubai" },
    { name: "Eco-Friendly Interior Design", slug: "eco-friendly-interior-design-dubai" },
    { name: "Smart Home Interior Design", slug: "smart-home-interior-design-dubai" },
    { name: "Balcony Interior Design", slug: "balcony-interior-design-dubai" },
    { name: "Terrace Interior Design", slug: "terrace-interior-design-dubai" },
    { name: "Garden Interior Design", slug: "garden-interior-design-dubai" },
    { name: "Outdoor Living Design", slug: "outdoor-living-design-dubai" },
    { name: "Media Room Interior Design", slug: "media-room-interior-design-dubai" },
    { name: "Home Theater Interior Design", slug: "home-theater-interior-design-dubai" },
    { name: "Children's Room Interior Design", slug: "childrens-room-interior-design-dubai" },
    { name: "Kids Interior Design", slug: "kids-interior-design-dubai" },
    { name: "Acoustic Design", slug: "acoustic-design-dubai" },
    { name: "Soundproofing Design", slug: "soundproofing-design-dubai" },
    { name: "Facade Design", slug: "facade-design-dubai" },
    { name: "Exterior Design", slug: "exterior-design-dubai" },
    { name: "Budget Interior Solutions", slug: "budget-interior-solutions-dubai" },
    { name: "Affordable Interior Solutions", slug: "affordable-interior-solutions-dubai" },
    { name: "Healthcare Interior Design", slug: "healthcare-interior-design-dubai" },
    { name: "Interior Design", slug: "interior-design-dubai" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-0">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-accent">Interiara</h3>
            <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6">
              Where innovation meets elegance in interior design. Crafting stunning spaces for villas, apartments, and businesses across Dubai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Gallery", "Packages", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(" ", "-"))
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 1 */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80 font-mono text-sm">
              {services.slice(0, 20).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div>
            <h4 className="text-xl font-bold mb-6">More Services</h4>
            <ul className="space-y-2 text-primary-foreground/80 font-mono text-sm">
              {services.slice(20).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-8 md:mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Location</p>
                <p className="text-primary-foreground/80 font-mono text-sm">
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="font-bold mb-1">Call Us</p>
                <a
                  href="tel:+916353583148"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono text-sm"
                >
                  +91 635 358 3148
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="font-bold mb-1">Email</p>
                <a
                  href="mailto:info@interiara.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono text-sm"
                >
                  info@interiara.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center">Interior Design Services - All Areas of Dubai & UAE</h4>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed">
            Covering 74+ residential and commercial interior design services across Dubai's premium localities including Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, JBR, Arabian Ranches, Jumeirah, DIFC, and all Emirates
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3">
            ✓ Villa Interior Design | ✓ Apartment & Penthouse Design | ✓ Office & Commercial Spaces | ✓ Arabic Style Interiors | ✓ Luxury & Modern Design
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © 2026 Interiara. All rights reserved. | Dubai's Premier Interior Design Studio
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        <h2>Interiara - Best Interior Design Company in Dubai UAE</h2>
        <p>Interior design Dubai, villa interior design UAE, apartment interior design Dubai, penthouse interior design, luxury interior design Dubai, Arabic style interior design, modern interior design UAE, office interior design Dubai, commercial interior design, restaurant interior design Dubai, cafe interior design, retail shop interior design, hotel interior design Dubai, kitchen interior design, bedroom interior design, living room interior design, bathroom interior design, modular kitchen Dubai, wardrobe design, space planning Dubai, 3D interior visualization, interior renovation Dubai, home renovation UAE, furniture design Dubai, custom furniture, interior consultation, best interior designer Dubai, Interiara, interior design Downtown Dubai, interior designer Dubai Marina, Palm Jumeirah interior design, Business Bay interior designer, Arabian Ranches villa interior, affordable interior design Dubai, turnkey interior solutions Dubai, end to end interior design</p>
      </div>
    </footer>
  )
}
