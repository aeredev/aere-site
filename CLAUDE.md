# Aere Marketing Site — Claude Code Project Context
*Last updated: April 4, 2026*

## Product
**Aere** (aere.health, pronounced "air") — The Healthspan Intelligence Platform.
**Tagline:** Own Your Health *(never change this — ever)*
**Descriptor:** The Healthspan Intelligence Platform
**Founder:** Solo, non-technical. Has Oura Ring, Apple Watch, 8 Sleep.

---

## Core Product Vision (April 7, 2026)
Aere is a personal health AI coach — not a vault with AI bolted on. 
The vault, wearables, and labs are inputs to the AI. The AI is the product.
Marketing copy should reflect this. Lead with intelligence and coaching. 
The data aggregation is the enabler, not the headline.

---

## Engineering Standards

Be incredible.

- **Always use the professional, optimal method.** No shortcuts, no hotfixes. Every implementation should be the way a senior engineer at a top company would do it.
- **The founder is non-technical.** He prompts — you are the entire engineering team. Make the right technical decisions without asking.
- **Verify before you ship.** Every change gets tested and visually confirmed. Never say "it should work" — prove it works.
- **Own mistakes immediately.** If the implementation was wrong, say so and fix it.
- **Read the Next.js docs** in `node_modules/next/dist/docs/` before writing code that touches routing, data fetching, or any Next.js API.

---

## Intelligence Color System — CORE DESIGN PRINCIPLE — NON-NEGOTIABLE

