import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lighting Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional lighting design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "lighting-design-marina-dubai", "lighting design marina dubai", "lighting design marina dubai services", "best lighting design marina dubai", "professional lighting design marina dubai", "lighting design marina dubai company", "lighting design marina dubai specialist", "expert lighting design marina dubai",
  ],
  openGraph: {
    title: "Lighting Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional lighting design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/lighting-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/lighting-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
