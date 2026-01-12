import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Renovation Marina Dubai | Premium Design Services | Interiara",
  description: "Professional office renovation marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-renovation-marina-dubai", "office renovation marina dubai", "office renovation marina dubai services", "best office renovation marina dubai", "professional office renovation marina dubai", "office renovation marina dubai company", "office renovation marina dubai specialist", "expert office renovation marina dubai",
  ],
  openGraph: {
    title: "Office Renovation Marina Dubai | Transform Your Space | Interiara",
    description: "Professional office renovation marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-renovation-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-renovation-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
