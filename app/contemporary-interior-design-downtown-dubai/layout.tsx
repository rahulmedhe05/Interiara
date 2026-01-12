import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contemporary Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional contemporary interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "contemporary-interior-design-downtown-dubai", "contemporary interior design downtown dubai", "contemporary interior design downtown dubai services", "best contemporary interior design downtown dubai", "professional contemporary interior design downtown dubai", "contemporary interior design downtown dubai company", "contemporary interior design downtown dubai specialist", "expert contemporary interior design downtown dubai",
  ],
  openGraph: {
    title: "Contemporary Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional contemporary interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/contemporary-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/contemporary-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
