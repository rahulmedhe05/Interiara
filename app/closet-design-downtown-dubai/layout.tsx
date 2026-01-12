import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Closet Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional closet design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "closet-design-downtown-dubai", "closet design downtown dubai", "closet design downtown dubai services", "best closet design downtown dubai", "professional closet design downtown dubai", "closet design downtown dubai company", "closet design downtown dubai specialist", "expert closet design downtown dubai",
  ],
  openGraph: {
    title: "Closet Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional closet design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/closet-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/closet-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
