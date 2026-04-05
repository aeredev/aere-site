'use client'

import { useState, useEffect, type FormEvent } from 'react'
import Link from 'next/link'
import SectionObserver from '@/components/SectionObserver'
import {
  FlaskConical, Activity, Dna, TrendingUp, Apple, FileText,
  FolderX, Unlink, Clock, CheckCircle, ChevronRight,
  Shield, Lock, Eye, Share2, Ban, Menu, X,
  Sparkles, Users, Zap, BarChart3,
} from 'lucide-react'

/* ── Nav ── */

const NAV_LINKS = [
  { label: 'Features',          href: '/full#features'      },
  { label: 'How It Works',      href: '/full#vault'         },
  { label: 'Pricing',           href: '/full#pricing'       },
  { label: 'For Practitioners', href: '/full#practitioners' },
]

function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'var(--color-nav-bg)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'border-color 0.2s',
        height: 56, display: 'flex', alignItems: 'center', padding: '0 32px',
      }}>
        <Link href="/full#hero" style={{
          fontFamily: 'var(--font-serif)', fontSize: 22,
          color: 'var(--color-accent)', letterSpacing: '-0.03em',
          fontWeight: 400, textDecoration: 'none', flexShrink: 0, marginRight: 40,
        }}>
          Aere.
        </Link>

        <div style={{ display: 'flex', gap: 2, flex: 1 }} className="nav-center">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} style={{
              padding: '6px 16px', borderRadius: 'var(--radius-sm)',
              fontSize: 13.5, color: 'var(--color-muted)',
              textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'color 0.15s, background 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text)'; e.currentTarget.style.background = 'var(--color-surface-2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.background = 'none' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="nav-right">
          <Link href="https://app.aere.health/login" style={{
            fontSize: 13.5, color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
          >Sign in</Link>
          <Link href="https://app.aere.health/signup" style={{
            padding: '8px 18px', background: 'var(--color-accent)', color: 'white',
            borderRadius: 'var(--radius-md)', fontSize: 13.5, fontWeight: 500,
            textDecoration: 'none', whiteSpace: 'nowrap',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(200,124,255,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >Get started free</Link>
        </div>

        <button onClick={() => setMobileOpen(o => !o)} className="hamburger" style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', padding: 4, color: 'var(--color-text)',
        }} aria-label="Toggle menu">
          {mobileOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </nav>

      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 56, left: 0, right: 0, zIndex: 99,
          background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)',
          padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: 4,
          boxShadow: 'var(--shadow-modal)',
        }}>
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
              padding: '10px 12px', fontSize: 15, color: 'var(--color-text)',
              textDecoration: 'none', borderRadius: 'var(--radius-sm)',
            }}>{link.label}</Link>
          ))}
          <div style={{ height: 1, background: 'var(--color-border)', margin: '8px 0' }} />
          <Link href="https://app.aere.health/login" onClick={() => setMobileOpen(false)} style={{ padding: '10px 12px', fontSize: 15, color: 'var(--color-muted)', textDecoration: 'none' }}>Sign in</Link>
          <Link href="https://app.aere.health/signup" onClick={() => setMobileOpen(false)} style={{
            padding: '12px', textAlign: 'center', background: 'var(--color-accent)', color: 'white',
            borderRadius: 'var(--radius-md)', fontSize: 15, fontWeight: 500, textDecoration: 'none', marginTop: 4,
          }}>Get started free</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-center, .nav-right { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}

/* ── Waitlist / CTA form ── */

function useSignupForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  async function handleSubmit(e: FormEvent) {
    e.preventDefault(); setState('loading'); setErrorMsg('')
    try {
      const res = await fetch('/api/waitlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
      const data = await res.json()
      if (!res.ok) { setErrorMsg(data.error || 'Something went wrong.'); setState('error'); return }
      setState('success')
    } catch { setErrorMsg('Something went wrong. Please try again.'); setState('error') }
  }
  return { email, setEmail, state, errorMsg, handleSubmit }
}

/* ════════════════════════════════════════════════════════════════════════════ */

