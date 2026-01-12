import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Fit Out Dubai | Expert Office Fit Out Dubai Design Services UAE | Interiara",
  description: "Complete office fit-out solutions in Dubai with professional workspace design. Corporate offices, startups, co-working spaces. 300+ offices fitted out. Call +91 635 358 3148",
  keywords: [
    "office fit out dubai",
    "office fit-out dubai",
    "office interior design dubai",
    "commercial office fit out dubai",
    "corporate office fit out dubai",
    "best office fit out company dubai",
    "modern office fit out dubai",
    "luxury office fit out dubai",
    "affordable office fit out dubai",
    "office renovation dubai",
    "office space planning dubai",
    "office interior solutions dubai",
    "professional office fit out dubai",
    "workspace fit out dubai",
    "office design and fit out dubai"
  ],
  openGraph: {
    title: "Office Fit Out Dubai | Transform Your Space | Interiara",
    description: "Expert Office Fit Out Dubai design specialists creating beautiful spaces across Dubai & UAE. Free consultation!",
    url: "https://interiara.com/office-fit-out-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-fit-out-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
