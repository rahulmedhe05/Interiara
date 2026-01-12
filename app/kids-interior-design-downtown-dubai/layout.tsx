import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kids Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional kids interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "kids-interior-design-downtown-dubai", "kids interior design downtown dubai", "kids interior design downtown dubai services", "best kids interior design downtown dubai", "professional kids interior design downtown dubai", "kids interior design downtown dubai company", "kids interior design downtown dubai specialist", "expert kids interior design downtown dubai",
  ],
  openGraph: {
    title: "Kids Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional kids interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/kids-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/kids-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
