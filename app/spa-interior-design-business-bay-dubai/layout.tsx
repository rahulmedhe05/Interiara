import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spa Interior Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional spa interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "spa-interior-design-business-bay-dubai", "spa interior design business bay dubai", "spa interior design business bay dubai services", "best spa interior design business bay dubai", "professional spa interior design business bay dubai", "spa interior design business bay dubai company", "spa interior design business bay dubai specialist", "expert spa interior design business bay dubai",
  ],
  openGraph: {
    title: "Spa Interior Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional spa interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/spa-interior-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/spa-interior-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
