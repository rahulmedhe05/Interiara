import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Eco Friendly Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional eco friendly interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "eco-friendly-interior-design-downtown-dubai", "eco friendly interior design downtown dubai", "eco friendly interior design downtown dubai services", "best eco friendly interior design downtown dubai", "professional eco friendly interior design downtown dubai", "eco friendly interior design downtown dubai company", "eco friendly interior design downtown dubai specialist", "expert eco friendly interior design downtown dubai",
  ],
  openGraph: {
    title: "Eco Friendly Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional eco friendly interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/eco-friendly-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/eco-friendly-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
