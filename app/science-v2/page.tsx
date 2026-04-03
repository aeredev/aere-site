import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ScienceClientV2 from './ScienceClientV2'
import { BIOMARKERS, CATEGORIES } from '@/lib/biomarker-reference'

export const metadata: Metadata = {
  title: 'Longevity Biomarker Reference — Aere Health',
  description:
    'The complete reference for optimal longevity biomarker ranges, with full citations from peer-reviewed research. Published by Aere, The Healthspan Intelligence Platform.',
  openGraph: {
    title: 'Longevity Biomarker Reference — Aere Health',
    description:
      'The complete reference for optimal longevity biomarker ranges, with full citations from peer-reviewed research.',
    url: 'https://aere.health/science',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Longevity Biomarker Reference — Aere Health',
    description:
      'The complete reference for optimal longevity biomarker ranges, with full citations from peer-reviewed research.',
  },
  alternates: {
    canonical: 'https://aere.health/science',
  },
}

const DISCLAIMER_TEXT = "Aere\u2019s longevity ranges are derived from functional medicine and longevity research and represent optimal targets for healthspan, not clinical diagnostic thresholds. They are not a substitute for medical advice. Always discuss your results with a qualified healthcare provider. Individual optimal ranges may vary based on age, sex, genetics, medications, and health conditions."

const PHILOSOPHY = [
  {
    title: 'Evidence-first',
    body: 'Every optimal range cites peer-reviewed research. Confidence levels reflect the quality and consistency of the underlying evidence — strong, moderate, or emerging.',
    color: 'var(--color-success)',
    bg: 'var(--color-success-tint)',
  },
  {
    title: 'Longevity-oriented',
    body: 'We prioritize studies measuring long-term outcomes — all-cause mortality, cardiovascular events, cognitive decline — not just absence of clinical diagnosis.',
    color: 'var(--color-accent)',
    bg: 'var(--color-accent-tint)',
  },
  {
    title: 'Individually contextualized',
    body: 'Sex-specific ranges, age-adjusted norms, and population differences are incorporated where the evidence supports them rather than applying averaged reference ranges.',
    color: 'var(--color-blue)',
    bg: 'var(--color-blue-tint)',
  },
]

const METHODOLOGY_ITEMS = [
  {
    num: '1',
    title: 'Source hierarchy',
    body: 'Peer-reviewed meta-analyses and large prospective cohorts (NEJM, JAMA, Lancet, BMJ) take precedence. Clinical guidelines and expert longevity physicians inform gaps where RCT data is limited.',
    color: 'var(--color-accent)',
    bg: 'var(--color-accent-tint)',
  },
  {
    num: '2',
    title: 'Confidence tiers',
    body: 'Strong — consistent evidence across multiple large studies. Moderate — single high-quality study or consistent smaller trials. Emerging — mechanistic rationale with limited direct human outcome data.',
    color: 'var(--color-amber)',
    bg: 'var(--color-amber-tint)',
  },
  {
    num: '3',
    title: 'Sex-specific ranges',
    body: 'Where physiology differs (CBC, hormones, iron studies, lipid fractions), we apply sex-specific optimal ranges grounded in sex-stratified data, not population averages.',
    color: 'var(--color-blue)',
    bg: 'var(--color-blue-tint)',
  },
  {
    num: '4',
    title: 'Age-adjusted targets',
    body: 'Several biomarkers (DHEA-S, IGF-1, testosterone, AMH, PSA) shift meaningfully with age. Where evidence supports it, we note age-adjusted targets in context of biological age.',
    color: 'var(--color-success)',
    bg: 'var(--color-success-tint)',
  },
]

