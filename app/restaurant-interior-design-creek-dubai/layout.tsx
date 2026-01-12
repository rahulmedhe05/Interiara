import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurant Interior Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional restaurant interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "restaurant-interior-design-creek-dubai", "restaurant interior design creek dubai", "restaurant interior design creek dubai services", "best restaurant interior design creek dubai", "professional restaurant interior design creek dubai", "restaurant interior design creek dubai company", "restaurant interior design creek dubai specialist", "expert restaurant interior design creek dubai",
  ],
  openGraph: {
    title: "Restaurant Interior Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional restaurant interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/restaurant-interior-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/restaurant-interior-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
