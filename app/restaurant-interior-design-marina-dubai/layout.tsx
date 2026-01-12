import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurant Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional restaurant interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "restaurant-interior-design-marina-dubai", "restaurant interior design marina dubai", "restaurant interior design marina dubai services", "best restaurant interior design marina dubai", "professional restaurant interior design marina dubai", "restaurant interior design marina dubai company", "restaurant interior design marina dubai specialist", "expert restaurant interior design marina dubai",
  ],
  openGraph: {
    title: "Restaurant Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional restaurant interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/restaurant-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/restaurant-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
