import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional commercial interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "commercial-interior-design-marina-dubai", "commercial interior design marina dubai", "commercial interior design marina dubai services", "best commercial interior design marina dubai", "professional commercial interior design marina dubai", "commercial interior design marina dubai company", "commercial interior design marina dubai specialist", "expert commercial interior design marina dubai",
  ],
  openGraph: {
    title: "Commercial Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional commercial interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/commercial-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/commercial-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
