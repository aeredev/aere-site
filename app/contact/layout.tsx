import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Aere',
  description:
    'Get in touch with the Aere team. Questions about the healthspan intelligence platform, partnerships, clinical research, or press inquiries.',
  alternates: { canonical: 'https://aere.health/contact' },
  openGraph: {
    title: 'Contact — Aere',
    description: 'Reach the Aere team. Questions, partnerships, press.',
    url: 'https://aere.health/contact',
    type: 'website',
    images: [{ url: 'https://aere.health/brand/og-image.png', width: 1200, height: 630, alt: 'Aere — Contact' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Aere',
    description: 'Reach the Aere team.',
    images: ['https://aere.health/brand/og-image.png'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aere.health' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://aere.health/contact' },
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
