import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { AudienceCard, AudiencePage, CardSection, GuideSection, PairSection, type Card, type Guide, type Hero } from './AudiencePage'

type Copy = {
  hero: Hero
  waysEyebrow: string
  waysHeading: string
  ways: Card[]
  check: Card
  numbers: Card
  guidesHeading: string
  guides: Guide[]
}

const copy = {
  en: {
    hero: {
      variant: 'plain',
      crumb: 'Freelancers & consultants',
      eyebrow: 'For freelancers and consultants',
      heading: 'Malta for freelancers and consultants: worth it, or not?',
      lead: 'For solo experts the real question is whether your profit carries the cost of a company. We run that comparison honestly before anything is set up.',
      primary: { label: 'Take the 2-minute fit quiz', to: 'fitQuiz' },
      secondary: { label: 'Talk to an advisor', to: 'consultation' },
      image: 'Photo: consultant on a video call, sea view',
    },
    waysEyebrow: 'Two ways to work from Malta',
    waysHeading: 'Self-employed or through a company',
    ways: [
      { tag: 'Best for lower profits', heading: 'Self-employed', body: "Taxed at Malta's progressive personal rates, up to 35%. Low admin and low running costs." },
      { variant: 'accent', tag: 'Best once profit clearly exceeds costs', heading: 'Malta Ltd', body: '35% corporate tax, 6/7 refunded on distribution: about 5% effective. Audit, accounting and substance add yearly costs.' },
    ],
    check: {
      variant: 'soft',
      heading: 'Check before you move',
      body: 'Clients who need you on site in Germany, contracts that name you personally rather than your company, and whether yearly costs eat most of the saving.',
    },
    numbers: {
      heading: 'See the numbers for yourself',
      body: 'Our cost estimator lists every yearly fee for a Malta company. Compare it with the calculator result.',
      link: { label: 'Open the cost estimator', to: 'costEstimator' },
    },
    guidesHeading: 'Guides for consultants',
    guides: [
      { tag: 'Segment', heading: 'Malta for agencies and consultants: invoicing clients from abroad', to: 'blog' },
      { tag: 'Costs', heading: 'What a Malta company really costs per year', to: 'costEstimator' },
      { tag: 'Pillar guide', heading: 'Malta taxes for individuals', to: 'guideTaxes' },
    ],
  },
  de: {
    hero: {
      variant: 'plain',
      crumb: 'Freelancer & Berater',
      eyebrow: 'Für Freelancer und Berater',
      heading: 'Malta für Freelancer und Berater: Lohnt es sich – oder nicht?',
      lead: 'Für Solo-Experten ist die eigentliche Frage, ob Ihr Gewinn die Kosten einer Firma trägt. Diesen Vergleich rechnen wir ehrlich durch, bevor irgendetwas gegründet wird.',
      primary: { label: 'Den 2-Minuten-Malta-Check machen', to: 'fitQuiz' },
      secondary: { label: 'Mit einem Berater sprechen', to: 'consultation' },
      image: 'Foto: Berater im Videocall mit Meerblick',
    },
    waysEyebrow: 'Zwei Wege, von Malta aus zu arbeiten',
    waysHeading: 'Selbstständig oder über eine Firma',
    ways: [
      { tag: 'Ideal bei geringeren Gewinnen', heading: 'Selbstständig', body: 'Besteuert nach Maltas progressivem Einkommensteuertarif, bis zu 35 %. Wenig Verwaltung und geringe laufende Kosten.' },
      { variant: 'accent', tag: 'Ideal, sobald der Gewinn die Kosten klar übersteigt', heading: 'Malta Ltd', body: '35 % Körperschaftsteuer, 6/7 werden bei Ausschüttung erstattet: effektiv rund 5 %. Prüfung, Buchhaltung und Substanz verursachen jährliche Kosten.' },
    ],
    check: {
      variant: 'soft',
      heading: 'Vor dem Umzug prüfen',
      body: 'Kunden, die Sie vor Ort in Deutschland brauchen, Verträge, die Sie persönlich statt Ihrer Firma nennen, und ob die jährlichen Kosten den Großteil der Ersparnis auffressen.',
    },
    numbers: {
      heading: 'Rechnen Sie selbst nach',
      body: 'Unser Kostenrechner listet jede jährliche Gebühr einer Malta-Firma auf. Vergleichen Sie sie mit dem Ergebnis des Steuerrechners.',
      link: { label: 'Zum Kostenrechner', to: 'costEstimator' },
    },
    guidesHeading: 'Ratgeber für Berater',
    guides: [
      { tag: 'Zielgruppe', heading: 'Malta für Agenturen und Berater: Kunden aus dem Ausland in Rechnung stellen', to: 'blog' },
      { tag: 'Kosten', heading: 'Was eine Malta-Firma pro Jahr wirklich kostet', to: 'costEstimator' },
      { tag: 'Grundlagen-Ratgeber', heading: 'Steuern in Malta für Privatpersonen', to: 'guideTaxes' },
    ],
  },
} satisfies Localized<Copy>

export const view: View = {
  meta: {
    en: {
      title: 'Malta for freelancers & consultants | Tax.Free',
      description: 'Is Malta worth it for freelancers? It depends on whether your profit carries the cost of a company. Compare self-employment with a Malta Ltd, honestly.',
    },
    de: {
      title: 'Malta für Freelancer & Berater | Tax.Free',
      description: 'Lohnt sich Malta für Freelancer? Das hängt davon ab, ob Ihr Gewinn die Kosten einer Firma trägt. Selbstständigkeit und Malta Ltd ehrlich verglichen.',
    },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <AudiencePage locale={locale} active="forFreelancers" hero={t.hero}>
        <CardSection eyebrow={t.waysEyebrow} heading={t.waysHeading} cards={t.ways} min={380} gap="gap-5" locale={locale} />
        <PairSection>
          <AudienceCard card={t.check} locale={locale} />
          <AudienceCard card={t.numbers} locale={locale} />
        </PairSection>
        <GuideSection heading={t.guidesHeading} guides={t.guides} locale={locale} />
      </AudiencePage>
    )
  },
}
