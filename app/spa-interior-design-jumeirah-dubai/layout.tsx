import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spa Interior Design Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional spa interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "spa-interior-design-jumeirah-dubai", "spa interior design jumeirah dubai", "spa interior design jumeirah dubai services", "best spa interior design jumeirah dubai", "professional spa interior design jumeirah dubai", "spa interior design jumeirah dubai company", "spa interior design jumeirah dubai specialist", "expert spa interior design jumeirah dubai",
  ],
  openGraph: {
    title: "Spa Interior Design Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional spa interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/spa-interior-design-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/spa-interior-design-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
