import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Interior Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional hotel interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "hotel-interior-design-creek-dubai", "hotel interior design creek dubai", "hotel interior design creek dubai services", "best hotel interior design creek dubai", "professional hotel interior design creek dubai", "hotel interior design creek dubai company", "hotel interior design creek dubai specialist", "expert hotel interior design creek dubai",
  ],
  openGraph: {
    title: "Hotel Interior Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional hotel interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/hotel-interior-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/hotel-interior-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
