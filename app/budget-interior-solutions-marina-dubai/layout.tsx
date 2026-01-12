import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Budget Interior Solutions Marina Dubai | Premium Design Services | Interiara",
  description: "Professional budget interior solutions marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "budget-interior-solutions-marina-dubai", "budget interior solutions marina dubai", "budget interior solutions marina dubai services", "best budget interior solutions marina dubai", "professional budget interior solutions marina dubai", "budget interior solutions marina dubai company", "budget interior solutions marina dubai specialist", "expert budget interior solutions marina dubai",
  ],
  openGraph: {
    title: "Budget Interior Solutions Marina Dubai | Transform Your Space | Interiara",
    description: "Professional budget interior solutions marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/budget-interior-solutions-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/budget-interior-solutions-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
