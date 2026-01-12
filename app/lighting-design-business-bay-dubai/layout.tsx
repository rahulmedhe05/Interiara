import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lighting Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional lighting design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "lighting-design-business-bay-dubai", "lighting design business bay dubai", "lighting design business bay dubai services", "best lighting design business bay dubai", "professional lighting design business bay dubai", "lighting design business bay dubai company", "lighting design business bay dubai specialist", "expert lighting design business bay dubai",
  ],
  openGraph: {
    title: "Lighting Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional lighting design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/lighting-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/lighting-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
