@AGENTS.md

## Brand

- **Brand assets come from the `@aere/brand` private npm package** (`~/Desktop/aere-brand`, GitHub: `aeredev/aere-brand`). Do NOT add brand files directly to this project.
- **`public/brand/`** is gitignored — it's populated automatically from the package at install/build time via `npm run sync-brand`.
- **To update brand assets:** Edit files in `~/Desktop/aere-brand`, commit, push, then run `npm update @aere/brand` in this project.
- **Logo SVGs are outlined vector paths** — no font dependencies. Never recreate logos with CSS text.
- **Brand tokens:** Available via `import { BRAND_COLORS, BRAND_FONTS } from '@aere/brand'`
- **AereLockup component:** Available via `import { AereLockup } from '@aere/brand'` — outlined SVG, scales as one unit.
