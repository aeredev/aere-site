'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import SectionObserver from '@/components/SectionObserver'
import {
  FileText, BarChart3, Brain, Share2, Activity, Shield,
  Upload, Search, TrendingUp, Lock, Users, Zap,
  CheckCircle, ArrowRight, ChevronRight,
} from 'lucide-react'

/* ── Waitlist form hook ── */
function useWaitlistForm() {
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
      if (!res.ok) { setErrorMsg(data.error || 'Something went wrong.'); setState('error'); return }
      setState('success')
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setState('error')
    }
  }

  return { email, setEmail, state, errorMsg, handleSubmit }
}

/* ════════════════════════════════════════════════════════════════════════════ */

export default function MarketingSite() {
  const heroForm = useWaitlistForm()
  const ctaForm = useWaitlistForm()

  return (
    <>
      <Nav />

      {/* ── HERO (dark) ── */}
      <section id="hero" style={{
        position: 'relative',
        backgroundColor: '#1A1917',
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '120px 24px 80px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Grain */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.15,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat', backgroundSize: '128px 128px',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, width: '100%' }}>
          <img
            src="/brand/logo-transparent-violet.svg"
            alt="Aere. Own Your Health"
            className="fade-up-1"
            style={{ width: 'clamp(140px, 14vw, 200px)', height: 'auto', marginBottom: 'clamp(40px, 4vw, 64px)' }}
          />

          <h1 className="fade-up-2 hero-headline" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 5.5vw, 72px)',
            fontWeight: 400, color: '#FFFFFF',
            letterSpacing: '-0.03em', lineHeight: 1.1,
            margin: '0 0 24px',
          }}>
            <span style={{ display: 'block' }}>Your entire health history.</span>
            <span style={{ display: 'block' }}>Intelligence that connects it all.</span>
          </h1>

          <p className="fade-up-3" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(15px, 1.2vw, 18px)',
            color: '#A8A49C', lineHeight: 1.6,
            maxWidth: 560, margin: '0 auto 40px',
          }}>
            Aere is the healthspan intelligence platform — a secure home for your health records,
            wearable data, and biomarkers, with AI that finds the patterns that matter for how long and how well you live.
          </p>

          <WaitlistForm form={heroForm} variant="dark" />

          <p className="fade-up-3" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11, fontWeight: 500,
            color: '#5A5855', letterSpacing: '0.1em',
            textTransform: 'uppercase', marginTop: 24,
          }}>
            THE HEALTHSPAN INTELLIGENCE PLATFORM
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}>
          <div style={{
            width: 1, height: 32, background: 'linear-gradient(to bottom, transparent, #3A3835)',
          }} />
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <section style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E0D8',
        padding: '28px 24px',
      }}>
        <div style={{
          maxWidth: 900, margin: '0 auto',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 'clamp(32px, 5vw, 64px)', flexWrap: 'wrap',
        }}>
          {[
            { value: '110+', label: 'Biomarkers tracked' },
            { value: 'HIPAA', label: 'Compliant' },
            { value: 'Cross-source', label: 'AI intelligence' },
            { value: 'Longevity', label: 'Optimized ranges' },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 2.5vw, 28px)',
                color: '#c87cff', letterSpacing: '-0.02em', lineHeight: 1,
              }}>{value}</div>
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: 11, color: '#7A7770',
                marginTop: 4, letterSpacing: '0.02em',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <SectionObserver>
        <section style={{ background: '#F5F4F0', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <Eyebrow>The Problem</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 400, color: '#1A1917',
              letterSpacing: '-0.02em', lineHeight: 1.15,
              margin: '0 0 24px',
            }}>
              Your health data is everywhere.<br />Your intelligence is nowhere.
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 16,
              color: '#7A7770', lineHeight: 1.8, maxWidth: 580, margin: '0 auto',
            }}>
              Medical records scattered across dozens of providers. Wearable data siloed in Oura, Apple Health,
              Garmin. Labs in Quest. Your doctor sees you for 15 minutes, twice a year. Nobody is connecting
              all of this to tell you what it means for how long and how well you&apos;ll live.
            </p>
          </div>
        </section>
      </SectionObserver>

      {/* ── FEATURES ── */}
      <SectionObserver>
        <section id="features" style={{ background: '#FFFFFF', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <Eyebrow>The Platform</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 400, color: '#1A1917',
                letterSpacing: '-0.02em', lineHeight: 1.15,
                margin: '0 0 16px',
              }}>
                Everything you need to own your health.
              </h2>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: 16,
                color: '#7A7770', lineHeight: 1.6, maxWidth: 520, margin: '0 auto',
              }}>
                Six layers of intelligence, built on one foundation: your data, under your control.
              </p>
            </div>

            <div className="feature-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
            }}>
              <FeatureCard
                icon={<FileText size={22} />}
                title="AereVault"
                subtitle="Your health record home"
                description="Upload any medical document — PDFs, images, FHIR imports. AI extracts and structures everything: lab values, diagnoses, medications, procedures. Years of records, one searchable timeline."
              />
              <FeatureCard
                icon={<BarChart3 size={22} />}
                title="Biomarkers"
                subtitle="Track what matters"
                description="110+ biomarkers with trend charts, longevity-optimal ranges, and colored status bands. Not just normal — actually optimal. See your trajectory over years, not just your last draw."
              />
              <FeatureCard
                icon={<Brain size={22} />}
                title="AereInsight"
                subtitle="AI that connects it all"
                description="Ask questions across your entire health history. AI holds your labs, wearables, sleep, and nutrition simultaneously — finding patterns that a 15-minute appointment never could."
              />
              <FeatureCard
                icon={<Activity size={22} />}
                title="AerePulse"
                subtitle="Daily wearable intelligence"
                description="Oura, Apple Watch, Garmin, Whoop, 8 Sleep, CGM — all connected. Daily readiness scores, HRV trends, sleep architecture, recovery metrics. Context for every decision."
              />
              <FeatureCard
                icon={<Share2 size={22} />}
                title="AereShare"
                subtitle="Secure provider sharing"
                description="Time-limited, passcode-protected share links for any provider. AI-generated pre-visit briefs. Your new specialist gets complete context instantly — no starting from scratch."
              />
              <FeatureCard
                icon={<Shield size={22} />}
                title="Privacy-first"
                subtitle="HIPAA compliant"
                description="BAAs signed with every infrastructure partner. Audit logging on all access. Row-level security. Soft deletes. Your data is yours — we don't train models on it, sell it, or share it."
              />
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ── HOW IT WORKS ── */}
      <SectionObserver>
        <section id="how-it-works" style={{ background: '#F5F4F0', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <Eyebrow>How It Works</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 400, color: '#1A1917',
                letterSpacing: '-0.02em', lineHeight: 1.15,
                margin: '0 0 16px',
              }}>
                Three steps to a complete picture.
              </h2>
            </div>

            <div className="steps-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
            }}>
              <StepCard
                number="01"
                icon={<Upload size={24} />}
                title="Upload everything"
                description="PDFs, images, lab reports, imaging — drop them in. AI parses and structures your records automatically. Connect wearables with one tap."
              />
              <StepCard
                number="02"
                icon={<Search size={24} />}
                title="See the connections"
                description="AereInsight holds your entire health picture simultaneously — labs, sleep, activity, nutrition — and finds the patterns that live between data sources."
              />
              <StepCard
                number="03"
                icon={<TrendingUp size={24} />}
                title="Act on what matters"
                description="Longevity-oriented insights, clear trends, identified patterns. Walk into your next appointment with years of context instead of starting from scratch."
              />
            </div>

            {/* Insight teaser */}
            <div style={{
              maxWidth: 700, margin: '56px auto 0',
              background: '#FFFFFF', border: '1px solid #E2E0D8',
              borderLeft: '3px solid #c87cff',
              borderRadius: 16, padding: '24px 28px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
            }}>
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: '#c87cff', marginBottom: 12,
              }}>
                AEREINSIGHT EXAMPLE
              </div>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: 14,
                fontStyle: 'italic', color: '#1A1917', lineHeight: 1.7, margin: '0 0 16px',
              }}>
                &ldquo;Your testosterone has dropped 18% over six months. In that same period, your Oura deep sleep
                declined from 1h 42m to 58 minutes per night, and your dietary zinc was consistently below threshold.
                This pattern is consistent with sleep-mediated testosterone suppression — your labs and sleep data are
                telling the same story.&rdquo;
              </p>
              <Link href="/insight" style={{
                fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
                color: '#c87cff', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 4,
              }}>
                Read more about AereInsight <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ── THE AERE DIFFERENCE ── */}
      <SectionObserver>
        <section style={{ background: '#FFFFFF', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <Eyebrow>Why Aere</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 400, color: '#1A1917',
                letterSpacing: '-0.02em', lineHeight: 1.15,
                margin: '0 0 16px',
              }}>
                Every competitor owns one slice.<br />Aere connects them all.
              </h2>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: 16,
                color: '#7A7770', lineHeight: 1.6, maxWidth: 600, margin: '0 auto',
              }}>
                Oura tracks your sleep. Apple Health stores your steps.
                Aere is the only platform that connects all of it — and applies AI across every source simultaneously
                through a longevity lens.
              </p>
            </div>

            <div className="diff-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16,
            }}>
              {[
                { before: 'Records scattered across 18+ providers', after: 'One secure home for your entire history' },
                { before: 'Doctor sees you 15 min, twice a year', after: 'AI sees everything, every day, never forgets' },
                { before: '"Normal" ranges designed for sick care', after: 'Longevity-optimal ranges for healthspan' },
                { before: 'Wearables, labs, nutrition — all siloed', after: 'AI connects all sources simultaneously' },
                { before: 'Every new provider starts from scratch', after: 'One-tap secure share with complete context' },
                { before: 'Reactive — treat disease after it appears', after: 'Proactive — optimize trajectory before it drifts' },
              ].map(({ before, after }) => (
                <div key={before} style={{
                  display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 12, alignItems: 'center',
                  background: '#F5F4F0', borderRadius: 12, padding: '16px 20px',
                }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#7A7770', lineHeight: 1.5 }}>
                    {before}
                  </span>
                  <ArrowRight size={14} color="#c87cff" style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#1A1917', fontWeight: 500, lineHeight: 1.5 }}>
                    {after}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ── PRICING ── */}
      <SectionObserver>
        <section id="pricing" style={{ background: '#F5F4F0', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <Eyebrow>Pricing</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 400, color: '#1A1917',
                letterSpacing: '-0.02em', lineHeight: 1.15,
                margin: '0 0 16px',
              }}>
                Start free. Upgrade when you&apos;re ready.
              </h2>
            </div>

            <div className="pricing-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
              alignItems: 'start',
            }}>
              <PricingCard
                tier="Free"
                price="$0"
                period=""
                description="Get started with the basics."
                features={[
                  '10 document uploads',
                  'AI parsing & extraction',
                  'Biomarker tracking',
                  'Basic health timeline',
                ]}
              />
              <PricingCard
                tier="AereVault"
                price="$84"
                period="/year"
                description="Your complete health command center."
                features={[
                  'Unlimited document uploads',
                  'Full AI health intelligence',
                  'Longevity-optimal biomarker ranges',
                  'AereShare — secure provider sharing',
                  'AI pre-visit briefs',
                  'Complete health timeline',
                ]}
                highlighted
              />
              <PricingCard
                tier="Aere Full"
                price="$29"
                period="/month"
                description="Everything plus wearables and daily intelligence."
                features={[
                  'Everything in AereVault',
                  'AerePulse — daily wearable dashboard',
                  'Oura, Apple Watch, Garmin, Whoop, 8 Sleep',
                  'CGM & nutrition tracking',
                  'Cross-source AI insights',
                  'Proactive health alerts',
                ]}
                badge="COMING SOON"
              />
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ── FOR PRACTITIONERS ── */}
      <SectionObserver>
        <section id="practitioners" style={{ background: '#FFFFFF', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div className="prac-layout-grid" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
            }}>
              <div>
                <Eyebrow>For Practitioners</Eyebrow>
                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  fontWeight: 400, color: '#1A1917',
                  letterSpacing: '-0.02em', lineHeight: 1.15,
                  margin: '0 0 20px',
                }}>
                  Make every 15 minutes count.
                </h2>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: 16,
                  color: '#7A7770', lineHeight: 1.8, margin: '0 0 32px',
                }}>
                  Your patients arrive with years of context — labs, wearable data, trends, AI-generated
                  pre-visit briefs. No more starting from scratch. No more incomplete histories.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { icon: <Users size={18} />, text: 'Client roster with health scores and flags' },
                    { icon: <Zap size={18} />, text: 'AI pre-visit briefs — complete context in 60 seconds' },
                    { icon: <BarChart3 size={18} />, text: 'Full biomarker history with longitudinal trends' },
                    { icon: <Lock size={18} />, text: 'HIPAA-compliant with full audit trail' },
                    { icon: <Share2 size={18} />, text: 'Patients share exactly what they choose' },
                  ].map(({ icon, text }) => (
                    <div key={text} style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      fontFamily: 'var(--font-sans)', fontSize: 14, color: '#1A1917',
                    }}>
                      <div style={{ color: '#c87cff', flexShrink: 0 }}>{icon}</div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <PracCard
                  label="PRE-VISIT BRIEF"
                  text="Matt S., 38M — annual longevity panel. ApoB trending down (97 → 72 mg/dL), fasting glucose elevated at 94. HRV improved 12% over 90 days. Two items for discussion: glucose trajectory and Vitamin D optimization."
                />
                <PracCard
                  label="FLAG"
                  text="Fasting glucose has risen across 4 consecutive panels (82 → 88 → 91 → 94 mg/dL). 8 Sleep data shows late-night body temperature elevations correlated with late eating. Pattern is consistent with developing insulin resistance."
                />
                <div style={{
                  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10,
                }}>
                  {[
                    { label: 'Patients', value: '47' },
                    { label: 'Alerts', value: '3' },
                  ].map(({ label, value }) => (
                    <div key={label} style={{
                      background: '#F5F4F0', borderRadius: 12, padding: '16px 20px',
                      border: '1px solid #E2E0D8',
                    }}>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: '#7A7770', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{label}</div>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, color: '#c87cff', letterSpacing: '-0.02em' }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ── CTA (dark) ── */}
      <section style={{
        background: '#1A1917',
        padding: 'clamp(64px, 8vw, 100px) 24px',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat', backgroundSize: '128px 128px',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 400, color: '#FFFFFF',
            letterSpacing: '-0.02em', lineHeight: 1.15,
            margin: '0 0 12px',
          }}>
            Own Your Health.
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 16,
            color: '#7A7770', margin: '0 0 36px',
          }}>
            Join the waitlist for early access.
          </p>
          <WaitlistForm form={ctaForm} variant="dark" />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: '#1A1917',
        borderTop: '1px solid #2A2926',
        padding: '48px 24px 32px',
      }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
        }} className="footer-grid">
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)', fontSize: 22,
              color: '#c87cff', letterSpacing: '-0.03em', marginBottom: 12,
            }}>Aere.</div>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 13,
              color: '#5A5855', lineHeight: 1.6,
            }}>The healthspan intelligence platform.</p>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, color: '#7A7770', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Product</div>
            <FooterLinks links={[
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'For Practitioners', href: '#practitioners' },
            ]} />
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, color: '#7A7770', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Learn</div>
            <FooterLinks links={[
              { label: 'How It Works', href: '/insight' },
              { label: 'Science Reference', href: '/science' },
            ]} />
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, color: '#7A7770', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Account</div>
            <FooterLinks links={[
              { label: 'Sign in', href: 'https://app.aere.health/login' },
              { label: 'Get started free', href: 'https://app.aere.health/signup' },
            ]} />
          </div>
        </div>

        <div style={{
          maxWidth: 1000, margin: '32px auto 0',
          borderTop: '1px solid #2A2926', paddingTop: 24, textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 11,
            color: '#4A4845', margin: 0,
          }}>
            aere.health &middot; &copy; 2026 Aere Health Inc
          </p>
        </div>
      </footer>

      <style>{`
        .email-input::placeholder { color: #5A5855; }
        @media (max-width: 768px) {
          .hero-headline { white-space: normal !important; }
          .feature-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .diff-grid { grid-template-columns: 1fr !important; }
          .prac-layout-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
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
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  Sub-components                                                           */
/* ═══════════════════════════════════════════════════════════════════════════ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
      letterSpacing: '0.08em', textTransform: 'uppercase',
      color: '#c87cff', marginBottom: 16,
    }}>
      {children}
    </div>
  )
}

function WaitlistForm({ form, variant }: {
  form: ReturnType<typeof useWaitlistForm>
  variant: 'dark' | 'light'
}) {
  const { email, setEmail, state, errorMsg, handleSubmit } = form
  return (
    <div className="fade-up-3" style={{ width: '100%', maxWidth: 480, margin: '0 auto' }}>
      {state === 'success' ? (
        <p className="fade-up-1" style={{
          fontFamily: 'var(--font-sans)', fontSize: 15,
          color: '#c87cff', fontWeight: 500,
        }}>
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-bar" style={{
            display: 'flex', alignItems: 'stretch',
            borderRadius: 12, overflow: 'hidden',
            border: `1px solid ${variant === 'dark' ? '#3A3835' : '#E2E0D8'}`,
            maxWidth: 480, width: '100%',
          }}>
            <input
              type="email" placeholder="Enter your email"
              value={email} onChange={e => setEmail(e.target.value)} required
              className="email-input"
              style={{
                flex: 1, background: variant === 'dark' ? '#242220' : '#FFFFFF',
                border: 'none', outline: 'none', padding: '0 20px',
                fontSize: 15, color: variant === 'dark' ? '#FFFFFF' : '#1A1917',
                fontFamily: 'var(--font-sans)', minHeight: 52,
              }}
            />
            <button type="submit" disabled={state === 'loading'} style={{
              background: '#c87cff', color: '#ffffff', border: 'none',
              padding: '0 28px', fontSize: 15, fontWeight: 500,
              fontFamily: 'var(--font-sans)',
              cursor: state === 'loading' ? 'wait' : 'pointer',
              opacity: state === 'loading' ? 0.7 : 1,
              transition: 'opacity 0.15s', whiteSpace: 'nowrap', minHeight: 52,
            }}>
              {state === 'loading' ? 'Joining...' : 'Get Early Access'}
            </button>
          </div>
          {state === 'error' && (
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#E87C6C', marginTop: 12 }}>
              {errorMsg}
            </p>
          )}
        </form>
      )}
    </div>
  )
}

function FeatureCard({ icon, title, subtitle, description }: {
  icon: React.ReactNode; title: string; subtitle: string; description: string
}) {
  return (
    <div style={{
      background: '#F5F4F0', border: '1px solid #E2E0D8',
      borderRadius: 16, padding: 'clamp(24px, 2.5vw, 32px)',
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      <div style={{ color: '#c87cff' }}>{icon}</div>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 400,
          color: '#1A1917', letterSpacing: '-0.01em', margin: '0 0 2px',
        }}>{title}</h3>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 12,
          color: '#c87cff', fontWeight: 500, margin: 0,
        }}>{subtitle}</p>
      </div>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: 13.5,
        color: '#7A7770', lineHeight: 1.7, margin: 0,
      }}>{description}</p>
    </div>
  )
}

function StepCard({ number, icon, title, description }: {
  number: string; icon: React.ReactNode; title: string; description: string
}) {
  return (
    <div style={{
      background: '#FFFFFF', border: '1px solid #E2E0D8',
      borderRadius: 16, padding: 'clamp(24px, 2.5vw, 32px)',
      display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: '#F5EAFF', border: '1px solid rgba(200,124,255,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#c87cff',
        }}>{icon}</div>
        <span style={{
          fontFamily: 'var(--font-serif)', fontSize: 11,
          color: '#c87cff',
        }}>{number}</span>
      </div>
      <h3 style={{
        fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 400,
        color: '#1A1917', letterSpacing: '-0.01em', margin: 0,
      }}>{title}</h3>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: 14,
        color: '#7A7770', lineHeight: 1.7, margin: 0,
      }}>{description}</p>
    </div>
  )
}

function PricingCard({ tier, price, period, description, features, highlighted, badge }: {
  tier: string; price: string; period: string; description: string
  features: string[]; highlighted?: boolean; badge?: string
}) {
  return (
    <div style={{
      background: '#FFFFFF',
      border: highlighted ? '2px solid #c87cff' : '1px solid #E2E0D8',
      borderRadius: 16, padding: 'clamp(28px, 3vw, 36px)',
      position: 'relative',
      boxShadow: highlighted ? '0 4px 24px rgba(200,124,255,0.15)' : undefined,
    }}>
      {badge && (
        <div style={{
          position: 'absolute', top: 16, right: 16,
          background: '#F5EAFF', color: '#c87cff',
          fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
          letterSpacing: '0.06em', padding: '3px 10px', borderRadius: 20,
        }}>{badge}</div>
      )}
      <div style={{
        fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600,
        color: '#1A1917', marginBottom: 8,
      }}>{tier}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 8 }}>
        <span style={{
          fontFamily: 'var(--font-serif)', fontSize: 40,
          color: '#1A1917', letterSpacing: '-0.03em',
        }}>{price}</span>
        {period && <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 14, color: '#7A7770',
        }}>{period}</span>}
      </div>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: 13,
        color: '#7A7770', lineHeight: 1.5, margin: '0 0 24px',
      }}>{description}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {features.map(f => (
          <div key={f} style={{
            display: 'flex', alignItems: 'flex-start', gap: 8,
            fontFamily: 'var(--font-sans)', fontSize: 13, color: '#1A1917',
          }}>
            <CheckCircle size={15} color="#c87cff" strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
            {f}
          </div>
        ))}
      </div>
    </div>
  )
}

function PracCard({ label, text }: { label: string; text: string }) {
  return (
    <div style={{
      background: '#F5F4F0', border: '1px solid #E2E0D8',
      borderRadius: 12, padding: '16px 20px',
    }}>
      <div style={{
        fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
        letterSpacing: '0.06em', textTransform: 'uppercase',
        color: '#c87cff', marginBottom: 8,
      }}>{label}</div>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: 13,
        color: '#1A1917', lineHeight: 1.65, margin: 0,
      }}>{text}</p>
    </div>
  )
}

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {links.map(({ label, href }) => (
        <Link key={href} href={href} style={{
          fontFamily: 'var(--font-sans)', fontSize: 13,
          color: '#5A5855', textDecoration: 'none',
          transition: 'color 0.15s',
        }}>
          {label}
        </Link>
      ))}
    </div>
  )
}
