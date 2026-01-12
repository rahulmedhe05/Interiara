import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Visualization Palm Dubai | Premium Design Services | Interiara",
  description: "Professional interior visualization palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-visualization-palm-dubai", "interior visualization palm dubai", "interior visualization palm dubai services", "best interior visualization palm dubai", "professional interior visualization palm dubai", "interior visualization palm dubai company", "interior visualization palm dubai specialist", "expert interior visualization palm dubai",
  ],
  openGraph: {
    title: "Interior Visualization Palm Dubai | Transform Your Space | Interiara",
    description: "Professional interior visualization palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-visualization-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-visualization-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
