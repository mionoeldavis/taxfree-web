import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { GuidePage, type GuideCopy } from './GuidePage'

const copy = {
  en: {
    crumb: 'Moving to Malta',
    eyebrow: 'Pillar guide · 18 min read',
    heading: 'Moving to Malta: the complete guide for founders',
    lead: 'Residence, housing, schools, banking and a 90-day checklist — what it really takes to make Malta your home and your tax base.',
    author: '[Author]',
    reviewer: '[Malta accountant]',
    updated: '2026-10',
    primary: { label: 'Take the fit quiz', to: 'fitQuiz' },
    shortAnswer: { body: 'EU citizens can move to Malta without a visa: register your residence, get an ID card and register for tax. The tax benefit only works if you really live there and give up residence in Germany.' },
    sections: [
      {
        id: 'fit',
        toc: 'Is Malta right for you?',
        heading: 'Is Malta right for you?',
        blocks: [{ kind: 'p', text: 'Malta suits founders whose business runs from anywhere, who earn enough to justify a company, and who want to stay inside the EU. It suits people less well if they need to be in Germany most weeks.' }],
      },
      {
        id: 'residence',
        toc: 'Residence for EU citizens',
        heading: 'Residence for EU citizens',
        blocks: [
          {
            kind: 'p',
            text: 'As an EU, EEA or Swiss citizen you have the right to live in Malta. You apply to Identità with a lease, health insurance and proof of income, and receive a Maltese ID card. Founders from outside the EU need a permit first — see',
            link: { label: 'residence routes', to: 'residency', after: '.' },
          },
        ],
      },
      {
        id: 'where',
        toc: 'Where to live',
        heading: 'Where to live',
        blocks: [
          {
            kind: 'table',
            head: ['Area', 'Good for'],
            rows: [
              ['Sliema · St Julian’s', 'Seafront, cafés, coworking, most expats'],
              ['Valletta', 'Historic capital, close to authorities'],
              ['Swieqi · Ta’ Xbiex', 'Quieter, families, schools nearby'],
              ['Gozo', 'Space and calm, ferry to the main island'],
            ],
          },
        ],
      },
      {
        id: 'life',
        toc: 'Schools, health, banking',
        heading: 'Schools, health and banking',
        blocks: [{ kind: 'p', text: 'English is an official language, so international and private schools teach in English. Most founders take private health insurance. Opening a personal bank account takes longer than in Germany — prepare source-of-funds documents early.' }],
      },
      {
        id: 'checklist',
        toc: '90-day checklist',
        heading: 'Your 90-day checklist',
        blocks: [
          {
            kind: 'steps',
            steps: [
              { heading: 'Exit check', body: 'With a Steuerberater: exit tax, home, company.' },
              { heading: 'Lease in Malta', body: 'Find and sign a long-term lease.' },
              { heading: 'Abmeldung', body: 'Deregister in Germany and give up the German home.' },
              { heading: 'Residence and ID', body: 'Apply with Identità.' },
              { heading: 'Tax registration', body: 'Register and claim non-dom status.' },
              { heading: 'Banking and daily life', body: 'Accounts, insurance, schools, car, utilities.' },
            ],
          },
        ],
      },
    ],
    related: [
      { tag: 'Pillar guide', heading: 'Leaving Germany', to: 'guideLeavingGermany' },
      { tag: 'Pillar guide', heading: 'How residents are taxed', to: 'guideTaxes' },
      { tag: 'Free PDF', heading: 'Download the full checklist', to: 'playbook' },
    ],
    sources: ['Identità', 'Malta Tax and Customs Administration'],
  },
  de: {
    crumb: 'Auswandern nach Malta',
    eyebrow: 'Ratgeber · 18 Min. Lesezeit',
    heading: 'Auswandern nach Malta: der komplette Ratgeber für Gründer',
    lead: 'Aufenthalt, Wohnung, Schulen, Bank und eine 90-Tage-Checkliste – was es wirklich braucht, um Malta zu Ihrem Zuhause und Ihrer Steuerbasis zu machen.',
    author: '[Autor]',
    reviewer: '[Malta-Steuerberater]',
    updated: '2026-10',
    primary: { label: 'Zum Malta-Check', to: 'fitQuiz' },
    shortAnswer: { body: 'EU-Bürger können ohne Visum nach Malta ziehen: Wohnsitz anmelden, ID-Karte beantragen und steuerlich registrieren. Der Steuervorteil funktioniert nur, wenn Sie wirklich dort leben und Ihren Wohnsitz in Deutschland aufgeben.' },
    sections: [
      {
        id: 'fit',
        toc: 'Passt Malta zu Ihnen?',
        heading: 'Passt Malta zu Ihnen?',
        blocks: [{ kind: 'p', text: 'Malta passt zu Gründern, deren Geschäft von überall läuft, die genug verdienen, damit sich eine Firma lohnt, und die in der EU bleiben wollen. Weniger gut passt es, wenn Sie die meisten Wochen in Deutschland sein müssen.' }],
      },
      {
        id: 'residence',
        toc: 'Aufenthalt für EU-Bürger',
        heading: 'Aufenthalt für EU-Bürger',
        blocks: [
          {
            kind: 'p',
            text: 'Als Bürger der EU, des EWR oder der Schweiz haben Sie das Recht, in Malta zu leben. Sie beantragen den Aufenthalt bei Identità mit Mietvertrag, Krankenversicherung und Einkommensnachweis und erhalten eine maltesische ID-Karte. Gründer aus Ländern außerhalb der EU brauchen zuerst eine Aufenthaltserlaubnis – siehe',
            link: { label: 'Wege zum Aufenthalt', to: 'residency', after: '.' },
          },
        ],
      },
      {
        id: 'where',
        toc: 'Wo Sie wohnen können',
        heading: 'Wo Sie wohnen können',
        blocks: [
          {
            kind: 'table',
            head: ['Gegend', 'Gut für'],
            rows: [
              ['Sliema · St Julian’s', 'Uferpromenade, Cafés, Coworking, die meisten Expats'],
              ['Valletta', 'Historische Hauptstadt, nah an den Behörden'],
              ['Swieqi · Ta’ Xbiex', 'Ruhiger, Familien, Schulen in der Nähe'],
              ['Gozo', 'Platz und Ruhe, Fähre zur Hauptinsel'],
            ],
          },
        ],
      },
      {
        id: 'life',
        toc: 'Schulen, Gesundheit, Bank',
        heading: 'Schulen, Gesundheit und Bank',
        blocks: [{ kind: 'p', text: 'Englisch ist Amtssprache, daher unterrichten internationale und private Schulen auf Englisch. Die meisten Gründer schließen eine private Krankenversicherung ab. Ein privates Bankkonto zu eröffnen dauert länger als in Deutschland – bereiten Sie Nachweise zur Herkunft Ihrer Mittel früh vor.' }],
      },
      {
        id: 'checklist',
        toc: '90-Tage-Checkliste',
        heading: 'Ihre 90-Tage-Checkliste',
        blocks: [
          {
            kind: 'steps',
            steps: [
              { heading: 'Wegzugs-Check', body: 'Mit einem Steuerberater: Wegzugsteuer, Wohnung, Firma.' },
              { heading: 'Mietvertrag in Malta', body: 'Eine Wohnung finden und langfristig mieten.' },
              { heading: 'Abmeldung', body: 'In Deutschland abmelden und die deutsche Wohnung aufgeben.' },
              { heading: 'Aufenthalt und ID-Karte', body: 'Bei Identità beantragen.' },
              { heading: 'Steuerliche Registrierung', body: 'Registrieren und den Non-Dom-Status beantragen.' },
              { heading: 'Bank und Alltag', body: 'Konten, Versicherungen, Schulen, Auto, Strom und Wasser.' },
            ],
          },
        ],
      },
    ],
    related: [
      { tag: 'Ratgeber', heading: 'Wegzug aus Deutschland', to: 'guideLeavingGermany' },
      { tag: 'Ratgeber', heading: 'Wie Ansässige besteuert werden', to: 'guideTaxes' },
      { tag: 'Gratis-PDF', heading: 'Die komplette Checkliste herunterladen', to: 'playbook' },
    ],
    sources: ['Identità', 'Malta Tax and Customs Administration'],
  },
} satisfies Localized<GuideCopy>

export const view: View = {
  meta: {
    en: { title: 'Moving to Malta: the complete guide 2026 | Tax.Free', description: 'EU citizens can move to Malta without a visa. Residence, housing, schools, banking and a 90-day checklist for founders making Malta their tax base.' },
    de: { title: 'Auswandern nach Malta: Ratgeber für Gründer 2026 | Tax.Free', description: 'EU-Bürger ziehen ohne Visum nach Malta. Aufenthalt, Wohnen, Schulen, Bank und eine 90-Tage-Checkliste für Gründer, die Malta zur Steuerbasis machen.' },
  },
  Page: ({ locale }) => <GuidePage locale={locale} page="guideMoving" t={copy[locale]} />,
}
