import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acoustic Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional acoustic design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "acoustic-design-al-wasl-dubai", "acoustic design al wasl dubai", "acoustic design al wasl dubai services", "best acoustic design al wasl dubai", "professional acoustic design al wasl dubai", "acoustic design al wasl dubai company", "acoustic design al wasl dubai specialist", "expert acoustic design al wasl dubai",
  ],
  openGraph: {
    title: "Acoustic Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional acoustic design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/acoustic-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/acoustic-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
