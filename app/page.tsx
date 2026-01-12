import { HeroSlider } from "@/components/hero-slider"
import { AboutSection } from "@/components/about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { FAQSection } from "@/components/faq-section"
import { ServicesSection } from "@/components/services-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interiara Dubai | #1 Luxury Interior Designer in UAE | Villa & Apartment Design",
  description: "Discover Interiara - Dubai's most trusted interior design studio. We specialize in crafting breathtaking villa interiors, contemporary apartments, traditional Arabic majlis, and sophisticated office spaces. 500+ successful projects. Free consultation & 3D visualization. Call +91 635 358 3148",
  alternates: {
    canonical: "https://interiara.com",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ContactForm />
      <GallerySection />
      <FAQSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
