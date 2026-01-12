import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Lighting Marina Dubai | Premium Design Services | Interiara",
  description: "Professional smart lighting marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "smart-lighting-marina-dubai", "smart lighting marina dubai", "smart lighting marina dubai services", "best smart lighting marina dubai", "professional smart lighting marina dubai", "smart lighting marina dubai company", "smart lighting marina dubai specialist", "expert smart lighting marina dubai",
  ],
  openGraph: {
    title: "Smart Lighting Marina Dubai | Transform Your Space | Interiara",
    description: "Professional smart lighting marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/smart-lighting-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/smart-lighting-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
