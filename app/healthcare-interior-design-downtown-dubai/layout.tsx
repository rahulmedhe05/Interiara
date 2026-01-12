import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Healthcare Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional healthcare interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "healthcare-interior-design-downtown-dubai", "healthcare interior design downtown dubai", "healthcare interior design downtown dubai services", "best healthcare interior design downtown dubai", "professional healthcare interior design downtown dubai", "healthcare interior design downtown dubai company", "healthcare interior design downtown dubai specialist", "expert healthcare interior design downtown dubai",
  ],
  openGraph: {
    title: "Healthcare Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional healthcare interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/healthcare-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/healthcare-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
