import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Interior Design Deira Dubai | Premium Design Services | Interiara",
  description: "Professional hotel interior design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "hotel-interior-design-deira-dubai", "hotel interior design deira dubai", "hotel interior design deira dubai services", "best hotel interior design deira dubai", "professional hotel interior design deira dubai", "hotel interior design deira dubai company", "hotel interior design deira dubai specialist", "expert hotel interior design deira dubai",
  ],
  openGraph: {
    title: "Hotel Interior Design Deira Dubai | Transform Your Space | Interiara",
    description: "Professional hotel interior design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/hotel-interior-design-deira-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/hotel-interior-design-deira-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
