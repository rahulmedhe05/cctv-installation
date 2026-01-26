import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Best CCTV Camera Installation & Security System Provider in Vadodara | 15+ Years Experience",
  description:
    "Professional CCTV camera installation in Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Expert security system provider serving all 40 areas. Home, office, shop & factory CCTV. Free site survey. Call +91 6353583148",
  keywords:
    "CCTV installation Vadodara, CCTV camera dealer Vadodara, security system provider Vadodara, Hikvision dealer Vadodara, CP Plus dealer Vadodara, home security Vadodara, office CCTV Vadodara, access control Vadodara, biometric attendance Vadodara, fire alarm Vadodara, CCTV repair Vadodara, CCTV AMC Vadodara",
  authors: [{ name: "CCTV Vadodara" }],
  creator: "CCTV Vadodara",
  publisher: "CCTV Vadodara",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://cctvinstallvadodara.in"),
  alternates: {
    canonical: "https://cctvinstallvadodara.in",
  },
  openGraph: {
    title: "Best CCTV Camera Installation & Security System Provider in Vadodara",
    description:
      "Professional CCTV installation services in Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. 15+ years experience, 5000+ installations, 24/7 support.",
    url: "https://cctvinstallvadodara.in",
    siteName: "CCTV Vadodara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://cctvinstallvadodara.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CCTV Camera Installation in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCTV Camera Installation in Vadodara",
    description: "Best CCTV installation services in Vadodara. Hikvision, CP Plus & Dahua authorized dealer. Home, office, shop & factory security. Call +91 6353583148",
    images: ["https://cctvinstallvadodara.in/og-image.jpg"],
    creator: "@cctvvadodara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://cctvinstallvadodara.in/#organization",
        name: "CCTV Vadodara - Security System & CCTV Providers",
        image: "https://cctvinstallvadodara.in/logo.png",
        description: "Professional CCTV camera installation and security system provider in Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. 15+ years experience, 5000+ installations.",
        url: "https://cctvinstallvadodara.in",
        telephone: "+916353583148",
        email: "info@cctvinstallvadodara.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Vadodara",
          addressLocality: "Vadodara",
          addressRegion: "Gujarat",
          postalCode: "390001",
          addressCountry: "IN",
        },
        sameAs: [],
        priceRange: "₹₹",
        serviceArea: {
          "@type": "City",
          name: "Vadodara",
        },
        areaServed: ["Vadodara", "Alkapuri", "Gotri", "Manjalpur", "Karelibaug", "Sayajigunj", "Akota", "Fatehgunj", "Subhanpura", "Harni", "Tandalja", "Makarpura", "Nizampura", "Race Course", "Vasna Bhayli", "Sama", "Waghodia Road", "Chhani", "Kalali", "Atladara", "Tarsali", "Ajwa Road", "Gorwa", "Padra", "Nandesari"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Security Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "CCTV Camera Installation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Access Control System" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Biometric Attendance System" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Alarm System" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Door Phone" } },
          ]
        }
      },
      {
        "@type": "Organization",
        "@id": "https://cctvinstallvadodara.in/#organization",
        name: "CCTV Vadodara",
        url: "https://cctvinstallvadodara.in",
        logo: "https://cctvinstallvadodara.in/logo.png",
        foundingDate: "2010",
        knowsAbout: [
          "CCTV Camera Installation",
          "Security System Installation",
          "Access Control Systems",
          "Biometric Attendance Systems",
          "Fire Alarm Systems",
          "Video Door Phone",
          "IP Camera Setup",
          "DVR/NVR Installation",
          "Remote Monitoring",
          "CCTV Maintenance & AMC",
        ],
      },
    ],
  }

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
