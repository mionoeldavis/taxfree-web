import Link from 'next/link'
import { DataTable } from '@/components/blocks/DataTable'
import { FeatureCard } from '@/components/blocks/FeatureCard'
import { KeyValueList, type KeyValue } from '@/components/blocks/KeyValueList'
import { LinkCard } from '@/components/blocks/LinkCard'
import { PageHero } from '@/components/blocks/PageHero'
import { Grid, Section } from '@/components/blocks/Section'
import { ShortAnswer } from '@/components/blocks/ShortAnswer'
import { StepList } from '@/components/blocks/StepItem'
import { CtaBand } from '@/components/layout/CtaBand'
import { JsonLd } from '@/components/seo/JsonLd'
import { absolute, personOrNothing } from '@/components/seo/schema'
import type { Locale, Localized } from '@/lib/i18n'
import { articleHref, href, type PageKey } from '@/lib/routes'
import { siteName, siteUrl } from '@/lib/site'

/** Content blocks a pillar guide is built from (the design's paragraph / TableRow / KeyValueRow / StepItem / FeatureCard stacks). */
export type GuideBlock =
  | { kind: 'p'; text: string; link?: { label: string; to: PageKey; after?: string } }
  | { kind: 'table'; head: string[]; rows: string[][]; highlight?: number[] }
  | { kind: 'kv'; rows: KeyValue[] }
  | { kind: 'steps'; steps: { heading: string; body?: string }[] }
  | { kind: 'cards'; cards: { heading: string; body: string }[] }

export type GuideSection = { id: string; toc: string; heading: string; blocks: GuideBlock[] }

export type GuideRelated = { tag: string; heading: string } & ({ to: PageKey } | { article: string })

/** A source is either plain text (e.g. a statute) or a labelled external link. */
export type GuideSource = string | { label: string; url: string }

export type GuideCopy = {
  variant?: 'soft' | 'dark'
  crumb: string
  eyebrow: string
  heading: string
  lead: string
  author: string
  reviewer: string
  /** ISO year-month of the last review, e.g. "2026-10". */
  updated: string
  primary: { label: string; to: PageKey }
  shortAnswer: { label?: string; variant?: 'dark' | 'warn' | 'soft'; body: string }
  sections: GuideSection[]
  related?: GuideRelated[]
  sourcesLabel?: string
  sources: GuideSource[]
  cta?: { heading: string; lead: string }
}

const T = {
  en: { guides: 'Guides', onThisPage: 'On this page', by: 'By', reviewed: 'Reviewed by', updated: 'Updated', shortAnswer: 'The short answer', sources: 'Sources', notAdvice: 'General information, not individual advice.' },
  de: { guides: 'Ratgeber', onThisPage: 'Auf dieser Seite', by: 'Von', reviewed: 'Geprüft von', updated: 'Aktualisiert im', shortAnswer: 'Die kurze Antwort', sources: 'Quellen', notAdvice: 'Allgemeine Information, keine individuelle Beratung.' },
} satisfies Localized<Record<string, string>>

