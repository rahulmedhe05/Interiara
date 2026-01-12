import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Residential Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional residential interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "residential-interior-design-palm-dubai", "residential interior design palm dubai", "residential interior design palm dubai services", "best residential interior design palm dubai", "professional residential interior design palm dubai", "residential interior design palm dubai company", "residential interior design palm dubai specialist", "expert residential interior design palm dubai",
  ],
  openGraph: {
    title: "Residential Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional residential interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/residential-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/residential-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
