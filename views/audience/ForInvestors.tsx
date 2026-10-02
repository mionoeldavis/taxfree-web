import { Grid, Section } from '@/components/blocks/Section'
import { SectionHeading } from '@/components/blocks/SectionHeading'
import { StatTile } from '@/components/blocks/StatTile'
import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { AudienceCard, AudiencePage, type Card, type Hero } from './AudiencePage'

type Copy = {
  hero: Hero
  stats: { value: string; label: string }[]
  planEyebrow: string
  planHeading: string
  questions: Card[]
  crypto: Card
}

const copy = {
  en: {
    hero: {
      variant: 'dark',
      crumb: 'Investors & crypto',
      eyebrow: 'For investors',
      heading: 'Malta for investors: non-dom status, done cleanly',
      lead: 'As a non-dom resident, foreign capital gains are exempt and foreign income is taxed only when you bring it to Malta. The hard part is leaving Germany without an exit-tax bill.',
      primary: { label: 'Plan my exit', to: 'consultation' },
      secondary: { label: 'Read about Wegzugsteuer', to: 'guideLeavingGermany' },
    },
    stats: [
      { value: 'Exempt', label: 'Foreign capital gains (non-dom)' },
      { value: 'Not taxed', label: 'Foreign income kept abroad' },
      { value: '€5,000', label: 'Minimum tax from €35k foreign income' },
    ],
    planEyebrow: 'What we plan with you',
    planHeading: 'Three questions every investor must answer',
    questions: [
      { tag: '1', heading: 'Do you hold 1%+ of a company?', body: 'Then German exit tax on unrealised gains may apply when you leave. Plan it before you deregister.' },
      { tag: '2', heading: 'Where will your income arise?', body: 'Malta-source income is taxed normally. Only foreign income benefits from the remittance basis.' },
      { tag: '3', heading: 'Do you need a holding?', body: 'A Malta holding can receive qualifying dividends and gains tax-exempt under the participation exemption.' },
    ],
    crypto: {
      variant: 'soft',
      heading: 'Crypto holdings',
      body: 'Tax treatment depends on whether you invest or trade, and where gains arise. We assess your portfolio and history case by case — no blanket promises.',
      link: { label: 'Read: crypto taxes in Malta', to: 'blog' },
    },
  },
  de: {
    hero: {
      variant: 'dark',
      crumb: 'Investoren & Krypto',
      eyebrow: 'Für Investoren',
      heading: 'Malta für Investoren: Non-Dom-Status, sauber umgesetzt',
      lead: 'Als Non-Dom-Ansässiger sind ausländische Veräußerungsgewinne steuerfrei, und ausländische Einkünfte werden nur besteuert, wenn Sie sie nach Malta überweisen. Die eigentliche Hürde ist der Wegzug aus Deutschland ohne Wegzugsteuer.',
      primary: { label: 'Meinen Wegzug planen', to: 'consultation' },
      secondary: { label: 'Mehr zur Wegzugsteuer', to: 'guideLeavingGermany' },
    },
    stats: [
      { value: 'Steuerfrei', label: 'Ausländische Veräußerungsgewinne (Non-Dom)' },
      { value: 'Nicht besteuert', label: 'Im Ausland belassene ausländische Einkünfte' },
      { value: '5.000 €', label: 'Mindeststeuer ab 35.000 € ausländischen Einkünften' },
    ],
    planEyebrow: 'Was wir mit Ihnen planen',
    planHeading: 'Drei Fragen, die jeder Investor beantworten muss',
    questions: [
      { tag: '1', heading: 'Halten Sie 1 % oder mehr an einer Kapitalgesellschaft?', body: 'Dann kann beim Wegzug deutsche Wegzugsteuer auf nicht realisierte Gewinne anfallen. Planen Sie das vor der Abmeldung.' },
      { tag: '2', heading: 'Wo entstehen Ihre Einkünfte?', body: 'Einkünfte aus maltesischen Quellen werden normal besteuert. Nur ausländische Einkünfte profitieren von der Überweisungsbesteuerung (Remittance Basis).' },
      { tag: '3', heading: 'Brauchen Sie eine Holding?', body: 'Eine maltesische Holding kann qualifizierte Dividenden und Veräußerungsgewinne dank Beteiligungsbefreiung (Participation Exemption) steuerfrei vereinnahmen.' },
    ],
    crypto: {
      variant: 'soft',
      heading: 'Krypto-Bestände',
      body: 'Die steuerliche Behandlung hängt davon ab, ob Sie investieren oder handeln und wo die Gewinne entstehen. Wir prüfen Ihr Portfolio und Ihre Historie im Einzelfall – ohne pauschale Versprechen.',
      link: { label: 'Lesen: Krypto-Steuern in Malta', to: 'blog' },
    },
  },
} satisfies Localized<Copy>

export const view: View = {
  meta: {
    en: {
      title: 'Malta for investors: non-dom status | Tax.Free',
      description: 'Non-dom residents in Malta pay no tax on foreign capital gains and on foreign income kept abroad. Plan your German exit tax before you move.',
    },
    de: {
      title: 'Malta für Investoren: Non-Dom-Status | Tax.Free',
      description: 'Non-Dom-Ansässige in Malta zahlen keine Steuer auf ausländische Veräußerungsgewinne und im Ausland belassene Einkünfte. Wegzugsteuer vorher planen.',
    },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <AudiencePage locale={locale} active="forInvestors" hero={t.hero}>
        <Section space="md">
          <Grid min={300}>
            {t.stats.map((s) => (
              <StatTile key={s.label} variant="soft" value={s.value} label={s.label} />
            ))}
          </Grid>
        </Section>
        <Section className="flex flex-col gap-8">
          <SectionHeading eyebrow={t.planEyebrow} heading={t.planHeading} />
          <Grid min={320}>
            {t.questions.map((c) => (
              <AudienceCard key={c.heading} card={c} locale={locale} />
            ))}
          </Grid>
          <AudienceCard card={t.crypto} locale={locale} />
        </Section>
      </AudiencePage>
    )
  },
}
