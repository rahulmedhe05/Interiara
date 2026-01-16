
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ServicePageForm } from "@/components/service-page-form"
import { Phone, CheckCircle, Star, ArrowRight, Lightbulb, Palette, Layout, Home, Settings, Zap, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// SEO Keywords: Custom Furniture Design Al Satwa, Custom Furniture Design Al Satwa Dubai, best Custom Furniture Design in Al Satwa, professional Custom Furniture Design Al Satwa, expert Custom Furniture Design Al Satwa Dubai, Custom Furniture Design services Al Satwa, Custom Furniture Design company Al Satwa, Custom Furniture Design specialist Al Satwa

const serviceFeatures = [
{ icon: Lightbulb, title: "Personalized design", desc: "Personalized design reflecting your unique lifestyle and preferences" },
  { icon: Palette, title: "Space optimization", desc: "Space optimization that maximizes comfort and functionality" },
  { icon: Layout, title: "Professional color", desc: "Professional color consultation and material selection services" },
  { icon: Home, title: "Custom furniture", desc: "Custom furniture solutions tailored to your specific space" },
  { icon: Settings, title: "Complete project", desc: "Complete project management from concept to final completion" },
  { icon: Zap, title: "Access to", desc: "Access to premium materials and sustainable design options" },
]

const processSteps = [
  { step: "01", title: "Consultation", desc: "We understand your needs, vision, and requirements for your Al Satwa project." },
  { step: "02", title: "Design Concept", desc: "Our team creates tailored design concepts specifically for your Al Satwa space." },
  { step: "03", title: "3D Visualization", desc: "Experience your transformed space through photorealistic 3D renders and visualization." },
  { step: "04", title: "Material Selection", desc: "Choose from premium materials and finishes suited for Al Satwa climate." },
  { step: "05", title: "Execution", desc: "Professional implementation with expert craftsmen and quality assurance." },
  { step: "06", title: "Handover", desc: "Final inspection and delivery of your beautifully transformed Al Satwa space." },
]

const stats = [
  { number: "300+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "25+", label: "Expert Designers" },
]

const galleryImages = [
  { src: "/dubai-interior-design-luxury.jpg", alt: "Custom Furniture Design Al Satwa - Luxury design" },
  { src: "/Reception-9.jpg", alt: "Custom Furniture Design Al Satwa - Modern space" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "Custom Furniture Design Al Satwa - Contemporary style" },
  { src: "/Top-Living-Room-Decor.png", alt: "Custom Furniture Design Al Satwa - Elegant interior" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "Custom Furniture Design Al Satwa - Design detail" },
  { src: "/top-interior-designers-dubai.jpg", alt: "Custom Furniture Design Al Satwa - Professional design" },
]

export const metadata = {
  title: "Custom Furniture Design in Al Satwa Dubai | Expert Interior Design Services",
  description: "Expert Custom Furniture Design services in Al Satwa, Dubai. Professional design team with 15+ years experience. Get free consultation today!",
  keywords: "Custom Furniture Design Al Satwa, Custom Furniture Design Al Satwa Dubai, best Custom Furniture Design in Al Satwa, professional Custom Furniture Design Al Satwa, expert Custom Furniture Design Al Satwa Dubai, Custom Furniture Design services Al Satwa, Custom Furniture Design company Al Satwa, Custom Furniture Design specialist Al Satwa",
  openGraph: {
    title: "Custom Furniture Design in Al Satwa Dubai",
    description: "Expert Custom Furniture Design services in Al Satwa, Dubai. Professional design team with 15+ years experience. Get free consultation today!",
    url: "https://interiara.ae/custom-furniture-design-al-satwa-dubai",
    type: "website",
    images: [
      {
        url: "/dubai-interior-design-luxury.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Furniture Design in Al Satwa",
      },
    ],
  },
  robots: "index, follow",
  canonical: "https://interiara.ae/custom-furniture-design-al-satwa-dubai",
}

export default function ServicePage() {
  const whatsappNumber = "971561234567"
  const whatsappMessage = encodeURIComponent(
    "Hi Interiara! I'm interested in Custom Furniture Design services in Al Satwa. Please share more details and pricing."
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
              <p className="text-accent font-mono uppercase tracking-wider mb-4">⭐ Expert Custom Furniture Design</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Custom Furniture Design in <span className="text-primary">Al Satwa</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed whitespace-pre-line">
                Transform your Al Satwa home into your dream living space with expert residential interior design services. We create beautiful, functional homes that reflect your personal style and enhance your quality of life. At Interiara, we specialize in Al Satwa residential interiors with 15+ years of experience and 300+ completed projects.
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
            <p>What is Custom Furniture Design in Al Satwa?

Our residential interior design services create personalized, functional homes that enhance daily living. From intimate apartments to spacious villas in Al Satwa, we design spaces that balance aesthetics with practicality.

In Al Satwa, a diverse community with unique design preferences, professional custom furniture design requires understanding both contemporary aesthetics and practical functionality. Whether you're designing residential spaces, commercial environments, or specialized facilities, our experts combine design excellence with local market expertise.

Key Aspects of Custom Furniture Design:
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

Al Satwa residents and businesses benefit from professional custom furniture design that considers:
- Local climate and environmental factors
- Community lifestyle and preferences
- Property type and architectural style
- Budget constraints and financial planning
- Timeline requirements and project scope

Our Al Satwa team understands these unique factors, delivering custom furniture design solutions that perfectly fit your needs.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p>Why Choose Professional Custom Furniture Design in Al Satwa?

Al Satwa is vibrant community in Dubai. Characterized by diverse properties and residents, this community includes established and new residents.

Key Benefits of Professional Design:

- Personalized design reflecting your unique lifestyle and preferences
- Space optimization that maximizes comfort and functionality
- Professional color consultation and material selection services
- Custom furniture solutions tailored to your specific space
- Complete project management from concept to final completion
- Access to premium materials and sustainable design options

Al Satwa-Specific Advantages:

Professional custom furniture design in Al Satwa offers specific community advantages:

Market Expertise: Our designers understand Al Satwa's real estate market, property values, and investment considerations. Well-designed spaces significantly increase property value and rental appeal.

Local Aesthetic Preferences: Al Satwa residents appreciate contemporary and modern design aesthetics. We create interiors that reflect community preferences while expressing individual personality.

Environmental Considerations: Dubai's climate requires durable, heat-resistant materials and smart cooling solutions. Our designs incorporate climate-appropriate selections ensuring longevity and comfort.

Community Lifestyle: Al Satwa's unique lifestyle informs our design approach. We create spaces supporting established and new residents's daily activities and preferences.

Quality Standards: Al Satwa attracts quality-conscious residents and businesses. We maintain premium standards across all projects, ensuring client satisfaction and results exceeding expectations.

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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Custom Furniture Design Services</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Al Satwa Portfolio</h2>
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
            Get Your Free Custom Furniture Design Consultation
          </h2>
          <ServicePageForm service="{Custom Furniture Design}" location="{Al Satwa}" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Al Satwa Space Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover how our expert custom furniture design can create your perfect Al Satwa environment. Schedule your free consultation now.
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
