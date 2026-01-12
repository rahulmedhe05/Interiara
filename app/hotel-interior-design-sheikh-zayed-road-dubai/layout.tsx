import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Interior Design Sheikh Zayed Road Dubai | Premium Design Services | Interiara",
  description: "Professional hotel interior design sheikh zayed road dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "hotel-interior-design-sheikh-zayed-road-dubai", "hotel interior design sheikh zayed road dubai", "hotel interior design sheikh zayed road dubai services", "best hotel interior design sheikh zayed road dubai", "professional hotel interior design sheikh zayed road dubai", "hotel interior design sheikh zayed road dubai company", "hotel interior design sheikh zayed road dubai specialist", "expert hotel interior design sheikh zayed road dubai",
  ],
  openGraph: {
    title: "Hotel Interior Design Sheikh Zayed Road Dubai | Transform Your Space | Interiara",
    description: "Professional hotel interior design sheikh zayed road dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/hotel-interior-design-sheikh-zayed-road-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/hotel-interior-design-sheikh-zayed-road-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
