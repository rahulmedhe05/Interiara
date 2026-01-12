import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apartment Interior Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional apartment interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "apartment-interior-design-business-bay-dubai", "apartment interior design business bay dubai", "apartment interior design business bay dubai services", "best apartment interior design business bay dubai", "professional apartment interior design business bay dubai", "apartment interior design business bay dubai company", "apartment interior design business bay dubai specialist", "expert apartment interior design business bay dubai",
  ],
  openGraph: {
    title: "Apartment Interior Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional apartment interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/apartment-interior-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/apartment-interior-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
