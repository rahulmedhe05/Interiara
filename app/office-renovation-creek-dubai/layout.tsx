import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Renovation Creek Dubai | Premium Design Services | Interiara",
  description: "Professional office renovation creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-renovation-creek-dubai", "office renovation creek dubai", "office renovation creek dubai services", "best office renovation creek dubai", "professional office renovation creek dubai", "office renovation creek dubai company", "office renovation creek dubai specialist", "expert office renovation creek dubai",
  ],
  openGraph: {
    title: "Office Renovation Creek Dubai | Transform Your Space | Interiara",
    description: "Professional office renovation creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-renovation-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-renovation-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
