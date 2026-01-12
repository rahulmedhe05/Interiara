import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Renovation Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional office renovation downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "office-renovation-downtown-dubai", "office renovation downtown dubai", "office renovation downtown dubai services", "best office renovation downtown dubai", "professional office renovation downtown dubai", "office renovation downtown dubai company downtown dubai", "office renovation downtown dubai specialist", "expert office renovation downtown dubai",
  ],
  openGraph: {
    title: "Office Renovation Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional office renovation downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/office-renovation-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-renovation-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
