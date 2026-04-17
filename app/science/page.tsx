import type { Metadata } from 'next'
import Link from 'next/link'
import ScienceClient from './ScienceClient'
import { BIOMARKERS, CATEGORIES } from '@/lib/biomarker-reference'

export const metadata: Metadata = {
  title: 'Biomarker Science Reference | Aere — Own Your Health',
  description:
    "Evidence-based optimal ranges for 110+ biomarkers, grounded in peer-reviewed research. Learn why Aere's targets differ from standard lab ranges — and what those differences mean for your longevity.",
  openGraph: {
    title: 'Biomarker Science Reference | Aere',
    description:
      'Peer-reviewed optimal ranges for 110+ biomarkers with longevity-focused context. Not just "normal" — actually optimal.',
    url: 'https://aere.health/science',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biomarker Science Reference | Aere',
    description: 'Evidence-based optimal ranges for 110+ biomarkers.',
  },
  alternates: {
    canonical: 'https://aere.health/science',
  },
}

const PHILOSOPHY = [
  {
    title: 'Evidence-first',
    body: 'Every optimal range cites peer-reviewed research. Confidence levels reflect the quality and consistency of the underlying evidence — strong, moderate, or emerging.',
  },
  {
    title: 'Longevity-oriented',
    body: 'We prioritize studies measuring long-term outcomes — all-cause mortality, cardiovascular events, cognitive decline — not just absence of clinical diagnosis.',
  },
  {
    title: 'Individually contextualized',
    body: 'Sex-specific ranges, age-adjusted norms, and population differences are incorporated where the evidence supports them rather than applying averaged reference ranges.',
  },
]

const METHODOLOGY = [
  {
    num: '1',
    title: 'Source hierarchy',
    body: 'Peer-reviewed meta-analyses and large prospective cohorts (NEJM, JAMA, Lancet, BMJ) take precedence. Clinical guidelines (ACC/AHA, KDIGO, ADA, IFM) and expert longevity physicians (Attia, Patrick, Longo) inform gaps where RCT data is limited.',
  },
  {
    num: '2',
    title: 'Confidence tiers',
    body: 'Strong — consistent evidence across multiple large studies or randomized trials. Moderate — single high-quality study or consistent smaller trials. Emerging — mechanistic rationale with limited direct human outcome data.',
  },
  {
    num: '3',
    title: 'Sex-specific ranges',
    body: 'Where physiology differs (CBC, hormones, iron studies, lipid fractions), Aere applies sex-specific optimal ranges grounded in sex-stratified data, not population averages that mask meaningful biological differences.',
  },
]

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aere.health' },
    { '@type': 'ListItem', position: 2, name: 'Science', item: 'https://aere.health/science' },
  ],
}

const medicalWebPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Biomarker Science Reference',
  url: 'https://aere.health/science',
  description:
    "Evidence-based optimal ranges for 110+ biomarkers, grounded in peer-reviewed research. Learn why Aere's targets differ from standard lab ranges — and what those differences mean for your longevity.",
  about: {
    '@type': 'MedicalCondition',
    name: 'Longevity and healthspan biomarker optimization',
  },
  audience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
  publisher: { '@type': 'Organization', name: 'Aere', url: 'https://aere.health' },
  inLanguage: 'en-US',
}

