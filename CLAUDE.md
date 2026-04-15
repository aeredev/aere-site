# Aere Marketing Site — Claude Code Technical Reference
*Last updated: April 13, 2026*

## Read First
**Before working on anything here, read the full context from the app:**
- `~/Desktop/aere/CLAUDE.md` — engineering standards, brand voice, design system, coding rules
- `~/Desktop/aere/DECISIONS.md` — all product and strategic decisions
- `~/Desktop/aere/ROADMAP.md` — phases, pricing, positioning

Everything in those files applies here too. This file contains only what is unique to the marketing site.

---

## This Project

- Static Next.js — no auth, no Supabase, no API routes
- Deployed on Vercel (aere-site project, GitHub: aeredev/aere-site)
- `lib/biomarker-reference.ts` exists here — keep in sync with main app
- All engineering standards, brand voice, and design rules from app CLAUDE.md apply here

---

## Page Structure — CRITICAL

| File | URL | Status | Rule |
|---|---|---|---|
| `app/page.tsx` | aere.health | Live — waitlist teaser | SACRED — never overwrite, never confuse with full site |
| `app/full-v2/page.tsx` | aere.health/full-v2 | New full site (pending swap to root) | Primary marketing site |
| `app/waitlist/page.tsx` | aere.health/waitlist | Waitlist form | All public CTAs point here |
| `app/science/page.tsx` | aere.health/science | Live | Science reference page |
| `app/insight/page.tsx` | aere.health/insight | Live | AereInsight philosophy page |
| `app/marketing/page.tsx` | aere.health/marketing | Hidden | Legacy light-theme version |

**CRITICAL:** `app/page.tsx` (teaser) and `app/full-v2/page.tsx` (full site) are separate. Never copy one over the other. Never overwrite app/page.tsx with anything.

**Pending:** `app/full-v2/page.tsx` will become `app/page.tsx` (root) when swapped. Until then, public CTAs on full-v2 point to `/waitlist`.

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

The full marketing site uses a dark purple theme. These are the D palette values used throughout `app/full-v2/page.tsx`:

```
bgDeep:    #0F0D1A    bgDark:   #150E26    bgPurple:  #1C1033
bgCard:    #1E1535    bgCard2:  #261940
border:    rgba(200,124,255,0.15)
borderStrong: rgba(200,124,255,0.3)
text:      #F0EAF8    muted:    rgba(240,234,248,0.7)
accent:    #c87cff    success:  #9CDB7B    amber: #FFB347
accentTint: rgba(200,124,255,0.12)
```

Editorial pages (science, insight) use light theme — same as app design system (#F5F4F0 bg).

---

## Logo & Brand Assets

- From `@aere/brand` npm package — never text elements, never CSS recreation
- `public/brand/` is gitignored — populated via `npm run sync-brand`
- Primary files: `wordmark-transparent-violet.svg`, `wordmark-transparent-dark.svg`
- To resize: change width/height CSS properties only

---

## Shared With Main App

- `lib/biomarker-reference.ts` — copy changes to both projects when updating

---

## How to Run

```bash
cd ~/Desktop/aere-marketing
npm run dev    # localhost:3000 (or next available port)
```
