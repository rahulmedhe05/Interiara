import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Space Planning Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional space planning downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "space-planning-downtown-dubai", "space planning downtown dubai", "space planning downtown dubai services", "best space planning downtown dubai", "professional space planning downtown dubai", "space planning downtown dubai company", "space planning downtown dubai specialist", "expert space planning downtown dubai",
  ],
  openGraph: {
    title: "Space Planning Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional space planning downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/space-planning-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/space-planning-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
