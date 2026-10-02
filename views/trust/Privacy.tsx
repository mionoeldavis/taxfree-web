import Link from 'next/link'
import { PageHero } from '@/components/blocks/PageHero'
import { Section } from '@/components/blocks/Section'
import type { Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import { company } from '@/lib/site'
import type { View } from '../types'

// OUTLINE ONLY. Structure follows the design; the processor list reflects what the site actually loads
// (components/islands/EmailForm, BookingEmbed, ConsentBanner; app/fonts.ts). Bracketed parts must be
// completed, and the whole text written and checked by a lawyer before launch.

type Block = { heading: string; body: string; items?: { name: string; text: string }[] }

const copy = {
  en: {
    crumb: 'Privacy',
    eyebrow: 'Legal',
    heading: 'Privacy policy',
    lead: 'How we handle your data on this website, which services we use and what your rights are.',
    draft: 'Outline only — final legal copy to be written and checked by a lawyer.',
    controller: 'Controller',
    controllerNote: '[Contact for data protection]',
    sections: [
      { heading: '2. Data we process', body: '[Contact and booking forms, newsletter, calculator usage, analytics]. As built, the calculators run in your browser and do not send your inputs to us.' },
      { heading: '3. Legal bases', body: '[Art. 6 GDPR bases per purpose]' },
      {
        heading: '4. Processors and services',
        body: '[Hosting, email, scheduling, analytics providers]. As built, the site uses:',
        items: [
          { name: 'Hosting: [Cloudflare Pages / Vercel]', text: 'Delivers the website; processes your IP address and request data in server logs. [Provider, location, DPA, retention of logs]' },
          { name: 'Form endpoint: [Supabase / Formspree]', text: 'Receives what you send through the contact, consultation, playbook and newsletter forms. [Provider, location, DPA, transfer basis]' },
          { name: 'Cloudflare Turnstile', text: 'Spam protection on pages with a form. [What it processes, location, legal basis]' },
          { name: 'Cal.com', text: 'Booking calendar. Loaded only when you click to show available times; your IP address is then sent to Cal.com. [Location, DPA, transfer basis]' },
          { name: 'Plausible Analytics', text: 'Visit statistics. Loaded only after you allow it in the consent banner. [Location, data processed, DPA]' },
          { name: 'Fonts', text: 'Self-hosted with the website. No requests to Google Fonts or other font services.' },
        ],
      },
      { heading: '5. Retention', body: '[Periods per data type]' },
      { heading: '6. Your rights', body: '[Access, correction, deletion, objection, complaint to the IDPC Malta]' },
      { heading: '7. Cookies', body: '[Necessary cookies, optional analytics with consent, how to change your choice]' },
    ] satisfies Block[],
    imprintLink: 'Imprint',
  },
  de: {
    crumb: 'Datenschutz',
    eyebrow: 'Rechtliches',
    heading: 'Datenschutzerklärung',
    lead: 'Wie wir mit Ihren Daten auf dieser Website umgehen, welche Dienste wir nutzen und welche Rechte Sie haben.',
    draft: 'Nur Gliederung – der endgültige Rechtstext wird von einem Anwalt erstellt und geprüft.',
    controller: 'Verantwortlicher',
    controllerNote: '[Ansprechpartner für Datenschutz]',
    sections: [
      { heading: '2. Welche Daten wir verarbeiten', body: '[Kontakt- und Buchungsformulare, Newsletter, Nutzung der Rechner, Statistik]. Nach aktuellem Stand laufen die Rechner in Ihrem Browser und senden Ihre Eingaben nicht an uns.' },
      { heading: '3. Rechtsgrundlagen', body: '[Rechtsgrundlagen nach Art. 6 DSGVO je Zweck]' },
      {
        heading: '4. Auftragsverarbeiter und Dienste',
        body: '[Hosting, E-Mail, Terminbuchung, Statistik-Anbieter]. Nach aktuellem Stand nutzt die Website:',
        items: [
          { name: 'Hosting: [Cloudflare Pages / Vercel]', text: 'Stellt die Website bereit; verarbeitet Ihre IP-Adresse und Anfragedaten in Server-Logs. [Anbieter, Standort, AVV, Speicherdauer der Logs]' },
          { name: 'Formular-Endpunkt: [Supabase / Formspree]', text: 'Empfängt, was Sie über die Formulare für Kontakt, Beratung, Playbook und Newsletter senden. [Anbieter, Standort, AVV, Grundlage der Übermittlung]' },
          { name: 'Cloudflare Turnstile', text: 'Spamschutz auf Seiten mit Formular. [Verarbeitete Daten, Standort, Rechtsgrundlage]' },
          { name: 'Cal.com', text: 'Terminkalender. Wird erst geladen, wenn Sie auf „Freie Termine anzeigen“ klicken; dann wird Ihre IP-Adresse an Cal.com übermittelt. [Standort, AVV, Grundlage der Übermittlung]' },
          { name: 'Plausible Analytics', text: 'Besuchsstatistik. Wird erst geladen, nachdem Sie im Einwilligungsbanner zugestimmt haben. [Standort, verarbeitete Daten, AVV]' },
          { name: 'Schriften', text: 'Werden mit der Website selbst ausgeliefert. Keine Anfragen an Google Fonts oder andere Schriftdienste.' },
        ],
      },
      { heading: '5. Speicherdauer', body: '[Fristen je Datenart]' },
      { heading: '6. Ihre Rechte', body: '[Auskunft, Berichtigung, Löschung, Widerspruch, Beschwerde bei der IDPC Malta]' },
      { heading: '7. Cookies', body: '[Notwendige Cookies, optionale Statistik mit Einwilligung, wie Sie Ihre Auswahl ändern]' },
    ] satisfies Block[],
    imprintLink: 'Impressum',
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: { title: 'Privacy policy | Tax.Free', description: 'How Tax.Free handles your data: what we process, legal bases, the services we use (hosting, forms, Turnstile, Cal.com, Plausible), retention and your rights.' },
    de: { title: 'Datenschutzerklärung | Tax.Free', description: 'So geht Tax.Free mit Ihren Daten um: Verarbeitung, Rechtsgrundlagen, eingesetzte Dienste (Hosting, Formulare, Cal.com, Plausible), Fristen und Ihre Rechte.' },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <>
        <PageHero locale={locale} variant="plain" current={t.crumb} currentHref={href('privacy', locale)} eyebrow={t.eyebrow} heading={t.heading} lead={t.lead} />

        <Section space="sm" className="pb-20">
          <div className="mx-auto flex w-full max-w-[772px] flex-col gap-6 text-base leading-[1.7] text-body-strong">
            <p className="m-0 rounded-2xl border border-warn-line bg-warn-bg p-[18px] text-[15px]">{t.draft}</p>
            <section className="flex flex-col gap-2">
              <h2 className="m-0 text-[22px] font-extrabold text-ink">1. {t.controller}</h2>
              <address className="not-italic">
                {company.legalName}, {company.street}, {company.town}, Malta · {company.email}
                <br />
                {t.controllerNote}
              </address>
            </section>
            {t.sections.map((s: Block) => (
              <section key={s.heading} className="flex flex-col gap-2">
                <h2 className="m-0 text-[22px] font-extrabold text-ink">{s.heading}</h2>
                <p className="m-0">{s.body}</p>
                {s.items ? (
                  <ul className="m-0 flex list-disc flex-col gap-2 pl-5">
                    {s.items.map((i) => (
                      <li key={i.name}>
                        <strong className="text-ink">{i.name}</strong> — {i.text}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
            <Link href={href('imprint', locale)} className="self-start font-bold text-brand no-underline hover:underline">
              {t.imprintLink} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Section>
      </>
    )
  },
}
