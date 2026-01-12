import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Space Planning Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional space planning al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "space-planning-al-wasl-dubai", "space planning al wasl dubai", "space planning al wasl dubai services", "best space planning al wasl dubai", "professional space planning al wasl dubai", "space planning al wasl dubai company", "space planning al wasl dubai specialist", "expert space planning al wasl dubai",
  ],
  openGraph: {
    title: "Space Planning Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional space planning al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/space-planning-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/space-planning-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
