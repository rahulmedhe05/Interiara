import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ServicePageForm } from "@/components/service-page-form"
import { Phone, CheckCircle, Star, ArrowRight, Lightbulb, Palette, Layout, Home, Settings, Zap, Camera, Monitor, Layers, Eye, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

// SEO Keywords: 3D Interior Rendering Al Barsha, 3D Interior Rendering Al Barsha Dubai, best 3D Interior Rendering in Al Barsha, professional 3D Interior Rendering Al Barsha, expert 3D Interior Rendering Al Barsha Dubai, 3D Interior Rendering services Al Barsha, 3D Interior Rendering company Al Barsha, 3D Interior Rendering specialist Al Barsha, photorealistic 3D visualization Al Barsha, interior visualization services Al Barsha Dubai, architectural rendering Al Barsha, 3D design Al Barsha Dubai, virtual interior design Al Barsha, 3D walkthrough Al Barsha, interior CGI Al Barsha Dubai

export const metadata: Metadata = {
  title: "3D Interior Rendering in Al Barsha Dubai | Expert Visualization Services | Interiara",
  description: "Transform your Al Barsha property with photorealistic 3D interior rendering services. Expert visualization team with 15+ years experience. See your design before construction. Get free consultation today!",
  keywords: "3D Interior Rendering Al Barsha, 3D Interior Rendering Al Barsha Dubai, best 3D Interior Rendering in Al Barsha, professional 3D Interior Rendering Al Barsha, expert 3D Interior Rendering Al Barsha Dubai, 3D Interior Rendering services Al Barsha, photorealistic visualization Al Barsha, architectural rendering Dubai",
  openGraph: {
    title: "3D Interior Rendering in Al Barsha Dubai | Interiara",
    description: "Transform your Al Barsha property with photorealistic 3D interior rendering services. Expert visualization team with 15+ years experience.",
    url: "https://interiara.ae/3d-interior-rendering-al-barsha-dubai",
    type: "website",
    siteName: "Interiara",
    images: [
      {
        url: "/dubai-interior-design-luxury.jpg",
        width: 1200,
        height: 630,
        alt: "3D Interior Rendering in Al Barsha Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Interior Rendering in Al Barsha Dubai | Interiara",
    description: "Transform your Al Barsha property with photorealistic 3D interior rendering services.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://interiara.ae/3d-interior-rendering-al-barsha-dubai",
  },
}

const serviceFeatures = [
  { icon: Camera, title: "Photorealistic Renders", desc: "Ultra-high-quality 3D visualizations that look like actual photographs of your future Al Barsha interior" },
  { icon: Monitor, title: "Virtual Walkthroughs", desc: "Immersive 3D tours allowing you to explore every corner of your Al Barsha space before construction begins" },
  { icon: Layers, title: "Multiple Design Options", desc: "Compare different design concepts, materials, and color schemes side-by-side for your Al Barsha property" },
  { icon: Eye, title: "Realistic Lighting", desc: "Accurate simulation of natural and artificial lighting conditions specific to Al Barsha's orientation" },
  { icon: Clock, title: "Quick Turnaround", desc: "Fast delivery of high-quality renders without compromising on detail or accuracy" },
  { icon: Award, title: "Revision Support", desc: "Unlimited revisions until your Al Barsha visualization perfectly matches your vision" },
]

const processSteps = [
  { step: "01", title: "Project Brief & Consultation", desc: "We begin with a detailed discussion about your Al Barsha property, understanding your vision, style preferences, functional requirements, and budget considerations for the 3D rendering project." },
  { step: "02", title: "Floor Plan & Measurements", desc: "Our team collects accurate measurements and floor plans of your Al Barsha space, ensuring precise 3D modeling that reflects actual dimensions and architectural features." },
  { step: "03", title: "Concept Development", desc: "Based on your brief, we develop initial design concepts and mood boards, presenting multiple directions for your Al Barsha interior visualization." },
  { step: "04", title: "3D Modeling", desc: "Our expert 3D artists create detailed digital models of your Al Barsha space, including furniture, fixtures, materials, and architectural elements." },
  { step: "05", title: "Texturing & Lighting", desc: "We apply realistic textures, materials, and lighting setups that simulate actual conditions in your Al Barsha property for photorealistic results." },
  { step: "06", title: "Final Rendering & Delivery", desc: "High-resolution renders are produced and delivered with any requested revisions, giving you complete visualization of your Al Barsha interior design." },
]

const stats = [
  { number: "300+", label: "Rendering Projects" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "48hr", label: "Fast Turnaround" },
]

const galleryImages = [
  { src: "/dubai-interior-design-luxury.jpg", alt: "3D Interior Rendering Al Barsha - Luxury Living Room Visualization" },
  { src: "/Reception-9.jpg", alt: "3D Interior Rendering Al Barsha - Modern Reception Design" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "3D Interior Rendering Al Barsha - Contemporary Style Render" },
  { src: "/Top-Living-Room-Decor.png", alt: "3D Interior Rendering Al Barsha - Elegant Interior CGI" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "3D Interior Rendering Al Barsha - Lighting Design Detail" },
  { src: "/top-interior-designers-dubai.jpg", alt: "3D Interior Rendering Al Barsha - Professional Design Visualization" },
]

const faqs = [
  {
    question: "What is 3D Interior Rendering and why do I need it for my Al Barsha property?",
    answer: "3D Interior Rendering is the process of creating photorealistic digital images of interior spaces before they are built or renovated. For your Al Barsha property, this technology allows you to visualize exactly how your space will look with different design options, furniture arrangements, materials, and lighting. This helps avoid costly mistakes, enables better decision-making, and ensures you're completely satisfied with the design before any construction begins."
  },
  {
    question: "How long does it take to complete 3D renders for an Al Barsha apartment or villa?",
    answer: "The timeline depends on project complexity. For a standard Al Barsha apartment (1-2 bedrooms), we typically deliver initial renders within 5-7 business days. Larger villas or commercial spaces may take 10-14 days. Rush services are available for urgent Al Barsha projects with 48-72 hour turnaround for simpler visualizations."
  },
  {
    question: "What information do you need to create 3D renders for my Al Barsha space?",
    answer: "We require floor plans with accurate measurements, photos of the existing space (if applicable), your design preferences or inspiration images, and any specific furniture or materials you want included. For Al Barsha properties, we also consider the building's architectural style and natural lighting conditions specific to your unit's orientation."
  },
  {
    question: "Can you create 3D renders for both residential and commercial spaces in Al Barsha?",
    answer: "Absolutely! We provide 3D interior rendering services for all property types in Al Barsha including apartments, villas, offices, retail spaces, restaurants, and hospitality venues. Each project receives customized attention to capture the unique requirements of residential comfort or commercial functionality."
  },
  {
    question: "How accurate are your 3D renders compared to the final result?",
    answer: "Our 3D renders achieve 95%+ accuracy when compared to the finished space. We use advanced rendering software, accurate measurements, and real material textures to ensure what you see in the visualization is what you get in reality. This precision is especially valuable for Al Barsha property owners making significant investment decisions."
  }
]

export default function ThreeDInteriorRenderingAlBarshaDubai() {
  const whatsappNumber = "971509699896"
  const whatsappMessage = encodeURIComponent(
    "Hi Interiara! I'm interested in 3D Interior Rendering services for my property in Al Barsha, Dubai. Please share more details about your visualization packages and pricing."
  )

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-medium uppercase tracking-wider mb-4">⭐ Expert 3D Interior Rendering Services</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                3D Interior Rendering in <span className="text-primary">Al Barsha Dubai</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your Al Barsha property vision into stunning photorealistic visualizations. Our expert 3D rendering team brings your interior design ideas to life with breathtaking detail and accuracy. Whether you're renovating an Al Barsha apartment, designing a new villa, or planning a commercial space, our 3D interior rendering services help you see and refine your design before committing to construction. With over 15 years of experience and 300+ successful visualization projects across Dubai, Interiara delivers renders that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="#contact-form">Get Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="#portfolio">View Our Portfolio</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>48hr Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Unlimited Revisions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/dubai-interior-design-luxury.jpg"
                  alt="3D Interior Rendering Services in Al Barsha Dubai - Photorealistic Visualization"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">300+</p>
                <p className="text-sm">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is 3D Interior Rendering Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What is 3D Interior Rendering in Al Barsha?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                3D Interior Rendering is a revolutionary visualization technology that creates photorealistic digital images of interior spaces before they physically exist. For Al Barsha property owners and businesses, this means you can see exactly how your renovated apartment, newly designed villa, or commercial space will look – complete with furniture, lighting, materials, and decorative elements – before spending a single dirham on construction or renovation.
              </p>
              <p>
                Al Barsha, one of Dubai's most vibrant and family-friendly communities, features diverse property types from modern apartments in Al Barsha 1 to spacious villas in Al Barsha 2 and 3. Each property type benefits uniquely from 3D interior rendering services. Apartment owners can maximize their compact spaces through optimized layouts visualized in 3D, while villa owners can explore grand design concepts and see how different rooms flow together before implementation.
              </p>
              <p>
                Our 3D interior rendering services for Al Barsha properties include comprehensive visualization solutions: photorealistic still images showing every design detail, animated walkthroughs that let you virtually tour your future space, 360-degree panoramic views for immersive experiences, and virtual reality presentations for the ultimate preview experience. We accurately simulate Al Barsha's natural lighting conditions, considering your property's orientation and the Dubai sun's intensity throughout the day.
              </p>
              <p>
                Whether you're an Al Barsha homeowner planning a complete interior overhaul, a property developer showcasing off-plan units, or a business owner designing a new retail or office space, our 3D rendering services provide the clarity and confidence you need to make informed design decisions. We combine artistic expertise with technical precision to deliver visualizations that truly represent your finished space. Our team of experienced 3D artists and designers has mastered the latest rendering technologies to create visualizations that are virtually indistinguishable from photographs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Professional 3D Rendering Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Professional 3D Interior Rendering in Al Barsha?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Al Barsha has established itself as one of Dubai's most sought-after residential and commercial districts. Known for its excellent connectivity via Sheikh Zayed Road and the Metro, proximity to Mall of the Emirates, and diverse community of families, professionals, and businesses, Al Barsha properties command premium values. Professional 3D interior rendering helps you maximize your property's potential and investment value.
              </p>
              <p>
                <strong>Eliminate Costly Design Mistakes:</strong> The average interior design change during construction costs 3-5 times more than making the same change during the design phase. With our Al Barsha 3D rendering services, you identify and resolve design issues virtually, saving significant time and money. See how that accent wall color actually looks in your space, or whether that furniture arrangement truly works, before any physical work begins.
              </p>
              <p>
                <strong>Al Barsha-Specific Design Considerations:</strong> Our team understands Al Barsha's unique architectural landscape. From the contemporary high-rises along Sheikh Zayed Road to the villa communities near Al Barsha Pond Park, we tailor our visualizations to reflect each property type's characteristics. We consider factors like natural light patterns, views, ceiling heights, and the contemporary aesthetic that Al Barsha residents prefer.
              </p>
              <p>
                <strong>Accelerate Decision Making:</strong> Rather than trying to imagine how different design options might look, you see them rendered in photorealistic detail. Compare marble vs. wood flooring, modern vs. traditional furniture, bold vs. neutral color palettes – all visualized specifically in your Al Barsha property's context. This clarity speeds up the design approval process significantly.
              </p>
              <p>
                <strong>Impress Stakeholders:</strong> Whether you're presenting designs to family members, business partners, or property investors, professional 3D renders communicate your vision powerfully. For Al Barsha property developers and real estate agents, high-quality visualizations are essential marketing tools that help sell properties faster and at better prices. They significantly enhance your marketing materials and online listings.
              </p>
              <p>
                <strong>Investment Protection:</strong> Large interior design and renovation projects represent significant financial investments. Our 3D rendering services act as insurance, helping you verify that your substantial investment will deliver the desired results before construction begins. This peace of mind is invaluable when making design decisions affecting your Al Barsha property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Features */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our 3D Interior Rendering Services in Al Barsha</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive visualization solutions tailored for Al Barsha residential and commercial properties
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceFeatures.map((feature) => (
              <div key={feature.title} className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our 3D Rendering Process</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A systematic approach ensuring exceptional visualization results for your Al Barsha property
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((item) => (
                <div key={item.step} className="flex gap-6 items-start p-6 bg-card rounded-xl border hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Al Barsha Location Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              3D Interior Rendering for Al Barsha Properties
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Al Barsha's strategic location and diverse property portfolio make it an ideal market for professional 3D interior rendering services. The area's proximity to key Dubai landmarks, excellent public transport connectivity, and family-friendly amenities attract a discerning clientele who appreciate quality visualization services.
              </p>
              <p>
                <strong>Al Barsha Apartments:</strong> From studios to 3-bedroom units in buildings like The Onyx Tower and Al Barsha Business Center, apartment owners benefit from space-optimization visualizations. Our 3D renders help you see how to maximize every square foot while maintaining aesthetic appeal and functionality. This is particularly valuable in Al Barsha's mixed-use neighborhoods where efficient space planning directly impacts property value and rental appeal.
              </p>
              <p>
                <strong>Al Barsha Villas:</strong> The villa communities in Al Barsha 2 and Al Barsha 3 feature properties with multiple bedrooms, private gardens, and spacious living areas. Our comprehensive 3D rendering services help villa owners visualize complete home transformations, from luxury kitchens to elegant master suites and outdoor entertainment areas. Villa residents appreciate detailed visualizations that show how indoor and outdoor spaces integrate seamlessly.
              </p>
              <p>
                <strong>Commercial Spaces:</strong> Al Barsha's thriving commercial sector, including retail outlets near Mall of the Emirates and office spaces in business centers, requires professional visualization for successful fit-outs. We create compelling 3D renders for restaurants, cafes, retail stores, medical clinics, and corporate offices throughout Al Barsha, helping business owners make confident investment decisions.
              </p>
              <p>
                <strong>Property Investment:</strong> For Al Barsha property investors and developers, our 3D renderings serve as powerful marketing tools. Showcase off-plan units or renovation potential with photorealistic visualizations that help buyers envision their future space and accelerate sales decisions. Professional renders consistently improve property marketing ROI and reduce time-on-market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Al Barsha 3D Rendering Portfolio</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore our photorealistic visualizations for properties across Al Barsha and Dubai
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Common questions about our 3D interior rendering services in Al Barsha
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Get Your Free 3D Rendering Consultation
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Ready to visualize your Al Barsha interior project? Contact us for a free consultation and quote.
            </p>
            <ServicePageForm service="3D Interior Rendering" location="Al Barsha Dubai" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Al Barsha Space with Professional 3D Visualization
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join 300+ satisfied clients who trusted Interiara for their 3D interior rendering needs. See your Al Barsha property's potential before construction begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact-form">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Interiara - 3D Interior Rendering Al Barsha Dubai",
            "description": "Expert 3D interior rendering and visualization services in Al Barsha, Dubai. Photorealistic renders for residential and commercial properties.",
            "url": "https://interiara.ae/3d-interior-rendering-al-barsha-dubai",
            "telephone": "+971509699896",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Al Barsha",
              "addressRegion": "Dubai",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.1124",
              "longitude": "55.1964"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Al Barsha, Dubai"
            },
            "priceRange": "$$$",
            "openingHours": "Mo-Sa 09:00-18:00",
            "sameAs": [
              "https://www.instagram.com/interiara",
              "https://www.facebook.com/interiara"
            ],
            "image": "/dubai-interior-design-luxury.jpg",
            "serviceType": "3D Interior Rendering"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "3D Interior Rendering Services in Al Barsha Dubai",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Interiara"
            },
            "areaServed": "Al Barsha, Dubai, UAE",
            "description": "Professional 3D interior rendering and visualization services for residential and commercial properties in Al Barsha, Dubai.",
            "serviceType": "3D Interior Rendering"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <WhatsAppFloat />
      <Footer />
    </main>
  )
}
