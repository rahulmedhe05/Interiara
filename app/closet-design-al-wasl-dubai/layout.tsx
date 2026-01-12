import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Closet Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional closet design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "closet-design-al-wasl-dubai", "closet design al wasl dubai", "closet design al wasl dubai services", "best closet design al wasl dubai", "professional closet design al wasl dubai", "closet design al wasl dubai company", "closet design al wasl dubai specialist", "expert closet design al wasl dubai",
  ],
  openGraph: {
    title: "Closet Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional closet design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/closet-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/closet-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
