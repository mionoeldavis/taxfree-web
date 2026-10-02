import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { ServicePage, type ServiceCopy } from './ServicePage'

const copy = {
  en: {
    hero: {
      variant: 'soft',
      current: 'Company formation',
      eyebrow: 'Service · Company formation',
      heading: 'Form a Malta company with the substance to make the 5% hold',
      lead: 'Malta Ltd or holding structure, registered office, bank account, directors and the tax setup for shareholder refunds — from one team, at a fixed fee.',
      primary: { label: 'Book a free consultation', to: 'consultation' },
      secondary: { label: 'Estimate yearly costs', to: 'costEstimator' },
    },
    blocks: [
      {
        kind: 'glance',
        facts: {
          heading: 'At a glance',
          rows: [
            { label: 'Setup fee', value: '€[PRICE] fixed' },
            { label: 'Yearly running costs', value: 'from €[PRICE]' },
            { label: 'Time to operational', value: '[X–Y] weeks' },
            { label: 'Minimum share capital', value: '€1,165 (20% paid up)' },
            { label: 'Effective tax on trading profit', value: '5% after refund', accent: true },
          ],
        },
        example: {
          heading: 'How the 5% works',
          rows: [
            { label: 'Trading profit', value: '€100,000' },
            { label: 'Corporate tax at 35%', value: '−€35,000' },
            { label: 'Shareholder refund (6/7)', value: '+€30,000', accent: true },
            { label: 'Net tax', value: '€5,000 · 5%' },
          ],
          link: { label: 'Read the full guide', to: 'guideCompany' },
        },
      },
      {
        kind: 'cards',
        eyebrow: "What's included",
        heading: 'Everything a Malta company needs in year one',
        min: 340,
        cards: [
          { heading: 'Structure design', body: 'Single Ltd or holding plus trading company, chosen on your numbers.' },
          { heading: 'Incorporation', body: 'Memorandum and articles, registration with the Malta Business Registry.' },
          { heading: 'Registered office and secretary', body: 'A Maltese address and a company secretary, as the law requires.' },
          { heading: 'Bank account', body: 'Introductions to Maltese banks and EU payment institutions, KYC prepared.' },
          { heading: 'Tax and VAT registration', body: 'Income tax number, VAT and OSS where you sell to EU consumers.' },
          { heading: 'Substance plan', body: 'Office, directors and decision-making in Malta, documented from day one.' },
        ],
      },
      {
        kind: 'process',
        eyebrow: 'Process',
        heading: 'Six steps to an operating company',
        lead: "Your advisor coordinates each step and tells you what's needed next.",
        aside: {
          variant: 'soft',
          tag: "What you'll need",
          heading: 'Documents per shareholder',
          body: 'Passport, proof of address under three months old, bank reference, source of funds, short business description.',
        },
        steps: [
          { heading: 'Structure call', body: 'We agree the structure, directors and fee.' },
          { heading: 'KYC and documents', body: 'Identity, address and source-of-funds checks.' },
          { heading: 'Incorporation', body: 'Filed with the Malta Business Registry; certificate issued.' },
          { heading: 'Bank account', body: 'Application with a bank or payment institution.' },
          { heading: 'Tax and VAT', body: 'Registrations filed; refund accounts set up.' },
          { heading: 'First-year compliance', body: 'Bookkeeping, audit, tax return and the first refund claim.' },
        ],
      },
      {
        kind: 'faq',
        heading: 'Common questions',
        items: [
          { q: 'Do I need a Maltese director?', a: 'The law does not require one, but the company must be managed and controlled from Malta to be tax resident there. A local director helps prove it.' },
          { q: 'Can I keep my German GmbH?', a: 'Sometimes. Moving or selling it has exit-tax consequences, so we plan it with your Steuerberater first.' },
          { q: 'When is a holding structure worth it?', a: 'When you want profits to stay invested without personal tax, or plan several businesses. We compare both on your numbers.' },
          { q: 'When is the refund paid?', a: 'After the company files its return and pays the tax, and a dividend is declared. Plan for the cash-flow gap.' },
        ],
      },
      {
        kind: 'links',
        heading: 'Related guides',
        links: [
          { tag: 'Company tax', heading: "Malta's 5% explained: how the 6/7 refund works", to: { article: 'malta-5-percent-tax-explained' } },
          { tag: 'Pillar guide', heading: 'The Malta company and the 5% tax rate', to: 'guideCompany' },
          { tag: 'Tool', heading: 'What a Malta company costs per year', to: 'costEstimator' },
        ],
      },
    ],
  },
  de: {
    hero: {
      variant: 'soft',
      current: 'Firmengründung',
      eyebrow: 'Leistung · Firmengründung',
      heading: 'Gründen Sie eine Malta-Firma mit der Substanz, die die 5 % trägt',
      lead: 'Malta Ltd oder Holdingstruktur, Geschäftsadresse, Bankkonto, Direktoren und die steuerliche Einrichtung für die Gesellschaftererstattung – aus einer Hand, zum Festpreis.',
      primary: { label: 'Kostenlose Beratung buchen', to: 'consultation' },
      secondary: { label: 'Jährliche Kosten schätzen', to: 'costEstimator' },
    },
    blocks: [
      {
        kind: 'glance',
        facts: {
          heading: 'Auf einen Blick',
          rows: [
            { label: 'Gründungsgebühr', value: '[PREIS] € fest' },
            { label: 'Laufende Kosten pro Jahr', value: 'ab [PREIS] €' },
            { label: 'Bis zur Betriebsbereitschaft', value: '[X–Y] Wochen' },
            { label: 'Mindeststammkapital', value: '1.165 € (20 % eingezahlt)' },
            { label: 'Effektive Steuer auf operative Gewinne', value: '5 % nach Erstattung', accent: true },
          ],
        },
        example: {
          heading: 'So funktionieren die 5 %',
          rows: [
            { label: 'Operativer Gewinn', value: '100.000 €' },
            { label: 'Körperschaftsteuer 35 %', value: '−35.000 €' },
            { label: 'Erstattung an Gesellschafter (6/7)', value: '+30.000 €', accent: true },
            { label: 'Steuer netto', value: '5.000 € · 5 %' },
          ],
          link: { label: 'Zum vollständigen Ratgeber', to: 'guideCompany' },
        },
      },
      {
        kind: 'cards',
        eyebrow: 'Was enthalten ist',
        heading: 'Alles, was eine Malta-Firma im ersten Jahr braucht',
        min: 340,
        cards: [
          { heading: 'Strukturplanung', body: 'Einzelne Ltd oder Holding plus Betriebsgesellschaft – gewählt anhand Ihrer Zahlen.' },
          { heading: 'Gründung', body: 'Gesellschaftsvertrag und Satzung, Eintragung bei der Malta Business Registry.' },
          { heading: 'Geschäftsadresse und Company Secretary', body: 'Eine maltesische Adresse und ein Company Secretary, wie es das Gesetz verlangt.' },
          { heading: 'Bankkonto', body: 'Kontakte zu maltesischen Banken und EU-Zahlungsinstituten, KYC-Unterlagen vorbereitet.' },
          { heading: 'Steuer- und Umsatzsteuerregistrierung', body: 'Steuernummer, Umsatzsteuer-ID und OSS, wenn Sie an EU-Verbraucher verkaufen.' },
          { heading: 'Substanzplan', body: 'Büro, Direktoren und Entscheidungen in Malta – vom ersten Tag an dokumentiert.' },
        ],
      },
      {
        kind: 'process',
        eyebrow: 'Ablauf',
        heading: 'In sechs Schritten zur operativen Firma',
        lead: 'Ihr Berater koordiniert jeden Schritt und sagt Ihnen, was als Nächstes nötig ist.',
        aside: {
          variant: 'soft',
          tag: 'Was Sie brauchen',
          heading: 'Unterlagen je Gesellschafter',
          body: 'Reisepass, Adressnachweis (nicht älter als drei Monate), Bankreferenz, Herkunft der Mittel, kurze Geschäftsbeschreibung.',
        },
        steps: [
          { heading: 'Strukturgespräch', body: 'Wir legen Struktur, Direktoren und Honorar fest.' },
          { heading: 'KYC und Unterlagen', body: 'Prüfung von Identität, Adresse und Mittelherkunft.' },
          { heading: 'Gründung', body: 'Eintragung bei der Malta Business Registry; Gründungsurkunde ausgestellt.' },
          { heading: 'Bankkonto', body: 'Antrag bei einer Bank oder einem Zahlungsinstitut.' },
          { heading: 'Steuer und Umsatzsteuer', body: 'Registrierungen eingereicht; Erstattungskonten eingerichtet.' },
          { heading: 'Pflichten im ersten Jahr', body: 'Buchhaltung, Abschlussprüfung, Steuererklärung und der erste Erstattungsantrag.' },
        ],
      },
      {
        kind: 'faq',
        heading: 'Häufige Fragen',
        items: [
          { q: 'Brauche ich einen maltesischen Direktor?', a: 'Gesetzlich nicht, aber die Firma muss von Malta aus geführt und kontrolliert werden, um dort steuerlich ansässig zu sein. Ein Direktor vor Ort hilft, das nachzuweisen.' },
          { q: 'Kann ich meine deutsche GmbH behalten?', a: 'Manchmal. Verlegung oder Verkauf haben Folgen für die Wegzugsteuer – deshalb planen wir das zuerst mit Ihrem Steuerberater.' },
          { q: 'Wann lohnt sich eine Holdingstruktur?', a: 'Wenn Gewinne ohne persönliche Steuer investiert bleiben sollen oder Sie mehrere Geschäfte planen. Wir vergleichen beides anhand Ihrer Zahlen.' },
          { q: 'Wann wird die Erstattung ausgezahlt?', a: 'Nachdem die Firma ihre Steuererklärung eingereicht, die Steuer gezahlt und eine Dividende beschlossen hat. Planen Sie die Liquiditätslücke ein.' },
        ],
      },
      {
        kind: 'links',
        heading: 'Passende Ratgeber',
        links: [
          { tag: 'Firmensteuer', heading: 'Maltas 5 % erklärt: So funktioniert die 6/7-Erstattung', to: { article: 'malta-5-prozent-steuer-erklaert' } },
          { tag: 'Grundlagen-Ratgeber', heading: 'Die Malta-Firma und der Steuersatz von 5 %', to: 'guideCompany' },
          { tag: 'Tool', heading: 'Was eine Malta-Firma pro Jahr kostet', to: 'costEstimator' },
        ],
      },
    ],
  },
} satisfies Localized<ServiceCopy>

export const view: View = {
  meta: {
    en: { title: 'Malta company formation at a fixed fee | Tax.Free', description: 'Form a Malta Ltd or holding with real substance: registered office, bank account, tax and VAT setup for the 5% refund system — fixed fee, one team.' },
    de: { title: 'Firma in Malta gründen – zum Festpreis | Tax.Free', description: 'Malta Ltd oder Holding mit echter Substanz gründen: Geschäftsadresse, Bankkonto, Steuer- und USt-Setup für die 5-%-Erstattung – Festpreis, ein Team.' },
  },
  Page: ({ locale }) => <ServicePage locale={locale} pageKey="companyFormation" copy={copy[locale]} />,
}
