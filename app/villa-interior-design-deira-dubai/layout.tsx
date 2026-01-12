import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Villa Interior Design Deira Dubai | Premium Design Services | Interiara",
  description: "Professional villa interior design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "villa-interior-design-deira-dubai", "villa interior design deira dubai", "villa interior design deira dubai services", "best villa interior design deira dubai", "professional villa interior design deira dubai", "villa interior design deira dubai company", "villa interior design deira dubai specialist", "expert villa interior design deira dubai",
  ],
  openGraph: {
    title: "Villa Interior Design Deira Dubai | Transform Your Space | Interiara",
    description: "Professional villa interior design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/villa-interior-design-deira-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/villa-interior-design-deira-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
