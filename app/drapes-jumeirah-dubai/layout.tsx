import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drapes Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional drapes jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "drapes-jumeirah-dubai", "drapes jumeirah dubai", "drapes jumeirah dubai services", "best drapes jumeirah dubai", "professional drapes jumeirah dubai", "drapes jumeirah dubai company", "drapes jumeirah dubai specialist", "expert drapes jumeirah dubai",
  ],
  openGraph: {
    title: "Drapes Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional drapes jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/drapes-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/drapes-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
