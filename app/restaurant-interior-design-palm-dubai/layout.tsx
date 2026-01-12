import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurant Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional restaurant interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "restaurant-interior-design-palm-dubai", "restaurant interior design palm dubai", "restaurant interior design palm dubai services", "best restaurant interior design palm dubai", "professional restaurant interior design palm dubai", "restaurant interior design palm dubai company", "restaurant interior design palm dubai specialist", "expert restaurant interior design palm dubai",
  ],
  openGraph: {
    title: "Restaurant Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional restaurant interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/restaurant-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/restaurant-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
