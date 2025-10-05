import React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { profile } from "@/lib/data"
import { Analytics } from "@vercel/analytics/react"
import { LenisProvider } from "@/components/lenis-provider"
import { ScrollReveal } from "@/components/scroll-reveal"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: `${profile.firstName} ${profile.lastName} — ${profile.title}`,
  description:
    "Calimo Agency, agence digitale à Marseille & Aix : sites web Next.js, branding premium, SEO et campagnes de croissance sur-mesure.",
  applicationName: `${profile.firstName} ${profile.lastName}`,
  keywords: [
    "agence digitale Marseille",
    "création site web Next.js",
    "branding premium",
    "seo technique marseille",
    "growth marketing b2b",
    "agence web aix en provence",
  ],
  generator: "Next.js",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || undefined,
    languages: { fr: process.env.NEXT_PUBLIC_SITE_URL || undefined },
  },
  openGraph: {
    title: `${profile.firstName} ${profile.lastName} — ${profile.title}`,
    description:
      "Agence digitale & marketing basée à Marseille : sites web Next.js, branding, SEO technique et activation growth pour marques ambitieuses.",
    type: "website",
    images: [
      { url: "/calimo.png", width: 1200, height: 630, alt: `${profile.firstName} ${profile.lastName}` },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.firstName} ${profile.lastName} — ${profile.title}`,
    description: "Calimo Agency — Sites web Next.js, branding, SEO et marketing de croissance.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/calimo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${profile.firstName} ${profile.lastName}`,
    description: profile.title,
    url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "FR",
    },
    sameAs: [
      "https://www.linkedin.com/company/calimo-agency",
      "https://www.instagram.com/calimo.agency",
      "https://dribbble.com/calimo",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
    name: `${profile.firstName} ${profile.lastName}`,
    inLanguage: "fr-FR",
    publisher: { "@type": "Organization", name: `${profile.firstName} ${profile.lastName}` },
  }

  return (
    <html lang="fr" className={geist.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only fixed top-2 left-2 z-50 bg-primary text-primary-foreground px-3 py-2 rounded-md"
        >
          Aller au contenu
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LenisProvider>
            <SiteHeader />
            <ScrollReveal />
            <div id="content" />
            {children}
            <Analytics />
          </LenisProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  )
}
