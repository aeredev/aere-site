'use client'

import { useState, useMemo, useCallback } from 'react'
import { Search, X, ChevronDown, ChevronUp, ExternalLink, BookOpen } from 'lucide-react'
import type { BiomarkerReference, Citation } from '@/lib/biomarker-reference'

interface Props {
  biomarkers: BiomarkerReference[]
  categories: Record<string, string>
}

const CONFIDENCE_CONFIG = {
  strong:   { label: 'Strong evidence',   color: 'var(--color-success)', bg: 'var(--color-success-tint)' },
  moderate: { label: 'Moderate evidence', color: 'var(--color-amber)',   bg: 'var(--color-amber-tint)' },
  emerging: { label: 'Emerging evidence', color: 'var(--color-blue)',    bg: 'var(--color-blue-tint)' },
} as const

const SEX_CONFIG = {
  male:   { label: 'Male',   color: 'var(--color-blue)', bg: 'var(--color-blue-tint)' },
  female: { label: 'Female', color: 'var(--color-accent)', bg: 'var(--color-accent-tint)' },
  both:   { label: 'All',    color: 'var(--color-muted)', bg: 'var(--color-surface-2)' },
} as const

// ── Sub-components ─────────────────────────────────────────────────────────────

function Badge({ text, color, bg }: { text: string; color: string; bg: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '2px 10px', borderRadius: 100,
      fontSize: 11, fontWeight: 600,
      color, background: bg, whiteSpace: 'nowrap',
    }}>
      {text}
    </span>
  )
}

function RangeCell({ label, display, isOptimal }: { label: string; display: string; isOptimal?: boolean }) {
  return (
    <div style={{
      flex: 1, padding: '12px 16px',
      background: isOptimal ? 'var(--color-accent-tint)' : 'var(--color-surface-2)',
      borderRadius: 'var(--radius-md)',
      border: isOptimal ? '1px solid rgba(200,124,255,0.2)' : '1px solid var(--color-border)',
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: isOptimal ? 'var(--color-accent)' : 'var(--color-muted)', marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.3 }}>
        {display}
      </div>
    </div>
  )
}