function formatMonth(isoMonth: string, locale: Locale) {
  return new Date(`${isoMonth}-01T12:00:00Z`).toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

function Block({ block, locale }: { block: GuideBlock; locale: Locale }) {
  switch (block.kind) {
    case 'p':
      return (
        <p className="m-0">
          {block.text}
          {block.link ? (
            <>
              {' '}
              <Link href={href(block.link.to, locale)} className="font-bold text-brand underline underline-offset-[3px]">
                {block.link.label}
              </Link>
              {block.link.after ?? ''}
            </>
          ) : null}
        </p>
      )
    case 'table':
      return <DataTable head={block.head} rows={block.rows} highlight={block.highlight} />
    case 'kv':
      return (
        <div className="rounded-[18px] border border-line px-[22px] pb-3 pt-2 [&_dl>div:first-child]:border-t-0">
          <KeyValueList rows={block.rows} />
        </div>
      )
    case 'steps':
      return <StepList steps={block.steps} />
    case 'cards':
      return (
        <Grid min={220} gap="gap-3">
          {block.cards.map((c) => (
            <FeatureCard key={c.heading} variant="soft" heading={c.heading} body={c.body} />
          ))}
        </Grid>
      )
  }
}

/** Shared layout of the four pillar guides: hero with author/reviewer/updated line, table of contents, sections, related links, sources and disclaimer. */
export function GuidePage({ locale, page, t }: { locale: Locale; page: PageKey; t: GuideCopy }) {
  const s = T[locale]
  const url = href(page, locale)
  return (
    <>
      <PageHero
        locale={locale}
        variant={t.variant ?? 'soft'}
        trail={[{ label: s.guides, href: href('blog', locale) }]}
        current={t.crumb}
        currentHref={url}
        eyebrow={t.eyebrow}
        heading={t.heading}
        lead={t.lead}
        meta={
          <>
            {s.by} {t.author} · {s.reviewed} {t.reviewer} · {s.updated} <time dateTime={t.updated}>{formatMonth(t.updated, locale)}</time>
          </>
        }
        primary={{ label: t.primary.label, href: href(t.primary.to, locale) }}
      />

      <Section space="lg" className="grid grid-cols-[minmax(0,1fr)] items-start gap-12 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)]">
        <nav aria-label={s.onThisPage} className="flex max-w-[280px] flex-col gap-1 border-l-2 border-line pl-4 text-[15px] md:sticky md:top-6">
          <p className="m-0 mb-2 text-[13px] font-extrabold uppercase tracking-[0.06em] text-muted">{s.onThisPage}</p>
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {t.sections.map((sec) => (
              <li key={sec.id}>
                <a href={`#${sec.id}`} className="block py-1.5 text-ink no-underline hover:text-brand hover:underline">
                  {sec.toc}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="flex min-w-0 max-w-[760px] flex-col gap-[22px] text-[17px] leading-[1.75] text-body-strong">
          <ShortAnswer variant={t.shortAnswer.variant} label={t.shortAnswer.label ?? s.shortAnswer}>
            {t.shortAnswer.body}
          </ShortAnswer>

          {t.sections.map((sec) => (
            <section key={sec.id} aria-labelledby={sec.id} className="flex flex-col gap-[22px]">
              <h2 id={sec.id} className="m-0 mt-4 scroll-mt-6 text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-ink">
                {sec.heading}
              </h2>
              {sec.blocks.map((b, i) => (
                <Block key={i} block={b} locale={locale} />
              ))}
            </section>
          ))}

          {t.related?.length ? (
            <Grid min={220} gap="gap-3">
              {t.related.map((r) => (
                <LinkCard key={r.heading} tag={r.tag} heading={r.heading} href={'article' in r ? articleHref(locale, r.article) : href(r.to, locale)} />
              ))}
            </Grid>
          ) : null}

          <footer className="border-t border-rule pt-4 text-[13px] leading-relaxed text-muted">
            {t.sourcesLabel ?? s.sources}:{' '}
            {t.sources.map((src, i) => (
              <span key={typeof src === 'string' ? src : src.url}>
                {i ? '; ' : ''}
                {typeof src === 'string' ? (
                  src
                ) : (
                  <a href={src.url} rel="noopener" className="text-muted underline">
                    {src.label}
                  </a>
                )}
              </span>
            ))}
            . {s.notAdvice}
          </footer>
        </article>
      </Section>

      <CtaBand locale={locale} heading={t.cta?.heading} lead={t.cta?.lead} />
      <JsonLd
        data={{
          '@type': 'Article',
          headline: t.heading,
          description: t.lead,
          inLanguage: locale,
          dateModified: t.updated,
          mainEntityOfPage: absolute(url),
          author: personOrNothing(t.author),
          reviewedBy: personOrNothing(t.reviewer),
          publisher: { '@id': `${siteUrl}/#organization`, name: siteName },
        }}
      />
    </>
  )
}
