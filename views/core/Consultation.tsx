import { PageHero } from '@/components/blocks/PageHero'
import { Placeholder } from '@/components/blocks/Placeholder'
import { StepList } from '@/components/blocks/StepItem'
import { BookingEmbed } from '@/components/islands/BookingEmbed'
import { EmailForm } from '@/components/islands/EmailForm'
import { Section } from '@/components/blocks/Section'
import type { Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import type { View } from '../types'

const copy = {
  en: {
    services: 'Services',
    current: 'Consultation',
    eyebrow: 'Free consultation',
    heading: '30 minutes. A clear yes or no on Malta.',
    lead: "Pick a time with [Advisor name]. No obligation, no sales pitch — if Malta doesn't pay off for you, we'll say so.",
    photo: 'Photo',
    advisorName: '[Advisor name]',
    advisorRole: '[Role · credentials] · English, German',
    callHeading: 'What happens in the call',
    steps: [
      { heading: 'Your situation', body: 'Profit, structure and family.' },
      { heading: 'German exit issues', body: 'We flag what needs a Steuerberater.' },
      { heading: 'Written summary', body: 'Plus a fixed-fee quote.' },
    ],
    pickTime: '1 · Pick a time (CET)',
    aboutYou: '2 · About you',
    note: 'We use your details only to prepare the call.',
    submit: 'Confirm',
    countries: ['Germany', 'Austria', 'Switzerland', 'Other'],
    profits: ['Under €100k', '€100k–250k', '€250k–1M', 'Over €1M'],
    profitLabel: 'Yearly profit',
    messageLabel: 'Anything we should know? (optional)',
    success: 'Thank you. We will be in touch to confirm your call.',
  },
  de: {
    services: 'Leistungen',
    current: 'Beratung',
    eyebrow: 'Kostenlose Beratung',
    heading: '30 Minuten. Ein klares Ja oder Nein zu Malta.',
    lead: 'Wählen Sie einen Termin mit [Name des Beraters]. Unverbindlich, ohne Verkaufsgespräch – wenn sich Malta für Sie nicht lohnt, sagen wir es Ihnen.',
    photo: 'Foto',
    advisorName: '[Name des Beraters]',
    advisorRole: '[Funktion · Qualifikation] · Englisch, Deutsch',
    callHeading: 'Was im Gespräch passiert',
    steps: [
      { heading: 'Ihre Situation', body: 'Gewinn, Struktur und Familie.' },
      { heading: 'Fragen zum Wegzug aus Deutschland', body: 'Wir zeigen, wofür Sie einen Steuerberater brauchen.' },
      { heading: 'Schriftliche Zusammenfassung', body: 'Dazu ein Festpreisangebot.' },
    ],
    pickTime: '1 · Termin wählen (MEZ)',
    aboutYou: '2 · Über Sie',
    note: 'Wir verwenden Ihre Angaben nur zur Vorbereitung des Gesprächs.',
    submit: 'Bestätigen',
    countries: ['Deutschland', 'Österreich', 'Schweiz', 'Anderes Land'],
    profits: ['Unter 100k €', '100k–250k €', '250k–1 Mio. €', 'Über 1 Mio. €'],
    profitLabel: 'Jahresgewinn',
    messageLabel: 'Was sollten wir wissen? (optional)',
    success: 'Vielen Dank. Wir melden uns, um Ihren Termin zu bestätigen.',
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: { title: 'Free 30-minute Malta consultation | Tax.Free', description: 'Book a free 30-minute call in English or German and get a clear yes or no on Malta, a written summary and a fixed-fee quote. No obligation.' },
    de: { title: 'Kostenlose Malta-Beratung (30 Min.) | Tax.Free', description: 'Buchen Sie ein kostenloses 30-Minuten-Gespräch auf Deutsch oder Englisch: klares Ja oder Nein zu Malta, schriftliche Zusammenfassung und Festpreisangebot.' },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <>
        <PageHero
          locale={locale}
          variant="plain"
          trail={[{ label: t.services, href: href('companyFormation', locale) }]}
          current={t.current}
          currentHref={href('consultation', locale)}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
        />
        <Section space="md" className="pb-20">
          <div className="grid items-start gap-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))' }}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 rounded-[20px] bg-soft p-[18px]">
                <Placeholder label={t.photo} className="size-16 rounded-[18px] bg-placeholder-strong p-1 text-xs" />
                <div>
                  <div className="text-[17px] font-extrabold">{t.advisorName}</div>
                  <div className="text-sm text-body">{t.advisorRole}</div>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="m-0 pb-2 text-lg font-extrabold">{t.callHeading}</h2>
                <StepList steps={t.steps} />
              </div>
            </div>

            <div className="flex flex-col gap-[18px] rounded-[24px] border border-line p-7">
              <h2 className="m-0 text-[15px] font-extrabold">{t.pickTime}</h2>
              <BookingEmbed locale={locale} contactHref={href('contact', locale)} />
              <h2 className="m-0 text-[15px] font-extrabold">{t.aboutYou}</h2>
              <p className="m-0 text-[13px] leading-normal text-muted">{t.note}</p>
              <EmailForm
                locale={locale}
                form="consultation"
                fields={['name', 'email', 'country', 'profit', 'message']}
                selects={{ country: t.countries, profit: t.profits }}
                optional={['message']}
                labels={{ profit: t.profitLabel, message: t.messageLabel }}
                submitLabel={t.submit}
                successMessage={t.success}
                privacyHref={href('privacy', locale)}
              />
            </div>
          </div>
        </Section>
      </>
    )
  },
}
