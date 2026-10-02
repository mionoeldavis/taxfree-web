import { FeatureCard } from '@/components/blocks/FeatureCard'
import { LinkCard } from '@/components/blocks/LinkCard'
import { PageHero } from '@/components/blocks/PageHero'
import { Grid, Section } from '@/components/blocks/Section'
import { TopicFilter } from '@/components/islands/TopicFilter'
import { CtaBand } from '@/components/layout/CtaBand'
import { listArticles } from '@/lib/content'
import type { Localized } from '@/lib/i18n'
import { articleHref, href, type PageKey } from '@/lib/routes'
import { ui } from '@/lib/ui'
import type { View } from '../types'

type Pillar = { heading: string; body: string; to: PageKey; dark?: boolean }

const copy = {
  en: {
    crumb: 'Guides',
    eyebrow: 'Guides',
    heading: 'Everything about moving to Malta, sourced and reviewed',
    lead: 'Every article names its author and reviewer, shows its sources and the date it was last checked.',
    pillarTag: 'Pillar guide',
    read: 'Read',
    pillars: [
      { heading: 'Moving to Malta', body: 'Residence, housing, 90-day checklist', to: 'guideMoving' },
      { heading: 'Malta taxes for individuals', body: 'Non-dom, remittance, programmes', to: 'guideTaxes' },
      { heading: 'Malta company & the 5%', body: 'Refunds, substance, Pillar Two', to: 'guideCompany' },
      { heading: 'Leaving Germany', body: 'Exit tax, CFC, extended liability', to: 'guideLeavingGermany', dark: true },
    ] satisfies Pillar[],
    allHeading: 'All articles',
    all: 'All',
    filterLabel: 'Filter by topic',
    count: 'Showing {n} articles',
    countOne: 'Showing {n} article',
    min: 'min',
  },
  de: {
    crumb: 'Ratgeber',
    eyebrow: 'Ratgeber',
    heading: 'Alles zum Auswandern nach Malta, mit Quellen und geprüft',
    lead: 'Jeder Artikel nennt Autor und Prüfer, zeigt seine Quellen und das Datum der letzten Prüfung.',
    pillarTag: 'Ratgeber',
    read: 'Lesen',
    pillars: [
      { heading: 'Auswandern nach Malta', body: 'Aufenthalt, Wohnung, 90-Tage-Checkliste', to: 'guideMoving' },
      { heading: 'Steuern in Malta für Privatpersonen', body: 'Non-Dom, Remittance-Basis, Programme', to: 'guideTaxes' },
      { heading: 'Malta-Firma & die 5 %', body: 'Erstattung, Substanz, Pillar Two', to: 'guideCompany' },
      { heading: 'Wegzug aus Deutschland', body: 'Wegzugsteuer, Hinzurechnungsbesteuerung, erweiterte Steuerpflicht', to: 'guideLeavingGermany', dark: true },
    ] satisfies Pillar[],
    allHeading: 'Alle Artikel',
    all: 'Alle',
    filterLabel: 'Nach Thema filtern',
    count: '{n} Artikel',
    countOne: '{n} Artikel',
    min: 'Min.',
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: { title: 'Malta guides for founders | Tax.Free', description: 'Guides on moving to Malta, Malta taxes, the 5% company rate and leaving Germany. Every article names its author and reviewer and shows its sources.' },
    de: { title: 'Ratgeber: Auswandern nach Malta | Tax.Free', description: 'Ratgeber zum Auswandern nach Malta, zu Steuern, zur 5-%-Firma und zum Wegzug aus Deutschland. Jeder Artikel nennt Autor, Prüfer und seine Quellen.' },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    const articles = listArticles(locale)
    const topics = [...new Set(articles.map((a) => a.topic))]
    return (
      <>
        <PageHero locale={locale} variant="plain" current={t.crumb} currentHref={href('blog', locale)} eyebrow={t.eyebrow} heading={t.heading} lead={t.lead} />

        <Section space="md">
          <Grid min={260}>
            {t.pillars.map((p: Pillar) => (
              <FeatureCard key={p.to} variant={p.dark ? 'dark' : 'soft'} tag={t.pillarTag} heading={p.heading} body={p.body} link={{ label: t.read, href: href(p.to, locale) }} />
            ))}
          </Grid>
        </Section>

        <Section space="none" className="flex flex-col gap-6 pt-16" labelledBy="all-articles">
          <h2 id="all-articles" className="m-0 text-[30px] font-extrabold tracking-[-0.02em]">
            {t.allHeading}
          </h2>
          <TopicFilter
            topics={topics}
            allLabel={t.all}
            groupLabel={t.filterLabel}
            countLabel={t.count}
            countLabelOne={t.countOne}
            items={articles.map((a) => ({
              id: a.slug,
              topic: a.topic,
              node: <LinkCard image={ui[locale].imagePlaceholder} tag={`${a.topic} · ${a.minutes} ${t.min}`} heading={a.title} href={articleHref(locale, a.slug)} />,
            }))}
          />
        </Section>

        <CtaBand locale={locale} />
      </>
    )
  },
}
