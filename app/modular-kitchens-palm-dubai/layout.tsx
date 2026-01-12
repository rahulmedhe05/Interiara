import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modular Kitchens Palm Dubai | Premium Design Services | Interiara",
  description: "Professional modular kitchens palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modular-kitchens-palm-dubai", "modular kitchens palm dubai", "modular kitchens palm dubai services", "best modular kitchens palm dubai", "professional modular kitchens palm dubai", "modular kitchens palm dubai company", "modular kitchens palm dubai specialist", "expert modular kitchens palm dubai",
  ],
  openGraph: {
    title: "Modular Kitchens Palm Dubai | Transform Your Space | Interiara",
    description: "Professional modular kitchens palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modular-kitchens-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modular-kitchens-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
