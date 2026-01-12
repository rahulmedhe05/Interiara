import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Residential Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Transform your Downtown Dubai home with our expert residential interior design services. We create beautiful, functional living spaces tailored to your lifestyle. Specializing in villas, apartments, and penthouses in the heart of Dubai.",
  keywords: [
    "residential interior design downtown dubai", "home design downtown dubai", "apartment interior design downtown dubai", "villa interior downtown dubai", "residential styling downtown dubai",
  ],
  openGraph: {
    title: "Residential Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Transform your Downtown Dubai home with our expert residential interior design services. We create beautiful, functional living spaces tailored to your lifestyle. Specializing in villas, apartments, and penthouses in the heart of Dubai.",
    url: "https://interiara.com/residential-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/residential-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
