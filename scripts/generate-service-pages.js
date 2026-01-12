const fs = require('fs');
const path = require('path');

// Read service list
const services = JSON.parse(fs.readFileSync('./scripts/service-list.json', 'utf-8'));

// Keyword mapping for each service type
const keywordMap = {
  'commercial-interior-design-dubai': {
    keywords: [
      'commercial interior design dubai',
      'commercial design dubai',
      'commercial fit out dubai',
      'commercial spaces dubai',
      'commercial renovation dubai',
      'best commercial interior design company dubai',
      'modern commercial interior design dubai',
      'luxury commercial interior design uae',
      'affordable commercial design dubai',
      'commercial interior designer uae',
      'office and commercial fit out dubai',
      'commercial interior decoration dubai',
      'commercial space planning dubai',
      'commercial interior solutions dubai',
      'business space design dubai'
    ],
    description: 'Transform your commercial space with Dubai\'s leading commercial interior design experts. Interiara specializes in retail, offices, and commercial fit-outs. 300+ projects completed. Free 3D visualization & consultation. Call +91 635 358 3148'
  },
  'villa-interior-design-dubai': {
    keywords: [
      'villa interior design dubai',
      'villa design dubai',
      'luxury villa interior design dubai',
      'villa home design dubai',
      'modern villa interior design uae',
      'best villa interior design company dubai',
      'luxury villa interiors dubai',
      'villa renovation dubai',
      'villa fit out dubai',
      'villa interior decoration dubai',
      'upscale villa design dubai',
      'premium villa interiors uae',
      'villa space planning dubai',
      'custom villa design dubai',
      'villa styling dubai'
    ],
    description: 'Design stunning villa interiors with Dubai\'s premier villa interior design specialists. Luxury villas, modern designs, and complete fit-outs. 250+ villas transformed. Free consultation. Call +91 635 358 3148'
  },
  'apartment-interior-design-dubai': {
    keywords: [
      'apartment interior design dubai',
      'apartment design dubai',
      'flat interior design dubai',
      'apartment renovation dubai',
      'modern apartment interior design dubai',
      'luxury apartment interior design uae',
      'best apartment interior design company dubai',
      'affordable apartment design dubai',
      'apartment fit out dubai',
      'apartment interior decoration dubai',
      'small apartment design dubai',
      'spacious apartment interior dubai',
      'apartment space planning dubai',
      'apartment styling dubai',
      'apartment interior solutions dubai'
    ],
    description: 'Create beautiful apartment interiors with expert apartment interior design services in Dubai. From modern to luxury designs. 400+ apartments designed. Free 3D visualization. Call +91 635 358 3148'
  },
  'penthouse-interior-design-dubai': {
    keywords: [
      'penthouse interior design dubai',
      'penthouse design dubai',
      'luxury penthouse interior design dubai',
      'penthouse renovation dubai',
      'high-end penthouse design uae',
      'best penthouse interior design company dubai',
      'modern penthouse interior design dubai',
      'penthouse fit out dubai',
      'penthouse interior decoration dubai',
      'exclusive penthouse design dubai',
      'penthouse styling dubai',
      'penthouse space planning dubai',
      'premium penthouse interiors uae',
      'custom penthouse design dubai',
      'penthouse interior solutions dubai'
    ],
    description: 'Design exclusive penthouse interiors with luxury penthouse interior design experts. Spectacular views, premium finishes, bespoke designs. 150+ penthouses transformed. Call +91 635 358 3148'
  },
  'luxury-interior-design-dubai': {
    keywords: [
      'luxury interior design dubai',
      'luxury interior design uae',
      'luxury home design dubai',
      'premium interior design dubai',
      'high-end interior design dubai',
      'best luxury interior design company dubai',
      'luxury renovation dubai',
      'luxury interior decoration dubai',
      'luxury fit out dubai',
      'bespoke luxury design dubai',
      'exclusive interior design dubai',
      'luxury space planning dubai',
      'luxury styling dubai',
      'upscale interior design dubai',
      'luxury interior solutions dubai'
    ],
    description: 'Experience luxury interior design excellence in Dubai. Premium finishes, bespoke designs, exclusive spaces. Interiara delivers 500+ luxury transformations. Free consultation. Call +91 635 358 3148'
  },
  'modern-interior-design-dubai': {
    keywords: [
      'modern interior design dubai',
      'modern design dubai',
      'contemporary interior design dubai',
      'modern home design dubai',
      'minimalist interior design dubai',
      'best modern interior design company dubai',
      'modern renovation dubai',
      'modern interior decoration dubai',
      'modern fit out dubai',
      'sleek modern design dubai',
      'modern space planning dubai',
      'modern styling dubai',
      'modern interior solutions dubai',
      'modern apartment design dubai',
      'modern villa design dubai'
    ],
    description: 'Create stunning modern interiors with expert modern interior design services in Dubai. Clean lines, functionality, and style. 350+ modern spaces designed. Call +91 635 358 3148'
  },
  'kitchen-interior-design-dubai': {
    keywords: [
      'kitchen interior design dubai',
      'kitchen design dubai',
      'modular kitchen design dubai',
      'kitchen fit out dubai',
      'kitchen renovation dubai',
      'best kitchen interior design company dubai',
      'luxury kitchen design dubai',
      'modern kitchen design dubai',
      'affordable kitchen design dubai',
      'kitchen interior decoration dubai',
      'custom kitchen design dubai',
      'kitchen space planning dubai',
      'kitchen styling dubai',
      'premium kitchen interiors dubai',
      'kitchen interior solutions dubai'
    ],
    description: 'Design beautiful kitchens with expert kitchen interior design services in Dubai. Modular solutions, premium finishes, smart layouts. 400+ kitchens designed. Call +91 635 358 3148'
  },
  'bathroom-interior-design-dubai': {
    keywords: [
      'bathroom interior design dubai',
      'bathroom design dubai',
      'bathroom fit out dubai',
      'bathroom renovation dubai',
      'modern bathroom design dubai',
      'luxury bathroom design dubai',
      'best bathroom interior design company dubai',
      'spa bathroom design dubai',
      'bathroom interior decoration dubai',
      'custom bathroom design dubai',
      'bathroom space planning dubai',
      'bathroom styling dubai',
      'premium bathroom interiors dubai',
      'small bathroom design dubai',
      'bathroom interior solutions dubai'
    ],
    description: 'Create spa-like bathrooms with expert bathroom interior design services in Dubai. Luxury finishes, smart layouts, wellness focus. 350+ bathrooms transformed. Call +91 635 358 3148'
  },
  'living-room-interior-design-dubai': {
    keywords: [
      'living room interior design dubai',
      'living room design dubai',
      'living room renovation dubai',
      'modern living room design dubai',
      'luxury living room design dubai',
      'best living room interior design company dubai',
      'living room fit out dubai',
      'living room interior decoration dubai',
      'contemporary living room design dubai',
      'living room space planning dubai',
      'living room styling dubai',
      'premium living room interiors dubai',
      'living room furniture design dubai',
      'living room interior solutions dubai',
      'family living room design dubai'
    ],
    description: 'Design beautiful living rooms with expert living room interior design in Dubai. Comfort, style, and functionality combined. 380+ living rooms designed. Call +91 635 358 3148'
  },
  'bedroom-interior-design-dubai': {
    keywords: [
      'bedroom interior design dubai',
      'bedroom design dubai',
      'bedroom renovation dubai',
      'modern bedroom design dubai',
      'luxury bedroom design dubai',
      'best bedroom interior design company dubai',
      'bedroom fit out dubai',
      'bedroom interior decoration dubai',
      'master bedroom design dubai',
      'bedroom space planning dubai',
      'bedroom styling dubai',
      'premium bedroom interiors dubai',
      'bedroom furniture design dubai',
      'bedroom interior solutions dubai',
      'cozy bedroom design dubai'
    ],
    description: 'Create serene bedroom sanctuaries with expert bedroom interior design in Dubai. Comfort, relaxation, premium finishes. 390+ bedrooms transformed. Call +91 635 358 3148'
  },
  'dining-room-interior-design-dubai': {
    keywords: [
      'dining room interior design dubai',
      'dining room design dubai',
      'dining area design dubai',
      'dining room renovation dubai',
      'modern dining room design dubai',
      'luxury dining room design dubai',
      'best dining room interior design company dubai',
      'dining room fit out dubai',
      'dining room interior decoration dubai',
      'dining room space planning dubai',
      'dining room styling dubai',
      'dining room furniture design dubai',
      'formal dining room design dubai',
      'dining room interior solutions dubai',
      'contemporary dining room design dubai'
    ],
    description: 'Design elegant dining spaces with expert dining room interior design in Dubai. Sophisticated, functional, entertaining spaces. 300+ dining rooms designed. Call +91 635 358 3148'
  },
  'office-fit-out-dubai': {
    keywords: [
      'office fit out dubai',
      'office fit-out dubai',
      'office interior design dubai',
      'commercial office fit out dubai',
      'corporate office fit out dubai',
      'best office fit out company dubai',
      'modern office fit out dubai',
      'luxury office fit out dubai',
      'affordable office fit out dubai',
      'office renovation dubai',
      'office space planning dubai',
      'office interior solutions dubai',
      'professional office fit out dubai',
      'workspace fit out dubai',
      'office design and fit out dubai'
    ],
    description: 'Complete office fit-out solutions in Dubai with professional workspace design. Corporate offices, startups, co-working spaces. 300+ offices fitted out. Call +91 635 358 3148'
  },
  'restaurant-interior-design-dubai': {
    keywords: [
      'restaurant interior design dubai',
      'restaurant design dubai',
      'restaurant fit out dubai',
      'restaurant renovation dubai',
      'modern restaurant design dubai',
      'luxury restaurant interior design dubai',
      'best restaurant interior design company dubai',
      'fine dining restaurant design dubai',
      'casual restaurant design dubai',
      'restaurant space planning dubai',
      'restaurant interior decoration dubai',
      'restaurant styling dubai',
      'themed restaurant design dubai',
      'restaurant interior solutions dubai',
      'upscale restaurant design dubai'
    ],
    description: 'Create stunning restaurants with expert restaurant interior design in Dubai. Ambiance, functionality, unique concepts. 200+ restaurants designed. Call +91 635 358 3148'
  },
  'salon-interior-design-dubai': {
    keywords: [
      'salon interior design dubai',
      'salon design dubai',
      'salon fit out dubai',
      'salon renovation dubai',
      'modern salon design dubai',
      'luxury salon interior design dubai',
      'best salon interior design company dubai',
      'beauty salon design dubai',
      'hair salon design dubai',
      'salon space planning dubai',
      'salon interior decoration dubai',
      'salon styling dubai',
      'salon furniture design dubai',
      'salon interior solutions dubai',
      'upscale salon design dubai'
    ],
    description: 'Design beautiful salons with expert salon interior design in Dubai. Modern, luxurious, client-focused spaces. 180+ salons designed. Call +91 635 358 3148'
  },
  'retail-shop-interior-design-dubai': {
    keywords: [
      'retail shop interior design dubai',
      'retail interior design dubai',
      'shop design dubai',
      'retail fit out dubai',
      'retail renovation dubai',
      'modern retail design dubai',
      'luxury retail interior design dubai',
      'best retail interior design company dubai',
      'retail space planning dubai',
      'retail interior decoration dubai',
      'retail styling dubai',
      'retail furniture design dubai',
      'boutique design dubai',
      'retail interior solutions dubai',
      'commercial retail design dubai'
    ],
    description: 'Create attractive retail spaces with expert retail shop interior design in Dubai. Customer flow, displays, branding. 250+ retail spaces designed. Call +91 635 358 3148'
  },
  'hotel-interior-design-dubai': {
    keywords: [
      'hotel interior design dubai',
      'hotel design dubai',
      'hotel fit out dubai',
      'hotel renovation dubai',
      'luxury hotel interior design dubai',
      'modern hotel design dubai',
      'best hotel interior design company dubai',
      'boutique hotel design dubai',
      'hotel lobby design dubai',
      'hotel room design dubai',
      'hotel space planning dubai',
      'hotel interior decoration dubai',
      'hotel styling dubai',
      'hotel interior solutions dubai',
      'upscale hotel design dubai'
    ],
    description: 'Design premium hotel spaces with expert hotel interior design in Dubai. Luxury, comfort, memorable experiences. 120+ hotels designed. Call +91 635 358 3148'
  }
};

