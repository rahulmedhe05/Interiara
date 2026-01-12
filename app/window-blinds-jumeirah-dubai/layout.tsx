import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Window Blinds Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional window blinds jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "window-blinds-jumeirah-dubai", "window blinds jumeirah dubai", "window blinds jumeirah dubai services", "best window blinds jumeirah dubai", "professional window blinds jumeirah dubai", "window blinds jumeirah dubai company", "window blinds jumeirah dubai specialist", "expert window blinds jumeirah dubai",
  ],
  openGraph: {
    title: "Window Blinds Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional window blinds jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/window-blinds-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/window-blinds-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
