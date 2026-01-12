import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modular Kitchens Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional modular kitchens jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modular-kitchens-jumeirah-dubai", "modular kitchens jumeirah dubai", "modular kitchens jumeirah dubai services", "best modular kitchens jumeirah dubai", "professional modular kitchens jumeirah dubai", "modular kitchens jumeirah dubai company", "modular kitchens jumeirah dubai specialist", "expert modular kitchens jumeirah dubai",
  ],
  openGraph: {
    title: "Modular Kitchens Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional modular kitchens jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modular-kitchens-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modular-kitchens-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
