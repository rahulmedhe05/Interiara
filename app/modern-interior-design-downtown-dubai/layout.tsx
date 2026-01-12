import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional modern interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modern-interior-design-downtown-dubai", "modern interior design downtown dubai", "modern interior design downtown dubai services", "best modern interior design downtown dubai", "professional modern interior design downtown dubai", "modern interior design downtown dubai company", "modern interior design downtown dubai specialist", "expert modern interior design downtown dubai",
  ],
  openGraph: {
    title: "Modern Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional modern interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modern-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modern-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
