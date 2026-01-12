import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Decor Consultation Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional home decor consultation downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-decor-consultation-downtown-dubai", "home decor consultation downtown dubai", "home decor consultation downtown dubai services", "best home decor consultation downtown dubai", "professional home decor consultation downtown dubai", "home decor consultation downtown dubai company", "home decor consultation downtown dubai specialist", "expert home decor consultation downtown dubai",
  ],
  openGraph: {
    title: "Home Decor Consultation Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional home decor consultation downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-decor-consultation-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-decor-consultation-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
