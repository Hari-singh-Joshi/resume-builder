import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hari Resume Builder Pro - Create Professional Resumes",
  description:
    "Build professional resumes tailored to your job role with our intelligent form system and multiple templates. Choose from 8+ technical roles including Software Developer, Web Developer, Data Analyst, and more.",
  keywords: [
    "resume builder",
    "professional resume",
    "CV maker",
    "job application",
    "career tools",
    "resume templates",
    "ATS friendly resume",
    "software developer resume",
    "web developer resume",
    "data analyst resume",
    "tech resume",
    "resume generator",
    "free resume builder",
    "online resume maker",
  ],
  authors: [{ name: "Hari Resume Builder Pro Team" }],
  creator: "Hari Resume Builder Pro",
  publisher: "Hari Resume Builder Pro",
  generator: "v0.dev",
  applicationName: "Hari Resume Builder Pro",
  referrer: "origin-when-cross-origin",
  category: "Career Tools",
  classification: "Business",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hariresumebuilder.vercel.app",
    siteName: "Hari Resume Builder Pro",
    title: "Hari Resume Builder Pro - Create Professional Resumes",
    description:
      "Build professional resumes tailored to your job role with our intelligent form system and multiple templates. Perfect for software developers, web developers, data analysts, and more.",
    images: [
      {
        url: "/favicon.jpg",
        width: 1200,
        height: 630,
        alt: "Hari Resume Builder Pro - Professional Resume Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hariresumebuilder",
    creator: "@hariresumebuilder",
    title: "Hari Resume Builder Pro - Create Professional Resumes",
    description:
      "Build professional resumes tailored to your job role with our intelligent form system and multiple templates.",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.jpg", sizes: "16x16", type: "image/png" },
      { url: "/favicon.jpg", sizes: "32x32", type: "image/png" },
      { url: "/favicon.jpg", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#2563eb",
      },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://hariresumebuilder.vercel.app"),
  alternates: {
    canonical: "https://hariresumebuilder.vercel.app",
    languages: {
      "en-US": "https://hariresumebuilder.vercel.app",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#ffffff",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-navbutton-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Apple mobile web app */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Hari Resume Builder" />

        {/* Microsoft application */}
        <meta name="application-name" content="Hari Resume Builder Pro" />
        <meta name="msapplication-tooltip" content="Create Professional Resumes" />
        <meta name="msapplication-starturl" content="/" />

        {/* Format detection */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Hari Resume Builder Pro",
              description:
                "Build professional resumes tailored to your job role with our intelligent form system and multiple templates.",
              url: "https://hariresumebuilder.vercel.app",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "Hari Resume Builder Pro",
              },
              featureList: [
                "Role-specific resume forms",
                "5 professional templates",
                "ATS-friendly designs",
                "Instant PDF download",
                "Multiple job roles support",
              ],
            }),
          }}
        />

        {/* Organization schema with updated links */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hari Resume Builder Pro",
              url: "https://hariresumebuilder.vercel.app",
              logo: "https://hariresumebuilder.vercel.app/logo.png",
              description: "Professional resume building platform for technical professionals",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "support@hariresumebuilder.com",
              },
              sameAs: [
                "https://www.linkedin.com/in/hari-singh-joshi-4499b326b/",
                "https://github.com/Hari-singh-Joshi",
                "https://leetcode.com/u/joshi16/",
                "https://portfolio-hari-singh.vercel.app/",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
