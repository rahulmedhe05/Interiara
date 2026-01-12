import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional hotel interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "hotel-interior-design-downtown-dubai", "hotel interior design downtown dubai", "hotel interior design downtown dubai services", "best hotel interior design downtown dubai", "professional hotel interior design downtown dubai", "hotel interior design downtown dubai company", "hotel interior design downtown dubai specialist", "expert hotel interior design downtown dubai",
  ],
  openGraph: {
    title: "Hotel Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional hotel interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/hotel-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/hotel-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