**Violet (#c87cff, var(--color-accent)) ALWAYS signals personalized AI intelligence grounded in confirmed user data.**

- NEVER use violet for generic, static, or educational content
- USE violet for: AereInsight references, AI-powered feature callouts, confirmed insight examples
- USE neutral for: general marketing content, educational sections
- Violet = Aere is speaking directly to the user about their data. Protect this signal always.

---

## Brand Voice — NON-NEGOTIABLE

**Mission:** "Healthier longer" — not just longer.
- Healthspan = how well you live (quality, vitality, function) — this comes FIRST
- Longevity = how long you live — this follows naturally from optimizing healthspan
- Anti-aging = the destination we're heading toward but don't lead with yet. Do NOT use anti-aging language yet.

**Rules in all copy:**
- Prefer "healthspan" over "longevity" when referring to the user's goal
- "Healthier longer" is the most accessible expression of the mission
- Use "provider" not "doctor" or "physician" — covers coaches, trainers, PTs, nutritionists
- Use "health records" not "medical records"
- Keep as-is: "longevity-optimal ranges", "longevity physician", "longevity lens", "longevity medicine"

**The brand line:** "Normal means status quo. Optimal means all systems go."

---

## Projects

- `~/Desktop/aere` — the main app (app.aere.health)
- `~/Desktop/aere-marketing` — this project, the marketing site (aere.health)
- `~/Desktop/aere-brand` — shared brand assets npm package (`@aere/brand`, GitHub: `aeredev/aere-brand`)

---

## Logo & Brand Assets — CRITICAL — NO EXCEPTIONS

**NEVER use text elements to render the Aere logo anywhere.**
- Brand assets come from the `@aere/brand` private npm package
- `public/brand/` is gitignored — populated automatically via `npm run sync-brand`
- To update brand assets: edit in `~/Desktop/aere-brand`, commit, push, then `npm update @aere/brand`
- Logo SVGs are outlined vector paths — no font dependencies. Never recreate with CSS text.
- Brand tokens: `import { BRAND_COLORS, BRAND_FONTS } from '@aere/brand'`
- AereLockup component: `import { AereLockup } from '@aere/brand'` — outlined SVG, scales as one unit
- To resize: change width/height CSS properties only
- Current homepage logo sizing: `width clamp(160px, 16vw, 240px)`
- Primary files: `wordmark-transparent-violet.svg`, `wordmark-transparent-dark.svg`

---

## CRITICAL — Marketing Site Page Rules

- **`app/page.tsx`** — the waitlist teaser. Live at aere.health. Can be updated freely.
- **`app/full/page.tsx`** — the full marketing site. NEVER overwrite or replace this file with teaser content. This is a large, complex page with extensive work. Treat it as the most valuable file in the project.
- **`app/marketing/page.tsx`** — legacy marketing page (light theme). Hidden until launch.
- **`app/science/page.tsx`** — science reference page. Live at aere.health/science.
- **`app/insight/page.tsx`** — AereInsight philosophy page. Live at aere.health/insight.

**CRITICAL:** `app/page.tsx` (teaser) and `app/full/page.tsx` (full site) are separate pages that must never be confused. The teaser is a simple waitlist page. The full site is the complete marketing experience. Never copy one over the other.

---

## This Project

- Static Next.js — no auth, no Supabase, no API routes
- `lib/biomarker-reference.ts` exists here — keep in sync with main app
- Deployed separately on Vercel (aere-site project)
- GitHub: aeredev/aere-site

---

## Design System

### Theme
The marketing site uses **two themes**:
- **Dark** — homepage teaser (`app/page.tsx`) and full site (`app/full/page.tsx`). Purple gradient background, light text, violet accents.
- **Light** — editorial pages (science, insight) and legacy marketing. Background #F5F4F0, dark text.

### Colors
```
Dark theme (primary — teaser, full site):
  Background gradient: linear-gradient(135deg, #150E26 0%, #1C1033 60%, #0F0D1A 100%)
  Background deep:   #0F0D1A
  Background mid:    #150E26
  Background purple: #1C1033
  Surface (cards):   #1E1535
  Surface 2:         #261940
  Border:            rgba(200,124,255,0.15)
  Border strong:     rgba(200,124,255,0.3)
  Text:              #F0EAF8
  Text muted:        rgba(240,234,248,0.7)
  Text body:         rgba(240,234,248,0.6)
  Text dim:          rgba(240,234,248,0.4)
  Accent:            #c87cff  (violet)
  Accent tint:       rgba(200,124,255,0.12)
  Cyan (tagline):    #00E5FF

Light theme (editorial pages):
  Background:      #F5F4F0
  Surface (cards): #FFFFFF
  Border:          #E2E0D8
  Text primary:    #1A1917
  Text muted:      #7A7770
  Accent:          #c87cff  (violet)
  Accent tint:     #F5EAFF
```

### Typography
```
Body:     DM Sans (var(--font-sans))
Display:  DM Serif Display (var(--font-serif))
NEVER use hardcoded font family strings
```

### Section Design Pattern (dark theme)
```
Sections alternate between:
- Deep (#0F0D1A) — primary sections
- Dark (#150E26) — content sections
- Purple (#1C1033) — accent/feature sections

Section labels: 13px, uppercase, letter-spacing 0.08em, D.accent (#c87cff)
```

### Editorial Pages (science, insight)
```
Max-width: 720px centered
Line-height: 1.8 for body text
Section breaks: thin horizontal rules
Pull quotes: left border 2px solid var(--color-accent), padding 16px 24px, italic
Three-card rows: white bg, border-radius 16px, border 1px solid #E2E0D8
CTA sections: dark background #0F0D1A
```

---

## Waitlist Form

All pages that collect email addresses post to `/api/waitlist`.
The form sends a notification to admin@aere.health via Resend on each new signup.
RESEND_API_KEY must be in Vercel environment variables for aere-site project.

---

## Feature Naming (marketing copy)
- AereVault — the health record vault
- AereShare — provider sharing system
- AerePulse — wearable data (coming soon)
- AereInsight — AI healthspan intelligence
- AereBrief — pre-visit AI brief

---

## Key Pages

| Page | URL | Status | Notes |
|------|-----|--------|-------|
| Waitlist teaser | aere.health | Live | app/page.tsx, dark purple gradient |
| Full marketing site | aere.health/full | Live | app/full/page.tsx, dark theme |
| Science reference | aere.health/science | Live | Light theme, disclaimer banners |
| How It Works | aere.health/insight | Live | AereInsight philosophy, light theme |
| Legacy marketing | aere.health/marketing | Hidden | app/marketing/page.tsx, light theme |

---

## Shared With Main App
- `lib/biomarker-reference.ts` — keep in sync when updating

---

## How to Run
```bash
cd ~/Desktop/aere-marketing
npm run dev        # Start dev server at localhost:3000 (or next available port)
```
