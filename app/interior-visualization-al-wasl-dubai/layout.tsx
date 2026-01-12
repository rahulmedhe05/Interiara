import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Visualization Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional interior visualization al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-visualization-al-wasl-dubai", "interior visualization al wasl dubai", "interior visualization al wasl dubai services", "best interior visualization al wasl dubai", "professional interior visualization al wasl dubai", "interior visualization al wasl dubai company", "interior visualization al wasl dubai specialist", "expert interior visualization al wasl dubai",
  ],
  openGraph: {
    title: "Interior Visualization Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional interior visualization al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-visualization-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-visualization-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
