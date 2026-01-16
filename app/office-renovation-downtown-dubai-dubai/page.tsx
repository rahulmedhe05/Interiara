
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ServicePageForm } from "@/components/service-page-form"
import { Phone, CheckCircle, Star, ArrowRight, Lightbulb, Palette, Layout, Home, Settings, Zap, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// SEO Keywords: Office Renovation Downtown Dubai, Office Renovation Downtown Dubai Dubai, best Office Renovation in Downtown Dubai, professional Office Renovation Downtown Dubai, expert Office Renovation Downtown Dubai Dubai, Office Renovation services Downtown Dubai, Office Renovation company Downtown Dubai, Office Renovation specialist Downtown Dubai

const serviceFeatures = [
{ icon: Lightbulb, title: "Personalized design", desc: "Personalized design reflecting your unique lifestyle and preferences" },
  { icon: Palette, title: "Space optimization", desc: "Space optimization that maximizes comfort and functionality" },
  { icon: Layout, title: "Professional color", desc: "Professional color consultation and material selection services" },
  { icon: Home, title: "Custom furniture", desc: "Custom furniture solutions tailored to your specific space" },
  { icon: Settings, title: "Complete project", desc: "Complete project management from concept to final completion" },
  { icon: Zap, title: "Access to", desc: "Access to premium materials and sustainable design options" },
]

const processSteps = [
  { step: "01", title: "Consultation", desc: "We understand your needs, vision, and requirements for your Downtown Dubai project." },
  { step: "02", title: "Design Concept", desc: "Our team creates tailored design concepts specifically for your Downtown Dubai space." },
  { step: "03", title: "3D Visualization", desc: "Experience your transformed space through photorealistic 3D renders and visualization." },
  { step: "04", title: "Material Selection", desc: "Choose from premium materials and finishes suited for Downtown Dubai climate." },
  { step: "05", title: "Execution", desc: "Professional implementation with expert craftsmen and quality assurance." },
  { step: "06", title: "Handover", desc: "Final inspection and delivery of your beautifully transformed Downtown Dubai space." },
]

const stats = [
  { number: "300+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "25+", label: "Expert Designers" },
]

const galleryImages = [
  { src: "/dubai-interior-design-luxury.jpg", alt: "Office Renovation Downtown Dubai - Luxury design" },
  { src: "/Reception-9.jpg", alt: "Office Renovation Downtown Dubai - Modern space" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "Office Renovation Downtown Dubai - Contemporary style" },
  { src: "/Top-Living-Room-Decor.png", alt: "Office Renovation Downtown Dubai - Elegant interior" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "Office Renovation Downtown Dubai - Design detail" },
  { src: "/top-interior-designers-dubai.jpg", alt: "Office Renovation Downtown Dubai - Professional design" },
]

export const metadata = {
  title: "Office Renovation in Downtown Dubai Dubai | Expert Interior Design Services",
  description: "Expert Office Renovation services in Downtown Dubai, Dubai. Professional design team with 15+ years experience. Get free consultation today!",
  keywords: "Office Renovation Downtown Dubai, Office Renovation Downtown Dubai Dubai, best Office Renovation in Downtown Dubai, professional Office Renovation Downtown Dubai, expert Office Renovation Downtown Dubai Dubai, Office Renovation services Downtown Dubai, Office Renovation company Downtown Dubai, Office Renovation specialist Downtown Dubai",
  openGraph: {
    title: "Office Renovation in Downtown Dubai Dubai",
    description: "Expert Office Renovation services in Downtown Dubai, Dubai. Professional design team with 15+ years experience. Get free consultation today!",
    url: "https://interiara.ae/office-renovation-downtown-dubai-dubai",
    type: "website",
    images: [
      {
        url: "/dubai-interior-design-luxury.jpg",
        width: 1200,
        height: 630,
        alt: "Office Renovation in Downtown Dubai",
      },
    ],
  },
  robots: "index, follow",
  canonical: "https://interiara.ae/office-renovation-downtown-dubai-dubai",
}

export default function ServicePage() {
  const whatsappNumber = "971561234567"
  const whatsappMessage = encodeURIComponent(
    "Hi Interiara! I'm interested in Office Renovation services in Downtown Dubai. Please share more details and pricing."
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
              <p className="text-accent font-mono uppercase tracking-wider mb-4">⭐ Expert Office Renovation</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Office Renovation in <span className="text-primary">Downtown Dubai</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed whitespace-pre-line">
                Transform your Downtown Dubai home into your dream living space with expert residential interior design services. We create beautiful, functional homes that reflect your personal style and enhance your quality of life. At Interiara, we specialize in Downtown Dubai residential interiors with 15+ years of experience and 300+ completed projects.
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
            <p>What is Office Renovation in Downtown Dubai?

Our residential interior design services create personalized, functional homes that enhance daily living. From intimate apartments to spacious villas in Downtown Dubai, we design spaces that balance aesthetics with practicality.

In Downtown Dubai, a diverse community with unique design preferences, professional office renovation requires understanding both contemporary aesthetics and practical functionality. Whether you're designing residential spaces, commercial environments, or specialized facilities, our experts combine design excellence with local market expertise.

Key Aspects of Office Renovation:
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

Downtown Dubai residents and businesses benefit from professional office renovation that considers:
- Local climate and environmental factors
- Community lifestyle and preferences
- Property type and architectural style
- Budget constraints and financial planning
- Timeline requirements and project scope

Our Downtown Dubai team understands these unique factors, delivering office renovation solutions that perfectly fit your needs.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p>Why Choose Professional Office Renovation in Downtown Dubai?

Downtown Dubai is heart of the city with luxury residential and commercial spaces. Characterized by high-rise towers, iconic locations, urban sophistication, this community includes affluent residents, business professionals, luxury seekers.

Key Benefits of Professional Design:

- Personalized design reflecting your unique lifestyle and preferences
- Space optimization that maximizes comfort and functionality
- Professional color consultation and material selection services
- Custom furniture solutions tailored to your specific space
- Complete project management from concept to final completion
- Access to premium materials and sustainable design options

Downtown Dubai-Specific Advantages:

Professional office renovation in Downtown Dubai offers specific community advantages:

Market Expertise: Our designers understand Downtown Dubai's real estate market, property values, and investment considerations. Well-designed spaces significantly increase property value and rental appeal.

Local Aesthetic Preferences: Downtown Dubai residents appreciate luxury, contemporary, premium design aesthetics. We create interiors that reflect community preferences while expressing individual personality.

Environmental Considerations: Dubai's climate requires durable, heat-resistant materials and smart cooling solutions. Our designs incorporate climate-appropriate selections ensuring longevity and comfort.

Community Lifestyle: Downtown Dubai's unique lifestyle informs our design approach. We create spaces supporting affluent residents, business professionals, luxury seekers's daily activities and preferences.

Quality Standards: Downtown Dubai attracts quality-conscious residents and businesses. We maintain premium standards across all projects, ensuring client satisfaction and results exceeding expectations.

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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Office Renovation Services</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Downtown Dubai Portfolio</h2>
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
            Get Your Free Office Renovation Consultation
          </h2>
          <ServicePageForm service="{Office Renovation}" location="{Downtown Dubai}" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Downtown Dubai Space Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover how our expert office renovation can create your perfect Downtown Dubai environment. Schedule your free consultation now.
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
