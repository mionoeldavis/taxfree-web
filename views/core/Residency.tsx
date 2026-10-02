import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { ServicePage, type ServiceCopy } from './ServicePage'

const copy = {
  en: {
    hero: {
      variant: 'soft',
      current: 'Residency',
      eyebrow: 'Service · Residency',
      heading: 'Malta residency: the right status for how you earn',
      lead: 'EU citizen, remote worker, investor or highly paid employee — each route has different rules and a different tax rate. We help you pick one and get it approved.',
      primary: { label: 'Find my route', to: 'consultation' },
      secondary: { label: 'How residents are taxed', to: 'guideTaxes' },
    },
    blocks: [
      {
        kind: 'table',
        eyebrow: 'Compare the options',
        heading: 'Five routes to living in Malta',
        head: ['Route', 'For', 'Tax', 'Duration'],
        rows: [
          ['EU registration + ID card', 'EU, EEA and Swiss citizens', 'Ordinary rates; non-dom remittance basis', 'Open-ended'],
          ['Global Residence Programme', 'Non-EU nationals with foreign income', '15% on remitted foreign income, €15,000 minimum', 'While conditions are met'],
          ['Nomad Residence Permit', 'Non-EU remote workers', 'Year 1 exempt, then 10%', '1 year, renewable to 4'],
          ['Highly Skilled Individuals', 'Employees earning €65,000+ in eligible sectors', '15% flat on employment income', 'From 2026'],
          ['Permanent Residence Programme', 'Non-EU nationals meeting capital requirements', 'Residence right; tax set separately', 'Permanent'],
        ],
        note: 'Summary as of October 2026. Each route has further conditions; sources on the guide pages.',
      },
      {
        kind: 'cards',
        min: 340,
        cards: [
          {
            variant: 'dark',
            heading: 'From Germany, Austria or Switzerland?',
            body: "You don't need a programme. Register as an EU resident, then claim non-dom status — foreign income stays untaxed in Malta unless you bring it in.",
            link: { label: 'Non-dom explained', to: 'guideTaxes' },
          },
          {
            heading: 'Founder from outside the EU?',
            body: "Your route depends on whether you're employed, self-employed or living on investments. We map it in the first call.",
            link: { label: 'Malta for non-EU founders', to: 'forNonEuFounders' },
          },
          {
            heading: 'What we handle',
            body: 'Application file, lease and insurance proof, appointments with Identità, tax status registration and renewals.',
            link: { label: 'Start your application', to: 'consultation' },
          },
        ],
      },
      {
        kind: 'faq',
        heading: 'Common questions',
        items: [
          { q: 'What is the €5,000 minimum tax?', a: 'Non-doms with €35,000 or more foreign income pay at least €5,000 a year. Programme holders such as GRP are not affected.' },
          { q: 'Is residence the same as tax residence?', a: 'Not automatically. Tax residence depends on where you live and your ties. We document both.' },
        ],
      },
    ],
  },
  de: {
    hero: {
      variant: 'soft',
      current: 'Aufenthalt',
      eyebrow: 'Leistung · Aufenthalt',
      heading: 'Aufenthalt in Malta: der richtige Status für die Art, wie Sie verdienen',
      lead: 'EU-Bürger, Remote Worker, Investor oder gut bezahlter Angestellter – jeder Weg hat eigene Regeln und einen eigenen Steuersatz. Wir helfen Ihnen, den richtigen zu wählen und genehmigt zu bekommen.',
      primary: { label: 'Meinen Weg finden', to: 'consultation' },
      secondary: { label: 'So werden Ansässige besteuert', to: 'guideTaxes' },
    },
    blocks: [
      {
        kind: 'table',
        eyebrow: 'Die Optionen im Vergleich',
        heading: 'Fünf Wege, in Malta zu leben',
        head: ['Weg', 'Für', 'Steuer', 'Dauer'],
        rows: [
          ['EU-Anmeldung + ID-Karte', 'Bürger der EU, des EWR und der Schweiz', 'Reguläre Sätze; Non-Dom-Überweisungsprinzip', 'Unbefristet'],
          ['Global Residence Programme', 'Nicht-EU-Bürger mit ausländischen Einkünften', '15 % auf nach Malta überwiesene Auslandseinkünfte, mindestens 15.000 €', 'Solange die Voraussetzungen erfüllt sind'],
          ['Nomad Residence Permit', 'Remote Worker aus Nicht-EU-Ländern', 'Jahr 1 steuerfrei, danach 10 %', '1 Jahr, verlängerbar auf 4'],
          ['Highly Skilled Individuals', 'Angestellte mit 65.000 €+ in förderfähigen Branchen', '15 % pauschal auf Arbeitseinkommen', 'Ab 2026'],
          ['Permanent Residence Programme', 'Nicht-EU-Bürger, die die Kapitalanforderungen erfüllen', 'Aufenthaltsrecht; Steuer separat geregelt', 'Dauerhaft'],
        ],
        note: 'Zusammenfassung, Stand Oktober 2026. Jeder Weg hat weitere Voraussetzungen; Quellen auf den Ratgeberseiten.',
      },
      {
        kind: 'cards',
        min: 340,
        cards: [
          {
            variant: 'dark',
            heading: 'Aus Deutschland, Österreich oder der Schweiz?',
            body: 'Sie brauchen kein Programm. Melden Sie sich als EU-Bürger an und beantragen Sie dann den Non-Dom-Status – ausländische Einkünfte bleiben in Malta steuerfrei, solange Sie sie nicht nach Malta überweisen.',
            link: { label: 'Non-Dom erklärt', to: 'guideTaxes' },
          },
          {
            heading: 'Gründer aus einem Nicht-EU-Land?',
            body: 'Ihr Weg hängt davon ab, ob Sie angestellt, selbstständig sind oder von Kapitalerträgen leben. Wir klären das im ersten Gespräch.',
            link: { label: 'Malta für Nicht-EU-Gründer', to: 'forNonEuFounders' },
          },
          {
            heading: 'Was wir übernehmen',
            body: 'Antragsunterlagen, Nachweise zu Mietvertrag und Versicherung, Termine bei Identità, Registrierung des Steuerstatus und Verlängerungen.',
            link: { label: 'Antrag starten', to: 'consultation' },
          },
        ],
      },
      {
        kind: 'faq',
        heading: 'Häufige Fragen',
        items: [
          { q: 'Was ist die Mindeststeuer von 5.000 €?', a: 'Non-Doms mit ausländischen Einkünften ab 35.000 € zahlen mindestens 5.000 € pro Jahr. Inhaber von Programmen wie dem GRP sind nicht betroffen.' },
          { q: 'Ist Aufenthalt dasselbe wie steuerliche Ansässigkeit?', a: 'Nicht automatisch. Die steuerliche Ansässigkeit hängt davon ab, wo Sie leben und welche Bindungen Sie haben. Wir dokumentieren beides.' },
        ],
      },
    ],
  },
} satisfies Localized<ServiceCopy>

export const view: View = {
  meta: {
    en: { title: 'Malta residency: 5 routes compared (2026) | Tax.Free', description: 'Malta residency routes compared: EU registration, GRP, Nomad Permit, Highly Skilled and Permanent Residence — who qualifies, how each is taxed, how long.' },
    de: { title: 'Aufenthalt in Malta: 5 Wege im Vergleich (2026) | Tax.Free', description: 'Aufenthalt in Malta im Vergleich: EU-Anmeldung, GRP, Nomad Permit, Highly Skilled und Permanent Residence – wer infrage kommt und wie besteuert wird.' },
  },
  Page: ({ locale }) => <ServicePage locale={locale} pageKey="residency" copy={copy[locale]} />,
}
