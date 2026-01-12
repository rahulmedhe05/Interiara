import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Interior Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional hotel interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "hotel-interior-design-business-bay-dubai", "hotel interior design business bay dubai", "hotel interior design business bay dubai services", "best hotel interior design business bay dubai", "professional hotel interior design business bay dubai", "hotel interior design business bay dubai company", "hotel interior design business bay dubai specialist", "expert hotel interior design business bay dubai",
  ],
  openGraph: {
    title: "Hotel Interior Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional hotel interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/hotel-interior-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/hotel-interior-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
