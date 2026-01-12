import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Closet Design Deira Dubai | Premium Design Services | Interiara",
  description: "Professional closet design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "closet-design-deira-dubai", "closet design deira dubai", "closet design deira dubai services", "best closet design deira dubai", "professional closet design deira dubai", "closet design deira dubai company", "closet design deira dubai specialist", "expert closet design deira dubai",
  ],
  openGraph: {
    title: "Closet Design Deira Dubai | Transform Your Space | Interiara",
    description: "Professional closet design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/closet-design-deira-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/closet-design-deira-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
