import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { ComparePage, type CompareCopy } from './ComparePage'

const BLEVINS_URL = 'https://www.blevinsfranks.com/portugal-tax-in-2026/'
const DINHEIRO_URL = 'https://dinheirovivo.dn.pt/economia/reduo-do-irc-para-19-em-2026-aprovada-na-votao-final'

const copy = {
  en: {
    crumb: 'Malta vs Portugal',
    heading: 'Malta vs Portugal after the end of the old NHR',
    lead: "Portugal replaced its NHR regime with IFICI, a 20% rate for qualifying professions. For company owners, Malta's refund system usually goes further.",
    head: ['', 'Malta', 'Portugal'],
    rows: [
      ['Corporate tax', '35%, ≈5% after refund', '19% general rate in 2026, plus surcharges'],
      ['Special regime', 'Non-dom remittance basis', 'IFICI: 20% on qualifying Portuguese work income'],
      ['Top personal rate', '35%', '48%'],
      ['Investment income', 'Foreign gains exempt for non-doms', '28% flat'],
      ['Language', 'English official', 'Portuguese'],
      ['EU · euro · treaty with Germany', 'Yes · yes · yes', 'Yes · yes · yes'],
    ],
    sources: ['Sources: ', { label: 'Blevins Franks, Portugal tax 2026', url: BLEVINS_URL }, '; ', { label: 'Dinheiro Vivo on the 19% IRC rate', url: DINHEIRO_URL }, '.'],
    cardsMin: 380,
    cards: [
      { variant: 'soft', heading: 'Malta fits company owners', body: 'If your income comes from your own company, the refund system brings tax on distributed profit to about 5%.' },
      { heading: 'Portugal fits some specialists', body: "Employees or professionals in eligible fields can use IFICI's 20% rate — and Portugal offers more space and lower rents outside Lisbon." },
    ],
  },
  de: {
    crumb: 'Malta oder Portugal',
    heading: 'Malta oder Portugal nach dem Ende des alten NHR',
    lead: 'Portugal hat sein NHR-Regime durch IFICI ersetzt, einen Satz von 20 % für qualifizierte Berufe. Für Firmeninhaber geht Maltas Erstattungssystem meist weiter.',
    head: ['', 'Malta', 'Portugal'],
    rows: [
      ['Körperschaftsteuer', '35 %, ≈5 % nach Erstattung', '19 % Regelsatz 2026, zuzüglich Zuschläge'],
      ['Sonderregelung', 'Remittance-Basis für Non-Doms', 'IFICI: 20 % auf qualifizierte Arbeitseinkünfte in Portugal'],
      ['Spitzensteuersatz', '35 %', '48 %'],
      ['Kapitalerträge', 'Ausländische Gewinne für Non-Doms steuerfrei', 'Pauschal 28 %'],
      ['Sprache', 'Englisch ist Amtssprache', 'Portugiesisch'],
      ['EU · Euro · DBA mit Deutschland', 'Ja · ja · ja', 'Ja · ja · ja'],
    ],
    sources: ['Quellen: ', { label: 'Blevins Franks, Portugal tax 2026', url: BLEVINS_URL }, '; ', { label: 'Dinheiro Vivo zum IRC-Satz von 19 %', url: DINHEIRO_URL }, '.'],
    cardsMin: 380,
    cards: [
      { variant: 'soft', heading: 'Malta passt zu Firmeninhabern', body: 'Stammt Ihr Einkommen aus Ihrer eigenen Firma, senkt das Erstattungssystem die Steuer auf ausgeschüttete Gewinne auf rund 5 %.' },
      { heading: 'Portugal passt zu manchen Spezialisten', body: 'Angestellte oder Fachkräfte in begünstigten Berufen können den IFICI-Satz von 20 % nutzen – und Portugal bietet außerhalb Lissabons mehr Platz und niedrigere Mieten.' },
    ],
  },
} satisfies Localized<CompareCopy>

export const view: View = {
  meta: {
    en: {
      title: 'Malta vs Portugal after the old NHR (2026) | Tax.Free',
      description: "Portugal replaced NHR with IFICI, a 20% rate for qualifying professions. For company owners, Malta's refund system usually goes further. See the comparison.",
    },
    de: {
      title: 'Malta oder Portugal nach dem NHR (2026) | Tax.Free',
      description: 'Portugal hat NHR durch IFICI ersetzt: 20 % für qualifizierte Berufe. Für Firmeninhaber geht Maltas Erstattungssystem meist weiter. Der Vergleich im Überblick.',
    },
  },
  Page: ({ locale }) => <ComparePage locale={locale} pageKey="comparePortugal" t={copy[locale]} />,
}
