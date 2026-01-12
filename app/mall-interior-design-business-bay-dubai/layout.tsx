import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mall Interior Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional mall interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "mall-interior-design-business-bay-dubai", "mall interior design business bay dubai", "mall interior design business bay dubai services", "best mall interior design business bay dubai", "professional mall interior design business bay dubai", "mall interior design business bay dubai company", "mall interior design business bay dubai specialist", "expert mall interior design business bay dubai",
  ],
  openGraph: {
    title: "Mall Interior Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional mall interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/mall-interior-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/mall-interior-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
