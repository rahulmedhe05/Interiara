import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mall Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional mall interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "mall-interior-design-marina-dubai", "mall interior design marina dubai", "mall interior design marina dubai services", "best mall interior design marina dubai", "professional mall interior design marina dubai", "mall interior design marina dubai company", "mall interior design marina dubai specialist", "expert mall interior design marina dubai",
  ],
  openGraph: {
    title: "Mall Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional mall interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/mall-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/mall-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
