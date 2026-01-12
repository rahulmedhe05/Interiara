import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Art Consultation Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional art consultation business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "art-consultation-business-bay-dubai", "art consultation business bay dubai", "art consultation business bay dubai services", "best art consultation business bay dubai", "professional art consultation business bay dubai", "art consultation business bay dubai company", "art consultation business bay dubai specialist", "expert art consultation business bay dubai",
  ],
  openGraph: {
    title: "Art Consultation Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional art consultation business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/art-consultation-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/art-consultation-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
