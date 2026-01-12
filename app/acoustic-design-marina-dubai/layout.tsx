import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acoustic Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional acoustic design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "acoustic-design-marina-dubai", "acoustic design marina dubai", "acoustic design marina dubai services", "best acoustic design marina dubai", "professional acoustic design marina dubai", "acoustic design marina dubai company", "acoustic design marina dubai specialist", "expert acoustic design marina dubai",
  ],
  openGraph: {
    title: "Acoustic Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional acoustic design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/acoustic-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/acoustic-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
