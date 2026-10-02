import Link from 'next/link'
import { FeatureCard } from '@/components/blocks/FeatureCard'
import { KeyValueList } from '@/components/blocks/KeyValueList'
import { PageHero } from '@/components/blocks/PageHero'
import { Grid, Section } from '@/components/blocks/Section'
import { CtaBand } from '@/components/layout/CtaBand'
import { formatEur, type Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import { compare } from '@/lib/tax'
import type { View } from '../types'

/** The illustrative case: €250,000 profit, 400% Hebesatz — numbers come from the same model as the calculator. */
const EXAMPLE_PROFIT = 250_000
const EXAMPLE_HEBESATZ = 400

const copy = {
  en: {
    about: 'About',
    crumb: 'Case studies',
    eyebrow: 'Case studies',
    heading: 'Real moves, real numbers',
    lead: "Anonymised with each client's consent. Every case shows the situation, the structure and the result — including the costs.",
    badge: 'Illustrative example · not a client',
    caseHeading: 'Agency owner, €250,000 profit, moving from Germany',
    caseBody: 'Situation: GmbH in [city], 400% Hebesatz, profit fully distributed. Structure: new Malta Ltd, owner resident in Malta as non-dom, German GmbH [kept / wound down after exit-tax plan].',
    calculator: 'Check these numbers in the calculator',
    germany: 'Tax in Germany (GmbH)',
    malta: 'Tax in Malta (Ltd)',
    running: 'Malta running costs',
    runningValue: '€[PRICE]/yr',
    net: 'Net difference per year',
    netValue: '€[RESULT]',
    approx: '≈ ',
    slotsHeading: 'More case studies',
    slotTag: 'Case study slot',
    slots: [
      ['[E-commerce founder, family of four]', '[Situation · structure · result · quote] — publish after first engagement, with consent.'],
      ['[SaaS founder with holding structure]', '[Situation · structure · result · quote] — publish after first engagement, with consent.'],
      ['[Consultant who decided against Malta]', '[Why we advised no — builds trust like nothing else.]'],
    ],
  },
  de: {
    about: 'Über uns',
    crumb: 'Fallbeispiele',
    eyebrow: 'Fallbeispiele',
    heading: 'Echte Umzüge, echte Zahlen',
    lead: 'Anonymisiert, mit Einwilligung der jeweiligen Mandanten. Jeder Fall zeigt Ausgangslage, Struktur und Ergebnis – einschließlich der Kosten.',
    badge: 'Rechenbeispiel · kein Mandant',
    caseHeading: 'Agenturinhaber, 250.000 € Gewinn, Umzug aus Deutschland',
    caseBody: 'Ausgangslage: GmbH in [Stadt], Hebesatz 400 %, Gewinn voll ausgeschüttet. Struktur: neue Malta Ltd, Inhaber in Malta ansässig mit Non-Dom-Status, deutsche GmbH [behalten / nach Wegzugsteuer-Planung abgewickelt].',
    calculator: 'Diese Zahlen im Rechner prüfen',
    germany: 'Steuer in Deutschland (GmbH)',
    malta: 'Steuer in Malta (Ltd)',
    running: 'Laufende Kosten in Malta',
    runningValue: '[PREIS] €/Jahr',
    net: 'Netto-Unterschied pro Jahr',
    netValue: '[ERGEBNIS] €',
    approx: '≈ ',
    slotsHeading: 'Weitere Fallbeispiele',
    slotTag: 'Platz für Fallbeispiel',
    slots: [
      ['[E-Commerce-Gründer, vierköpfige Familie]', '[Ausgangslage · Struktur · Ergebnis · Zitat] – nach dem ersten Mandat veröffentlichen, mit Einwilligung.'],
      ['[SaaS-Gründer mit Holdingstruktur]', '[Ausgangslage · Struktur · Ergebnis · Zitat] – nach dem ersten Mandat veröffentlichen, mit Einwilligung.'],
      ['[Berater, der sich gegen Malta entschieden hat]', '[Warum wir abgeraten haben – schafft Vertrauen wie nichts anderes.]'],
    ],
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: { title: 'Case studies: real moves to Malta | Tax.Free', description: 'Founder moves to Malta with real numbers: situation, structure and result, costs included. Starting with an illustrative €250,000 agency example.' },
    de: { title: 'Fallbeispiele: Umzüge nach Malta | Tax.Free', description: 'Umzüge von Gründern nach Malta mit echten Zahlen: Ausgangslage, Struktur und Ergebnis inklusive Kosten. Mit einem Rechenbeispiel für 250.000 € Gewinn.' },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    const { germany, malta } = compare(EXAMPLE_PROFIT, EXAMPLE_HEBESATZ)
    const rows = [
      { label: t.germany, value: t.approx + formatEur(Math.round(germany.total / 100) * 100, locale) },
      { label: t.malta, value: formatEur(malta.total, locale) },
      { label: t.running, value: t.runningValue },
      { label: t.net, value: t.netValue, accent: true },
    ]
    return (
      <>
        <PageHero
          locale={locale}
          variant="plain"
          trail={[{ label: t.about, href: href('about', locale) }]}
          current={t.crumb}
          currentHref={href('caseStudies', locale)}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
        />

        <Section space="md">
          <article aria-labelledby="case-example" className="grid gap-8 rounded-[28px] bg-ink p-[clamp(24px,4vw,44px)] text-white" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))' }}>
            <div className="flex flex-col gap-3.5">
              <div className="self-start rounded-full bg-ink-2 px-3 py-1.5 text-[13px] font-bold text-mint">{t.badge}</div>
              <h2 id="case-example" className="m-0 text-[28px] font-extrabold leading-[1.2]">
                {t.caseHeading}
              </h2>
              <p className="m-0 text-base leading-relaxed text-on-dark">{t.caseBody}</p>
              <Link href={href('taxCalculator', locale)} className="font-bold text-mint no-underline hover:underline">
                {t.calculator} <span aria-hidden="true">→</span>
              </Link>
            </div>
            <KeyValueList dark rows={rows} />
          </article>
        </Section>

        <Section space="sm" labelledBy="case-slots">
          <h2 id="case-slots" className="sr-only">
            {t.slotsHeading}
          </h2>
          <Grid min={340}>
            {t.slots.map(([heading, body]) => (
              <FeatureCard key={heading} variant="soft" tag={t.slotTag} heading={heading} body={body} />
            ))}
          </Grid>
        </Section>

        <CtaBand locale={locale} />
      </>
    )
  },
}