// Generate keywords for services not in map (using template)
function generateKeywords(serviceName, slug) {
  if (keywordMap[slug]) {
    return keywordMap[slug].keywords;
  }
  
  // Create 15 keyword variations from service name
  const baseKeywords = serviceName.toLowerCase().split(' ');
  const keywords = [
    serviceName.toLowerCase(),
    `${serviceName.toLowerCase()} dubai`,
    `best ${serviceName.toLowerCase()} company dubai`,
    `luxury ${serviceName.toLowerCase()} dubai`,
    `modern ${serviceName.toLowerCase()} dubai`,
    `affordable ${serviceName.toLowerCase()} dubai`,
    `${serviceName.toLowerCase()} uae`,
    `premium ${serviceName.toLowerCase()} dubai`,
    `expert ${serviceName.toLowerCase()} dubai`,
    `professional ${serviceName.toLowerCase()} dubai`,
    `${serviceName.toLowerCase()} services dubai`,
    `custom ${serviceName.toLowerCase()} dubai`,
    `design ${serviceName.toLowerCase()} dubai`,
    `${serviceName.toLowerCase()} solutions dubai`,
    `top ${serviceName.toLowerCase()} company dubai`
  ];
  return keywords.slice(0, 15);
}

function generateDescription(serviceName, slug) {
  if (keywordMap[slug]?.description) {
    return keywordMap[slug].description;
  }
  return `Transform your space with ${serviceName} expertise. Professional design services in Dubai. 300+ projects completed. Free 3D visualization & consultation. Call +91 635 358 3148`;
}