export default function FullMarketingSite() {
  const ctaForm = useSignupForm()

  return (
    <>
      <SiteNav />

      {/* ═══════════════════════ 1. HERO ═══════════════════════ */}
      <section id="hero" style={{
        background: 'var(--color-bg)', paddingTop: 56,
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: 'clamp(120px, 15vh, 180px) 24px clamp(60px, 8vh, 100px)',
      }}>
        <div style={{ maxWidth: 720, width: '100%' }}>
          <p className="fade-up-1" style={{
            fontSize: 10, fontWeight: 500, textTransform: 'uppercase',
            letterSpacing: '0.1em', color: 'var(--color-muted)', marginBottom: 20,
          }}>
            The Healthspan Intelligence Platform
          </p>

          <h1 className="fade-up-2" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            fontWeight: 400, color: 'var(--color-text)',
            letterSpacing: '-0.03em', lineHeight: 1.08,
            margin: '0 0 28px',
          }}>
            Your health data is scattered.<br />
            Your healthspan shouldn&apos;t be.
          </h1>

          <p className="fade-up-3" style={{
            fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px, 1.4vw, 20px)',
            color: 'var(--color-muted)', lineHeight: 1.7,
            maxWidth: 560, margin: '0 auto 36px',
          }}>
            Your labs are at Quest. Your sleep is in Oura. Your records are spread across 18 providers.
            Your doctor has 15 minutes. Nobody is connecting all of this to tell you what it means
            for how long — and how well — you&apos;ll live. Until now.
          </p>

          <div className="fade-up-3" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            <Link href="https://app.aere.health/signup" style={{
              padding: '12px 28px', background: 'var(--color-accent)', color: 'white',
              borderRadius: 'var(--radius-md)', fontSize: 15, fontWeight: 500,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(200,124,255,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Start for free <ChevronRight size={16} />
            </Link>
            <Link href="/full#vault" style={{
              padding: '12px 28px', background: 'none', color: 'var(--color-muted)',
              border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
              fontSize: 15, fontWeight: 500, textDecoration: 'none',
              transition: 'border-color 0.15s, color 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-muted)' }}
            >
              See how it works
            </Link>
          </div>

          <p className="fade-up-4" style={{
            fontSize: 11, color: 'var(--color-muted)', letterSpacing: '0.02em',
          }}>
            HIPAA Compliant · End-to-end encrypted · You own your data · No ads, ever
          </p>
        </div>

        {/* Hero product mockup */}
        <div className="fade-up-5" style={{
          maxWidth: 900, width: '100%', marginTop: 56,
          background: 'var(--color-surface)', borderRadius: 'var(--radius-2xl)',
          border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-card)',
          padding: 'clamp(20px, 3vw, 32px)', overflow: 'hidden',
        }}>
          <DashboardMockup />
        </div>
      </section>

      {/* ═══════════════════════ 2. SOCIAL PROOF ═══════════════════════ */}
      <section style={{
        background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)', padding: '28px 24px',
      }}>
        <p style={{
          fontSize: 11, fontWeight: 500, textTransform: 'uppercase',
          letterSpacing: '0.06em', color: 'var(--color-muted)',
          textAlign: 'center', marginBottom: 20,
        }}>
          Built for the people who already know
        </p>
        <div style={{
          maxWidth: 960, margin: '0 auto',
          display: 'flex', justifyContent: 'center', gap: 'clamp(24px, 4vw, 56px)',
          flexWrap: 'wrap', alignItems: 'center',
        }}>
          {['120+ biomarkers tracked', 'HIPAA compliant', 'AI-powered healthspan insights', '97% parsing accuracy', 'Your data. Always.'].map(t => (
            <span key={t} style={{ fontSize: 12.5, color: 'var(--color-muted)', whiteSpace: 'nowrap' }}>{t}</span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ 3. THE PROBLEM ═══════════════════════ */}
      <SectionObserver>
        <section id="problem" style={{ background: 'var(--color-bg)', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div className="problem-grid" style={{
            maxWidth: 1080, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center',
          }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 400, color: 'var(--color-text)',
                letterSpacing: '-0.03em', lineHeight: 1.12,
              }}>
                The average person&apos;s health history lives in 18 different places.<br /><br />
                <span style={{ color: 'var(--color-muted)' }}>The information exists.<br />The intelligence doesn&apos;t.</span>
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <ProblemCard icon={<FolderX size={20} />} title="Scattered records"
                body="Health records across dozens of providers. No single source of truth. Every new specialist starts from scratch." />
              <ProblemCard icon={<Unlink size={20} />} title="Siloed data"
                body="Oura knows your sleep. Quest knows your labs. MyFitnessPal knows your macros. None of them talk to each other." />
              <ProblemCard icon={<Clock size={20} />} title="Reactive medicine"
                body="Your provider sees you for 15 minutes, twice a year. The rest of the year, you're on your own." />
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 4. AEREVAULT ═══════════════════════ */}
      <SectionObserver>
        <section id="vault" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div className="vault-grid" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
            }}>
              {/* Visual — vault mockup */}
              <div style={{
                background: 'var(--color-bg)', borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)', padding: 24,
              }}>
                <VaultMockup />
              </div>

              <div>
                <SectionLabel>AereVault</SectionLabel>
                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 400, color: 'var(--color-text)',
                  letterSpacing: '-0.02em', lineHeight: 1.12,
                  margin: '0 0 20px',
                }}>
                  Every health record you&apos;ve ever had.<br />In one place. Owned by you.
                </h2>
                <p style={{
                  fontSize: 15, color: 'var(--color-muted)', lineHeight: 1.8, margin: '0 0 28px',
                }}>
                  Upload anything — lab reports, imaging, physician notes, discharge summaries,
                  genetic panels, handwritten prescriptions, CGM data, EOBs. Aere&apos;s AI reads every
                  document and extracts the data that matters.
                </p>
                <p style={{ fontSize: 15, color: 'var(--color-muted)', lineHeight: 1.8, margin: '0 0 8px' }}>
                  Not a filing cabinet. A living health record that gets richer every time you add to it.
                </p>
                <p style={{ fontSize: 15, color: 'var(--color-text)', fontWeight: 500, lineHeight: 1.8, margin: '0 0 28px' }}>
                  Five years of labs tells a story one panel never could.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    'AI-powered parsing — values extracted automatically',
                    'Every document type supported',
                    'Biomarker history with trend charts',
                    'Searchable across your entire history',
                    'The longer your history, the more valuable it becomes',
                  ].map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--color-text)' }}>
                      <CheckCircle size={16} color="var(--color-success)" strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 5. INTELLIGENCE (dark) ═══════════════════════ */}
      <SectionObserver>
        <section id="intelligence" style={{
          background: '#1A1917', padding: 'clamp(64px, 8vw, 100px) 24px',
        }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20,
            }}>
              <Sparkles size={14} strokeWidth={1.75} color="#c87cff" />
              <span style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#c87cff' }}>AereInsight</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400, color: '#FFFFFF',
              letterSpacing: '-0.02em', lineHeight: 1.12,
              margin: '0 0 48px',
            }}>
              This isn&apos;t storage.<br />This is intelligence.
            </h2>

            <div className="compare-grid" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
              textAlign: 'left', marginBottom: 40,
            }}>
              {/* Standard */}
              <div style={{
                background: '#21201E', borderRadius: 14,
                border: '1px solid #2E2B27', padding: '24px 28px',
              }}>
                <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#8A8580', marginBottom: 14 }}>Standard health app</div>
                <p style={{ fontSize: 14, color: '#8A8580', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                  &ldquo;Your LDL is 138 — flagged high.&rdquo;
                </p>
              </div>

              {/* Aere — violet signals personalized AI */}
              <div style={{
                background: '#2A1A3A', borderRadius: 14,
                border: '1px solid rgba(200,124,255,0.25)', padding: '24px 28px',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14,
                }}>
                  <Sparkles size={12} strokeWidth={1.75} color="#c87cff" />
                  <span style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#c87cff' }}>AereInsight</span>
                </div>
                <p style={{ fontSize: 14, color: '#F0EEE9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                  &ldquo;Your LDL peaked at 158 in 2022 and has trended down to 138.
                  You&apos;re approaching the &lt;100 mg/dL threshold associated with optimal
                  cardiovascular longevity. Whatever you changed in the last 18 months is
                  working — and here&apos;s what your other markers suggest about why.&rdquo;
                </p>
              </div>
            </div>

            <p style={{
              fontSize: 16, color: '#8A8580', lineHeight: 1.8,
              maxWidth: 620, margin: '0 auto',
            }}>
              That insight required your complete picture — labs, wearables, nutrition, and
              history — seen simultaneously through one lens: your healthspan. No other
              platform can generate it. Because no other platform has all of it.
            </p>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 6. THE LAYERS ═══════════════════════ */}
      <SectionObserver>
        <section id="features" style={{ background: 'var(--color-bg)', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 400, color: 'var(--color-text)',
                letterSpacing: '-0.02em', lineHeight: 1.12,
                margin: '0 0 16px',
              }}>
                Every dimension of your health.<br />Finally connected.
              </h2>
            </div>

            <div className="layers-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
            }}>
              <LayerCard icon={<FlaskConical size={20} />} iconColor="var(--color-accent)" title="Blood & Biomarkers"
                body="From comprehensive metabolic panels to ApoB, hs-CRP, and testosterone. Optimal longevity ranges — not just standard lab normals." />
              <LayerCard icon={<Activity size={20} />} iconColor="var(--color-success)" title="Wearables & Daily Vitals"
                body="HRV, sleep, recovery, heart rate. Oura, Apple Watch, Whoop, 8 Sleep, Garmin, and 50+ more. Updated every morning."
                badge="Coming soon" />
              <LayerCard icon={<Dna size={20} />} iconColor="var(--color-blue)" title="Genetic & Advanced Testing"
                body="APOE, MTHFR, biological age clocks, cardiovascular genetic panels. Upload any report — Aere reads and contextualizes it." />
              <LayerCard icon={<TrendingUp size={20} />} iconColor="var(--color-amber)" title="Continuous Glucose"
                body="CGM data from Dexcom, Libre, and Stelo — connected and interpreted alongside your labs, sleep, and activity."
                badge="Coming soon" />
              <LayerCard icon={<Apple size={20} />} iconColor="var(--color-success)" title="Nutrition & Exercise"
                body="Macros, protein targets, micronutrients — connected to your biomarker trends. Understand what your diet is actually doing to your biology."
                badge="Coming soon" />
              <LayerCard icon={<FileText size={20} />} iconColor="var(--color-muted)" title="Imaging & Everything Else"
                body="MRI, CT, DEXA, echocardiograms, handwritten notes, discharge summaries. If it's a health document, Aere reads it." />
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 7. AERESHARE ═══════════════════════ */}
      <SectionObserver>
        <section id="share" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div className="share-grid" style={{
            maxWidth: 1080, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
          }}>
            <div>
              <SectionLabel>AereShare</SectionLabel>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 400, color: 'var(--color-text)',
                letterSpacing: '-0.02em', lineHeight: 1.12,
                margin: '0 0 20px',
              }}>
                Your complete health history.<br />In a single link.
              </h2>
              <p style={{ fontSize: 15, color: 'var(--color-muted)', lineHeight: 1.8, margin: '0 0 16px' }}>
                New specialist? Emergency room at 2am? Starting with a new functional medicine provider?
              </p>
              <p style={{ fontSize: 15, color: 'var(--color-muted)', lineHeight: 1.8, margin: '0 0 16px' }}>
                Stop starting from scratch. AereShare generates a secure, time-limited link to your
                complete health summary — biomarkers, trends, AI-generated pre-visit brief, and original
                documents. One tap. Everything your provider needs to actually understand you.
              </p>
              <p style={{ fontSize: 15, color: 'var(--color-text)', fontWeight: 500, lineHeight: 1.8, margin: '0 0 28px' }}>
                Your new cardiologist sees five years of cardiac markers before you walk in the door.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Time-limited and passcode-protected',
                  'AI-generated pre-visit brief included',
                  'Original documents accessible',
                  'Full audit trail — see who viewed, when',
                  'Revocable at any time',
                ].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--color-text)' }}>
                    <CheckCircle size={16} color="var(--color-success)" strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'var(--color-bg)', borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)', padding: 24,
            }}>
              <ShareMockup />
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 8. BUILT FOR YOU ═══════════════════════ */}
      <SectionObserver>
        <section style={{ background: 'var(--color-accent-tint)', padding: 'clamp(64px, 8vw, 100px) 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 400, color: 'var(--color-text)',
              letterSpacing: '-0.02em', lineHeight: 1.12,
              margin: '0 0 24px',
            }}>
              Built for the people who already know.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--color-text)', lineHeight: 1.8, margin: '0 0 16px' }}>
              If you know what ApoB is. If you track your HRV. If you&apos;ve done a Function Health
              panel or worn an Oura Ring. If you listen to the podcasts, read the books, and take
              your healthspan seriously —
            </p>
            <p style={{ fontSize: 16, color: 'var(--color-text)', lineHeight: 1.8, fontWeight: 500, margin: '0 0 16px' }}>
              Aere was built for you.
            </p>
            <p style={{ fontSize: 16, color: 'var(--color-text)', lineHeight: 1.8, margin: '0 0 16px' }}>
              You already have the data. You&apos;re already doing the work. Aere is the missing
              layer — the platform that connects everything you&apos;re tracking and tells you what
              it means together, not in isolation.
            </p>
            <p style={{ fontSize: 15, color: 'var(--color-muted)', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
              The longevity community has the science. Aere gives you the intelligence to act on it.
            </p>
          </div>

          <div className="testimonial-grid" style={{
            maxWidth: 1000, margin: '48px auto 0',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
          }}>
            <TestimonialCard
              quote="Finally a platform I can recommend to patients who are serious about their healthspan. The pre-visit brief alone saves us 10 minutes every appointment."
              name="Functional Medicine Practitioner"
            />
            <TestimonialCard
              quote="I've been tracking everything for years. Aere is the first platform that actually connects it all and tells me something I didn't already know."
              name="Oura + Function Health user"
            />
            <TestimonialCard
              quote="The biomarker trending across years of labs is something I've wanted forever. This is what health data should look like."
              name="Healthspan-focused professional"
            />
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 9. PHILOSOPHY ═══════════════════════ */}
      <SectionObserver>
        <section id="philosophy" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div className="phil-grid" style={{
            maxWidth: 1080, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
          }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 400, color: 'var(--color-text)',
                letterSpacing: '-0.03em', lineHeight: 1.12,
              }}>
                Normal means you won&apos;t die tomorrow.<br /><br />
                <span style={{ color: 'var(--color-accent)' }}>Optimal means you&apos;re on the right trajectory.</span>
              </p>
            </div>
            <div>
              <p style={{ fontSize: 15, color: 'var(--color-muted)', lineHeight: 1.8, margin: '0 0 16px' }}>
                Standard lab reference ranges were designed for sick care. They tell you whether you
                have a problem today. They say nothing about where you&apos;re headed.
              </p>
              <p style={{ fontSize: 15, color: 'var(--color-muted)', lineHeight: 1.8, margin: '0 0 16px' }}>
                Aere is built around optimal longevity ranges — the evidence-based targets associated
                with a longer healthspan, grounded in functional medicine and longevity research.
              </p>
              <p style={{ fontSize: 15, color: 'var(--color-text)', lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
                Your provider optimizes for normal.<br />Aere optimizes for exceptional.
              </p>
              <Link href="/science" style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                marginTop: 24, fontSize: 14, fontWeight: 500,
                color: 'var(--color-accent)', textDecoration: 'none',
              }}>
                Explore the science <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 10. INTEGRATIONS ═══════════════════════ */}
      <SectionObserver>
        <section id="integrations" style={{ background: 'var(--color-bg)', padding: '48px 24px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: 'var(--color-muted)', marginBottom: 20 }}>
            Connects with the tools you already use
          </p>
          <div style={{
            maxWidth: 720, margin: '0 auto',
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8,
          }}>
            {['Function Health', 'Oura Ring', 'Apple Watch', '8 Sleep', 'Garmin', 'Whoop', 'Dexcom', 'Libre', 'Cronometer', 'Epic MyChart', 'Quest Diagnostics', 'LabCorp'].map(name => (
              <span key={name} style={{
                padding: '6px 14px', borderRadius: 100,
                background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                fontSize: 12, color: 'var(--color-muted)', whiteSpace: 'nowrap',
              }}>{name}</span>
            ))}
          </div>
          <p style={{ fontSize: 12, color: 'var(--color-muted)', marginTop: 16, maxWidth: 420, margin: '16px auto 0' }}>
            Upload any document. Connect any wearable. Import from any health system. Aere reads all of it.
          </p>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 11. PRICING ═══════════════════════ */}
      <SectionObserver>
        <section id="pricing" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 400, color: 'var(--color-text)',
                letterSpacing: '-0.02em', lineHeight: 1.12,
                margin: '0 0 16px',
              }}>
                Start free. Go deeper when you&apos;re ready.
              </h2>
            </div>

            {/* Founding member banner */}
            <div style={{
              background: 'var(--color-accent)', borderRadius: 'var(--radius-lg)',
              padding: '16px 24px', textAlign: 'center', marginBottom: 24,
            }}>
              <p style={{
                fontFamily: 'var(--font-serif)', fontSize: 18,
                color: 'white', letterSpacing: '-0.01em', margin: 0,
              }}>
                Founding Member Rate — $99/year · All features · Locked forever · First 50 members only.
              </p>
            </div>

            <div className="pricing-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
              alignItems: 'start',
            }}>
              <PricingCard tier="Free" price="$0" period="/month" description="Try Aere" features={[
                'Up to 10 documents', 'AI parsing and extraction', 'Basic biomarker view',
              ]} cta="Get started free" ctaHref="https://app.aere.health/signup" />

              <PricingCard tier="AereVault" price="$84" period="/year" description="Own your health history" highlighted features={[
                'Unlimited records', 'AI parsing and extraction', 'Full biomarker history',
                'AereShare secure sharing', 'AI chat (50 queries/month)', 'Less than $7/month',
              ]} cta="Start AereVault" ctaHref="https://app.aere.health/signup"
                note="Founding member rate: $99/year — price locked forever when you join during launch." />

              <PricingCard tier="Aere Full" price="$29" period="/mo" description="Your complete healthspan platform" features={[
                'Everything in Vault', 'Wearable integration — 50+ devices', 'Daily AerePulse dashboard',
                'Nutrition tracking', 'Unlimited AI healthspan coaching',
              ]} cta="Start Aere Full" ctaHref="https://app.aere.health/signup" badge="COMING SOON" />

              <PricingCard tier="Practitioner" price="$99" period="/mo" description="For longevity practitioners" features={[
                'Client roster management', 'AI pre-visit briefs', 'Longitudinal outcome tracking', 'HIPAA BAA included',
              ]} cta="Contact us" ctaHref="#" />
            </div>

            <p style={{ fontSize: 13, color: 'var(--color-muted)', textAlign: 'center', marginTop: 24 }}>
              Clinic plans available for multi-practitioner practices. Contact us for enterprise pricing.
            </p>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 12. TRUST (dark) ═══════════════════════ */}
      <SectionObserver>
        <section id="security" style={{ background: '#1A1917', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 400, color: '#FFFFFF',
              letterSpacing: '-0.02em', lineHeight: 1.12,
              margin: '0 0 8px',
            }}>
              HIPAA-compliant from day one.
            </h2>
            <p style={{ fontSize: 16, color: '#8A8580', margin: '0 0 48px' }}>
              Your data is yours. Full stop.
            </p>

            <div className="trust-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
              textAlign: 'left',
            }}>
              <TrustItem icon={<Shield size={20} />} text="End-to-end encrypted. TLS 1.3 in transit, AES-256 at rest." />
              <TrustItem icon={<Lock size={20} />} text="HIPAA-compliant with signed BAAs on all infrastructure." />
              <TrustItem icon={<Eye size={20} />} text="Row-level security. Your data is never accessible to other users." />
              <TrustItem icon={<FileText size={20} />} text="Complete audit trail. Every access, every share, logged." />
              <TrustItem icon={<Share2 size={20} />} text="You control every share. Time-limited, revocable, audited." />
              <TrustItem icon={<Ban size={20} />} text="We never sell your data. We never show ads. Ever." />
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 13. FOR PRACTITIONERS ═══════════════════════ */}
      <SectionObserver>
        <section id="practitioners" style={{ background: 'var(--color-bg)', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div className="prac-grid" style={{
            maxWidth: 1080, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
          }}>
            <div>
              <SectionLabel>For Practitioners</SectionLabel>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 400, color: 'var(--color-text)',
                letterSpacing: '-0.02em', lineHeight: 1.12,
                margin: '0 0 20px',
              }}>
                Make every 15 minutes count.
              </h2>
              <p style={{ fontSize: 15, color: 'var(--color-muted)', lineHeight: 1.8, margin: '0 0 28px' }}>
                Your patients arrive with years of context — labs, wearable data, trends,
                AI-generated pre-visit briefs. No more starting from scratch.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: <Users size={18} />, text: 'Client roster with health scores and flags' },
                  { icon: <Zap size={18} />, text: 'AI pre-visit briefs — complete context in 60 seconds' },
                  { icon: <BarChart3 size={18} />, text: 'Full biomarker history with longitudinal trends' },
                  { icon: <Lock size={18} />, text: 'HIPAA-compliant with full audit trail' },
                  { icon: <Share2 size={18} />, text: 'Patients share exactly what they choose' },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--color-text)' }}>
                    <div style={{ color: 'var(--color-accent)', flexShrink: 0 }}>{icon}</div>
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <PracBriefCard label="PRE-VISIT BRIEF"
                text="Matt S., 38M — annual longevity panel. ApoB trending down (97 → 72 mg/dL), fasting glucose elevated at 94. HRV improved 12% over 90 days. Two items for discussion: glucose trajectory and Vitamin D optimization." />
              <PracBriefCard label="FLAG"
                text="Fasting glucose has risen across 4 consecutive panels (82 → 88 → 91 → 94 mg/dL). 8 Sleep data shows late-night body temperature elevations correlated with late eating. Pattern consistent with developing insulin resistance." />
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 14. FINAL CTA ═══════════════════════ */}
      <section id="cta" style={{
        background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)',
        padding: 'clamp(64px, 8vw, 100px) 24px', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 400, color: 'var(--color-text)',
            letterSpacing: '-0.02em', lineHeight: 1.12,
            margin: '0 0 20px',
          }}>
            Start building your health legacy today.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--color-muted)', lineHeight: 1.8, margin: '0 0 16px' }}>
            Every lab you upload. Every wearable you connect. Every year that passes. Your health
            picture in Aere gets richer, more complete, more valuable — and more irreplaceable.
          </p>
          <p style={{ fontSize: 16, color: 'var(--color-text)', lineHeight: 1.8, fontWeight: 500, margin: '0 0 36px' }}>
            The best time to start was five years ago.<br />The second best time is today.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://app.aere.health/signup" style={{
              padding: '14px 32px', background: 'var(--color-accent)', color: 'white',
              borderRadius: 'var(--radius-md)', fontSize: 16, fontWeight: 500,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(200,124,255,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Create your free account <ChevronRight size={16} />
            </Link>
            <Link href="/full#pricing" style={{
              padding: '14px 32px', background: 'none', color: 'var(--color-muted)',
              border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
              fontSize: 16, fontWeight: 500, textDecoration: 'none',
            }}>See pricing</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 15. FOOTER ═══════════════════════ */}
      <footer style={{
        background: '#1A1917', padding: '48px 24px 32px',
      }}>
        <div className="footer-grid" style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: '#c87cff', letterSpacing: '-0.03em', marginBottom: 8 }}>Aere.</div>
            <p style={{ fontSize: 12, color: '#5A5855', lineHeight: 1.6 }}>Own Your Health.<br />The Healthspan Intelligence Platform.</p>
          </div>
          <FooterCol title="Product" links={[
            { label: 'Features', href: '/full#features' }, { label: 'Pricing', href: '/full#pricing' },
            { label: 'AereVault', href: '/full#vault' }, { label: 'AereShare', href: '/full#share' },
            { label: 'Science', href: '/science' },
          ]} />
          <FooterCol title="Company" links={[
            { label: 'About', href: '#' }, { label: 'Blog', href: '#' },
            { label: 'Careers', href: '#' }, { label: 'Contact', href: '#' },
          ]} />
          <FooterCol title="Legal" links={[
            { label: 'Privacy Policy', href: '#' }, { label: 'Terms of Service', href: '#' },
            { label: 'HIPAA Notice', href: '#' }, { label: 'Security', href: '/full#security' },
          ]} />
        </div>
        <div style={{
          maxWidth: 1000, margin: '32px auto 0', borderTop: '1px solid #2A2926',
          paddingTop: 24, textAlign: 'center',
        }}>
          <p style={{ fontSize: 11, color: '#4A4845', margin: 0 }}>
            &copy; 2026 Aere Health, Inc. &middot; Made for people who take their healthspan seriously.
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .problem-grid, .vault-grid, .share-grid, .phil-grid, .prac-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .layers-grid { grid-template-columns: 1fr 1fr !important; }
          .compare-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr 1fr !important; }
          .testimonial-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .layers-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  Sub-components                                                           */
