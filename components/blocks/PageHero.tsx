import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { href } from '@/lib/routes'
import { ui } from '@/lib/ui'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/components/seo/schema'
import { ButtonLink } from './ButtonLink'
import { Placeholder } from './Placeholder'

export type Crumb = { label: string; href: string }
type Action = { label: string; href: string }

const VARIANTS = {
  soft: { box: 'bg-soft rounded-panel p-[clamp(28px,5vw,56px)]', fg: 'text-ink', lead: 'text-body', eyebrow: 'text-brand' },
  dark: { box: 'bg-ink rounded-panel p-[clamp(28px,5vw,56px)]', fg: 'text-white', lead: 'text-on-dark-muted', eyebrow: 'text-mint' },
  plain: { box: 'pt-4', fg: 'text-ink', lead: 'text-body', eyebrow: 'text-brand' },
} as const

/**
 * Page header: breadcrumb trail (+ BreadcrumbList schema), eyebrow, H1, lead, meta line, actions, optional image.
 * `trail` lists the crumbs between Home and the current page.
 */
export function PageHero({
  locale,
  variant = 'soft',
  trail = [],
  current,
  currentHref,
  eyebrow,
  heading,
  lead,
  meta,
  primary,
  secondary,
  image,
  children,
}: {
  locale: Locale
  variant?: keyof typeof VARIANTS
  trail?: Crumb[]
  current: string
  currentHref: string
  eyebrow?: string
  heading: string
  lead?: ReactNode
  meta?: ReactNode
  primary?: Action
  secondary?: Action
  image?: string
  children?: ReactNode
}) {
  const v = VARIANTS[variant]
  const dark = variant === 'dark'
  const home = { label: ui[locale].home, href: href('home', locale) }
  return (
    <section className="mx-auto box-border w-full max-w-[1200px] px-6 pt-6">
      <nav aria-label={ui[locale].breadcrumb} className="mb-4 text-sm text-muted">
        <ol className="m-0 flex list-none flex-wrap gap-1 p-0">
          {[home, ...trail].map((c) => (
            <li key={c.href} className="flex gap-1">
              <Link href={c.href} className="text-muted no-underline hover:text-ink hover:underline">
                {c.label}
              </Link>
              <span aria-hidden="true">/</span>
            </li>
          ))}
          <li aria-current="page" className="font-semibold text-ink">
            {current}
          </li>
        </ol>
      </nav>
      <div
        className={`grid items-center gap-12 ${v.box} ${v.fg}`}
        style={{ gridTemplateColumns: image ? 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))' : 'minmax(0, 1fr)' }}
      >
        <div className="flex flex-col gap-[22px]">
          {eyebrow ? <div className={`eyebrow ${v.eyebrow}`}>{eyebrow}</div> : null}
          <h1 className="h1 m-0 max-w-[900px]">{heading}</h1>
          {lead ? <p className={`m-0 max-w-[760px] text-lg leading-relaxed ${v.lead}`}>{lead}</p> : null}
          {meta ? <div className={`text-sm ${v.lead}`}>{meta}</div> : null}
          {primary || secondary ? (
            <div className="flex flex-wrap gap-3">
              {primary ? (
                <ButtonLink href={primary.href} variant={dark ? 'onDark' : 'primary'}>
                  {primary.label}
                </ButtonLink>
              ) : null}
              {secondary ? (
                <ButtonLink href={secondary.href} variant={dark ? 'onDarkOutline' : 'secondary'}>
                  {secondary.label}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
          {children}
        </div>
        {image ? <Placeholder label={image} dark={dark} className={`aspect-[5/4] rounded-[24px] ${dark ? '' : 'bg-placeholder-strong'}`} /> : null}
      </div>
      <JsonLd data={breadcrumbSchema([home, ...trail, { label: current, href: currentHref }])} />
    </section>
  )
}
