
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ServicePageForm } from "@/components/service-page-form"
import { Phone, CheckCircle, Star, ArrowRight, Lightbulb, Palette, Layout, Home, Settings, Zap, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// SEO Keywords: Lighting Design Al Safa, Lighting Design Al Safa Dubai, best Lighting Design in Al Safa, professional Lighting Design Al Safa, expert Lighting Design Al Safa Dubai, Lighting Design services Al Safa, Lighting Design company Al Safa, Lighting Design specialist Al Safa

const serviceFeatures = [
{ icon: Lightbulb, title: "Layered lighting", desc: "Layered lighting design for ambiance and functionality" },
  { icon: Palette, title: "Energy-efficient solutions", desc: "Energy-efficient solutions reducing operational costs" },
  { icon: Layout, title: "Smart lighting", desc: "Smart lighting integration with modern automation" },
  { icon: Home, title: "Professional lighting", desc: "Professional lighting that enhances architecture" },
  { icon: Settings, title: "Custom solutions", desc: "Custom solutions for residential and commercial spaces" },
  { icon: Zap, title: "Accent lighting", desc: "Accent lighting that highlights design features" },
]

const processSteps = [
  { step: "01", title: "Consultation", desc: "We understand your needs, vision, and requirements for your Al Safa project." },
  { step: "02", title: "Design Concept", desc: "Our team creates tailored design concepts specifically for your Al Safa space." },
  { step: "03", title: "3D Visualization", desc: "Experience your transformed space through photorealistic 3D renders and visualization." },
  { step: "04", title: "Material Selection", desc: "Choose from premium materials and finishes suited for Al Safa climate." },
  { step: "05", title: "Execution", desc: "Professional implementation with expert craftsmen and quality assurance." },
  { step: "06", title: "Handover", desc: "Final inspection and delivery of your beautifully transformed Al Safa space." },
]

const stats = [
  { number: "300+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "25+", label: "Expert Designers" },
]

const galleryImages = [
  { src: "/dubai-interior-design-luxury.jpg", alt: "Lighting Design Al Safa - Luxury design" },
  { src: "/Reception-9.jpg", alt: "Lighting Design Al Safa - Modern space" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "Lighting Design Al Safa - Contemporary style" },
  { src: "/Top-Living-Room-Decor.png", alt: "Lighting Design Al Safa - Elegant interior" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "Lighting Design Al Safa - Design detail" },
  { src: "/top-interior-designers-dubai.jpg", alt: "Lighting Design Al Safa - Professional design" },
]

export const metadata = {
  title: "Lighting Design in Al Safa Dubai | Expert Interior Design Services",
  description: "Expert Lighting Design services in Al Safa, Dubai. Professional design team with 15+ years experience. Get free consultation today!",
  keywords: "Lighting Design Al Safa, Lighting Design Al Safa Dubai, best Lighting Design in Al Safa, professional Lighting Design Al Safa, expert Lighting Design Al Safa Dubai, Lighting Design services Al Safa, Lighting Design company Al Safa, Lighting Design specialist Al Safa",
  openGraph: {
    title: "Lighting Design in Al Safa Dubai",
    description: "Expert Lighting Design services in Al Safa, Dubai. Professional design team with 15+ years experience. Get free consultation today!",
    url: "https://interiara.ae/lighting-design-al-safa-dubai",
    type: "website",
    images: [
      {
        url: "/dubai-interior-design-luxury.jpg",
        width: 1200,
        height: 630,
        alt: "Lighting Design in Al Safa",
      },
    ],
  },
  robots: "index, follow",
  canonical: "https://interiara.ae/lighting-design-al-safa-dubai",
}

export default function ServicePage() {
  const whatsappNumber = "971561234567"
  const whatsappMessage = encodeURIComponent(
    "Hi Interiara! I'm interested in Lighting Design services in Al Safa. Please share more details and pricing."
  )
  
  const displayedImages = galleryImages

  return (
    <main className="min-h-screen bg-background">
      <Navigation darkLogo hideMenu />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="text-accent font-mono uppercase tracking-wider mb-4">⭐ Expert Lighting Design</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Lighting Design in <span className="text-primary">Al Safa</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed whitespace-pre-line">
                Transform your Al Safa space with expert lighting design services that create perfect ambiance and functionality. We design layered lighting solutions for residential and commercial spaces. Our Al Safa lighting expertise creates stunning visual environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">Book Free Consultation</Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">View Portfolio</Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 shadow-lg border">
                <h3 className="text-lg font-bold mb-4">Why Choose Interiara?</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Personalized design concepts</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete project management</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Premium materials & finishes</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Transparent pricing</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">On-time delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section className="py-16 md:py-24 border-b bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p>What is Lighting Design in Al Safa?

Our lighting design services create perfect illumination for any space. We design Al Safa lighting solutions that enhance aesthetics while ensuring functional, energy-efficient lighting.

In Al Safa, a diverse community with unique design preferences, professional lighting design requires understanding both contemporary aesthetics and practical functionality. Whether you're designing residential spaces, commercial environments, or specialized facilities, our experts combine design excellence with local market expertise.

Key Aspects of Lighting Design:
- Strategic space planning and layout optimization
- Professional aesthetic consultation and color coordination
- Quality material and finish selection
- Lighting design for optimal functionality and ambiance
- Furniture selection and custom piece design
- Storage solutions and organizational systems
- Smart home/office technology integration
- Sustainability and eco-friendly design options
- Budget management and cost-effective solutions
- Timeline planning and project execution

Al Safa residents and businesses benefit from professional lighting design that considers:
- Local climate and environmental factors
- Community lifestyle and preferences
- Property type and architectural style
- Budget constraints and financial planning
- Timeline requirements and project scope

Our Al Safa team understands these unique factors, delivering lighting design solutions that perfectly fit your needs.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p>Why Choose Professional Lighting Design in Al Safa?

Al Safa is vibrant community in Dubai. Characterized by diverse properties and residents, this community includes established and new residents.

Key Benefits of Professional Design:

- Layered lighting design for ambiance and functionality
- Energy-efficient solutions reducing operational costs
- Smart lighting integration with modern automation
- Professional lighting that enhances architecture
- Custom solutions for residential and commercial spaces
- Accent lighting that highlights design features

Al Safa-Specific Advantages:

Professional lighting design in Al Safa offers specific community advantages:

Market Expertise: Our designers understand Al Safa's real estate market, property values, and investment considerations. Well-designed spaces significantly increase property value and rental appeal.

Local Aesthetic Preferences: Al Safa residents appreciate contemporary and modern design aesthetics. We create interiors that reflect community preferences while expressing individual personality.

Environmental Considerations: Dubai's climate requires durable, heat-resistant materials and smart cooling solutions. Our designs incorporate climate-appropriate selections ensuring longevity and comfort.

Community Lifestyle: Al Safa's unique lifestyle informs our design approach. We create spaces supporting established and new residents's daily activities and preferences.

Quality Standards: Al Safa attracts quality-conscious residents and businesses. We maintain premium standards across all projects, ensuring client satisfaction and results exceeding expectations.

Tangible Results:

- Increased property value and investment return
- Enhanced comfort and functionality
- Improved productivity (commercial spaces)
- Premium aesthetic that reflects your style
- Professional execution reducing stress
- Long-term value and durability</p>
          </div>
        </div>
      </section>

      {/* Services Features */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Lighting Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceFeatures.map((feature) => (
              <div key={feature.title} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Design Process</h2>
          <div className="space-y-4">
            {processSteps.map((item, idx) => (
              <div
                key={item.step}
                className="border rounded-lg overflow-hidden p-6 bg-card hover:shadow-lg transition"
              >
                <div className="flex gap-4">
                  <div className="text-2xl font-bold text-primary">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.number}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-primary-foreground/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Al Safa Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {displayedImages.map((image, idx) => (
              <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Get Your Free Lighting Design Consultation
          </h2>
          <ServicePageForm service="{Lighting Design}" location="{Al Safa}" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Al Safa Space Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover how our expert lighting design can create your perfect Al Safa environment. Schedule your free consultation now.
          </p>
          <Button size="lg" variant="secondary">
            Book Your Free Consultation
          </Button>
        </div>
      </section>

      <WhatsAppFloat number={whatsappNumber} message={whatsappMessage} />
      <Footer />
    </main>
  )
}
