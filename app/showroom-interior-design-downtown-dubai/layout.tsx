import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Showroom Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional showroom interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "showroom-interior-design-downtown-dubai", "showroom interior design downtown dubai", "showroom interior design downtown dubai services", "best showroom interior design downtown dubai", "professional showroom interior design downtown dubai", "showroom interior design downtown dubai company", "showroom interior design downtown dubai specialist", "expert showroom interior design downtown dubai",
  ],
  openGraph: {
    title: "Showroom Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional showroom interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/showroom-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/showroom-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
