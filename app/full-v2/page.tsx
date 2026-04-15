'use client'

import { useState, useEffect, type FormEvent } from 'react'
import Link from 'next/link'
import SectionObserver from '@/components/SectionObserver'
import {
  FlaskConical, Activity, Dna, TrendingUp, Apple, FileText,
  FolderX, Unlink, Clock, CheckCircle, ChevronRight,
  Shield, Lock, Eye, Share2, Ban, Menu, X, Key,
  Sparkles, Sparkle, Users, Zap, BarChart3, MessageSquare, Plus,
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
  { label: 'For Providers', href: '/full-v2#practitioners' },
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
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(15,13,26,0.92)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: navBorder,
        transition: 'all 0.3s ease',
        height: 72, display: 'flex', alignItems: 'center', padding: '0 32px 2px',
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
          position: 'fixed', top: 72, left: 0, right: 0, zIndex: 99,
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
        textAlign: 'center', padding: 'clamp(116px, calc(17vh - 24px), 176px) 24px clamp(60px, 8vh, 100px)',
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
            Your labs are at Quest. Your sleep is in Oura. Your records are scattered across 18 different
            systems. Most providers have 15 minutes. An accessible solution to connect all of this and tell you what
            it means for your healthspan didn&apos;t exist. Until now.
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
            <Link href="/full-v2#vault" className="hero-ghost-btn" style={{
              padding: '12px 28px', background: 'transparent', color: D.accent,
              border: '1px solid rgba(200,124,255,0.35)', borderRadius: 'var(--radius-md)',
              fontSize: 15, fontWeight: 500, textDecoration: 'none',
              transition: 'border-color 0.15s',
            }}>
              See how it works
            </Link>
          </div>

          <div className="fade-up-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(16px, 3vw, 36px)', flexWrap: 'wrap' }}>
            {[
              { icon: <Shield size={13} strokeWidth={2} />, label: 'HIPAA Compliant' },
              { icon: <Lock size={13} strokeWidth={2} />, label: 'End-to-end encrypted' },
              { icon: <FileText size={13} strokeWidth={2} />, label: 'BAAs signed' },
              { icon: <Eye size={13} strokeWidth={2} />, label: 'Row-level security' },
              { icon: <Key size={13} strokeWidth={2} />, label: 'You own your data' },
            ].map(({ icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: D.accent, display: 'flex' }}>{icon}</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: D.mutedDim, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero product mockup — browser chrome */}
        <div className="fade-up-5" style={{
          maxWidth: 900, width: '100%', marginTop: 116,
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
                The information exists.<br /><span style={{ color: D.accent }}>The intelligence doesn&apos;t.</span>
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <ProblemCard icon={<FolderX size={20} color="#5BA8D4" />} title="Scattered records"
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
                <p style={{ fontSize: 15, color: D.mutedBody, lineHeight: 1.8, margin: '0 0 20px' }}>
                  Not a filing cabinet. A living health history that gets richer every time you add to it.
                </p>
                <p style={{ fontSize: 18, color: D.accent, fontWeight: 500, lineHeight: 1.6, margin: '0 0 28px' }}>
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
              <Sparkles size={20} strokeWidth={1.75} color={D.accent} />
              <span style={{ fontSize: 22, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent }}>Intelligence</span>
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
                body="CGM data from Dexcom, Libre, and Stelo — connected and interpreted alongside your labs, sleep, and activity." />
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
              <p style={{ fontSize: 17, color: D.accent, fontWeight: 500, lineHeight: 1.8, margin: '0 0 28px' }}>
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

      {/* ═══════════════════════ AERECHAT ═══════════════════════ */}
      <SectionObserver>
        <section id="chat" style={{ background: D.bgDeep, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div className="chat-grid" style={{
            maxWidth: 1080, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start',
          }}>
            <div>
              <SectionLabel>AereChat</SectionLabel>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 400, color: D.text,
                letterSpacing: '-0.02em', lineHeight: 1.12,
                margin: '0 0 20px',
              }}>
                Your health intelligence layer. Ask anything.
              </h2>
              <p style={{ fontSize: 15, color: D.mutedBody, lineHeight: 1.8, margin: '0 0 16px' }}>
                AereChat connects your labs, wearables, records, and history to surface the intelligence
                hidden across all of it. Not a chatbot with generic advice — a health intelligence layer
                grounded in your complete picture.
              </p>
              <p style={{ fontSize: 15, color: D.mutedBody, lineHeight: 1.8, margin: '0 0 28px' }}>
                Ask about trends. Understand your results. Generate a pre-visit brief before your next appointment.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Cross-source intelligence — labs, wearables, and records simultaneously',
                  'Longevity-framed responses, not standard sick-care advice',
                  'Pre-visit briefs generated on demand',
                  'Persistent memory — Aere remembers your history and goals',
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
                <ChatMockup />
              </div>
            </div>
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ AEREPULSE ═══════════════════════ */}
      <SectionObserver>
        <section id="pulse" style={{ background: D.bgDark, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div className="pulse-grid" style={{
            maxWidth: 1080, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
          }}>
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
                <PulseMockup />
              </div>
            </div>

            <div>
              <SectionLabel>AerePulse</SectionLabel>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 400, color: D.text,
                letterSpacing: '-0.02em', lineHeight: 1.12,
                margin: '0 0 20px',
              }}>
                Your wearables, finally connected to the full picture.
              </h2>
              <p style={{ fontSize: 15, color: D.mutedBody, lineHeight: 1.8, margin: '0 0 16px' }}>
                Oura, Withings, Fitbit, Dexcom — AerePulse syncs your daily vitals
                automatically and connects them to your lab data. HRV alongside hs-CRP.
                Sleep alongside testosterone. Recovery alongside training load.
              </p>
              <p style={{ fontSize: 15, color: D.text, fontWeight: 500, lineHeight: 1.8, margin: '0 0 28px' }}>
                Your labs finally have more context — because they&apos;re connected to your wearables.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Daily HRV, sleep, recovery, and SpO\u2082',
                  'Glucose trends from Dexcom and Stelo CGM',
                  'Body composition from Withings',
                  'All wearable data connected to your biomarker history',
                ].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: D.text }}>
                    <div style={{ width: 6, height: 6, background: '#9CDB7B', transform: 'rotate(45deg)', marginTop: 6, flexShrink: 0 }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionObserver>

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
                The system optimizes for normal.<br />Aere optimizes for exceptional.
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
            Built for how you already track your health
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 18,
            color: D.mutedLight, lineHeight: 1.6,
            maxWidth: 600, margin: '0 auto 48px',
          }}>
            Direct connections to your wearables and devices. Upload anything else — Aere reads and extracts the data from any health document.
          </p>

          {/* Row 1 — Direct connections */}
          <div style={{ background: D.accentTintStrong, borderRadius: 'var(--radius-xl)', border: `1px solid ${D.border}`, padding: '28px 32px', maxWidth: 700, margin: '0 auto 24px' }}>
            <div style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent, marginBottom: 8 }}>
              Live connections
            </div>
            <div style={{ fontSize: 14, color: D.muted, marginBottom: 20 }}>
              Real-time sync. OAuth connection. Data updated automatically.
            </div>
            <div className="integrations-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
              <IntegrationLogo name="Oura" color={D.success} />
              <IntegrationLogo name="Withings" color={D.success} />
              <IntegrationLogo name="Fitbit" color={D.success} />
              <IntegrationLogo name="Dexcom" color={D.success} />
            </div>
            <div style={{ fontSize: 13, color: D.mutedDim, marginTop: 16 }}>+ more coming soon</div>
          </div>

          {/* Divider */}
          <div style={{ height: 0, borderTop: '0.5px solid rgba(240,234,248,0.1)', maxWidth: 600, margin: '40px auto' }} />

          {/* Row 2 — Upload your data */}
          <div style={{ fontSize: 15, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.text, marginBottom: 24 }}>
            Upload and parse
          </div>
          <div style={{ fontSize: 14, color: D.muted, marginBottom: 20, marginTop: -16 }}>
            Lab reports, imaging, clinical notes, genetics — any PDF from any source.
          </div>
          <div className="integrations-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
            <IntegrationLogo name="Epic MyChart" color={D.accent} />
            <IntegrationLogo name="Quest Diagnostics" color={D.accent} />
            <IntegrationLogo name="LabCorp" color={D.accent} />
            <IntegrationLogo name="Apple Health" color={D.accent} />
            <IntegrationLogo name="Garmin" color={D.accent} />
            <IntegrationLogo name="8 Sleep" color={D.accent} />
            <IntegrationLogo name="Whoop" color={D.accent} />
            <IntegrationLogo name="Cronometer" color={D.accent} />
          </div>
        </section>
      </SectionObserver>

      {/* ═══════════════════════ 11. WHAT AERE SEES ═══════════════════════ */}
      <SectionObserver>
        <section style={{ background: D.bgDark, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Sparkles size={20} strokeWidth={1.75} color={D.accent} />
                <span style={{ fontSize: 22, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent }}>AereInsight</span>
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
            fontSize: 22, fontWeight: 600, textTransform: 'uppercase',
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
            make smarter decisions about your health.
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 38px)', color: D.accent,
            letterSpacing: '-0.02em', lineHeight: 1.1,
            margin: '32px 0 0',
          }}>
            Own Your Health.
          </p>
        </div>
      </section>

      {/* ═══════════════════════ WHAT AERE IS ═══════════════════════ */}
      <SectionObserver>
        <section style={{ background: D.bgDark, padding: 'clamp(64px, 8vw, 100px) 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent, marginBottom: 16 }}>What Aere Is — And Isn&apos;t</div>
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
              We do something most providers don&apos;t have time for — connect every data source in your
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
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start',
          }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: D.accent, marginBottom: 14 }}>For Providers</div>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 400, color: D.text,
                letterSpacing: '-0.02em', lineHeight: 1.12,
                margin: '0 0 20px',
              }}>
                Make every minute together count.
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 40 }}>
              <PracBriefCard label="PRE-VISIT BRIEF">
                <p style={{ fontSize: 13, color: D.text, lineHeight: 1.65, margin: '0 0 10px', fontWeight: 500 }}>
                  Sirius B., 36M — Annual longevity panel follow-up
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { cat: 'Cardiovascular', detail: 'ApoB trending down (97 → 72 mg/dL over 18 mo). hs-CRP stable at 0.4. Lp(a) low risk.' },
                    { cat: 'Metabolic', detail: 'Fasting glucose elevated at 94, up from 82 over 4 panels. HbA1c 5.3%. CGM shows dawn phenomenon — overnight readings 82–91.' },
                    { cat: 'Recovery', detail: 'HRV improved 12% over 90 days. Deep sleep declining (1h 42m → 58m). Correlates with free T drop.' },
                  ].map(item => (
                    <div key={item.cat} style={{ fontSize: 12, color: D.mutedLight, lineHeight: 1.55 }}>
                      <span style={{ color: D.accent, fontWeight: 600 }}>{item.cat}:</span>{' '}{item.detail}
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 11, color: D.muted, margin: '10px 0 0', fontStyle: 'italic' }}>
                  3 items flagged for discussion · 47 biomarkers tracked · 5 yrs longitudinal data
                </p>
              </PracBriefCard>
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
            <Link href="/full-v2#pricing" style={{
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
            { label: 'Features', href: '/full-v2#features' }, { label: 'Pricing', href: '/full-v2#pricing' },
            { label: 'AereVault', href: '/full-v2#vault' }, { label: 'AereShare', href: '/full-v2#share' },
            { label: 'Science', href: '/science' },
          ]} />
          <FooterCol title="Company" links={[
            { label: 'About', href: '#' }, { label: 'Blog', href: '#' },
            { label: 'Careers', href: '#' }, { label: 'Contact', href: '#' },
          ]} />
          <FooterCol title="Legal" links={[
            { label: 'Privacy Policy', href: '#' }, { label: 'Terms of Service', href: '#' },
            { label: 'HIPAA Notice', href: '#' }, { label: 'Security', href: '/full-v2#security' },
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
          .problem-grid, .vault-grid, .share-grid, .phil-grid, .prac-grid, .chat-grid, .pulse-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
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
      fontSize: 22, fontWeight: 600, textTransform: 'uppercase',
      letterSpacing: '0.08em', color: D.accent, marginBottom: 16,
    }}>{children}</div>
  )
}


