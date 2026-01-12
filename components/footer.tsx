"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-0">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-accent">Interiara</h3>
            <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6">
              {
                "Where innovation meets elegance in interior design. Crafting stunning spaces for villas, apartments, and businesses across Dubai."
              }
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

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 font-mono">
              <li>Residential Interior Design</li>
              <li>Villa & Apartment Design</li>
              <li>Office & Commercial Design</li>
              <li>Arabic Style Interiors</li>
              <li>Luxury & Modern Design</li>
              <li>Complete Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/80 font-mono">
                    Interiara,
                    <br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+916353583148"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  +91 635 358 3148
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:hello@interiara.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  hello@interiara.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center">Interior Design Services - All Areas of Dubai & UAE</h4>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed">
            Covering residential and commercial projects across Dubai's premium localities including Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, JBR, Arabian Ranches, Jumeirah, DIFC, and all Emirates
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3">
            ✓ Villa Interior Design | ✓ Apartment & Penthouse Design | ✓ Office & Commercial Spaces | ✓ Arabic Style Interiors
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
