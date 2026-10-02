import { FeatureCard } from '@/components/blocks/FeatureCard'
import { PageHero } from '@/components/blocks/PageHero'
import { Grid, Section } from '@/components/blocks/Section'
import { SectionHeading } from '@/components/blocks/SectionHeading'
import { EmailForm } from '@/components/islands/EmailForm'
import { CtaBand } from '@/components/layout/CtaBand'
import type { Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import type { View } from '../types'

const copy = {
  en: {
    tools: 'Tools',
    crumb: 'Playbook',
    eyebrow: 'Free PDF · 2026 edition',
    heading: 'The Malta Relocation Playbook',
    lead: 'Taxes, company setup, German exit rules, costs and a 90-day checklist in one document — reviewed by licensed advisors.',
    formHeading: 'Get the PDF by email',
    submit: 'Send me the Playbook',
    success: 'Almost done: please confirm your email address with the link we just sent you. The Playbook follows right after.',
    formNote: 'One email with the PDF, then our monthly brief. Unsubscribe anytime.',
    coverBrand: 'Tax.Free',
    coverAudience: 'For founders from Germany, Austria and Switzerland',
    insideHeading: "What's inside",
    chapters: [
      ['How the 5% really works', 'Refunds, worked examples, Pillar Two and FITWI.'],
      ['What Germany still taxes', 'Exit tax, CFC rules and the 10-year rule.'],
      ['Costs, line by line', 'Setup, yearly fees, rent and living costs.'],
      ['90-day checklist', 'Every step from Abmeldung to Maltese ID card.'],
    ],
  },
  de: {
    tools: 'Tools',
    crumb: 'Playbook',
    eyebrow: 'Kostenloses PDF · Ausgabe 2026',
    heading: 'Das Malta-Umzugs-Playbook',
    lead: 'Steuern, Firmengründung, deutsche Wegzugsregeln, Kosten und eine 90-Tage-Checkliste in einem Dokument – geprüft von zugelassenen Beratern.',
    formHeading: 'PDF per E-Mail erhalten',
    submit: 'Playbook zusenden',
    success: 'Fast geschafft: Bitte bestätigen Sie Ihre E-Mail-Adresse über den Link, den wir Ihnen gerade geschickt haben. Das Playbook folgt direkt danach.',
    formNote: 'Eine E-Mail mit dem PDF, danach unser monatlicher Brief. Jederzeit abbestellbar.',
    coverBrand: 'Tax.Free',
    coverAudience: 'Für Gründer aus Deutschland, Österreich und der Schweiz',
    insideHeading: 'Was drinsteht',
    chapters: [
      ['So funktionieren die 5 % wirklich', 'Erstattungen, Rechenbeispiele, Pillar Two und FITWI.'],
      ['Was Deutschland weiter besteuert', 'Wegzugsteuer, Hinzurechnungsbesteuerung und die 10-Jahres-Regel.'],
      ['Kosten, Position für Position', 'Gründung, jährliche Gebühren, Miete und Lebenshaltung.'],
      ['90-Tage-Checkliste', 'Jeder Schritt von der Abmeldung bis zur maltesischen ID-Karte.'],
    ],
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: {
      title: 'Malta Relocation Playbook 2026 (free PDF) | Tax.Free',
      description: 'Free PDF: Malta taxes, company setup, German exit rules, costs and a 90-day checklist in one document — reviewed by licensed advisors. Sent by email.',
    },
    de: {
      title: 'Malta-Umzugs-Playbook 2026 (PDF) | Tax.Free',
      description: 'Kostenloses PDF: Steuern in Malta, Firmengründung, deutsche Wegzugsregeln, Kosten und 90-Tage-Checkliste – geprüft von zugelassenen Beratern.',
    },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <>
        <PageHero
          locale={locale}
          variant="dark"
          trail={[{ label: t.tools, href: href('taxCalculator', locale) }]}
          current={t.crumb}
          currentHref={href('playbook', locale)}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
        />

        <Section space="md" labelledBy="playbook-form-heading">
          <div className="grid items-center gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))' }}>
            <div className="flex flex-col gap-3.5 rounded-[24px] border border-line p-7">
              <h2 id="playbook-form-heading" className="m-0 text-xl font-extrabold">
                {t.formHeading}
              </h2>
              <EmailForm locale={locale} form="playbook" fields={['email']} submitLabel={t.submit} successMessage={t.success} privacyHref={href('privacy', locale)} />
              <p className="m-0 text-[13px] text-muted">{t.formNote}</p>
            </div>
            <div className="flex justify-center">
              <div
                role="img"
                aria-label={`${t.coverBrand}: ${t.heading}`}
                className="box-border flex aspect-[3/4] w-[min(100%,360px)] flex-col justify-between rounded-[22px] bg-[#f5f0e7] p-8 shadow-[0_20px_50px_rgba(14,31,25,0.18)]"
              >
                <div className="text-base font-extrabold">{t.coverBrand}</div>
                <div className="text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em]">{t.heading}</div>
                <div className="text-sm text-body">{t.coverAudience}</div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="flex flex-col gap-8">
          <SectionHeading heading={t.insideHeading} />
          <Grid min={260}>
            {t.chapters.map(([heading, body], i) => (
              <FeatureCard key={heading} tag={String(i + 1).padStart(2, '0')} heading={heading} body={body} />
            ))}
          </Grid>
        </Section>

        <CtaBand locale={locale} />
      </>
    )
  },
}
