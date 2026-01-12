import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drapes Difc Dubai | Premium Design Services | Interiara",
  description: "Professional drapes difc dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "drapes-difc-dubai", "drapes difc dubai", "drapes difc dubai services", "best drapes difc dubai", "professional drapes difc dubai", "drapes difc dubai company", "drapes difc dubai specialist", "expert drapes difc dubai",
  ],
  openGraph: {
    title: "Drapes Difc Dubai | Transform Your Space | Interiara",
    description: "Professional drapes difc dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/drapes-difc-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/drapes-difc-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
