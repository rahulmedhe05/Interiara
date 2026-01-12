import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Salon Interior Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional salon interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "salon-interior-design-business-bay-dubai", "salon interior design business bay dubai", "salon interior design business bay dubai services", "best salon interior design business bay dubai", "professional salon interior design business bay dubai", "salon interior design business bay dubai company", "salon interior design business bay dubai specialist", "expert salon interior design business bay dubai",
  ],
  openGraph: {
    title: "Salon Interior Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional salon interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/salon-interior-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/salon-interior-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
