import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lighting Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional lighting design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "lighting-design-palm-dubai", "lighting design palm dubai", "lighting design palm dubai services", "best lighting design palm dubai", "professional lighting design palm dubai", "lighting design palm dubai company", "lighting design palm dubai specialist", "expert lighting design palm dubai",
  ],
  openGraph: {
    title: "Lighting Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional lighting design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/lighting-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/lighting-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
