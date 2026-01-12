import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modular Kitchens Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional modular kitchens al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modular-kitchens-al-wasl-dubai", "modular kitchens al wasl dubai", "modular kitchens al wasl dubai services", "best modular kitchens al wasl dubai", "professional modular kitchens al wasl dubai", "modular kitchens al wasl dubai company", "modular kitchens al wasl dubai specialist", "expert modular kitchens al wasl dubai",
  ],
  openGraph: {
    title: "Modular Kitchens Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional modular kitchens al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modular-kitchens-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modular-kitchens-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
