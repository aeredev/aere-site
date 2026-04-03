@AGENTS.md

## Brand

- **Logo lockup:** Use the `<AereLockup />` SVG component from `components/AereLockup.tsx`. Do NOT recreate the lockup with CSS text — all proportions are baked into the SVG and scale as one unit. Set `width` prop to control size.
- **Brand tokens:** `lib/brand.ts` has all brand constants (colors, fonts, radii, shadows). Import from here instead of hardcoding values.
- **Brand assets:** `public/brand/` has all logo SVGs and PNGs in dark/light/violet variants.
- **Shared files with app project (`~/Desktop/aere`)** — keep in sync when updating:
  - `lib/brand.ts`
  - `components/AereLockup.tsx`
