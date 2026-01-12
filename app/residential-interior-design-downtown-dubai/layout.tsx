import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Residential Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional residential interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "residential-interior-design-downtown-dubai", "residential interior design downtown dubai", "residential interior design downtown dubai services", "best residential interior design downtown dubai", "professional residential interior design downtown dubai", "residential interior design downtown dubai company", "residential interior design downtown dubai specialist", "expert residential interior design downtown dubai",
  ],
  openGraph: {
    title: "Residential Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional residential interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/residential-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/residential-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
