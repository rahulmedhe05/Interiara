import Link from "next/link"

interface CompactLocationFooterProps {
  location: string
  service: string
  serviceUrl: string
}

export function CompactLocationFooter({ location, service, serviceUrl }: CompactLocationFooterProps) {
  return (
    <section className="py-6 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Interiara. Premium Interior Design Services.
          </p>
          <div className="flex gap-3">
            <Link 
              href="/" 
              className="text-xs px-4 py-2 rounded border border-primary/20 hover:border-primary/50 transition-colors whitespace-nowrap"
            >
              Explore Services
            </Link>
            <a 
              href="https://wa.me/916353583148?text=Hi%20Interiara" 
              className="text-xs px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
