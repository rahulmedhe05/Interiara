import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bespoke Furniture Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional bespoke furniture design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "bespoke-furniture-design-downtown-dubai", "bespoke furniture design downtown dubai", "bespoke furniture design downtown dubai services", "best bespoke furniture design downtown dubai", "professional bespoke furniture design downtown dubai", "bespoke furniture design downtown dubai company", "bespoke furniture design downtown dubai specialist", "expert bespoke furniture design downtown dubai",
  ],
  openGraph: {
    title: "Bespoke Furniture Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional bespoke furniture design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/bespoke-furniture-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/bespoke-furniture-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
