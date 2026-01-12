import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Interior Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional hotel interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "hotel-interior-design-al-wasl-dubai", "hotel interior design al wasl dubai", "hotel interior design al wasl dubai services", "best hotel interior design al wasl dubai", "professional hotel interior design al wasl dubai", "hotel interior design al wasl dubai company", "hotel interior design al wasl dubai specialist", "expert hotel interior design al wasl dubai",
  ],
  openGraph: {
    title: "Hotel Interior Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional hotel interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/hotel-interior-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/hotel-interior-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
