import { KeyValueList, type KeyValue } from '@/components/blocks/KeyValueList'
import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { AudienceCard, AudiencePage, CardSection, GuideSection, PairSection, type Card, type Guide, type Hero } from './AudiencePage'

type Copy = {
  hero: Hero
  setupEyebrow: string
  setupHeading: string
  setupCards: Card[]
  exampleLabel: string
  exampleRows: KeyValue[]
  exampleNote: string
  caught: Card
  guidesHeading: string
  guides: Guide[]
}

const copy = {
  en: {
    hero: {
      variant: 'plain',
      crumb: 'Online entrepreneurs',
      eyebrow: 'For online entrepreneurs',
      heading: 'Malta for agencies, e-commerce and SaaS founders',
      lead: 'Your business already runs from a laptop. Move it — and yourself — to Malta, keep clients and payments running, and pay about 5% on distributed trading profits.',
      primary: { label: 'Calculate my savings', to: 'taxCalculator' },
      secondary: { label: 'Talk to an advisor', to: 'consultation' },
      image: 'Photo: founder working from a Valletta café',
    },
    setupEyebrow: 'Typical setup',
    setupHeading: 'What most online businesses need',
    setupCards: [
      { variant: 'soft', heading: 'Malta Ltd', body: 'Trading company with the 6/7 shareholder refund.' },
      { variant: 'soft', heading: 'VAT and OSS', body: 'For digital products and e-commerce sold to EU consumers.' },
      { variant: 'soft', heading: 'Payments', body: 'Bank or EMI account and payment providers moved to the Malta entity.' },
      { variant: 'soft', heading: 'Substance', body: 'Decisions made in Malta, an office, and a local director where useful.' },
    ],
    exampleLabel: 'Example · €250,000 trading profit',
    exampleRows: [
      { label: 'Corporate tax at 35%', value: '€87,500' },
      { label: 'Refund on distribution (6/7)', value: '−€75,000', accent: true },
      { label: 'Net tax in Malta', value: '€12,500' },
    ],
    exampleNote: 'Before running costs and any home-country tax.',
    caught: {
      variant: 'warn',
      heading: 'Where online founders get caught',
      body: 'Running the company from Germany, staff or a co-founder in Germany creating a permanent establishment, or moving GmbH shares without an exit-tax plan.',
      link: { label: 'Leaving Germany guide', to: 'guideLeavingGermany' },
    },
    guidesHeading: 'Guides for online businesses',
    guides: [
      { tag: 'Company tax', heading: "Malta's 5% explained", to: { article: 'malta-5-percent-tax-explained' } },
      { tag: 'E-commerce', heading: 'Malta for Amazon sellers: VAT, OSS and the 5% structure', to: 'blog' },
      { tag: 'Banking', heading: 'Opening a business bank account in Malta', to: 'blog' },
    ],
  },
  de: {
    hero: {
      variant: 'plain',
      crumb: 'Online-Unternehmer',
      eyebrow: 'Für Online-Unternehmer',
      heading: 'Malta für Agenturen, E-Commerce- und SaaS-Gründer',
      lead: 'Ihr Geschäft läuft schon vom Laptop aus. Ziehen Sie es – und sich selbst – nach Malta um, halten Sie Kunden und Zahlungen am Laufen und zahlen Sie rund 5 % auf ausgeschüttete operative Gewinne.',
      primary: { label: 'Meine Ersparnis berechnen', to: 'taxCalculator' },
      secondary: { label: 'Mit einem Berater sprechen', to: 'consultation' },
      image: 'Foto: Gründer arbeitet in einem Café in Valletta',
    },
    setupEyebrow: 'Typische Struktur',
    setupHeading: 'Was die meisten Online-Unternehmen brauchen',
    setupCards: [
      { variant: 'soft', heading: 'Malta Ltd', body: 'Operative Gesellschaft mit 6/7-Erstattung an den Gesellschafter.' },
      { variant: 'soft', heading: 'Umsatzsteuer und OSS', body: 'Für digitale Produkte und E-Commerce-Verkäufe an Verbraucher in der EU.' },
      { variant: 'soft', heading: 'Zahlungen', body: 'Bank- oder EMI-Konto und Zahlungsanbieter auf die Malta-Gesellschaft umgestellt.' },
      { variant: 'soft', heading: 'Substanz', body: 'Entscheidungen in Malta, ein Büro und – wo sinnvoll – ein lokaler Direktor.' },
    ],
    exampleLabel: 'Beispiel · 250.000 € operativer Gewinn',
    exampleRows: [
      { label: 'Körperschaftsteuer mit 35 %', value: '87.500 €' },
      { label: 'Erstattung bei Ausschüttung (6/7)', value: '−75.000 €', accent: true },
      { label: 'Nettosteuer in Malta', value: '12.500 €' },
    ],
    exampleNote: 'Vor laufenden Kosten und etwaiger Steuer im Heimatland.',
    caught: {
      variant: 'warn',
      heading: 'Wo Online-Gründer in die Falle tappen',
      body: 'Die Firma wird aus Deutschland geführt, Mitarbeiter oder ein Mitgründer in Deutschland begründen eine Betriebsstätte, oder GmbH-Anteile werden ohne Plan für die Wegzugsteuer verlegt.',
      link: { label: 'Ratgeber Wegzug aus Deutschland', to: 'guideLeavingGermany' },
    },
    guidesHeading: 'Ratgeber für Online-Unternehmen',
    guides: [
      { tag: 'Firmensteuer', heading: 'Maltas 5 % erklärt', to: { article: 'malta-5-prozent-steuer-erklaert' } },
      { tag: 'E-Commerce', heading: 'Malta für Amazon-Händler: Umsatzsteuer, OSS und die 5-%-Struktur', to: 'blog' },
      { tag: 'Banking', heading: 'Ein Geschäftskonto in Malta eröffnen', to: 'blog' },
    ],
  },
} satisfies Localized<Copy>

export const view: View = {
  meta: {
    en: {
      title: 'Malta for online entrepreneurs & SaaS | Tax.Free',
      description: 'Agencies, e-commerce and SaaS founders who move to Malta pay about 5% on distributed trading profits. See the typical setup, a worked example and the traps.',
    },
    de: {
      title: 'Malta für Online-Unternehmer & SaaS | Tax.Free',
      description: 'Agenturen, E-Commerce- und SaaS-Gründer zahlen nach dem Umzug nach Malta rund 5 % auf ausgeschüttete Gewinne. Typische Struktur, Rechenbeispiel und Fallstricke.',
    },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <AudiencePage locale={locale} active="forOnlineEntrepreneurs" hero={t.hero}>
        <CardSection eyebrow={t.setupEyebrow} heading={t.setupHeading} cards={t.setupCards} min={260} locale={locale} />
        <PairSection>
          <div className="flex flex-col rounded-[24px] bg-ink px-7 pb-5 pt-7 text-white">
            <div className="pb-3 text-sm font-extrabold uppercase tracking-[0.08em] text-mint">{t.exampleLabel}</div>
            <KeyValueList rows={t.exampleRows} dark />
            <p className="m-0 pt-2.5 text-[13px] text-on-dark-muted">{t.exampleNote}</p>
          </div>
          <AudienceCard card={t.caught} locale={locale} />
        </PairSection>
        <GuideSection heading={t.guidesHeading} guides={t.guides} locale={locale} />
      </AudiencePage>
    )
  },
}
