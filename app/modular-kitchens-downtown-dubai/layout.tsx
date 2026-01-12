import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modular Kitchens Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional modular kitchens downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modular-kitchens-downtown-dubai", "modular kitchens downtown dubai", "modular kitchens downtown dubai services", "best modular kitchens downtown dubai", "professional modular kitchens downtown dubai", "modular kitchens downtown dubai company", "modular kitchens downtown dubai specialist", "expert modular kitchens downtown dubai",
  ],
  openGraph: {
    title: "Modular Kitchens Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional modular kitchens downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modular-kitchens-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modular-kitchens-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
