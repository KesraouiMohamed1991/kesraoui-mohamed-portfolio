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
    "MVP rapides et apps scalables. Freelance / CDI — Ouvert aux opportunités. Développement d’applications web Next.js (SSR/ISR, App Router). Marseille, Aix‑en‑Provence, France.",
  applicationName: `${profile.firstName} ${profile.lastName}`,
  keywords: [
    "développeur Next.js Marseille",
    "développeur Node Aix‑en‑Provence",
    "freelance React Marseille",
    "création application web",
    "intégration API",
    "site performant SEO",
  ],
  generator: " Next.js",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || undefined,
    languages: { fr: process.env.NEXT_PUBLIC_SITE_URL || undefined },
  },
  openGraph: {
    title: `${profile.firstName} ${profile.lastName} — Développeur Fullstack JavaScript`,
    description:
      "MVP rapides et apps scalables pour startups, agences et scaleups (FR/EU). Next.js, Node.js, React.",
    type: "website",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: `${profile.firstName} ${profile.lastName}` },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.firstName} ${profile.lastName} — Développeur Fullstack JavaScript`,
    description: "MVP rapides et apps scalables. Next.js & Node.js. Marseille/Aix.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${profile.firstName} ${profile.lastName}`,
    jobTitle: profile.title,
    address: { "@type": "PostalAddress", addressCountry: profile.location },
    email: `mailto:${profile.email}`,
  }

  return (
    <html lang="fr" className={`${geist.variable}`} suppressHydrationWarning>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
<script
  type="application/ld+json"
  // eslint-disable-next-line react/no-danger
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: process.env.NEXT_PUBLIC_SITE_URL || '',
      name: `${profile.firstName} ${profile.lastName}`,
      inLanguage: 'fr-FR',
      publisher: { '@type': 'Person', name: `${profile.firstName} ${profile.lastName}` },
    }),
  }}
/>


      </body>
    </html>
  )
}
