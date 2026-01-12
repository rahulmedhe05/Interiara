import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mall Interior Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional mall interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "mall-interior-design-al-wasl-dubai", "mall interior design al wasl dubai", "mall interior design al wasl dubai services", "best mall interior design al wasl dubai", "professional mall interior design al wasl dubai", "mall interior design al wasl dubai company", "mall interior design al wasl dubai specialist", "expert mall interior design al wasl dubai",
  ],
  openGraph: {
    title: "Mall Interior Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional mall interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/mall-interior-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/mall-interior-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
