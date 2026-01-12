import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kitchen Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional kitchen interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "kitchen-interior-design-downtown-dubai", "kitchen interior design downtown dubai", "kitchen interior design downtown dubai services", "best kitchen interior design downtown dubai", "professional kitchen interior design downtown dubai", "kitchen interior design downtown dubai company", "kitchen interior design downtown dubai specialist", "expert kitchen interior design downtown dubai",
  ],
  openGraph: {
    title: "Kitchen Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional kitchen interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/kitchen-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/kitchen-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
