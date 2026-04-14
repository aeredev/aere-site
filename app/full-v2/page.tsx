'use client'

import { useState, useEffect, type FormEvent } from 'react'
import Link from 'next/link'
import SectionObserver from '@/components/SectionObserver'
import {
  FlaskConical, Activity, Dna, TrendingUp, Apple, FileText,
  FolderX, Unlink, Clock, CheckCircle, ChevronRight,
  Shield, Lock, Eye, Share2, Ban, Menu, X,
  Sparkles, Sparkle, Users, Zap, BarChart3,
} from 'lucide-react'

/* ── Dark palette ── */
const D = {
  bgDeep: '#0F0D1A',
  bgDark: '#150E26',
  bgPurple: '#1C1033',
  bgCard: '#1E1535',
  bgCard2: '#261940',
  border: 'rgba(200,124,255,0.15)',
  borderStrong: 'rgba(200,124,255,0.3)',
  text: '#F0EAF8',
  muted: 'rgba(240,234,248,0.7)',
  mutedBody: 'rgba(240,234,248,0.6)',
  mutedLight: 'rgba(240,234,248,0.7)',
  mutedDim: 'rgba(240,234,248,0.4)',
  accent: '#c87cff',
  accentTint: 'rgba(200,124,255,0.12)',
  accentTintStrong: 'rgba(200,124,255,0.08)',
  success: '#9CDB7B',
  amber: '#FFB347',
  error: '#FF6B6B',
}

/* ── Nav ── */

const NAV_LINKS = [
  { label: 'Features',          href: '/full-v2#features'      },
  { label: 'How It Works',      href: '/full-v2#vault'         },
  { label: 'Pricing',           href: '/full-v2#pricing'       },
  { label: 'For Practitioners', href: '/full-v2#practitioners' },
]

