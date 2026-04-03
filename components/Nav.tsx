'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Features',          href: '#features'     },
  { label: 'How it works',      href: '#vault'        },
  { label: 'Pricing',           href: '#pricing'      },
  { label: 'For Practitioners', href: '#share'        },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'var(--color-nav-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'border-color 0.2s ease',
        height: 60,
        display: 'flex', alignItems: 'center',
        padding: '0 32px',
      }}>
        {/* Logo */}
        <Link href="#hero" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 22, color: 'var(--color-accent)',
          letterSpacing: '-0.03em', fontWeight: 400,
          textDecoration: 'none', flexShrink: 0,
          marginRight: 48,
        }}>
          Aere.
        </Link>

        {/* Center links — desktop */}
        <div style={{
          display: 'flex', gap: 4, flex: 1,
          alignItems: 'center',
        }} className="nav-center">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} style={{
              padding: '6px 14px', borderRadius: 'var(--radius-sm)',
              fontSize: 13.5, color: 'var(--color-muted)',
              textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'color 0.15s, background 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text)'; e.currentTarget.style.background = 'var(--color-surface)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.background = 'none' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="nav-right">
          <Link href="https://app.aere.health/login" style={{
            fontSize: 13.5, color: 'var(--color-muted)',
            textDecoration: 'none',
            transition: 'color 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
          >
            Sign in
          </Link>
          <Link href="https://app.aere.health/signup" style={{
            padding: '8px 18px',
            background: 'var(--color-accent)',
            color: 'white',
            borderRadius: 'var(--radius-md)',
            fontSize: 13.5, fontWeight: 500,
            textDecoration: 'none', whiteSpace: 'nowrap',
            transition: 'transform 0.15s, box-shadow 0.15s, background 0.15s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.02)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(200,124,255,0.35)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Get started free
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: 4, color: 'var(--color-text)',
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, zIndex: 99,
          background: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
          padding: '16px 24px 20px',
          display: 'flex', flexDirection: 'column', gap: 4,
          boxShadow: 'var(--shadow-modal)',
        }}>
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '10px 12px', fontSize: 15,
                color: 'var(--color-text)', textDecoration: 'none',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ height: 1, background: 'var(--color-border)', margin: '8px 0' }} />
          <Link href="https://app.aere.health/login"
            onClick={() => setMobileOpen(false)}
            style={{ padding: '10px 12px', fontSize: 15, color: 'var(--color-muted)', textDecoration: 'none' }}
          >
            Sign in
          </Link>
          <Link href="https://app.aere.health/signup"
            onClick={() => setMobileOpen(false)}
            style={{
              padding: '12px', textAlign: 'center',
              background: 'var(--color-accent)', color: 'white',
              borderRadius: 'var(--radius-md)', fontSize: 15, fontWeight: 500,
              textDecoration: 'none', marginTop: 4,
            }}
          >
            Get started free
          </Link>
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
