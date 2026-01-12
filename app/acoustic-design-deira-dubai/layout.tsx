import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acoustic Design Deira Dubai | Premium Design Services | Interiara",
  description: "Professional acoustic design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "acoustic-design-deira-dubai", "acoustic design deira dubai", "acoustic design deira dubai services", "best acoustic design deira dubai", "professional acoustic design deira dubai", "acoustic design deira dubai company", "acoustic design deira dubai specialist", "expert acoustic design deira dubai",
  ],
  openGraph: {
    title: "Acoustic Design Deira Dubai | Transform Your Space | Interiara",
    description: "Professional acoustic design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/acoustic-design-deira-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/acoustic-design-deira-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
