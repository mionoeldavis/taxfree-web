import Link from 'next/link'
import { PageHero } from '@/components/blocks/PageHero'
import { Section } from '@/components/blocks/Section'
import type { Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import { company } from '@/lib/site'
import type { View } from '../types'

// Placeholder legal copy from the design. Final text must be written and checked by a lawyer.

const copy = {
  en: {
    crumb: 'Imprint',
    eyebrow: 'Legal',
    heading: 'Imprint',
    lead: 'Who runs this website and how to reach us.',
    country: 'Malta',
    postcode: '[Postcode]',
    registration: 'Company registration',
    registry: 'Malta Business Registry',
    vat: 'VAT',
    vatValue: '[MT XXXXXXXX]',
    directors: 'Directors',
    directorsValue: '[Names]',
    email: 'Email',
    phone: 'Phone',
    regulated: 'Regulated services provided by',
    regulatedValue: '[licensed partner firm, licence no.]',
    disclaimer: 'Content on this site is general information, not tax or legal advice. Advice is given only within a signed engagement.',
    placeholderNote: 'Placeholder text — final legal copy to be written and checked by a lawyer.',
    privacyLink: 'Privacy policy and cookies',
  },
  de: {
    crumb: 'Impressum',
    eyebrow: 'Rechtliches',
    heading: 'Impressum',
    lead: 'Wer diese Website betreibt und wie Sie uns erreichen.',
    country: 'Malta',
    postcode: '[PLZ]',
    registration: 'Handelsregister',
    registry: 'Malta Business Registry',
    vat: 'USt-IdNr.',
    vatValue: '[MT XXXXXXXX]',
    directors: 'Geschäftsführung (Directors)',
    directorsValue: '[Namen]',
    email: 'E-Mail',
    phone: 'Telefon',
    regulated: 'Regulierte Leistungen erbracht durch',
    regulatedValue: '[lizenzierte Partnerkanzlei, Lizenznr.]',
    disclaimer: 'Die Inhalte dieser Website sind allgemeine Informationen, keine Steuer- oder Rechtsberatung. Beratung erfolgt nur im Rahmen eines unterzeichneten Mandats.',
    placeholderNote: 'Platzhaltertext – der endgültige Rechtstext wird von einem Anwalt erstellt und geprüft.',
    privacyLink: 'Datenschutzerklärung und Cookies',
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: { title: 'Imprint | Tax.Free', description: 'Imprint of Tax.Free Ltd, Malta: registered address, company registration, VAT number, directors, contact details and the licensed partner for regulated work.' },
    de: { title: 'Impressum | Tax.Free', description: 'Impressum der Tax.Free Ltd, Malta: Anschrift, Handelsregister, USt-IdNr., Geschäftsführung, Kontakt und lizenzierte Partnerkanzlei für regulierte Leistungen.' },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <>
        <PageHero locale={locale} variant="plain" current={t.crumb} currentHref={href('imprint', locale)} eyebrow={t.eyebrow} heading={t.heading} lead={t.lead} />

        <Section space="sm" className="pb-20">
          <div className="mx-auto flex w-full max-w-[772px] flex-col gap-4 text-base leading-[1.7] text-body-strong">
            <address className="not-italic">
              {company.legalName}
              <br />
              {company.street}, {company.town} {t.postcode}, {t.country}
              <br />
              {t.registration}: {company.companyNo}, {t.registry}
              <br />
              {t.vat}: {t.vatValue}
            </address>
            <p className="m-0">
              {t.directors}: {t.directorsValue}
              <br />
              {t.email}: {company.email} · {t.phone}: {company.phone}
            </p>
            <p className="m-0">
              {t.regulated}: {t.regulatedValue}
            </p>
            <p className="m-0 rounded-2xl border border-warn-line bg-warn-bg p-[18px] text-[15px]">{t.disclaimer}</p>
            <p className="m-0 text-[13px] text-muted">{t.placeholderNote}</p>
            <Link href={href('privacy', locale)} className="self-start font-bold text-brand no-underline hover:underline">
              {t.privacyLink} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Section>
      </>
    )
  },
}
