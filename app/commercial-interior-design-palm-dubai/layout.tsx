import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional commercial interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "commercial-interior-design-palm-dubai", "commercial interior design palm dubai", "commercial interior design palm dubai services", "best commercial interior design palm dubai", "professional commercial interior design palm dubai", "commercial interior design palm dubai company", "commercial interior design palm dubai specialist", "expert commercial interior design palm dubai",
  ],
  openGraph: {
    title: "Commercial Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional commercial interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/commercial-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/commercial-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
