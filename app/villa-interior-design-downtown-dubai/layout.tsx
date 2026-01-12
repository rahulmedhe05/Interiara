import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Villa Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional villa interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "villa-interior-design-downtown-dubai", "villa interior design downtown dubai", "villa interior design downtown dubai services", "best villa interior design downtown dubai", "professional villa interior design downtown dubai", "villa interior design downtown dubai company", "villa interior design downtown dubai specialist", "expert villa interior design downtown dubai",
  ],
  openGraph: {
    title: "Villa Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional villa interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/villa-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/villa-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
