import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional hotel interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "hotel-interior-design-palm-dubai", "hotel interior design palm dubai", "hotel interior design palm dubai services", "best hotel interior design palm dubai", "professional hotel interior design palm dubai", "hotel interior design palm dubai company", "hotel interior design palm dubai specialist", "expert hotel interior design palm dubai",
  ],
  openGraph: {
    title: "Hotel Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional hotel interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/hotel-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/hotel-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
