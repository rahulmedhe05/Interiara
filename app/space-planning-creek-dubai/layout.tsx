import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Space Planning Creek Dubai | Premium Design Services | Interiara",
  description: "Professional space planning creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "space-planning-creek-dubai", "space planning creek dubai", "space planning creek dubai services", "best space planning creek dubai", "professional space planning creek dubai", "space planning creek dubai company", "space planning creek dubai specialist", "expert space planning creek dubai",
  ],
  openGraph: {
    title: "Space Planning Creek Dubai | Transform Your Space | Interiara",
    description: "Professional space planning creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/space-planning-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/space-planning-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
