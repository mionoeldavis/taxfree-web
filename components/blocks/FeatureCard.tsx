import Link from 'next/link'
import type { ReactNode } from 'react'

export type FeatureCardVariant = 'outline' | 'soft' | 'dark' | 'accent' | 'warn'

const STYLES: Record<FeatureCardVariant, { box: string; fg: string; muted: string; tag: string }> = {
  outline: { box: 'bg-white border border-line', fg: 'text-ink', muted: 'text-muted', tag: 'text-brand' },
  soft: { box: 'bg-soft border border-soft', fg: 'text-ink', muted: 'text-body', tag: 'text-brand' },
  dark: { box: 'bg-ink border border-ink', fg: 'text-white', muted: 'text-on-dark', tag: 'text-mint' },
  accent: { box: 'bg-tint border-2 border-brand', fg: 'text-ink', muted: 'text-body', tag: 'text-brand' },
  warn: { box: 'bg-warn-bg border border-warn-line', fg: 'text-ink', muted: 'text-body', tag: 'text-brand' },
}

export function FeatureCard({
  variant = 'outline',
  tag,
  heading,
  body,
  link,
  headingLevel: H = 'h3',
}: {
  variant?: FeatureCardVariant
  tag?: string
  heading: string
  body?: ReactNode
  link?: { label: string; href: string }
  headingLevel?: 'h2' | 'h3' | 'h4'
}) {
  const s = STYLES[variant]
  return (
    <div className={`box-border flex h-full flex-col gap-2.5 rounded-card p-[26px] ${s.box} ${s.fg}`}>
      {tag ? <div className={`text-[13px] font-extrabold uppercase tracking-[0.06em] ${s.tag}`}>{tag}</div> : null}
      <H className="m-0 text-[19px] font-extrabold leading-snug">{heading}</H>
      {body ? <div className={`text-[15px] leading-relaxed ${s.muted}`}>{body}</div> : null}
      {link ? (
        <Link href={link.href} className={`mt-auto pt-1 text-[15px] font-bold no-underline hover:underline ${s.tag}`}>
          {link.label} <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  )
}