function IntegrationLogo({ name, color }: { name: string; color: string }) {
  return (
    <span style={{
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: color,
      whiteSpace: 'nowrap',
    }}>
      {name}
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

function PricingCard({ tier, price, period, description, features, cta, ctaHref, highlighted, baa, comingSoon, annualOnly, accentColor = D.accent, tintBg }: {
  tier: string; price: string; period: string; description: string; features: string[]
  cta: string; ctaHref: string; highlighted?: boolean; baa?: boolean; comingSoon?: boolean; annualOnly?: boolean; accentColor?: string; tintBg?: string
}) {
  const annualMuted = annualOnly && period === 'Annual billing only'
  const effectiveAccent = annualMuted ? D.muted : accentColor
  return (
    <div style={{
      background: annualMuted ? D.bgCard : (tintBg || D.bgCard), borderRadius: 'var(--radius-xl)',
      border: `1px solid ${D.border}`,
      borderTop: `3px solid ${effectiveAccent}`,
      boxShadow: highlighted ? `0 4px 24px ${accentColor}25` : 'none',
      padding: 'clamp(24px, 2.5vw, 32px)', position: 'relative',
      transition: 'transform 0.15s, box-shadow 0.15s, opacity 0.15s',
      display: 'flex', flexDirection: 'column',
      opacity: annualMuted ? 0.6 : 1,
    }}>
      {comingSoon ? (
        <div style={{
          position: 'absolute', top: 14, right: 14,
          background: 'rgba(240,234,248,0.08)', color: 'rgba(240,234,248,0.4)',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.04em', padding: '2px 8px', borderRadius: 100,
        }}>COMING SOON</div>
      ) : highlighted && (
        <div style={{
          position: 'absolute', top: 14, right: 14,
          background: `${accentColor}18`, color: accentColor,
          fontSize: 10, fontWeight: 600, letterSpacing: '0.04em', padding: '2px 8px', borderRadius: 100,
        }}>MOST POPULAR</div>
      )}
      <div style={{ fontSize: 13, fontWeight: 600, color: effectiveAccent, marginBottom: 4 }}>{tier}</div>
      <div style={{ marginBottom: 4 }}>
        {annualMuted ? (
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: D.muted, lineHeight: 1, padding: '8px 0' }}>Annual billing only</div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: D.text, letterSpacing: '-0.03em' }}>{price}</span>
              <span style={{ fontSize: 14, color: D.muted }}>/mo</span>
            </div>
            <div style={{ fontSize: 11, color: D.mutedDim, marginTop: 0, marginBottom: 6 }}>{period}</div>
          </>
        )}
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
            <div style={{ width: 6, height: 6, background: effectiveAccent, transform: 'rotate(45deg)', marginTop: 6, flexShrink: 0 }} /> {f}
          </div>
        ))}
      </div>
      {comingSoon || annualMuted ? (
        <div style={{
          display: 'block', textAlign: 'center', padding: '10px 0',
          background: D.bgCard2, color: D.muted, cursor: 'default',
          border: `1px solid ${D.border}`,
          borderRadius: 'var(--radius-md)', fontSize: 13.5, fontWeight: 500,
        }}>{annualMuted ? 'Annual only' : 'Coming soon'}</div>
      ) : (
        <Link href={ctaHref} style={{
          display: 'block', textAlign: 'center', padding: '10px 0',
          background: highlighted ? effectiveAccent : 'none',
          color: highlighted ? 'white' : effectiveAccent,
          border: highlighted ? 'none' : `1px solid ${effectiveAccent}40`,
          borderRadius: 'var(--radius-md)', fontSize: 13.5, fontWeight: 500, textDecoration: 'none',
        }}>{cta}</Link>
      )}
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


