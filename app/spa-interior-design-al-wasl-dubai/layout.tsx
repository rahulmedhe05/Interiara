import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spa Interior Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional spa interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "spa-interior-design-al-wasl-dubai", "spa interior design al wasl dubai", "spa interior design al wasl dubai services", "best spa interior design al wasl dubai", "professional spa interior design al wasl dubai", "spa interior design al wasl dubai company", "spa interior design al wasl dubai specialist", "expert spa interior design al wasl dubai",
  ],
  openGraph: {
    title: "Spa Interior Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional spa interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/spa-interior-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/spa-interior-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
