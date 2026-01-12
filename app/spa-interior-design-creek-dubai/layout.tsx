import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spa Interior Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional spa interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "spa-interior-design-creek-dubai", "spa interior design creek dubai", "spa interior design creek dubai services", "best spa interior design creek dubai", "professional spa interior design creek dubai", "spa interior design creek dubai company", "spa interior design creek dubai specialist", "expert spa interior design creek dubai",
  ],
  openGraph: {
    title: "Spa Interior Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional spa interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/spa-interior-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/spa-interior-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
