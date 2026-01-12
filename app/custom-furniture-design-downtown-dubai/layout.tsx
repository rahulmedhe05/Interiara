import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Furniture Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional custom furniture design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "custom-furniture-design-downtown-dubai", "custom furniture design downtown dubai", "custom furniture design downtown dubai services", "best custom furniture design downtown dubai", "professional custom furniture design downtown dubai", "custom furniture design downtown dubai company", "custom furniture design downtown dubai specialist", "expert custom furniture design downtown dubai",
  ],
  openGraph: {
    title: "Custom Furniture Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional custom furniture design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/custom-furniture-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/custom-furniture-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
