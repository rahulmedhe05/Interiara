import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lighting Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional lighting design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "lighting-design-al-wasl-dubai", "lighting design al wasl dubai", "lighting design al wasl dubai services", "best lighting design al wasl dubai", "professional lighting design al wasl dubai", "lighting design al wasl dubai company", "lighting design al wasl dubai specialist", "expert lighting design al wasl dubai",
  ],
  openGraph: {
    title: "Lighting Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional lighting design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/lighting-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/lighting-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
