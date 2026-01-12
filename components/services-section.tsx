"use client"

import { 
  Home, Building2, Store, Castle, Building, Warehouse, Crown, Sparkles, Moon, 
  Minimize2, Square, ChefHat, DoorOpen, Bath, Sofa, Bed, UtensilsCrossed, 
  Laptop, Briefcase, ShoppingBag, Coffee, Hotel, LayoutGrid, Stethoscope,
  Armchair, Blinds, Lamp, PaintBucket, Palette, Hammer, PenTool, Leaf,
  Smartphone, Package, TreePine, Sun, Clapperboard, Baby, Users, Dumbbell,
  Scissors, Sparkle, PartyPopper, Frame, Image, Layers, ExternalLink,
  Lightbulb, Volume2, Wallet, LayoutDashboard
} from "lucide-react"

const serviceCategories = [
  {
    title: "Residential Design",
    services: [
      { name: "Residential Interior Design", icon: Home },
      { name: "Villa Interior Design", icon: Castle },
      { name: "Apartment Interior Design", icon: Building },
      { name: "Penthouse Interior Design", icon: Warehouse },
      { name: "Luxury Interior Design", icon: Crown },
      { name: "Modern Interior Design", icon: Sparkles },
      { name: "Arabic Style Interior Design", icon: Moon },
      { name: "Minimalist Interior Design", icon: Minimize2 },
      { name: "Contemporary Interior Design", icon: Square },
    ],
  },
  {
    title: "Room-Specific Design",
    services: [
      { name: "Kitchen Interior Design", icon: ChefHat },
      { name: "Modular Kitchens", icon: LayoutGrid },
      { name: "Wardrobe & Closet Design", icon: DoorOpen },
      { name: "Bathroom Interior Design", icon: Bath },
      { name: "Living Room Interior Design", icon: Sofa },
      { name: "Bedroom Interior Design", icon: Bed },
      { name: "Dining Room Interior Design", icon: UtensilsCrossed },
      { name: "Home Office Interior Design", icon: Laptop },
      { name: "Children's Room Interior Design", icon: Baby },
      { name: "Media Room & Home Theater", icon: Clapperboard },
    ],
  },
  {
    title: "Commercial Design",
    services: [
      { name: "Office Interior Design", icon: Building2 },
      { name: "Office Fit-Out", icon: Briefcase },
      { name: "Retail Shop Interior Design", icon: ShoppingBag },
      { name: "Restaurant & Cafe Interior", icon: Coffee },
      { name: "Hotel Interior Design", icon: Hotel },
      { name: "Showroom Interior Design", icon: Store },
      { name: "Clinic & Healthcare Interior", icon: Stethoscope },
      { name: "Co-Working Space Interior", icon: Users },
      { name: "Gym & Fitness Studio", icon: Dumbbell },
      { name: "Salon & Spa Interior", icon: Scissors },
      { name: "Event & Banquet Hall Design", icon: PartyPopper },
    ],
  },
  {
    title: "Furniture & Furnishings",
    services: [
      { name: "Custom Furniture Design", icon: Armchair },
      { name: "Modular Furniture Solutions", icon: Package },
      { name: "Window Blinds & Curtains", icon: Blinds },
      { name: "Drapes & Window Treatments", icon: Frame },
      { name: "Lighting Design", icon: Lamp },
      { name: "Wallpaper & Wall Coverings", icon: Image },
      { name: "Art & Wall Consultation", icon: Palette },
    ],
  },
  {
    title: "Outdoor & Specialty",
    services: [
      { name: "Balcony Interior Design", icon: Sun },
      { name: "Terrace Interior Design", icon: TreePine },
      { name: "Garden Interior Design", icon: Leaf },
      { name: "Outdoor Living Design", icon: Sofa },
      { name: "Facade & Exterior Design", icon: ExternalLink },
    ],
  },
  {
    title: "Consultation & Technical",
    services: [
      { name: "Space Planning & Layout Design", icon: LayoutDashboard },
      { name: "3D Interior Rendering", icon: PenTool },
      { name: "Color & Theme Consultation", icon: PaintBucket },
      { name: "Home Decor Consultation", icon: Sparkle },
      { name: "Flooring Material Consultation", icon: Layers },
      { name: "Home Remodeling & Renovation", icon: Hammer },
      { name: "Office Renovation", icon: Building2 },
      { name: "Smart Home Interior Design", icon: Smartphone },
      { name: "Lighting & Smart Automation", icon: Lightbulb },
      { name: "Acoustic & Soundproofing Design", icon: Volume2 },
      { name: "Sustainable & Eco-Friendly Design", icon: Leaf },
      { name: "Budget Interior Solutions", icon: Wallet },
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Complete Interior Design Services in Dubai & UAE
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            From luxury villa interiors in Palm Jumeirah to modern apartment designs in Dubai Marina, Arabic style majlis to contemporary office fit-outs – Interiara offers 60+ specialized interior design services. Our award-winning team delivers turnkey solutions tailored to your style, space, and budget across all Emirates.
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="group bg-card rounded-lg p-4 text-center hover:shadow-xl transition-all border border-border hover:border-primary cursor-pointer"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground leading-tight">{service.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need a Custom Service?</h3>
            <p className="text-muted-foreground font-mono mb-6">
              Don't see what you're looking for? We offer customized interior design solutions tailored to your specific needs. Contact us to discuss your unique requirements.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
