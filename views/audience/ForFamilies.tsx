import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { AudienceCard, AudiencePage, CardSection, PairSection, type Card, type Hero } from './AudiencePage'

type Copy = {
  hero: Hero
  checklistEyebrow: string
  checklistHeading: string
  checklist: Card[]
  pair: Card[]
}

const copy = {
  en: {
    hero: {
      variant: 'plain',
      crumb: 'Families',
      eyebrow: 'For families',
      heading: 'Moving to Malta with your family',
      lead: 'Schools, housing and healthcare matter as much as tax. We plan the whole move — so it works for everyone, not just the company.',
      primary: { label: 'Plan a family move', to: 'consultation' },
      secondary: { label: 'Moving guide', to: 'guideMoving' },
      image: 'Photo: family on the Sliema promenade',
    },
    checklistEyebrow: 'Family checklist',
    checklistHeading: 'What we sort out for the whole family',
    checklist: [
      { variant: 'soft', heading: 'Schools', body: 'International and private school shortlist, applications and timing.' },
      { variant: 'soft', heading: 'Housing', body: 'Areas near the right school, viewings, lease review.' },
      { variant: 'soft', heading: 'Residence for all', body: 'Registration and ID cards for spouse and children.' },
      { variant: 'soft', heading: 'Healthcare', body: 'Private insurance options and finding a family doctor.' },
    ],
    pair: [
      {
        heading: 'Family ties and German tax',
        body: 'If your spouse or children stay in Germany, your centre of life may stay there too — and with it your tax residence. Moving together keeps it simple.',
        link: { label: 'Read more', to: 'guideLeavingGermany' },
      },
      {
        heading: 'Where families live',
        body: "Sliema, St Julian's, Swieqi, Mellieħa or Gozo — compared by rent, commute and schools.",
        link: { label: 'Where to live in Malta', to: 'blog' },
      },
    ],
  },
  de: {
    hero: {
      variant: 'plain',
      crumb: 'Familien',
      eyebrow: 'Für Familien',
      heading: 'Mit der Familie nach Malta auswandern',
      lead: 'Schulen, Wohnung und Gesundheitsversorgung zählen genauso viel wie Steuern. Wir planen den ganzen Umzug – damit er für alle funktioniert, nicht nur für die Firma.',
      primary: { label: 'Familienumzug planen', to: 'consultation' },
      secondary: { label: 'Ratgeber Auswandern', to: 'guideMoving' },
      image: 'Foto: Familie an der Promenade von Sliema',
    },
    checklistEyebrow: 'Checkliste für Familien',
    checklistHeading: 'Was wir für die ganze Familie regeln',
    checklist: [
      { variant: 'soft', heading: 'Schulen', body: 'Auswahl internationaler und privater Schulen, Bewerbungen und Zeitplan.' },
      { variant: 'soft', heading: 'Wohnen', body: 'Wohngegenden nahe der passenden Schule, Besichtigungen, Prüfung des Mietvertrags.' },
      { variant: 'soft', heading: 'Aufenthalt für alle', body: 'Anmeldung und ID-Karten für Partner und Kinder.' },
      { variant: 'soft', heading: 'Gesundheit', body: 'Private Krankenversicherungen im Vergleich und Suche nach einem Hausarzt.' },
    ],
    pair: [
      {
        heading: 'Familie und deutsche Steuer',
        body: 'Bleiben Partner oder Kinder in Deutschland, kann auch Ihr Lebensmittelpunkt dort bleiben – und damit Ihre steuerliche Ansässigkeit. Gemeinsam umzuziehen macht es einfach.',
        link: { label: 'Mehr erfahren', to: 'guideLeavingGermany' },
      },
      {
        heading: 'Wo Familien wohnen',
        body: "Sliema, St Julian's, Swieqi, Mellieħa oder Gozo – verglichen nach Miete, Arbeitsweg und Schulen.",
        link: { label: 'Wo man in Malta wohnt', to: 'blog' },
      },
    ],
  },
} satisfies Localized<Copy>

export const view: View = {
  meta: {
    en: {
      title: 'Moving to Malta with your family | Tax.Free',
      description: 'Moving to Malta with children? We plan schools, housing, residence cards and healthcare alongside tax — so the move works for the whole family.',
    },
    de: {
      title: 'Mit der Familie nach Malta auswandern | Tax.Free',
      description: 'Mit Kindern nach Malta? Wir planen Schulen, Wohnung, Aufenthaltskarten und Krankenversicherung zusammen mit den Steuern – damit es für alle passt.',
    },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <AudiencePage locale={locale} active="forFamilies" hero={t.hero}>
        <CardSection eyebrow={t.checklistEyebrow} heading={t.checklistHeading} cards={t.checklist} min={260} locale={locale} />
        <PairSection>
          {t.pair.map((c) => (
            <AudienceCard key={c.heading} card={c} locale={locale} />
          ))}
        </PairSection>
      </AudiencePage>
    )
  },
}
