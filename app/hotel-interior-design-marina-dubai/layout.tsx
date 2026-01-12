import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional hotel interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "hotel-interior-design-marina-dubai", "hotel interior design marina dubai", "hotel interior design marina dubai services", "best hotel interior design marina dubai", "professional hotel interior design marina dubai", "hotel interior design marina dubai company", "hotel interior design marina dubai specialist", "expert hotel interior design marina dubai",
  ],
  openGraph: {
    title: "Hotel Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional hotel interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/hotel-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/hotel-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
