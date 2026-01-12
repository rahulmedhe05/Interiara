import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Difc Dubai | Premium Design Services | Interiara",
  description: "Professional interior design difc dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-design-difc-dubai", "interior design difc dubai", "interior design difc dubai services", "best interior design difc dubai", "professional interior design difc dubai", "interior design difc dubai company", "interior design difc dubai specialist", "expert interior design difc dubai",
  ],
  openGraph: {
    title: "Interior Design Difc Dubai | Transform Your Space | Interiara",
    description: "Professional interior design difc dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-difc-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-difc-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
