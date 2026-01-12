import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spa Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional spa interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "spa-interior-design-marina-dubai", "spa interior design marina dubai", "spa interior design marina dubai services", "best spa interior design marina dubai", "professional spa interior design marina dubai", "spa interior design marina dubai company", "spa interior design marina dubai specialist", "expert spa interior design marina dubai",
  ],
  openGraph: {
    title: "Spa Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional spa interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/spa-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/spa-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
