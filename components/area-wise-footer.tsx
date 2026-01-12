import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

interface AreaWiseFooterProps {
  currentArea?: string
  currentService?: string
}

const DUBAI_AREAS = [
  { name: 'Al Barsha', slug: 'al-barsha' },
  { name: 'Al Barsha South', slug: 'al-barsha-south' },
  { name: 'Al Furjan', slug: 'al-furjan' },
  { name: 'Al Hamriya', slug: 'al-hamriya' },
  { name: 'Al Jaddaf', slug: 'al-jaddaf' },
  { name: 'Al Karama', slug: 'al-karama' },
  { name: 'Al Khawaneej', slug: 'al-khawaneej' },
  { name: 'Al Mizhar', slug: 'al-mizhar' },
  { name: 'Al Quoz', slug: 'al-quoz' },
  { name: 'Al Safa', slug: 'al-safa' },
  { name: 'Al Satwa', slug: 'al-satwa' },
  { name: 'Al Warqaa', slug: 'al-warqaa' },
  { name: 'Al Wasl', slug: 'al-wasl' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches' },
  { name: 'Bur Dubai', slug: 'bur-dubai' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'City Walk', slug: 'city-walk' },
  { name: 'Culture Village', slug: 'culture-village' },
  { name: 'Deira', slug: 'deira' },
  { name: 'DIFC', slug: 'difc' },
  { name: 'Discovery Gardens', slug: 'discovery-gardens' },
  { name: 'Discovery Hills', slug: 'discovery-hills' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Creek Harbour', slug: 'dubai-creek-harbour' },
  { name: 'Dubai Design District', slug: 'dubai-design-district' },
  { name: 'Dubai Festival City', slug: 'dubai-festival-city' },
  { name: 'Dubai Harbour', slug: 'dubai-harbour' },
  { name: 'Dubai Hills', slug: 'dubai-hills' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'The Greens', slug: 'the-greens' },
  { name: 'JBR', slug: 'jbr' },
  { name: 'JLT', slug: 'jlt' },
  { name: 'Jumeirah', slug: 'jumeirah' },
  { name: 'JVC', slug: 'jvc' },
  { name: 'JVT', slug: 'jvt' },
  { name: 'Lakes', slug: 'lakes' },
  { name: 'Marina', slug: 'marina' },
  { name: 'Meadows', slug: 'meadows' },
  { name: 'Mirdif', slug: 'mirdif' },
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Sheikh Zayed Road', slug: 'sheikh-zayed-road' },
  { name: 'Springs', slug: 'springs' },
  { name: 'The Sustainable City', slug: 'the-sustainable-city' },
  { name: 'Town Square', slug: 'town-square' },
  { name: 'Umm Suqeim', slug: 'umm-suqeim' },
]

const SERVICES = [
  { name: 'Residential Interior Design', slug: 'residential-interior-design' },
  { name: 'Office Interior Design', slug: 'office-interior-design' },
  { name: 'Commercial Interior Design', slug: 'commercial-interior-design' },
  { name: 'Villa Interior Design', slug: 'villa-interior-design' },
  { name: 'Apartment Interior Design', slug: 'apartment-interior-design' },
  { name: 'Kitchen Interior Design', slug: 'kitchen-interior-design' },
  { name: 'Bathroom Interior Design', slug: 'bathroom-interior-design' },
  { name: 'Modular Kitchens', slug: 'modular-kitchens' },
  { name: 'Lighting Design', slug: 'lighting-design' },
  { name: 'Home Renovation', slug: 'home-renovation' },
  { name: 'Office Renovation', slug: 'office-renovation' },
  { name: 'Office Fit-Out', slug: 'office-fit-out' },
  { name: 'Custom Furniture Design', slug: 'custom-furniture-design' },
  { name: 'Space Planning', slug: 'space-planning' },
  { name: 'Home Decor Consultation', slug: 'home-decor-consultation' },
]

export function AreaWiseFooter({ currentArea, currentService }: AreaWiseFooterProps) {
  return (
    <footer className="bg-background border-t">
      {/* Main Footer Content */}
      <div className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-16">
          {/* Logo & Description */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-4">Interiara</h2>
              <p className="text-sm opacity-90 mb-6">
                Transform your space with expert interior design services across Dubai.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+971 XXXX XXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@interiara.ae</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon - Sat: 9AM - 6PM</span>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-3 text-sm">
                {SERVICES.slice(0, 8).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.slug}-dubai`}
                      className="opacity-80 hover:opacity-100 transition"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="opacity-80 hover:opacity-100 transition font-semibold">
                    View All Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Areas Column */}
            <div>
              <h3 className="text-lg font-bold mb-6">Popular Areas</h3>
              <ul className="space-y-3 text-sm">
                {DUBAI_AREAS.slice(0, 8).map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/services/${area.slug}`}
                      className="opacity-80 hover:opacity-100 transition"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/locations" className="opacity-80 hover:opacity-100 transition font-semibold">
                    View All Areas →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="opacity-80 hover:opacity-100 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="opacity-80 hover:opacity-100 transition">
                    Our Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="opacity-80 hover:opacity-100 transition">
                    Blog & Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="opacity-80 hover:opacity-100 transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="opacity-80 hover:opacity-100 transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="opacity-80 hover:opacity-100 transition">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            {/* All Areas - Comprehensive Link Section for SEO */}
            <div className="mb-8">
              <h4 className="font-bold mb-4 text-sm">Interior Design Services in Dubai Areas:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
                {DUBAI_AREAS.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/${currentService || 'residential-interior-design'}-${area.slug}-dubai`}
                    className="opacity-75 hover:opacity-100 transition"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* All Services - Comprehensive Link Section for SEO */}
            <div className="mb-8">
              <h4 className="font-bold mb-4 text-sm">Our Interior Design Services:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}-${currentArea || 'dubai'}`}
                    className="opacity-75 hover:opacity-100 transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-muted border-t py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Interiara. All rights reserved. Expert Interior Design Across Dubai.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="https://facebook.com/interiara" className="hover:text-foreground transition">
                Facebook
              </Link>
              <Link href="https://instagram.com/interiara" className="hover:text-foreground transition">
                Instagram
              </Link>
              <Link href="https://linkedin.com/company/interiara" className="hover:text-foreground transition">
                LinkedIn
              </Link>
              <Link href="https://tiktok.com/@interiara" className="hover:text-foreground transition">
                TikTok
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
