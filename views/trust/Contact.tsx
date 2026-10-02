import { KeyValueList } from '@/components/blocks/KeyValueList'
import { PageHero } from '@/components/blocks/PageHero'
import { Placeholder } from '@/components/blocks/Placeholder'
import { Grid, Section } from '@/components/blocks/Section'
import { EmailForm } from '@/components/islands/EmailForm'
import type { Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import { company } from '@/lib/site'
import type { View } from '../types'

const copy = {
  en: {
    about: 'About',
    crumb: 'Contact',
    eyebrow: 'Contact',
    heading: 'Contact us',
    lead: 'Questions before booking? Write to us — we answer within one working day. For a full assessment, book a free consultation.',
    primary: 'Book a free consultation',
    detailsHeading: 'Contact details',
    email: 'Email',
    phone: 'Phone',
    office: 'Office',
    country: 'Malta',
    hours: 'Hours',
    hoursValue: 'Mon–Fri, 9:00–18:00 CET',
    map: 'Map',
    formHeading: 'Send a message',
    submit: 'Send message',
    success: 'Thank you — your message has been sent. We answer within one working day.',
  },
  de: {
    about: 'Über uns',
    crumb: 'Kontakt',
    eyebrow: 'Kontakt',
    heading: 'Kontakt',
    lead: 'Fragen vor der Buchung? Schreiben Sie uns – wir antworten innerhalb eines Werktags. Für eine vollständige Einschätzung buchen Sie eine kostenlose Beratung.',
    primary: 'Kostenlose Beratung buchen',
    detailsHeading: 'Kontaktdaten',
    email: 'E-Mail',
    phone: 'Telefon',
    office: 'Büro',
    country: 'Malta',
    hours: 'Erreichbarkeit',
    hoursValue: 'Mo–Fr, 9:00–18:00 Uhr MEZ',
    map: 'Karte',
    formHeading: 'Nachricht senden',
    submit: 'Nachricht senden',
    success: 'Vielen Dank – Ihre Nachricht ist angekommen. Wir antworten innerhalb eines Werktags.',
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: { title: 'Contact Tax.Free | Malta relocation advice', description: 'Questions before booking? Write to us and we answer within one working day — or book a free 30-minute consultation for a full Malta assessment.' },
    de: { title: 'Kontakt | Tax.Free', description: 'Fragen vor der Buchung? Schreiben Sie uns, wir antworten innerhalb eines Werktags – oder buchen Sie eine kostenlose Beratung für eine volle Einschätzung.' },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    const details = [
      { label: t.email, value: company.email },
      { label: t.phone, value: company.phone },
      { label: t.office, value: `${company.street}, ${company.town}, ${t.country}` },
      { label: t.hours, value: t.hoursValue },
    ]
    return (
      <>
        <PageHero
          locale={locale}
          variant="plain"
          trail={[{ label: t.about, href: href('about', locale) }]}
          current={t.crumb}
          currentHref={href('contact', locale)}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
          primary={{ label: t.primary, href: href('consultation', locale) }}
        />

        <Section space="md" className="pb-20">
          <Grid min={420} gap="gap-12" className="items-start">
            <div className="flex flex-col gap-[22px]">
              <h2 className="sr-only">{t.detailsHeading}</h2>
              <KeyValueList rows={details} />
              <Placeholder label={t.map} className="aspect-video" />
            </div>
            <div className="flex flex-col gap-4 rounded-[24px] border border-line p-7">
              <h2 className="m-0 text-xl font-extrabold">{t.formHeading}</h2>
              <EmailForm locale={locale} form="contact" fields={['name', 'email', 'message']} submitLabel={t.submit} successMessage={t.success} privacyHref={href('privacy', locale)} />
            </div>
          </Grid>
        </Section>
      </>
    )
  },
}
