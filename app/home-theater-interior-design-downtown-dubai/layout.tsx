import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Theater Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional home theater interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-theater-interior-design-downtown-dubai", "home theater interior design downtown dubai", "home theater interior design downtown dubai services", "best home theater interior design downtown dubai", "professional home theater interior design downtown dubai", "home theater interior design downtown dubai company", "home theater interior design downtown dubai specialist", "expert home theater interior design downtown dubai",
  ],
  openGraph: {
    title: "Home Theater Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional home theater interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-theater-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-theater-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
