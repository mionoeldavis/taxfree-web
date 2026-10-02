import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { ServicePage, type ServiceCopy } from './ServicePage'

const copy = {
  en: {
    hero: {
      variant: 'plain',
      current: 'Relocation',
      eyebrow: 'Service · Relocation',
      heading: 'Relocation to Malta, planned in Germany and finished on the island',
      lead: 'We handle the exit, the paperwork and the practical move — housing, residence, ID card, schools — so your new tax residence actually holds.',
      primary: { label: 'Plan my move', to: 'consultation' },
      secondary: { label: 'Read the moving guide', to: 'guideMoving' },
      image: 'Photo: family arriving at a Sliema apartment',
    },
    blocks: [
      {
        kind: 'cards',
        eyebrow: 'Your move, phase by phase',
        heading: 'From deregistration to Maltese ID card',
        min: 260,
        cards: [
          { variant: 'soft', tag: 'Before you move', heading: 'Exit and housing', body: 'Exit check with a Steuerberater, exit-tax plan for shareholdings, Abmeldung, housing shortlist.' },
          { variant: 'soft', tag: 'First weeks', heading: 'Paperwork', body: 'Lease registered, residence application with Identità, tax registration and non-dom status, bank account.' },
          { variant: 'soft', tag: 'First months', heading: 'Settling in', body: 'ID card, school enrolment, health insurance, car and utilities, company substance in place.' },
          { variant: 'dark', tag: 'Every year after', heading: 'Staying compliant', body: 'Personal return, company audit and refund claims, residence renewals, a check after each budget.' },
        ],
      },
      {
        kind: 'cards',
        min: 380,
        cards: [
          {
            heading: 'Why the exit comes first',
            body: 'If Germany still sees you as resident — a home you keep, family staying behind, management from Germany — you can be taxed in both countries.',
            link: { label: 'Leaving Germany: the full guide', to: 'guideLeavingGermany' },
          },
          { heading: 'Moving with a family?', body: 'We add school shortlists, residence for everyone and housing near the right school.', link: { label: 'Malta for families', to: 'forFamilies' } },
        ],
      },
      {
        kind: 'faq',
        heading: 'Common questions',
        items: [
          { q: 'Do EU citizens need a visa?', a: 'No. You register your residence and receive a Maltese ID card. Non-EU founders need a permit first.' },
          { q: 'Can I keep my flat in Germany?', a: 'Keeping a home available to you can keep you tax resident in Germany. We review this case by case.' },
          { q: 'How much does it cost to live in Malta?', a: 'Rent depends heavily on area. See our yearly cost-of-living study for current figures.' },
          { q: 'Do I have to speak Maltese?', a: 'No. English is an official language, used by authorities, banks and schools.' },
        ],
      },
    ],
  },
  de: {
    hero: {
      variant: 'plain',
      current: 'Umzug',
      eyebrow: 'Leistung · Umzug',
      heading: 'Umzug nach Malta: in Deutschland geplant, auf der Insel abgeschlossen',
      lead: 'Wir kümmern uns um den Wegzug, die Formalitäten und den praktischen Umzug – Wohnung, Aufenthalt, ID-Karte, Schulen –, damit Ihre neue steuerliche Ansässigkeit wirklich trägt.',
      primary: { label: 'Meinen Umzug planen', to: 'consultation' },
      secondary: { label: 'Zum Auswanderungs-Ratgeber', to: 'guideMoving' },
      image: 'Foto: Familie bei der Ankunft in einer Wohnung in Sliema',
    },
    blocks: [
      {
        kind: 'cards',
        eyebrow: 'Ihr Umzug, Phase für Phase',
        heading: 'Von der Abmeldung bis zur maltesischen ID-Karte',
        min: 260,
        cards: [
          { variant: 'soft', tag: 'Vor dem Umzug', heading: 'Wegzug und Wohnung', body: 'Wegzugs-Check mit einem Steuerberater, Plan zur Wegzugsteuer für Beteiligungen, Abmeldung, Wohnungsauswahl.' },
          { variant: 'soft', tag: 'Erste Wochen', heading: 'Formalitäten', body: 'Mietvertrag registriert, Aufenthaltsantrag bei Identità, steuerliche Anmeldung und Non-Dom-Status, Bankkonto.' },
          { variant: 'soft', tag: 'Erste Monate', heading: 'Ankommen', body: 'ID-Karte, Schulanmeldung, Krankenversicherung, Auto und Versorger, Substanz der Firma vor Ort.' },
          { variant: 'dark', tag: 'Jedes Jahr danach', heading: 'Auf der sicheren Seite bleiben', body: 'Persönliche Steuererklärung, Abschlussprüfung und Erstattungsanträge der Firma, Verlängerung des Aufenthalts, ein Check nach jedem Haushalt.' },
        ],
      },
      {
        kind: 'cards',
        min: 380,
        cards: [
          {
            heading: 'Warum der Wegzug zuerst kommt',
            body: 'Sieht Deutschland Sie weiter als ansässig – eine behaltene Wohnung, Familie, die bleibt, Geschäftsleitung aus Deutschland –, können Sie in beiden Ländern besteuert werden.',
            link: { label: 'Wegzug aus Deutschland: der ganze Ratgeber', to: 'guideLeavingGermany' },
          },
          { heading: 'Umzug mit Familie?', body: 'Wir ergänzen eine Schulauswahl, den Aufenthalt für alle und eine Wohnung in der Nähe der passenden Schule.', link: { label: 'Malta für Familien', to: 'forFamilies' } },
        ],
      },
      {
        kind: 'faq',
        heading: 'Häufige Fragen',
        items: [
          { q: 'Brauchen EU-Bürger ein Visum?', a: 'Nein. Sie melden Ihren Wohnsitz an und erhalten eine maltesische ID-Karte. Gründer aus Nicht-EU-Ländern brauchen zuerst eine Aufenthaltserlaubnis.' },
          { q: 'Kann ich meine Wohnung in Deutschland behalten?', a: 'Eine Wohnung, die Ihnen weiter zur Verfügung steht, kann Sie in Deutschland steuerlich ansässig halten. Das prüfen wir im Einzelfall.' },
          { q: 'Was kostet das Leben in Malta?', a: 'Die Miete hängt stark von der Gegend ab. Aktuelle Zahlen finden Sie in unserer jährlichen Studie zu den Lebenshaltungskosten.' },
          { q: 'Muss ich Maltesisch sprechen?', a: 'Nein. Englisch ist Amtssprache und wird von Behörden, Banken und Schulen verwendet.' },
        ],
      },
    ],
  },
} satisfies Localized<ServiceCopy>

export const view: View = {
  meta: {
    en: { title: 'Relocation to Malta for founders | Tax.Free', description: 'Move to Malta with a plan: exit check with a Steuerberater, housing, residence, ID card, schools and non-dom status — so your new tax residence holds.' },
    de: { title: 'Umzug nach Malta für Gründer | Tax.Free', description: 'Nach Malta ziehen mit Plan: Wegzugs-Check mit Steuerberater, Wohnung, Aufenthalt, ID-Karte, Schulen und Non-Dom-Status – damit die Ansässigkeit trägt.' },
  },
  Page: ({ locale }) => <ServicePage locale={locale} pageKey="relocation" copy={copy[locale]} />,
}
