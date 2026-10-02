import Link from 'next/link'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'dark' | 'outline' | 'onDark' | 'onDarkOutline'

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-[#094c33]',
  secondary: 'border border-line-strong bg-white text-ink hover:border-brand',
  dark: 'bg-ink text-white hover:bg-ink-2',
  outline: 'border border-ink bg-transparent text-ink hover:bg-soft',
  onDark: 'bg-white text-ink hover:bg-soft',
  onDarkOutline: 'border border-dark-line bg-transparent text-white hover:border-mint',
}

export function ButtonLink({ href, variant = 'primary', className = '', children }: { href: string; variant?: Variant; className?: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-btn px-6 py-4 text-center font-bold no-underline transition-colors ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
