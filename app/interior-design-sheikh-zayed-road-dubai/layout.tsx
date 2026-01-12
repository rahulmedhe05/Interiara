import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Sheikh Zayed Road Dubai | Premium Design Services | Interiara",
  description: "Professional interior design sheikh zayed road dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-design-sheikh-zayed-road-dubai", "interior design sheikh zayed road dubai", "interior design sheikh zayed road dubai services", "best interior design sheikh zayed road dubai", "professional interior design sheikh zayed road dubai", "interior design sheikh zayed road dubai company", "interior design sheikh zayed road dubai specialist", "expert interior design sheikh zayed road dubai",
  ],
  openGraph: {
    title: "Interior Design Sheikh Zayed Road Dubai | Transform Your Space | Interiara",
    description: "Professional interior design sheikh zayed road dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-sheikh-zayed-road-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-sheikh-zayed-road-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
