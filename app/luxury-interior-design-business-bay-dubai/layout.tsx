import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Interior Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional luxury interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "luxury-interior-design-business-bay-dubai", "luxury interior design business bay dubai", "luxury interior design business bay dubai services", "best luxury interior design business bay dubai", "professional luxury interior design business bay dubai", "luxury interior design business bay dubai company", "luxury interior design business bay dubai specialist", "expert luxury interior design business bay dubai",
  ],
  openGraph: {
    title: "Luxury Interior Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional luxury interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/luxury-interior-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/luxury-interior-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
