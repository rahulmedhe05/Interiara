import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wall Coverings Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional wall coverings downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "wall-coverings-downtown-dubai", "wall coverings downtown dubai", "wall coverings downtown dubai services", "best wall coverings downtown dubai", "professional wall coverings downtown dubai", "wall coverings downtown dubai company", "wall coverings downtown dubai specialist", "expert wall coverings downtown dubai",
  ],
  openGraph: {
    title: "Wall Coverings Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional wall coverings downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/wall-coverings-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/wall-coverings-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
