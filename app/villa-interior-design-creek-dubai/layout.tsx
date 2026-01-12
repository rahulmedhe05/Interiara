import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Villa Interior Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional villa interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "villa-interior-design-creek-dubai", "villa interior design creek dubai", "villa interior design creek dubai services", "best villa interior design creek dubai", "professional villa interior design creek dubai", "villa interior design creek dubai company", "villa interior design creek dubai specialist", "expert villa interior design creek dubai",
  ],
  openGraph: {
    title: "Villa Interior Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional villa interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/villa-interior-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/villa-interior-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