function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navBorder = scrolled ? `1px solid ${D.border}` : '1px solid transparent'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 4, left: 0, right: 0, zIndex: 100,
        background: 'rgba(15,13,26,0.92)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: navBorder,
        transition: 'all 0.3s ease',
        height: 56, display: 'flex', alignItems: 'center', padding: '0 32px',
      }}>
        <Link href="/full-v2#hero" style={{ marginRight: 40, textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="/brand/wordmark-transparent-violet.svg" alt="Aere" style={{ height: 46, display: 'block' }} />
        </Link>

        <div style={{ display: 'flex', gap: 2, flex: 1 }} className="nav-center">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} style={{
              padding: '6px 16px', borderRadius: 'var(--radius-sm)',
              fontSize: 13.5, color: D.muted,
              textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'color 0.15s, background 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = D.text; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.color = D.muted; e.currentTarget.style.background = 'none' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="nav-right">
          <Link href="https://app.aere.health/login" style={{
            fontSize: 13.5, color: D.muted, textDecoration: 'none', transition: 'color 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = D.text}
            onMouseLeave={e => e.currentTarget.style.color = D.muted}
          >Sign in</Link>
          <Link href="https://app.aere.health/signup" style={{
            padding: '8px 18px', background: D.accent, color: 'white',
            borderRadius: 'var(--radius-md)', fontSize: 13.5, fontWeight: 500,
            textDecoration: 'none', whiteSpace: 'nowrap',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(200,124,255,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >Request early access</Link>
        </div>

        <button onClick={() => setMobileOpen(o => !o)} className="hamburger" style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', padding: 4, color: D.text,
          transition: 'color 0.3s',
        }} aria-label="Toggle menu">
          {mobileOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </nav>

      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, zIndex: 99,
          background: D.bgCard, borderBottom: `1px solid ${D.border}`,
          padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: 4,
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        }}>
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
              padding: '10px 12px', fontSize: 15, color: D.text,
              textDecoration: 'none', borderRadius: 'var(--radius-sm)',
            }}>{link.label}</Link>
          ))}
          <div style={{ height: 1, background: D.border, margin: '8px 0' }} />
          <Link href="https://app.aere.health/login" onClick={() => setMobileOpen(false)} style={{ padding: '10px 12px', fontSize: 15, color: D.muted, textDecoration: 'none' }}>Sign in</Link>
          <Link href="https://app.aere.health/signup" onClick={() => setMobileOpen(false)} style={{
            padding: '12px', textAlign: 'center', background: D.accent, color: 'white',
            borderRadius: 'var(--radius-md)', fontSize: 15, fontWeight: 500, textDecoration: 'none', marginTop: 4,
          }}>Request early access</Link>
        </div>
      )}

      <style>{`
        .hero-ghost-btn:hover { border-color: rgba(200,124,255,0.6) !important; }
        .integration-item:hover { color: rgba(255,255,255,1) !important; }
        .hero-headline { white-space: nowrap; }
        @media (max-width: 820px) { .hero-headline { white-space: normal !important; } }
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
    <div style={{ background: D.bgDeep, minHeight: '100vh' }}>
      <SiteNav />

      {/* ═══════════════════════ 1. HERO (dark) ═══════════════════════ */}
      <section id="hero" style={{
        background: 'linear-gradient(135deg, #150E26 0%, #1C1033 60%, #0F0D1A 100%)',
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: 'clamp(160px, calc(17vh + 20px), 220px) 24px clamp(60px, 8vh, 100px)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 820, width: '100%', position: 'relative', zIndex: 1 }}>
          <h1 className="fade-up-2 hero-headline" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 5vw, 68px)',
            fontWeight: 400, color: D.text,
            letterSpacing: '-0.03em', lineHeight: 1.08,
            margin: '20px 0 28px',
            whiteSpace: 'nowrap',
          }}>
            <span style={{ display: 'block' }}>Your entire health history.</span>
            <span style={{ display: 'block' }}>Intelligence that connects it all.</span>
          </h1>

          <p className="fade-up-3" style={{
            fontFamily: 'var(--font-sans)', fontSize: 18,
            color: D.muted, lineHeight: 1.6,
            maxWidth: 520, margin: '0 auto 36px',
          }}>
            Your labs are at Quest. Your sleep is in Oura. Your records are spread across 18 providers.
            Your provider has 15 minutes. Nobody is connecting all of this to tell you what it means
            for how long — and how well — you&apos;ll live. Until now.
          </p>

          <div className="fade-up-3" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            <Link href="https://app.aere.health/signup" style={{
              padding: '12px 28px', background: D.accent, color: 'white',
              borderRadius: 'var(--radius-md)', fontSize: 15, fontWeight: 500,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(200,124,255,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Request early access <ChevronRight size={16} />
            </Link>
            <Link href="/full#vault" className="hero-ghost-btn" style={{
              padding: '12px 28px', background: 'transparent', color: D.accent,
              border: '1px solid rgba(200,124,255,0.35)', borderRadius: 'var(--radius-md)',
              fontSize: 15, fontWeight: 500, textDecoration: 'none',
              transition: 'border-color 0.15s',
            }}>
              See how it works
            </Link>
          </div>

          <p className="fade-up-4" style={{
            fontSize: 11, color: D.mutedDim, letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            HIPAA Compliant <span style={{ color: 'rgba(200,124,255,0.3)' }}>·</span> End-to-end encrypted <span style={{ color: 'rgba(200,124,255,0.3)' }}>·</span> You own your data
          </p>
        </div>

        {/* Hero product mockup — browser chrome */}
        <div className="fade-up-5" style={{
          maxWidth: 900, width: '100%', marginTop: 56,
          position: 'relative', zIndex: 1,
          boxShadow: `0 40px 120px rgba(200,124,255,0.12), 0 20px 40px rgba(0,0,0,0.5)`,
          borderRadius: 12, overflow: 'hidden',
        }}>
          {/* Browser chrome bar */}
          <div style={{
            background: D.bgDeep, padding: '10px 16px',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
            </div>
            <div style={{
              flex: 1, textAlign: 'center', fontSize: 12,
              color: D.muted, fontFamily: 'var(--font-sans)',
            }}>
              app.aere.health
            </div>
            <div style={{ width: 52 }} />
          </div>
          {/* Mockup content */}
          <div style={{
            background: D.bgCard,
            border: `1px solid ${D.border}`, borderTop: 'none',
            padding: 'clamp(20px, 3vw, 32px)',
          }}>
            <DashboardMockup />
          </div>
        </div>

        {/* Bottom gradient for seamless transition to stats bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
          background: `linear-gradient(to bottom, transparent 0%, ${D.bgDeep} 100%)`,
          pointerEvents: 'none', zIndex: 0,
        }} />
      </section>

      {/* ═══════════════════════ 2. STATS BAR ═══════════════════════ */}
      <section style={{
        background: D.bgDeep, padding: '32px 24px',
      }}>
        <div style={{
          maxWidth: 900, margin: '0 auto',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 0, flexWrap: 'wrap',
        }}>
          {[
            { value: '120+', label: 'Biomarkers tracked' },
            { value: 'HIPAA', label: 'Compliant architecture' },
            { value: '6+', label: 'Data sources connected' },
            { value: 'Your data.', label: 'Never sold.' },
          ].map((stat, i) => (
            <div key={stat.value} style={{
              display: 'flex', alignItems: 'center',
            }}>
              {i > 0 && (
                <div style={{ width: 1, height: 40, background: 'rgba(200,124,255,0.1)', margin: '0 clamp(20px, 3vw, 40px)' }} />
              )}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: D.accent, letterSpacing: '-0.02em', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: D.muted, marginTop: 4 }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ 3. THE PROBLEM ═══════════════════════ */}
      <SectionObserver>
        <section id="problem" style={{ background: D.bgDark, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div className="problem-grid" style={{
            maxWidth: 1080, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center',
          }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 400, color: D.text,
                letterSpacing: '-0.03em', lineHeight: 1.12,
              }}>
                The average person&apos;s health history lives in 18 different places.<br /><br />
                The information exists.<br /><span style={{ color: '#FF6B2B' }}>The intelligence doesn&apos;t.</span>
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <ProblemCard icon={<FolderX size={20} color="#FFB347" />} title="Scattered records"
                body="Health data across dozens of providers. No single source of truth. Every new specialist starts from scratch." />
              <ProblemCard icon={<Unlink size={20} color="#4ECDC4" />} title="Siloed data"
                body="Oura knows your sleep. Quest knows your labs. MyFitnessPal knows your macros. None of them talk to each other." />
              <ProblemCard icon={<Clock size={20} color="#c87cff" />} title="Reactive medicine"
                body="Your provider sees you for 15 minutes, twice a year. The rest of the year, you're on your own." />
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 4. AEREVAULT ═══════════════════════ */}
      <SectionObserver>
        <section id="vault" style={{ background: D.bgPurple, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div className="vault-grid" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
            }}>
              {/* Visual — vault mockup */}
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', inset: '-10%', zIndex: 0, pointerEvents: 'none',
                  background: 'radial-gradient(ellipse at center, rgba(200,124,255,0.12) 0%, transparent 70%)',
                }} />
                <div style={{
                  position: 'relative', zIndex: 1,
                  background: D.bgCard, borderRadius: 'var(--radius-xl)',
                  border: `1px solid ${D.border}`, padding: 24,
                }}>
                  <VaultMockup />
                </div>
              </div>

              <div>
                <SectionLabel>AereVault</SectionLabel>
                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 400, color: D.text,
                  letterSpacing: '-0.02em', lineHeight: 1.12,
                  margin: '0 0 20px',
                }}>
                  Every health record you&apos;ve ever had.<br />In one place. <span style={{ color: '#c87cff' }}>Owned by you.</span>
                </h2>
                <p style={{
                  fontSize: 15, color: D.mutedBody, lineHeight: 1.8, margin: '0 0 28px',
                }}>
                  Upload anything — lab reports, imaging, physician notes, discharge summaries,
                  genetic panels, handwritten prescriptions, CGM data, EOBs. Aere reads every
                  document and extracts the data that matters.
                </p>
                <p style={{ fontSize: 15, color: D.mutedBody, lineHeight: 1.8, margin: '0 0 8px' }}>
                  Not a filing cabinet. A living health history that gets richer every time you add to it.
                </p>
                <p style={{ fontSize: 15, color: D.text, fontWeight: 500, lineHeight: 1.8, margin: '0 0 28px' }}>
                  Five years of labs tells a story one panel never could.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    'Intelligent parsing — values extracted automatically',
                    'Every document type supported',
                    'Biomarker history with trend charts',
                    'Searchable across your entire history',
                    'The longer your history, the more valuable it becomes',
                  ].map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: D.text }}>
                      <div style={{ width: 6, height: 6, background: '#9CDB7B', transform: 'rotate(45deg)', marginTop: 6, flexShrink: 0 }} />
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
          background: D.bgDeep, padding: 'clamp(64px, 8vw, 100px) 24px',
        }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20,
            }}>
              <Sparkles size={14} strokeWidth={1.75} color={D.accent} />
              <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent }}>Intelligence</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400, color: D.text,
              letterSpacing: '-0.02em', lineHeight: 1.12,
              margin: '0 0 48px',
            }}>
              This isn&apos;t storage.<br /><span style={{ color: '#c87cff' }}>This is intelligence.</span>
            </h2>

            <div className="compare-grid" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
              textAlign: 'left', marginBottom: 40,
            }}>
                {/* Standard */}
                <div style={{
                  background: D.bgCard, borderRadius: 14,
                  border: `1px solid ${D.border}`, padding: '24px 28px',
                }}>
                  <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: D.muted, marginBottom: 14 }}>Standard health app</div>
                  <p style={{ fontSize: 14, color: D.muted, lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                    &ldquo;Your LDL is 138 — flagged high.&rdquo;
                  </p>
                </div>

                {/* Aere — violet signals personalized AI */}
                <div style={{
                  background: D.accentTint, borderRadius: 14,
                  border: `1px solid ${D.borderStrong}`, padding: '24px 28px',
                }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14,
                  }}>
                    <Sparkles size={12} strokeWidth={1.75} color={D.accent} />
                    <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent }}>AereInsight</span>
                  </div>
                  <p style={{ fontSize: 14, color: D.text, lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                    &ldquo;Your LDL peaked at 158 in 2022 and has trended down to 138.
                    You&apos;re approaching the &lt;100 mg/dL threshold associated with optimal
                    cardiovascular longevity. Whatever you changed in the last 18 months is
                    working — and here&apos;s what your other markers suggest about why.&rdquo;
                  </p>
                </div>
              </div>

            <p style={{
              fontSize: 16, color: D.mutedBody, lineHeight: 1.8,
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
        <section id="features" style={{ background: D.bgDark, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 400, color: D.text,
                letterSpacing: '-0.02em', lineHeight: 1.12,
                margin: '0 0 16px',
              }}>
                Every dimension of your health.<br />Finally connected.
              </h2>
            </div>

            <div className="layers-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
            }}>
              <LayerCard icon={<FlaskConical size={20} />} iconColor="#FF4444" title="Blood & Biomarkers"
                body="From comprehensive metabolic panels to ApoB, hs-CRP, and testosterone. Optimal longevity ranges — not just standard lab normals." />
              <LayerCard icon={<Activity size={20} />} iconColor="#4ECDC4" title="Wearables & Daily Vitals"
                body="HRV, sleep, recovery, heart rate. Oura, Whoop, Garmin, Withings, and more. Updated every morning." />
              <LayerCard icon={<Dna size={20} />} iconColor="#C9A84C" title="Genetic & Advanced Testing"
                body="APOE, MTHFR, biological age clocks, cardiovascular genetic panels. Upload any report — Aere reads and contextualizes it." />
              <LayerCard icon={<TrendingUp size={20} />} iconColor="#39FF8F" title="Continuous Glucose"
                body="CGM data from Dexcom, Libre, and Stelo — connected and interpreted alongside your labs, sleep, and activity."
                badge="Coming soon" />
              <LayerCard icon={<Apple size={20} />} iconColor="#FF1493" title="Nutrition & Exercise"
                body="Macros, protein targets, micronutrients — connected to your biomarker trends. Understand what your diet is actually doing to your biology."
                badge="Coming soon" />
              <LayerCard icon={<FileText size={20} />} iconColor="#c87cff" title="Imaging & Everything Else"
                body="MRI, CT, DEXA, echocardiograms, handwritten notes, discharge summaries. If it's a health document, Aere reads it." />
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 7. AERESHARE ═══════════════════════ */}
      <SectionObserver>
        <section id="share" style={{ background: D.bgPurple, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div className="share-grid" style={{
            maxWidth: 1080, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
          }}>
            <div>
              <SectionLabel>AereShare</SectionLabel>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 400, color: D.text,
                letterSpacing: '-0.02em', lineHeight: 1.12,
                margin: '0 0 20px',
              }}>
                Your complete health history.<br />In a single link.
              </h2>
              <p style={{ fontSize: 15, color: D.mutedBody, lineHeight: 1.8, margin: '0 0 16px' }}>
                New specialist? Emergency room at 2am? Starting with a new functional medicine provider?
              </p>
              <p style={{ fontSize: 15, color: D.mutedBody, lineHeight: 1.8, margin: '0 0 16px' }}>
                Stop starting from scratch. AereShare generates a secure, time-limited link to your
                complete health summary — biomarkers, trends, pre-visit brief, and original
                documents. One tap. Everything your provider needs to actually understand you.
              </p>
              <p style={{ fontSize: 15, color: D.text, fontWeight: 500, lineHeight: 1.8, margin: '0 0 28px' }}>
                Your new cardiologist sees five years of cardiac markers before you walk in the door.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Time-limited and passcode-protected',
                  'Pre-visit brief included',
                  'Original documents accessible',
                  'Full audit trail — see who viewed, when',
                  'Revocable at any time',
                ].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: D.text }}>
                    <div style={{ width: 6, height: 6, background: '#9CDB7B', transform: 'rotate(45deg)', marginTop: 6, flexShrink: 0 }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-10%', zIndex: 0, pointerEvents: 'none',
                background: 'radial-gradient(ellipse at center, rgba(200,124,255,0.12) 0%, transparent 70%)',
              }} />
              <div style={{
                position: 'relative', zIndex: 1,
                background: D.bgCard, borderRadius: 'var(--radius-xl)',
                border: `1px solid ${D.border}`, padding: 24,
              }}>
                <ShareMockup />
              </div>
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* Section removed — will rebuild later */}

      {/* ═══════════════════════ 9. PHILOSOPHY ═══════════════════════ */}
      <SectionObserver>
        <section id="philosophy" style={{ background: D.bgDark, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div className="phil-grid" style={{
            maxWidth: 1080, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
          }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 400, color: D.text,
                letterSpacing: '-0.03em', lineHeight: 1.12,
              }}>
                Normal means status quo.<br /><br />
                <span style={{ color: D.accent }}>Optimal means all systems go.</span>
              </p>
            </div>
            <div>
              <p style={{ fontSize: 15, color: D.mutedBody, lineHeight: 1.8, margin: '0 0 16px' }}>
                Standard lab reference ranges were designed for sick care. They tell you whether you
                have a problem today. They say nothing about where you&apos;re headed.
              </p>
              <p style={{ fontSize: 15, color: D.mutedBody, lineHeight: 1.8, margin: '0 0 16px' }}>
                Aere is built around optimal longevity ranges — the evidence-based targets associated
                with a longer healthspan, grounded in functional medicine and longevity research.
              </p>
              <p style={{ fontSize: 15, color: D.text, lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
                Your provider optimizes for normal.<br />Aere optimizes for exceptional.
              </p>
              <Link href="/science" style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                marginTop: 24, fontSize: 14, fontWeight: 500,
                color: D.accent, textDecoration: 'none',
              }}>
                Explore the science <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 10. INTEGRATIONS ═══════════════════════ */}
      <SectionObserver>
        <section id="integrations" style={{ background: D.bgPurple, padding: 'clamp(64px, 8vw, 100px) 24px', textAlign: 'center' }}>
          <SectionLabel>Integrations</SectionLabel>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: 400, color: D.text,
            letterSpacing: '-0.02em', lineHeight: 1.12,
            margin: '0 0 16px',
          }}>
            Works with everything you already use
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 18,
            color: D.mutedLight, lineHeight: 1.6,
            maxWidth: 600, margin: '0 auto 48px',
          }}>
            Connect directly or upload your data — Aere works with the devices, labs, and apps you already use.
          </p>

          {/* Row 1 — Direct connections */}
          <div style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.muted, marginBottom: 24 }}>
            Connect Directly
          </div>
          <div className="integrations-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
            <IntegrationLogo name="Oura" color="#F0EAF8" />
            <IntegrationLogo name="Withings" color="#F0EAF8" />
            <IntegrationLogo name="Fitbit" color="#F0EAF8" />
            <IntegrationLogo name="Dexcom" color="#F0EAF8" />
          </div>

          {/* Divider */}
          <div style={{ height: 0, borderTop: '0.5px solid rgba(240,234,248,0.1)', maxWidth: 600, margin: '40px auto' }} />

          {/* Row 2 — Upload your data */}
          <div style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.muted, marginBottom: 24 }}>
            Upload Your Data
          </div>
          <div className="integrations-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
            <IntegrationLogo name="Epic MyChart" color="rgba(240,234,248,0.45)" />
            <IntegrationLogo name="Quest Diagnostics" color="rgba(240,234,248,0.45)" />
            <IntegrationLogo name="LabCorp" color="rgba(240,234,248,0.45)" />
            <IntegrationLogo name="Apple Health" color="rgba(240,234,248,0.45)" />
            <IntegrationLogo name="Garmin" color="rgba(240,234,248,0.45)" />
            <IntegrationLogo name="8 Sleep" color="rgba(240,234,248,0.45)" />
            <IntegrationLogo name="Whoop" color="rgba(240,234,248,0.45)" />
            <IntegrationLogo name="Cronometer" color="rgba(240,234,248,0.45)" />
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 11. WHAT AERE SEES ═══════════════════════ */}
      <SectionObserver>
        <section style={{ background: D.bgDark, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Sparkles size={14} strokeWidth={1.75} color={D.accent} />
                <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent }}>AereInsight</span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 400, color: D.text,
                letterSpacing: '-0.02em', lineHeight: 1.12,
                margin: '0 0 16px',
              }}>
                Connections no one else can make.
              </h2>
              <p style={{ fontSize: 16, color: D.muted, maxWidth: 560, margin: '0 auto' }}>
                AereInsight sees your labs, wearables, and history simultaneously — finding patterns a 15-minute appointment never could.
              </p>
            </div>

            <div className="insight-examples-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
            }}>
              <InsightExampleCard
                label="METABOLIC"
                headline="Not prediabetic. Context changes everything."
                body="Fasting glucose flagged at 106 mg/dL. But HbA1c at 5.3% — reflecting 3-month average glucose — tells a different story. CGM data shows the 106 reading captures the dawn phenomenon: a natural cortisol-driven rise, not metabolic dysfunction. Overnight readings: 82–91 mg/dL."
              />
              <InsightExampleCard
                label="CARDIOVASCULAR"
                headline="LDL elevated. The full picture is different."
                body="LDL at 105 mg/dL reads as high. But hs-CRP at 0.4 mg/L indicates very low vascular inflammation. Lp(a) at 10 nmol/L removes a major hereditary risk factor. Triglycerides at 97 mg/dL signal healthy insulin sensitivity. The cardiovascular risk profile is more favorable than LDL alone suggests."
              />
              <InsightExampleCard
                label="CROSS-SOURCE"
                headline="Your data connected across every source."
                body="Testosterone trending down 18% over 6 months. In the same period, deep sleep declined from 1h 42m to 58 minutes per night. Dietary zinc consistently below threshold. This pattern is consistent with sleep-mediated testosterone suppression — your labs and sleep data are telling the same story."
              />
            </div>

            <p style={{ fontSize: 12, color: D.muted, textAlign: 'center', fontStyle: 'italic', marginTop: 24 }}>
              These are illustrative examples of the types of connections AereInsight makes. Results are based on your personal confirmed health data.
            </p>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ WHY AERE EXISTS ═══════════════════════ */}
      <section style={{ background: D.bgPurple, padding: '140px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{
            fontSize: 13, fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.08em', color: D.accent,
            fontFamily: 'var(--font-sans)',
          }}>
            Why Aere Exists
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 24, lineHeight: 1.7, color: D.mutedLight,
            margin: '32px 0 0',
          }}>
            Astronauts have it. Elite athletes have it. Critical
            care patients have it — complete, continuous monitoring
            of every system in their body, with experts who help
            them act on it.
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: 1.25, color: D.text,
            letterSpacing: '-0.02em',
            margin: '40px 0 0',
          }}>
            Every person deserves this.<br />That&apos;s why Aere exists.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 24, lineHeight: 1.7, color: D.mutedLight,
            margin: '24px 0 0',
          }}>
            You wear a ring, a watch, get your labs done, track
            your sleep. That data is yours. Aere is the intelligence
            that connects it all and makes sense of it — so you can
            live better, longer.
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 6vw, 56px)', color: '#00E5FF',
            letterSpacing: '-0.02em', lineHeight: 1.1,
            margin: '56px 0 0',
          }}>
            Own Your Health.
          </p>
        </div>
      </section>

      {/* ═══════════════════════ WHAT AERE IS ═══════════════════════ */}
      <SectionObserver>
        <section style={{ background: D.bgDark, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <SectionLabel>What Aere Is — And Isn&apos;t</SectionLabel>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 18,
              color: D.mutedLight, lineHeight: 1.8,
              margin: '0 0 28px',
            }}>
              Aere is not a healthcare platform. We don&apos;t diagnose, treat, or replace your provider.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 18,
              color: D.mutedLight, lineHeight: 1.8,
              margin: '0 0 28px',
            }}>
              We do something your provider can&apos;t — connect every data source in your
              health story and surface the intelligence hidden across all of it.
            </p>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px, 3vw, 32px)',
              color: D.text, letterSpacing: '-0.02em',
              lineHeight: 1.3, margin: 0,
            }}>
              That&apos;s healthspan intelligence.
            </p>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 12. PRICING ═══════════════════════ */}
      <SectionObserver>
        <PricingSection />
      </SectionObserver>

      {/* ═══════════════════════ 12. TRUST (white) ═══════════════════════ */}
      <SectionObserver>
        <section id="security" style={{ background: D.bgDark, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 400, color: D.text,
              letterSpacing: '-0.02em', lineHeight: 1.12,
              margin: '0 0 8px',
            }}>
              HIPAA-compliant from day one.
            </h2>
            <p style={{ fontSize: 16, color: D.muted, margin: '0 0 48px' }}>
              Your data is yours. Full stop.
            </p>

            <div className="trust-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
              textAlign: 'left',
            }}>
              <TrustItemLight icon={<Shield size={20} />} text="End-to-end encrypted. TLS 1.3 in transit, AES-256 at rest." />
              <TrustItemLight icon={<Lock size={20} />} text="HIPAA-compliant with signed BAAs on all infrastructure." />
              <TrustItemLight icon={<Eye size={20} />} text="Row-level security. Your data is never accessible to other users." />
              <TrustItemLight icon={<FileText size={20} />} text="Complete audit trail. Every access, every share, logged." />
              <TrustItemLight icon={<Share2 size={20} />} text="You control every share. Time-limited, revocable, audited." />
              <TrustItemLight icon={<Ban size={20} />} text="We never sell your data. Your health information is never used to train AI models." />
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 13. FOR PRACTITIONERS ═══════════════════════ */}
      <SectionObserver>
        <section id="practitioners" style={{ background: D.bgPurple, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div className="prac-grid" style={{
            maxWidth: 1080, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent, marginBottom: 14 }}>For Practitioners</div>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 400, color: D.text,
                letterSpacing: '-0.02em', lineHeight: 1.12,
                margin: '0 0 20px',
              }}>
                Make every 15 minutes count.
              </h2>
              <p style={{ fontSize: 15, color: D.mutedBody, lineHeight: 1.8, margin: '0 0 28px' }}>
                Your clients arrive with years of context — labs, wearable data, trends,
                pre-visit briefs generated by Aere. No more starting from scratch.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: <Users size={18} />, text: 'Client roster with health scores and flags' },
                  { icon: <Zap size={18} />, text: 'Aere pre-visit briefs — complete context in 60 seconds' },
                  { icon: <BarChart3 size={18} />, text: 'Full biomarker history with longitudinal trends' },
                  { icon: <Lock size={18} />, text: 'HIPAA-compliant with full audit trail' },
                  { icon: <Share2 size={18} />, text: 'Clients share exactly what they choose' },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: D.text }}>
                    <div style={{ color: D.accent, flexShrink: 0 }}>{icon}</div>
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
        background: D.bgDeep,
        padding: 'clamp(64px, 8vw, 100px) 24px', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 400, color: D.text,
            letterSpacing: '-0.02em', lineHeight: 1.12,
            margin: '0 0 20px',
          }}>
            Start building your health legacy today.
          </h2>
          <p style={{ fontSize: 16, color: D.mutedBody, lineHeight: 1.8, margin: '0 0 16px' }}>
            Every lab you upload. Every wearable you connect. Every year that passes. Your health
            picture in Aere gets richer, more complete, more valuable — and more irreplaceable.
          </p>
          <p style={{ fontSize: 16, color: D.text, lineHeight: 1.8, fontWeight: 500, margin: '0 0 36px' }}>
            The best time to start was five years ago.<br />The second best time is today.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://app.aere.health/signup" style={{
              padding: '14px 32px', background: D.accent, color: 'white',
              borderRadius: 'var(--radius-md)', fontSize: 16, fontWeight: 500,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(200,124,255,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Start your free trial <ChevronRight size={16} />
            </Link>
            <Link href="/full#pricing" style={{
              padding: '14px 32px', background: 'none', color: D.accent,
              border: `1px solid ${D.border}`, borderRadius: 'var(--radius-md)',
              fontSize: 16, fontWeight: 500, textDecoration: 'none',
            }}>See pricing</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 15. FOOTER ═══════════════════════ */}
      <footer style={{
        background: D.bgDeep, padding: '48px 24px 32px',
      }}>
        <div className="footer-grid" style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: D.accent, letterSpacing: '-0.03em', marginBottom: 8 }}>Aere.</div>
            <p style={{ fontSize: 12, color: D.mutedDim, lineHeight: 1.6 }}>Own Your Health.<br />The Healthspan Intelligence Platform.</p>
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
          maxWidth: 1000, margin: '32px auto 0', borderTop: `1px solid ${D.border}`,
          paddingTop: 24, textAlign: 'center',
        }}>
          <p style={{ fontSize: 11, color: D.mutedDim, margin: 0 }}>
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
          .insight-examples-grid { grid-template-columns: 1fr !important; }
          .integrations-row { gap: 32px !important; }
          .testimonial-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .layers-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  Sub-components                                                           */
/* ═══════════════════════════════════════════════════════════════════════════ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 13, fontWeight: 600, textTransform: 'uppercase',
      letterSpacing: '0.08em', color: D.accent, marginBottom: 16,
    }}>{children}</div>
  )
}

/* ── Inline SVG integration logos ── */
const INTEGRATION_SVGS: Record<string, (color: string) => React.ReactNode> = {
  Oura: (c) => (
    <svg height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11S20.075 3 14 3Zm0 17.6c-3.64 0-6.6-2.96-6.6-6.6s2.96-6.6 6.6-6.6 6.6 2.96 6.6 6.6-2.96 6.6-6.6 6.6Z" fill={c}/>
      <path d="M40.5 22.5c-1.3 0-2.3-.4-3-1.3-.7-.9-1-2-1-3.5V11h2.4v6.4c0 1 .2 1.7.5 2.2.4.5.9.7 1.6.7.8 0 1.4-.3 1.9-.9.5-.6.7-1.4.7-2.5V11H46v11.3h-2.3v-1.6c-.4.6-.9 1-1.4 1.3-.6.3-1.2.5-1.8.5ZM50.6 22.3V11h2.3v1.7c.4-.6.8-1.1 1.4-1.4.6-.3 1.2-.5 1.9-.5v2.5h-.6c-.8 0-1.5.2-2 .7-.5.5-.7 1.2-.7 2.3v6h-2.4ZM64.1 22.3c-.5-.6-.7-1.4-.7-2.5v-.2c-.4.9-1 1.6-1.8 2.1-.8.5-1.6.8-2.6.8-1.2 0-2.2-.4-3-1.1-.8-.7-1.2-1.7-1.2-2.9 0-1.3.5-2.3 1.5-3 1-.7 2.4-1 4.2-1h2.6v-.4c0-.8-.2-1.4-.7-1.8-.5-.4-1.2-.6-2-.6-.7 0-1.3.2-1.8.5-.5.3-.8.8-.9 1.3h-2.4c.1-1.1.6-2 1.5-2.7.9-.7 2.1-1 3.6-1 1.5 0 2.7.4 3.5 1.1.8.7 1.3 1.8 1.3 3.1v5.2c0 .7.1 1.3.3 1.6v.2h-2.3Zm-4.2-1.8c.8 0 1.5-.3 2.1-.8.6-.5.9-1.1 1.1-1.9v-1.2h-2.3c-1.1 0-1.9.2-2.5.6-.6.4-.8.9-.8 1.6s.2 1.2.7 1.5c.4.3 1 .5 1.7.5Z" fill={c}/>
    </svg>
  ),
  Withings: (c) => (
    <svg height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8 8l3.7 10.5L18 8h2.6l3.5 10.5L27.8 8h2.6l-5 14h-2.6L19.4 11.7 15.9 22h-2.6L8.2 8h2.6Zm23.7-1.2c.5 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.5-1.1.5-.5 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.5.2-.8.5-1.1.3-.3.6-.5 1.1-.5ZM33.3 22V8.7h2.3V22h-2.3Zm7.7-11.1v-3h2.4v3h2.2v1.9H43.4v6.8c0 .4.1.7.3.9.2.2.5.3.9.3h1.1V22h-1.5c-1 0-1.8-.3-2.3-.8-.5-.5-.8-1.3-.8-2.3V12.8h-1.8v-1.9h1.8Zm7.2 0v6.4c0 1 .2 1.7.5 2.2.4.5.9.7 1.6.7.8 0 1.4-.3 1.9-.9.5-.6.7-1.4.7-2.5V10.9h2.3V22h-2.3v-1.6c-.4.6-.9 1-1.4 1.3-.6.3-1.2.5-1.8.5-1.3 0-2.3-.4-3-1.3-.7-.9-1-2-1-3.5V10.9h2.4Zm10 0v6.4c0 1 .2 1.7.5 2.2.4.5.9.7 1.6.7.8 0 1.4-.3 1.9-.9.5-.6.7-1.4.7-2.5V10.9h2.3V22h-2.3v-1.6c-.4.6-.9 1-1.4 1.3-.6.3-1.2.5-1.8.5-1.3 0-2.3-.4-3-1.3-.7-.9-1-2-1-3.5V10.9h2.4Zm12.5 4.6h6c-.1-1-.5-1.7-1-2.3-.6-.5-1.3-.8-2.1-.8-.8 0-1.5.3-2.1.8-.5.5-.8 1.3-.9 2.3Zm6.1 3.7c-.4.8-1 1.5-1.8 2-.8.5-1.7.8-2.8.8-1.7 0-3-.5-4-1.6-1-1.1-1.5-2.5-1.5-4.3v-.3c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.6 3.8-1.6 1.6 0 2.8.5 3.7 1.5.9 1 1.4 2.3 1.4 3.9v1.1h-8.1c.1 1.1.4 1.9 1 2.5.6.6 1.4.9 2.4.9.8 0 1.4-.1 1.9-.4.5-.3.9-.7 1.2-1.1l1.4 1Zm3.4.3c.5 0 1-.2 1.4-.5.4-.3.6-.7.7-1.3h2.2c0 .7-.2 1.3-.6 1.9-.4.6-.9 1.1-1.6 1.4-.7.3-1.4.5-2.1.5-1.6 0-2.8-.5-3.7-1.6-.9-1.1-1.4-2.5-1.4-4.3v-.2c0-1.7.5-3.1 1.4-4.2.9-1.1 2.2-1.6 3.7-1.6 1.2 0 2.2.4 3 1.1.8.7 1.3 1.7 1.3 3h-2.2c-.1-.7-.3-1.2-.7-1.6-.4-.4-.9-.6-1.5-.6-.8 0-1.5.3-1.9 1-.5.7-.7 1.6-.7 2.9v.2c0 1.3.2 2.3.7 3 .4.7 1.1 1 1.9 1Zm8.3 1.3c-.5 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.5.2-.8.5-1.1.3-.3.7-.5 1.1-.5s.8.2 1.1.5c.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.5-1.1.5Z" fill={c}/>
    </svg>
  ),
  Fitbit: (c) => (
    <svg height="28" viewBox="0 0 70 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 8.5h8.5v2H7.4v3.2h5.5v2H7.4V22H5V8.5Zm11.5-1.7c.5 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.5-1.1.5-.5 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.5.2-.8.5-1.1.3-.3.6-.5 1.1-.5Zm-1.2 4.2h2.4V22h-2.4V11Zm6.8 0v-3h2.4v3h2.2v1.9h-2.2v6.8c0 .4.1.7.3.9.2.2.5.3.9.3H27V22h-1.5c-1 0-1.8-.3-2.3-.8-.5-.5-.8-1.3-.8-2.3V12.9h-1.8V11h1.8Zm7.8 0h.5c.7 0 1.3-.1 1.8-.4V8.5h2.3V22H32v-1.5c-.4.6-.8 1-1.4 1.3-.6.3-1.2.4-1.9.4-1.4 0-2.5-.6-3.3-1.7-.8-1.1-1.2-2.5-1.2-4.2v-.2c0-1.7.4-3.1 1.2-4.2.8-1.1 1.9-1.7 3.3-1.7.7 0 1.3.2 1.8.5.5.3 1 .7 1.3 1.3V11Zm.5 9.2c.8 0 1.4-.3 1.8-.8V13.6c-.4-.6-1.1-.9-1.8-.9-.9 0-1.6.4-2 1.1-.5.7-.7 1.6-.7 2.7v.2c0 1.1.2 2 .7 2.7.4.7 1.1 1 2 1Zm8.2-13.4c.5 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.5-1.1.5-.5 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.5.2-.8.5-1.1.3-.3.6-.5 1.1-.5ZM37.4 22V11h2.4v11h-2.4Zm6.8 0V11h2.4v11h-2.4Zm1.2-15c.5 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.5-1.1.5-.5 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.5.2-.8.5-1.1.3-.3.6-.5 1.1-.5Z" fill={c}/>
    </svg>
  ),
  Dexcom: (c) => (
    <svg height="28" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 8.5h4.7c2 0 3.6.6 4.8 1.8 1.2 1.2 1.8 2.8 1.8 4.8v.2c0 2-.6 3.6-1.8 4.8-1.2 1.2-2.8 1.8-4.8 1.8H5.5V8.5ZM8 10.4v9.5h2.1c1.3 0 2.3-.4 3.1-1.3.8-.9 1.1-2 1.1-3.4v-.2c0-1.4-.4-2.5-1.1-3.4-.8-.8-1.8-1.3-3.1-1.3H8Zm16.8 3.2h6c-.1-1-.5-1.7-1-2.3-.6-.5-1.3-.8-2.1-.8-.8 0-1.5.3-2.1.8-.5.5-.8 1.3-.9 2.3Zm6 3.7c-.3.8-1 1.5-1.7 2-.8.5-1.7.8-2.8.8-1.7 0-3-.5-4-1.6-1-1.1-1.5-2.5-1.5-4.3v-.3c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.6 3.8-1.6 1.6 0 2.8.5 3.7 1.5.9 1 1.4 2.3 1.4 3.9v1.1h-8.1c.1 1.1.4 1.9 1 2.5.6.6 1.4.9 2.4.9.8 0 1.4-.1 1.9-.4.5-.3.9-.7 1.2-1.1l1.4 1ZM36 22l-3.9-5.3L35.9 11h2.7l-2.8 3.8L37 16.5 40.3 22h-2.6l-1.3-3.3Zm4.8-5.6v-.2c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.7 3.9-1.7 1 0 1.8.2 2.5.6.7.4 1.3 1 1.7 1.8l-1.8 1.1c-.3-.5-.6-.8-1-1.1-.4-.3-.9-.4-1.4-.4-.9 0-1.7.4-2.2 1.1-.5.7-.8 1.7-.8 2.9v.2c0 1.2.3 2.2.8 2.9.5.7 1.3 1.1 2.2 1.1.5 0 1-.1 1.4-.4.4-.3.8-.6 1-1.1l1.8 1.1c-.4.8-1 1.4-1.7 1.8-.7.4-1.6.6-2.5.6-1.6 0-2.9-.6-3.9-1.7-1-1.1-1.5-2.6-1.5-4.3Zm16.2-.2c0-1.2-.3-2.2-.8-2.9-.5-.7-1.3-1.1-2.2-1.1-.9 0-1.7.4-2.2 1.1-.5.7-.8 1.7-.8 2.9v.2c0 1.2.3 2.2.8 2.9.5.7 1.3 1.1 2.2 1.1.9 0 1.7-.4 2.2-1.1.5-.7.8-1.7.8-2.9v-.2Zm-8.3.2v-.2c0-1.8.5-3.2 1.5-4.3 1-1.1 2.4-1.7 4-1.7s3 .6 4 1.7c1 1.1 1.5 2.5 1.5 4.3v.2c0 1.8-.5 3.2-1.5 4.3-1 1.1-2.4 1.7-4 1.7s-3-.6-4-1.7c-1-1.1-1.5-2.5-1.5-4.3Zm18.3-.1v.2c0 1.1.2 2 .7 2.7.5.7 1.2 1.1 2.1 1.1.8 0 1.4-.3 1.8-.8.5-.5.7-1.2.7-2v-.1c0-.9-.2-1.6-.7-2.1-.5-.5-1.1-.8-1.8-.8-.9 0-1.6.3-2.1 1-.5.7-.7 1.6-.7 2.7Zm-2.3.1V11h2.3v1.5c.4-.6.8-1 1.4-1.3.6-.3 1.2-.5 1.9-.5 1.3 0 2.4.6 3.2 1.7.8 1.1 1.2 2.5 1.2 4.2v.2c0 1.7-.4 3.1-1.2 4.2-.8 1.1-2 1.7-3.3 1.7-.7 0-1.3-.2-1.8-.5-.5-.3-1-.7-1.3-1.3v5.1h-2.3V16.4Zm12.3-.5v-.2c0-1.2.3-2.2.8-2.9.5-.7 1.2-1 2.1-1 .9 0 1.6.4 2.1 1.1v-5h2.3V22H86v-1.5c-.4.6-.8 1-1.3 1.3-.5.3-1.1.5-1.8.5-1.3 0-2.4-.6-3.2-1.7-.8-1.1-1.2-2.5-1.2-4.2Zm2.3.2c0 1.1.2 2 .7 2.7.5.7 1.1 1 2 1 .8 0 1.4-.3 1.8-.9v-5.5c-.5-.6-1.1-.9-1.8-.9-.9 0-1.5.4-2 1.1-.5.7-.7 1.6-.7 2.7v.2Z" fill={c}/>
    </svg>
  ),
  'Epic MyChart': (c) => (
    <svg height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 8.5h9v2H7.4v3h6v2h-6v3.3H14V22H5V8.5Zm12.7 2.6h2.3v1.5c.4-.6.8-1 1.4-1.3.6-.3 1.2-.5 1.9-.5 1.4 0 2.5.6 3.3 1.7.8 1.1 1.2 2.5 1.2 4.2v.2c0 1.7-.4 3.1-1.2 4.2-.8 1.1-1.9 1.7-3.3 1.7-.7 0-1.3-.2-1.8-.5-.5-.3-1-.7-1.3-1.3V27h-2.3V11.1Zm2.3 5.4c0 1.1.2 2 .7 2.7.5.7 1.1 1 2 1 .8 0 1.4-.3 1.8-.8v-5.8c-.4-.6-1.1-.9-1.8-.9-.9 0-1.6.4-2 1.1-.5.7-.7 1.6-.7 2.7Zm10-9.7c.5 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.5-1.1.5-.5 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.5.2-.8.5-1.1.3-.3.6-.5 1.1-.5Zm-1.2 4.2h2.4V22h-2.4V11Zm5.1 5.2v-.2c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.7 3.9-1.7 1 0 1.8.2 2.5.6.7.4 1.3 1 1.7 1.8l-1.8 1.1c-.3-.5-.6-.8-1-1.1-.4-.3-.9-.4-1.4-.4-.9 0-1.7.4-2.2 1.1-.5.7-.8 1.7-.8 2.9v.2c0 1.2.3 2.2.8 2.9.5.7 1.3 1.1 2.2 1.1.5 0 1-.1 1.4-.4.4-.3.8-.6 1-1.1l1.8 1.1c-.4.8-1 1.4-1.7 1.8-.7.4-1.6.6-2.5.6-1.6 0-2.9-.6-3.9-1.7-1-1.1-1.5-2.6-1.5-4.3Zm23.2-5.1h2.5L55.3 22h-2.5l-2.1-6.2-2.2 6.2H46l-4.2-10.8h2.5l3 7.4 2.2-7.4h1.8l2.2 7.4 3-7.4ZM60 11.1v6.4c0 1 .2 1.7.5 2.2.4.5.9.7 1.6.7.8 0 1.4-.3 1.9-.9.5-.6.7-1.4.7-2.5V11h2.3V22h-2.3v-1.6c-.4.6-.9 1-1.4 1.3-.6.3-1.2.5-1.8.5-1.3 0-2.3-.4-3-1.3-.7-.9-1-2-1-3.5V11h2.4Zm17 6c-.4.8-1 1.5-1.8 2-.8.5-1.7.8-2.8.8-1.7 0-3-.5-4-1.6-1-1.1-1.5-2.5-1.5-4.3v-.3c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.6 3.8-1.6 1.6 0 2.8.5 3.7 1.5.9 1 1.4 2.3 1.4 3.9v1.1H69c.1 1.1.4 1.9 1 2.5.6.6 1.4.9 2.4.9.8 0 1.4-.1 1.9-.4.5-.3.9-.7 1.2-1.1l1.4 1ZM69 13.7h6c-.1-1-.5-1.7-1-2.3-.6-.5-1.3-.8-2.1-.8-.8 0-1.5.3-2.1.8-.5.5-.8 1.3-.9 2.3Zm14.2-2.6v-3h2.4v3H88v1.9h-2.2v6.8c0 .4.1.7.3.9.2.2.5.3.9.3h1.1V22h-1.5c-1 0-1.8-.3-2.3-.8-.5-.5-.8-1.3-.8-2.3V12.9H81.8V11h1.4Zm-3.5 1.8c-.3-.5-.6-.8-1-1.1-.4-.3-.9-.4-1.4-.4-.9 0-1.7.4-2.2 1.1-.5.7-.8 1.7-.8 2.9v.2c0 1.2.3 2.2.8 2.9.5.7 1.3 1.1 2.2 1.1.5 0 1-.1 1.4-.4.4-.3.8-.6 1-1.1" fill={c}/>
    </svg>
  ),
  'Quest Diagnostics': (c) => (
    <svg height="28" viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6 5.5c-4.6 0-8.3 3.7-8.3 8.3 0 4.6 3.7 8.3 8.3 8.3 1.6 0 3.1-.5 4.4-1.3l2 2 1.6-1.6-2-2c.8-1.2 1.3-2.7 1.3-4.4 0-4.6-3.7-8.3-8.3-8.3Zm0 14.3c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6Zm13.3-8.6v6.4c0 1 .2 1.7.5 2.2.4.5.9.7 1.6.7.8 0 1.4-.3 1.9-.9.5-.6.7-1.4.7-2.5V11.2h2.3V22h-2.3v-1.6c-.4.6-.9 1-1.4 1.3-.6.3-1.2.5-1.8.5-1.3 0-2.3-.4-3-1.3-.7-.9-1-2-1-3.5V11.2h2.4Zm13.9 3.2h6c-.1-1-.5-1.7-1-2.3-.6-.5-1.3-.8-2.1-.8-.8 0-1.5.3-2.1.8-.5.5-.8 1.3-.9 2.3Zm6.1 3.7c-.4.8-1 1.5-1.8 2-.8.5-1.7.8-2.8.8-1.7 0-3-.5-4-1.6-1-1.1-1.5-2.5-1.5-4.3v-.3c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.6 3.8-1.6 1.6 0 2.8.5 3.7 1.5.9 1 1.4 2.3 1.4 3.9v1.1h-8.1c.1 1.1.4 1.9 1 2.5.6.6 1.4.9 2.4.9.8 0 1.4-.1 1.9-.4.5-.3.9-.7 1.2-1.1l1.4 1Zm3.8.3c.5 0 1-.1 1.3-.4.4-.3.6-.7.6-1.2h2.2c0 .6-.2 1.2-.5 1.8-.4.5-.9 1-1.5 1.3-.7.3-1.4.5-2.1.5-1.5 0-2.7-.5-3.6-1.6-.9-1-1.3-2.5-1.3-4.3v-.3c0-1.7.4-3.1 1.3-4.2.9-1.1 2.1-1.7 3.6-1.7 1.2 0 2.1.3 2.9 1 .7.7 1.1 1.6 1.2 2.8h-2.2c0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.4-.6-.8 0-1.5.3-1.9 1-.4.7-.7 1.7-.7 3v.3c0 1.3.2 2.3.7 3 .4.7 1.1 1 1.9 1Zm8.9-7v-3h2.4v3h2.1v1.9h-2.1v6.8c0 .4.1.7.3.9.2.2.5.3.9.3h1.1V22h-1.5c-1 0-1.8-.3-2.3-.8-.5-.5-.8-1.3-.8-2.3V13h-1.8V11h1.8ZM88 8.5h4.7c2 0 3.6.6 4.8 1.8 1.2 1.2 1.8 2.8 1.8 4.8v.2c0 2-.6 3.6-1.8 4.8-1.2 1.2-2.8 1.8-4.8 1.8H88V8.5Zm2.4 2v9.5h2.1c1.3 0 2.3-.4 3.1-1.3.8-.9 1.1-2 1.1-3.4v-.2c0-1.4-.4-2.5-1.1-3.4-.8-.8-1.8-1.3-3.1-1.3h-2.1Zm12.3-3.7c.5 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.5-1.1.5-.5 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.5.2-.8.5-1.1.3-.3.6-.5 1.1-.5Zm-1.2 4.2h2.4V22h-2.4V11Zm10.6 3.3c-.5-.6-1.1-.9-1.8-.9-.9 0-1.6.3-2.1 1-.5.7-.7 1.6-.7 2.8v.2c0 1.2.2 2.1.7 2.8.5.7 1.2 1 2.1 1 .7 0 1.3-.3 1.8-.9v-6Zm2.3-3.3V22h-2.3v-1.5c-.8 1.1-1.8 1.7-3.2 1.7-1.3 0-2.3-.6-3.1-1.7-.8-1.1-1.2-2.5-1.2-4.2v-.2c0-1.7.4-3.1 1.2-4.2.8-1.2 1.9-1.7 3.2-1.7 1.3 0 2.3.5 3.1 1.6V11h2.3Zm9.4 4.6c0-1.2-.2-2.1-.7-2.8-.5-.7-1.2-1.1-2-1.1-.8 0-1.5.3-2 .8v5.7c.5.5 1.2.8 2 .8.8 0 1.5-.4 2-1.1.5-.7.7-1.6.7-2.8v-.4Zm2.3-.2v.3c0 1.8-.4 3.2-1.3 4.3-.9 1.1-2.1 1.7-3.5 1.7-1.3 0-2.4-.6-3.1-1.7v1.4c0 1.1-.2 2-.7 2.6-.5.6-1.1 1-2 1h-.6v-1.9h.3c.5 0 .8-.2 1-.5.2-.3.3-.8.3-1.4V11h2.4v1.5c.7-1.1 1.8-1.7 3.1-1.7 1.5 0 2.6.6 3.5 1.7.9 1.1 1.3 2.5 1.3 4.3v-.2Zm3.2-1.8c.5-.7 1.2-1 2.1-1 1.3 0 2.3.4 3 1.3.7.9 1 2 1 3.5V22h-2.4v-6.4c0-1-.2-1.7-.5-2.2-.4-.5-.9-.7-1.6-.7-.8 0-1.4.3-1.9.9-.5.6-.7 1.4-.7 2.5V22h-2.3V11h2.3v1.7c.4-.6.8-1 1.4-1.3-.1 0 .1-.1.5-.2Zm10.5-2c1.6 0 2.8.5 3.8 1.6 1 1.1 1.5 2.5 1.5 4.3v.2c0 1.8-.5 3.2-1.5 4.3-1 1.1-2.3 1.7-3.8 1.7s-2.9-.6-3.8-1.7c-1-1.1-1.5-2.5-1.5-4.3v-.2c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.6 3.8-1.6Zm0 1.9c-.9 0-1.6.4-2.2 1.1-.5.7-.8 1.7-.8 2.9v.2c0 1.2.3 2.2.8 2.9.5.7 1.3 1.1 2.2 1.1.9 0 1.6-.4 2.2-1.1.5-.7.8-1.7.8-2.9v-.2c0-1.2-.3-2.2-.8-2.9-.6-.7-1.3-1.1-2.2-1.1Zm7.6 1.3c.5 0 1-.1 1.3-.4.4-.3.6-.7.6-1.2h2.2c0 .6-.2 1.2-.5 1.8-.4.5-.9 1-1.5 1.3-.7.3-1.4.5-2.1.5-1.5 0-2.7-.5-3.6-1.6-.9-1-1.3-2.5-1.3-4.3v-.3c0-1.7.4-3.1 1.3-4.2.9-1.1 2.1-1.7 3.6-1.7 1.2 0 2.1.3 2.9 1 .7.7 1.1 1.6 1.2 2.8H148c0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.4-.6-.8 0-1.5.3-1.9 1-.4.7-.7 1.7-.7 3v.3c0 1.3.2 2.3.7 3 .4.7 1.1 1 1.9 1Zm6.7 1.1c.5.5 1.2.8 2 .8.5 0 1-.1 1.4-.4.4-.3.6-.7.7-1.2h2.1c-.1 1-.5 1.8-1.3 2.5-.8.6-1.8 1-2.9 1-1.6 0-2.9-.5-3.8-1.6-1-1.1-1.5-2.5-1.5-4.3v-.2c0-1.8.5-3.2 1.4-4.3 1-1.1 2.2-1.6 3.8-1.6 1.2 0 2.2.3 3 1 .8.7 1.2 1.6 1.3 2.8h-2.1c-.1-.6-.3-1.1-.7-1.5-.4-.4-.9-.6-1.5-.6-.9 0-1.6.4-2.1 1.1-.5.7-.8 1.7-.8 2.9v.2c0 1.2.3 2.1.8 2.8Z" fill={c}/>
    </svg>
  ),
  LabCorp: (c) => (
    <svg height="28" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 8.5h2.4v11.3H14V22H5V8.5Zm17.6 5.9c-.5-.6-1.1-.9-1.8-.9-.9 0-1.5.3-2 1-.5.7-.7 1.6-.7 2.7v.2c0 1.1.2 2 .7 2.7.5.7 1.1 1 2 1 .7 0 1.3-.3 1.8-.8V14.4Zm2.3-3.3V22h-2.3v-1.5c-.4.5-.8 1-1.4 1.3-.6.3-1.2.5-1.9.5-1.4 0-2.5-.6-3.2-1.7-.8-1.1-1.2-2.5-1.2-4.2v-.2c0-1.7.4-3.1 1.2-4.2.8-1.1 1.9-1.7 3.3-1.7.7 0 1.3.2 1.8.5.5.3 1 .7 1.3 1.3V11.1h2.3Zm4.6 0h.5c.7 0 1.3-.1 1.8-.4V8.5h2.3V22H31.8v-1.5c-.4.6-.8 1-1.4 1.3-.6.3-1.2.4-1.9.4-1.4 0-2.5-.6-3.3-1.7-.8-1.1-1.2-2.5-1.2-4.2v-.2c0-1.7.4-3.1 1.2-4.2.8-1.1 1.9-1.7 3.3-1.7.7 0 1.3.2 1.8.5.5.3 1 .7 1.3 1.3v-1.6Zm.5 9.2c.8 0 1.4-.3 1.8-.8v-5.8c-.4-.6-1.1-.9-1.8-.9-.9 0-1.6.4-2 1.1-.5.7-.7 1.6-.7 2.7v.2c0 1.1.2 2 .7 2.7.4.7 1.1 1 2 1Zm11.8-2.7c-.5.7-1.2 1.2-2 1.6-.8.4-1.7.5-2.7.5-1.7 0-3-.5-4-1.6-1-1.1-1.5-2.5-1.5-4.3v-.3c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.6 3.9-1.6 1 0 1.8.2 2.5.6.7.4 1.3 1 1.7 1.8l-1.8 1.1c-.3-.5-.6-.8-1-1.1-.4-.3-.9-.4-1.4-.4-.9 0-1.7.4-2.2 1.1-.5.7-.8 1.7-.8 2.9v.2c0 1.2.3 2.2.8 2.9.5.7 1.3 1.1 2.2 1.1.5 0 1-.1 1.4-.4.4-.3.8-.6 1-1.1l1.8 1.1Zm3.5-5.3c0-1.2.3-2.2.8-2.9.5-.7 1.3-1.1 2.2-1.1.9 0 1.6.4 2.2 1.1.5.7.8 1.7.8 2.9v.2c0 1.2-.3 2.2-.8 2.9-.5.7-1.3 1.1-2.2 1.1-.9 0-1.6-.4-2.2-1.1-.5-.7-.8-1.7-.8-2.9v-.2Zm-2.3.2v-.2c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.7 4-1.7 1.6 0 3 .6 4 1.7 1 1.1 1.5 2.5 1.5 4.3v.2c0 1.8-.5 3.2-1.5 4.3-1 1.1-2.4 1.7-4 1.7-1.6 0-3-.6-4-1.7-1-1.1-1.5-2.5-1.5-4.3Zm14.2-3.3v1.7c.4-.6.8-1.1 1.4-1.4.6-.3 1.2-.5 1.9-.5v2.5h-.6c-.8 0-1.5.2-2 .7-.5.5-.7 1.2-.7 2.3v6h-2.4V11.1h2.3Zm6.3 2.6h2.3v1.5c.4-.6.8-1 1.4-1.3.6-.3 1.2-.5 1.9-.5 1.4 0 2.5.6 3.3 1.7.8 1.1 1.2 2.5 1.2 4.2v.2c0 1.7-.4 3.1-1.2 4.2-.8 1.1-2 1.7-3.3 1.7-.7 0-1.3-.2-1.8-.5-.5-.3-1-.7-1.3-1.3V27h-2.3V13.7Zm2.3 2.8c0 1.1.2 2 .7 2.7.5.7 1.1 1 2 1 .8 0 1.4-.3 1.8-.8v-5.8c-.4-.6-1.1-.9-1.8-.9-.9 0-1.6.4-2 1.1-.5.7-.7 1.6-.7 2.7Z" fill={c}/>
    </svg>
  ),
  'Apple Health': (c) => (
    <svg height="28" viewBox="0 0 130 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3 8.8c-.5-.6-1.3-1-2.2-1-.4 0-.8.1-1.2.2.8.5 1.4 1.2 1.7 2.1.2-.5.6-.9 1.1-1.1.2-.1.4-.1.6-.2ZM9.7 8c-1.5 0-2.8.7-3.6 1.8C5.3 11 5 12.5 5 14.2c0 2.2.6 4.2 1.6 5.7 1 1.4 2 2.3 3 2.3.5 0 1-.2 1.6-.4.5-.2 1-.4 1.5-.4.5 0 1 .1 1.4.4.5.2 1 .4 1.5.4 1.2 0 2.3-1.2 3.2-2.9-1.3-.7-2.2-2-2.2-3.6 0-1.5.8-2.8 2-3.5-.8-1-2-1.7-3.3-1.7-.6 0-1.1.2-1.6.4-.5.2-1 .4-1.5.4-.4 0-.8-.1-1.3-.4C10.5 8.2 10.1 8 9.7 8Z" fill={c}/>
      <path d="M26.4 22V8.5h2.4v5.2h5.5V8.5h2.4V22h-2.4v-6.3h-5.5V22h-2.4Zm19 .2c-1.7 0-3-.5-4-1.6-1-1.1-1.5-2.5-1.5-4.3v-.3c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.6 3.8-1.6 1.6 0 2.8.5 3.7 1.5.9 1 1.4 2.3 1.4 3.9v1.1h-8.1c.1 1.1.4 1.9 1 2.5.6.6 1.4.9 2.4.9.8 0 1.4-.1 1.9-.4.5-.3.9-.7 1.2-1.1l1.4 1c-.4.8-1 1.5-1.8 2-.8.5-1.7.8-2.8.8Zm-.2-10.2c-.8 0-1.5.3-2.1.8-.5.5-.8 1.3-.9 2.3h6c-.1-1-.5-1.7-1-2.3-.6-.5-1.3-.8-2.1-.8Zm12.8 2c-.5-.6-1.1-.9-1.8-.9-.9 0-1.6.3-2.1 1-.5.7-.7 1.6-.7 2.7v.2c0 1.1.2 2 .7 2.7.5.7 1.2 1.1 2.1 1.1.7 0 1.3-.3 1.8-.9V14Zm2.3-3V22h-2.3v-1.5c-.4.6-.8 1-1.4 1.3-.6.3-1.2.5-1.9.5-1.4 0-2.5-.6-3.3-1.7-.8-1.1-1.2-2.5-1.2-4.2v-.2c0-1.7.4-3.1 1.2-4.2.8-1.1 2-1.7 3.3-1.7.7 0 1.3.2 1.8.4.5.3.9.7 1.3 1.2V11h2.3Zm3.6 11V6.8h2.4V22h-2.4Zm6.8 0V11h2.4v11h-2.4Zm1.2-15c.5 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.5-1.1.5-.5 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.5.2-.8.5-1.1.3-.3.6-.5 1.1-.5ZM79.5 22V11h2.4v11h-2.4Zm1.2-15c.5 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.5-1.1.5-.5 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.5.2-.8.5-1.1.3-.3.6-.5 1.1-.5ZM85.5 11v-3h2.4v3h2.2v1.9h-2.2v6.8c0 .4.1.7.3.9.2.2.5.3.9.3h1.1V22h-1.5c-1 0-1.8-.3-2.3-.8-.5-.5-.8-1.3-.8-2.3V12.9h-1.8V11h1.8Zm7.2 0v6.4c0 1 .2 1.7.5 2.2.4.5.9.7 1.6.7.8 0 1.4-.3 1.9-.9.5-.6.7-1.4.7-2.5V11h2.3v11h-2.3v-1.6c-.4.6-.9 1-1.4 1.3-.6.3-1.2.5-1.8.5-1.3 0-2.3-.4-3-1.3-.7-.9-1-2-1-3.5V11h2.4Z" fill={c}/>
    </svg>
  ),
  Garmin: (c) => (
    <svg height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3 7.2c-4.4 0-8 3.2-8 7.2 0 2.7 1.7 5.1 4.2 6.3l.3-2.3c-1.5-.9-2.5-2.4-2.5-4.1 0-2.7 2.7-5 6-5 3.3 0 6 2.2 6 5 0 2.7-2.7 5-6 5h-.8l-.4 2.4h1.2c4.4 0 8-3.2 8-7.2 0-4-3.6-7.3-8-7.3ZM30.4 22.3c-.5-.6-.7-1.4-.7-2.5v-.2c-.4.9-1 1.6-1.8 2.1-.8.5-1.6.8-2.6.8-1.2 0-2.2-.4-3-1.1-.8-.7-1.2-1.7-1.2-2.9 0-1.3.5-2.3 1.5-3 1-.7 2.4-1 4.2-1h2.6v-.4c0-.8-.2-1.4-.7-1.8-.5-.4-1.2-.6-2-.6-.7 0-1.3.2-1.8.5-.5.3-.8.8-.9 1.3h-2.4c.1-1.1.6-2 1.5-2.7.9-.7 2.1-1 3.6-1 1.5 0 2.7.4 3.5 1.1.8.7 1.3 1.8 1.3 3.1v5.2c0 .7.1 1.3.3 1.6v.2h-2.3Zm-4.2-1.8c.8 0 1.5-.3 2.1-.8.6-.5.9-1.1 1.1-1.9v-1.2h-2.3c-1.1 0-1.9.2-2.5.6-.6.4-.8.9-.8 1.6s.2 1.2.7 1.5c.4.3 1 .5 1.7.5ZM35.5 22V11.1h2.3v1.7c.4-.6.8-1.1 1.4-1.4.6-.3 1.2-.5 1.9-.5v2.5h-.6c-.8 0-1.5.2-2 .7-.5.5-.7 1.2-.7 2.3v6h-2.4ZM44.7 22V11.1h2.3v1.6c.4-.6.9-1 1.4-1.3.6-.3 1.2-.5 1.8-.5.8 0 1.5.2 2 .6.5.4.9 1 1.1 1.7.4-.7.9-1.2 1.5-1.6.6-.4 1.3-.6 2.1-.6 1.2 0 2.1.4 2.8 1.3.7.9 1 2 1 3.5V22h-2.4v-6.4c0-1-.2-1.7-.5-2.2-.4-.5-.9-.7-1.5-.7-.7 0-1.3.3-1.7.8-.5.6-.7 1.3-.7 2.3V22h-2.4v-6.4c0-1-.2-1.7-.5-2.2-.4-.5-.9-.7-1.5-.7-.7 0-1.3.3-1.7.9-.4.5-.7 1.3-.7 2.4V22h-2.4Zm19.2-15.2c.5 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.5-1.1.5-.5 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.5.2-.8.5-1.1.3-.3.6-.5 1.1-.5Zm-1.2 4.3h2.4V22h-2.4V11.1Zm7 0v6.4c0 1 .2 1.7.5 2.2.4.5.9.7 1.6.7.8 0 1.4-.3 1.9-.9.5-.6.7-1.4.7-2.5V11.1h2.3V22h-2.3v-1.6c-.4.6-.9 1-1.4 1.3-.6.3-1.2.5-1.8.5-1.3 0-2.3-.4-3-1.3-.7-.9-1-2-1-3.5V11.1h2.4Z" fill={c}/>
    </svg>
  ),
  '8 Sleep': (c) => (
    <svg height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8 13.2c.8-.6 1.2-1.4 1.2-2.3 0-.9-.3-1.7-1-2.2-.7-.6-1.5-.9-2.6-.9s-1.9.3-2.6.9c-.7.6-1 1.3-1 2.2 0 .9.4 1.7 1.2 2.3-.9.7-1.4 1.5-1.4 2.6 0 1 .4 1.9 1.1 2.5.7.6 1.6.9 2.7.9s2-.3 2.7-.9c.7-.6 1.1-1.5 1.1-2.5 0-1.1-.5-1.9-1.4-2.6ZM9.4 10c.5 0 .9.1 1.2.4.3.3.5.6.5 1.1 0 .4-.2.8-.5 1.1-.3.3-.7.4-1.2.4s-.9-.1-1.2-.4c-.3-.3-.5-.7-.5-1.1 0-.5.2-.8.5-1.1.3-.3.7-.4 1.2-.4Zm0 9c-.6 0-1.1-.2-1.4-.5-.4-.3-.5-.8-.5-1.3 0-.6.2-1 .5-1.4.4-.3.8-.5 1.4-.5s1.1.2 1.4.5c.4.4.5.8.5 1.4 0 .5-.2 1-.5 1.3-.4.3-.8.5-1.4.5Zm13.5 0c.5 0 1-.1 1.3-.4.4-.3.6-.7.6-1.2h2.2c0 .6-.2 1.2-.5 1.8-.4.5-.9 1-1.5 1.3-.7.3-1.4.5-2.1.5-1.5 0-2.7-.5-3.6-1.6-.9-1-1.3-2.5-1.3-4.3v-.3c0-1.7.4-3.1 1.3-4.2.9-1.1 2.1-1.7 3.6-1.7 1.2 0 2.1.3 2.9 1 .7.7 1.1 1.6 1.2 2.8h-2.2c0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.4-.6-.8 0-1.5.3-1.9 1-.4.7-.7 1.7-.7 3v.3c0 1.3.2 2.3.7 3 .4.7 1.1 1 1.9 1ZM29 22V6.8h2.4V22H29Zm10 .2c-1.7 0-3-.5-4-1.6-1-1.1-1.5-2.5-1.5-4.3v-.3c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.6 3.8-1.6 1.6 0 2.8.5 3.7 1.5.9 1 1.4 2.3 1.4 3.9v1.1h-8.1c.1 1.1.4 1.9 1 2.5.6.6 1.4.9 2.4.9.8 0 1.4-.1 1.9-.4.5-.3.9-.7 1.2-1.1l1.4 1c-.4.8-1 1.5-1.8 2-.8.5-1.7.8-2.8.8Zm-.2-10.2c-.8 0-1.5.3-2.1.8-.5.5-.8 1.3-.9 2.3h6c-.1-1-.5-1.7-1-2.3-.6-.5-1.3-.8-2.1-.8Zm13.8 3.2h6c-.1-1-.5-1.7-1-2.3-.6-.5-1.3-.8-2.1-.8-.8 0-1.5.3-2.1.8-.5.5-.8 1.3-.9 2.3Zm6 3.7c-.4.8-1 1.5-1.8 2-.8.5-1.7.8-2.8.8-1.7 0-3-.5-4-1.6-1-1.1-1.5-2.5-1.5-4.3v-.3c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.6 3.8-1.6 1.6 0 2.8.5 3.7 1.5.9 1 1.4 2.3 1.4 3.9v1.1h-8.1c.1 1.1.4 1.9 1 2.5.6.6 1.4.9 2.4.9.8 0 1.4-.1 1.9-.4.5-.3.9-.7 1.2-1.1l1.4 1Zm5.7-1.3h2.3v1.5c.4-.6.8-1 1.4-1.3.6-.3 1.2-.5 1.9-.5 1.4 0 2.5.6 3.3 1.7.8 1.1 1.2 2.5 1.2 4.2v.2c0 1.7-.4 3.1-1.2 4.2-.8 1.1-2 1.7-3.3 1.7-.7 0-1.3-.2-1.8-.5-.5-.3-1-.7-1.3-1.3V27h-2.3V17.6Zm2.3 2.8c0 1.1.2 2 .7 2.7.5.7 1.1 1 2 1 .8 0 1.4-.3 1.8-.8v-5.8c-.4-.6-1.1-.9-1.8-.9-.9 0-1.6.4-2 1.1-.5.7-.7 1.6-.7 2.7Z" fill={c}/>
    </svg>
  ),
  Whoop: (c) => (
    <svg height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 8.5h2.6l3.5 10.5L14.6 8.5h2.6l3.5 10.5L24.2 8.5h2.6l-5 14h-2.6l-3.5-10.3L12.2 22.5H9.6L5 8.5Zm24.5 0h2.4v5.2h5.5V8.5h2.4V22h-2.4v-6.3h-5.5V22h-2.4V8.5Zm19.8 2.8c-.9 0-1.6.4-2.2 1.1-.5.7-.8 1.7-.8 2.9v.2c0 1.2.3 2.2.8 2.9.5.7 1.3 1.1 2.2 1.1.9 0 1.6-.4 2.2-1.1.5-.7.8-1.7.8-2.9v-.2c0-1.2-.3-2.2-.8-2.9-.6-.7-1.3-1.1-2.2-1.1Zm0-2c1.6 0 2.9.6 3.8 1.7 1 1.1 1.5 2.5 1.5 4.3v.2c0 1.8-.5 3.2-1.5 4.3-1 1.1-2.3 1.7-3.8 1.7s-2.9-.6-3.8-1.7c-1-1.1-1.5-2.5-1.5-4.3v-.2c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.7 3.8-1.7Zm10 2c-.9 0-1.6.4-2.2 1.1-.5.7-.8 1.7-.8 2.9v.2c0 1.2.3 2.2.8 2.9.5.7 1.3 1.1 2.2 1.1.9 0 1.6-.4 2.2-1.1.5-.7.8-1.7.8-2.9v-.2c0-1.2-.3-2.2-.8-2.9-.6-.7-1.3-1.1-2.2-1.1Zm0-2c1.6 0 2.9.6 3.8 1.7 1 1.1 1.5 2.5 1.5 4.3v.2c0 1.8-.5 3.2-1.5 4.3-1 1.1-2.3 1.7-3.8 1.7s-2.9-.6-3.8-1.7c-1-1.1-1.5-2.5-1.5-4.3v-.2c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.7 3.8-1.7Zm8.6 2.2h2.3v1.5c.4-.6.8-1 1.4-1.3.6-.3 1.2-.5 1.9-.5 1.4 0 2.5.6 3.3 1.7.8 1.1 1.2 2.5 1.2 4.2v.2c0 1.7-.4 3.1-1.2 4.2-.8 1.1-2 1.7-3.3 1.7-.7 0-1.3-.2-1.8-.5-.5-.3-1-.7-1.3-1.3V27h-2.3V11.5Zm2.3 5c0 1.1.2 2 .7 2.7.5.7 1.1 1 2 1 .8 0 1.4-.3 1.8-.8v-5.8c-.4-.6-1.1-.9-1.8-.9-.9 0-1.6.4-2 1.1-.5.7-.7 1.6-.7 2.7Z" fill={c}/>
    </svg>
  ),
  Cronometer: (c) => (
    <svg height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.9 19c.5 0 1-.1 1.3-.4.4-.3.6-.7.6-1.2h2.2c0 .6-.2 1.2-.5 1.8-.4.5-.9 1-1.5 1.3-.7.3-1.4.5-2.1.5-1.5 0-2.7-.5-3.6-1.6-.9-1-1.3-2.5-1.3-4.3v-.3c0-1.7.4-3.1 1.3-4.2.9-1.1 2.1-1.7 3.6-1.7 1.2 0 2.1.3 2.9 1 .7.7 1.1 1.6 1.2 2.8h-2.2c0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.4-.6-.8 0-1.5.3-1.9 1-.4.7-.7 1.7-.7 3v.3c0 1.3.2 2.3.7 3 .4.7 1.1 1 1.9 1Zm7.4-7.9v1.7c.4-.6.8-1.1 1.4-1.4.6-.3 1.2-.5 1.9-.5v2.5h-.6c-.8 0-1.5.2-2 .7-.5.5-.7 1.2-.7 2.3v6h-2.4V11.1h2.3Zm8.7-.3c1.6 0 2.9.6 3.8 1.7 1 1.1 1.5 2.5 1.5 4.3v.2c0 1.8-.5 3.2-1.5 4.3-1 1.1-2.3 1.7-3.8 1.7s-2.9-.6-3.8-1.7c-1-1.1-1.5-2.5-1.5-4.3v-.2c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.7 3.8-1.7Zm0 2c-.9 0-1.6.4-2.2 1.1-.5.7-.8 1.7-.8 2.9v.2c0 1.2.3 2.2.8 2.9.5.7 1.3 1.1 2.2 1.1.9 0 1.6-.4 2.2-1.1.5-.7.8-1.7.8-2.9v-.2c0-1.2-.3-2.2-.8-2.9-.6-.7-1.3-1.1-2.2-1.1Zm10.2-.2v6.4c0 1 .2 1.7.5 2.2.4.5.9.7 1.6.7.8 0 1.4-.3 1.9-.9.5-.6.7-1.4.7-2.5V11h2.3V22h-2.3v-1.6c-.4.6-.9 1-1.4 1.3-.6.3-1.2.5-1.8.5-1.3 0-2.3-.4-3-1.3-.7-.9-1-2-1-3.5V11h2.4Zm10.2-.6c1.6 0 2.9.6 3.8 1.7 1 1.1 1.5 2.5 1.5 4.3v.2c0 1.8-.5 3.2-1.5 4.3-1 1.1-2.3 1.7-3.8 1.7s-2.9-.6-3.8-1.7c-1-1.1-1.5-2.5-1.5-4.3v-.2c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.7 3.8-1.7Zm0 2c-.9 0-1.6.4-2.2 1.1-.5.7-.8 1.7-.8 2.9v.2c0 1.2.3 2.2.8 2.9.5.7 1.3 1.1 2.2 1.1.9 0 1.6-.4 2.2-1.1.5-.7.8-1.7.8-2.9v-.2c0-1.2-.3-2.2-.8-2.9-.6-.7-1.3-1.1-2.2-1.1Zm8.6.5v6.4c0 1 .2 1.7.5 2.2.4.5.9.7 1.6.7.8 0 1.4-.3 1.9-.9.5-.6.7-1.4.7-2.5V11h2.3V22h-2.3v-1.6c-.4.6-.9 1-1.4 1.3-.6.3-1.2.5-1.8.5-1.3 0-2.3-.4-3-1.3-.7-.9-1-2-1-3.5V11h2.4Zm16.5 2.9h6c-.1-1-.5-1.7-1-2.3-.6-.5-1.3-.8-2.1-.8-.8 0-1.5.3-2.1.8-.5.5-.8 1.3-.9 2.3Zm6 3.7c-.4.8-1 1.5-1.8 2-.8.5-1.7.8-2.8.8-1.7 0-3-.5-4-1.6-1-1.1-1.5-2.5-1.5-4.3v-.3c0-1.8.5-3.2 1.5-4.3 1-1.1 2.3-1.6 3.8-1.6 1.6 0 2.8.5 3.7 1.5.9 1 1.4 2.3 1.4 3.9v1.1h-8.1c.1 1.1.4 1.9 1 2.5.6.6 1.4.9 2.4.9.8 0 1.4-.1 1.9-.4.5-.3.9-.7 1.2-1.1l1.4 1Zm5.8-5.4v1.7c.4-.6.8-1.1 1.4-1.4.6-.3 1.2-.5 1.9-.5v2.5h-.6c-.8 0-1.5.2-2 .7-.5.5-.7 1.2-.7 2.3v6h-2.4V11.1h2.3Z" fill={c}/>
    </svg>
  ),
}

function IntegrationLogo({ name, color }: { name: string; color: string }) {
  const svg = INTEGRATION_SVGS[name]
  if (!svg) return null
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', height: 28, width: 'auto' }}>
      {svg(color)}
    </span>
  )
}

function ProblemCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div style={{
      background: D.bgCard, borderRadius: 'var(--radius-xl)',
      border: `1px solid ${D.border}`,
      padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{ color: D.muted }}>{icon}</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: D.text }}>{title}</div>
      <div style={{ fontSize: 13.5, color: D.mutedBody, lineHeight: 1.7 }}>{body}</div>
    </div>
  )
}

function LayerCard({ icon, iconColor, title, body, badge }: {
  icon: React.ReactNode; iconColor: string; title: string; body: string; badge?: string
}) {
  return (
    <div style={{
      background: D.bgCard, borderRadius: 'var(--radius-xl)',
      border: `1px solid ${D.border}`,
      padding: '24px', display: 'flex', flexDirection: 'column', gap: 12,
      transition: 'transform 0.15s, box-shadow 0.15s', position: 'relative',
    }}>
      {badge && (
        <div style={{
          position: 'absolute', top: 14, right: 14,
          background: 'rgba(240,234,248,0.08)', color: 'rgba(240,234,248,0.4)',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.04em',
          padding: '2px 8px', borderRadius: 100,
        }}>{badge}</div>
      )}
      <div style={{ color: iconColor }}>{icon}</div>
      <div style={{ fontSize: 16, fontWeight: 600, color: D.text }}>{title}</div>
      <div style={{ fontSize: 13, color: D.mutedBody, lineHeight: 1.7 }}>{body}</div>
    </div>
  )
}

function PricingCard({ tier, price, period, description, features, cta, ctaHref, highlighted, baa, accentColor = D.accent, tintBg }: {
  tier: string; price: string; period: string; description: string; features: string[]
  cta: string; ctaHref: string; highlighted?: boolean; baa?: boolean; accentColor?: string; tintBg?: string
}) {
  return (
    <div style={{
      background: tintBg || D.bgCard, borderRadius: 'var(--radius-xl)',
      border: `1px solid ${D.border}`,
      borderTop: `3px solid ${accentColor}`,
      boxShadow: highlighted ? `0 4px 24px ${accentColor}25` : 'none',
      padding: 'clamp(24px, 2.5vw, 32px)', position: 'relative',
      transition: 'transform 0.15s, box-shadow 0.15s',
      display: 'flex', flexDirection: 'column',
    }}>
      {highlighted && (
        <div style={{
          position: 'absolute', top: 14, right: 14,
          background: `${accentColor}18`, color: accentColor,
          fontSize: 10, fontWeight: 600, letterSpacing: '0.04em', padding: '2px 8px', borderRadius: 100,
        }}>MOST POPULAR</div>
      )}
      <div style={{ fontSize: 13, fontWeight: 600, color: accentColor, marginBottom: 4 }}>{tier}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 4 }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: D.text, letterSpacing: '-0.03em' }}>{price}</span>
        <span style={{ fontSize: 14, color: D.muted }}>{period}</span>
      </div>
      <p style={{ fontSize: 13, color: D.mutedBody, margin: '0 0 6px' }}>{description}</p>
      {baa && (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, color: D.success, marginBottom: 14 }}>
          <CheckCircle size={12} strokeWidth={2.5} /> BAA included
        </div>
      )}
      {baa === false && (
        <p style={{ fontSize: 11, color: D.muted, margin: '0 0 14px' }}>No BAA included</p>
      )}
      {baa === undefined && <div style={{ marginBottom: 14 }} />}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20, flex: 1 }}>
        {features.map(f => (
          <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: D.mutedLight }}>
            <div style={{ width: 6, height: 6, background: accentColor, transform: 'rotate(45deg)', marginTop: 6, flexShrink: 0 }} /> {f}
          </div>
        ))}
      </div>
      <Link href={ctaHref} style={{
        display: 'block', textAlign: 'center', padding: '10px 0',
        background: highlighted ? accentColor : 'none',
        color: highlighted ? 'white' : accentColor,
        border: highlighted ? 'none' : `1px solid ${accentColor}40`,
        borderRadius: 'var(--radius-md)', fontSize: 13.5, fontWeight: 500, textDecoration: 'none',
      }}>{cta}</Link>
    </div>
  )
}

function TrustItemLight({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div style={{
      background: D.bgCard, borderRadius: 'var(--radius-lg)',
      border: `1px solid ${D.border}`, padding: '20px',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{ color: D.accent }}>{icon}</div>
      <p style={{ fontSize: 13, color: D.mutedLight, lineHeight: 1.7, margin: 0 }}>{text}</p>
    </div>
  )
}

function InsightExampleCard({ label, headline, body }: { label: string; headline: string; body: string }) {
  return (
    <div style={{
      background: D.accentTintStrong, borderRadius: 'var(--radius-lg)',
      border: '1px solid rgba(200,124,255,0.25)', padding: 24,
    }}>
      <div style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent, marginBottom: 10 }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, color: D.text, marginBottom: 10, letterSpacing: '-0.01em' }}>{headline}</div>
      <p style={{ fontSize: 13, color: 'rgba(240,234,248,0.8)', lineHeight: 1.7, margin: 0 }}>{body}</p>
    </div>
  )
}

function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div style={{
      background: D.bgCard, borderRadius: 'var(--radius-lg)',
      border: `1px solid ${D.border}`, padding: '20px',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{ color: D.accent }}>{icon}</div>
      <p style={{ fontSize: 13, color: D.mutedBody, lineHeight: 1.7, margin: 0 }}>{text}</p>
    </div>
  )
}


function PracBriefCard({ label, text }: { label: string; text: string }) {
  return (
    <div style={{
      background: D.bgCard, borderRadius: 'var(--radius-xl)',
      border: `1px solid rgba(200,124,255,0.2)`,
      padding: '20px 24px', position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 12, right: 12,
        background: 'rgba(200,124,255,0.1)', color: D.accent,
        fontSize: 10, padding: '2px 6px', borderRadius: 4,
      }}>EXAMPLE</div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
      }}>
        <Sparkles size={12} strokeWidth={1.75} color={D.accent} />
        <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent }}>{label}</span>
      </div>
      <p style={{ fontSize: 13, color: D.text, lineHeight: 1.65, margin: 0 }}>{text}</p>
    </div>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 600, color: D.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(({ label, href }) => (
          <Link key={label} href={href} style={{ fontSize: 13, color: D.mutedDim, textDecoration: 'none', transition: 'color 0.15s' }}>{label}</Link>
        ))}
      </div>
    </div>
  )
}

/* ── Product Mockups ── */

function DashboardMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left' }}>
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, letterSpacing: '-0.02em', color: D.text }}>Good morning, Briana.</div>
          <div style={{ fontSize: 12, color: D.muted, marginTop: 2 }}>Your body is <span style={{ color: D.success, fontWeight: 500 }}>well-recovered</span> today.</div>
        </div>
        <div style={{ fontSize: 12, color: D.muted, textAlign: 'right' }}>Tuesday, April 1</div>
      </div>

      <div className="dash-mock-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
        {/* Biomarker grid */}
        <div style={{ background: D.bgCard2, borderRadius: 'var(--radius-lg)', border: `1px solid ${D.border}`, padding: 16, overflow: 'hidden' }}>
          <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: D.muted, marginBottom: 12, textAlign: 'left' }}>Key Biomarkers</div>
          {[
            { name: 'ApoB', value: '72', unit: 'mg/dL', status: 'optimal' },
            { name: 'hs-CRP', value: '0.4', unit: 'mg/L', status: 'optimal' },
            { name: 'Fasting Glucose', value: '94', unit: 'mg/dL', status: 'borderline' },
            { name: 'Vitamin D', value: '62', unit: 'ng/mL', status: 'normal' },
          ].map(bm => (
            <div key={bm.name} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0',
              borderBottom: `1px solid ${D.border}`,
              fontSize: 13,
            }}>
              <div style={{
                width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
                background: bm.status === 'optimal' ? D.accent : bm.status === 'normal' ? D.success : D.amber,
              }} />
              <div style={{ flex: 1, color: D.text, fontWeight: 500 }}>{bm.name}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: D.text }}>
                {bm.value} <span style={{ fontSize: 11, color: D.muted }}>{bm.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* AereInsight card — violet = personalized AI */}
        <div style={{
          background: D.accentTint, borderRadius: 'var(--radius-lg)',
          border: `1px solid ${D.borderStrong}`, padding: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
            <Sparkles size={12} strokeWidth={1.75} color={D.accent} />
            <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent }}>AereInsight</span>
          </div>
          <p style={{ fontSize: 12.5, color: D.text, lineHeight: 1.65, margin: 0 }}>
            Your ApoB at 72 mg/dL is approaching the &lt;70 threshold longevity research considers optimal.
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
      <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: D.muted, marginBottom: 14 }}>Recent Records</div>
      {[
        { type: 'Lab Report', source: 'Quest Diagnostics', date: 'Mar 18, 2026', icon: <FlaskConical size={14} color={D.accent} /> },
        { type: 'Imaging', source: 'RadNet', date: 'Feb 4, 2026', icon: <Eye size={14} color={D.accent} /> },
        { type: 'Lab Report', source: 'Quest Diagnostics', date: 'Dec 12, 2025', icon: <FlaskConical size={14} color={D.accent} /> },
      ].map(r => (
        <div key={r.date} style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0',
          borderBottom: `1px solid ${D.border}`,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 'var(--radius-sm)', flexShrink: 0,
            background: D.bgCard2, border: `1px solid ${D.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{r.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: D.text }}>{r.type}</div>
            <div style={{ fontSize: 11, color: D.muted }}>{r.source}</div>
          </div>
          <div style={{ fontSize: 11, color: D.muted }}>{r.date}</div>
        </div>
      ))}
    </div>
  )
}

