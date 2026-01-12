import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Closet Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional closet design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "closet-design-palm-dubai", "closet design palm dubai", "closet design palm dubai services", "best closet design palm dubai", "professional closet design palm dubai", "closet design palm dubai company", "closet design palm dubai specialist", "expert closet design palm dubai",
  ],
  openGraph: {
    title: "Closet Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional closet design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/closet-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/closet-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
