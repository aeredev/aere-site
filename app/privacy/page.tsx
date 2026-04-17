import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Aere',
  description:
    'How Aere collects, uses, and protects your health data. HIPAA-aligned, zero-knowledge encryption where possible, and no data sold to third parties.',
  alternates: { canonical: 'https://aere.health/privacy' },
  openGraph: {
    title: 'Privacy Policy — Aere',
    description: 'How Aere protects your health data.',
    url: 'https://aere.health/privacy',
    type: 'website',
  },
}

const T = '#F0EAF8'
const M = 'rgba(240,234,248,0.7)'
const A = '#c87cff'
const B = 'rgba(200,124,255,0.15)'

export default function PrivacyPage() {
  return (
    <div style={{ background: '#0F0D1A', minHeight: '100vh' }}>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(15,13,26,0.95)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${B}`,
        height: 64, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 32px',
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/brand/wordmark-transparent-violet.svg" alt="Aere" style={{ height: 40, display: 'block' }} />
        </Link>
        <Link href="/" style={{
          fontSize: 13.5, color: M, textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}>
          &larr; Return to site
        </Link>
      </nav>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '104px 24px 60px' }}>
        <article>
          <p style={{ fontSize: 13, color: M, marginBottom: 16 }}>Last updated: April 1, 2026</p>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 400,
            letterSpacing: '-0.02em', color: T, marginBottom: 32, lineHeight: 1.2,
          }}>
            Privacy Policy
          </h1>

          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Aere (&ldquo;Aere,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates aere.health and the Aere healthspan intelligence platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal and health information when you use our services. Because you are entrusting us with sensitive health data, we treat your privacy as a core obligation — not an afterthought.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            By creating an account or using Aere, you agree to the practices described in this Policy. If you do not agree, please discontinue use of the platform.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>1. Information We Collect</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>Account information.</strong> When you register, we collect your name, email address, and (if applicable) your Google account identifier. We do not store your Google password.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>Health records you upload.</strong> You may upload PDF documents such as lab results, imaging reports, and clinical notes. These files are stored in encrypted cloud storage and are processed by our AI service to extract structured data. The original files are never made available to third parties except as described in Section 4.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>Extracted biomarkers.</strong> Our AI extracts individual biomarker values (e.g., cholesterol, HbA1c, vitamin D) from your uploaded documents. These structured data points are stored in our database and used to power your healthspan dashboard, trend charts, and AI coaching.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>Health profile and intake data.</strong> You may optionally provide additional context — including medical history, medications, allergies, emergency contacts, and demographic information — through our health intake form. This information is used to personalize AI analysis and, if you choose, to generate a pre-visit health brief you can share with your providers.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            <strong>Usage data.</strong> We collect standard server logs including IP addresses, browser type, pages visited, and feature interactions. This data is used for security monitoring, debugging, and product improvement. It is not linked to your health data.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>2. How We Use Your Information</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>We use your information to:</p>
          <ul style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}>Provide, operate, and improve the Aere platform and its AI-powered features</li>
            <li style={{ marginBottom: 8 }}>Extract and structure biomarker data from your uploaded health documents</li>
            <li style={{ marginBottom: 8 }}>Generate personalized healthspan insights, trend analysis, and AI coaching responses</li>
            <li style={{ marginBottom: 8 }}>Create sharable health summaries or pre-visit briefs at your explicit request</li>
            <li style={{ marginBottom: 8 }}>Send transactional emails (e.g., account verification, password reset)</li>
            <li style={{ marginBottom: 8 }}>Process subscription payments and manage billing</li>
            <li style={{ marginBottom: 8 }}>Maintain security, detect fraud, and comply with legal obligations</li>
            <li>Respond to your support requests</li>
          </ul>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            We do not use your health data to train AI models, build advertising profiles, or engage in any secondary commercial use beyond operating and improving Aere for you.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>3. Legal Basis for Processing (where applicable)</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            We process your data on the basis of your consent (which you may withdraw at any time), the performance of our contract with you (providing the Aere service you signed up for), and our legitimate interests in operating a secure and compliant platform. Processing of health data is based solely on your explicit consent.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>4. How We Share Your Information</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>We do not sell, rent, or trade your personal or health data.</strong> We share your information only in the following limited circumstances:
          </p>
          <ul style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}><strong>Cloud database and storage provider</strong> — your records and biomarker data are stored in an encrypted, access-controlled cloud database under a data processing agreement.</li>
            <li style={{ marginBottom: 8 }}><strong>AI processing service</strong> — document content is transmitted to an AI service to parse your health records and generate insights. This service operates under a data processing agreement and is prohibited from using your data for its own purposes.</li>
            <li style={{ marginBottom: 8 }}><strong>Payment processor</strong> — our PCI-DSS compliant payment processor handles all billing and subscription data. Aere does not store credit card numbers.</li>
            <li style={{ marginBottom: 8 }}><strong>Email delivery service</strong> — your email address is shared with our transactional email provider solely for the purpose of sending account-related communications.</li>
            <li style={{ marginBottom: 8 }}><strong>Cloud hosting provider</strong> — our hosting infrastructure serves the application. This provider does not access your stored health data.</li>
            <li><strong>Healthcare providers you designate</strong> — if you use Aere&apos;s sharing features to share a health summary or pre-visit brief with a provider, that provider will receive the data you explicitly chose to include. You control the scope, expiration, and revocation of all share links.</li>
          </ul>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            We may disclose information if required by law, court order, or a valid government request, or to protect the safety of our users or the public. We will notify you of such requests unless legally prohibited from doing so.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>5. Data Security</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            We implement technical and organizational measures to protect your health information, including encryption of all stored files and records at rest, encryption of all data in transit, access controls ensuring users can only access their own records, secure session management, rate limiting, audit logging of all protected health information access, and soft-delete policies that prevent accidental data destruction. No system is 100% secure. If you discover a security vulnerability, please report it immediately to <a href="mailto:admin@aere.health" style={{ color: A, textDecoration: 'none' }}>admin@aere.health</a>.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>6. Data Retention</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            We retain your account data and health records for as long as your account is active or as needed to provide the service. If you request account deletion, we will delete your personal data within 30 days, subject to any legal obligations requiring longer retention. Audit logs are retained for a minimum of 6 years in accordance with HIPAA requirements.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>7. Your Rights</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>You have the right to:</p>
          <ul style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}><strong>Access</strong> — request a copy of the personal and health data we hold about you</li>
            <li style={{ marginBottom: 8 }}><strong>Correct</strong> — update or correct inaccurate information in your account or health profile</li>
            <li style={{ marginBottom: 8 }}><strong>Delete</strong> — request deletion of your account and associated data</li>
            <li style={{ marginBottom: 8 }}><strong>Export</strong> — request your health records and biomarker data in a portable format</li>
            <li style={{ marginBottom: 8 }}><strong>Withdraw consent</strong> — withdraw consent for data processing at any time, which will require account termination</li>
            <li><strong>Complain</strong> — lodge a complaint with your local data protection authority if you believe your rights have been violated</li>
          </ul>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            To exercise these rights, contact us at <a href="mailto:admin@aere.health" style={{ color: A, textDecoration: 'none' }}>admin@aere.health</a>. We will respond within 30 days.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>8. Children&apos;s Privacy</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Aere is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected data from a child under 13, we will delete it promptly. If you believe a child under 13 has provided us with personal information, please contact <a href="mailto:admin@aere.health" style={{ color: A, textDecoration: 'none' }}>admin@aere.health</a>.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>9. Changes to This Policy</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date at the top of this page and, for material changes, notify you via email or an in-app notice. Continued use of Aere after changes take effect constitutes acceptance of the revised policy.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>10. Contact Us</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 40 }}>
            Aere<br />
            Email: <a href="mailto:admin@aere.health" style={{ color: A, textDecoration: 'none' }}>admin@aere.health</a><br />
            Website: <a href="https://aere.health" style={{ color: A, textDecoration: 'none' }}>aere.health</a>
          </p>
        </article>
      </main>

      <footer style={{ borderTop: `1px solid ${B}`, padding: '24px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: M, margin: 0 }}>
          &copy; {new Date().getFullYear()} Aere Health, Inc. &middot;{' '}
          <a href="/" style={{ color: M, textDecoration: 'none' }}>aere.health</a>
        </p>
      </footer>
    </div>
  )
}
