import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HIPAA Notice of Privacy Practices — Aere',
  alternates: { canonical: 'https://aere.health/hipaa' },
}

const T = '#F0EAF8'
const M = 'rgba(240,234,248,0.7)'
const A = '#c87cff'
const B = 'rgba(200,124,255,0.15)'

export default function HipaaPage() {
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
            letterSpacing: '-0.02em', color: T, marginBottom: 16, lineHeight: 1.2,
          }}>
            HIPAA Notice of Privacy Practices
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 32 }}>
            <strong>THIS NOTICE DESCRIBES HOW HEALTH INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</strong>
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>Our Commitment to Your Privacy</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Aere (&ldquo;Aere&rdquo;) is committed to maintaining the privacy of your protected health information (&ldquo;PHI&rdquo;). Aere operates as a personal health record platform — a software service that enables you to store, organize, and analyze health records that you choose to upload. As a personal health record platform acting on your behalf, Aere handles your PHI in accordance with applicable federal privacy standards, including those under the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the Health Information Technology for Economic and Clinical Health (HITECH) Act.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            We are required by law to maintain the privacy of PHI, provide you this Notice describing our privacy practices, and follow the terms of the Notice currently in effect. We are also required to notify you in the event of a breach of your unsecured PHI.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>Health Information We Handle</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            The health information we handle on your behalf includes: health record documents you upload (lab reports, imaging studies, clinical notes, pathology reports, and similar documents); structured biomarker data extracted from those documents (e.g., blood test results, vital signs, medication lists); and health profile information you voluntarily provide (including medical history, diagnoses, medications, allergies, surgical history, and demographic information). All of this information is stored in encrypted form and is accessible only to you and to the service providers listed in this Notice who process it on your behalf.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>How We May Use and Disclose Your Health Information</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>At your direction — treatment coordination.</strong> The primary use of Aere is to empower you to manage and share your health information at your discretion. You may use Aere&apos;s sharing features to generate a secure, time-limited link to your health records or a pre-visit health brief that you can share with your healthcare providers. All such sharing is initiated and controlled by you.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>Platform operations.</strong> We use your PHI to provide the Aere service — including storing your records, extracting biomarkers, generating AI-powered healthspan insights, and powering your personal health dashboard. This use is inherent to providing the service you requested.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>Service providers (Business Associates).</strong> We work with third-party service providers who process PHI on our behalf under written Business Associate Agreements (BAAs), as required by HIPAA. These include:
          </p>
          <ul style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12, paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}><strong>Cloud database and storage provider</strong> — your health records and biomarkers are stored here, encrypted at rest and protected by access controls</li>
            <li style={{ marginBottom: 8 }}><strong>AI processing service</strong> — document content is transmitted to parse health records and generate insights; this provider is contractually bound under a BAA</li>
            <li><strong>Cloud hosting provider</strong> — application infrastructure; does not access stored PHI</li>
          </ul>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            Each of these providers is contractually prohibited from using your PHI for any purpose other than providing services to Aere on your behalf.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>As required by law.</strong> We may disclose your PHI when required by law, including in response to a court order, subpoena, or other lawful process. We will make reasonable efforts to notify you before making such a disclosure unless legally prohibited.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            <strong>Other uses require your authorization.</strong> Any use or disclosure of your PHI not described above requires your specific written authorization. You may revoke an authorization at any time by contacting <a href="mailto:admin@aere.health" style={{ color: A, textDecoration: 'none' }}>admin@aere.health</a>, except to the extent that action has already been taken in reliance on the authorization.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>Your Rights Regarding Your Health Information</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>You have the following rights with respect to your PHI:</p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>Right to access.</strong> You have the right to inspect and receive a copy of PHI that Aere maintains about you. To request access, contact <a href="mailto:admin@aere.health" style={{ color: A, textDecoration: 'none' }}>admin@aere.health</a>. We will provide the requested information within 30 days.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>Right to amendment.</strong> If you believe PHI we hold is inaccurate or incomplete, you may request an amendment. We will respond within 60 days and will notify you if we deny the request, along with the reason for the denial and your right to submit a statement of disagreement.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>Right to an accounting of disclosures.</strong> You may request a list of instances where we have disclosed your PHI for purposes other than those described in this Notice. This accounting covers the six years prior to your request.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>Right to request restrictions.</strong> You may request that we restrict uses or disclosures of your PHI beyond those described in this Notice. We are not required to agree to all requested restrictions, but we will honor any restriction we do agree to.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 12 }}>
            <strong>Right to confidential communications.</strong> You may request that we communicate with you about your health information through alternative means or at an alternative location (e.g., a specific email address).
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            <strong>Right to a copy of this Notice.</strong> You have the right to receive a paper or electronic copy of this Notice at any time, even if you have received it previously. Email <a href="mailto:admin@aere.health" style={{ color: A, textDecoration: 'none' }}>admin@aere.health</a> to request a copy.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>Our Duties</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            Aere is required to maintain the privacy of your PHI, provide you with this Notice of our legal duties and privacy practices, and abide by the terms of the Notice currently in effect. We reserve the right to change this Notice and make new provisions effective for all PHI we maintain. Any revised Notice will be available on our website at aere.health/hipaa and will include the effective date prominently.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>Complaints</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 24 }}>
            If you believe your privacy rights have been violated, you may file a complaint with Aere by contacting <a href="mailto:admin@aere.health" style={{ color: A, textDecoration: 'none' }}>admin@aere.health</a>, or you may file a complaint with the U.S. Department of Health and Human Services, Office for Civil Rights, at <a href="https://www.hhs.gov/ocr" style={{ color: A, textDecoration: 'none' }}>www.hhs.gov/ocr</a>. You will not be penalized or retaliated against for filing a complaint.
          </p>

          <h2 style={{ fontSize: 14, fontWeight: 600, color: T, marginTop: 32, marginBottom: 12 }}>Effective Date</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: T, marginBottom: 40 }}>
            This Notice of Privacy Practices is effective April 1, 2026.<br /><br />
            Contact: <a href="mailto:admin@aere.health" style={{ color: A, textDecoration: 'none' }}>admin@aere.health</a>
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
