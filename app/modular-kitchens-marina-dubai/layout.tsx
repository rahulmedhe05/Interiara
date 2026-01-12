import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modular Kitchens Marina Dubai | Premium Design Services | Interiara",
  description: "Professional modular kitchens marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modular-kitchens-marina-dubai", "modular kitchens marina dubai", "modular kitchens marina dubai services", "best modular kitchens marina dubai", "professional modular kitchens marina dubai", "modular kitchens marina dubai company", "modular kitchens marina dubai specialist", "expert modular kitchens marina dubai",
  ],
  openGraph: {
    title: "Modular Kitchens Marina Dubai | Transform Your Space | Interiara",
    description: "Professional modular kitchens marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modular-kitchens-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modular-kitchens-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
