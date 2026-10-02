import type { ReactNode } from 'react'

export function CheckIcon({ className = 'text-brand', size = 22 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function CrossIcon({ className = 'text-warn', size = 22 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

/** Ticked (or crossed) bullet list. */
export function CheckList({ items, kind = 'check', className = '' }: { items: ReactNode[]; kind?: 'check' | 'cross'; className?: string }) {
  return (
    <ul className={`m-0 flex list-none flex-col gap-3 p-0 text-base leading-normal ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          {kind === 'check' ? <CheckIcon /> : <CrossIcon />}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
