import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional luxury interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "luxury-interior-design-downtown-dubai", "luxury interior design downtown dubai", "luxury interior design downtown dubai services", "best luxury interior design downtown dubai", "professional luxury interior design downtown dubai", "luxury interior design downtown dubai company", "luxury interior design downtown dubai specialist", "expert luxury interior design downtown dubai",
  ],
  openGraph: {
    title: "Luxury Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional luxury interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/luxury-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/luxury-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
