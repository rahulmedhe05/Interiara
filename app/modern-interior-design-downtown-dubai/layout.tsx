import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional modern interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "modern interior design downtown dubai", "contemporary design downtown dubai", "modern style interior downtown dubai",
  ],
  openGraph: {
    title: "Modern Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional modern interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
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
