import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Affordable Interior Solutions Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional affordable interior solutions downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "affordable-interior-solutions-downtown-dubai", "affordable interior solutions downtown dubai", "affordable interior solutions downtown dubai services", "best affordable interior solutions downtown dubai", "professional affordable interior solutions downtown dubai", "affordable interior solutions downtown dubai company downtown dubai", "affordable interior solutions downtown dubai specialist", "expert affordable interior solutions downtown dubai",
  ],
  openGraph: {
    title: "Affordable Interior Solutions Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional affordable interior solutions downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/affordable-interior-solutions-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/affordable-interior-solutions-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
