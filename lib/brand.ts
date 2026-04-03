/**
 * Aere Brand Tokens — single source of truth.
 * Copy this file into any Aere project that needs brand consistency.
 * Last updated: 2026-04-03
 */

// ── Colors ──────────────────────────────────────────────────────────────────────

export const BRAND_COLORS = {
  accent:           '#c87cff',
  accentTint:       '#F5EAFF',
  accentTintHover:  '#EDD5FF',
  accentActive:     '#a855d4',

  bgLight:          '#F5F4F0',
  bgDark:           '#1A1917',

  surface:          '#FFFFFF',
  surface2:         '#F0EEE9',
  surfaceSubtle:    '#FAFAF8',

  border:           '#E2E0D8',
  text:             '#1A1917',
  textLight:        '#F5F4F0',
  muted:            '#7A7770',

  success:          '#5CC994',
  successTint:      '#EDFBF4',
  amber:            '#C4813A',
  amberTint:        '#FDF3E7',
  error:            '#C44A3A',
  errorTint:        '#FDECEA',
  blue:             '#3A5FC4',
  blueTint:         '#EAF0FD',
} as const

// ── Typography ──────────────────────────────────────────────────────────────────

export const BRAND_FONTS = {
  serif: "'DM Serif Display', Georgia, serif",
  sans:  "'DM Sans', sans-serif",
} as const

// ── Logo Lockup ─────────────────────────────────────────────────────────────────
// Do NOT build the lockup with CSS text. Use the <AereLockup /> SVG component
// from components/AereLockup.tsx — all proportions are baked into the SVG and
// scale as one unit. This ensures the lockup is identical everywhere.
//
// The SVG canonical viewBox is 260x76. Set width prop to control size.
// Example: <AereLockup width={200} />

// ── Radii ───────────────────────────────────────────────────────────────────────

export const BRAND_RADII = {
  sm:  '8px',
  md:  '10px',
  lg:  '14px',
  xl:  '16px',
  xxl: '20px',
} as const

// ── Shadows ─────────────────────────────────────────────────────────────────────

export const BRAND_SHADOWS = {
  card:  '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
  modal: '0 4px 32px rgba(0,0,0,0.18)',
} as const
