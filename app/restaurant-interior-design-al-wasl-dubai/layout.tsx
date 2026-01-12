import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurant Interior Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional restaurant interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "restaurant-interior-design-al-wasl-dubai", "restaurant interior design al wasl dubai", "restaurant interior design al wasl dubai services", "best restaurant interior design al wasl dubai", "professional restaurant interior design al wasl dubai", "restaurant interior design al wasl dubai company", "restaurant interior design al wasl dubai specialist", "expert restaurant interior design al wasl dubai",
  ],
  openGraph: {
    title: "Restaurant Interior Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional restaurant interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/restaurant-interior-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/restaurant-interior-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
