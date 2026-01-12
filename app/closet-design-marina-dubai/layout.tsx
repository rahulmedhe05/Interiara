import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Closet Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional closet design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "closet-design-marina-dubai", "closet design marina dubai", "closet design marina dubai services", "best closet design marina dubai", "professional closet design marina dubai", "closet design marina dubai company", "closet design marina dubai specialist", "expert closet design marina dubai",
  ],
  openGraph: {
    title: "Closet Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional closet design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/closet-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/closet-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
