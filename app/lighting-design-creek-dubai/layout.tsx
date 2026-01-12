import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lighting Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional lighting design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "lighting-design-creek-dubai", "lighting design creek dubai", "lighting design creek dubai services", "best lighting design creek dubai", "professional lighting design creek dubai", "lighting design creek dubai company", "lighting design creek dubai specialist", "expert lighting design creek dubai",
  ],
  openGraph: {
    title: "Lighting Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional lighting design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/lighting-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/lighting-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
