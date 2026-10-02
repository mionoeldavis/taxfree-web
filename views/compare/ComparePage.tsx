import Link from 'next/link'
import { DataTable } from '@/components/blocks/DataTable'
import { FeatureCard, type FeatureCardVariant } from '@/components/blocks/FeatureCard'
import { PageHero } from '@/components/blocks/PageHero'
import { PillTabs } from '@/components/blocks/PillTabs'
import { Grid, Section } from '@/components/blocks/Section'
import { SectionHeading } from '@/components/blocks/SectionHeading'
import { StatTile, type StatTileVariant } from '@/components/blocks/StatTile'
import { CtaBand } from '@/components/layout/CtaBand'
import type { Locale, Localized } from '@/lib/i18n'
import { href, type PageKey } from '@/lib/routes'

/** A piece of the sources line: plain text, an external source, or an internal page. */
export type SourcePart = string | { label: string; url: string } | { label: string; page: PageKey }

export type CompareCopy = {
  crumb: string
  heading: string
  lead: string
  stats?: { variant?: StatTileVariant; value: string; label: string; note: string }[]
  tableHeading?: string
  head: [string, string, string]
  rows: [string, string, string][]
  sources: SourcePart[]
  cardsMin: number
  cards: { variant?: FeatureCardVariant; heading: string; body: string; link?: { label: string; page: PageKey } }[]
}

const shared = {
  en: { crumbSection: 'Compare', eyebrow: 'Comparison · 2026', meta: 'Reviewed by [advisor] · Updated October 2026' },
  de: { crumbSection: 'Vergleich', eyebrow: 'Vergleich · 2026', meta: 'Geprüft von [Berater] · Aktualisiert im Oktober 2026' },
} satisfies Localized<unknown>

function Sources({ parts, locale }: { parts: SourcePart[]; locale: Locale }) {
  return (
    <p className="m-0 text-[13px] text-muted">
      {parts.map((p, i) => {
        if (typeof p === 'string') return <span key={i}>{p}</span>
        if ('url' in p) {
          return (
            <a key={i} href={p.url} rel="noopener" className="underline hover:text-ink">
              {p.label}
            </a>
          )
        }
        return (
          <Link key={i} href={href(p.page, locale)} className="underline hover:text-ink">
            {p.label}
          </Link>
        )
      })}
    </p>
  )
}

/** Shared layout of the "Malta vs X" pages: hero, sibling pills, optional stat tiles, comparison table, sources, verdict cards, CTA. */
export function ComparePage({ locale, pageKey, t }: { locale: Locale; pageKey: PageKey; t: CompareCopy }) {
  const s = shared[locale]
  return (
    <>
      <PageHero
        locale={locale}
        variant="plain"
        trail={[{ label: s.crumbSection, href: href('compareCyprus', locale) }]}
        current={t.crumb}
        currentHref={href(pageKey, locale)}
        eyebrow={s.eyebrow}
        heading={t.heading}
        lead={t.lead}
        meta={s.meta}
      />
      <Section space="sm">
        <PillTabs set="compare" active={pageKey} locale={locale} />
      </Section>

      {t.stats ? (
        <Section space="sm">
          <Grid min={340}>
            {t.stats.map((st) => (
              <StatTile key={st.label} variant={st.variant} value={st.value} label={st.label} note={st.note} />
            ))}
          </Grid>
        </Section>
      ) : null}

      <Section space={t.stats ? 'lg' : 'md'} className={`flex flex-col ${t.tableHeading ? 'gap-5' : 'gap-4'}`}>
        {t.tableHeading ? <SectionHeading heading={t.tableHeading} /> : null}
        <DataTable caption={t.crumb} head={t.head} rows={t.rows} />
        <Sources parts={t.sources} locale={locale} />
      </Section>

      <Section space="lg">
        <Grid min={t.cardsMin}>
          {t.cards.map((c) => (
            <FeatureCard
              key={c.heading}
              variant={c.variant ?? 'outline'}
              headingLevel="h2"
              heading={c.heading}
              body={c.body}
              link={c.link ? { label: c.link.label, href: href(c.link.page, locale) } : undefined}
            />
          ))}
        </Grid>
      </Section>

      <CtaBand locale={locale} />
    </>
  )
}
