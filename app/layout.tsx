import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
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
  icons: {
    icon: "/favicon.webp",
    apple: "/favicon.webp",
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
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69b34f540ec30059b2c5f9e1"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
