import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Visualization Marina Dubai | Premium Design Services | Interiara",
  description: "Professional interior visualization marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-visualization-marina-dubai", "interior visualization marina dubai", "interior visualization marina dubai services", "best interior visualization marina dubai", "professional interior visualization marina dubai", "interior visualization marina dubai company", "interior visualization marina dubai specialist", "expert interior visualization marina dubai",
  ],
  openGraph: {
    title: "Interior Visualization Marina Dubai | Transform Your Space | Interiara",
    description: "Professional interior visualization marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-visualization-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-visualization-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
