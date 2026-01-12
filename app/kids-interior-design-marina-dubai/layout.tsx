import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kids Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional kids interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "kids-interior-design-marina-dubai", "kids interior design marina dubai", "kids interior design marina dubai services", "best kids interior design marina dubai", "professional kids interior design marina dubai", "kids interior design marina dubai company", "kids interior design marina dubai specialist", "expert kids interior design marina dubai",
  ],
  openGraph: {
    title: "Kids Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional kids interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/kids-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/kids-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
