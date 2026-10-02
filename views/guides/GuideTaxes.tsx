import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { GuidePage, type GuideCopy } from './GuidePage'

const SOURCE_MIN_TAX = 'https://www.ccmalta.com/news/minimum-tax-charge-for-ordinary-resident-non-doms-in-malta'
const SOURCE_PROGRAMMES = 'https://www.ey.com/en_mt/newsroom/ey-newsletters/tax/tax-alert-residence-programmes'

const copy = {
  en: {
    crumb: 'Malta taxes',
    eyebrow: 'Pillar guide · 15 min read',
    heading: 'Malta taxes for individuals: non-dom, remittance basis and residence programmes',
    lead: 'How Malta taxes you depends on two things: whether you are resident, and whether you are domiciled. Most founders who move are resident but not domiciled.',
    author: '[Author]',
    reviewer: '[Malta accountant]',
    updated: '2026-10',
    primary: { label: 'Compare residence routes', to: 'residency' },
    shortAnswer: { body: 'Non-dom residents pay Malta tax on Malta income and on foreign income they bring to Malta. Foreign capital gains are exempt. If foreign income is €35,000 or more, a minimum tax of €5,000 applies.' },
    sections: [
      {
        id: 'status',
        toc: 'Residence vs domicile',
        heading: 'Residence vs domicile',
        blocks: [
          { kind: 'p', text: 'Residence is where you live. Domicile is your long-term home in the legal sense — usually the country you come from. A German founder who moves to Malta normally becomes resident but keeps a foreign domicile.' },
          {
            kind: 'table',
            head: ['Status', 'Malta income', 'Foreign income'],
            rows: [
              ['Resident and domiciled', 'Taxed', 'Taxed worldwide'],
              ['Resident, not domiciled', 'Taxed', 'Only when remitted'],
              ['Not resident', 'Taxed', 'Not taxed'],
            ],
            highlight: [1],
          },
        ],
      },
      {
        id: 'nondom',
        toc: 'How non-doms are taxed',
        heading: 'How non-doms are taxed',
        blocks: [{ kind: 'p', text: 'Under the remittance basis, foreign income stays outside Maltese tax as long as it stays outside Malta. Bring it into a Maltese account and it becomes taxable. Foreign capital gains are not taxed even when remitted.' }],
      },
      {
        id: 'minimum',
        toc: 'The €5,000 minimum tax',
        heading: 'The €5,000 minimum tax',
        blocks: [{ kind: 'p', text: 'Since 2018, non-doms with foreign income of €35,000 or more pay at least €5,000 a year. If you can show your tax would be lower under worldwide taxation, the lower amount applies. Holders of programmes such as the GRP are not covered by this rule.' }],
      },
      {
        id: 'programmes',
        toc: 'Residence programmes',
        heading: 'Residence programmes with flat rates',
        blocks: [
          {
            kind: 'cards',
            cards: [
              { heading: 'Global Residence Programme', body: '15% on remitted foreign income, €15,000 minimum.' },
              { heading: 'Highly Skilled Individuals', body: '15% on employment income from €65,000, from 2026.' },
              { heading: 'Nomad Residence Permit', body: 'Year 1 exempt, then 10%.' },
              { heading: 'Malta Retirement Programme', body: '15% on foreign pension, €7,500 minimum.' },
            ],
          },
        ],
      },
      {
        id: 'returns',
        toc: 'Tax year and returns',
        heading: 'Tax year and returns',
        blocks: [{ kind: 'p', text: 'The Maltese tax year follows the calendar year. Your advisor files the personal return and tracks what you remit, so the remittance basis holds up if it is ever reviewed.' }],
      },
    ],
    related: [
      { tag: 'Pillar guide', heading: 'Company tax and the 5%', to: 'guideCompany' },
      { tag: 'Service', heading: 'Compare residence routes', to: 'residency' },
    ],
    sources: [
      { label: 'CC Malta on the minimum tax', url: SOURCE_MIN_TAX },
      { label: 'EY Malta on residence programmes', url: SOURCE_PROGRAMMES },
    ],
  },
  de: {
    crumb: 'Steuern in Malta',
    eyebrow: 'Ratgeber · 15 Min. Lesezeit',
    heading: 'Steuern in Malta für Privatpersonen: Non-Dom, Remittance-Basis und Aufenthaltsprogramme',
    lead: 'Wie Malta Sie besteuert, hängt von zwei Dingen ab: ob Sie dort ansässig sind und ob Sie dort Ihr Domizil haben. Die meisten Gründer, die umziehen, sind ansässig, aber ohne maltesisches Domizil.',
    author: '[Autor]',
    reviewer: '[Malta-Steuerberater]',
    updated: '2026-10',
    primary: { label: 'Aufenthaltswege vergleichen', to: 'residency' },
    shortAnswer: { body: 'Non-Doms zahlen in Malta Steuer auf maltesische Einkünfte und auf ausländische Einkünfte, die sie nach Malta überweisen. Ausländische Veräußerungsgewinne sind steuerfrei. Ab 35.000 € ausländischen Einkünften gilt eine Mindeststeuer von 5.000 €.' },
    sections: [
      {
        id: 'status',
        toc: 'Ansässigkeit und Domizil',
        heading: 'Ansässigkeit und Domizil',
        blocks: [
          { kind: 'p', text: 'Ansässig sind Sie dort, wo Sie leben. Das Domizil ist Ihre dauerhafte Heimat im rechtlichen Sinn – meist das Land, aus dem Sie stammen. Ein deutscher Gründer, der nach Malta zieht, wird dort normalerweise ansässig, behält aber ein ausländisches Domizil.' },
          {
            kind: 'table',
            head: ['Status', 'Maltesische Einkünfte', 'Ausländische Einkünfte'],
            rows: [
              ['Ansässig mit Domizil', 'Steuerpflichtig', 'Welteinkommen steuerpflichtig'],
              ['Ansässig ohne Domizil', 'Steuerpflichtig', 'Nur bei Überweisung nach Malta'],
              ['Nicht ansässig', 'Steuerpflichtig', 'Nicht steuerpflichtig'],
            ],
            highlight: [1],
          },
        ],
      },
      {
        id: 'nondom',
        toc: 'Wie Non-Doms besteuert werden',
        heading: 'Wie Non-Doms besteuert werden',
        blocks: [{ kind: 'p', text: 'Nach der Remittance-Basis bleiben ausländische Einkünfte steuerfrei, solange sie außerhalb Maltas bleiben. Überweisen Sie sie auf ein maltesisches Konto, werden sie steuerpflichtig. Ausländische Veräußerungsgewinne sind auch bei Überweisung nicht steuerpflichtig.' }],
      },
      {
        id: 'minimum',
        toc: 'Die Mindeststeuer von 5.000 €',
        heading: 'Die Mindeststeuer von 5.000 €',
        blocks: [{ kind: 'p', text: 'Seit 2018 zahlen Non-Doms mit ausländischen Einkünften ab 35.000 € mindestens 5.000 € pro Jahr. Können Sie nachweisen, dass Ihre Steuer bei Besteuerung des Welteinkommens niedriger wäre, gilt der niedrigere Betrag. Teilnehmer an Programmen wie dem GRP fallen nicht unter diese Regel.' }],
      },
      {
        id: 'programmes',
        toc: 'Aufenthaltsprogramme',
        heading: 'Aufenthaltsprogramme mit Pauschalsätzen',
        blocks: [
          {
            kind: 'cards',
            cards: [
              { heading: 'Global Residence Programme', body: '15 % auf überwiesene ausländische Einkünfte, mindestens 15.000 €.' },
              { heading: 'Highly Skilled Individuals', body: '15 % auf Einkünfte aus nichtselbständiger Arbeit ab 65.000 €, ab 2026.' },
              { heading: 'Nomad Residence Permit', body: 'Im ersten Jahr steuerfrei, danach 10 %.' },
              { heading: 'Malta Retirement Programme', body: '15 % auf ausländische Renten, mindestens 7.500 €.' },
            ],
          },
        ],
      },
      {
        id: 'returns',
        toc: 'Steuerjahr und Erklärung',
        heading: 'Steuerjahr und Steuererklärung',
        blocks: [{ kind: 'p', text: 'Das maltesische Steuerjahr entspricht dem Kalenderjahr. Ihr Berater reicht die persönliche Steuererklärung ein und dokumentiert, was Sie nach Malta überweisen – so hält die Remittance-Basis auch einer Prüfung stand.' }],
      },
    ],
    related: [
      { tag: 'Ratgeber', heading: 'Firmensteuer und die 5 %', to: 'guideCompany' },
      { tag: 'Leistung', heading: 'Aufenthaltswege vergleichen', to: 'residency' },
    ],
    sources: [
      { label: 'CC Malta zur Mindeststeuer', url: SOURCE_MIN_TAX },
      { label: 'EY Malta zu den Aufenthaltsprogrammen', url: SOURCE_PROGRAMMES },
    ],
  },
} satisfies Localized<GuideCopy>

export const view: View = {
  meta: {
    en: { title: 'Malta taxes for individuals: non-dom guide 2026 | Tax.Free', description: 'Non-dom residents pay Malta tax on Malta income and on foreign income they remit. Foreign capital gains are exempt; a €5,000 minimum tax can apply.' },
    de: { title: 'Steuern in Malta: Non-Dom-Ratgeber 2026 | Tax.Free', description: 'Non-Doms zahlen in Malta Steuer auf maltesische und überwiesene ausländische Einkünfte. Auslandsgewinne aus Veräußerung sind frei, ggf. gilt 5.000 € Mindeststeuer.' },
  },
  Page: ({ locale }) => <GuidePage locale={locale} page="guideTaxes" t={copy[locale]} />,
}
