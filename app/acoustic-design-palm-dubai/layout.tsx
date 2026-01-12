import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acoustic Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional acoustic design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "acoustic-design-palm-dubai", "acoustic design palm dubai", "acoustic design palm dubai services", "best acoustic design palm dubai", "professional acoustic design palm dubai", "acoustic design palm dubai company", "acoustic design palm dubai specialist", "expert acoustic design palm dubai",
  ],
  openGraph: {
    title: "Acoustic Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional acoustic design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/acoustic-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/acoustic-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
