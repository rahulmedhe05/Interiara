import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modular Kitchens Sheikh Zayed Road Dubai | Premium Design Services | Interiara",
  description: "Professional modular kitchens sheikh zayed road dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modular-kitchens-sheikh-zayed-road-dubai", "modular kitchens sheikh zayed road dubai", "modular kitchens sheikh zayed road dubai services", "best modular kitchens sheikh zayed road dubai", "professional modular kitchens sheikh zayed road dubai", "modular kitchens sheikh zayed road dubai company", "modular kitchens sheikh zayed road dubai specialist", "expert modular kitchens sheikh zayed road dubai",
  ],
  openGraph: {
    title: "Modular Kitchens Sheikh Zayed Road Dubai | Transform Your Space | Interiara",
    description: "Professional modular kitchens sheikh zayed road dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modular-kitchens-sheikh-zayed-road-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modular-kitchens-sheikh-zayed-road-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
