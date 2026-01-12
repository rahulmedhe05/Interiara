import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kids Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional kids interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "kids-interior-design-palm-dubai", "kids interior design palm dubai", "kids interior design palm dubai services", "best kids interior design palm dubai", "professional kids interior design palm dubai", "kids interior design palm dubai company", "kids interior design palm dubai specialist", "expert kids interior design palm dubai",
  ],
  openGraph: {
    title: "Kids Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional kids interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/kids-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/kids-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
