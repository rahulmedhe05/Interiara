import { Crown, Users, Award, Heart, Clock, Shield, Palette, CheckCircle, Banknote, Truck } from "lucide-react"

const features = [
  {
    icon: Banknote,
    title: "Beautiful Interiors Yet Affordable",
    description: "Stunning designs that don't break the bank - luxury aesthetics at competitive AED prices",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect your time and ensure project completion within the promised timeline",
  },
  {
    icon: Users,
    title: "Dedicated Team of Designers",
    description: "Expert designers committed to bringing your vision to life with creativity and precision",
  },
  {
    icon: Palette,
    title: "All Services Under One Roof",
    description: "Complete interior solutions from design to execution - no need to coordinate with multiple vendors",
  },
  {
    icon: CheckCircle,
    title: "Quality Checks on Every Step",
    description: "Rigorous quality control at every stage ensures flawless results you'll love",
  },
  {
    icon: Shield,
    title: "No Hidden Costs",
    description: "Transparent pricing with regular updates and project tracking - what you see is what you pay",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Introducing Interiara</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Dubai's Premier Interior Design Company
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono mb-6">
            {
              "Welcome to Interiara – Dubai's award-winning interior design company where innovation meets elegance. With over 500+ successful projects delivered across UAE, we specialize in transforming villas, apartments, penthouses, offices, and commercial spaces into extraordinary living and working environments."
            }
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "From contemporary Arabic style interiors to modern minimalist designs, our expert team of designers brings unparalleled creativity and precision to every project. We blend functionality with aesthetic excellence, creating bespoke spaces that reflect your unique personality while enhancing your quality of life. Experience the Interiara difference – where every detail matters."
            }
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-background rounded-lg p-8 border border-border hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Crown className="w-8 h-8 text-primary" />
              Our Vision
            </h3>
            <p className="text-muted-foreground font-mono leading-relaxed">
              Our vision is to inspire and shape bespoke living spaces that elevate the human experience through design excellence, sustainability, and innovative practices, becoming a globally recognized leader in the interior design industry.
            </p>
          </div>
          <div className="bg-background rounded-lg p-8 border border-border hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              Our Mission
            </h3>
            <p className="text-muted-foreground font-mono leading-relaxed">
              Our mission is to create aesthetically pleasing and functional interiors that reflect our clients' unique styles and improve their quality of life. We are committed to sustainability, client-centricity, and innovation in every project, ensuring each design solution is tailored to meet individual needs while aspiring to exceed expectations.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Why Choose Us</p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Why Choose Interiara?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 text-center hover:shadow-xl transition-shadow border border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Our Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Process</p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              How We Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Give Your Floor Plans</h4>
              <p className="text-muted-foreground font-mono text-sm">Share your floor plans & tell us about your interior design choice & requirements.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Get Customized Estimate</h4>
              <p className="text-muted-foreground font-mono text-sm">Based on your floor plan & requirements, we'll present you with a customized estimate for our services & execution.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Approval of Designs</h4>
              <p className="text-muted-foreground font-mono text-sm">Personalized design proposals. Review & approve before we start. Our professional team is ready to help.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Final Execution</h4>
              <p className="text-muted-foreground font-mono text-sm">Transformation of your space within a given timeline. Sit back & relax. We make it beautiful & functional.</p>
            </div>
          </div>
        </div>

        {/* Additional About Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/Villa-interior-design-Dubai-with-Accouter-Design.webp"
              alt="Luxury Villa Interior Design Dubai - Interiara"
              className="rounded-lg w-full object-cover aspect-square"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Transform Your Space With Dubai's Most Trusted Interior Designers</h3>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "At Interiara, we believe every space tells a story. As one of Dubai's leading interior design firms, our expert team of 25+ designers combines contemporary design principles with Arabic heritage and modern global trends to ensure every interior reflects your unique personality and lifestyle."
              }
            </p>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "Whether you're looking for a luxury villa makeover in Palm Jumeirah, a modern apartment design in Dubai Marina, or a sophisticated office fit-out in Business Bay – Interiara delivers exceptional quality, seamless execution, and outstanding service that exceeds expectations."
              }
            </p>
            <ul className="space-y-3">
              {[
                "Complete space planning and consultation",
                "3D visualization and design mockups",
                "Custom furniture and interior solutions",
                "Residential, office & commercial design",
                "Professional project management",
                "Premium material selection and sourcing",
                "On-site installation and supervision",
                "Post-project maintenance consultation",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
