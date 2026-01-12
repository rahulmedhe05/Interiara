import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Decor Consultation Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional home decor consultation business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-decor-consultation-business-bay-dubai", "home decor consultation business bay dubai", "home decor consultation business bay dubai services", "best home decor consultation business bay dubai", "professional home decor consultation business bay dubai", "home decor consultation business bay dubai company", "home decor consultation business bay dubai specialist", "expert home decor consultation business bay dubai",
  ],
  openGraph: {
    title: "Home Decor Consultation Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional home decor consultation business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-decor-consultation-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-decor-consultation-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