function CitationItem({ citation }: { citation: Citation }) {
  const url = citation.url || (citation.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${citation.pmid}/` : null)
  return (
    <div style={{
      display: 'flex', gap: 12, alignItems: 'flex-start',
      padding: '10px 0',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <BookOpen size={13} color="var(--color-muted)" style={{ marginTop: 3, flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, color: 'var(--color-text)', lineHeight: 1.5, marginBottom: 2 }}>
          {citation.authors}. <em>{citation.title}</em>.
        </div>
        <div style={{ fontSize: 12, color: 'var(--color-muted)' }}>
          {citation.journal}{citation.year ? `, ${citation.year}` : ''}
          {citation.pmid && <span style={{ marginLeft: 8 }}>PMID: {citation.pmid}</span>}
        </div>
      </div>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--color-accent)', flexShrink: 0, display: 'flex', marginTop: 2 }}
          aria-label="View citation"
        >
          <ExternalLink size={13} />
        </a>
      )}
    </div>
  )
}

function BiomarkerCard({
  biomarker,
  isExpanded,
  onToggle,
}: {
  biomarker: BiomarkerReference
  isExpanded: boolean
  onToggle: () => void
}) {
  const conf = CONFIDENCE_CONFIG[biomarker.aere_optimal.confidence]
  const sex  = SEX_CONFIG[biomarker.sex_specific]

  // Determine which ranges to show — prefer sex-specific if available
  const stdDisplay  = biomarker.standard_lab_range.display
  const optDisplay  = biomarker.aere_optimal.display

  return (
    <div
      className="bm-card"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s ease',
      }}
    >
      {/* ── Card header (always visible) ── */}
      <button
        onClick={onToggle}
        style={{
          width: '100%', textAlign: 'left', background: 'none',
          border: 'none', cursor: 'pointer', padding: '20px 24px',
          display: 'flex', flexDirection: 'column', gap: 14,
        }}
        aria-expanded={isExpanded}
      >
        {/* Row 1: name + badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', flex: 1, minWidth: 0 }}>
            <span style={{
              fontWeight: 600, fontSize: 16, color: 'var(--color-text)',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>
              {biomarker.name}
            </span>
            <Badge text={sex.label} color={sex.color} bg={sex.bg} />
            <span style={{ fontSize: 12, color: 'var(--color-muted)', fontWeight: 500 }}>
              {biomarker.unit}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <Badge text={conf.label} color={conf.color} bg={conf.bg} />
            <div style={{ color: 'var(--color-muted)', display: 'flex', transition: 'transform 0.2s', transform: isExpanded ? 'rotate(180deg)' : 'none' }}>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Row 2: range comparison */}
        <div style={{ display: 'flex', gap: 10 }} className="range-row">
          <RangeCell label="Standard lab range" display={stdDisplay} />
          <RangeCell label="Aere optimal" display={optDisplay} isOptimal />
        </div>
      </button>

      {/* ── Expanded content ── */}
      {isExpanded && (
        <div style={{
          padding: '0 24px 24px',
          borderTop: '1px solid var(--color-border)',
          paddingTop: 24,
        }}>
          {/* Sex-specific ranges if applicable */}
          {(biomarker.male_ranges || biomarker.female_ranges) && (
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 12 }}>
                Sex-specific ranges
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="sex-range-grid">
                {biomarker.male_ranges && (
                  <div style={{ padding: '14px 16px', background: 'var(--color-blue-tint)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(58,95,196,0.15)' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-blue)', marginBottom: 6 }}>Male</div>
                    {biomarker.male_ranges.standard_lab_range && (
                      <div style={{ fontSize: 12, color: 'var(--color-muted)', marginBottom: 4 }}>
                        Lab: <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>{biomarker.male_ranges.standard_lab_range.display}</span>
                      </div>
                    )}
                    {biomarker.male_ranges.aere_optimal && (
                      <div style={{ fontSize: 12, color: 'var(--color-muted)' }}>
                        Optimal: <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{biomarker.male_ranges.aere_optimal.display}</span>
                      </div>
                    )}
                  </div>
                )}
                {biomarker.female_ranges && (
                  <div style={{ padding: '14px 16px', background: 'var(--color-accent-tint)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(200,124,255,0.15)' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 6 }}>Female</div>
                    {biomarker.female_ranges.standard_lab_range && (
                      <div style={{ fontSize: 12, color: 'var(--color-muted)', marginBottom: 4 }}>
                        Lab: <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>{biomarker.female_ranges.standard_lab_range.display}</span>
                      </div>
                    )}
                    {biomarker.female_ranges.aere_optimal && (
                      <div style={{ fontSize: 12, color: 'var(--color-muted)' }}>
                        Optimal: <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{biomarker.female_ranges.aere_optimal.display}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Borderline ranges */}
          {(biomarker.aere_borderline_low || biomarker.aere_borderline_high) && (
            <div style={{ marginBottom: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {biomarker.aere_borderline_low && (
                <div style={{ padding: '8px 16px', background: 'var(--color-amber-tint)', border: '1px solid rgba(196,129,58,0.2)', borderRadius: 'var(--radius-md)', fontSize: 12 }}>
                  <span style={{ color: 'var(--color-amber)', fontWeight: 600 }}>Borderline low: </span>
                  <span style={{ color: 'var(--color-text)' }}>
                    {biomarker.aere_borderline_low.display || `${biomarker.aere_borderline_low.low ?? ''}–${biomarker.aere_borderline_low.high ?? ''} ${biomarker.unit}`}
                  </span>
                </div>
              )}
              {biomarker.aere_borderline_high && (
                <div style={{ padding: '8px 16px', background: 'var(--color-amber-tint)', border: '1px solid rgba(196,129,58,0.2)', borderRadius: 'var(--radius-md)', fontSize: 12 }}>
                  <span style={{ color: 'var(--color-amber)', fontWeight: 600 }}>Borderline high: </span>
                  <span style={{ color: 'var(--color-text)' }}>
                    {biomarker.aere_borderline_high.display || `${biomarker.aere_borderline_high.low ?? ''}–${biomarker.aere_borderline_high.high ?? ''} ${biomarker.unit}`}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Why it matters */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 10 }}>
              Why it matters
            </div>
            <p style={{ fontSize: 14, color: 'var(--color-text)', lineHeight: 1.75, margin: 0 }}>
              {biomarker.why_it_matters}
            </p>
          </div>

          {/* Why range differs */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 10 }}>
              Why our range differs
            </div>
            <p style={{ fontSize: 14, color: 'var(--color-text)', lineHeight: 1.75, margin: 0 }}>
              {biomarker.why_range_differs}
            </p>
          </div>

          {/* Also known as */}
          {biomarker.aliases.length > 0 && (
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 8 }}>
                Also known as
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {biomarker.aliases.map(alias => (
                  <span key={alias} style={{
                    padding: '3px 12px', background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 100, fontSize: 12, color: 'var(--color-muted)',
                  }}>
                    {alias}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Citations */}
          {biomarker.citations.length > 0 && (
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 4 }}>
                Sources ({biomarker.citations.length})
              </div>
              <div>
                {biomarker.citations.map((citation, i) => (
                  <CitationItem key={i} citation={citation} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Main client component ───────────────────────────────────────────────────────

export default function ScienceClient({ biomarkers, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery]   = useState('')
  const [expandedId, setExpandedId]     = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return biomarkers.filter(b => {
      const matchCat = selectedCategory === 'all' || b.category === selectedCategory
      if (!matchCat) return false
      if (!q) return true
      return (
        b.name.toLowerCase().includes(q) ||
        b.aliases.some(a => a.toLowerCase().includes(q)) ||
        b.unit.toLowerCase().includes(q) ||
        b.why_it_matters.toLowerCase().includes(q)
      )
    })
  }, [biomarkers, selectedCategory, searchQuery])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    biomarkers.forEach(b => { counts[b.category] = (counts[b.category] || 0) + 1 })
    return counts
  }, [biomarkers])

  const handleToggle = useCallback((id: string) => {
    setExpandedId(prev => prev === id ? null : id)
  }, [])

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    setExpandedId(null)
  }

  return (
    <section id="reference" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 100px' }}>

      {/* Section header */}
      <div style={{ textAlign: 'center', paddingTop: 88, marginBottom: 52 }}>
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 14,
        }}>
          Biomarker Reference
        </p>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 40,
          color: 'var(--color-text)', margin: '0 0 16px', letterSpacing: '-0.01em',
        }}>
          {biomarkers.length} biomarkers, explained
        </h2>
        <p style={{ fontSize: 16, color: 'var(--color-muted)', maxWidth: 520, margin: '0 auto' }}>
          Search by name or alias. Filter by category. Click any biomarker to read the evidence.
        </p>
      </div>

      {/* Search bar */}
      <div style={{ maxWidth: 560, margin: '0 auto 48px', position: 'relative' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 0,
          background: 'var(--color-surface)', border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)', padding: '0 14px', height: 48,
          boxShadow: 'var(--shadow-card)',
        }}>
          <Search size={15} color="var(--color-muted)" style={{ flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search biomarkers, aliases, descriptions…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              flex: 1, border: 'none', background: 'transparent', outline: 'none',
              padding: '0 12px', fontSize: 14, color: 'var(--color-text)',
              fontFamily: 'var(--font-sans)',
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', color: 'var(--color-muted)' }}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '224px 1fr', gap: 32, alignItems: 'start' }} className="ref-layout">

        {/* ── Sticky sidebar ── */}
        <nav style={{ position: 'sticky', top: 80 }} aria-label="Category filter">
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'var(--color-muted)',
            marginBottom: 10, paddingLeft: 12,
          }}>
            Category
          </div>

          {/* All */}
          <SidebarButton
            label="All biomarkers"
            count={biomarkers.length}
            isActive={selectedCategory === 'all'}
            onClick={() => handleCategoryChange('all')}
          />

          {/* Per-category buttons */}
          {Object.entries(categories).map(([key, label]) => {
            const count = categoryCounts[key] || 0
            if (!count) return null
            return (
              <SidebarButton
                key={key}
                label={label}
                count={count}
                isActive={selectedCategory === key}
                onClick={() => handleCategoryChange(key)}
              />
            )
          })}
        </nav>

        {/* ── Biomarker cards ── */}
        <div>
          {/* Results count */}
          <div style={{ fontSize: 13, color: 'var(--color-muted)', marginBottom: 16, fontWeight: 500 }}>
            {filtered.length} biomarker{filtered.length !== 1 ? 's' : ''}
            {searchQuery && <span style={{ color: 'var(--color-text)' }}> matching &ldquo;{searchQuery}&rdquo;</span>}
            {selectedCategory !== 'all' && (
              <span> in <strong style={{ color: 'var(--color-text)' }}>{categories[selectedCategory]}</strong></span>
            )}
          </div>

          {filtered.length === 0 ? (
            <div style={{
              padding: '60px 24px', textAlign: 'center',
              background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>
                <Search size={32} color="var(--color-border)" />
              </div>
              <div style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: 8 }}>
                No biomarkers found
              </div>
              <div style={{ fontSize: 14, color: 'var(--color-muted)' }}>
                Try a different search term or{' '}
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all') }}
                  style={{ background: 'none', border: 'none', color: 'var(--color-accent)', cursor: 'pointer', fontSize: 14, padding: 0, fontFamily: 'var(--font-sans)' }}
                >
                  clear all filters
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {filtered.map(biomarker => (
                <BiomarkerCard
                  key={biomarker.id}
                  biomarker={biomarker}
                  isExpanded={expandedId === biomarker.id}
                  onToggle={() => handleToggle(biomarker.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .bm-card:hover {
          box-shadow: 0 2px 12px rgba(0,0,0,0.07) !important;
        }
        .sidebar-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 12px;
          border-radius: var(--radius-md);
          border: none;
          background: transparent;
          cursor: pointer;
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--color-muted);
          transition: background 0.15s, color 0.15s;
          text-align: left;
          gap: 8px;
          margin-bottom: 2px;
        }
        .sidebar-btn:hover {
          background: var(--color-surface-2);
          color: var(--color-text);
        }
        .sidebar-btn.active {
          background: var(--color-accent-tint);
          color: var(--color-accent);
          font-weight: 600;
        }
        .sidebar-btn .count {
          font-size: 12px;
          color: inherit;
          opacity: 0.7;
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .ref-layout {
            grid-template-columns: 1fr !important;
          }
          nav[aria-label="Category filter"] {
            position: static !important;
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
          }
          nav[aria-label="Category filter"] > div:first-child {
            display: none;
          }
          .sidebar-btn {
            width: auto !important;
            padding: 6px 14px !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 100px !important;
            font-size: 13px !important;
            margin-bottom: 0 !important;
          }
          .sidebar-btn .count { display: none; }
          .range-row { flex-direction: column !important; }
          .sex-range-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

// ── Sidebar button ─────────────────────────────────────────────────────────────

function SidebarButton({
  label,
  count,
  isActive,
  onClick,
}: {
  label: string
  count: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`sidebar-btn${isActive ? ' active' : ''}`}
      aria-pressed={isActive}
    >
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {label}
      </span>
      <span className="count">{count}</span>
    </button>
  )
}
