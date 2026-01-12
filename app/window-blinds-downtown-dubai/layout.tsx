import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Window Blinds Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional window blinds downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "window-blinds-downtown-dubai", "window blinds downtown dubai", "window blinds downtown dubai services", "best window blinds downtown dubai", "professional window blinds downtown dubai", "window blinds downtown dubai company", "window blinds downtown dubai specialist", "expert window blinds downtown dubai",
  ],
  openGraph: {
    title: "Window Blinds Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional window blinds downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/window-blinds-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/window-blinds-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
