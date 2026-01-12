import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Window Curtains Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional window curtains downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "window-curtains-downtown-dubai", "window curtains downtown dubai", "window curtains downtown dubai services", "best window curtains downtown dubai", "professional window curtains downtown dubai", "window curtains downtown dubai company", "window curtains downtown dubai specialist", "expert window curtains downtown dubai",
  ],
  openGraph: {
    title: "Window Curtains Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional window curtains downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/window-curtains-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/window-curtains-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
