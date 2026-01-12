import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Fit Out Palm Dubai | Premium Design Services | Interiara",
  description: "Professional office fit out palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-fit-out-palm-dubai", "office fit out palm dubai", "office fit out palm dubai services", "best office fit out palm dubai", "professional office fit out palm dubai", "office fit out palm dubai company", "office fit out palm dubai specialist", "expert office fit out palm dubai",
  ],
  openGraph: {
    title: "Office Fit Out Palm Dubai | Transform Your Space | Interiara",
    description: "Professional office fit out palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-fit-out-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-fit-out-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