function ShareMockup() {
  return (
    <div>
      <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: D.muted, marginBottom: 14 }}>Share Preview</div>
      <div style={{
        background: D.bgCard2, borderRadius: 'var(--radius-lg)',
        border: `1px solid ${D.border}`, padding: 16, marginBottom: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Sparkles size={12} strokeWidth={1.75} color={D.accent} />
          <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent }}>Pre-visit Brief</span>
        </div>
        <p style={{ fontSize: 12, color: D.text, lineHeight: 1.6, margin: 0 }}>
          38M, health-optimized. 5 years of longitudinal data. ApoB optimal. Glucose trending up.
          3 items flagged for discussion.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {['Time-limited', 'Passcode', 'Audit trail'].map(tag => (
          <span key={tag} style={{
            padding: '4px 10px', borderRadius: 100, fontSize: 11,
            background: 'rgba(156,219,123,0.1)', color: D.success,
            fontWeight: 500,
          }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

function PricingSection() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" style={{ background: D.bgDeep, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 400, color: D.text,
            letterSpacing: '-0.02em', lineHeight: 1.12,
            margin: '0 0 16px',
          }}>
            Try everything free for 7 days.
          </h2>
          <p style={{ fontSize: 16, color: D.muted, margin: '0 0 28px' }}>
            Full access. No restrictions. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 0, background: D.bgDeep, borderRadius: 100, padding: 4, border: `1px solid ${D.border}` }}>
            <button onClick={() => setAnnual(true)} style={{
              padding: '8px 20px', borderRadius: 100, border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-sans)',
              background: annual ? D.bgCard : 'transparent',
              color: annual ? D.text : D.muted,
              boxShadow: annual ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
              transition: 'all 0.15s',
            }}>Annual <span style={{ fontSize: 11, color: D.accent, fontWeight: 600, marginLeft: 4 }}>Save 20%+</span></button>
            <button onClick={() => setAnnual(false)} style={{
              padding: '8px 20px', borderRadius: 100, border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-sans)',
              background: !annual ? D.bgCard : 'transparent',
              color: !annual ? D.text : D.muted,
              boxShadow: !annual ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
              transition: 'all 0.15s',
            }}>Monthly</button>
          </div>
        </div>

        <div className="pricing-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
          alignItems: 'stretch',
        }}>
          {/* Vault */}
          <PricingCard
            tier="Vault"
            price="$99"
            period={annual ? '/yr' : '/yr · Annual only'}
            description="For individuals who want a secure, organized home for their health records."
            features={[
              'Unlimited health record uploads',
              'Intelligent parsing and biomarker extraction',
              'Biomarker history and trend charts',
              'AereShare — secure provider sharing',
              'AereTimeline — full health timeline',
              '7-day free trial',
            ]}
            cta="Request early access"
            ctaHref="https://app.aere.health/signup"
            baa={false}
            accentColor="#4ECDC4"
            tintBg="rgba(0,212,170,0.04)"
          />

          {/* Core */}
          <PricingCard
            tier="Core"
            price={annual ? '$16' : '$25'}
            period={annual ? '/mo billed annually' : '/mo'}
            description="For health optimizers who want intelligence across their full health picture."
            features={[
              'Everything in Vault',
              'AereInsight — personalized analysis',
              'Aere Chat across your full health history',
              'Dashboard intelligence',
              'Wearable integration via AerePulse',
              '7-day free trial',
            ]}
            cta="Request early access"
            ctaHref="https://app.aere.health/signup"
            highlighted
            baa={false}
            accentColor="#c87cff"
            tintBg="rgba(200,124,255,0.06)"
          />

          {/* Pro */}
          <PricingCard
            tier="Pro"
            price={annual ? '$125' : '$149'}
            period={annual ? '/mo billed annually' : '/mo'}
            description="For practitioners, coaches, and trainers who want to work with clients on Aere."
            features={[
              'Everything in Core for yourself',
              'Link and manage client Aere accounts',
              'Client health visibility via AereShare',
              'pre-visit briefs generated by Aere',
              '7-day free trial',
            ]}
            cta="Request early access"
            ctaHref="https://app.aere.health/signup"
            baa
            accentColor="#FF6B2B"
            tintBg="rgba(255,107,43,0.04)"
          />

          {/* Clinic */}
          <PricingCard
            tier="Clinic"
            price={annual ? '$416' : '$499'}
            period={annual ? '/mo billed annually' : '/mo'}
            description="For multi-provider practices that want full white label control."
            features={[
              'Everything in Pro',
              'Full white label — custom branding throughout',
              'Multi-provider management',
              'Custom domain',
              'Priority support',
            ]}
            cta="Request early access"
            ctaHref="https://app.aere.health/signup"
            baa
            accentColor="#FFD700"
            tintBg="rgba(201,168,76,0.04)"
          />
        </div>
      </div>
    </section>
  )
}
