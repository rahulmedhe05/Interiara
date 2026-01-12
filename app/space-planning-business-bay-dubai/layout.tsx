import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Space Planning Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional space planning business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "space-planning-business-bay-dubai", "space planning business bay dubai", "space planning business bay dubai services", "best space planning business bay dubai", "professional space planning business bay dubai", "space planning business bay dubai company", "space planning business bay dubai specialist", "expert space planning business bay dubai",
  ],
  openGraph: {
    title: "Space Planning Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional space planning business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/space-planning-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/space-planning-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