export default function SciencePage() {
  const citationCount = BIOMARKERS.reduce((sum, b) => sum + b.citations.length, 0)

  return (
    <div data-theme="dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd) }}
      />
      {/* ── Minimal dark nav ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'var(--color-nav-bg)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
        height: 64, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 32px',
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/brand/wordmark-transparent-violet.svg" alt="Aere" width={107} height={40} fetchPriority="high" decoding="async" style={{ height: 40, width: 107, display: 'block' }} />
        </Link>
        <Link href="https://aere.health/waitlist" style={{
          padding: '8px 18px', background: 'var(--color-accent)', color: 'white',
          borderRadius: '10px', fontSize: 13.5, fontWeight: 500,
          textDecoration: 'none', whiteSpace: 'nowrap',
        }}>
          Request early access
        </Link>
      </nav>

      <main style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--color-text)' }}>

        {/* ── Disclaimer banner ── */}
        <div style={{
          background: 'var(--color-accent-tint)',
          borderBottom: '1px solid var(--color-border)',
          padding: '10px 24px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: 'var(--color-muted)',
            lineHeight: 1.5,
            margin: 0,
          }}>
            The ranges and research cited on this page are for informational purposes only and do not constitute medical advice. Always consult a qualified healthcare provider.
          </p>
        </div>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '60px 24px 80px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--color-accent-tint)', border: '1px solid var(--color-accent)',
            borderRadius: 100, padding: '5px 16px', marginBottom: 36,
            fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
            textTransform: 'uppercase', color: 'var(--color-accent)',
          }}>
            Science Reference
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(44px, 7vw, 78px)',
            lineHeight: 1.05, letterSpacing: '-0.02em',
            color: 'var(--color-text)', margin: '0 0 24px',
          }}>
            Every Biomarker.<br />Every Range. Every Reason.
          </h1>
          <p style={{
            fontSize: 19, color: 'var(--color-muted)',
            lineHeight: 1.75, maxWidth: 620, margin: '0 auto 56px',
          }}>
            Lab reference ranges define what&apos;s statistically common. Aere defines what&apos;s actually optimal —
            ranges derived from the research that predicts who lives longest and healthiest.
          </p>
          <div style={{ display: 'flex', gap: 56, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { value: BIOMARKERS.length, label: 'Biomarkers' },
              { value: `${citationCount}+`, label: 'Citations' },
              { value: Object.keys(CATEGORIES).length, label: 'Categories' },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 44, fontFamily: 'var(--font-serif)',
                  color: 'var(--color-accent)', lineHeight: 1,
                }}>
                  {value}
                </div>
                <div style={{ fontSize: 13, color: 'var(--color-muted)', marginTop: 6, fontWeight: 500 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

        {/* ── Philosophy ── */}
        <section style={{
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <div style={{
            maxWidth: 1100, margin: '0 auto', padding: '88px 24px',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 80, alignItems: 'center',
          }}
            className="phil-grid"
          >
            <div>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 18,
              }}>
                Our Philosophy
              </p>
              <h2 style={{
                fontFamily: 'var(--font-serif)', fontSize: 42,
                lineHeight: 1.1, color: 'var(--color-text)', margin: '0 0 22px',
                letterSpacing: '-0.01em',
              }}>
                &ldquo;Normal&rdquo; is not the same as optimal.
              </h2>
              <p style={{ fontSize: 16, color: 'var(--color-muted)', lineHeight: 1.8, margin: '0 0 16px' }}>
                Standard lab reference ranges represent the middle 95% of a population that includes sedentary,
                metabolically unhealthy, and aging individuals. A result within range means you are not an outlier
                in a sick population — nothing more.
              </p>
              <p style={{ fontSize: 16, color: 'var(--color-muted)', lineHeight: 1.8, margin: 0 }}>
                Aere defines optimal ranges from prospective cohort studies, intervention trials, and mechanistic
                research — the levels associated with the lowest disease risk and longest healthspan.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {PHILOSOPHY.map(({ title, body }) => (
                <div key={title} style={{
                  padding: '22px 24px',
                  background: 'var(--color-surface)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                }}>
                  <div style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: 8, fontSize: 15 }}>
                    {title}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.7 }}>{body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Methodology ── */}
        <section style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '88px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 14,
            }}>
              Methodology
            </p>
            <h2 style={{
              fontFamily: 'var(--font-serif)', fontSize: 40,
              color: 'var(--color-text)', margin: '0 0 16px', letterSpacing: '-0.01em',
            }}>
              How we set optimal ranges
            </h2>
            <p style={{ fontSize: 16, color: 'var(--color-muted)', maxWidth: 520, margin: '0 auto' }}>
              A consistent process applied to every biomarker in the reference.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="method-grid">
            {METHODOLOGY.map(({ num, title, body }) => (
              <div key={title} style={{
                padding: '28px', background: 'var(--color-surface)',
                border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)',
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: 'var(--color-accent-tint)', border: '1px solid var(--color-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, color: 'var(--color-accent)', marginBottom: 18,
                }}>
                  {num}
                </div>
                <div style={{ fontWeight: 600, fontSize: 16, color: 'var(--color-text)', marginBottom: 10 }}>
                  {title}
                </div>
                <div style={{ fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.75 }}>{body}</div>
              </div>
            ))}
          </div>
        </div>
        </section>

        {/* ── Interactive reference ── */}
        <ScienceClient biomarkers={BIOMARKERS} categories={CATEGORIES} />

        {/* ── Disclaimer + Footer (dark) ── */}
        <section style={{
          background: 'var(--color-bg-deep)',
        }}>
          <div style={{ maxWidth: 780, margin: '0 auto', padding: '56px 24px 24px', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.85, margin: 0 }}>
              <strong style={{ color: 'var(--color-muted)' }}>Medical disclaimer:</strong>{' '}
              This reference is for educational purposes only and does not constitute medical advice.
              Optimal ranges are intended to inform conversations with your healthcare provider, not replace clinical
              judgment. Individual variation, medications, and health conditions significantly affect biomarker
              interpretation. Always consult a qualified physician before making health decisions based on lab results.
            </p>
          </div>
          <footer style={{
            borderTop: '1px solid var(--color-border)',
            marginTop: 32,
            padding: '24px 24px', textAlign: 'center',
          }}>
            <p style={{ fontSize: 13, color: 'var(--color-text-dim)', margin: 0 }}>
              © {new Date().getFullYear()} Aere Health, Inc.{' '}
              ·{' '}
              <a href="/" style={{ color: 'var(--color-text-dim)', textDecoration: 'none' }}>aere.health</a>
            </p>
          </footer>
        </section>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .phil-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .method-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
