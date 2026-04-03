'use client'

import { useState, type FormEvent } from 'react'
import AereLockup from '@/components/AereLockup'

export default function Teaser() {
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
      {/* Grain overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.15,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }} />

      <main style={{
        position: 'relative', zIndex: 1,
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '40px 24px',
        backgroundColor: '#1A1917',
      }}>
        {/* Content */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', textAlign: 'center',
          maxWidth: 600, width: '100%',
          flex: 1, justifyContent: 'center',
        }}>
          {/* Brand lockup — SVG component, proportions baked in */}
          <AereLockup
            width={200}
            className="fade-up-1"
            style={{ marginBottom: 'clamp(48px, 5vw, 80px)' }}
          />

          {/* Headline */}
          <h1 className="fade-up-2 headline" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 5vw, 68px)',
            fontWeight: 400,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            textAlign: 'center',
            margin: '0 0 12px',
            whiteSpace: 'nowrap' as const,
            maxWidth: 'none',
            overflow: 'visible',
          }}>
            <span style={{ display: 'block' }}>Your entire health history.</span>
            <span style={{ display: 'block' }}>Intelligence that connects it all.</span>
          </h1>

          {/* Descriptor */}
          <p className="fade-up-2" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(10px, 0.8vw, 12px)',
            fontWeight: 500,
            color: '#7A7770',
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            margin: '0 0 clamp(48px, 5vw, 80px)',
          }}>
            THE HEALTHSPAN INTELLIGENCE PLATFORM
          </p>

          {/* Form / Success */}
          <div className="fade-up-3" style={{ width: '100%', maxWidth: 480 }}>
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
                      fontSize: 'clamp(13px, 1vw, 15px)',
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
                      fontSize: 'clamp(13px, 1vw, 15px)',
                      fontWeight: 500,
                      fontFamily: 'var(--font-sans)',
                      cursor: state === 'loading' ? 'wait' : 'pointer',
                      opacity: state === 'loading' ? 0.7 : 1,
                      transition: 'opacity 0.15s',
                      whiteSpace: 'nowrap' as const,
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
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 16,
          marginTop: 'auto',
          paddingTop: 40,
        }}>
          <div style={{
            display: 'flex', gap: 8, alignItems: 'center',
          }}>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#3A3A37' }} />
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#3A3A37' }} />
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#3A3A37' }} />
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            color: '#4A4845',
            margin: 0,
          }}>
            aere.health &middot; &copy; 2026 Aere Health Inc
          </p>
        </div>
      </main>

      <style>{`
        .email-input::placeholder {
          color: #5A5855;
        }
        @media (max-width: 560px) {
          .headline {
            white-space: normal !important;
          }
          .headline-line {
            white-space: normal !important;
          }
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
        }
      `}</style>
    </>
  )
}