/* ═══════════════════════════════════════════════════════════════════════════ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 10, fontWeight: 500, textTransform: 'uppercase',
      letterSpacing: '0.06em', color: 'var(--color-muted)', marginBottom: 14,
    }}>{children}</div>
  )
}

function ProblemCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div style={{
      background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-card)',
      padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{ color: 'var(--color-muted)' }}>{icon}</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-text)' }}>{title}</div>
      <div style={{ fontSize: 13.5, color: 'var(--color-muted)', lineHeight: 1.7 }}>{body}</div>
    </div>
  )
}

function LayerCard({ icon, iconColor, title, body, badge }: {
  icon: React.ReactNode; iconColor: string; title: string; body: string; badge?: string
}) {
  return (
    <div style={{
      background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-card)',
      padding: '24px', display: 'flex', flexDirection: 'column', gap: 12,
      transition: 'transform 0.15s, box-shadow 0.15s', position: 'relative',
    }}>
      {badge && (
        <div style={{
          position: 'absolute', top: 14, right: 14,
          background: 'var(--color-amber-tint)', color: 'var(--color-amber)',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.04em',
          padding: '2px 8px', borderRadius: 100,
        }}>{badge}</div>
      )}
      <div style={{ color: iconColor }}>{icon}</div>
      <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text)' }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.7 }}>{body}</div>
    </div>
  )
}

function PricingCard({ tier, price, period, description, features, cta, ctaHref, highlighted, badge, note }: {
  tier: string; price: string; period: string; description: string; features: string[]
  cta: string; ctaHref: string; highlighted?: boolean; badge?: string; note?: string
}) {
  return (
    <div style={{
      background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)',
      border: highlighted ? '2px solid var(--color-accent)' : '1px solid var(--color-border)',
      boxShadow: highlighted ? '0 4px 24px rgba(200,124,255,0.12)' : 'var(--shadow-card)',
      padding: 'clamp(24px, 2.5vw, 32px)', position: 'relative',
      transition: 'transform 0.15s, box-shadow 0.15s',
    }}>
      {badge && (
        <div style={{
          position: 'absolute', top: 14, right: 14,
          background: 'var(--color-amber-tint)', color: 'var(--color-amber)',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.04em', padding: '2px 8px', borderRadius: 100,
        }}>{badge}</div>
      )}
      {highlighted && (
        <div style={{
          position: 'absolute', top: 14, right: 14,
          background: 'var(--color-accent-tint)', color: 'var(--color-accent)',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.04em', padding: '2px 8px', borderRadius: 100,
        }}>MOST POPULAR</div>
      )}
      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text)', marginBottom: 4 }}>{tier}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 4 }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: 'var(--color-text)', letterSpacing: '-0.03em' }}>{price}</span>
        <span style={{ fontSize: 14, color: 'var(--color-muted)' }}>{period}</span>
      </div>
      <p style={{ fontSize: 13, color: 'var(--color-muted)', margin: '0 0 20px' }}>{description}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        {features.map(f => (
          <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--color-text)' }}>
            <CheckCircle size={14} color="var(--color-accent)" strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} /> {f}
          </div>
        ))}
      </div>
      <Link href={ctaHref} style={{
        display: 'block', textAlign: 'center', padding: '10px 0',
        background: highlighted ? 'var(--color-accent)' : 'none',
        color: highlighted ? 'white' : 'var(--color-accent)',
        border: highlighted ? 'none' : '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)', fontSize: 13.5, fontWeight: 500, textDecoration: 'none',
      }}>{cta}</Link>
      {note && <p style={{ fontSize: 11, color: 'var(--color-muted)', marginTop: 12, lineHeight: 1.5 }}>{note}</p>}
    </div>
  )
}

function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div style={{
      background: '#21201E', borderRadius: 'var(--radius-lg)',
      border: '1px solid #2E2B27', padding: '20px',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{ color: '#c87cff' }}>{icon}</div>
      <p style={{ fontSize: 13, color: '#8A8580', lineHeight: 1.7, margin: 0 }}>{text}</p>
    </div>
  )
}

function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <div style={{
      background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-card)',
      padding: '24px', textAlign: 'left',
    }}>
      <p style={{ fontSize: 13.5, color: 'var(--color-text)', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 16px' }}>
        &ldquo;{quote}&rdquo;
      </p>
      <p style={{ fontSize: 12, color: 'var(--color-muted)', margin: 0 }}>— {name}</p>
    </div>
  )
}

function PracBriefCard({ label, text }: { label: string; text: string }) {
  return (
    <div style={{
      background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-card)',
      padding: '20px 24px',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
      }}>
        <Sparkles size={12} strokeWidth={1.75} color="var(--color-accent)" />
        <span style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-accent)' }}>{label}</span>
      </div>
      <p style={{ fontSize: 13, color: 'var(--color-text)', lineHeight: 1.65, margin: 0 }}>{text}</p>
    </div>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 600, color: '#7A7770', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(({ label, href }) => (
          <Link key={label} href={href} style={{ fontSize: 13, color: '#5A5855', textDecoration: 'none', transition: 'color 0.15s' }}>{label}</Link>
        ))}
      </div>
    </div>
  )
}

/* ── Product Mockups ── */

function DashboardMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, letterSpacing: '-0.02em', color: 'var(--color-text)' }}>Good morning, Matt.</div>
          <div style={{ fontSize: 12, color: 'var(--color-muted)', marginTop: 2 }}>Your body is <span style={{ color: 'var(--color-success)', fontWeight: 500 }}>well-recovered</span> today.</div>
        </div>
        <div style={{ fontSize: 12, color: 'var(--color-muted)' }}>Tuesday, April 1</div>
      </div>

      <div className="dash-mock-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
        {/* Biomarker grid */}
        <div style={{ background: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: 16, overflow: 'hidden' }}>
          <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-muted)', marginBottom: 12 }}>Key Biomarkers</div>
          {[
            { name: 'ApoB', value: '72', unit: 'mg/dL', status: 'optimal' },
            { name: 'hs-CRP', value: '0.4', unit: 'mg/L', status: 'optimal' },
            { name: 'Fasting Glucose', value: '94', unit: 'mg/dL', status: 'borderline' },
            { name: 'Vitamin D', value: '62', unit: 'ng/mL', status: 'normal' },
          ].map(bm => (
            <div key={bm.name} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0',
              borderBottom: '1px solid var(--color-border)',
              fontSize: 13,
            }}>
              <div style={{
                width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
                background: bm.status === 'optimal' ? 'var(--color-accent)' : bm.status === 'normal' ? 'var(--color-success)' : 'var(--color-amber)',
              }} />
              <div style={{ flex: 1, color: 'var(--color-text)', fontWeight: 500 }}>{bm.name}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--color-text)' }}>
                {bm.value} <span style={{ fontSize: 11, color: 'var(--color-muted)' }}>{bm.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* AereInsight card — violet = personalized AI */}
        <div style={{
          background: 'var(--color-accent-tint)', borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(200,124,255,0.25)', padding: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
            <Sparkles size={12} strokeWidth={1.75} color="var(--color-accent)" />
            <span style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-accent)' }}>AereInsight</span>
          </div>
          <p style={{ fontSize: 12.5, color: 'var(--color-text)', lineHeight: 1.65, margin: 0 }}>
            Your ApoB at 72 mg/dL is approaching the &lt;70 threshold longevity physicians consider optimal.
            Your fasting glucose at 94 has risen over 4 panels — worth discussing with your provider.
          </p>
        </div>
      </div>
    </div>
  )
}

