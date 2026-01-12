import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bedroom Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional bedroom interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "bedroom-interior-design-downtown-dubai", "bedroom interior design downtown dubai", "bedroom interior design downtown dubai services", "best bedroom interior design downtown dubai", "professional bedroom interior design downtown dubai", "bedroom interior design downtown dubai company", "bedroom interior design downtown dubai specialist", "expert bedroom interior design downtown dubai",
  ],
  openGraph: {
    title: "Bedroom Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional bedroom interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/bedroom-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/bedroom-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
