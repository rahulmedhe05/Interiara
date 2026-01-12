import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Window Blinds Marina Dubai | Premium Design Services | Interiara",
  description: "Professional window blinds marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "window-blinds-marina-dubai", "window blinds marina dubai", "window blinds marina dubai services", "best window blinds marina dubai", "professional window blinds marina dubai", "window blinds marina dubai company", "window blinds marina dubai specialist", "expert window blinds marina dubai",
  ],
  openGraph: {
    title: "Window Blinds Marina Dubai | Transform Your Space | Interiara",
    description: "Professional window blinds marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/window-blinds-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/window-blinds-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
