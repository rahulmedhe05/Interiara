import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drapes Creek Dubai | Premium Design Services | Interiara",
  description: "Professional drapes creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "drapes-creek-dubai", "drapes creek dubai", "drapes creek dubai services", "best drapes creek dubai", "professional drapes creek dubai", "drapes creek dubai company", "drapes creek dubai specialist", "expert drapes creek dubai",
  ],
  openGraph: {
    title: "Drapes Creek Dubai | Transform Your Space | Interiara",
    description: "Professional drapes creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/drapes-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/drapes-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
