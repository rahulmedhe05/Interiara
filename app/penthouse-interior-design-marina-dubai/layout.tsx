import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Penthouse Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional penthouse interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "penthouse-interior-design-marina-dubai", "penthouse interior design marina dubai", "penthouse interior design marina dubai services", "best penthouse interior design marina dubai", "professional penthouse interior design marina dubai", "penthouse interior design marina dubai company", "penthouse interior design marina dubai specialist", "expert penthouse interior design marina dubai",
  ],
  openGraph: {
    title: "Penthouse Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional penthouse interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/penthouse-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/penthouse-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
