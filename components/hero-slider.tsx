"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, MessageCircle } from "lucide-react"
import { addLead } from "@/lib/leads"

const slides = [
  {
    id: 1,
    title: "Crafting Dream Interiors",
    subtitle: "Dubai's Premier Interior Designers",
    description: "Transforming villas, apartments, offices, and commercial spaces across Dubai with stunning interior designs",
    image: "/slider1.png",
  },
  {
    id: 2,
    title: "Luxury Living Spaces",
    subtitle: "Where Elegance Meets Innovation",
    description: "Contemporary & Arabic style interior design blending functionality with aesthetic excellence for Dubai homes",
    image: "/slider2.png",
  },
  {
    id: 3,
    title: "End-to-End Design Solutions",
    subtitle: "Your Vision, Our Expertise",
    description: "Complete interior solutions from concept development to flawless execution across UAE",
    image: "/slider3.png",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    propertyType: "",
    budget: "",
    city: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save lead to localStorage
    addLead({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      propertyType: formData.propertyType,
      budget: formData.budget,
      city: formData.city,
    })

    const message = `
*INTERIOR DESIGN ENQUIRY*

*Full Name:* ${formData.fullName}
*Phone Number:* ${formData.phoneNumber}
*Property Type:* ${formData.propertyType}
*City:* ${formData.city}
*Budget:* ${formData.budget || 'Not specified'}

---
_Sent via Interiara Website_
    `.trim()

    const whatsappNumber = "916353583148"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative w-full min-h-screen overflow-y-auto md:overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img 
            src={slide.image} 
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-primary/10 z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-800/10 to-slate-900/20 z-0" />
          {/* Content */}
          <div className="absolute inset-0 z-20 overflow-y-auto">
            <div className="container mx-auto px-4 min-h-full flex items-start md:items-center pt-28 sm:pt-32 md:pt-24 pb-16">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 w-full">
                {/* Left Side - Text Content */}
                <div className="md:col-span-3 max-w-2xl space-y-3 md:space-y-6">
                  <div className="flex items-center gap-2 text-accent">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm font-mono uppercase tracking-wider">{slide.subtitle}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-lg text-primary-foreground/90 font-mono leading-relaxed hidden sm:block">
                    {slide.description}
                  </p>
                </div>

                {/* Right Side - Form */}
                <div className="md:col-span-2 bg-card rounded-lg p-4 md:p-6 shadow-2xl w-full">
                  <div className="mb-3 pb-3 border-b border-border">
                    <p className="text-xs text-accent font-mono uppercase tracking-wider mb-1">Quick Response</p>
                    <h3 className="text-sm md:text-base font-bold text-card-foreground">
                      Professional Interior Design Services
                      <br />
                      <em className="text-xs not-italic">— Free Consultation & 3D Visualization</em>
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-mono text-card-foreground mb-1">
                        1. Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-sm h-10"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-mono text-card-foreground mb-1">
                        2. Phone Number <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-sm h-10"
                      />
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-xs font-mono text-card-foreground mb-1">
                        3. Property Type <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="propertyType"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        required
                        className="w-full bg-background border border-border text-foreground rounded-md px-3 py-2 text-sm h-10"
                      >
                        <option value="">Select Property Type</option>
                        <option value="Studio">Studio Apartment</option>
                        <option value="1BR">1 Bedroom</option>
                        <option value="2BR">2 Bedrooms</option>
                        <option value="3BR">3 Bedrooms</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Villa">Villa</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Office">Office</option>
                        <option value="Retail">Retail Shop</option>
                        <option value="Restaurant">Restaurant/Cafe</option>
                        <option value="Commercial">Commercial Space</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-xs font-mono text-card-foreground mb-1">
                        4. City <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="city"
                        type="text"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-sm h-10"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-mono text-card-foreground mb-1">
                        5. Budget (Optional)
                      </label>
                      <Input
                        id="budget"
                        type="text"
                        placeholder="Enter your budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="bg-background border-border text-foreground text-sm h-10"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white text-sm h-10 mt-2">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-accent" : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/75"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
