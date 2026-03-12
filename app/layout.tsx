import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { LocalBusinessJsonLd } from "@/components/shared/JsonLd"
import "./globals.css"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Mission Sanitation | Portable Restroom Rentals in Santa Ynez Valley",
    template: "%s | Mission Sanitation",
  },
  description:
    "Clean, reliable portable restroom rentals in Solvang, Santa Ynez, Buellton & Los Olivos. Event, construction & ADA restrooms. Call (805) 688-8999 for a free quote.",
  metadataBase: new URL("https://missionsanitation.net"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mission Sanitation",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
