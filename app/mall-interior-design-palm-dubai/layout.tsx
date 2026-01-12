import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mall Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional mall interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "mall-interior-design-palm-dubai", "mall interior design palm dubai", "mall interior design palm dubai services", "best mall interior design palm dubai", "professional mall interior design palm dubai", "mall interior design palm dubai company", "mall interior design palm dubai specialist", "expert mall interior design palm dubai",
  ],
  openGraph: {
    title: "Mall Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional mall interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/mall-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/mall-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
