import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { GuidePage, type GuideCopy } from './GuidePage'

const SOURCE_PILLAR_TWO = 'https://www.drwerner.com/en/malta-5-percent-tax-pillar-two-2026'
const SOURCE_FITWI = 'https://kpmg.com/mt/en/insights/2025/08/malta-introduces-a-new-final-tax.html'

const copy = {
  en: {
    crumb: 'Malta company & 5%',
    eyebrow: 'Pillar guide · 16 min read',
    heading: 'The Malta company and the 5% tax rate, explained properly',
    lead: "Malta's company tax is 35%. Shareholders get most of it back. Here is how the refund system works, when it doesn't, and what changed with Pillar Two.",
    author: '[Author]',
    reviewer: '[Malta accountant]',
    updated: '2026-10',
    primary: { label: 'Try the calculator', to: 'taxCalculator' },
    shortAnswer: { body: 'The company pays 35%. When it distributes trading profits, the shareholder claims back 6/7 of that tax. Net result: 5%. For most owner-managed businesses this still works in 2026.' },
    sections: [
      {
        id: 'how',
        toc: 'How the refund works',
        heading: 'How the refund works',
        blocks: [
          { kind: 'p', text: "Malta uses a full imputation system: tax paid by the company is credited to the shareholder. On top of that, shareholders can claim a refund of part of the company's tax once a dividend is paid." },
          {
            kind: 'kv',
            rows: [
              { label: 'Trading profit', value: '€100,000' },
              { label: 'Company tax at 35%', value: '−€35,000' },
              { label: 'Dividend paid', value: '€65,000' },
              { label: 'Shareholder refund, 6/7', value: '+€30,000', accent: true },
              { label: 'Net tax', value: '€5,000 = 5%' },
            ],
          },
        ],
      },
      {
        id: 'rates',
        toc: 'Refund rates by income',
        heading: 'Refund rates by type of income',
        blocks: [
          {
            kind: 'table',
            head: ['Income', 'Refund', 'Effective'],
            rows: [
              ['Trading profits', '6/7', '5%'],
              ['Passive interest and royalties', '5/7', '10%'],
              ['Qualifying participations', 'Exempt', '0%'],
            ],
            highlight: [0],
          },
        ],
      },
      {
        id: 'substance',
        toc: 'Substance',
        heading: 'Substance: why a letterbox fails',
        blocks: [{ kind: 'p', text: 'A Malta company is only Maltese for tax if it is managed and controlled from Malta. Board meetings, contracts and key decisions should happen there, with an office and — ideally — staff. Run it from your kitchen in Munich and Germany will treat it as German.' }],
      },
      {
        id: 'pillar',
        toc: 'Pillar Two and FITWI',
        heading: 'Pillar Two and the new 15% FITWI option',
        blocks: [{ kind: 'p', text: 'The OECD global minimum tax applies only to groups with €750 million or more in revenue, and Malta has deferred its main rules until the end of 2029. Since 2025, companies can instead elect a 15% final tax without refunds (FITWI), with a five-year lock-in. For most founders, the refund system remains the better choice.' }],
      },
      {
        id: 'holding',
        toc: 'Holding structures',
        heading: 'When a holding structure helps',
        blocks: [{ kind: 'p', text: 'A Malta holding above the trading company can receive dividends and refunds, keep profits invested and later sell subsidiaries under the participation exemption. It adds cost, so it pays off for larger profits or several businesses.' }],
      },
    ],
    related: [
      { tag: 'Article', heading: 'The 6/7 refund, step by step', article: 'malta-5-percent-tax-explained' },
      { tag: 'Service', heading: 'Form your Malta company', to: 'companyFormation' },
      { tag: 'Pillar guide', heading: 'What Germany still taxes', to: 'guideLeavingGermany' },
    ],
    sources: [
      { label: 'Dr. Werner on Pillar Two', url: SOURCE_PILLAR_TWO },
      { label: 'KPMG Malta on FITWI', url: SOURCE_FITWI },
    ],
  },
  de: {
    crumb: 'Malta-Firma & 5 %',
    eyebrow: 'Ratgeber · 16 Min. Lesezeit',
    heading: 'Die Malta-Firma und der Steuersatz von 5 %, richtig erklärt',
    lead: 'Die Körperschaftsteuer in Malta beträgt 35 %. Den Großteil davon erhalten die Gesellschafter zurück. So funktioniert das Erstattungssystem, wann es nicht greift und was sich mit Pillar Two geändert hat.',
    author: '[Autor]',
    reviewer: '[Malta-Steuerberater]',
    updated: '2026-10',
    primary: { label: 'Zum Rechner', to: 'taxCalculator' },
    shortAnswer: { body: 'Die Firma zahlt 35 %. Schüttet sie operative Gewinne aus, erhält der Gesellschafter 6/7 dieser Steuer zurück. Ergebnis: 5 %. Für die meisten inhabergeführten Unternehmen funktioniert das auch 2026 noch.' },
    sections: [
      {
        id: 'how',
        toc: 'So funktioniert die Erstattung',
        heading: 'So funktioniert die Erstattung',
        blocks: [
          { kind: 'p', text: 'Malta nutzt ein Vollanrechnungssystem: Die von der Firma gezahlte Steuer wird dem Gesellschafter angerechnet. Zusätzlich können Gesellschafter nach einer Dividendenausschüttung einen Teil der Körperschaftsteuer erstattet bekommen.' },
          {
            kind: 'kv',
            rows: [
              { label: 'Operativer Gewinn', value: '100.000 €' },
              { label: 'Körperschaftsteuer 35 %', value: '−35.000 €' },
              { label: 'Ausgeschüttete Dividende', value: '65.000 €' },
              { label: 'Erstattung an Gesellschafter, 6/7', value: '+30.000 €', accent: true },
              { label: 'Steuer netto', value: '5.000 € = 5 %' },
            ],
          },
        ],
      },
      {
        id: 'rates',
        toc: 'Erstattung nach Einkunftsart',
        heading: 'Erstattungssätze nach Einkunftsart',
        blocks: [
          {
            kind: 'table',
            head: ['Einkünfte', 'Erstattung', 'Effektiv'],
            rows: [
              ['Operative Gewinne', '6/7', '5 %'],
              ['Passive Zinsen und Lizenzgebühren', '5/7', '10 %'],
              ['Qualifizierte Beteiligungen', 'Steuerfrei', '0 %'],
            ],
            highlight: [0],
          },
        ],
      },
      {
        id: 'substance',
        toc: 'Substanz',
        heading: 'Substanz: Warum eine Briefkastenfirma scheitert',
        blocks: [{ kind: 'p', text: 'Steuerlich maltesisch ist eine Malta-Firma nur, wenn sie von Malta aus geleitet und kontrolliert wird. Vorstandssitzungen, Verträge und wichtige Entscheidungen sollten dort stattfinden – mit einem Büro und idealerweise Mitarbeitern. Führen Sie sie von Ihrer Küche in München aus, behandelt Deutschland sie als deutsche Firma.' }],
      },
      {
        id: 'pillar',
        toc: 'Pillar Two und FITWI',
        heading: 'Pillar Two und die neue FITWI-Option mit 15 %',
        blocks: [{ kind: 'p', text: 'Die globale Mindeststeuer der OECD gilt nur für Konzerne ab 750 Millionen € Umsatz, und Malta hat die Hauptregeln bis Ende 2029 aufgeschoben. Seit 2025 können Firmen stattdessen eine finale Steuer von 15 % ohne Erstattung wählen (FITWI), mit einer Bindung von fünf Jahren. Für die meisten Gründer bleibt das Erstattungssystem die bessere Wahl.' }],
      },
      {
        id: 'holding',
        toc: 'Holdingstrukturen',
        heading: 'Wann sich eine Holding lohnt',
        blocks: [{ kind: 'p', text: 'Eine Malta-Holding über der operativen Firma kann Dividenden und Erstattungen empfangen, Gewinne investiert halten und später Tochterfirmen unter der Beteiligungsbefreiung verkaufen. Sie verursacht zusätzliche Kosten und lohnt sich daher bei höheren Gewinnen oder mehreren Unternehmen.' }],
      },
    ],
    related: [
      { tag: 'Artikel', heading: 'Die 6/7-Erstattung Schritt für Schritt', article: 'malta-5-prozent-steuer-erklaert' },
      { tag: 'Leistung', heading: 'Ihre Malta-Firma gründen', to: 'companyFormation' },
      { tag: 'Ratgeber', heading: 'Was Deutschland noch besteuert', to: 'guideLeavingGermany' },
    ],
    sources: [
      { label: 'Dr. Werner zu Pillar Two', url: SOURCE_PILLAR_TWO },
      { label: 'KPMG Malta zu FITWI', url: SOURCE_FITWI },
    ],
  },
} satisfies Localized<GuideCopy>

export const view: View = {
  meta: {
    en: { title: 'Malta company & the 5% tax rate explained | Tax.Free', description: 'A Malta company pays 35%; shareholders reclaim 6/7 on distributed trading profits, leaving 5%. Refund rates, substance, Pillar Two and FITWI explained.' },
    de: { title: 'Malta-Firma und 5 % Steuer erklärt | Tax.Free', description: 'Eine Malta-Firma zahlt 35 %, Gesellschafter erhalten auf ausgeschüttete operative Gewinne 6/7 zurück: effektiv 5 %. Dazu Substanz, Pillar Two und FITWI.' },
  },
  Page: ({ locale }) => <GuidePage locale={locale} page="guideCompany" t={copy[locale]} />,
}
