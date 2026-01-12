import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Salon Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional salon interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "salon-interior-design-marina-dubai", "salon interior design marina dubai", "salon interior design marina dubai services", "best salon interior design marina dubai", "professional salon interior design marina dubai", "salon interior design marina dubai company", "salon interior design marina dubai specialist", "expert salon interior design marina dubai",
  ],
  openGraph: {
    title: "Salon Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional salon interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/salon-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/salon-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
