import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mall Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional mall interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "mall-interior-design-downtown-dubai", "mall interior design downtown dubai", "mall interior design downtown dubai services", "best mall interior design downtown dubai", "professional mall interior design downtown dubai", "mall interior design downtown dubai company", "mall interior design downtown dubai specialist", "expert mall interior design downtown dubai",
  ],
  openGraph: {
    title: "Mall Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional mall interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/mall-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/mall-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
