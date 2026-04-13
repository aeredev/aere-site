import sharp from 'sharp'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

const W = 1584
const H = 396

// Brand colors from marketing site dark palette
const bgMid = '#150E26'
const bgPurple = '#1C1033'
const bgDeep = '#0F0D1A'

// Read the full brand lockup (wordmark + "OWN YOUR HEALTH")
const logoPath = resolve(ROOT, 'public/brand/logo-transparent-violet.svg')
const logoSvg = readFileSync(logoPath, 'utf8')
const logoInner = logoSvg
  .replace(/<\?xml[^?]*\?>/, '')
  .replace(/<svg[^>]*>/, '')
  .replace(/<\/svg>/, '')
  .trim()
const viewBoxMatch = logoSvg.match(/viewBox="([^"]*)"/)
const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 880 276'

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgMid}" />
      <stop offset="50%" stop-color="${bgPurple}" />
      <stop offset="100%" stop-color="${bgDeep}" />
    </linearGradient>
  </defs>

  <!-- Background — same gradient as marketing site hero -->
  <rect width="${W}" height="${H}" fill="url(#bg)" />

  <!-- Brand lockup — centered -->
  <g transform="translate(${(W - 600) / 2}, ${(H - 188) / 2})">
    <svg viewBox="${viewBox}" width="600" height="188" overflow="visible">
      ${logoInner}
    </svg>
  </g>
</svg>
`

async function generate() {
  await sharp(Buffer.from(svg), { density: 300 })
    .resize(W, H)
    .png({ quality: 95, compressionLevel: 6 })
    .toFile(resolve(ROOT, 'public/linkedin-header.png'))

  console.log(`✓ LinkedIn header generated: ${W}x${H} → public/linkedin-header.png`)
}

generate().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
