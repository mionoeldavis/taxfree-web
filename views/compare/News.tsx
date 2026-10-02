import { FeatureCard, type FeatureCardVariant } from '@/components/blocks/FeatureCard'
import { PageHero } from '@/components/blocks/PageHero'
import { Section } from '@/components/blocks/Section'
import { CtaBand } from '@/components/layout/CtaBand'
import type { Localized } from '@/lib/i18n'
import { href, type PageKey } from '@/lib/routes'
import type { View } from '../types'

type Update = { variant?: FeatureCardVariant; tag: string; heading: string; body: string; link: string; page: PageKey }

const copy = {
  en: {
    crumb: 'News',
    eyebrow: 'Law updates',
    heading: 'Tax law updates for Malta movers',
    lead: 'What changed, when, and whether it affects you. Newest first.',
    primary: 'Get these by email',
    updates: [
      { tag: 'Jan 2026 · Malta · Residency', heading: 'New Highly Skilled Individuals rules: 15% flat from €65,000', body: 'Applies to qualifying employment income in eligible sectors. Source: EY Malta.', link: 'Compare residence routes', page: 'residency' },
      { tag: 'Jan 2026 · Cyprus · Company', heading: 'Cyprus raises corporate tax to 15% and abolishes deemed dividends', body: 'Changes the Malta-vs-Cyprus comparison for company owners.', link: 'See the comparison', page: 'compareCyprus' },
      { tag: 'Nov 2025 · Portugal · Company', heading: 'Portugal cuts its general corporate rate to 19% for 2026', body: 'Further cuts are planned for later years.', link: 'See the comparison', page: 'comparePortugal' },
      { tag: 'Aug 2025 · Malta · Company', heading: 'Malta introduces FITWI, an optional 15% final tax', body: 'No refunds, five-year lock-in. Mainly relevant for groups under minimum-tax rules. Source: KPMG Malta.', link: 'Read the company guide', page: 'guideCompany' },
      { variant: 'soft', tag: 'Ongoing · Malta · Pillar Two', heading: 'Malta defers the main minimum-tax rules to the end of 2029', body: 'The 5% refund system stays available for most owner-managed businesses.', link: 'Read the company guide', page: 'guideCompany' },
    ] satisfies Update[],
  },
  de: {
    crumb: 'News',
    eyebrow: 'Gesetzesänderungen',
    heading: 'Steuerrechtliche Neuigkeiten für Malta-Auswanderer',
    lead: 'Was sich geändert hat, seit wann und ob es Sie betrifft. Neueste zuerst.',
    primary: 'Per E-Mail erhalten',
    updates: [
      { tag: 'Jan. 2026 · Malta · Aufenthalt', heading: 'Neue Regeln für Highly Skilled Individuals: pauschal 15 % ab 65.000 €', body: 'Gilt für qualifizierte Einkünfte aus nichtselbstständiger Arbeit in begünstigten Branchen. Quelle: EY Malta.', link: 'Aufenthaltswege vergleichen', page: 'residency' },
      { tag: 'Jan. 2026 · Zypern · Firma', heading: 'Zypern erhöht die Körperschaftsteuer auf 15 % und schafft die fiktive Dividende ab', body: 'Verändert den Vergleich Malta oder Zypern für Firmeninhaber.', link: 'Zum Vergleich', page: 'compareCyprus' },
      { tag: 'Nov. 2025 · Portugal · Firma', heading: 'Portugal senkt den allgemeinen Körperschaftsteuersatz für 2026 auf 19 %', body: 'Weitere Senkungen sind für die Folgejahre geplant.', link: 'Zum Vergleich', page: 'comparePortugal' },
      { tag: 'Aug. 2025 · Malta · Firma', heading: 'Malta führt FITWI ein, eine optionale Abgeltungsteuer von 15 %', body: 'Keine Erstattungen, fünfjährige Bindung. Vor allem relevant für Konzerne unter den Mindeststeuerregeln. Quelle: KPMG Malta.', link: 'Zum Firmen-Ratgeber', page: 'guideCompany' },
      { variant: 'soft', tag: 'Laufend · Malta · Pillar Two', heading: 'Malta verschiebt die zentralen Mindeststeuerregeln auf Ende 2029', body: 'Das 5-%-Erstattungssystem bleibt für die meisten inhabergeführten Unternehmen verfügbar.', link: 'Zum Firmen-Ratgeber', page: 'guideCompany' },
    ] satisfies Update[],
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: {
      title: 'Tax law updates for Malta movers (2026) | Tax.Free',
      description: 'What changed in Malta, Cyprus and Portugal tax law, when, and whether it affects you: FITWI, Pillar Two, Cyprus 15% and more. Newest first.',
    },
    de: {
      title: 'Steuer-News für Malta-Auswanderer (2026) | Tax.Free',
      description: 'Was sich im Steuerrecht von Malta, Zypern und Portugal geändert hat, seit wann und ob es Sie betrifft: FITWI, Pillar Two, Zypern 15 % und mehr.',
    },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <>
        <PageHero
          locale={locale}
          variant="plain"
          current={t.crumb}
          currentHref={href('news', locale)}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
          primary={{ label: t.primary, href: href('newsletter', locale) }}
        />
        <Section space="lg">
          <ol className="m-0 flex list-none flex-col gap-4 p-0">
            {t.updates.map((u: Update) => (
              <li key={u.heading}>
                <article className="h-full">
                  <FeatureCard variant={u.variant} headingLevel="h2" tag={u.tag} heading={u.heading} body={u.body} link={{ label: u.link, href: href(u.page, locale) }} />
                </article>
              </li>
            ))}
          </ol>
        </Section>
        <CtaBand locale={locale} />
      </>
    )
  },
}
