"use client"

import { useState } from "react"

const galleryItems = [
  { id: 1, type: "image", src: "/dubai-interior-design-luxury.jpg", title: "Luxury Dubai Interior Design" },
  { id: 2, type: "image", src: "/Villa-interior-design-Dubai-with-Accouter-Design.webp", title: "Villa Interior Design Dubai" },
  { id: 3, type: "image", src: "/Al-Barari-Kitchen.jpg", title: "Al Barari Kitchen Design" },
  { id: 4, type: "image", src: "/meet.jpg", title: "Luxury Living Room Dubai" },
  { id: 5, type: "image", src: "/dubai-luxury-interior-design-585x734.jpg", title: "Dubai Luxury Interior" },
  { id: 6, type: "image", src: "/top-interior-designers-dubai.jpg", title: "Top Interior Designers Dubai" },
  { id: 7, type: "image", src: "/Modern-Eclectic-3-1.webp", title: "Modern Eclectic Design" },
  { id: 8, type: "image", src: "/Zen_PalmD1_07b-scaled-1.jpg", title: "Palm Jumeirah Villa Interior" },
  { id: 9, type: "image", src: "/1-Unique-Bathroom-Projects.jpg", title: "Unique Bathroom Design" },
  { id: 10, type: "image", src: "/8-Bathroom-Inspiration-By-Dubai-Top-Interior-Designers.jpeg", title: "Luxury Bathroom Dubai" },
  { id: 11, type: "image", src: "/Dubai-Bathroom-Design-2.jpg", title: "Modern Bathroom Design" },
  { id: 12, type: "image", src: "/bathroom-1024x683.jpg", title: "Contemporary Bathroom" },
  { id: 13, type: "image", src: "/10-Stunning-Kitchen-Island-Designs-to-Elevate-Your-Culinary-Space.jpeg", title: "Stunning Kitchen Island Design" },
  { id: 14, type: "image", src: "/Color-Scheme-Modular-kitchen-Interior-Design-and-Fit-Out-DesignMaster-Dubai-2.jpg", title: "Modular Kitchen Interior Dubai" },
  { id: 15, type: "image", src: "/L-Shaped-Modern-kitchen-Layout-DesignMaster-Dubai.jpg", title: "L-Shaped Modern Kitchen" },
  { id: 16, type: "image", src: "/gf-ktchen-view2.jpg", title: "Modern Kitchen Design" },
  { id: 17, type: "image", src: "/kitchen-aesthetic-harmony-modern-luxury-fusion-interior-design-dream-home-1-min.jpg", title: "Luxury Kitchen Interior" },
  { id: 18, type: "image", src: "/Top-Living-Room-Decor.png", title: "Top Living Room Decor" },
  { id: 19, type: "image", src: "/Reception-9.jpg", title: "Reception Area Design" },
  { id: 20, type: "image", src: "/hera-suspension-lamp-04-zoom-boca-do-lobo-1-1-1400x933.jpg", title: "Luxury Lighting Design" },
  { id: 21, type: "image", src: "/98488683052973.5d304d1b15e83.jpg", title: "Arabic Style Interior" },
  { id: 22, type: "image", src: "/9f76af35953159a45c406d49cb9bc4d0.jpg", title: "Contemporary Interior Design" },
  { id: 23, type: "image", src: "/2b-scaled.jpg", title: "Elegant Living Space" },
  { id: 24, type: "image", src: "/DSC01457-min-scaled.webp", title: "Modern Villa Interior" },
]

export function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "image">("all")
  const [showAll, setShowAll] = useState(false)

  const filteredItems =
    selectedFilter === "all" ? galleryItems : galleryItems.filter((item) => item.type === selectedFilter)
  
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 12)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">500+ Interior Design Projects Delivered in Dubai</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "Explore our award-winning portfolio featuring luxury villa interiors, modern apartment designs, elegant office spaces, and stunning commercial fit-outs across Dubai and UAE"
            }
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-primary-foreground font-bold text-sm md:text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredItems.length > 12 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors"
            >
              {showAll ? "Show Less" : `View All ${filteredItems.length} Photos`}
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-mono mb-6 text-lg">
            {"Want to transform your space? Contact us today for a free consultation"}
          </p>
          <a
            href="#contact"
            className="px-8 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors inline-block"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
