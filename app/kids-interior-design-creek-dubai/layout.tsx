import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kids Interior Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional kids interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "kids-interior-design-creek-dubai", "kids interior design creek dubai", "kids interior design creek dubai services", "best kids interior design creek dubai", "professional kids interior design creek dubai", "kids interior design creek dubai company", "kids interior design creek dubai specialist", "expert kids interior design creek dubai",
  ],
  openGraph: {
    title: "Kids Interior Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional kids interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/kids-interior-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/kids-interior-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
