import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Lighting Creek Dubai | Premium Design Services | Interiara",
  description: "Professional smart lighting creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "smart-lighting-creek-dubai", "smart lighting creek dubai", "smart lighting creek dubai services", "best smart lighting creek dubai", "professional smart lighting creek dubai", "smart lighting creek dubai company", "smart lighting creek dubai specialist", "expert smart lighting creek dubai",
  ],
  openGraph: {
    title: "Smart Lighting Creek Dubai | Transform Your Space | Interiara",
    description: "Professional smart lighting creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/smart-lighting-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/smart-lighting-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
