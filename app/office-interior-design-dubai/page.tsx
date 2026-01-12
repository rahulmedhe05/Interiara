"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ServicePageForm } from "@/components/service-page-form"
import { Phone, CheckCircle, Star, ArrowRight, Building2, Users, Monitor, Coffee, Lightbulb, Layout, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// SEO Keywords: office interior design dubai, commercial interior design dubai, office design dubai,
// office fit out dubai, corporate interior design dubai, workspace design dubai,
// best office interior design company dubai, modern office interior design dubai,
// luxury office interior design uae, affordable office design dubai, office renovation dubai,
// office furniture dubai, office space planning dubai, office decor dubai, commercial fit out dubai

const officeServices = [
  { icon: Building2, title: "Corporate Office Design", desc: "Prestigious headquarters and executive office interiors" },
  { icon: Users, title: "Co-Working Spaces", desc: "Flexible, collaborative workspace solutions" },
  { icon: Monitor, title: "Tech Office Design", desc: "Innovation-driven spaces for tech companies" },
  { icon: Coffee, title: "Breakout Areas", desc: "Engaging cafeterias and relaxation zones" },
  { icon: Lightbulb, title: "Creative Studios", desc: "Inspiring environments for creative agencies" },
  { icon: Layout, title: "Open Plan Offices", desc: "Modern open layouts promoting collaboration" },
]

const processSteps = [
  { step: "01", title: "Workspace Analysis", desc: "We assess your current space, understand business needs, team dynamics, and growth plans." },
  { step: "02", title: "Concept Design", desc: "Our designers create workspace concepts aligned with your brand identity and culture." },
  { step: "03", title: "3D Visualization", desc: "Experience your future office with photorealistic 3D renders and virtual walkthroughs." },
  { step: "04", title: "Fit-Out Planning", desc: "Detailed planning for furniture, MEP systems, and IT infrastructure integration." },
  { step: "05", title: "Project Execution", desc: "Professional fit-out with minimal disruption to your business operations." },
  { step: "06", title: "Handover & Support", desc: "Quality inspection, staff orientation, and ongoing maintenance support." },
]

const stats = [
  { number: "300+", label: "Offices Designed" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Corporate Clients" },
  { number: "25+", label: "Expert Designers" },
]

const galleryImages = [
  // Row 1 - Initial display
  { src: "/dubai-interior-design-luxury.jpg", alt: "Luxury office interior design Dubai" },
  { src: "/Reception-9.jpg", alt: "Corporate office reception design Dubai" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "Modern office interior design Dubai" },
  { src: "/Top-Living-Room-Decor.png", alt: "Executive office lounge Dubai" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "Office lighting design Dubai commercial" },
  { src: "/top-interior-designers-dubai.jpg", alt: "Best office interior design company Dubai" },
  // Row 2
  { src: "/dubai-luxury-interior-design-585x734.jpg", alt: "Dubai luxury corporate interior design" },
  { src: "/Villa-interior-design-Dubai-with-Accouter-Design.webp", alt: "Premium workspace design Dubai" },
  { src: "/meet.jpg", alt: "Office meeting room design Dubai" },
  { src: "/2b-scaled.jpg", alt: "Commercial fit out Dubai office" },
  { src: "/DSC01457-min-scaled.webp", alt: "Affordable office design Dubai" },
  { src: "/98488683052973.5d304d1b15e83.jpg", alt: "Office space planning Dubai" },
  // Row 3
  { src: "/Color-Scheme-Modular-kitchen-Interior-Design-and-Fit-Out-DesignMaster-Dubai-2.jpg", alt: "Office pantry fit out Dubai" },
  { src: "/Al-Barari-Kitchen.jpg", alt: "Office cafeteria design Dubai" },
  { src: "/kitchen-aesthetic-harmony-modern-luxury-fusion-interior-design-dream-home-1-min.jpg", alt: "Executive office kitchen Dubai" },
  { src: "/L-Shaped-Modern-kitchen-Layout-DesignMaster-Dubai.jpg", alt: "Office break room design Dubai" },
  { src: "/9f76af35953159a45c406d49cb9bc4d0.jpg", alt: "Business interior design Dubai" },
  { src: "/Zen_PalmD1_07b-scaled-1.jpg", alt: "Office relaxation zone Dubai" },
  // Row 4
  { src: "/1-Unique-Bathroom-Projects.jpg", alt: "Office washroom design Dubai" },
  { src: "/8-Bathroom-Inspiration-By-Dubai-Top-Interior-Designers.jpeg", alt: "Corporate bathroom design Dubai" },
  { src: "/Dubai-Bathroom-Design-2.jpg", alt: "Office restroom fit out Dubai" },
  { src: "/bathroom-1024x683.jpg", alt: "Commercial bathroom design UAE" },
  { src: "/gf-ktchen-view2.jpg", alt: "Office kitchenette Dubai" },
  { src: "/10-Stunning-Kitchen-Island-Designs-to-Elevate-Your-Culinary-Space.jpeg", alt: "Co-working space design Dubai" },
]

export default function OfficeInteriorDesignDubai() {
  const [showAllImages, setShowAllImages] = useState(false)
  const whatsappNumber = "916353583148"
  const whatsappMessage = encodeURIComponent("Hi Interiara! I'm interested in office interior design services for my workspace in Dubai. Please share more details.")
  
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6)

  return (
    <main className="min-h-screen bg-background">
      <Navigation darkLogo hideMenu />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Side - Content */}
            <div className="lg:col-span-3 order-1 lg:order-none">
              <p className="text-accent font-mono uppercase tracking-wider mb-4">Best Office Interior Design Company Dubai</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Expert Office Interior Design Dubai - <span className="text-primary">Transform Your Workspace</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                Looking for the <strong>best office interior design in Dubai</strong>? Interiara is Dubai's premier <strong>commercial interior design company</strong>, specializing in <strong>corporate interior design Dubai</strong> and <strong>office fit out Dubai</strong> services. From stunning <strong>modern office interior design Dubai</strong> to <strong>affordable office design Dubai</strong>, we deliver exceptional <strong>workspace design Dubai</strong> solutions. Our expert <strong>office space planning Dubai</strong> team transforms ordinary workplaces into productivity powerhouses.
              </p>
              
              {/* Featured Image - Desktop */}
              <div className="relative mb-8 hidden lg:block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/Reception-9.jpg" 
                    alt="Office Interior Design Dubai - Corporate Workspace by Interiara"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">300+</p>
                  <p className="text-xs">Offices Designed</p>
                </div>
              </div>
              
              {/* Quick Stats - Desktop */}
              <div className="grid-cols-3 gap-4 hidden lg:grid">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">50+</p>
                  <p className="text-xs text-muted-foreground">Corporate Clients</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">25+</p>
                  <p className="text-xs text-muted-foreground">Expert Designers</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="lg:col-span-2 order-2 lg:order-none w-full">
              <ServicePageForm serviceName="Office Interior Design" />
            </div>
            
            {/* Mobile only - Image & Stats */}
            <div className="order-3 lg:hidden w-full">
              <div className="relative mb-8">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/Reception-9.jpg" 
                    alt="Office Interior Design Dubai - Corporate Workspace by Interiara"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">300+</p>
                  <p className="text-xs">Offices Designed</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">50+</p>
                  <p className="text-xs text-muted-foreground">Corporate Clients</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">25+</p>
                  <p className="text-xs text-muted-foreground">Expert Designers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-primary-foreground/80 font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Office Design Section - MAIN CONTENT 2000+ WORDS */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why Choose Interiara for Office Interior Design in Dubai?
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Your office is more than just a place to work—it's where innovation happens, deals are closed, and company culture thrives. At Interiara, we understand that exceptional <strong>office interior design in Dubai</strong> directly impacts employee productivity, client impressions, and business success. As the <strong>best office interior design company in Dubai</strong>, our <strong>commercial interior design Dubai</strong> services go beyond aesthetics to create workspaces that drive results. Whether you need <strong>affordable office design Dubai</strong> for a startup or <strong>luxury office interior design UAE</strong> for a multinational corporation, we deliver environments that inspire excellence.
              </p>
              
              <p>
                As leading <strong>corporate interior designers in Dubai</strong>, we've had the privilege of transforming over 300 offices across the UAE. From prestigious DIFC headquarters requiring sophisticated <strong>executive office design Dubai</strong> to dynamic Business Bay co-working spaces needing flexible <strong>workspace design Dubai</strong> solutions, our portfolio showcases versatility and innovation. Our team of 25+ expert <strong>office space planning Dubai</strong> specialists brings diverse expertise to every <strong>office fit out Dubai</strong> project.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Understanding Dubai's Modern Office Interior Design Landscape</h3>
              
              <p>
                Dubai's commercial real estate is among the world's most competitive, demanding <strong>office interior designers Dubai</strong> who understand both international standards and regional preferences. Our <strong>office decor Dubai</strong> experts are well-versed in creating inspiring workspaces for:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Corporate headquarters office interior design Dubai</strong> – Prestigious environments reflecting brand authority and corporate values</li>
                <li><strong>Startup office design Dubai</strong> – Agile, budget-conscious spaces that scale with your growth through smart <strong>office renovation Dubai</strong></li>
                <li><strong>Co-working space design Dubai</strong> – Flexible, community-driven environments fostering collaboration and networking</li>
                <li><strong>Tech company workspace design Dubai</strong> – Innovation labs and creative hubs with cutting-edge <strong>commercial fit out Dubai</strong></li>
                <li><strong>Professional services office fit out Dubai</strong> – Law firms, consultancies, and financial institutions requiring sophisticated aesthetics</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Our Office Interior Design Philosophy</h3>
              
              <p>
                Every workspace tells a story about your company, and at Interiara, we're expert storytellers. Our <strong>office interior design Dubai</strong> philosophy centers on three core principles that guide every <strong>commercial interior design</strong> project:
              </p>

              <p>
                <strong>1. Productivity-Driven Design:</strong> We begin every <strong>office space planning Dubai</strong> project by understanding how your team works. Do you need collaborative open spaces or focused private offices? Hot-desking flexibility or assigned workstations? These workflow factors shape our <strong>workspace design Dubai</strong> decisions, ensuring your office enhances rather than hinders productivity.
              </p>

              <p>
                <strong>2. Brand-Aligned Aesthetics:</strong> Your <strong>office interior design in Dubai</strong> should be a physical manifestation of your brand. We incorporate your corporate colors, values, and culture into every design element—from reception areas that make powerful first impressions to breakout spaces that reinforce company identity.
              </p>

              <p>
                <strong>3. Future-Ready Flexibility:</strong> In Dubai's fast-paced business environment, your <strong>office design Dubai</strong> needs to accommodate growth and change. Our modular <strong>office fit out Dubai</strong> solutions allow easy reconfiguration as your team expands or working patterns evolve, protecting your investment for years to come.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Comprehensive Commercial Interior Design Services Dubai</h3>
              
              <p>
                Interiara offers end-to-end <strong>office interior design services in Dubai</strong>, handling every aspect of your workspace transformation:
              </p>

              <p>
                <strong>Reception & Lobby Design:</strong> First impressions matter in business. Our <strong>corporate interior design Dubai</strong> team creates stunning reception areas that immediately communicate professionalism, brand identity, and company culture. From sleek minimalist designs to warm, welcoming environments, we tailor each space to your client-facing needs.
              </p>

              <p>
                <strong>Executive Office Design:</strong> C-suite spaces require a delicate balance of prestige and functionality. Our <strong>luxury office interior design UAE</strong> specialists create executive offices that command respect while providing comfort and productivity. Premium materials, sophisticated lighting, and ergonomic furniture combine to create leadership-worthy environments.
              </p>

              <p>
                <strong>Open Plan Office Design:</strong> Modern <strong>office interior design Dubai</strong> increasingly favors open layouts that promote collaboration. We design open offices with strategic zoning, acoustic solutions, and flexible furniture systems that balance teamwork with individual focus through expert <strong>office space planning Dubai</strong>.
              </p>

              <p>
                <strong>Meeting & Conference Rooms:</strong> From intimate huddle spaces to large boardrooms, our <strong>commercial fit out Dubai</strong> team designs meeting rooms equipped with the latest AV technology, optimal acoustics, and comfortable seating that keeps discussions productive and professional.
              </p>

              <p>
                <strong>Breakout & Wellness Areas:</strong> Employee well-being directly impacts performance. We design cafeterias, game rooms, quiet zones, and wellness spaces that help your team recharge. These areas are essential components of <strong>modern office interior design Dubai</strong> that attracts and retains top talent.
              </p>

              <p>
                <strong>IT & Infrastructure Integration:</strong> Today's offices demand seamless technology integration. Our <strong>office fit out Dubai</strong> services include comprehensive cable management, server room design, and smart office systems that keep your business connected and efficient.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">The Interiara Difference: What Sets Our Office Design Apart</h3>

              <p>
                Dubai has numerous <strong>office interior design companies</strong>, so why do discerning businesses consistently choose Interiara? Here's what makes us the <strong>best choice for commercial interior design in Dubai</strong>:
              </p>

              <p>
                <strong>Business Continuity Planning:</strong> We understand that <strong>office renovation Dubai</strong> projects can't shut down your business. Our phased implementation approach and after-hours work schedules minimize disruption, keeping your operations running while we transform your space.
              </p>

              <p>
                <strong>Regulatory Compliance:</strong> Dubai's building codes and civil defense requirements are complex. Our <strong>commercial fit out Dubai</strong> team handles all necessary approvals, permits, and inspections, ensuring your <strong>office design Dubai</strong> meets every regulation.
              </p>

              <p>
                <strong>Turnkey Solutions:</strong> From initial concept to final furniture installation, we manage every aspect of your <strong>office interior design Dubai</strong> project. Our comprehensive service includes space planning, MEP coordination, <strong>office furniture Dubai</strong> procurement, and IT infrastructure setup.
              </p>

              <p>
                <strong>Transparent Pricing:</strong> We believe in complete financial clarity for every <strong>office fit out Dubai</strong> project. Our detailed quotations break down costs for design, materials, labor, and furniture, so you know exactly where your investment goes. No hidden charges, no surprises.
              </p>

              <p>
                <strong>Advanced 3D Visualization:</strong> Before any construction begins, you'll experience your future workspace through photorealistic 3D renders and virtual reality walkthroughs. Make informed decisions about your <strong>office interior design Dubai</strong> while changes are still easy and cost-free.
              </p>

              <p>
                <strong>Quality Craftsmanship:</strong> We partner with Dubai's finest contractors and source materials from reputable suppliers. Every element of your <strong>commercial interior design Dubai</strong>—from partitions to finishes—meets our exacting standards for durability and aesthetics.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Office Interior Design Trends in Dubai 2024-2025</h3>

              <p>
                As <strong>leading office interior designers in Dubai</strong>, we stay ahead of workplace design trends. Here's what's shaping <strong>modern office interior design Dubai</strong>:
              </p>

              <p>
                <strong>Hybrid Work Environments:</strong> Post-pandemic offices require flexible spaces that accommodate both in-person and remote collaboration. Our <strong>workspace design Dubai</strong> solutions include video-conferencing pods, hot-desking systems, and collaboration zones designed for hybrid teams.
              </p>

              <p>
                <strong>Biophilic Design:</strong> Bringing nature indoors improves employee well-being and productivity. We incorporate living walls, natural materials, and abundant natural light into our <strong>office interior design Dubai</strong> projects, creating healthier work environments.
              </p>

              <p>
                <strong>Sustainability Focus:</strong> Eco-conscious <strong>commercial fit out Dubai</strong> is increasingly important. We specify sustainable materials, energy-efficient systems, and waste-reducing designs that align with UAE's green building initiatives and corporate ESG goals.
              </p>

              <p>
                <strong>Activity-Based Working:</strong> Rather than assigned desks, activity-based <strong>office design Dubai</strong> provides diverse settings for different tasks—focus pods, collaboration tables, standing desks, and lounge areas. This approach maximizes space efficiency and employee satisfaction.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Areas We Serve Across Dubai & UAE</h3>
              
              <p>
                Our <strong>office interior design Dubai</strong> services extend throughout the UAE's major business districts. We've completed successful <strong>commercial fit out Dubai</strong> projects in:
              </p>

              <p>
                <strong>Dubai:</strong> DIFC, Business Bay, Downtown Dubai, Dubai Marina, JLT, Internet City, Media City, Knowledge Village, Dubai Silicon Oasis, Al Quoz, JAFZA, DAFZA, and all free zones and commercial areas.
              </p>

              <p>
                <strong>Other Emirates:</strong> Abu Dhabi (including ADGM and Masdar City), Sharjah, Ajman, and Ras Al Khaimah. Distance is never a barrier to creating exceptional workspaces.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Investment in Your Business's Future</h3>

              <p>
                Professional <strong>office interior design in Dubai</strong> isn't just about aesthetics—it's a strategic business investment. Well-designed offices command higher lease values, improve employee retention, enhance client impressions, and boost productivity by up to 20%. Our <strong>commercial interior design Dubai</strong> solutions are built to last, using durable materials and timeless designs that maintain their appeal for years.
              </p>

              <p>
                Whether you're opening a new Dubai office, expanding your existing space, or refreshing outdated interiors, Interiara is your trusted partner for <strong>office interior design in Dubai</strong>. We invite you to schedule a free consultation and discover how we can transform your workspace into a productivity powerhouse that attracts talent, impresses clients, and drives business success.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Frequently Asked Questions About Office Interior Design Dubai</h3>

              <p>
                <strong>How much does office interior design cost in Dubai?</strong><br />
                <strong>Office fit out Dubai</strong> costs vary based on finish level, space size, and requirements. Budget fit-outs start around AED 300-500 per sq ft, mid-range at AED 500-800 per sq ft, and premium <strong>luxury office interior design UAE</strong> from AED 800-1500+ per sq ft. We provide detailed quotes after understanding your specific needs.
              </p>

              <p>
                <strong>How long does an office fit out take in Dubai?</strong><br />
                Typical <strong>office interior design Dubai</strong> projects take 8-16 weeks depending on size and complexity. Small offices (under 2,000 sq ft) may complete in 6-8 weeks, while large <strong>commercial fit out Dubai</strong> projects (10,000+ sq ft) require 12-20 weeks. We provide detailed timelines during the proposal stage.
              </p>

              <p>
                <strong>Do you handle office furniture procurement?</strong><br />
                Yes, our <strong>office furniture Dubai</strong> services include sourcing, procurement, and installation of all workplace furniture. We work with leading manufacturers to provide ergonomic, stylish, and durable furniture solutions within your budget.
              </p>

              <p>
                <strong>Can you work around our business hours?</strong><br />
                Absolutely. We understand that <strong>office renovation Dubai</strong> projects must minimize business disruption. Our teams can work evenings, weekends, and holidays to ensure your operations continue uninterrupted during the transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Commercial Interior Design Dubai</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Complete Office Fit Out Dubai Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive <strong>office interior design Dubai</strong> services including <strong>workspace design Dubai</strong>, <strong>office space planning Dubai</strong>, and <strong>commercial fit out Dubai</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeServices.map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Office Renovation Dubai Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We Deliver Corporate Interior Design Dubai Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven <strong>office interior design Dubai</strong> process ensures a seamless journey from concept to completion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-8 rounded-xl border border-border h-full">
                  <span className="text-6xl font-bold text-primary/20 absolute top-4 right-4">{item.step}</span>
                  <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">{item.title}</h3>
                  <p className="text-muted-foreground relative z-10">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Office Decor Dubai Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Luxury Office Interior Design UAE Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our stunning <strong>commercial interior design Dubai</strong> and <strong>office fit out Dubai</strong> projects showcasing <strong>modern office interior design Dubai</strong> excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {displayedImages.map((image, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAllImages(!showAllImages)}
            >
              {showAllImages ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 w-5 h-5" />
                </>
              ) : (
                <>
                  View More
                  <ChevronDown className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workspace?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book your free consultation today and take the first step towards an inspiring office environment. Our expert <strong className="text-white">office interior designers Dubai</strong> are ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                  WhatsApp Us Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="tel:+916353583148">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +91 635 358 3148
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Office Interior Design Dubai",
            "description": "Expert office interior design and commercial fit-out services in Dubai, UAE. Corporate offices, co-working spaces, and workspace transformations.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Interiara",
              "image": "https://interiara.com/dubai-interior-design-luxury.jpg",
              "telephone": "+91-635-358-3148",
              "email": "info@interiara.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "UAE"
              },
              "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "UAE"],
              "priceRange": "AED 300 - AED 1500 per sq ft"
            },
            "serviceType": "Office Interior Design",
            "areaServed": {
              "@type": "Place",
              "name": "Dubai, UAE"
            }
          })
        }}
      />

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
