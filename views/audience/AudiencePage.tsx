import type { ReactNode } from 'react'
import { FeatureCard, type FeatureCardVariant } from '@/components/blocks/FeatureCard'
import { LinkCard } from '@/components/blocks/LinkCard'
import { PageHero } from '@/components/blocks/PageHero'
import { PillTabs } from '@/components/blocks/PillTabs'
import { Grid, Section } from '@/components/blocks/Section'
import { SectionHeading } from '@/components/blocks/SectionHeading'
import { CtaBand } from '@/components/layout/CtaBand'
import type { Locale, Localized } from '@/lib/i18n'
import { articleHref, href, type PageKey } from '@/lib/routes'

/** Where a link points: a page key, or a blog article (slug per locale). */
export type Target = PageKey | { article: string }

export function resolve(to: Target, locale: Locale): string {
  return typeof to === 'string' ? href(to, locale) : articleHref(locale, to.article)
}

export type AudienceKey = 'forOnlineEntrepreneurs' | 'forFreelancers' | 'forInvestors' | 'forFamilies' | 'forNonEuFounders'

export type Card = { variant?: FeatureCardVariant; tag?: string; heading: string; body: string; link?: { label: string; to: Target } }

type Action = { label: string; to: Target }

export type Hero = {
  variant: 'plain' | 'soft' | 'dark'
  crumb: string
  eyebrow: string
  heading: string
  lead: string
  primary: Action
  secondary: Action
  image?: string
}

const sectionLabel = { en: "Who it's for", de: 'Für wen' } satisfies Localized<string>

/** One feature card with its link resolved for the locale. */
export function AudienceCard({ card, locale }: { card: Card; locale: Locale }) {
  const link = card.link ? { label: card.link.label, href: resolve(card.link.to, locale) } : undefined
  return <FeatureCard variant={card.variant} tag={card.tag} heading={card.heading} body={card.body} link={link} />
}

/** First content block under the pills: eyebrow + heading over a card grid (72px top in the design). */
export function CardSection({ eyebrow, heading, cards, min, gap = 'gap-4', locale }: { eyebrow?: string; heading: string; cards: Card[]; min: number; gap?: string; locale: Locale }) {
  return (
    <Section space="none" className="flex flex-col gap-8 pt-14 md:pt-[72px]">
      <SectionHeading eyebrow={eyebrow} heading={heading} />
      <Grid min={min} gap={gap}>
        {cards.map((c) => (
          <AudienceCard key={c.heading} card={c} locale={locale} />
        ))}
      </Grid>
    </Section>
  )
}

/** Two-up row of cards (or a custom panel plus cards). */
export function PairSection({ children }: { children: ReactNode }) {
  return (
    <Section>
      <Grid min={380} gap="gap-6">
        {children}
      </Grid>
    </Section>
  )
}

export type Guide = { tag: string; heading: string; to: Target }

export function GuideSection({ heading, guides, locale }: { heading: string; guides: Guide[]; locale: Locale }) {
  return (
    <Section className="flex flex-col gap-6">
      <SectionHeading heading={heading} />
      <Grid min={300}>
        {guides.map((g) => (
          <LinkCard key={g.heading} tag={g.tag} heading={g.heading} href={resolve(g.to, locale)} />
        ))}
      </Grid>
    </Section>
  )
}

/** Shared frame of the five audience pages: hero, audience pills, page-specific sections, CTA band. */
export function AudiencePage({ locale, active, hero, children }: { locale: Locale; active: AudienceKey; hero: Hero; children: ReactNode }) {
  return (
    <>
      <PageHero
        locale={locale}
        variant={hero.variant}
        trail={[{ label: sectionLabel[locale], href: href('forOnlineEntrepreneurs', locale) }]}
        current={hero.crumb}
        currentHref={href(active, locale)}
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        lead={hero.lead}
        primary={{ label: hero.primary.label, href: resolve(hero.primary.to, locale) }}
        secondary={{ label: hero.secondary.label, href: resolve(hero.secondary.to, locale) }}
        image={hero.image}
      />
      <Section space="sm">
        <PillTabs set="audience" active={active} locale={locale} />
      </Section>
      {children}
      <CtaBand locale={locale} />
    </>
  )
}
