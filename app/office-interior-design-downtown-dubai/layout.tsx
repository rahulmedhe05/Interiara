import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional office interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-interior-design-downtown-dubai", "office interior design downtown dubai", "office interior design downtown dubai services", "best office interior design downtown dubai", "professional office interior design downtown dubai", "office interior design downtown dubai company", "office interior design downtown dubai specialist", "expert office interior design downtown dubai",
  ],
  openGraph: {
    title: "Office Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional office interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
