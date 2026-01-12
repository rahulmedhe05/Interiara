import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mall Interior Design Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional mall interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "mall-interior-design-jumeirah-dubai", "mall interior design jumeirah dubai", "mall interior design jumeirah dubai services", "best mall interior design jumeirah dubai", "professional mall interior design jumeirah dubai", "mall interior design jumeirah dubai company", "mall interior design jumeirah dubai specialist", "expert mall interior design jumeirah dubai",
  ],
  openGraph: {
    title: "Mall Interior Design Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional mall interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/mall-interior-design-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/mall-interior-design-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
