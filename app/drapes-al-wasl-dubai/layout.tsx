import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drapes Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional drapes al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "drapes-al-wasl-dubai", "drapes al wasl dubai", "drapes al wasl dubai services", "best drapes al wasl dubai", "professional drapes al wasl dubai", "drapes al wasl dubai company", "drapes al wasl dubai specialist", "expert drapes al wasl dubai",
  ],
  openGraph: {
    title: "Drapes Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional drapes al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/drapes-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/drapes-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
