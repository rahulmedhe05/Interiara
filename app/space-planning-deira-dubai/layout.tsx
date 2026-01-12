import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Space Planning Deira Dubai | Premium Design Services | Interiara",
  description: "Professional space planning deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "space-planning-deira-dubai", "space planning deira dubai", "space planning deira dubai services", "best space planning deira dubai", "professional space planning deira dubai", "space planning deira dubai company", "space planning deira dubai specialist", "expert space planning deira dubai",
  ],
  openGraph: {
    title: "Space Planning Deira Dubai | Transform Your Space | Interiara",
    description: "Professional space planning deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/space-planning-deira-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/space-planning-deira-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
