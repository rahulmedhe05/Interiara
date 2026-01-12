import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Lighting Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional smart lighting al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "smart-lighting-al-wasl-dubai", "smart lighting al wasl dubai", "smart lighting al wasl dubai services", "best smart lighting al wasl dubai", "professional smart lighting al wasl dubai", "smart lighting al wasl dubai company", "smart lighting al wasl dubai specialist", "expert smart lighting al wasl dubai",
  ],
  openGraph: {
    title: "Smart Lighting Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional smart lighting al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/smart-lighting-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/smart-lighting-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
