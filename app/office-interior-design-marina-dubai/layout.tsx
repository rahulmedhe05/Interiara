import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional office interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-interior-design-marina-dubai", "office interior design marina dubai", "office interior design marina dubai services", "best office interior design marina dubai", "professional office interior design marina dubai", "office interior design marina dubai company", "office interior design marina dubai specialist", "expert office interior design marina dubai",
  ],
  openGraph: {
    title: "Office Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional office interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
