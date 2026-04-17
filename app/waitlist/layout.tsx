import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request Early Access — Aere',
  description:
    'Join the Aere waitlist. Be among the first to own your complete health record — labs, wearables, imaging, and AI-driven healthspan insights — when we open the platform.',
  alternates: { canonical: 'https://aere.health/waitlist' },
  openGraph: {
    title: 'Request Early Access — Aere',
    description:
      'Join the waitlist for the healthspan intelligence platform. Own your health data. Understand what it means.',
    url: 'https://aere.health/waitlist',
    type: 'website',
    images: [{ url: 'https://aere.health/brand/og-image.png', width: 1200, height: 630, alt: 'Aere — Request Early Access' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request Early Access — Aere',
    description: 'Join the waitlist for the healthspan intelligence platform.',
    images: ['https://aere.health/brand/og-image.png'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aere.health' },
    { '@type': 'ListItem', position: 2, name: 'Request Early Access', item: 'https://aere.health/waitlist' },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
