"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle } from "lucide-react"
import { addLead } from "@/lib/leads"

interface ServicePageFormProps {
  serviceName?: string
}

export function ServicePageForm({ serviceName = "Interior Design" }: ServicePageFormProps) {
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
*${serviceName.toUpperCase()} ENQUIRY*

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
    
    // Reset form
    setFormData({
      fullName: "",
      phoneNumber: "",
      propertyType: "",
      budget: "",
      city: "",
    })
  }

  return (
    <div className="bg-card rounded-xl p-6 shadow-2xl border border-border">
      <div className="mb-4 pb-4 border-b border-border">
        <p className="text-xs text-accent font-mono uppercase tracking-wider mb-1">Get Free Quote</p>
        <h3 className="text-lg font-bold text-card-foreground">
          {serviceName} Services
          <br />
          <span className="text-sm font-normal text-muted-foreground">Free Consultation & 3D Visualization</span>
        </h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-mono text-card-foreground mb-1">
            Full Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
            className="bg-background border-border text-foreground"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-xs font-mono text-card-foreground mb-1">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <Input
            id="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            required
            className="bg-background border-border text-foreground"
          />
        </div>

        <div>
          <label htmlFor="propertyType" className="block text-xs font-mono text-card-foreground mb-1">
            Property Type <span className="text-destructive">*</span>
          </label>
          <select
            id="propertyType"
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            required
            className="w-full bg-background border border-border text-foreground rounded-md px-3 py-2 text-sm"
          >
            <option value="">Select Property Type</option>
            <option value="Studio">Studio Apartment</option>
            <option value="1BR">1 Bedroom</option>
            <option value="2BR">2 Bedrooms</option>
            <option value="3BR">3 Bedrooms</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Villa">Villa</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Duplex">Duplex</option>
            <option value="Office">Office</option>
            <option value="Retail">Retail Shop</option>
            <option value="Restaurant">Restaurant/Cafe</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-xs font-mono text-card-foreground mb-1">
            City <span className="text-destructive">*</span>
          </label>
          <Input
            id="city"
            type="text"
            placeholder="Enter your city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
            className="bg-background border-border text-foreground"
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-xs font-mono text-card-foreground mb-1">
            Budget (Optional)
          </label>
          <Input
            id="budget"
            type="text"
            placeholder="e.g., 50,000 - 100,000 AED"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="bg-background border-border text-foreground"
          />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-accent text-white font-semibold">
          <MessageCircle className="w-4 h-4 mr-2" />
          Get Free Quote on WhatsApp
        </Button>
        
        <p className="text-xs text-muted-foreground text-center">
          We'll respond within 30 minutes during business hours
        </p>
      </form>
    </div>
  )
}
