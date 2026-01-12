"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ServicePageForm } from "@/components/service-page-form"
import { Phone, CheckCircle, Star, ArrowRight, Home, Bed, Bath, Sofa, ChefHat, Palette, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// SEO Keywords: residential interior design dubai, home interior design dubai, house interior design dubai,
// interior designer for home dubai, residential interior designer uae, home decoration dubai,
// best residential interior design company dubai, affordable home interior design dubai,
// luxury residential interior design uae, modern home interior design dubai, villa home design dubai,
// dubai home makeover, family home interior dubai, residential renovation dubai, home styling dubai

const residentialServices = [
  { icon: Home, title: "Villa Interior Design", desc: "Luxurious villa transformations with bespoke designs" },
  { icon: Sofa, title: "Apartment Design", desc: "Smart, stylish solutions for modern apartments" },
  { icon: Bed, title: "Bedroom Design", desc: "Serene sleeping spaces tailored to your style" },
  { icon: ChefHat, title: "Kitchen Design", desc: "Functional & beautiful modular kitchen solutions" },
  { icon: Bath, title: "Bathroom Design", desc: "Spa-like bathrooms with premium finishes" },
  { icon: Palette, title: "Living Room Design", desc: "Inviting spaces for family & entertainment" },
]

const processSteps = [
  { step: "01", title: "Free Consultation", desc: "We visit your home, understand your vision, lifestyle needs, and budget requirements." },
  { step: "02", title: "Concept Development", desc: "Our designers create mood boards, color schemes, and initial design concepts for approval." },
  { step: "03", title: "3D Visualization", desc: "Experience your future home with photorealistic 3D renders and virtual walkthroughs." },
  { step: "04", title: "Material Selection", desc: "Choose from premium materials, finishes, and furnishings from trusted suppliers." },
  { step: "05", title: "Project Execution", desc: "Our skilled craftsmen bring designs to life with meticulous attention to detail." },
  { step: "06", title: "Final Handover", desc: "Quality inspection, styling, and handover of your dream home ready to live in." },
]

const stats = [
  { number: "500+", label: "Homes Transformed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "25+", label: "Expert Designers" },
]

const galleryImages = [
  // Row 1 - Initial display
  { src: "/dubai-interior-design-luxury.jpg", alt: "Luxury residential interior design Dubai" },
  { src: "/Villa-interior-design-Dubai-with-Accouter-Design.webp", alt: "Villa home design Dubai - modern interiors" },
  { src: "/meet.jpg", alt: "Modern home interior design Dubai" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "Contemporary house interior design Dubai" },
  { src: "/Top-Living-Room-Decor.png", alt: "Living room home decoration Dubai" },
  { src: "/Al-Barari-Kitchen.jpg", alt: "Kitchen interior design Dubai home" },
  // Row 2
  { src: "/dubai-luxury-interior-design-585x734.jpg", alt: "Dubai luxury home interior design" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "Luxury residential interior Dubai living room" },
  { src: "/kitchen-aesthetic-harmony-modern-luxury-fusion-interior-design-dream-home-1-min.jpg", alt: "Luxury kitchen residential interior design UAE" },
  { src: "/top-interior-designers-dubai.jpg", alt: "Best residential interior design company Dubai" },
  { src: "/8-Bathroom-Inspiration-By-Dubai-Top-Interior-Designers.jpeg", alt: "Bathroom home interior design Dubai" },
  { src: "/Zen_PalmD1_07b-scaled-1.jpg", alt: "Bedroom interior designer for home Dubai" },
  // Row 3
  { src: "/1-Unique-Bathroom-Projects.jpg", alt: "Residential renovation Dubai bathroom" },
  { src: "/10-Stunning-Kitchen-Island-Designs-to-Elevate-Your-Culinary-Space.jpeg", alt: "Home styling Dubai kitchen island" },
  { src: "/2b-scaled.jpg", alt: "Family home interior Dubai design" },
  { src: "/Color-Scheme-Modular-kitchen-Interior-Design-and-Fit-Out-DesignMaster-Dubai-2.jpg", alt: "Interior fit out residential Dubai kitchen" },
  { src: "/DSC01457-min-scaled.webp", alt: "Affordable home interior design Dubai" },
  { src: "/Dubai-Bathroom-Design-2.jpg", alt: "Dubai home makeover bathroom design" },
  // Row 4
  { src: "/L-Shaped-Modern-kitchen-Layout-DesignMaster-Dubai.jpg", alt: "Modern home interior design Dubai kitchen" },
  { src: "/Reception-9.jpg", alt: "Complete home interior solutions Dubai" },
  { src: "/bathroom-1024x683.jpg", alt: "Residential interior designer UAE bathroom" },
  { src: "/gf-ktchen-view2.jpg", alt: "Home decoration Dubai modern kitchen" },
  { src: "/98488683052973.5d304d1b15e83.jpg", alt: "Luxury residential interior design UAE living" },
  { src: "/9f76af35953159a45c406d49cb9bc4d0.jpg", alt: "House interior design Dubai bedroom" },
]

export default function ResidentialInteriorDesignDubai() {
  const [showAllImages, setShowAllImages] = useState(false)
  const whatsappNumber = "916353583148"
  const whatsappMessage = encodeURIComponent("Hi Interiara! I'm interested in residential interior design services for my home in Dubai. Please share more details.")
  
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6)

  return (
    <main className="min-h-screen bg-background">
      <Navigation darkLogo hideMenu />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Side - Content (order-1 on mobile, normal on desktop) */}
            <div className="lg:col-span-3 order-1 lg:order-none">
              <p className="text-accent font-mono uppercase tracking-wider mb-4">Best Residential Interior Design Company Dubai</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Expert Home Interior Design Dubai - <span className="text-primary">Transform Your House</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                Looking for the <strong>best residential interior design in Dubai</strong>? Interiara is Dubai's premier <strong>home interior design company</strong>, specializing in <strong>luxury residential interior design UAE</strong>. From stunning <strong>villa home design Dubai</strong> to <strong>modern home interior design</strong> for apartments, we deliver exceptional <strong>house interior design Dubai</strong> services. Our expert <strong>interior designers for home Dubai</strong> bring your vision to life with innovative designs and flawless execution.
              </p>
              
              {/* Featured Image - Hidden on mobile, shown on desktop */}
              <div className="relative mb-8 hidden lg:block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/dubai-interior-design-luxury.jpg" 
                    alt="Residential Interior Design Dubai - Luxury Home by Interiara"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-xs">Homes Designed</p>
                </div>
              </div>
              
              {/* Quick Stats - Hidden on mobile, shown on desktop */}
              <div className="grid-cols-3 gap-4 hidden lg:grid">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">25+</p>
                  <p className="text-xs text-muted-foreground">Expert Designers</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Form (order-2 on mobile, stays right on desktop) */}
            <div className="lg:col-span-2 order-2 lg:order-none w-full">
              <ServicePageForm serviceName="Residential Interior Design" />
            </div>
            
            {/* Mobile only - Image & Stats (order-3, only visible on mobile) */}
            <div className="order-3 lg:hidden w-full">
              <div className="relative mb-8">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/dubai-interior-design-luxury.jpg" 
                    alt="Residential Interior Design Dubai - Luxury Home by Interiara"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-xs">Homes Designed</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-xs text-muted-foreground">Client Satisfaction</p>
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

      {/* About Residential Design Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why Choose Interiara for Home Interior Design in Dubai?
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Your home is more than just four walls—it's where memories are made, families grow, and life unfolds. At Interiara, we understand the profound significance of residential spaces. As the <strong>best residential interior design company in Dubai</strong>, our <strong>home interior design Dubai</strong> services go beyond mere aesthetics. Whether you need <strong>affordable home interior design Dubai</strong> or <strong>luxury residential interior design UAE</strong>, we create environments that nurture well-being, enhance functionality, and express your unique personality.
              </p>
              
              <p>
                As leading <strong>residential interior designers in UAE</strong>, we've had the privilege of transforming over 500 homes. From sprawling Emirates Hills villas requiring expert <strong>villa home design Dubai</strong> to compact Dubai Marina apartments needing smart <strong>house interior design Dubai</strong> solutions, our portfolio showcases versatility and creativity. Our team of 25+ expert <strong>interior designers for home Dubai</strong> brings diverse perspectives and specialized skills to every <strong>dubai home makeover</strong> project.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Understanding Dubai's Modern Home Interior Design Landscape</h3>
              
              <p>
                Dubai's residential architecture demands expert <strong>residential interior designers UAE</strong> who understand both modern and traditional styles. Our <strong>home decoration Dubai</strong> experts are well-versed in creating stunning interiors for:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>High-rise apartment home interior design Dubai</strong> – Maximizing space in compact layouts while creating luxurious atmospheres</li>
                <li><strong>Villa home design Dubai</strong> – Balancing grandeur with warmth for family-oriented spaces with complete <strong>residential renovation Dubai</strong></li>
                <li><strong>Penthouse modern home interior design Dubai</strong> – Crafting statement homes with panoramic views as design elements</li>
                <li><strong>Arabic-contemporary family home interior Dubai</strong> – Honoring cultural heritage while embracing modern living</li>
                <li><strong>Sustainable residential interior design UAE</strong> – Eco-conscious solutions with <strong>home styling Dubai</strong> expertise</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Our Residential Interior Design Philosophy</h3>
              
              <p>
                Every home tells a story, and at Interiara, we're passionate storytellers. Our design philosophy centers on three core principles that guide every <strong>residential interior project in Dubai</strong>:
              </p>

              <p>
                <strong>1. Human-Centric Design:</strong> We begin every project by understanding how you live. Do you host frequent gatherings? Work from home? Have young children or elderly family members? These lifestyle factors shape our design decisions, ensuring your home works seamlessly with your daily routines.
              </p>

              <p>
                <strong>2. Timeless Aesthetics:</strong> While we stay current with design trends, we prioritize timeless elegance over fleeting fads. Your <strong>home interior design in Dubai</strong> should feel fresh and relevant for years to come, not dated within seasons.
              </p>

              <p>
                <strong>3. Intelligent Space Planning:</strong> In a city where real estate is premium, maximizing every square foot is essential. Our designers excel at <strong>residential space planning</strong>, creating homes that feel spacious, organized, and purposeful regardless of actual size.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Comprehensive Residential Design Services</h3>
              
              <p>
                Interiara offers end-to-end <strong>residential interior design services in Dubai</strong>, handling every aspect of your home transformation:
              </p>

              <p>
                <strong>Living Room Design:</strong> The heart of your home deserves special attention. We create living spaces that balance comfort with sophistication, incorporating custom seating arrangements, statement lighting, and curated art pieces that spark conversation.
              </p>

              <p>
                <strong>Bedroom Sanctuaries:</strong> Your bedroom should be a retreat from the world. Our designers focus on creating serene environments with thoughtful lighting, premium textiles, and layouts that promote restful sleep and relaxation.
              </p>

              <p>
                <strong>Kitchen Excellence:</strong> Modern kitchens are multi-functional spaces for cooking, dining, and gathering. We design <strong>modular kitchens in Dubai</strong> that combine efficiency with elegance, featuring smart storage solutions and premium appliances.
              </p>

              <p>
                <strong>Bathroom Retreats:</strong> Transform your bathroom into a spa-like sanctuary with luxurious finishes, intelligent layouts, and wellness-focused features that turn daily routines into indulgent experiences.
              </p>

              <p>
                <strong>Children's Rooms:</strong> We design spaces that grow with your children—playful yet practical, stimulating yet safe. Our <strong>kids' room designs</strong> balance fun elements with study areas and ample storage.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">The Interiara Difference: What Sets Us Apart</h3>

              <p>
                Dubai has no shortage of interior design firms, so why do discerning homeowners consistently choose Interiara? Here's what makes us the <strong>best choice for residential interior design in Dubai</strong>:
              </p>

              <p>
                <strong>Transparent Pricing:</strong> We believe in complete financial clarity. Our detailed quotations break down every cost, so you know exactly where your investment goes. No hidden charges, no surprises.
              </p>

              <p>
                <strong>Advanced 3D Visualization:</strong> Before any construction begins, you'll experience your future home through photorealistic 3D renders and virtual reality walkthroughs. Make informed decisions and request changes while it's still on paper.
              </p>

              <p>
                <strong>Project Management Excellence:</strong> Each residential project is assigned a dedicated project manager who serves as your single point of contact. They coordinate between designers, contractors, and suppliers, keeping your project on track and stress-free.
              </p>

              <p>
                <strong>Quality Craftsmanship:</strong> We work with Dubai's finest craftsmen and source materials from reputable suppliers. Every piece of furniture, every finish, and every detail meets our exacting standards.
              </p>

              <p>
                <strong>After-Service Support:</strong> Our relationship doesn't end at handover. Interiara provides ongoing support for any adjustments, maintenance guidance, and future enhancement consultations.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Areas We Serve Across Dubai & UAE</h3>
              
              <p>
                Our <strong>residential interior design services</strong> extend throughout Dubai and the wider UAE region. We've completed successful home transformations in:
              </p>

              <p>
                <strong>Dubai:</strong> Downtown Dubai, Dubai Marina, Palm Jumeirah, Emirates Hills, Arabian Ranches, Jumeirah, Business Bay, JBR, Dubai Hills Estate, Al Barsha, Mirdif, JLT, Creek Harbour, DIFC residences, and all other communities.
              </p>

              <p>
                <strong>Other Emirates:</strong> Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, and Fujairah. Distance is never a barrier to creating beautiful homes.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Investment in Your Home's Future</h3>

              <p>
                Professional <strong>residential interior design in Dubai</strong> isn't just about aesthetics—it's a smart investment. Well-designed homes command higher resale values, provide better living experiences, and reduce the need for costly renovations down the line. Our designs are built to last, using durable materials and timeless aesthetics that maintain their appeal for years.
              </p>

              <p>
                Whether you're moving into a new home, renovating your existing space, or simply refreshing your interiors, Interiara is your trusted partner for <strong>home interior design in Dubai</strong>. We invite you to schedule a free consultation and discover how we can transform your house into the home you've always envisioned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Interior Designer for Home Dubai</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Complete Home Interior Solutions Dubai
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive <strong>residential interior design Dubai</strong> services including <strong>home decoration Dubai</strong>, <strong>home styling Dubai</strong>, and <strong>interior fit out residential Dubai</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
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
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Dubai Home Makeover Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We Deliver Residential Renovation Dubai Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven <strong>home interior design Dubai</strong> process ensures a seamless journey from concept to your dream home
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
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Home Decoration Dubai Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Luxury Residential Interior Design UAE Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our stunning <strong>house interior design Dubai</strong> and <strong>villa home design Dubai</strong> projects showcasing <strong>modern home interior design Dubai</strong> excellence
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

      {/* CTA / Contact Form Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book your free consultation today and take the first step towards your dream home. Our expert designers are ready to bring your vision to life.
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

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent font-mono uppercase tracking-wider mb-4">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Residential Interior Design FAQs
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  q: "How much does residential interior design cost in Dubai?",
                  a: "Residential interior design costs vary based on project scope, size, and finish quality. At Interiara, we offer customized solutions for every budget. Contact us for a free consultation and detailed quotation tailored to your requirements."
                },
                {
                  q: "How long does a complete home interior project take?",
                  a: "Typical timelines range from 6-8 weeks for apartments to 12-16 weeks for villas. We provide detailed project schedules during consultation and ensure timely delivery without compromising quality."
                },
                {
                  q: "Do you provide furniture as part of residential interior design?",
                  a: "Yes! We offer complete turnkey solutions including custom furniture design, procurement of premium furnishings, lighting, décor, and accessories. Everything you need for a move-in ready home."
                },
                {
                  q: "Can you work with my existing furniture and décor?",
                  a: "Absolutely. We can integrate your cherished pieces into the new design, reupholster furniture, or create a hybrid approach that blends existing items with new additions."
                },
                {
                  q: "Do you offer interior design services for rented homes?",
                  a: "Yes, we provide renter-friendly design solutions that transform spaces without permanent modifications. From furniture arrangements to removable décor, we maximize impact while respecting lease agreements."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does residential interior design cost in Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Residential interior design costs vary based on project scope, size, and finish quality. At Interiara, we offer customized solutions for every budget. Contact us for a free consultation and detailed quotation tailored to your requirements."
                  }
                },
                {
                  "@type": "Question",
                  name: "How long does a complete home interior project take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Typical timelines range from 6-8 weeks for apartments to 12-16 weeks for villas. We provide detailed project schedules during consultation and ensure timely delivery without compromising quality."
                  }
                },
                {
                  "@type": "Question",
                  name: "Do you provide furniture as part of residential interior design?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We offer complete turnkey solutions including custom furniture design, procurement of premium furnishings, lighting, décor, and accessories. Everything you need for a move-in ready home."
                  }
                }
              ]
            })
          }}
        />
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Residential Interior Design Dubai",
            provider: {
              "@type": "LocalBusiness",
              name: "Interiara",
              telephone: "+916353583148",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE"
              }
            },
            description: "Professional residential interior design services in Dubai including villa design, apartment interiors, home renovation, and complete turnkey solutions.",
            areaServed: {
              "@type": "City",
              name: "Dubai"
            },
            serviceType: "Residential Interior Design"
          })
        }}
      />

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