export default function SciencePageV2() {
  const citationCount = BIOMARKERS.reduce((sum, b) => sum + b.citations.length, 0)

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Longevity Biomarker Reference',
    description: 'The complete reference for optimal longevity biomarker ranges with peer-reviewed citations.',
    publisher: {
      '@type': 'Organization',
      name: 'Aere Health',
      url: 'https://aere.health',
    },
    about: {
      '@type': 'MedicalCondition',
      name: 'Preventive Health and Longevity',
    },
    mainEntity: {
      '@type': 'Dataset',
      name: 'Aere Longevity Biomarker Reference',
      description: `${BIOMARKERS.length} biomarkers with longevity-optimized ranges and ${citationCount}+ peer-reviewed citations.`,
      variableMeasured: BIOMARKERS.slice(0, 50).map(b => ({
        '@type': 'PropertyValue',
        name: b.name,
        unitText: b.unit,
        description: b.why_it_matters.slice(0, 160),
      })),
    },
  }

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingTop: 60 }}>

        {/* ── Top Disclaimer ── */}
        <section style={{
          background: 'var(--color-amber-tint)',
          borderBottom: '1px solid rgba(196,129,58,0.2)',
        }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '14px 24px', textAlign: 'center' }}>
            <p style={{ fontSize: 12, color: 'var(--color-amber)', lineHeight: 1.7, margin: 0 }}>
              {DISCLAIMER_TEXT}
            </p>
          </div>
        </section>

        {/* ── Hero ── */}
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px 60px', textAlign: 'center' }}>
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
            color: 'var(--color-text)', margin: '0 0 20px',
          }}>
            Every Biomarker.<br />Every Range. Every Reason.
          </h1>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(20px, 3vw, 28px)',
            lineHeight: 1.3, letterSpacing: '-0.01em',
            color: 'var(--color-accent)', margin: '0 0 24px',
            fontWeight: 400,
          }}>
            The Aere Longevity Biomarker Reference
          </h2>
          <p style={{
            fontSize: 19, color: 'var(--color-muted)',
            lineHeight: 1.75, maxWidth: 640, margin: '0 auto 56px',
          }}>
            Lab reference ranges define what&apos;s statistically common. Aere defines what&apos;s actually optimal —
            ranges derived from the research that predicts who lives longest and healthiest.
          </p>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 56, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { value: BIOMARKERS.length, label: 'Biomarkers' },
              { value: `${citationCount}+`, label: 'Citations' },
              { value: Object.keys(CATEGORIES).length, label: 'Categories' },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 44, fontFamily: 'var(--font-serif)',
                  color: 'var(--color-text)', lineHeight: 1,
                }}>
                  {value}
                </div>
                <div style={{ fontSize: 13, color: 'var(--color-muted)', marginTop: 6, fontWeight: 500 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Philosophy (from V1) ── */}
        <section style={{
          background: 'var(--color-surface)',
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
              {PHILOSOPHY.map(({ title, body, color, bg }) => (
                <div key={title} style={{
                  padding: '22px 24px',
                  background: bg,
                  borderRadius: 'var(--radius-lg)',
                  borderLeft: `3px solid ${color}`,
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

        {/* ── Intro cards ── */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, textAlign: 'left' }} className="intro-cards">
            <div style={{
              padding: '28px', background: 'var(--color-surface)',
              border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)',
              borderTop: '3px solid var(--color-accent)',
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--color-text)', marginBottom: 12, lineHeight: 1.2 }}>
                Our Sources
              </div>
              <p style={{ fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.75, margin: 0 }}>
                Every range in this reference is derived from peer-reviewed research, longevity medicine literature, and the published protocols of leading longevity physicians including Peter Attia, Rhonda Patrick, and Valter Longo.
              </p>
            </div>
            <div style={{
              padding: '28px', background: 'var(--color-surface)',
              border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)',
              borderTop: '3px solid var(--color-success)',
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--color-text)', marginBottom: 12, lineHeight: 1.2 }}>
                Living Document
              </div>
              <p style={{ fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.75, margin: 0 }}>
                Health science evolves. We review and update this reference annually — or when significant new research emerges. Every entry shows its last updated date and version.
              </p>
            </div>
            <div style={{
              padding: '28px', background: 'var(--color-surface)',
              border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)',
              borderTop: '3px solid var(--color-blue)',
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--color-text)', marginBottom: 12, lineHeight: 1.2 }}>
                What We Don&apos;t Do
              </div>
              <p style={{ fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.75, margin: 0 }}>
                We don&apos;t diagnose. We don&apos;t replace your physician. We provide context — the kind of context that a 15-minute doctor&apos;s visit rarely has time for — to make you a better-informed participant in your own healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* ── Methodology ── */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14,
            }}>
              Methodology
            </p>
            <h2 style={{
              fontFamily: 'var(--font-serif)', fontSize: 40,
              color: 'var(--color-text)', margin: '0 0 16px', letterSpacing: '-0.01em',
            }}>
              How we derive our ranges
            </h2>
            <p style={{ fontSize: 16, color: 'var(--color-muted)', maxWidth: 520, margin: '0 auto' }}>
              A consistent, transparent process applied to every biomarker in the reference.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="method-grid">
            {METHODOLOGY_ITEMS.map(({ num, title, body, color, bg }) => (
              <div key={title} style={{
                padding: '28px', background: 'var(--color-surface)',
                border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)',
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: bg, border: `1px solid ${color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, color, marginBottom: 18,
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
        </section>

        {/* ── Interactive reference ── */}
        <ScienceClientV2 biomarkers={BIOMARKERS} categories={CATEGORIES} />

        {/* ── Bottom Disclaimer ── */}
        <section style={{
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
        }}>
          <div style={{ maxWidth: 780, margin: '0 auto', padding: '48px 24px', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.85, margin: 0 }}>
              <strong style={{ color: 'var(--color-text)' }}>Medical disclaimer:</strong>{' '}
              {DISCLAIMER_TEXT}
            </p>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{
          borderTop: '1px solid var(--color-border)',
          padding: '32px 24px', textAlign: 'center',
        }}>
          <p style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.8, margin: 0 }}>
            This reference is reviewed annually. Citations link to PubMed where available.
            <br />
            To suggest a correction or additional citation, contact{' '}
            <a href="mailto:science@aere.health" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>
              science@aere.health
            </a>
          </p>
          <p style={{ fontSize: 13, color: 'var(--color-muted)', margin: '16px 0 0' }}>
            © {new Date().getFullYear()} Aere Health, Inc.{' '}
            ·{' '}
            <a href="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>aere.health</a>
          </p>
        </footer>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .phil-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .intro-cards { grid-template-columns: 1fr !important; }
          .method-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .method-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
