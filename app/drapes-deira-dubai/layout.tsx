import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drapes Deira Dubai | Premium Design Services | Interiara",
  description: "Professional drapes deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "drapes-deira-dubai", "drapes deira dubai", "drapes deira dubai services", "best drapes deira dubai", "professional drapes deira dubai", "drapes deira dubai company", "drapes deira dubai specialist", "expert drapes deira dubai",
  ],
  openGraph: {
    title: "Drapes Deira Dubai | Transform Your Space | Interiara",
    description: "Professional drapes deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/drapes-deira-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/drapes-deira-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
