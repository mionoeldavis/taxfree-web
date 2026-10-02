import { Grid, Section } from '@/components/blocks/Section'
import { StatTile } from '@/components/blocks/StatTile'
import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { AudiencePage, CardSection, type Card, type Hero } from './AudiencePage'

type Copy = {
  hero: Hero
  routesEyebrow: string
  routesHeading: string
  routes: Card[]
  stats: { value: string; label: string }[]
}

const copy = {
  en: {
    hero: {
      variant: 'soft',
      crumb: 'Non-EU founders',
      eyebrow: 'For non-EU founders',
      heading: 'An EU base for founders from outside the EU',
      lead: 'English-speaking, in the euro and in Schengen. We find the permit that fits how you earn — and set up the company and tax status around it.',
      primary: { label: 'Compare residence routes', to: 'residency' },
      secondary: { label: 'Talk to an advisor', to: 'consultation' },
    },
    routesEyebrow: 'Which route fits?',
    routesHeading: 'It depends on how you earn',
    routes: [
      { tag: 'Remote employee', heading: 'Nomad Residence Permit', body: 'Year 1 tax-exempt, then 10%. Up to four years.' },
      { tag: 'Living on foreign income', heading: 'Global Residence Programme', body: '15% on foreign income remitted, €15,000 minimum.' },
      { tag: 'Senior hire in Malta', heading: 'Highly Skilled Individuals', body: '15% flat on €65,000+ salary in eligible sectors.' },
      { tag: 'Long-term base', heading: 'Permanent Residence Programme', body: 'Permanent residence with Schengen travel; capital requirements apply.' },
    ],
    stats: [
      { value: 'EU', label: 'Single-market access' },
      { value: 'Schengen', label: 'Travel with residence' },
      { value: 'English', label: 'Official language' },
      { value: '70+', label: 'Double tax treaties' },
    ],
  },
  de: {
    hero: {
      variant: 'soft',
      crumb: 'Nicht-EU-Gründer',
      eyebrow: 'Für Gründer außerhalb der EU',
      heading: 'Eine EU-Basis für Gründer von außerhalb der EU',
      lead: 'Englischsprachig, im Euro und im Schengen-Raum. Wir finden die Aufenthaltserlaubnis, die zu Ihrer Einkommensart passt – und richten Firma und Steuerstatus darauf aus.',
      primary: { label: 'Aufenthaltswege vergleichen', to: 'residency' },
      secondary: { label: 'Mit einem Berater sprechen', to: 'consultation' },
    },
    routesEyebrow: 'Welcher Weg passt?',
    routesHeading: 'Es kommt darauf an, wie Sie verdienen',
    routes: [
      { tag: 'Remote-Angestellte', heading: 'Nomad Residence Permit', body: 'Im ersten Jahr steuerfrei, danach 10 %. Bis zu vier Jahre.' },
      { tag: 'Leben von ausländischen Einkünften', heading: 'Global Residence Programme', body: '15 % auf nach Malta überwiesene ausländische Einkünfte, mindestens 15.000 €.' },
      { tag: 'Führungskraft in Malta', heading: 'Highly Skilled Individuals', body: 'Pauschal 15 % auf Gehälter ab 65.000 € in förderfähigen Branchen.' },
      { tag: 'Langfristige Basis', heading: 'Permanent Residence Programme', body: 'Daueraufenthalt mit Reisefreiheit im Schengen-Raum; es gelten Kapitalanforderungen.' },
    ],
    stats: [
      { value: 'EU', label: 'Zugang zum Binnenmarkt' },
      { value: 'Schengen', label: 'Reisefreiheit mit Aufenthaltstitel' },
      { value: 'Englisch', label: 'Amtssprache' },
      { value: '70+', label: 'Doppelbesteuerungsabkommen' },
    ],
  },
} satisfies Localized<Copy>

export const view: View = {
  meta: {
    en: {
      title: 'Malta for non-EU founders: EU base | Tax.Free',
      description: 'Malta gives non-EU founders an English-speaking EU base in the euro and Schengen. Compare the Nomad, Global Residence, HSI and Permanent Residence routes.',
    },
    de: {
      title: 'Malta für Nicht-EU-Gründer: EU-Basis | Tax.Free',
      description: 'Malta bietet Gründern von außerhalb der EU eine englischsprachige Basis in Euro und Schengen. Nomad-, Global-Residence-, HSI- und Daueraufenthalt im Vergleich.',
    },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <AudiencePage locale={locale} active="forNonEuFounders" hero={t.hero}>
        <CardSection eyebrow={t.routesEyebrow} heading={t.routesHeading} cards={t.routes} min={260} locale={locale} />
        <Section>
          <Grid min={240}>
            {t.stats.map((s) => (
              <StatTile key={s.label} variant="dark" value={s.value} label={s.label} />
            ))}
          </Grid>
        </Section>
      </AudiencePage>
    )
  },
}
