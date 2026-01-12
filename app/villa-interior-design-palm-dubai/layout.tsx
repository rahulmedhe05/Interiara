import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Villa Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional villa interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "villa-interior-design-palm-dubai", "villa interior design palm dubai", "villa interior design palm dubai services", "best villa interior design palm dubai", "professional villa interior design palm dubai", "villa interior design palm dubai company", "villa interior design palm dubai specialist", "expert villa interior design palm dubai",
  ],
  openGraph: {
    title: "Villa Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional villa interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/villa-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/villa-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
