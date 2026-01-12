import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Home Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional smart home interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "smart-home-interior-design-downtown-dubai", "smart home interior design downtown dubai", "smart home interior design downtown dubai services", "best smart home interior design downtown dubai", "professional smart home interior design downtown dubai", "smart home interior design downtown dubai company", "smart home interior design downtown dubai specialist", "expert smart home interior design downtown dubai",
  ],
  openGraph: {
    title: "Smart Home Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional smart home interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/smart-home-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/smart-home-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
