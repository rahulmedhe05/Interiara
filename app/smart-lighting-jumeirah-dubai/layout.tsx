import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Lighting Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional smart lighting jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "smart-lighting-jumeirah-dubai", "smart lighting jumeirah dubai", "smart lighting jumeirah dubai services", "best smart lighting jumeirah dubai", "professional smart lighting jumeirah dubai", "smart lighting jumeirah dubai company", "smart lighting jumeirah dubai specialist", "expert smart lighting jumeirah dubai",
  ],
  openGraph: {
    title: "Smart Lighting Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional smart lighting jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/smart-lighting-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/smart-lighting-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
