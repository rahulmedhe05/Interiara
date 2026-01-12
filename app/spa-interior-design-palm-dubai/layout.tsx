import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spa Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional spa interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "spa-interior-design-palm-dubai", "spa interior design palm dubai", "spa interior design palm dubai services", "best spa interior design palm dubai", "professional spa interior design palm dubai", "spa interior design palm dubai company", "spa interior design palm dubai specialist", "expert spa interior design palm dubai",
  ],
  openGraph: {
    title: "Spa Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional spa interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/spa-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/spa-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
