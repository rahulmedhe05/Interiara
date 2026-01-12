import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lighting Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional lighting design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "lighting-design-downtown-dubai", "lighting design downtown dubai", "lighting design downtown dubai services", "best lighting design downtown dubai", "professional lighting design downtown dubai", "lighting design downtown dubai company", "lighting design downtown dubai specialist", "expert lighting design downtown dubai",
  ],
  openGraph: {
    title: "Lighting Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional lighting design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/lighting-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/lighting-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
