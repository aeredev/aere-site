'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Features',          href: '#features'      },
  { label: 'How It Works',      href: '#how-it-works'  },
  { label: 'Science',           href: '/science'       },
  { label: 'Pricing',           href: '#pricing'       },
  { label: 'For Practitioners', href: '#practitioners' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navBg = scrolled ? 'rgba(245,244,240,0.95)' : 'rgba(26,25,23,0.6)'
  const borderColor = scrolled ? '#E2E0D8' : 'transparent'
  const textColor = scrolled ? '#7A7770' : 'rgba(255,255,255,0.7)'
  const textHover = scrolled ? '#1A1917' : '#FFFFFF'
  const logoColor = scrolled ? '#c87cff' : '#c87cff'
  const hoverBg = scrolled ? '#FFFFFF' : 'rgba(255,255,255,0.1)'
  const hamburgerColor = scrolled ? '#1A1917' : '#FFFFFF'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: navBg,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${borderColor}`,
        transition: 'all 0.3s ease',
        height: 60,
        display: 'flex', alignItems: 'center',
        padding: '0 32px',
      }}>
        {/* Logo */}
        <Link href="/#hero" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 22, color: logoColor,
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
              padding: '6px 14px', borderRadius: 8,
              fontSize: 13.5, color: textColor,
              textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'color 0.15s, background 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = textHover; e.currentTarget.style.background = hoverBg }}
              onMouseLeave={e => { e.currentTarget.style.color = textColor; e.currentTarget.style.background = 'none' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="nav-right">
          <Link href="https://app.aere.health/login" style={{
            fontSize: 13.5, color: textColor,
            textDecoration: 'none',
            transition: 'color 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = textHover}
            onMouseLeave={e => e.currentTarget.style.color = textColor}
          >
            Sign in
          </Link>
          <Link href="https://app.aere.health/signup" style={{
            padding: '8px 18px',
            background: '#c87cff',
            color: 'white',
            borderRadius: 10,
            fontSize: 13.5, fontWeight: 500,
            textDecoration: 'none', whiteSpace: 'nowrap',
            transition: 'transform 0.15s, box-shadow 0.15s',
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
            cursor: 'pointer', padding: 4, color: hamburgerColor,
            transition: 'color 0.3s',
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
          background: '#FFFFFF',
          borderBottom: '1px solid #E2E0D8',
          padding: '16px 24px 20px',
          display: 'flex', flexDirection: 'column', gap: 4,
          boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
        }}>
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '10px 12px', fontSize: 15,
                color: '#1A1917', textDecoration: 'none',
                borderRadius: 8,
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ height: 1, background: '#E2E0D8', margin: '8px 0' }} />
          <Link href="https://app.aere.health/login"
            onClick={() => setMobileOpen(false)}
            style={{ padding: '10px 12px', fontSize: 15, color: '#7A7770', textDecoration: 'none' }}
          >
            Sign in
          </Link>
          <Link href="https://app.aere.health/signup"
            onClick={() => setMobileOpen(false)}
            style={{
              padding: '12px', textAlign: 'center',
              background: '#c87cff', color: 'white',
              borderRadius: 10, fontSize: 15, fontWeight: 500,
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
