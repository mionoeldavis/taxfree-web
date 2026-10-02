import { FeatureCard } from '@/components/blocks/FeatureCard'
import { PageHero } from '@/components/blocks/PageHero'
import { Placeholder } from '@/components/blocks/Placeholder'
import { Grid, Section } from '@/components/blocks/Section'
import { SectionHeading } from '@/components/blocks/SectionHeading'
import { StatTile } from '@/components/blocks/StatTile'
import { CtaBand } from '@/components/layout/CtaBand'
import type { Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import { company } from '@/lib/site'
import type { View } from '../types'

type Member = { photo: string; tag: string; name: string; body: string; reviewer?: boolean }

const copy = {
  en: {
    crumb: 'About',
    eyebrow: 'About us',
    heading: 'We help founders move to Malta — and tell them when not to',
    lead: 'Tax.Free was started by [Founder name] after [short founding story]. Our rule: every client gets the full picture, including what Germany still taxes and what Malta really costs.',
    primary: 'Meet our reviewers',
    secondary: 'Case studies',
    image: 'Photo: team in the Malta office',
    promisesEyebrow: 'What we stand for',
    promisesHeading: 'Four promises',
    promises: [
      ['Honest first', "We publish the downsides and say no when Malta doesn't pay off."],
      ['Fixed fees', 'Prices on the website. Never a percentage of your savings.'],
      ['Licensed review', 'Every structure is signed off by warranted professionals.'],
      ['Both sides', 'German and Maltese rules planned together, never one without the other.'],
    ],
    teamEyebrow: 'Team',
    teamHeading: 'The people behind your move',
    reviewerProfile: 'Reviewer profile',
    team: [
      { photo: 'Photo', tag: 'Founder · relocation lead', name: '[Founder name]', body: '[Two-line bio with relevant experience]' },
      { photo: 'Photo', tag: 'Malta-warranted accountant', name: '[Name]', body: '[Warrant no., years in practice]', reviewer: true },
      { photo: 'Photo', tag: 'German Steuerberater (partner)', name: '[Name]', body: '[Chamber membership, focus]', reviewer: true },
      { photo: 'Photo', tag: 'Client onboarding, Malta', name: '[Name]', body: '[Languages, background]' },
    ] satisfies Member[],
    factsHeading: 'Company facts',
    country: 'Malta',
    licensed: 'Licensed',
    licence: '[CSP licence / partner firm]',
    languagesValue: 'EN · DE',
    languages: 'Languages we work in',
  },
  de: {
    crumb: 'Über uns',
    eyebrow: 'Über uns',
    heading: 'Wir helfen Gründern beim Umzug nach Malta – und sagen ihnen, wann es sich nicht lohnt',
    lead: 'Tax.Free wurde von [Name des Gründers] gegründet, nachdem [kurze Gründungsgeschichte]. Unsere Regel: Jeder Mandant bekommt das ganze Bild – auch, was Deutschland weiter besteuert und was Malta wirklich kostet.',
    primary: 'Unsere Experten kennenlernen',
    secondary: 'Fallbeispiele',
    image: 'Foto: Team im Büro in Malta',
    promisesEyebrow: 'Wofür wir stehen',
    promisesHeading: 'Vier Versprechen',
    promises: [
      ['Ehrlichkeit zuerst', 'Wir veröffentlichen die Nachteile und sagen Nein, wenn sich Malta nicht rechnet.'],
      ['Festpreise', 'Preise stehen auf der Website. Nie ein Prozentsatz Ihrer Ersparnis.'],
      ['Geprüft von Zugelassenen', 'Jede Struktur wird von zugelassenen Fachleuten freigegeben.'],
      ['Beide Seiten', 'Deutsche und maltesische Regeln werden gemeinsam geplant – nie das eine ohne das andere.'],
    ],
    teamEyebrow: 'Team',
    teamHeading: 'Die Menschen hinter Ihrem Umzug',
    reviewerProfile: 'Expertenprofil',
    team: [
      { photo: 'Foto', tag: 'Gründer · Leitung Umzug', name: '[Name des Gründers]', body: '[Zweizeilige Bio mit relevanter Erfahrung]' },
      { photo: 'Foto', tag: 'In Malta zugelassener Steuerberater', name: '[Name]', body: '[Zulassungsnr., Jahre in der Praxis]', reviewer: true },
      { photo: 'Foto', tag: 'Deutscher Steuerberater (Partner)', name: '[Name]', body: '[Kammermitgliedschaft, Schwerpunkt]', reviewer: true },
      { photo: 'Foto', tag: 'Mandantenbetreuung, Malta', name: '[Name]', body: '[Sprachen, Hintergrund]' },
    ] satisfies Member[],
    factsHeading: 'Unternehmensdaten',
    country: 'Malta',
    licensed: 'Lizenziert',
    licence: '[CSP-Lizenz / Partnerkanzlei]',
    languagesValue: 'DE · EN',
    languages: 'Unsere Arbeitssprachen',
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: { title: 'About us and our team | Tax.Free', description: 'We help founders move to Malta and tell them when not to: fixed fees, licensed review and German and Maltese rules planned together. Meet the team.' },
    de: { title: 'Über uns und unser Team | Tax.Free', description: 'Wir helfen Gründern beim Umzug nach Malta und sagen, wann es sich nicht lohnt: Festpreise, geprüft von Zugelassenen, deutsches und maltesisches Recht gemeinsam.' },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <>
        <PageHero
          locale={locale}
          variant="plain"
          current={t.crumb}
          currentHref={href('about', locale)}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
          primary={{ label: t.primary, href: href('reviewers', locale) }}
          secondary={{ label: t.secondary, href: href('caseStudies', locale) }}
          image={t.image}
        />

        <Section className="flex flex-col gap-8">
          <SectionHeading eyebrow={t.promisesEyebrow} heading={t.promisesHeading} />
          <Grid min={260}>
            {t.promises.map(([heading, body]) => (
              <FeatureCard key={heading} variant="soft" heading={heading} body={body} />
            ))}
          </Grid>
        </Section>

        <Section className="flex flex-col gap-8">
          <SectionHeading eyebrow={t.teamEyebrow} heading={t.teamHeading} />
          <ul className="m-0 grid list-none gap-5 p-0" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))' }}>
            {t.team.map((m: Member, i) => (
              <li key={i} className="flex flex-col gap-3">
                <Placeholder label={m.photo} className="aspect-square" />
                <FeatureCard tag={m.tag} heading={m.name} body={m.body} link={m.reviewer ? { label: t.reviewerProfile, href: href('reviewers', locale) } : undefined} />
              </li>
            ))}
          </ul>
        </Section>

        <Section labelledBy="about-facts">
          <h2 id="about-facts" className="sr-only">
            {t.factsHeading}
          </h2>
          <Grid min={240}>
            <StatTile variant="dark" value={company.legalName} label={company.companyNo} />
            <StatTile variant="dark" value={t.country} label={`${company.street}, ${company.town}`} />
            <StatTile variant="dark" value={t.licensed} label={t.licence} />
            <StatTile variant="dark" value={t.languagesValue} label={t.languages} />
          </Grid>
        </Section>

        <CtaBand locale={locale} />
      </>
    )
  },
}
