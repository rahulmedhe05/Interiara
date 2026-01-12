import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Space Planning Difc Dubai | Premium Design Services | Interiara",
  description: "Professional space planning difc dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "space-planning-difc-dubai", "space planning difc dubai", "space planning difc dubai services", "best space planning difc dubai", "professional space planning difc dubai", "space planning difc dubai company", "space planning difc dubai specialist", "expert space planning difc dubai",
  ],
  openGraph: {
    title: "Space Planning Difc Dubai | Transform Your Space | Interiara",
    description: "Professional space planning difc dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/space-planning-difc-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/space-planning-difc-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
