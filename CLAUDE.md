# Aere Marketing Site — Claude Code Project Context
*Last updated: April 4, 2026*

## Product
**Aere** (aere.health, pronounced "air") — The Healthspan Intelligence Platform.
**Tagline:** Own Your Health *(never change this — ever)*
**Descriptor:** The Healthspan Intelligence Platform
**Founder:** Solo, non-technical. Has Oura Ring, Apple Watch, 8 Sleep, Function Health.

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

**The brand line:** "Normal means you won't die tomorrow. Optimal means you're on the right trajectory for a longer, healthier life."

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

- **`app/page.tsx`** — the waitlist teaser. NEVER modify this file. It is live production. Sacred.
- **`app/marketing/page.tsx`** — the full marketing site. Hidden until launch. Build here only.
- **`app/science/page.tsx`** — science reference page. Live at aere.health/science.
- **`app/insight/page.tsx`** — AereInsight philosophy page. Live at aere.health/insight.

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
- **Dark** — homepage teaser only (`app/page.tsx`). Background #1A1917, white text, violet accents.
- **Light** — all other pages (science, insight, marketing, pricing). Background #F5F4F0, dark text.

Never apply dark theme to new pages. All new pages use the light theme.

### Colors
```
Light theme:
  Background:      #F5F4F0
  Surface (cards): #FFFFFF
  Border:          #E2E0D8
  Text primary:    #1A1917
  Text muted:      #7A7770
  Accent:          #c87cff  (violet)
  Accent tint:     #F5EAFF

Dark theme (homepage only):
  Background:      #1A1917
  Text:            #FFFFFF
  Accent:          #c87cff
```

### Typography
```
Body:     DM Sans (var(--font-sans))
Display:  DM Serif Display (var(--font-serif))
NEVER use hardcoded font family strings
```

### Section Design Pattern
```
Sections alternate between:
- White (#FFFFFF) — content sections
- Page background (#F5F4F0) — separator sections
- Dark (#1A1917) — CTA sections at bottom

AVOID: multiple adjacent tan/beige sections. Use white for contrast.
```

### Editorial Pages (science, insight)
```
Max-width: 720px centered
Line-height: 1.8 for body text
Section breaks: thin horizontal rules
Pull quotes: left border 2px solid var(--color-accent), padding 16px 24px, italic
Three-card rows: white bg, border-radius 16px, border 1px solid #E2E0D8
CTA sections: dark background #1A1917
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
| Waitlist teaser | aere.health | Live — DO NOT TOUCH | app/page.tsx |
| Science reference | aere.health/science | Live | Light theme, disclaimer banners |
| How It Works | aere.health/insight | Live | AereInsight philosophy, light theme |
| Full marketing site | aere.health/marketing | Hidden until launch | app/marketing/page.tsx |

---

## Shared With Main App
- `lib/biomarker-reference.ts` — keep in sync when updating

---

## How to Run
```bash
cd ~/Desktop/aere-marketing
npm run dev        # Start dev server at localhost:3000 (or next available port)
```
