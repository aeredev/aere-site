import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const dmSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Aere — Own Your Health',
  description: 'The healthspan intelligence platform. A secure home for your health records, wearables, and labs — with AI that tells you what it all means for how long and how well you live.',
  metadataBase: new URL('https://aere.health'),
  alternates: { canonical: 'https://aere.health' },
  openGraph: {
    title: 'Aere — Own Your Health',
    description: 'The Healthspan Intelligence Platform. Request early access.',
    url: 'https://aere.health',
    siteName: 'Aere',
    type: 'website',
    images: [
      {
        url: 'https://aere.health/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aere — Own Your Health',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aere — Own Your Health',
    description: 'The Healthspan Intelligence Platform. Request early access.',
    images: ['https://aere.health/brand/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: 'Aere',
  authors: [{ name: 'Aere', url: 'https://aere.health' }],
  creator: 'Aere',
  publisher: 'Aere',
  icons: {
    icon: '/favicon.ico',
    apple: '/brand/square-transparent-violet.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F0D1A',
  width: 'device-width',
  initialScale: 1,
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aere',
  url: 'https://aere.health',
  logo: 'https://aere.health/brand/logo-transparent-violet.png',
  description:
    'The healthspan intelligence platform. A secure home for your health records, wearables, and labs — with AI that tells you what it all means for how long and how well you live.',
  email: 'admin@aere.health',
  sameAs: [],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Aere',
  url: 'https://aere.health',
  description:
    'The healthspan intelligence platform — own your health data and understand what it means.',
  publisher: { '@type': 'Organization', name: 'Aere', url: 'https://aere.health' },
}

const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aere',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web, iOS, Android',
  description:
    'Healthspan intelligence platform that unifies health records, wearables, labs, and imaging with AI-driven longevity insights.',
  url: 'https://aere.health',
  publisher: { '@type': 'Organization', name: 'Aere' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
