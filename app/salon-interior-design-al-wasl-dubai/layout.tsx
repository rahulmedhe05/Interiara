import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Salon Interior Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional salon interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "salon-interior-design-al-wasl-dubai", "salon interior design al wasl dubai", "salon interior design al wasl dubai services", "best salon interior design al wasl dubai", "professional salon interior design al wasl dubai", "salon interior design al wasl dubai company", "salon interior design al wasl dubai specialist", "expert salon interior design al wasl dubai",
  ],
  openGraph: {
    title: "Salon Interior Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional salon interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/salon-interior-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/salon-interior-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
