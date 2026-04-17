'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'

const D = {
  bgDeep:    '#0F0D1A',
  bgCard:    '#1E1535',
  border:    'rgba(200,124,255,0.15)',
  text:      '#F0EAF8',
  muted:     'rgba(240,234,248,0.7)',
  mutedBody: 'rgba(240,234,248,0.6)',
  accent:    '#c87cff',
  success:   '#9CDB7B',
  error:     '#FF6B6B',
}

export default function ContactPage() {
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [comments, setComments] = useState('')
  const [state, setState]       = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: comments }),
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

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${D.border}`,
    borderRadius: 10, padding: '12px 16px',
    fontSize: 15, color: D.text, outline: 'none',
    fontFamily: 'var(--font-sans)',
    transition: 'border-color 0.15s',
    width: '100%',
  } as React.CSSProperties

  return (
    <div style={{
      background: D.bgDeep, minHeight: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '80px 24px',
    }}>
      <div style={{ maxWidth: 520, width: '100%' }}>

        <Link href="/" style={{
          fontSize: 13, color: D.muted, textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 48,
          transition: 'color 0.15s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = D.text}
          onMouseLeave={e => e.currentTarget.style.color = D.muted}
        >
          ← Back
        </Link>

        <div style={{ marginBottom: 40 }}>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 400, color: D.text,
            letterSpacing: '-0.03em', lineHeight: 1.08,
            margin: '0 0 16px',
          }}>
            Get in touch.
          </h1>
          <p style={{ fontSize: 16, color: D.mutedBody, lineHeight: 1.7, margin: 0 }}>
            Have a question or want to learn more about Aere?
          </p>
        </div>

        {state === 'success' ? (
          <div style={{
            background: 'rgba(156,219,123,0.08)',
            border: '1px solid rgba(156,219,123,0.25)',
            borderRadius: 14, padding: '32px 28px', textAlign: 'center',
          }}>
            <p style={{ fontSize: 16, color: D.success, fontWeight: 500, margin: '0 0 8px' }}>
              Message sent.
            </p>
            <p style={{ fontSize: 14, color: D.mutedBody, margin: 0 }}>
              We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ fontSize: 12, fontWeight: 500, color: D.muted, letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>Name</label>
              <input
                type="text" value={name} onChange={e => setName(e.target.value)}
                required placeholder="Your name" style={inputStyle}
                onFocus={e => e.currentTarget.style.borderColor = D.accent}
                onBlur={e => e.currentTarget.style.borderColor = D.border}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ fontSize: 12, fontWeight: 500, color: D.muted, letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>Email</label>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                required placeholder="your@email.com" style={inputStyle}
                onFocus={e => e.currentTarget.style.borderColor = D.accent}
                onBlur={e => e.currentTarget.style.borderColor = D.border}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ fontSize: 12, fontWeight: 500, color: D.muted, letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>Message</label>
              <textarea
                value={comments} onChange={e => setComments(e.target.value)}
                required rows={5} placeholder="What's on your mind?"
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                onFocus={e => e.currentTarget.style.borderColor = D.accent}
                onBlur={e => e.currentTarget.style.borderColor = D.border}
              />
            </div>

            {state === 'error' && (
              <p style={{ fontSize: 13, color: D.error, margin: 0 }}>
                {errorMsg || 'Something went wrong. Please try again.'}
              </p>
            )}

            <button
              type="submit" disabled={state === 'loading'}
              style={{
                background: D.accent, color: 'white',
                border: 'none', borderRadius: 10,
                padding: '13px 28px', fontSize: 15, fontWeight: 500,
                fontFamily: 'var(--font-sans)',
                cursor: state === 'loading' ? 'not-allowed' : 'pointer',
                opacity: state === 'loading' ? 0.7 : 1,
                transition: 'opacity 0.15s',
                alignSelf: 'flex-start',
              }}
            >
              {state === 'loading' ? 'Sending…' : 'Send message'}
            </button>

          </form>
        )}
      </div>
    </div>
  )
}
