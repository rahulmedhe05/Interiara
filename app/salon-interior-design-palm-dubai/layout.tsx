import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Salon Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional salon interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "salon-interior-design-palm-dubai", "salon interior design palm dubai", "salon interior design palm dubai services", "best salon interior design palm dubai", "professional salon interior design palm dubai", "salon interior design palm dubai company", "salon interior design palm dubai specialist", "expert salon interior design palm dubai",
  ],
  openGraph: {
    title: "Salon Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional salon interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/salon-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/salon-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
