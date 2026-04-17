import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medical Disclaimer — Aere',
  description:
    'Aere is a healthspan intelligence platform, not a healthcare provider. Important information about medical advice, AI-generated insights, and emergency situations.',
  alternates: { canonical: 'https://aere.health/disclaimer' },
  openGraph: {
    title: 'Medical Disclaimer — Aere',
    description: 'Important medical disclaimers about the Aere platform.',
    url: 'https://aere.health/disclaimer',
    type: 'website',
  },
}

const T = '#F0EAF8'
const M = 'rgba(240,234,248,0.7)'
const A = '#c87cff'
const B = 'rgba(200,124,255,0.15)'
const ERR_BG = 'rgba(255,107,43,0.1)'
const ERR_BORDER = 'rgba(255,107,43,0.35)'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aere.health' },
    { '@type': 'ListItem', position: 2, name: 'Disclaimer', item: 'https://aere.health/disclaimer' },
  ],
}

export default function DisclaimerPage() {
  return (
    <div style={{ background: '#0F0D1A', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(15,13,26,0.95)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${B}`,
        height: 64, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 32px',
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/brand/wordmark-transparent-violet.svg" alt="Aere" width={107} height={40} fetchPriority="high" decoding="async" style={{ height: 40, width: 107, display: 'block' }} />
        </Link>
        <Link href="/" style={{
          fontSize: 13.5, color: M, textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}>
          &larr; Return to site
        </Link>
      </nav>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '104px 24px 60px' }}>
        <article>
          <p style={{ fontSize: 13, color: M, marginBottom: 16 }}>Last updated: April 1, 2026</p>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 400,
            letterSpacing: '-0.02em', color: T, marginBottom: 32, lineHeight: 1.2,
          }}>
            Medical Disclaimer
          </h1>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>Not a Healthcare Provider</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Aere is a software company. We are not a hospital, medical practice, clinical laboratory, pharmacy, or any other licensed healthcare provider or facility. Aere does not employ physicians, nurses, or other licensed healthcare professionals in a clinical capacity. The Aere platform is a personal health record and healthspan intelligence tool designed to help you organize and understand your own health data &mdash; it is not a healthcare service.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>Not Medical Advice</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Nothing on the Aere platform &mdash; including biomarker analyses, trend summaries, healthspan scores, health insights, AI responses, pre-visit briefs, or any other content &mdash; constitutes medical advice, clinical diagnosis, treatment recommendations, or a prescription. All content provided by Aere is for general informational and educational purposes only. You should not use Aere as a substitute for professional medical evaluation or treatment.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>AI-Generated Insights</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Aere uses AI technology to parse health documents and generate insights. AI-generated content is produced by a language model and may contain errors, omissions, or inaccuracies. The AI does not have access to your full medical history, cannot examine you, and is not a licensed clinician. AI insights reflect patterns in data and general health knowledge &mdash; they are not a clinical assessment of your individual health status. Always verify AI-extracted data against your original documents and discuss any findings with a qualified healthcare provider.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>Emergency Situations</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24, background: ERR_BG, borderRadius: 10, padding: '14px 16px', border: `1px solid ${ERR_BORDER}` }}>
            <strong>If you are experiencing a medical emergency, call 911 immediately.</strong> Do not use Aere to seek help in an emergency. Aere does not provide emergency medical services, crisis intervention, or urgent care of any kind.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>No Doctor-Patient Relationship</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Your use of Aere does not create a doctor-patient relationship, therapist-client relationship, or any other professional healthcare relationship between you and Aere or any of its employees, contractors, or partners. Communications through Aere&apos;s AI chat or other features are not privileged medical communications.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>Accuracy of Information</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Aere strives to accurately extract and display data from your health records, but the accuracy of this extraction depends on the quality, format, and completeness of the documents you upload. Reference ranges, biomarker categorizations, and trend analyses may not account for individual factors such as age, sex, pregnancy status, medications, or underlying conditions that affect clinical interpretation. Always consult a qualified clinician to interpret your lab results in the context of your full medical picture.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>Professional Consultation Required</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Before making any changes to your health, lifestyle, medications, diet, supplementation, or exercise regimen based on information from Aere, consult a qualified and licensed healthcare professional. This is especially important if you have a pre-existing medical condition, are pregnant or nursing, are elderly, or are taking prescription medications. The longevity-focused nature of Aere&apos;s insights does not reduce the importance of individualized professional medical guidance.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>Contact</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 40 }}>
            If you have questions about this disclaimer or about Aere&apos;s services, contact us at{' '}
            <a href="mailto:admin@aere.health" style={{ color: A, textDecoration: 'none' }}>admin@aere.health</a>.
          </p>
        </article>
      </main>

      <footer style={{ borderTop: `1px solid ${B}`, padding: '24px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: M, margin: 0 }}>
          &copy; {new Date().getFullYear()} Aere Health, Inc. &middot;{' '}
          <a href="/" style={{ color: M, textDecoration: 'none' }}>aere.health</a>
        </p>
      </footer>
    </div>
  )
}