// Create layout.tsx template
function createLayoutTsx(serviceName, keywords, description, slug) {
  return `import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "${serviceName} | Expert ${serviceName} Design Services UAE | Interiara",
  description: "${description}",
  keywords: [
    ${keywords.map(k => `"${k}"`).join(',\n    ')}
  ],
  openGraph: {
    title: "${serviceName} | Transform Your Space | Interiara",
    description: "Expert ${serviceName} design specialists creating beautiful spaces across Dubai & UAE. Free consultation!",
    url: "https://interiara.com/${slug}",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/${slug}",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
`;
}

// Create page.tsx template
function createPageTsx(serviceName, slug, keywords) {
  const shortKeywords = keywords.slice(0, 5);
  const keywordString = shortKeywords.join(', ');
  
  // Generate valid function name (no leading numbers or special chars)
  const baseName = serviceName.replace(/[^a-zA-Z0-9]/g, '');
  const functionName = baseName.replace(/^(\d+)/, 'S$1'); // Prefix numbers with 'S' if at start
  
  return `"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ServicePageForm } from "@/components/service-page-form"
import { Phone, CheckCircle, Star, ArrowRight, Lightbulb, Palette, Layout, Home, Settings, Zap, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// SEO Keywords: ${keywordString}

const serviceFeatures = [
  { icon: Lightbulb, title: "Expert Design", desc: "Professional expertise with proven track record" },
  { icon: Palette, title: "Custom Solutions", desc: "Tailored designs matching your vision" },
  { icon: Layout, title: "Space Optimization", desc: "Smart layouts maximizing functionality" },
  { icon: Home, title: "Quality Materials", desc: "Premium finishes and durable solutions" },
  { icon: Settings, title: "Project Management", desc: "Seamless execution from start to finish" },
  { icon: Zap, title: "Timely Delivery", desc: "Efficient completion within timeline" },
]

const processSteps = [
  { step: "01", title: "Consultation", desc: "We understand your needs, vision, and requirements." },
  { step: "02", title: "Design Concept", desc: "Our team creates tailored design concepts for approval." },
  { step: "03", title: "3D Visualization", desc: "Experience your space through photorealistic renders." },
  { step: "04", title: "Material Selection", desc: "Choose from premium materials and finishes." },
  { step: "05", title: "Execution", desc: "Professional implementation with quality assurance." },
  { step: "06", title: "Handover", desc: "Final inspection and delivery of your transformed space." },
]

const stats = [
  { number: "300+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "25+", label: "Expert Designers" },
]

const galleryImages = [
  { src: "/dubai-interior-design-luxury.jpg", alt: "${serviceName} - Luxury design" },
  { src: "/Reception-9.jpg", alt: "${serviceName} - Modern space" },
  { src: "/Modern-Eclectic-3-1.webp", alt: "${serviceName} - Contemporary style" },
  { src: "/Top-Living-Room-Decor.png", alt: "${serviceName} - Elegant interior" },
  { src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", alt: "${serviceName} - Lighting design" },
  { src: "/top-interior-designers-dubai.jpg", alt: "${serviceName} - Professional design" },
  { src: "/dubai-luxury-interior-design-585x734.jpg", alt: "${serviceName} - Luxury spaces" },
  { src: "/Villa-interior-design-Dubai-with-Accouter-Design.webp", alt: "${serviceName} - Premium interiors" },
  { src: "/meet.jpg", alt: "${serviceName} - Modern design" },
  { src: "/2b-scaled.jpg", alt: "${serviceName} - Custom design" },
  { src: "/DSC01457-min-scaled.webp", alt: "${serviceName} - Expert execution" },
  { src: "/98488683052973.5d304d1b15e83.jpg", alt: "${serviceName} - Quality finishes" },
  { src: "/Color-Scheme-Modular-kitchen-Interior-Design-and-Fit-Out-DesignMaster-Dubai-2.jpg", alt: "${serviceName} - Functional design" },
  { src: "/Al-Barari-Kitchen.jpg", alt: "${serviceName} - Premium fixtures" },
  { src: "/kitchen-aesthetic-harmony-modern-luxury-fusion-interior-design-dream-home-1-min.jpg", alt: "${serviceName} - Aesthetic design" },
  { src: "/L-Shaped-Modern-kitchen-Layout-DesignMaster-Dubai.jpg", alt: "${serviceName} - Space planning" },
  { src: "/9f76af35953159a45c406d49cb9bc4d0.jpg", alt: "${serviceName} - Design excellence" },
  { src: "/Zen_PalmD1_07b-scaled-1.jpg", alt: "${serviceName} - Serene spaces" },
  { src: "/1-Unique-Bathroom-Projects.jpg", alt: "${serviceName} - Unique projects" },
  { src: "/8-Bathroom-Inspiration-By-Dubai-Top-Interior-Designers.jpeg", alt: "${serviceName} - Design inspiration" },
  { src: "/Dubai-Bathroom-Design-2.jpg", alt: "${serviceName} - Dubai design" },
  { src: "/bathroom-1024x683.jpg", alt: "${serviceName} - Luxury bathroom" },
  { src: "/gf-ktchen-view2.jpg", alt: "${serviceName} - Kitchen design" },
  { src: "/10-Stunning-Kitchen-Island-Designs-to-Elevate-Your-Culinary-Space.jpeg", alt: "${serviceName} - Island designs" },
]

export default function ${functionName}() {
  const [showAllImages, setShowAllImages] = useState(false)
  const whatsappNumber = "916353583148"
  const whatsappMessage = encodeURIComponent("Hi Interiara! I'm interested in ${serviceName} services in Dubai. Please share more details.")
  
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6)

  return (
    <main className="min-h-screen bg-background">
      <Navigation darkLogo hideMenu />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3 order-1 lg:order-none">
              <p className="text-accent font-mono uppercase tracking-wider mb-4">Best ${serviceName} Company Dubai</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Expert ${serviceName} - <span className="text-primary">Transform Your Space</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                Looking for professional <strong>${serviceName}</strong>? Interiara is Dubai's premier <strong>${serviceName} company</strong>, specializing in creating beautiful, functional spaces. With 300+ projects completed and 15+ years of experience, we deliver exceptional results tailored to your needs.
              </p>
              
              <div className="relative mb-8 hidden lg:block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/dubai-interior-design-luxury.jpg" 
                    alt="${serviceName} by Interiara"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">300+</p>
                  <p className="text-xs">Projects Completed</p>
                </div>
              </div>
              
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
            
            <div className="lg:col-span-2 order-2 lg:order-none w-full">
              <ServicePageForm serviceName="${serviceName}" />
            </div>
            
            <div className="order-3 lg:hidden w-full">
              <div className="relative mb-8">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/dubai-interior-design-luxury.jpg" 
                    alt="${serviceName} by Interiara"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold">300+</p>
                  <p className="text-xs">Projects Completed</p>
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

      {/* Main Content Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why Choose Interiara for ${serviceName}?
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                At Interiara, we believe that exceptional <strong>${serviceName}</strong> creates spaces that inspire and delight. With over 15 years of experience in the Dubai design industry, our team of 25+ expert designers understands the nuances of creating beautiful, functional spaces that exceed expectations.
              </p>

              <p>
                We've completed 300+ successful projects across Dubai and the UAE, ranging from residential to commercial spaces. Our portfolio showcases our versatility in ${serviceName}, from contemporary minimalist designs to luxurious traditional aesthetics. Whether you're looking for budget-friendly solutions or premium luxury finishes, Interiara delivers excellence at every level.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Our ${serviceName} Approach</h3>
              
              <p>
                We follow a proven design process that ensures your project is completed on time, within budget, and to your complete satisfaction. Our process begins with understanding your vision, lifestyle, and specific requirements.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Comprehensive Services</h3>
              
              <p>
                Our <strong>${serviceName}</strong> services include:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Initial consultation and space analysis</li>
                <li>Concept design and mood boards</li>
                <li>3D visualization and virtual walkthroughs</li>
                <li>Material and color selection</li>
                <li>Project management and execution</li>
                <li>Final handover and after-sales support</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Why We're Different</h3>

              <p>
                Interiara stands out in the crowded Dubai design market through our commitment to quality, innovation, and client satisfaction. We don't just create beautiful spaces—we create experiences that enhance your daily life or business operations.
              </p>

              <p>
                Our team stays updated with the latest design trends and technologies, ensuring your project incorporates modern solutions. We work with premium suppliers and skilled craftsmen to guarantee that every element meets our exacting standards.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Investment in Your Space</h3>

              <p>
                Professional ${serviceName} is an investment in your property's value and your quality of life. Well-designed spaces command higher property values, improve functionality, and create lasting impressions on clients and visitors.
              </p>

              <p>
                Whether you're renovating your home, opening a new business, or refreshing your existing space, Interiara is your trusted partner for exceptional <strong>${serviceName}</strong>. Contact us today for a free consultation and let's transform your space together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our ${serviceName} Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional expertise delivered with excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((service, index) => (
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
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A seamless journey from concept to completion
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
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our ${serviceName} Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of beautifully designed spaces
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book your free consultation today. Our expert team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={\`https://wa.me/\${whatsappNumber}?text=\${whatsappMessage}\`} target="_blank" rel="noopener noreferrer">
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

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
`;
}

// Main generation function
function generateServicePages() {
  let created = 0;
  let failed = 0;

  services.forEach((service) => {
    try {
      const { slug, serviceName } = service;
      const dirPath = path.join(__dirname, '..', 'app', slug);
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      // Get keywords and description
      const keywords = generateKeywords(serviceName, slug);
      const description = keywordMap[slug]?.description || generateDescription(serviceName, slug);

      // Create layout.tsx
      const layoutTsx = createLayoutTsx(serviceName, keywords, description, slug);
      fs.writeFileSync(path.join(dirPath, 'layout.tsx'), layoutTsx);

      // Create page.tsx
      const pageTsx = createPageTsx(serviceName, slug, keywords);
      fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageTsx);

      created++;
      console.log(`✅ Created: ${slug}`);
    } catch (error) {
      failed++;
      console.error(`❌ Failed: ${service.slug} - ${error.message}`);
    }
  });

  console.log(`\n📊 Generation Complete: ${created} created, ${failed} failed`);
}

// Run generation
generateServicePages();
