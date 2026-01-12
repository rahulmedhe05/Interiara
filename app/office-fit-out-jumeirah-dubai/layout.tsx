import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Fit Out Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional office fit out jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-fit-out-jumeirah-dubai", "office fit out jumeirah dubai", "office fit out jumeirah dubai services", "best office fit out jumeirah dubai", "professional office fit out jumeirah dubai", "office fit out jumeirah dubai company", "office fit out jumeirah dubai specialist", "expert office fit out jumeirah dubai",
  ],
  openGraph: {
    title: "Office Fit Out Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional office fit out jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-fit-out-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-fit-out-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
