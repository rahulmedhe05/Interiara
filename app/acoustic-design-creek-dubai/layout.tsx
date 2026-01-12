import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acoustic Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional acoustic design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "acoustic-design-creek-dubai", "acoustic design creek dubai", "acoustic design creek dubai services", "best acoustic design creek dubai", "professional acoustic design creek dubai", "acoustic design creek dubai company", "acoustic design creek dubai specialist", "expert acoustic design creek dubai",
  ],
  openGraph: {
    title: "Acoustic Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional acoustic design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/acoustic-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/acoustic-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
