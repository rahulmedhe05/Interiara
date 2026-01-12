import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Fit Out Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional office fit out business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-fit-out-business-bay-dubai", "office fit out business bay dubai", "office fit out business bay dubai services", "best office fit out business bay dubai", "professional office fit out business bay dubai", "office fit out business bay dubai company", "office fit out business bay dubai specialist", "expert office fit out business bay dubai",
  ],
  openGraph: {
    title: "Office Fit Out Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional office fit out business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-fit-out-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-fit-out-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
