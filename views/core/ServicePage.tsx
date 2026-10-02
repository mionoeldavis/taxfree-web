import Link from 'next/link'
import { DataTable } from '@/components/blocks/DataTable'
import { FaqList, type Faq } from '@/components/blocks/FaqItem'
import { FeatureCard, type FeatureCardVariant } from '@/components/blocks/FeatureCard'
import { KeyValueList, type KeyValue } from '@/components/blocks/KeyValueList'
import { LinkCard } from '@/components/blocks/LinkCard'
import { PageHero } from '@/components/blocks/PageHero'
import { Grid, Section } from '@/components/blocks/Section'
import { SectionHeading } from '@/components/blocks/SectionHeading'
import { StatTile, type StatTileVariant } from '@/components/blocks/StatTile'
import { StepItem } from '@/components/blocks/StepItem'
import { CtaBand } from '@/components/layout/CtaBand'
import type { Locale, Localized } from '@/lib/i18n'
import { articleHref, href, type PageKey } from '@/lib/routes'

/** Where a link goes: a page key or a blog article slug. */
export type Target = PageKey | { article: string }
export type Action = { label: string; to: Target }
export type Card = { variant?: FeatureCardVariant; tag?: string; heading: string; body: string; link?: Action }
type Space = 'sm' | 'md' | 'lg' | 'xl'

/** The building blocks the four service designs are made of, in page order. */
export type ServiceBlock =
  | {
      kind: 'glance'
      facts: { heading: string; rows: KeyValue[] }
      example: { heading: string; rows: KeyValue[]; link: Action }
    }
  | { kind: 'stats'; tiles: { value: string; label: string; variant?: StatTileVariant }[] }
  | { kind: 'cards'; eyebrow?: string; heading?: string; min: number; cards: Card[] }
  | {
      kind: 'process'
      eyebrow: string
      heading: string
      lead?: string
      aside?: Card
      steps: { n?: string; heading: string; body: string }[]
    }
  | { kind: 'table'; eyebrow: string; heading: string; head: string[]; rows: string[][]; note: string }
  | { kind: 'faq'; heading: string; items: Faq[] }
  | { kind: 'links'; heading: string; links: { tag: string; heading: string; to: Target }[] }

export type ServiceCopy = {
  hero: {
    variant: 'soft' | 'dark' | 'plain'
    current: string
    eyebrow: string
    heading: string
    lead: string
    primary: Action
    secondary: Action
    image?: string
  }
  blocks: ServiceBlock[]
}

const servicesLabel: Localized<string> = { en: 'Services', de: 'Leistungen' }

function resolve(to: Target, locale: Locale): string {
  return typeof to === 'string' ? href(to, locale) : articleHref(locale, to.article)
}

function CardGrid({ cards, min, locale }: { cards: Card[]; min: number; locale: Locale }) {
  return (
    <Grid min={min}>
      {cards.map((c) => (
        <FeatureCard key={c.heading} variant={c.variant} tag={c.tag} heading={c.heading} body={c.body} link={c.link ? { label: c.link.label, href: resolve(c.link.to, locale) } : undefined} />
      ))}
    </Grid>
  )
}

function Block({ block, locale }: { block: ServiceBlock; locale: Locale }) {
  switch (block.kind) {
    case 'glance':
      return (
        <Section space="lg">
          <Grid min={420} gap="gap-6">
            <div className="flex flex-col rounded-[24px] border border-line px-7 pb-3.5 pt-7">
              <h2 className="m-0 pb-3 text-lg font-extrabold">{block.facts.heading}</h2>
              <KeyValueList rows={block.facts.rows} />
            </div>
            <div className="flex flex-col rounded-[24px] bg-ink px-7 pb-5 pt-7 text-white">
              <h2 className="m-0 pb-3 text-sm font-extrabold uppercase tracking-[0.08em] text-mint">{block.example.heading}</h2>
              <KeyValueList rows={block.example.rows} dark />
              <Link href={resolve(block.example.link.to, locale)} className="mt-3 font-bold text-mint no-underline hover:underline">
                {block.example.link.label} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Grid>
        </Section>
      )
    case 'stats':
      return (
        <Section space="sm">
          <Grid min={240}>
            {block.tiles.map((s) => (
              <StatTile key={s.label} variant={s.variant} value={s.value} label={s.label} />
            ))}
          </Grid>
        </Section>
      )
    case 'cards':
      return (
        <Section className="flex flex-col gap-8">
          {block.heading ? <SectionHeading eyebrow={block.eyebrow} heading={block.heading} /> : null}
          <CardGrid cards={block.cards} min={block.min} locale={locale} />
        </Section>
      )
    case 'process':
      return (
        <Section>
          <div className="grid items-start gap-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))' }}>
            <div className="flex flex-col gap-6">
              <SectionHeading eyebrow={block.eyebrow} heading={block.heading} lead={block.lead} />
              {block.aside ? <FeatureCard variant={block.aside.variant} tag={block.aside.tag} heading={block.aside.heading} body={block.aside.body} /> : null}
            </div>
            <ol className="m-0 flex list-none flex-col p-0">
              {block.steps.map((s, i) => (
                <StepItem key={s.heading} n={s.n ?? i + 1} heading={s.heading} body={s.body} />
              ))}
            </ol>
          </div>
        </Section>
      )
    case 'table':
      return (
        <Section className="flex flex-col gap-6">
          <SectionHeading eyebrow={block.eyebrow} heading={block.heading} />
          <DataTable head={block.head} rows={block.rows} caption={block.heading} />
          <p className="m-0 text-[13px] text-muted">{block.note}</p>
        </Section>
      )
    case 'faq':
      return (
        <Section className="flex flex-col gap-6">
          <SectionHeading heading={block.heading} />
          <FaqList items={block.items} columns />
        </Section>
      )
    case 'links':
      return (
        <Section className="flex flex-col gap-6">
          <SectionHeading heading={block.heading} />
          <Grid min={300}>
            {block.links.map((l) => (
              <LinkCard key={l.heading} tag={l.tag} heading={l.heading} href={resolve(l.to, locale)} />
            ))}
          </Grid>
        </Section>
      )
  }
}

/** Shared layout of the service pages: hero, the page's blocks, then the CTA band. */
export function ServicePage({ locale, pageKey, copy }: { locale: Locale; pageKey: PageKey; copy: ServiceCopy }) {
  const { hero } = copy
  return (
    <>
      <PageHero
        locale={locale}
        variant={hero.variant}
        trail={[{ label: servicesLabel[locale], href: href('companyFormation', locale) }]}
        current={hero.current}
        currentHref={href(pageKey, locale)}
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        lead={hero.lead}
        primary={{ label: hero.primary.label, href: resolve(hero.primary.to, locale) }}
        secondary={{ label: hero.secondary.label, href: resolve(hero.secondary.to, locale) }}
        image={hero.image}
      />
      {copy.blocks.map((block, i) => (
        <Block key={`${block.kind}-${i}`} block={block} locale={locale} />
      ))}
      <CtaBand locale={locale} />
    </>
  )
}
