import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Closet Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional closet design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "closet-design-creek-dubai", "closet design creek dubai", "closet design creek dubai services", "best closet design creek dubai", "professional closet design creek dubai", "closet design creek dubai company", "closet design creek dubai specialist", "expert closet design creek dubai",
  ],
  openGraph: {
    title: "Closet Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional closet design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/closet-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/closet-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
