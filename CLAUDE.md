# Aere Marketing Site — Claude Code Technical Reference
*Last updated: April 16, 2026*

## Read First
**Before working on anything here, read the full context from the app:**
- `~/Desktop/aere/CLAUDE.md` — engineering standards, brand voice, design system, coding rules
- `~/Desktop/aere/DECISIONS.md` — all product and strategic decisions
- `~/Desktop/aere/ROADMAP.md` — phases, pricing, positioning

Everything in those files applies here too. This file contains only what is unique to the marketing site.

---

## This Project

- Mostly static Next.js — no auth, no Supabase. One serverless route: `/api/waitlist` (Resend email notification)
- Deployed on Vercel (aere-site project, GitHub: aeredev/aere-site)
- `lib/biomarker-reference.ts` exists here — keep in sync with main app
- All engineering standards, brand voice, and design rules from app CLAUDE.md apply here

---

## Page Structure

| File | URL | Status | Notes |
|---|---|---|---|
| `app/page.tsx` | aere.health | Live — full marketing site | Primary marketing site (swapped in from former `/full-v2`) |
| `app/waitlist/page.tsx` | aere.health/waitlist | Live — waitlist form | All public CTAs point here |
| `app/science/page.tsx` | aere.health/science | Live | Biomarker science reference page |
| `app/contact/page.tsx` | aere.health/contact | Live | Contact form |
| `app/privacy/page.tsx` | aere.health/privacy | Live | Privacy policy (dark theme) |
| `app/terms/page.tsx` | aere.health/terms | Live | Terms of service (dark theme) |
| `app/hipaa/page.tsx` | aere.health/hipaa | Live | HIPAA NPP (dark theme) |
| `app/full-v2/page.tsx` | aere.health/full-v2 | Deprecated — `noindex,nofollow` | Pre-swap duplicate; safe to delete once verified unused |

---

## CTA Rules (beta launch)

- All "Request early access" / "Get started" buttons → `/waitlist`
- Nav sign in link → `https://app.aere.health/login`
- No links to `https://app.aere.health/signup` — signup is private beta gated
- Founding member invitees get direct link to `https://app.aere.health/join` (private, not linked publicly)

---

## Waitlist Form

All email collection forms POST to `/api/waitlist`.
Sends notification to admin@aere.health via Resend.
`RESEND_API_KEY` must be set in Vercel env vars for aere-site project.

---

## Marketing Site Design Tokens (dark theme)

The full marketing site uses a dark purple theme. These are the D palette values used throughout `app/page.tsx`:

```
bgDeep:    #0F0D1A    bgDark:   #150E26    bgPurple:  #1C1033
bgCard:    #1E1535    bgCard2:  #261940
border:    rgba(200,124,255,0.15)
borderStrong: rgba(200,124,255,0.3)
text:      #F0EAF8    muted:    rgba(240,234,248,0.7)
accent:    #c87cff    success:  #9CDB7B    amber: #FFB347
accentTint: rgba(200,124,255,0.12)
```

The legal pages and `/science` also use the dark theme.

---

## Logo & Brand Assets

- From `@aere/brand` npm package — never text elements, never CSS recreation
- `public/brand/` is gitignored — populated via `npm run sync-brand`
- Primary files: `wordmark-transparent-violet.svg`, `wordmark-transparent-dark.svg`
- To resize: change width/height CSS properties only

---

## SEO & Performance

- `app/layout.tsx` holds the site-wide Organization, WebSite, and SoftwareApplication JSON-LD
- Page-specific JSON-LD lives in the page it describes (e.g., `MedicalWebPage` in `/science`)
- Every public page should export its own `metadata` (title, description, canonical, OG, Twitter) — client-component pages do this via a sibling `layout.tsx`
- `/full-v2` must remain `noindex, nofollow` while it exists
- Sitemap is `app/sitemap.ts`; robots are `app/robots.ts`

---

## Shared With Main App

- `lib/biomarker-reference.ts` — copy changes to both projects when updating

---

## How to Run

```bash
cd ~/Desktop/aere-marketing
npm run dev    # localhost:3000 (or next available port)
```
