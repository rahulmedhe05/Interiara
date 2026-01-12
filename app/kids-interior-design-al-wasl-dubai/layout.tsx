import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kids Interior Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional kids interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "kids-interior-design-al-wasl-dubai", "kids interior design al wasl dubai", "kids interior design al wasl dubai services", "best kids interior design al wasl dubai", "professional kids interior design al wasl dubai", "kids interior design al wasl dubai company", "kids interior design al wasl dubai specialist", "expert kids interior design al wasl dubai",
  ],
  openGraph: {
    title: "Kids Interior Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional kids interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/kids-interior-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/kids-interior-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
