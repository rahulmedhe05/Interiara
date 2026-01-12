import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Minimalist Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional minimalist interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "minimalist-interior-design-downtown-dubai", "minimalist interior design downtown dubai", "minimalist interior design downtown dubai services", "best minimalist interior design downtown dubai", "professional minimalist interior design downtown dubai", "minimalist interior design downtown dubai company", "minimalist interior design downtown dubai specialist", "expert minimalist interior design downtown dubai",
  ],
  openGraph: {
    title: "Minimalist Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional minimalist interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/minimalist-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/minimalist-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
