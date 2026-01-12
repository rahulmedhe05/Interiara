import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drapes Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional drapes downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "drapes-downtown-dubai", "drapes downtown dubai", "drapes downtown dubai services", "best drapes downtown dubai", "professional drapes downtown dubai", "drapes downtown dubai company", "drapes downtown dubai specialist", "expert drapes downtown dubai",
  ],
  openGraph: {
    title: "Drapes Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional drapes downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/drapes-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/drapes-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
