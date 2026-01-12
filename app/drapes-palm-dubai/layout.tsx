import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drapes Palm Dubai | Premium Design Services | Interiara",
  description: "Professional drapes palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "drapes-palm-dubai", "drapes palm dubai", "drapes palm dubai services", "best drapes palm dubai", "professional drapes palm dubai", "drapes palm dubai company", "drapes palm dubai specialist", "expert drapes palm dubai",
  ],
  openGraph: {
    title: "Drapes Palm Dubai | Transform Your Space | Interiara",
    description: "Professional drapes palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/drapes-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/drapes-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