function VaultMockup() {
  return (
    <div>
      <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-muted)', marginBottom: 14 }}>Recent Records</div>
      {[
        { type: 'Lab Report', source: 'Function Health', date: 'Mar 18, 2026', icon: <FlaskConical size={14} color="var(--color-accent)" /> },
        { type: 'Imaging', source: 'RadNet', date: 'Feb 4, 2026', icon: <Eye size={14} color="var(--color-blue)" /> },
        { type: 'Lab Report', source: 'Quest Diagnostics', date: 'Dec 12, 2025', icon: <FlaskConical size={14} color="var(--color-accent)" /> },
      ].map(r => (
        <div key={r.date} style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 'var(--radius-sm)', flexShrink: 0,
            background: 'var(--color-surface)', border: '1px solid var(--color-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{r.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text)' }}>{r.type}</div>
            <div style={{ fontSize: 11, color: 'var(--color-muted)' }}>{r.source}</div>
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-muted)' }}>{r.date}</div>
        </div>
      ))}
    </div>
  )
}

function ShareMockup() {
  return (
    <div>
      <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-muted)', marginBottom: 14 }}>Share Preview</div>
      <div style={{
        background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)', padding: 16, marginBottom: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Sparkles size={12} strokeWidth={1.75} color="var(--color-accent)" />
          <span style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-accent)' }}>Pre-visit Brief</span>
        </div>
        <p style={{ fontSize: 12, color: 'var(--color-text)', lineHeight: 1.6, margin: 0 }}>
          38M, health-optimized. 5 years of longitudinal data. ApoB optimal. Glucose trending up.
          3 items flagged for discussion.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {['Time-limited', 'Passcode', 'Audit trail'].map(tag => (
          <span key={tag} style={{
            padding: '4px 10px', borderRadius: 100, fontSize: 11,
            background: 'var(--color-success-tint)', color: 'var(--color-success)',
            fontWeight: 500,
          }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}
