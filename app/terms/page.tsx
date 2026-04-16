import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Aere',
  alternates: { canonical: 'https://aere.health/terms' },
}

const T = '#F0EAF8'
const M = 'rgba(240,234,248,0.7)'
const A = '#c87cff'
const B = 'rgba(200,124,255,0.15)'

export default function TermsPage() {
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
            Terms of Service
          </h1>

          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Aere platform, including aere.health and any associated mobile applications (&ldquo;Service&rdquo;), operated by Aere (&ldquo;Aere,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). Please read these Terms carefully before using the Service.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>1. Acceptance of Terms</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            By creating an account, accessing, or using Aere, you agree to be bound by these Terms and our Privacy Policy. If you are using Aere on behalf of an organization, you represent that you have authority to bind that organization to these Terms. If you do not agree to these Terms, you may not use the Service.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>2. Eligibility</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            You must be at least 13 years old to use Aere. By using the Service, you represent that you are at least 13 years of age. Users under 18 must have parental or guardian consent. The Service is currently available to residents of the United States. We make no representations that the Service is appropriate or available in other jurisdictions.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>3. Account Registration</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            You must register for an account to access most features. You agree to provide accurate, current, and complete information and to keep your account information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must notify us immediately at <a href="mailto:admin@aere.health" style={{ color: A, textDecoration: 'none' }}>admin@aere.health</a> if you suspect unauthorized access to your account. Aere is not liable for losses resulting from unauthorized use of your account.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>4. Subscription and Billing</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            Aere offers paid subscription plans with a 7-day trial. Current plans include Vault ($96/year), Core ($34/month or $300/year), Pro ($149/month), and Practice ($499/month). Prices are subject to change with reasonable notice.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            All paid subscriptions are processed through our payment processor. By providing payment information, you authorize Aere to charge your payment method on a recurring basis per your selected billing cycle. Subscriptions auto-renew unless cancelled before the renewal date. You may manage or cancel your subscription through your account billing settings at any time.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Refunds are issued at our discretion within 7 days of a charge if you have not materially used the Service during that period. Annual subscriptions that are cancelled mid-term are not eligible for partial refunds unless required by applicable law. We reserve the right to modify subscription features and pricing with 30 days&apos; notice to existing subscribers.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>5. Acceptable Use</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>You agree not to:</p>
          <ul style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}>Upload documents you do not have the legal right to share</li>
            <li style={{ marginBottom: 8 }}>Upload anyone else&apos;s health records without their explicit written consent</li>
            <li style={{ marginBottom: 8 }}>Use the Service to provide health advice or clinical services to third parties</li>
            <li style={{ marginBottom: 8 }}>Attempt to reverse-engineer, scrape, or extract data from the platform through automated means</li>
            <li style={{ marginBottom: 8 }}>Circumvent any security or access control measure</li>
            <li style={{ marginBottom: 8 }}>Use the Service in any way that violates applicable laws, including HIPAA where applicable</li>
            <li>Share your account credentials or allow others to access your account</li>
          </ul>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>6. Health Information Disclaimer</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>Aere is not a healthcare provider, medical practice, or clinical service.</strong> The Service is a software platform that helps you organize, visualize, and understand your own health data. Nothing on Aere constitutes medical advice, diagnosis, treatment recommendation, or a substitute for professional medical care.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Always consult a qualified healthcare provider before making any decisions about your health, medications, diet, or exercise. Never disregard professional medical advice or delay seeking it because of something you read on Aere. In a medical emergency, call 911 immediately.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>7. AI-Generated Content</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Aere uses AI technology to parse health records and generate insights. AI-generated content is informational only and may contain errors or inaccuracies. The accuracy of extracted biomarker data depends on the quality and format of the documents you upload. You should verify all AI-extracted data against your original documents. Aere is not liable for decisions made based on AI-generated insights.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>8. Intellectual Property</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            The Aere platform, including its design, software, trademarks, and content, is owned by Aere and protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Service for personal, non-commercial purposes.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            You retain ownership of all health records and documents you upload. By uploading content, you grant Aere a limited license to store, process, and analyze that content solely for the purpose of providing the Service to you.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>9. Termination</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            You may terminate your account at any time through account settings. Aere may suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or for any reason with reasonable notice. Upon termination, your right to use the Service ceases immediately. We will retain your data for 30 days post-termination, after which it will be permanently deleted subject to legal retention requirements.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>10. Disclaimers of Warranty</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. AERE DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED. YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>11. Limitation of Liability</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            TO THE FULLEST EXTENT PERMITTED BY LAW, AERE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, HEALTH OUTCOMES, OR PROFITS, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE. AERE&apos;S TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO AERE IN THE TWELVE MONTHS PRECEDING THE CLAIM.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>12. Governing Law</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            These Terms are governed by the laws of the State of Nevada, without regard to conflict of law principles. Any disputes arising from these Terms or your use of Aere shall be resolved exclusively in the state or federal courts located in Nevada, and you consent to personal jurisdiction in those courts.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>13. Dispute Resolution</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Before filing any formal legal action, you agree to contact Aere at <a href="mailto:admin@aere.health" style={{ color: A, textDecoration: 'none' }}>admin@aere.health</a> to attempt to resolve the dispute informally. If the dispute cannot be resolved within 30 days, either party may pursue formal legal remedies as described in Section 12. Nothing in this section prevents either party from seeking injunctive relief in connection with a breach of intellectual property or confidentiality obligations.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>14. Contact</h2>
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
