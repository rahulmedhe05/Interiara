import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Budget Interior Solutions Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional budget interior solutions downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "budget-interior-solutions-downtown-dubai", "budget interior solutions downtown dubai", "budget interior solutions downtown dubai services", "best budget interior solutions downtown dubai", "professional budget interior solutions downtown dubai", "budget interior solutions downtown dubai company", "budget interior solutions downtown dubai specialist", "expert budget interior solutions downtown dubai",
  ],
  openGraph: {
    title: "Budget Interior Solutions Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional budget interior solutions downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/budget-interior-solutions-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/budget-interior-solutions-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
