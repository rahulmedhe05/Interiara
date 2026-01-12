import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wallpaper Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional wallpaper design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "wallpaper-design-downtown-dubai", "wallpaper design downtown dubai", "wallpaper design downtown dubai services", "best wallpaper design downtown dubai", "professional wallpaper design downtown dubai", "wallpaper design downtown dubai company", "wallpaper design downtown dubai specialist", "expert wallpaper design downtown dubai",
  ],
  openGraph: {
    title: "Wallpaper Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional wallpaper design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/wallpaper-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/wallpaper-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
