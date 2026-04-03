@AGENTS.md

## Engineering Standards

Be incredible.

- **Always use the professional, optimal method.** No shortcuts, no hotfixes, no quick-and-dirty solutions. Every implementation should be the way a senior engineer at a top company would do it.
- **The founder is non-technical.** He prompts — you are the entire engineering team. Make the right technical decisions without asking. Explain what you did briefly, but don't present options for architecture or tooling choices.
- **Optimize for security, speed, and flow.** Every decision should consider all three. OWASP top 10, minimal attack surface. Fast builds, fast pages, fast deploys. Clean git history, clean code, clean architecture.
- **Verify before you ship.** Every change gets tested and visually confirmed before declaring it done. Never say "it should work" — prove it works.
- **Own mistakes immediately.** Don't blame caching, browser behavior, or edge cases. If the implementation was wrong, say so and fix it.
- **No unnecessary abstractions.** Don't over-engineer, but don't under-engineer either. The right amount of complexity is what the task requires.
- **Read the Next.js docs** in `node_modules/next/dist/docs/` before writing code that touches routing, data fetching, or any Next.js API. This version may differ from your training data.

---

## Projects

- `~/Desktop/aere` — the main app (app.aere.health)
- `~/Desktop/aere-marketing` — this project, the marketing site (aere.health)
- `~/Desktop/aere-brand` — shared brand assets npm package (`@aere/brand`, GitHub: `aeredev/aere-brand`)

---

## Brand

- **Brand assets come from the `@aere/brand` private npm package** (`~/Desktop/aere-brand`, GitHub: `aeredev/aere-brand`). Do NOT add brand files directly to this project.
- **`public/brand/`** is gitignored — it's populated automatically from the package at install/build time via `npm run sync-brand`.
- **To update brand assets:** Edit files in `~/Desktop/aere-brand`, commit, push, then run `npm update @aere/brand` in this project.
- **Logo SVGs are outlined vector paths** — no font dependencies. Never recreate logos with CSS text.
- **Brand tokens:** Available via `import { BRAND_COLORS, BRAND_FONTS } from '@aere/brand'`
- **AereLockup component:** Available via `import { AereLockup } from '@aere/brand'` — outlined SVG, scales as one unit.
