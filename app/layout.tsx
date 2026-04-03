import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
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
  description: 'The longevity intelligence platform. A secure home for your medical records, wearables, and labs — with AI that tells you what it all means for how long and how well you live.',
  metadataBase: new URL('https://aere.health'),
  openGraph: {
    title: 'Aere — Own Your Health',
    description: 'The longevity intelligence platform. A secure home for your medical records, wearables, and labs — with AI that tells you what it all means for how long and how well you live.',
    url: 'https://aere.health',
    siteName: 'Aere',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aere — Own Your Health',
    description: 'The longevity intelligence platform. A secure home for your medical records, wearables, and labs — with AI that tells you what it all means for how long and how well you live.',
    creator: '@aerehealth',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body>{children}</body>
    </html>
  )
}
