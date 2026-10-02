import { ButtonLink } from '@/components/blocks/ButtonLink'
import { DataTable } from '@/components/blocks/DataTable'
import { FaqList } from '@/components/blocks/FaqItem'
import { FeatureCard } from '@/components/blocks/FeatureCard'
import { LinkCard } from '@/components/blocks/LinkCard'
import { PageHero } from '@/components/blocks/PageHero'
import { Grid, Section } from '@/components/blocks/Section'
import { SectionHeading } from '@/components/blocks/SectionHeading'
import { TaxCalculator } from '@/components/islands/TaxCalculator'
import { CtaBand } from '@/components/layout/CtaBand'
import { formatEur, formatPercent, type Localized } from '@/lib/i18n'
import { href, type PageKey } from '@/lib/routes'
import { compare } from '@/lib/tax'
import type { View } from '../types'

const EXAMPLE_PROFIT = 250_000
const EXAMPLE_HEBESATZ = 400

const copy = {
  en: {
    tools: 'Tools',
    crumb: 'Tax calculator',
    eyebrow: 'Free tool',
    heading: 'Malta vs Germany: tax on fully distributed company profit',
    lead: 'Compare a German GmbH with a Malta Ltd when all profit is paid out to you. Every step of the calculation is shown below.',
    breakdown: 'Get a personal breakdown',
    addCosts: 'Add running costs',
    methodEyebrow: 'Method',
    methodHeading: 'How the calculator works',
    methodLead: 'The same formulas run in the calculator above. All profit is paid out to you as a dividend.',
    deHeading: 'Germany (GmbH)',
    deSteps: [
      'Corporate tax + Soli: 15.825% of profit.',
      'Trade tax: 3.5% × the municipal Hebesatz, applied to profit.',
      'Dividend tax: 26.375% on what is left after corporate and trade tax.',
      'Total tax = corporate tax + trade tax + dividend tax.',
    ],
    mtHeading: 'Malta (Ltd)',
    mtSteps: [
      'Corporate tax: 35% of profit.',
      'Shareholder refund: 6/7 of the tax paid comes back when trading profit is distributed.',
      'Total tax = corporate tax − refund, which leaves 5% of profit.',
    ],
    exampleEyebrow: 'Worked example',
    exampleHeading: (profit: string, hebe: string) => `${profit} profit at a ${hebe} Hebesatz`,
    exampleCaption: 'Worked example: Germany vs Malta tax step by step',
    head: ['Step', 'Amount'],
    rows: {
      kst: 'Germany: corporate tax + Soli (15.825%)',
      gew: (h: string) => `Germany: trade tax (3.5% × ${h})`,
      abg: (d: string) => `Germany: dividend tax 26.375% on ${d}`,
      deTotal: (r: string) => `Germany: total tax (${r})`,
      mtCorp: 'Malta: corporate tax at 35%',
      mtRefund: 'Malta: shareholder refund (6/7)',
      mtTotal: (r: string) => `Malta: total tax (${r})`,
      difference: 'Difference per year, before running costs',
    },
    exampleNote: 'Indicative only. Excludes Malta running costs, German exit tax and personal circumstances. Not tax advice.',
    linksHeading: 'Keep reading',
    links: [
      { tag: 'How it works', heading: 'The Malta refund system explained', page: 'guideCompany' },
      { tag: 'Before you move', heading: 'What Germany still taxes', page: 'guideLeavingGermany' },
      { tag: 'Next step', heading: 'Is Malta right for me? Take the quiz', page: 'fitQuiz' },
    ] as { tag: string; heading: string; page: PageKey }[],
    faqEyebrow: 'FAQ',
    faqHeading: 'Questions about the calculator',
    faqs: [
      { q: 'Why does Malta come out at 5%?', a: 'The Malta company pays 35% corporate tax. When it distributes trading profit, the shareholder reclaims 6/7 of that tax, so 5% of the profit remains as tax.' },
      { q: 'What does the Hebesatz change?', a: 'German trade tax is 3.5% of profit multiplied by the municipal Hebesatz. 400% is common; large cities are often higher, which raises the German total.' },
      { q: 'What does the calculator leave out?', a: 'It assumes trading profit, full distribution, no church tax, a Malta company run from Malta and you resident there as a non-dom. It excludes Malta running costs, German exit tax and personal circumstances.' },
      { q: 'Does the saving apply if I stay in Germany?', a: 'Usually not. If you remain German-resident, CFC rules and the place of management can pull the profits back into German tax. The structure works when you really move.' },
    ],
  },
  de: {
    tools: 'Tools',
    crumb: 'Steuerrechner',
    eyebrow: 'Kostenloses Tool',
    heading: 'Malta oder Deutschland: Steuer auf voll ausgeschüttete Firmengewinne',
    lead: 'Vergleichen Sie eine deutsche GmbH mit einer Malta Ltd, wenn der gesamte Gewinn an Sie ausgeschüttet wird. Jeder Rechenschritt steht unten.',
    breakdown: 'Persönliche Auswertung anfragen',
    addCosts: 'Laufende Kosten hinzufügen',
    methodEyebrow: 'Methode',
    methodHeading: 'So rechnet der Steuerrechner',
    methodLead: 'Dieselben Formeln laufen im Rechner oben. Der gesamte Gewinn wird an Sie als Dividende ausgeschüttet.',
    deHeading: 'Deutschland (GmbH)',
    deSteps: [
      'Körperschaftsteuer + Soli: 15,825 % des Gewinns.',
      'Gewerbesteuer: 3,5 % × Hebesatz der Gemeinde, angewendet auf den Gewinn.',
      'Abgeltungsteuer: 26,375 % auf den Betrag, der nach Körperschaft- und Gewerbesteuer bleibt.',
      'Gesamtsteuer = Körperschaftsteuer + Gewerbesteuer + Abgeltungsteuer.',
    ],
    mtHeading: 'Malta (Ltd)',
    mtSteps: [
      'Körperschaftsteuer: 35 % des Gewinns.',
      'Erstattung an den Gesellschafter: 6/7 der gezahlten Steuer fließen bei Ausschüttung operativer Gewinne zurück.',
      'Gesamtsteuer = Körperschaftsteuer − Erstattung, es bleiben 5 % des Gewinns.',
    ],
    exampleEyebrow: 'Rechenbeispiel',
    exampleHeading: (profit: string, hebe: string) => `${profit} Gewinn bei ${hebe} Hebesatz`,
    exampleCaption: 'Rechenbeispiel: Steuer in Deutschland und Malta Schritt für Schritt',
    head: ['Schritt', 'Betrag'],
    rows: {
      kst: 'Deutschland: Körperschaftsteuer + Soli (15,825 %)',
      gew: (h: string) => `Deutschland: Gewerbesteuer (3,5 % × ${h})`,
      abg: (d: string) => `Deutschland: Abgeltungsteuer 26,375 % auf ${d}`,
      deTotal: (r: string) => `Deutschland: Gesamtsteuer (${r})`,
      mtCorp: 'Malta: Körperschaftsteuer 35 %',
      mtRefund: 'Malta: Erstattung an Gesellschafter (6/7)',
      mtTotal: (r: string) => `Malta: Gesamtsteuer (${r})`,
      difference: 'Differenz pro Jahr, vor laufenden Kosten',
    },
    exampleNote: 'Nur Richtwerte. Ohne laufende Kosten in Malta, deutsche Wegzugsteuer und persönliche Umstände. Keine Steuerberatung.',
    linksHeading: 'Weiterlesen',
    links: [
      { tag: 'So funktioniert es', heading: 'Das Erstattungssystem in Malta erklärt', page: 'guideCompany' },
      { tag: 'Vor dem Umzug', heading: 'Was Deutschland weiter besteuert', page: 'guideLeavingGermany' },
      { tag: 'Nächster Schritt', heading: 'Passt Malta zu mir? Zum Malta-Check', page: 'fitQuiz' },
    ] as { tag: string; heading: string; page: PageKey }[],
    faqEyebrow: 'FAQ',
    faqHeading: 'Fragen zum Steuerrechner',
    faqs: [
      { q: 'Warum ergibt Malta 5 %?', a: 'Die Malta-Firma zahlt 35 % Körperschaftsteuer. Schüttet sie operative Gewinne aus, erhält der Gesellschafter 6/7 dieser Steuer zurück – es bleiben 5 % des Gewinns als Steuer.' },
      { q: 'Was bewirkt der Hebesatz?', a: 'Die deutsche Gewerbesteuer beträgt 3,5 % des Gewinns multipliziert mit dem Hebesatz der Gemeinde. 400 % ist üblich; Großstädte liegen oft darüber, was die deutsche Gesamtsteuer erhöht.' },
      { q: 'Was berücksichtigt der Rechner nicht?', a: 'Er geht von operativem Gewinn, Vollausschüttung, keiner Kirchensteuer, einer von Malta aus geführten Firma und Ihrer Ansässigkeit dort als Non-Dom aus. Laufende Kosten in Malta, die deutsche Wegzugsteuer und persönliche Umstände sind nicht enthalten.' },
      { q: 'Gilt die Ersparnis, wenn ich in Deutschland bleibe?', a: 'Meist nicht. Bleiben Sie in Deutschland ansässig, können Hinzurechnungsbesteuerung und Ort der Geschäftsleitung die Gewinne zurück in die deutsche Steuer ziehen. Die Struktur funktioniert, wenn Sie wirklich umziehen.' },
    ],
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: {
      title: 'Malta vs Germany tax calculator | Tax.Free',
      description: 'Compare tax on fully distributed profit: German GmbH vs Malta Ltd. Every step shown — corporate, trade and dividend tax vs 35% with a 6/7 refund.',
    },
    de: {
      title: 'Steuerrechner Malta vs. Deutschland | Tax.Free',
      description: 'Vergleichen Sie die Steuer auf voll ausgeschüttete Gewinne: GmbH gegen Malta Ltd – jeder Schritt sichtbar, von der Gewerbesteuer bis zur 6/7-Erstattung.',
    },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    const eur = (n: number) => formatEur(n, locale)
    const pct = (n: number) => formatPercent(n * 100, locale)
    const hebe = formatPercent(EXAMPLE_HEBESATZ, locale, 0)
    const { germany: de, malta: mt, difference } = compare(EXAMPLE_PROFIT, EXAMPLE_HEBESATZ)
    const rows = [
      [t.rows.kst, eur(de.corporateTax)],
      [t.rows.gew(hebe), eur(de.tradeTax)],
      [t.rows.abg(eur(de.dividend)), eur(de.dividendTax)],
      [t.rows.deTotal(pct(de.rate)), eur(de.total)],
      [t.rows.mtCorp, eur(mt.corporateTax)],
      [t.rows.mtRefund, `−${eur(mt.refund)}`],
      [t.rows.mtTotal(pct(mt.rate)), eur(mt.total)],
      [t.rows.difference, eur(difference)],
    ]
    return (
      <>
        <PageHero
          locale={locale}
          variant="plain"
          trail={[{ label: t.tools, href: href('taxCalculator', locale) }]}
          current={t.crumb}
          currentHref={href('taxCalculator', locale)}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
        />

        <Section space="sm" className="flex flex-col gap-4">
          <TaxCalculator locale={locale} />
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={href('consultation', locale)} className="px-[22px] py-[15px]">
              {t.breakdown}
            </ButtonLink>
            <ButtonLink href={href('costEstimator', locale)} variant="secondary" className="px-[22px] py-[15px]">
              {t.addCosts}
            </ButtonLink>
          </div>
        </Section>

        <Section className="flex flex-col gap-8">
          <SectionHeading eyebrow={t.methodEyebrow} heading={t.methodHeading} lead={t.methodLead} />
          <Grid min={360} gap="gap-5">
            <FeatureCard heading={t.deHeading} body={<ol className="m-0 flex flex-col gap-2 pl-5">{t.deSteps.map((s) => <li key={s}>{s}</li>)}</ol>} />
            <FeatureCard variant="soft" heading={t.mtHeading} body={<ol className="m-0 flex flex-col gap-2 pl-5">{t.mtSteps.map((s) => <li key={s}>{s}</li>)}</ol>} />
          </Grid>
        </Section>

        <Section space="lg" className="flex flex-col gap-6">
          <SectionHeading eyebrow={t.exampleEyebrow} heading={t.exampleHeading(eur(EXAMPLE_PROFIT), hebe)} />
          <DataTable head={t.head} rows={rows} highlight={[3, 6, 7]} caption={t.exampleCaption} />
          <p className="m-0 text-[13px] leading-relaxed text-muted">{t.exampleNote}</p>
        </Section>

        <Section className="flex flex-col gap-8" labelledBy="tax-faq-heading">
          <SectionHeading id="tax-faq-heading" eyebrow={t.faqEyebrow} heading={t.faqHeading} />
          <FaqList items={t.faqs} columns />
        </Section>

        <Section space="lg" className="flex flex-col gap-6" labelledBy="tax-links-heading">
          <h2 id="tax-links-heading" className="sr-only">
            {t.linksHeading}
          </h2>
          <Grid min={320}>
            {t.links.map((l) => (
              <LinkCard key={l.heading} tag={l.tag} heading={l.heading} href={href(l.page, locale)} />
            ))}
          </Grid>
        </Section>

        <CtaBand locale={locale} />
      </>
    )
  },
}
