import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wall Coverings Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional wall coverings al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "wall-coverings-al-wasl-dubai", "wall coverings al wasl dubai", "wall coverings al wasl dubai services", "best wall coverings al wasl dubai", "professional wall coverings al wasl dubai", "wall coverings al wasl dubai company", "wall coverings al wasl dubai specialist", "expert wall coverings al wasl dubai",
  ],
  openGraph: {
    title: "Wall Coverings Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional wall coverings al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/wall-coverings-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/wall-coverings-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
