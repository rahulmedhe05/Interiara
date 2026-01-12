import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clinic Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional clinic interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "clinic-interior-design-downtown-dubai", "clinic interior design downtown dubai", "clinic interior design downtown dubai services", "best clinic interior design downtown dubai", "professional clinic interior design downtown dubai", "clinic interior design downtown dubai company", "clinic interior design downtown dubai specialist", "expert clinic interior design downtown dubai",
  ],
  openGraph: {
    title: "Clinic Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional clinic interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/clinic-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/clinic-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
