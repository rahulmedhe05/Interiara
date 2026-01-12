import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spa Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional spa interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "spa-interior-design-downtown-dubai", "spa interior design downtown dubai", "spa interior design downtown dubai services", "best spa interior design downtown dubai", "professional spa interior design downtown dubai", "spa interior design downtown dubai company", "spa interior design downtown dubai specialist", "expert spa interior design downtown dubai",
  ],
  openGraph: {
    title: "Spa Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional spa interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/spa-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/spa-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
