import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Lighting Palm Dubai | Premium Design Services | Interiara",
  description: "Professional smart lighting palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "smart-lighting-palm-dubai", "smart lighting palm dubai", "smart lighting palm dubai services", "best smart lighting palm dubai", "professional smart lighting palm dubai", "smart lighting palm dubai company", "smart lighting palm dubai specialist", "expert smart lighting palm dubai",
  ],
  openGraph: {
    title: "Smart Lighting Palm Dubai | Transform Your Space | Interiara",
    description: "Professional smart lighting palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/smart-lighting-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/smart-lighting-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
