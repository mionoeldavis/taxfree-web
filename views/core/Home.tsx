import Link from 'next/link'
import { ButtonLink } from '@/components/blocks/ButtonLink'
import { CheckIcon, CheckList } from '@/components/blocks/CheckList'
import { FeatureCard } from '@/components/blocks/FeatureCard'
import { LinkCard } from '@/components/blocks/LinkCard'
import { Grid, Section } from '@/components/blocks/Section'
import { SectionHeading } from '@/components/blocks/SectionHeading'
import { FaqAccordion } from '@/components/islands/FaqAccordion'
import { MaltaRateCalculator } from '@/components/islands/MaltaRateCalculator'
import { CtaBand } from '@/components/layout/CtaBand'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqSchema } from '@/components/seo/schema'
import type { Localized } from '@/lib/i18n'
import { articleHref, href, type PageKey } from '@/lib/routes'
import { ui } from '@/lib/ui'
import type { View } from '../types'

type Plan = { name: string; price: string; per: string; audience: string; items: string[]; cta: string; recommended?: string }

const copy = {
  en: {
    reviewedBadge: 'Reviewed by [licensed Malta accountant]',
    heading: "See what you'd save in Malta. Then decide.",
    lead: 'An honest comparison for founders in Germany, Austria and Switzerland — including setup costs, running costs and the home-country rules that still apply.',
    bullets: ['Company, residency and exit planning from one team', 'Fixed fees, published on this page', 'We tell you when Malta is not worth it'],
    reviewedBy: 'Every case reviewed by',
    reviewers: ['[Malta-warranted accountant]', '[German Steuerberater]', '[Malta advocate]'],
    howEyebrow: 'How it works',
    howHeading: 'From first call to Maltese ID card in four steps',
    steps: [
      ['Free assessment', 'A 30-minute call. We check your numbers and tell you honestly whether Malta is worth it.'],
      ['Exit check', 'With a German Steuerberater: exit tax, CFC rules, home and family ties.'],
      ['Company and bank', 'Malta Ltd formed, account opened, office and directors in place.'],
      ['Move in', 'Residence registration, ID card, non-dom status, housing and schools.'],
    ],
    step: 'Step',
    fitEyebrow: 'Honest fit check',
    fitHeading: 'Is Malta right for you?',
    fitYes: 'A good fit if you…',
    fitYesItems: ['run a business that works from anywhere', 'earn enough profit to cover yearly running costs many times over', 'are ready to actually live in Malta', 'want EU stability, the euro and English'],
    fitNo: 'Probably not, if you…',
    fitNoItems: ['want to keep living in Germany', 'are looking for a letterbox company without substance', 'expect zero tax with zero paperwork', 'have profits too small to justify the costs'],
    pricingEyebrow: 'Pricing',
    pricingHeading: 'Fixed fees. No percentage of your savings.',
    plans: [
      { name: 'Company', price: '€[PRICE]', per: ' setup + €[PRICE]/yr', audience: 'For founders who already live in Malta or are moving on their own.', items: ['Malta Ltd formation', 'Registered office and company secretary', 'Bank account support', 'Accounting, audit and refund claims'], cta: 'Choose Company' },
      { name: 'Relocation', price: '€[PRICE]', per: ' setup + €[PRICE]/yr', audience: 'For founders moving themselves and their business.', items: ['Everything in Company', 'Exit check with partner Steuerberater', 'Residence registration and ID card', 'Non-dom setup', 'Housing and school shortlist'], cta: 'Choose Relocation', recommended: 'Recommended' },
      { name: 'Family', price: '€[PRICE]', per: ' setup + €[PRICE]/yr', audience: 'For families and founders with holdings or several companies.', items: ['Everything in Relocation', 'Spouse and children included', 'Holding and trading structure', 'Dedicated advisor'], cta: 'Talk to us' },
    ] satisfies Plan[],
    deEyebrow: 'Leaving Germany',
    deHeading: 'The 5% only works if Germany lets go. We check that first.',
    deCards: [
      ['Wegzugsteuer', 'Moving with shares in a GmbH can trigger tax on unrealised gains.'],
      ['Hinzurechnungsbesteuerung', 'Stay German-resident and low-taxed company profits can be taxed in Germany.'],
      ['Erweiterte beschränkte Steuerpflicht', 'German citizens moving to low-tax countries can stay partly taxable for 10 years.'],
      ['Wohnsitz und Ansässigkeit', 'Keeping a home in Germany can keep you fully taxable there.'],
    ],
    readGuide: 'Read the guide',
    faqEyebrow: 'FAQ',
    faqHeading: 'Questions founders ask first',
    faqLead: 'Still unsure? Ask us directly in a free 30-minute call.',
    bookCall: 'Book a call',
    faqs: [
      { q: 'Is the 5% rate legal?', a: 'Yes. It comes from Malta’s full imputation and refund system, written into Maltese law. The company pays 35%; the shareholder reclaims 6/7 of it on distributed trading profits.' },
      { q: 'Can I stay in Germany and just open a Malta company?', a: 'Usually that saves nothing. If you remain German-resident, CFC rules and the place of management can pull the profits back into German tax. The structure works when you really move.' },
      { q: 'Do I have to live in Malta?', a: 'Yes. You make Malta your home and give up residence in your old country. We plan home, days and remaining ties together with your Steuerberater.' },
      { q: 'What is non-dom status?', a: 'Residents not domiciled in Malta pay tax on Malta income and on foreign income only when it is brought to Malta. Foreign capital gains are exempt. A €5,000 minimum tax applies if foreign income is €35,000 or more.' },
      { q: 'What about the German exit tax?', a: 'Moving abroad with a shareholding of 1% or more in a corporation can trigger German tax on unrealised gains. It has to be planned before you deregister.' },
      { q: 'How long does setup take?', a: '[X–Y weeks] for the company and bank account. Residence registration follows after you arrive.' },
    ],
    guidesEyebrow: 'Guides',
    guidesHeading: 'Learn before you call',
    allGuides: 'All guides',
    guideCards: [
      { tag: 'Company tax · 7 min', heading: "Malta's 5% explained: how the 6/7 refund really works", article: 'malta-5-percent-tax-explained' },
      { tag: 'Leaving Germany · 9 min', heading: 'Wegzugsteuer: what Germany taxes when you move your GmbH', page: 'guideLeavingGermany' },
      { tag: 'Costs · 6 min', heading: 'What a Malta company really costs per year', page: 'costEstimator' },
    ] as { tag: string; heading: string; article?: string; page?: PageKey }[],
  },
  de: {
    reviewedBadge: 'Geprüft von [zugelassener Steuerberater in Malta]',
    heading: 'Sehen, was Sie in Malta sparen. Dann entscheiden.',
    lead: 'Ein ehrlicher Vergleich für Gründer in Deutschland, Österreich und der Schweiz – inklusive Gründungskosten, laufender Kosten und der Regeln im Heimatland, die weiter gelten.',
    bullets: ['Firma, Aufenthalt und Wegzugsplanung aus einer Hand', 'Festpreise, veröffentlicht auf dieser Seite', 'Wir sagen Ihnen, wenn sich Malta nicht lohnt'],
    reviewedBy: 'Jeder Fall geprüft von',
    reviewers: ['[In Malta zugelassener Steuerberater]', '[Deutscher Steuerberater]', '[Rechtsanwalt in Malta]'],
    howEyebrow: 'So funktioniert es',
    howHeading: 'Vom ersten Gespräch zur maltesischen ID-Karte in vier Schritten',
    steps: [
      ['Kostenlose Ersteinschätzung', 'Ein 30-Minuten-Gespräch. Wir prüfen Ihre Zahlen und sagen ehrlich, ob sich Malta lohnt.'],
      ['Wegzugs-Check', 'Mit einem deutschen Steuerberater: Wegzugsteuer, Hinzurechnungsbesteuerung, Wohnsitz und Familie.'],
      ['Firma und Bank', 'Malta Ltd gegründet, Konto eröffnet, Büro und Direktoren vor Ort.'],
      ['Einziehen', 'Wohnsitzanmeldung, ID-Karte, Non-Dom-Status, Wohnung und Schulen.'],
    ],
    step: 'Schritt',
    fitEyebrow: 'Ehrlicher Check',
    fitHeading: 'Passt Malta zu Ihnen?',
    fitYes: 'Passt gut, wenn Sie …',
    fitYesItems: ['ein Geschäft führen, das von überall funktioniert', 'genug Gewinn machen, um die jährlichen Kosten um ein Vielfaches zu decken', 'bereit sind, wirklich in Malta zu leben', 'EU-Stabilität, den Euro und Englisch wollen'],
    fitNo: 'Eher nicht, wenn Sie …',
    fitNoItems: ['weiter in Deutschland leben wollen', 'eine Briefkastenfirma ohne Substanz suchen', 'null Steuern ohne Papierkram erwarten', 'zu wenig Gewinn für die Kosten haben'],
    pricingEyebrow: 'Preise',
    pricingHeading: 'Festpreise. Kein Prozentsatz Ihrer Ersparnis.',
    plans: [
      { name: 'Firma', price: '[PREIS] €', per: ' Gründung + [PREIS] €/Jahr', audience: 'Für Gründer, die schon in Malta leben oder den Umzug selbst organisieren.', items: ['Gründung der Malta Ltd', 'Geschäftsadresse und Company Secretary', 'Unterstützung bei der Kontoeröffnung', 'Buchhaltung, Prüfung und Erstattungsanträge'], cta: 'Firma wählen' },
      { name: 'Umzug', price: '[PREIS] €', per: ' Gründung + [PREIS] €/Jahr', audience: 'Für Gründer, die mit sich und ihrem Geschäft umziehen.', items: ['Alles aus „Firma“', 'Wegzugs-Check mit Partner-Steuerberater', 'Wohnsitzanmeldung und ID-Karte', 'Einrichtung des Non-Dom-Status', 'Auswahl an Wohnungen und Schulen'], cta: 'Umzug wählen', recommended: 'Empfohlen' },
      { name: 'Familie', price: '[PREIS] €', per: ' Gründung + [PREIS] €/Jahr', audience: 'Für Familien und Gründer mit Holding oder mehreren Firmen.', items: ['Alles aus „Umzug“', 'Partner und Kinder inklusive', 'Holding- und Betriebsstruktur', 'Fester Ansprechpartner'], cta: 'Sprechen Sie uns an' },
    ] satisfies Plan[],
    deEyebrow: 'Wegzug aus Deutschland',
    deHeading: 'Die 5 % funktionieren nur, wenn Deutschland loslässt. Das prüfen wir zuerst.',
    deCards: [
      ['Wegzugsteuer', 'Wer mit GmbH-Anteilen wegzieht, kann Steuer auf nicht realisierte Gewinne auslösen.'],
      ['Hinzurechnungsbesteuerung', 'Bleiben Sie in Deutschland ansässig, kann Deutschland niedrig besteuerte Firmengewinne besteuern.'],
      ['Erweiterte beschränkte Steuerpflicht', 'Deutsche, die in Niedrigsteuerländer ziehen, können 10 Jahre teilweise steuerpflichtig bleiben.'],
      ['Wohnsitz und Ansässigkeit', 'Eine behaltene Wohnung in Deutschland kann Sie dort voll steuerpflichtig halten.'],
    ],
    readGuide: 'Zum Ratgeber',
    faqEyebrow: 'FAQ',
    faqHeading: 'Was Gründer zuerst fragen',
    faqLead: 'Noch unsicher? Fragen Sie uns direkt in einem kostenlosen 30-Minuten-Gespräch.',
    bookCall: 'Gespräch buchen',
    faqs: [
      { q: 'Ist der Steuersatz von 5 % legal?', a: 'Ja. Er folgt aus Maltas Anrechnungs- und Erstattungssystem, das im maltesischen Recht steht. Die Firma zahlt 35 %; der Gesellschafter erhält auf ausgeschüttete operative Gewinne 6/7 davon zurück.' },
      { q: 'Kann ich in Deutschland bleiben und nur eine Malta-Firma gründen?', a: 'Meist spart das nichts. Bleiben Sie in Deutschland ansässig, können Hinzurechnungsbesteuerung und Ort der Geschäftsleitung die Gewinne zurück in die deutsche Steuer ziehen. Die Struktur funktioniert, wenn Sie wirklich umziehen.' },
      { q: 'Muss ich in Malta leben?', a: 'Ja. Sie machen Malta zu Ihrem Zuhause und geben den Wohnsitz im alten Land auf. Wohnung, Aufenthaltstage und verbleibende Bindungen planen wir mit Ihrem Steuerberater.' },
      { q: 'Was ist der Non-Dom-Status?', a: 'Ansässige ohne Domizil in Malta zahlen Steuer auf maltesische Einkünfte und auf ausländische Einkünfte nur, wenn sie nach Malta überwiesen werden. Ausländische Veräußerungsgewinne sind steuerfrei. Ab 35.000 € ausländischen Einkünften gilt eine Mindeststeuer von 5.000 €.' },
      { q: 'Was ist mit der deutschen Wegzugsteuer?', a: 'Wer mit einer Beteiligung von 1 % oder mehr an einer Kapitalgesellschaft ins Ausland zieht, kann Steuer auf nicht realisierte Gewinne auslösen. Das muss vor der Abmeldung geplant werden.' },
      { q: 'Wie lange dauert die Gründung?', a: '[X–Y Wochen] für Firma und Bankkonto. Die Wohnsitzanmeldung folgt nach Ihrer Ankunft.' },
    ],
    guidesEyebrow: 'Ratgeber',
    guidesHeading: 'Erst lesen, dann anrufen',
    allGuides: 'Alle Ratgeber',
    guideCards: [
      { tag: 'Firmensteuer · 7 Min.', heading: 'Maltas 5 % erklärt: So funktioniert die 6/7-Erstattung wirklich', article: 'malta-5-prozent-steuer-erklaert' },
      { tag: 'Wegzug · 9 Min.', heading: 'Wegzugsteuer: Was Deutschland besteuert, wenn Sie mit Ihrer GmbH wegziehen', page: 'guideLeavingGermany' },
      { tag: 'Kosten · 6 Min.', heading: 'Was eine Malta-Firma pro Jahr wirklich kostet', page: 'costEstimator' },
    ] as { tag: string; heading: string; article?: string; page?: PageKey }[],
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: { title: 'Malta for founders: tax, company & relocation | Tax.Free', description: 'See what you would save in Malta with an honest calculator — setup costs, running costs and the German exit rules included. Reviewed by licensed advisors.' },
    de: { title: 'Auswandern nach Malta: Steuern, Firma & Umzug | Tax.Free', description: 'Sehen Sie mit einem ehrlichen Rechner, was Sie in Malta sparen – inklusive Kosten und deutscher Wegzugsregeln. Geprüft von zugelassenen Beratern.' },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <>
        <Section space="sm">
          <div className="grid items-center gap-12 rounded-panel bg-soft p-[clamp(28px,5vw,64px)]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))' }}>
            <div className="flex flex-col gap-6">
              <div className="self-start rounded-full border border-line-strong bg-white px-3.5 py-2 text-sm font-bold text-brand">{t.reviewedBadge}</div>
              <h1 className="m-0 text-[clamp(40px,5vw,62px)] font-extrabold leading-[1.04] tracking-[-0.035em]">{t.heading}</h1>
              <p className="m-0 text-lg leading-relaxed text-body">{t.lead}</p>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-base text-body-strong">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <CheckIcon size={20} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <MaltaRateCalculator locale={locale} compareHref={href('taxCalculator', locale)} />
          </div>
        </Section>

        <Section space="none" className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 border-b border-rule py-10">
          <h2 className="eyebrow m-0 text-muted">{t.reviewedBy}</h2>
          <ul className="m-0 flex list-none flex-wrap gap-x-10 gap-y-4 p-0 text-base font-semibold text-body-strong">
            {t.reviewers.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Section>

        <Section id="how" className="flex flex-col gap-10 md:pt-24">
          <SectionHeading eyebrow={t.howEyebrow} heading={t.howHeading} />
          <Grid min={240} gap="gap-5">
            {t.steps.map(([heading, body], i) => (
              <FeatureCard key={heading} tag={`${t.step} ${i + 1}`} heading={heading} body={body} />
            ))}
          </Grid>
        </Section>

        <Section className="flex flex-col gap-10 md:pt-24">
          <SectionHeading eyebrow={t.fitEyebrow} heading={t.fitHeading} />
          <Grid min={420} gap="gap-5">
            <div className="flex flex-col gap-4 rounded-card bg-soft p-8">
              <h3 className="m-0 text-xl font-extrabold">{t.fitYes}</h3>
              <CheckList items={t.fitYesItems} />
            </div>
            <div className="flex flex-col gap-4 rounded-card border border-warn-line bg-warn-bg p-8">
              <h3 className="m-0 text-xl font-extrabold">{t.fitNo}</h3>
              <CheckList kind="cross" items={t.fitNoItems} />
            </div>
          </Grid>
        </Section>

        <Section id="pricing" className="flex flex-col gap-10 md:pt-24">
          <SectionHeading eyebrow={t.pricingEyebrow} heading={t.pricingHeading} />
          <Grid min={320} gap="gap-5" className="items-stretch">
            {t.plans.map((p: Plan) => {
              const featured = Boolean(p.recommended)
              return (
                <div key={p.name} className={`flex flex-col gap-[18px] rounded-card p-8 ${featured ? 'border-2 border-brand bg-tint' : 'border border-line'}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="m-0 text-xl font-extrabold">{p.name}</h3>
                    {p.recommended ? <span className="rounded-full bg-brand px-3 py-1.5 text-[13px] font-bold text-white">{p.recommended}</span> : null}
                  </div>
                  <div>
                    <span className="text-[38px] font-extrabold tracking-[-0.02em]">{p.price}</span>
                    <span className="text-[15px] text-muted">{p.per}</span>
                  </div>
                  <p className="m-0 text-[15px] leading-normal text-muted">{p.audience}</p>
                  <ul className={`m-0 flex list-none flex-col gap-2.5 border-t p-0 pt-[18px] text-[15px] ${featured ? 'border-line' : 'border-rule'}`}>
                    {p.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <ButtonLink href={href('consultation', locale)} variant={featured ? 'primary' : 'outline'} className="mt-auto py-3.5">
                    {p.cta}
                  </ButtonLink>
                </div>
              )
            })}
          </Grid>
        </Section>

        <Section id="germany" className="md:pt-24">
          <div className="flex flex-col gap-9 rounded-panel bg-ink p-[clamp(28px,5vw,56px)] text-white">
            <div className="flex max-w-[720px] flex-col gap-3">
              <div className="eyebrow text-mint">{t.deEyebrow}</div>
              <h2 className="m-0 text-[clamp(30px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.03em]">{t.deHeading}</h2>
            </div>
            <Grid min={250}>
              {t.deCards.map(([heading, body]) => (
                <FeatureCard key={heading} variant="soft" heading={heading} body={body} link={{ label: t.readGuide, href: href('guideLeavingGermany', locale) }} />
              ))}
            </Grid>
          </div>
        </Section>

        <Section id="faq" className="grid items-start gap-12 md:pt-24" labelledBy="faq-heading">
          <div className="grid items-start gap-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' }}>
            <div className="flex flex-col gap-4">
              <div className="eyebrow text-brand">{t.faqEyebrow}</div>
              <h2 id="faq-heading" className="m-0 text-[clamp(30px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.03em]">
                {t.faqHeading}
              </h2>
              <p className="m-0 text-base leading-relaxed text-muted">{t.faqLead}</p>
              <ButtonLink href={href('consultation', locale)} className="self-start px-5 py-3.5">
                {t.bookCall}
              </ButtonLink>
            </div>
            <FaqAccordion items={t.faqs} />
          </div>
          <JsonLd data={faqSchema(t.faqs)} />
        </Section>

        <Section id="guides" className="flex flex-col gap-8 md:pt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow={t.guidesEyebrow} heading={t.guidesHeading} />
            <Link href={href('blog', locale)} className="font-bold text-brand no-underline hover:underline">
              {t.allGuides} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <Grid min={300} gap="gap-5">
            {t.guideCards.map((c) => (
              <LinkCard key={c.heading} image={ui[locale].imagePlaceholder} tag={c.tag} heading={c.heading} href={c.article ? articleHref(locale, c.article) : href(c.page!, locale)} />
            ))}
          </Grid>
        </Section>

        <CtaBand locale={locale} />
      </>
    )
  },
}
