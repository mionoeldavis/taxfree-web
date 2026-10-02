import type { ReactNode } from 'react'

type Space = 'none' | 'sm' | 'md' | 'lg' | 'xl'
const TOP: Record<Space, string> = { none: 'pt-0', sm: 'pt-6 md:pt-8', md: 'pt-10', lg: 'pt-14', xl: 'pt-16 md:pt-[88px]' }

/** Page-width container: max 1200px, 24px gutter, top spacing from the section rhythm. */
export function Section({
  children,
  space = 'xl',
  className = '',
  id,
  labelledBy,
}: {
  children: ReactNode
  space?: Space
  className?: string
  id?: string
  labelledBy?: string
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`mx-auto box-border w-full max-w-[1200px] px-6 ${TOP[space]} ${className}`}>
      {children}
    </section>
  )
}

/** Responsive auto-fit grid used across the designs ("repeat(auto-fit, minmax(min(100%, Npx), 1fr))"). */
export function Grid({ min = 260, gap = 'gap-4', className = '', children }: { min?: number; gap?: string; className?: string; children: ReactNode }) {
  return (
    <div className={`grid ${gap} ${className}`} style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))` }}>
      {children}
    </div>
  )
}
