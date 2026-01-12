import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional office interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-interior-design-palm-dubai", "office interior design palm dubai", "office interior design palm dubai services", "best office interior design palm dubai", "professional office interior design palm dubai", "office interior design palm dubai company", "office interior design palm dubai specialist", "expert office interior design palm dubai",
  ],
  openGraph: {
    title: "Office Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional office interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
