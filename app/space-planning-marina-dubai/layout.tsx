import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Space Planning Marina Dubai | Premium Design Services | Interiara",
  description: "Professional space planning marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "space-planning-marina-dubai", "space planning marina dubai", "space planning marina dubai services", "best space planning marina dubai", "professional space planning marina dubai", "space planning marina dubai company", "space planning marina dubai specialist", "expert space planning marina dubai",
  ],
  openGraph: {
    title: "Space Planning Marina Dubai | Transform Your Space | Interiara",
    description: "Professional space planning marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/space-planning-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/space-planning-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
