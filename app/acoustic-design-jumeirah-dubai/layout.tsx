import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acoustic Design Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional acoustic design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "acoustic-design-jumeirah-dubai", "acoustic design jumeirah dubai", "acoustic design jumeirah dubai services", "best acoustic design jumeirah dubai", "professional acoustic design jumeirah dubai", "acoustic design jumeirah dubai company", "acoustic design jumeirah dubai specialist", "expert acoustic design jumeirah dubai",
  ],
  openGraph: {
    title: "Acoustic Design Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional acoustic design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/acoustic-design-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/acoustic-design-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
