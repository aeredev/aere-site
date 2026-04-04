'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { CheckCircle, Lock } from 'lucide-react'

export default function InsightPage() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.')
        setState('error')
        return
      }

      setState('success')
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setState('error')
    }
  }

  return (
    <>
      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(245,244,240,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E2E0D8',
        height: 60,
        display: 'flex', alignItems: 'center',
        padding: '0 32px',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 22, color: '#c87cff',
          letterSpacing: '-0.03em', fontWeight: 400,
          textDecoration: 'none', flexShrink: 0,
        }}>
          Aere.
        </Link>
        <div style={{ flex: 1 }} />
        <Link href="/" style={{
          fontSize: 13.5, color: '#7A7770',
          textDecoration: 'none', fontFamily: 'var(--font-sans)',
          transition: 'color 0.15s',
        }}>
          Home
        </Link>
      </nav>

      <main style={{
        position: 'relative',
        backgroundColor: '#F5F4F0',
        minHeight: '100vh',
        paddingTop: 60,
      }}>
        {/* ── HERO ── */}
        <section style={{
          textAlign: 'center',
          padding: 'clamp(56px, 8vw, 100px) 24px 0',
        }}>
          {/* Eyebrow pill */}
          <div className="fade-up-1" style={{
            display: 'inline-block',
            background: '#F5EAFF',
            color: '#c87cff',
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '4px 14px',
            borderRadius: 20,
            marginBottom: 24,
          }}>
            THE AEREINSIGHT PHILOSOPHY
          </div>

          {/* Headline */}
          <h1 className="fade-up-2" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 400,
            color: '#1A1917',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            maxWidth: 600,
            margin: '0 auto 20px',
          }}>
            The insight only Aere can generate.
          </h1>

          {/* Subhead */}
          <p className="fade-up-3" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            color: '#7A7770',
            lineHeight: 1.6,
            maxWidth: 520,
            margin: '0 auto',
          }}>
            Most health apps tell you what your numbers are. AereInsight tells you what your numbers mean — and what&apos;s actually driving them.
          </p>

          {/* Violet divider */}
          <div style={{
            width: 60, height: 2,
            background: '#c87cff',
            margin: '40px auto 0',
            borderRadius: 1,
          }} />
        </section>

        {/* ── STAT BAR ── */}
        <section style={{
          borderTop: '1px solid #E2E0D8',
          borderBottom: '1px solid #E2E0D8',
          padding: '32px 24px',
          margin: 'clamp(40px, 6vw, 72px) 0 0',
        }}>
          <div className="stat-bar" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            maxWidth: 720,
            margin: '0 auto',
          }}>
            <StatItem number="126" label="Biomarkers tracked" />
            <StatItem number="Cross-source" label="AI analysis" />
            <StatItem number="Longevity" label="Optimized ranges" />
          </div>
        </section>

        {/* ── ARTICLE BODY ── */}
        <article style={{
          maxWidth: 660,
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 72px) 24px 0',
        }}>
          {/* Section 1 */}
          <SectionHeading number="01">The problem with how health data is usually read.</SectionHeading>

          <Body>For most people, a provider visit means 15 minutes, twice a year. Labs reviewed, ranges checked, flags noted. That&apos;s the reality of modern healthcare — and it&apos;s no one&apos;s fault. It&apos;s the system.</Body>

          <Body>But even the providers who go deeper — the functional medicine physicians, the longevity clinicians, the coaches and trainers who genuinely invest in your outcomes — are working with incomplete information. They see you at a point in time. They may not have your full history. They rarely have visibility into what your sleep looked like the week before your labs, or how your training load correlated with your inflammatory markers over the past year.</Body>

          <Body>The missing ingredient is context. Even the most invested providers often don&apos;t have the longitudinal context that transforms a data point into a pattern — and a pattern into an insight.</Body>

          <Body>Consider something as simple as a lab draw. The instructions say don&apos;t exercise 24-48 hours beforehand. But life doesn&apos;t pause for your labs. You had a long walk with friends the night before. A pickup soccer game. A hard training session. How much did that affect your results? Nobody knows — because nobody was tracking it.</Body>

          <Body>Aere was. Your activity data from Apple Watch or Garmin is timestamped. Your lab draw date is known. The correlation is right there — flagged automatically, surfaced as context, not buried in a footnote you&apos;d never read. That&apos;s the kind of connection that changes how you interpret a result. And it&apos;s the kind of connection that almost never gets made today.</Body>

          <Body>That&apos;s the gap AereInsight is built to close.</Body>

          <Hr />

          {/* Section 2 */}
          <SectionHeading number="02">What cross-source connection actually means.</SectionHeading>

          <Body>This is the capability that makes AereInsight different from every other health AI.</Body>

          <Body>Most AI health tools look at one data source at a time. They analyze your labs. Or your sleep. Or your activity. They don&apos;t connect them.</Body>

          <Body>AereInsight holds your entire health picture simultaneously — labs going back years, daily wearable data, sleep architecture, activity patterns, nutrition, body composition — and looks for the patterns that live at the intersection of these sources.</Body>

          <Body>The insights that matter most rarely come from a single data point. They come from the connections between them.</Body>

          {/* Pull Quotes */}
          <PullQuote>Your testosterone has dropped 18% over six months. In that same period, your Oura deep sleep declined from an average of 1h 42m to 58 minutes per night, and your dietary zinc was consistently below the recommended threshold. This pattern is consistent with sleep-mediated testosterone suppression — a well-documented pathway. Your labs and your sleep data are telling the same story.</PullQuote>

          <PullQuote>Your fasting glucose has risen across your last four panels. Your 8 Sleep data shows elevated body temperature in the second half of the night on days when you eat within two hours of sleep. Late eating may be affecting your insulin sensitivity — the correlation in your own data suggests this is worth investigating.</PullQuote>

          <PullQuote>Your hs-CRP has dropped 60% over the past year — from 2.1 mg/L to 0.4 mg/L. In that same period, your training sessions have been consistent, your sleep scores improved, and your dietary pattern shifted. Whatever combination of changes you made is working. This trajectory is associated with meaningfully reduced inflammatory aging.</PullQuote>

          <Body>None of those insights come from looking at a single number. All of them require holding multiple data sources simultaneously and finding the thread that connects them. That&apos;s what AereInsight does.</Body>

          <Hr />

          {/* Section 3 */}
          <SectionHeading number="03">The longevity lens.</SectionHeading>

          <Body>Standard lab reference ranges were designed for sick care — to identify disease, not to optimize healthspan. A result marked &ldquo;Normal&rdquo; means you fall within the range of the general population. It tells you nothing about whether you&apos;re on the right trajectory for a long, well life.</Body>

          <Body>AereInsight applies a different standard.</Body>

          <Body>We reference longevity-optimal ranges — informed by the work of physicians and researchers focused on healthspan extension, including functional medicine and precision longevity medicine. These ranges are tighter, more demanding, and more predictive of long-term outcomes than standard lab normals.</Body>

          <Body>When we show you your ApoB, we&apos;re not just telling you whether you&apos;re &ldquo;in range.&rdquo; We&apos;re telling you whether you&apos;re approaching the threshold that longevity-focused clinicians consider optimal for cardiovascular longevity given your age, sex, and family history. Those are different numbers with different implications.</Body>

          <Body>We show both — your lab&apos;s printed reference range and Aere&apos;s longevity-optimal range — because transparency matters. You should understand the standard we&apos;re applying and why.</Body>

          <Hr />

          {/* Section 4 */}
          <SectionHeading number="04">What AereInsight will never do.</SectionHeading>

          <Body>AereInsight is a health intelligence tool. It is not a provider, a diagnostician, or a medical advisor.</Body>

          <Body>It will never tell you what medication to take. It will never diagnose a condition. It will never replace the judgment of a qualified clinician who knows you, examines you, and takes responsibility for your care.</Body>

          <Body>What it will do is help you walk into that provider&apos;s office with a complete picture of your health — years of context, clear trends, identified patterns — so that 15 minutes becomes genuinely useful instead of starting from scratch.</Body>

          <Body>The goal is not to replace your provider. The goal is to make every conversation with your provider more informed, more productive, and more oriented toward what actually matters: how long and how well you live.</Body>

          <Hr />

          {/* Section 5 — Three standards */}
          <SectionHeading number="05">The standard we hold ourselves to.</SectionHeading>

          <Body>Every insight AereInsight generates must clear three bars:</Body>

          <div className="insight-cards" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
            margin: '40px 0 0',
          }}>
            <StandardCard title="Grounded in your data.">
              Not generic health advice. Not population statistics applied to your situation. Your actual numbers, your actual trends, your actual patterns.
            </StandardCard>
            <StandardCard title="Honest about uncertainty.">
              When a connection is suggestive but not conclusive, we say so. When something warrants a conversation with your provider rather than a recommendation from an AI, we say that too. Overconfidence in health AI is dangerous. We&apos;d rather be honest about the limits of what we know than project false certainty.
            </StandardCard>
            <StandardCard title="Oriented toward action.">
              An insight that doesn&apos;t point toward something you can do — a conversation to have, a behavior to investigate, a trend to monitor — is just information. AereInsight aims to be useful, not just informative.
            </StandardCard>
          </div>
        </article>

        {/* ── PRIVACY BAND ── */}
        <section style={{
          background: '#F5EAFF',
          padding: 'clamp(48px, 6vw, 72px) 24px',
          marginTop: 'clamp(56px, 7vw, 80px)',
          textAlign: 'center',
        }}>
          <Lock size={28} color="#c87cff" strokeWidth={1.75} style={{ marginBottom: 20 }} />
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 24,
            fontWeight: 400,
            color: '#1A1917',
            letterSpacing: '-0.02em',
            lineHeight: 1.3,
            margin: '0 0 20px',
          }}>
            A note on privacy.
          </h2>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: '#1A1917',
              lineHeight: 1.8,
              margin: '0 0 20px',
            }}>
              Your health data is yours. AereInsight generates insights using your data, for you. We do not use your health data to train models, share it with third parties, or sell it in any form.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: '#1A1917',
              lineHeight: 1.8,
              margin: '0 0 20px',
            }}>
              The intelligence AereInsight develops about your health stays with you — stored in your account, accessible only to you, shareable only with the providers you explicitly choose.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: '#1A1917',
              lineHeight: 1.8,
              margin: 0,
            }}>
              Own Your Health is not just a tagline. It&apos;s the principle every product decision is measured against.
            </p>
          </div>
        </section>

        {/* ── CTA SECTION (dark) ── */}
        <section style={{
          background: '#1A1917',
          padding: 'clamp(56px, 8vw, 88px) 24px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 400,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            margin: '0 0 12px',
          }}>
            See AereInsight in action.
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            color: '#7A7770',
            margin: '0 0 32px',
          }}>
            Join the waitlist for early access.
          </p>

          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            {state === 'success' ? (
              <p className="fade-up-1" style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                color: '#c87cff',
                fontWeight: 500,
              }}>
                You&apos;re on the list. We&apos;ll be in touch.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-bar" style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid #3A3835',
                  maxWidth: 480,
                  width: '100%',
                }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="email-input"
                    style={{
                      flex: 1,
                      background: '#242220',
                      border: 'none',
                      outline: 'none',
                      padding: '0 20px',
                      fontSize: 15,
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      minHeight: 52,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    style={{
                      background: '#c87cff',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0 28px',
                      fontSize: 15,
                      fontWeight: 500,
                      fontFamily: 'var(--font-sans)',
                      cursor: state === 'loading' ? 'wait' : 'pointer',
                      opacity: state === 'loading' ? 0.7 : 1,
                      transition: 'opacity 0.15s',
                      whiteSpace: 'nowrap',
                      minHeight: 52,
                    }}
                  >
                    {state === 'loading' ? 'Joining...' : 'Get Early Access'}
                  </button>
                </div>
                {state === 'error' && (
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    color: '#E87C6C',
                    marginTop: 12,
                  }}>
                    {errorMsg}
                  </p>
                )}
              </form>
            )}
          </div>
        </section>

        {/* ── DISCLAIMER ── */}
        <div style={{
          background: '#F5F4F0',
          padding: '32px 24px 0',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            color: '#7A7770',
            lineHeight: 1.6,
            margin: 0,
          }}>
            AereInsight is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare provider for medical decisions.
          </p>
        </div>

        {/* ── FOOTER ── */}
        <footer style={{
          background: '#F5F4F0',
          borderTop: '1px solid #E2E0D8',
          padding: '24px 24px 32px',
          marginTop: 24,
          textAlign: 'center',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 14,
        }}>
          <div style={{
            display: 'flex', gap: 24, alignItems: 'center',
            fontFamily: 'var(--font-sans)', fontSize: 13,
          }}>
            <Link href="/" style={{ color: '#7A7770', textDecoration: 'none', transition: 'color 0.15s' }}>Home</Link>
            <Link href="/insight" style={{ color: '#7A7770', textDecoration: 'none', transition: 'color 0.15s' }}>How It Works</Link>
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            color: '#7A7770',
            margin: 0,
          }}>
            aere.health &middot; &copy; 2026 Aere Health Inc
          </p>
        </footer>
      </main>

      <style>{`
        .email-input::placeholder {
          color: #5A5855;
        }
        @media (max-width: 560px) {
          .form-bar {
            flex-direction: column !important;
            border: none !important;
            border-radius: 0 !important;
            overflow: visible !important;
            gap: 10px;
          }
          .form-bar .email-input {
            border-radius: 10px !important;
            border: 1px solid #3A3835 !important;
            width: 100% !important;
            height: 52px !important;
            min-height: 52px !important;
          }
          .form-bar button {
            border-radius: 10px !important;
            width: 100% !important;
            height: 52px !important;
            min-height: 52px !important;
          }
          .insight-cards {
            grid-template-columns: 1fr !important;
          }
          .stat-bar {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </>
  )
}

/* ---------- Sub-components ---------- */

function Hr() {
  return (
    <hr style={{
      border: 'none',
      borderTop: '1px solid #E2E0D8',
      margin: 'clamp(40px, 5vw, 56px) 0',
    }} />
  )
}

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <span style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 11,
        color: '#c87cff',
        display: 'block',
        marginBottom: 8,
      }}>
        {number}
      </span>
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 28,
        fontWeight: 400,
        color: '#1A1917',
        letterSpacing: '-0.02em',
        lineHeight: 1.25,
        margin: 0,
      }}>
        {children}
      </h2>
    </div>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: '#1A1917',
      lineHeight: 1.8,
      margin: '0 0 24px',
    }}>
      {children}
    </p>
  )
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote style={{
      background: '#FFFFFF',
      border: '1px solid #E2E0D8',
      borderLeft: '3px solid #c87cff',
      borderRadius: 16,
      padding: '24px 28px',
      margin: '28px 0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
    }}>
      <span style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#c87cff',
        display: 'block',
        marginBottom: 12,
      }}>
        AEREINSIGHT EXAMPLE
      </span>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontStyle: 'italic',
        color: '#1A1917',
        lineHeight: 1.7,
        margin: 0,
      }}>
        &ldquo;{children}&rdquo;
      </p>
    </blockquote>
  )
}

function StandardCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid #E2E0D8',
      borderRadius: 16,
      padding: 24,
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <CheckCircle size={20} color="#c87cff" strokeWidth={1.75} />
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 18,
        fontWeight: 400,
        color: '#1A1917',
        letterSpacing: '-0.01em',
        margin: 0,
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: '#7A7770',
        lineHeight: 1.7,
        margin: 0,
      }}>
        {children}
      </p>
    </div>
  )
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 32,
        color: '#c87cff',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: 6,
      }}>
        {number}
      </div>
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: '#7A7770',
        letterSpacing: '0.02em',
      }}>
        {label}
      </div>
    </div>
  )
}
