import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drapes Sheikh Zayed Road Dubai | Premium Design Services | Interiara",
  description: "Professional drapes sheikh zayed road dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "drapes-sheikh-zayed-road-dubai", "drapes sheikh zayed road dubai", "drapes sheikh zayed road dubai services", "best drapes sheikh zayed road dubai", "professional drapes sheikh zayed road dubai", "drapes sheikh zayed road dubai company", "drapes sheikh zayed road dubai specialist", "expert drapes sheikh zayed road dubai",
  ],
  openGraph: {
    title: "Drapes Sheikh Zayed Road Dubai | Transform Your Space | Interiara",
    description: "Professional drapes sheikh zayed road dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/drapes-sheikh-zayed-road-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/drapes-sheikh-zayed-road-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
