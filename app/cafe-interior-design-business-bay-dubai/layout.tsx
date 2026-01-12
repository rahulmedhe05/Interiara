import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cafe Interior Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional cafe interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "cafe-interior-design-business-bay-dubai", "cafe interior design business bay dubai", "cafe interior design business bay dubai services", "best cafe interior design business bay dubai", "professional cafe interior design business bay dubai", "cafe interior design business bay dubai company", "cafe interior design business bay dubai specialist", "expert cafe interior design business bay dubai",
  ],
  openGraph: {
    title: "Cafe Interior Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional cafe interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/cafe-interior-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/cafe-interior-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
