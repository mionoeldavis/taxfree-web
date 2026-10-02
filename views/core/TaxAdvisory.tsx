import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { ServicePage, type ServiceCopy } from './ServicePage'

const copy = {
  en: {
    hero: {
      variant: 'dark',
      current: 'Tax advisory',
      eyebrow: 'Service · Tax advisory',
      heading: 'Malta tax advice that lines up with your home country',
      lead: 'Personal and company tax in Malta, coordinated with your Steuerberater, so both sides agree on where you and your profits are taxed.',
      primary: { label: 'Book a tax review', to: 'consultation' },
      secondary: { label: 'Meet our reviewers', to: 'reviewers' },
    },
    blocks: [
      {
        kind: 'stats',
        tiles: [
          { value: '35%', label: 'Headline company rate' },
          { value: '5%', label: 'Effective after 6/7 refund', variant: 'accent' },
          { value: '15%', label: 'FITWI option for groups' },
          { value: '€5k', label: 'Non-dom minimum tax' },
        ],
      },
      {
        kind: 'cards',
        eyebrow: 'What we advise on',
        heading: 'Five areas, one coordinated plan',
        min: 340,
        cards: [
          { heading: 'Personal tax', body: 'Non-dom status, remittance planning, Malta tax returns.' },
          { heading: 'Company tax and refunds', body: 'Tax accounts, 6/7 and 5/7 refunds, participation exemption.' },
          { heading: 'Cross-border coordination', body: 'Treaties with Germany, Austria and Switzerland; exit and CFC rules.' },
          { heading: 'Groups and Pillar Two', body: 'For groups near €750M revenue: minimum tax and the 15% FITWI election.' },
          { heading: 'Annual compliance', body: 'Returns, refund claims and a law-change check after each budget.' },
          { variant: 'soft', heading: 'Second opinion', body: 'Already in Malta? We review your existing structure.', link: { label: 'Request a review', to: 'consultation' } },
        ],
      },
      {
        kind: 'process',
        eyebrow: 'How we work',
        heading: 'Your Steuerberater stays in the loop',
        lead: 'We work with your German advisor — or our partner Steuerberater — so the German and the Maltese filings tell the same story.',
        steps: [
          { n: 'DE', heading: 'Your Steuerberater', body: 'Exit, CFC and German filings.' },
          { n: 'TF', heading: 'Your Tax.Free advisor', body: 'Coordinates both sides and the timeline.' },
          { n: 'MT', heading: 'Malta accountant', body: 'Company accounts, returns and refund claims.' },
        ],
      },
      {
        kind: 'faq',
        heading: 'Common questions',
        items: [
          { q: 'Does Pillar Two end the 5%?', a: 'Not for most owner-managed businesses. It applies to groups with €750M+ revenue, and Malta has deferred its main rules to the end of 2029.' },
          { q: 'What is FITWI?', a: 'An optional 15% final tax with no refunds and a five-year lock-in, meant mainly for groups already under minimum-tax rules.' },
        ],
      },
    ],
  },
  de: {
    hero: {
      variant: 'dark',
      current: 'Steuerberatung',
      eyebrow: 'Leistung · Steuerberatung',
      heading: 'Steuerberatung in Malta, abgestimmt mit Ihrem Heimatland',
      lead: 'Einkommen- und Firmensteuer in Malta, abgestimmt mit Ihrem Steuerberater – damit beide Seiten übereinstimmen, wo Sie und Ihre Gewinne besteuert werden.',
      primary: { label: 'Steuer-Check buchen', to: 'consultation' },
      secondary: { label: 'Unsere Experten kennenlernen', to: 'reviewers' },
    },
    blocks: [
      {
        kind: 'stats',
        tiles: [
          { value: '35 %', label: 'Regulärer Körperschaftsteuersatz' },
          { value: '5 %', label: 'Effektiv nach 6/7-Erstattung', variant: 'accent' },
          { value: '15 %', label: 'FITWI-Option für Konzerne' },
          { value: '5.000 €', label: 'Mindeststeuer für Non-Doms' },
        ],
      },
      {
        kind: 'cards',
        eyebrow: 'Wobei wir beraten',
        heading: 'Fünf Bereiche, ein abgestimmter Plan',
        min: 340,
        cards: [
          { heading: 'Persönliche Steuern', body: 'Non-Dom-Status, Planung der Überweisungen nach Malta, maltesische Steuererklärungen.' },
          { heading: 'Firmensteuer und Erstattungen', body: 'Steuerkonten, 6/7- und 5/7-Erstattungen, Beteiligungsbefreiung.' },
          { heading: 'Grenzüberschreitende Abstimmung', body: 'Doppelbesteuerungsabkommen mit Deutschland, Österreich und der Schweiz; Wegzugsteuer und Hinzurechnungsbesteuerung.' },
          { heading: 'Konzerne und Pillar Two', body: 'Für Konzerne mit Umsatz nahe 750 Mio. €: Mindeststeuer und die 15-%-FITWI-Option.' },
          { heading: 'Jährliche Pflichten', body: 'Steuererklärungen, Erstattungsanträge und ein Check auf Gesetzesänderungen nach jedem Haushalt.' },
          { variant: 'soft', heading: 'Zweitmeinung', body: 'Schon in Malta? Wir prüfen Ihre bestehende Struktur.', link: { label: 'Prüfung anfragen', to: 'consultation' } },
        ],
      },
      {
        kind: 'process',
        eyebrow: 'So arbeiten wir',
        heading: 'Ihr Steuerberater bleibt eingebunden',
        lead: 'Wir arbeiten mit Ihrem deutschen Steuerberater – oder unserem Partner-Steuerberater –, damit die deutschen und die maltesischen Erklärungen dieselbe Geschichte erzählen.',
        steps: [
          { n: 'DE', heading: 'Ihr Steuerberater', body: 'Wegzug, Hinzurechnungsbesteuerung und deutsche Erklärungen.' },
          { n: 'TF', heading: 'Ihr Tax.Free-Berater', body: 'Koordiniert beide Seiten und den Zeitplan.' },
          { n: 'MT', heading: 'Steuerberater in Malta', body: 'Jahresabschluss, Steuererklärungen und Erstattungsanträge der Firma.' },
        ],
      },
      {
        kind: 'faq',
        heading: 'Häufige Fragen',
        items: [
          { q: 'Beendet Pillar Two die 5 %?', a: 'Für die meisten inhabergeführten Unternehmen nicht. Die Regeln gelten für Konzerne ab 750 Mio. € Umsatz, und Malta hat die Hauptregeln bis Ende 2029 aufgeschoben.' },
          { q: 'Was ist FITWI?', a: 'Eine optionale Abgeltungsteuer von 15 % ohne Erstattungen und mit fünfjähriger Bindung – gedacht vor allem für Konzerne, die ohnehin unter die Mindeststeuer fallen.' },
        ],
      },
    ],
  },
} satisfies Localized<ServiceCopy>

export const view: View = {
  meta: {
    en: { title: 'Malta tax advisory for founders | Tax.Free', description: 'Malta personal and company tax advice coordinated with your German Steuerberater: non-dom status, 6/7 refunds, treaties, exit and CFC rules, Pillar Two.' },
    de: { title: 'Steuerberatung in Malta für Gründer | Tax.Free', description: 'Steuerberatung in Malta, abgestimmt mit Ihrem Steuerberater: Non-Dom-Status, 6/7-Erstattung, DBA, Wegzugsteuer, Hinzurechnungsbesteuerung, Pillar Two.' },
  },
  Page: ({ locale }) => <ServicePage locale={locale} pageKey="taxAdvisory" copy={copy[locale]} />,
}
