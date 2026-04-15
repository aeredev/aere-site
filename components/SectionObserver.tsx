'use client'

import { ReactNode } from 'react'

// Animation removed — sections are visible by default
// SectionObserver kept as a passthrough wrapper to avoid refactoring all usages
export default function SectionObserver({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
