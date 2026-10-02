import { KeyValueList } from '@/components/blocks/KeyValueList'
import { PageHero } from '@/components/blocks/PageHero'
import { Section } from '@/components/blocks/Section'
import { EmailForm } from '@/components/islands/EmailForm'
import type { Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import type { View } from '../types'

const copy = {
  en: {
    tools: 'Tools',
    crumb: 'Newsletter',
    eyebrow: 'Newsletter · monthly',
    heading: 'The Malta brief: tax changes that matter to you, in five minutes',
    lead: 'Once a month: what changed in Malta, Germany, Austria and Switzerland, and what it means for founders. Every item sourced.',
    formHeading: 'Subscribe',
    submit: 'Subscribe',
    success: 'Almost done: we have sent you an email. Please click the confirmation link in it to activate your subscription (double opt-in).',
    formNote: 'English or German edition · No spam · Unsubscribe in one click',
    sampleLabel: 'Sample issue · October 2026',
    sampleHeading: 'Malta budget: what changed for founders',
    sampleRows: [
      { label: '1 · [Budget headline]', value: '[Source]' },
      { label: '2 · [German law change]', value: '[Source]' },
      { label: '3 · [Guide of the month]', value: '[Link]' },
    ],
  },
  de: {
    tools: 'Tools',
    crumb: 'Newsletter',
    eyebrow: 'Newsletter · monatlich',
    heading: 'Der Malta-Brief: Steueränderungen, die für Sie zählen, in fünf Minuten',
    lead: 'Einmal im Monat: Was sich in Malta, Deutschland, Österreich und der Schweiz geändert hat und was das für Gründer bedeutet. Jede Meldung mit Quelle.',
    formHeading: 'Abonnieren',
    submit: 'Abonnieren',
    success: 'Fast geschafft: Wir haben Ihnen eine E-Mail geschickt. Bitte klicken Sie auf den Bestätigungslink darin, um Ihr Abo zu aktivieren (Double-Opt-in).',
    formNote: 'Ausgabe auf Deutsch oder Englisch · Kein Spam · Abmeldung mit einem Klick',
    sampleLabel: 'Beispielausgabe · Oktober 2026',
    sampleHeading: 'Maltas Haushalt: Was sich für Gründer geändert hat',
    sampleRows: [
      { label: '1 · [Haushalts-Schlagzeile]', value: '[Quelle]' },
      { label: '2 · [Deutsche Gesetzesänderung]', value: '[Quelle]' },
      { label: '3 · [Ratgeber des Monats]', value: '[Link]' },
    ],
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: {
      title: 'The Malta brief: monthly tax newsletter | Tax.Free',
      description: 'Once a month, five minutes: tax changes in Malta, Germany, Austria and Switzerland and what they mean for founders. Every item sourced. Free.',
    },
    de: {
      title: 'Der Malta-Brief: Steuer-Newsletter | Tax.Free',
      description: 'Einmal im Monat in fünf Minuten: Steueränderungen in Malta, Deutschland, Österreich und der Schweiz und was sie für Gründer bedeuten. Mit Quellen.',
    },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <>
        <PageHero
          locale={locale}
          variant="soft"
          trail={[{ label: t.tools, href: href('taxCalculator', locale) }]}
          current={t.crumb}
          currentHref={href('newsletter', locale)}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
        />

        <Section space="md" className="pb-20">
          <div className="grid items-start gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))' }}>
            <div className="flex flex-col gap-3.5 rounded-[24px] border border-line p-7">
              <h2 className="m-0 text-xl font-extrabold">{t.formHeading}</h2>
              <EmailForm locale={locale} form="newsletter" fields={['email']} submitLabel={t.submit} successMessage={t.success} privacyHref={href('privacy', locale)} />
              <p className="m-0 text-[13px] text-muted">{t.formNote}</p>
            </div>
            <article className="flex flex-col rounded-[24px] border border-line bg-faq px-7 pt-7 pb-3.5">
              <div className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-muted">{t.sampleLabel}</div>
              <h2 className="m-0 pt-2 pb-3 text-[22px] font-extrabold">{t.sampleHeading}</h2>
              <KeyValueList rows={t.sampleRows} />
            </article>
          </div>
        </Section>
      </>
    )
  },
}
