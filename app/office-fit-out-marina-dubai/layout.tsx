import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Fit Out Marina Dubai | Premium Design Services | Interiara",
  description: "Professional office fit out marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-fit-out-marina-dubai", "office fit out marina dubai", "office fit out marina dubai services", "best office fit out marina dubai", "professional office fit out marina dubai", "office fit out marina dubai company", "office fit out marina dubai specialist", "expert office fit out marina dubai",
  ],
  openGraph: {
    title: "Office Fit Out Marina Dubai | Transform Your Space | Interiara",
    description: "Professional office fit out marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-fit-out-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-fit-out-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