function PracBriefCard({ label, text, children }: { label: string; text?: string; children?: React.ReactNode }) {
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
      {children || <p style={{ fontSize: 13, color: D.text, lineHeight: 1.65, margin: 0 }}>{text}</p>}
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
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, letterSpacing: '-0.02em', color: D.text }}>Good morning, Oliver.</div>
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
  const records = [
    { source: 'Wellness Medical Group', provider: 'Dr. Augustus Pye, MD', date: 'Mar 18, 2026', biomarkers: 42, flag: '2 flagged', flagColor: D.amber, icon: <FlaskConical size={16} color={D.accent} />,
      summary: 'Comprehensive metabolic and lipid panel. ApoB trending toward optimal. Fasting glucose borderline at 101...' },
    { source: 'SimonMed Imaging', provider: 'Dr. Miriam Strout, DO', date: 'Feb 4, 2026', biomarkers: 0, flag: 'All normal', flagColor: D.success, icon: <Eye size={16} color={D.accent} />,
      summary: 'Whole-body MRI scan is stable compared to prior year with no concerning masses or evidence of acute findings...' },
    { source: 'Quest Diagnostics', provider: 'Dr. Dilys Derwent, MD', date: 'Jan 22, 2026', biomarkers: 88, flag: '5 flagged', flagColor: D.amber, icon: <FlaskConical size={16} color={D.accent} />,
      summary: 'Annual longevity panel shows mostly favorable results. LDL particle profile shows elevated small dense LDL...' },
    { source: 'Ancestry Health+', provider: null, date: 'Nov 8, 2025', biomarkers: 14, flag: null, flagColor: null, icon: <Dna size={16} color={D.accent} />,
      summary: 'Cardiovascular genetic panel shows favorable results for most markers. APOE 3/3 genotype. No MTHFR variants...' },
    { source: 'Quest Diagnostics', provider: 'Dr. Helbert Spleen, MD', date: 'Sep 15, 2025', biomarkers: 36, flag: '3 flagged', flagColor: D.amber, icon: <FlaskConical size={16} color={D.accent} />,
      summary: 'Follow-up metabolic panel. Fasting glucose improved from 106 to 98. HbA1c stable at 5.3%. Vitamin D now optimal...' },
  ]
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: D.muted }}>Recent Records</div>
        <div style={{ fontSize: 10, color: D.muted }}>{records.length} records</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {records.map(r => (
          <div key={r.date + r.source} style={{
            background: D.bgCard2, borderRadius: 'var(--radius-lg)',
            border: `1px solid ${D.border}`, padding: '12px 14px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 'var(--radius-sm)', flexShrink: 0,
                background: D.bgCard, border: `1px solid ${D.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{r.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: D.text }}>{r.source}</div>
                  {r.flag && (
                    <span style={{ fontSize: 9, fontWeight: 600, color: r.flagColor, background: `${r.flagColor}18`, padding: '1px 6px', borderRadius: 100 }}>{r.flag}</span>
                  )}
                </div>
                <div style={{ fontSize: 10, color: D.muted, marginTop: 1 }}>
                  {r.date}{r.provider ? ` · ${r.provider}` : ''}{r.biomarkers > 0 ? ` · ${r.biomarkers} biomarkers` : ''}
                </div>
              </div>
              <ChevronRight size={14} color={D.muted} style={{ flexShrink: 0 }} />
            </div>
            <div style={{ fontSize: 11, color: D.mutedBody, lineHeight: 1.5, marginLeft: 42 }}>
              {r.summary}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ShareMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left' }}>
      {/* Header — mimics the real shared page header */}
      <div>
        <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: D.muted, marginBottom: 8 }}>Shared Health Summary</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: D.text }}>Cedric Diggory</div>
            <div style={{ fontSize: 11, color: D.muted, marginTop: 2 }}>31M &middot; 6&apos;1&quot; &middot; 180 lb &middot; Health-optimized</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, color: D.muted }}>Prepared for</div>
            <div style={{ fontSize: 12, color: D.text, fontWeight: 500 }}>Dr. Poppy Pomfrey, MD</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          {[
            { label: 'Records', value: '12' },
            { label: 'Biomarkers', value: '47' },
            { label: 'Date range', value: '2021–2026' },
          ].map(s => (
            <div key={s.label} style={{ fontSize: 10, color: D.muted }}>
              <span style={{ color: D.mutedLight, fontWeight: 500 }}>{s.value}</span> {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* AI-Generated Clinical Summary — matches real app */}
      <div style={{
        background: D.accentTintStrong, borderRadius: 'var(--radius-lg)',
        border: `1px solid ${D.borderStrong}`, padding: 14,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <Sparkles size={11} strokeWidth={1.75} color={D.accent} />
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: D.accent }}>AI-Generated Clinical Summary</span>
        </div>
        <div style={{ fontSize: 11, color: D.text, lineHeight: 1.65 }}>
          <p style={{ margin: '0 0 8px' }}>
            Cardiovascular profile is strong. ApoB at 72 mg/dL is approaching the &lt;70 threshold
            longevity research considers optimal. LDL has trended down steadily over 18 months.
            hs-CRP at 0.4 mg/L indicates very low vascular inflammation.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            Metabolic trend warrants attention. Fasting glucose has risen from 94 to 101 mg/dL
            across four panels. HbA1c at 5.3% suggests the fasting readings may reflect a dawn
            phenomenon rather than insulin resistance. CGM data shows overnight readings of 82–91.
          </p>
          <p style={{ margin: 0 }}>
            Free testosterone is declining 12% year-over-year, concurrent with a drop in deep
            sleep from 1h 42m to 58 minutes per night. Dietary zinc is consistently below threshold.
            This pattern is consistent with sleep-mediated hormonal suppression.
          </p>
        </div>
      </div>

      {/* Biomarker snapshot table — mimics real shared page */}
      <div style={{
        background: D.bgCard2, borderRadius: 'var(--radius-lg)',
        border: `1px solid ${D.border}`, padding: 14,
      }}>
        <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: D.muted, marginBottom: 10 }}>Key Biomarkers</div>
        {[
          { name: 'ApoB', value: '72', unit: 'mg/dL', ref: '<70', status: 'optimal', color: D.accent },
          { name: 'hs-CRP', value: '0.4', unit: 'mg/L', ref: '<1.0', status: 'optimal', color: D.accent },
          { name: 'Fasting Glucose', value: '101', unit: 'mg/dL', ref: '70–100', status: 'borderline', color: D.amber },
          { name: 'HbA1c', value: '5.3', unit: '%', ref: '<5.7', status: 'optimal', color: D.accent },
          { name: 'Free Testosterone', value: '9.2', unit: 'ng/dL', ref: '9–26', status: 'borderline', color: D.amber },
        ].map(bm => (
          <div key={bm.name} style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0',
            borderBottom: `1px solid ${D.border}`, fontSize: 11,
          }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: bm.color, flexShrink: 0 }} />
            <div style={{ flex: 1, color: D.mutedLight }}>{bm.name}</div>
            <div style={{ color: D.text, fontWeight: 500, minWidth: 40, textAlign: 'right' }}>
              {bm.value} <span style={{ color: D.muted, fontWeight: 400 }}>{bm.unit}</span>
            </div>
            <div style={{ fontSize: 9, color: D.muted, minWidth: 50, textAlign: 'right' }}>ref: {bm.ref}</div>
          </div>
        ))}
        <div style={{ fontSize: 10, color: D.muted, marginTop: 8, fontStyle: 'italic' }}>
          + 42 more biomarkers across 12 records
        </div>
      </div>

      {/* Security tags */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {['Time-limited', 'Passcode', 'Audit trail', 'Revocable', 'HIPAA-compliant'].map(tag => (
          <span key={tag} style={{
            padding: '3px 8px', borderRadius: 100, fontSize: 10,
            background: 'rgba(156,219,123,0.1)', color: D.success,
            fontWeight: 500,
          }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

function PulseMetricCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{
      position: 'relative', background: D.bgCard2, border: `1px solid ${D.border}`,
      borderRadius: 12, overflow: 'hidden', padding: '10px 10px 12px',
    }}>
      <div style={{ position: 'absolute', top: 0, left: '33%', width: '34%', height: 3, background: D.accent, borderRadius: '0 0 3px 3px' }} />
      <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: D.muted, marginBottom: 8 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  )
}

function PulseValue({ value, unit }: { value: string; unit?: string }) {
  return (
    <>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 26, fontWeight: 500, color: D.accent, lineHeight: 1 }}>{value}</span>
      {unit && <span style={{ fontSize: 14, color: D.accent, fontWeight: 500, lineHeight: 1, paddingBottom: 1 }}>{unit}</span>}
    </>
  )
}

function PulseMockup() {
  const devices = [
    {
      name: 'Oura Ring', synced: '4 min ago · 1,663 days',
      metrics: [
        { label: 'HRV', el: <PulseValue value="68" unit="ms" /> },
        { label: 'TOTAL SLEEP', el: <><PulseValue value="7" unit="h" /><div style={{ width: 3 }} /><PulseValue value="42" unit="m" /></> },
        { label: 'DEEP SLEEP', el: <><PulseValue value="1" unit="h" /><div style={{ width: 3 }} /><PulseValue value="22" unit="m" /></> },
      ],
    },
    {
      name: 'Withings Body+', synced: '2 days ago · 847 days',
      metrics: [
        { label: 'WEIGHT', el: <PulseValue value="175" unit="lb" /> },
        { label: 'BODY FAT', el: <PulseValue value="14.2" unit="%" /> },
        { label: 'MUSCLE MASS', el: <PulseValue value="68" unit="%" /> },
      ],
    },
    {
      name: 'Dexcom G7', synced: '12 min ago · 90 days',
      metrics: [
        { label: 'GLUCOSE', el: <PulseValue value="92" unit="mg/dL" /> },
        { label: 'AVG (14D)', el: <PulseValue value="98" /> },
        { label: 'TIME IN RANGE', el: <PulseValue value="94" unit="%" /> },
      ],
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {devices.map(device => (
        <div key={device.name}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: D.success }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: D.text }}>{device.name}</span>
            </div>
            <span style={{ fontSize: 10, color: D.muted }}>{device.synced}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {device.metrics.map(m => (
              <PulseMetricCard key={m.label} label={m.label}>{m.el}</PulseMetricCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ChatMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Sparkles size={12} strokeWidth={1.75} color={D.accent} />
          <span style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: D.accent }}>AereChat</span>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {[
            { icon: <Plus size={11} />, label: 'New' },
            { icon: <MessageSquare size={11} />, label: 'History' },
          ].map(btn => (
            <div key={btn.label} style={{
              padding: '4px 10px', borderRadius: 100, background: D.bgCard2,
              border: `1px solid ${D.border}`, fontSize: 11, color: D.muted,
              display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
            }}>{btn.icon} {btn.label}</div>
          ))}
        </div>
      </div>

      {/* Goal context */}
      <div style={{ background: D.bgCard2, border: `1px solid ${D.border}`, borderRadius: 'var(--radius-lg)', padding: '10px 14px' }}>
        <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: D.muted, marginBottom: 4 }}>Intelligence focus</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: D.text }}>Cardiovascular longevity optimization</span>
          <span style={{ background: D.accentTint, color: D.accent, fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 100 }}>Cardiovascular</span>
        </div>
      </div>

      {/* Messages */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* User message 1 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: D.accent, color: 'white', borderRadius: 18, padding: '10px 14px', maxWidth: '80%', fontSize: 13, lineHeight: 1.6 }}>
            My hs-CRP keeps coming back elevated. What could be driving it?
          </div>
        </div>

        {/* AI response */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: '50%', background: D.accent, color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 500, flexShrink: 0,
          }}>A</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{
              background: D.bgCard, border: `1px solid ${D.border}`, borderRadius: 18,
              padding: '10px 14px', maxWidth: '85%', fontSize: 12.5, lineHeight: 1.65, color: D.text,
            }}>
              <p style={{ margin: 0 }}>
                Your hs-CRP has been elevated across 3 consecutive lab panels — 1.8, 2.1, and 2.4 mg/L. The trend is moving in the wrong direction.
              </p>
              <p style={{ margin: '8px 0 0' }}>
                Cross-referencing your Oura data, your HRV drops and sleep quality declines in the same weeks your hs-CRP is highest. Your labs and recovery data are telling the same story.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 2 }}>
              {['Labs · 3 panels', 'Oura · 90 days', 'Trend analysis'].map(chip => (
                <span key={chip} style={{
                  background: D.bgCard2, border: `1px solid ${D.border}`, borderRadius: 100,
                  fontSize: 10, color: D.muted, padding: '2px 8px',
                }}>{chip}</span>
              ))}
            </div>
          </div>
        </div>

        {/* User message 2 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: D.accent, color: 'white', borderRadius: 18, padding: '10px 14px', maxWidth: '80%', fontSize: 13, lineHeight: 1.6 }}>
            What should I discuss with my provider about this?
          </div>
        </div>
      </div>

      {/* Input row */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4 }}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%', background: D.bgCard2,
          border: `1px solid ${D.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <Plus size={13} color={D.muted} />
        </div>
        <div style={{
          flex: 1, background: D.bgCard2, border: `1px solid ${D.border}`,
          borderRadius: 'var(--radius-lg)', padding: '9px 14px',
          fontSize: 12.5, color: D.muted, fontFamily: 'var(--font-sans)',
        }}>
          Ask anything about your health data...
        </div>
        <div style={{
          width: 32, height: 32, borderRadius: 'var(--radius-md)', background: D.accent,
          border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M14 8L2 2l2.5 6L2 14l12-6z" fill="white" stroke="white" strokeWidth="0.5" strokeLinejoin="round"/></svg>
        </div>
      </div>
      <div style={{ fontSize: 11, color: D.muted, textAlign: 'center', marginTop: 6 }}>
        Answers grounded in your health records · Not medical advice
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
              background: annual ? D.accent : 'transparent',
              color: annual ? 'white' : D.muted,
              boxShadow: annual ? '0 2px 8px rgba(200,124,255,0.3)' : 'none',
              transition: 'all 0.15s',
            }}>Annual <span style={{ fontSize: 11, color: annual ? 'rgba(255,255,255,0.8)' : D.accent, fontWeight: 600, marginLeft: 4 }}>Save 20%+</span></button>
            <button onClick={() => setAnnual(false)} style={{
              padding: '8px 20px', borderRadius: 100, border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-sans)',
              background: !annual ? D.accent : 'transparent',
              color: !annual ? 'white' : D.muted,
              boxShadow: !annual ? '0 2px 8px rgba(200,124,255,0.3)' : 'none',
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
            price="$8"
            period={annual ? 'billed annually' : 'Annual billing only'}
            annualOnly
            description="For individuals who want a secure home for their health records."
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
            accentColor="#4ECDC4"
            tintBg="rgba(0,212,170,0.04)"
          />

          {/* Core */}
          <PricingCard
            tier="Core"
            price={annual ? '$25' : '$34'}
            period={annual ? 'billed annually' : 'billed monthly'}
            description="For health optimizers who want intelligence across their complete history."
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
            accentColor="#c87cff"
            tintBg="rgba(200,124,255,0.06)"
          />

          {/* Pro */}
          <PricingCard
            tier="Pro"
            price={annual ? '$125' : '$149'}
            period={annual ? 'billed annually' : 'billed monthly'}
            description="For providers who want their people&apos;s full health picture."
            features={[
              'Everything in Core for yourself',
              'Provider portal — manage everyone you work with',
              'Health visibility via AereShare',
              'Pre-visit briefs generated by Aere',
              '7-day free trial',
            ]}
            cta="Request early access"
            ctaHref="https://app.aere.health/signup"
            baa
            comingSoon
            accentColor="#FF6B2B"
            tintBg="rgba(255,107,43,0.04)"
          />

          {/* Clinic */}
          <PricingCard
            tier="Practice"
            price={annual ? '$416' : '$499'}
            period={annual ? 'billed annually' : 'billed monthly'}
            description="For multi-provider practices that want to run their own health intelligence platform."
            features={[
              'Everything in Pro',
              'Full white label — your brand throughout',
              'Multi-provider management',
              'Custom domain',
            ]}
            cta="Request early access"
            ctaHref="https://app.aere.health/signup"
            baa
            comingSoon
            accentColor="#4B9CD3"
            tintBg="rgba(75,156,211,0.04)"
          />
        </div>
      </div>
    </section>
  )
}
