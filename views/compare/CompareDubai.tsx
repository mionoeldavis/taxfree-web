import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { ComparePage, type CompareCopy } from './ComparePage'

const UAE_URL = 'https://mazeed.com/blog/uae-corporate-tax/'

const copy = {
  en: {
    crumb: 'Malta vs Dubai',
    heading: 'Malta vs Dubai: EU security or zero income tax?',
    lead: 'Dubai has no personal income tax. Malta has the EU, the euro and a tax treaty with Germany. Which matters more depends on your business and your life.',
    head: ['', 'Malta', 'UAE (Dubai)'],
    rows: [
      ['Corporate tax', '35%, ≈5% after refund', '0% to AED 375,000, then 9%'],
      ['Free zones', '—', '0% on qualifying income, with substance'],
      ['Personal income tax', 'Up to 35%; non-dom remittance basis', 'None'],
      ['EU membership', 'Yes', 'No'],
      ['Tax treaty with Germany', 'Yes', 'No (expired 2008)'],
      ['Currency', 'Euro', 'Dirham (AED)'],
    ],
    sources: ['Sources: ', { label: 'UAE corporate tax overview', url: UAE_URL }, '. Summary only.'],
    cardsMin: 340,
    cards: [
      { variant: 'soft', heading: 'Why Germans often choose Malta', body: "Two hours' flight, EU rights for your family, the euro, EU banking — and a treaty that clarifies which country taxes what." },
      { heading: 'Why some choose Dubai', body: 'No personal income tax at all, and a large international founder community.' },
      {
        variant: 'warn',
        heading: 'The German catch',
        body: 'Without a treaty, German exit and extended-liability rules hit harder. Plan either move with a Steuerberater.',
        link: { label: 'Leaving Germany', page: 'guideLeavingGermany' },
      },
    ],
  },
  de: {
    crumb: 'Malta oder Dubai',
    heading: 'Malta oder Dubai: EU-Sicherheit oder null Einkommensteuer?',
    lead: 'Dubai erhebt keine Einkommensteuer. Malta bietet die EU, den Euro und ein Doppelbesteuerungsabkommen mit Deutschland. Was schwerer wiegt, hängt von Ihrem Geschäft und Ihrem Leben ab.',
    head: ['', 'Malta', 'VAE (Dubai)'],
    rows: [
      ['Körperschaftsteuer', '35 %, ≈5 % nach Erstattung', '0 % bis 375.000 AED, darüber 9 %'],
      ['Freihandelszonen', '—', '0 % auf qualifizierte Einkünfte, mit Substanz'],
      ['Einkommensteuer', 'Bis 35 %; Remittance-Basis für Non-Doms', 'Keine'],
      ['EU-Mitglied', 'Ja', 'Nein'],
      ['DBA mit Deutschland', 'Ja', 'Nein (2008 ausgelaufen)'],
      ['Währung', 'Euro', 'Dirham (AED)'],
    ],
    sources: ['Quellen: ', { label: 'Überblick zur Körperschaftsteuer in den VAE', url: UAE_URL }, '. Nur eine Zusammenfassung.'],
    cardsMin: 340,
    cards: [
      { variant: 'soft', heading: 'Warum Deutsche oft Malta wählen', body: 'Zwei Flugstunden, EU-Rechte für Ihre Familie, der Euro, EU-Banken – und ein Abkommen, das klärt, welches Land was besteuert.' },
      { heading: 'Warum sich manche für Dubai entscheiden', body: 'Überhaupt keine Einkommensteuer und eine große internationale Gründer-Community.' },
      {
        variant: 'warn',
        heading: 'Der deutsche Haken',
        body: 'Ohne Doppelbesteuerungsabkommen greifen Wegzugsteuer und erweiterte beschränkte Steuerpflicht härter. Planen Sie jeden der beiden Umzüge mit einem Steuerberater.',
        link: { label: 'Wegzug aus Deutschland', page: 'guideLeavingGermany' },
      },
    ],
  },
} satisfies Localized<CompareCopy>

export const view: View = {
  meta: {
    en: {
      title: 'Malta vs Dubai: EU security or zero income tax? | Tax.Free',
      description: 'Dubai has no personal income tax; Malta offers the EU, the euro and a tax treaty with Germany. Compare corporate tax, free zones and the German catch.',
    },
    de: {
      title: 'Malta oder Dubai: EU oder null Steuern? | Tax.Free',
      description: 'Dubai erhebt keine Einkommensteuer, Malta bietet EU, Euro und ein DBA mit Deutschland. Körperschaftsteuer, Freihandelszonen und Wegzugsteuer im Vergleich.',
    },
  },
  Page: ({ locale }) => <ComparePage locale={locale} pageKey="compareDubai" t={copy[locale]} />,
}
