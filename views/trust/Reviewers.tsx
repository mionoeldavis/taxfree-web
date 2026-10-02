import { FeatureCard } from '@/components/blocks/FeatureCard'
import { PageHero } from '@/components/blocks/PageHero'
import { Placeholder } from '@/components/blocks/Placeholder'
import { Grid, Section } from '@/components/blocks/Section'
import { SectionHeading } from '@/components/blocks/SectionHeading'
import { StepList } from '@/components/blocks/StepItem'
import { CtaBand } from '@/components/layout/CtaBand'
import type { Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import type { View } from '../types'

// Person JSON-LD is deliberately not emitted: with placeholder names it would only publish fake entities.
// Add it once real names, credentials and register links are filled in.

type Reviewer = { tag: string; name: string; body: string; verify?: string }

const copy = {
  en: {
    about: 'About',
    crumb: 'Reviewers',
    eyebrow: 'Expert review',
    heading: 'Who checks what we publish',
    lead: "Tax content can cost people money when it's wrong. Every guide and tool on this site is reviewed by a licensed professional, named on the page, with the date of the last check.",
    photo: 'Photo',
    listHeading: 'Our reviewers',
    reviewers: [
      { tag: 'Malta-warranted accountant · Warrant no. [X]', name: '[Name], [credential]', body: 'Reviews Malta company tax, refunds, personal tax and residence programmes. [Short bio.]', verify: 'Verify warrant: [link to public register]' },
      { tag: 'Steuerberater · [Kammer]', name: '[Name], Steuerberater', body: 'Reviews German exit tax, CFC rules, extended limited tax liability and treaty questions. [Short bio.]', verify: 'Verify membership: [link to chamber register]' },
      { tag: 'Malta advocate · [Warrant no.]', name: '[Name], Advocate', body: 'Reviews company law, residence permits and contracts. [Short bio.]' },
    ] satisfies Reviewer[],
    processEyebrow: 'Our review process',
    processHeading: 'Four steps before anything goes live',
    steps: [
      { heading: 'Written from official sources', body: 'Laws, tax authority guidance, Big Four alerts.' },
      { heading: 'Reviewed by the named expert', body: 'Their name and date appear on the page.' },
      { heading: 'Re-checked twice a year', body: 'Every January and after each Malta budget in October.' },
      { heading: 'Corrections logged', body: 'Noted at the end of the article.' },
    ],
  },
  de: {
    about: 'Über uns',
    crumb: 'Experten',
    eyebrow: 'Fachliche Prüfung',
    heading: 'Wer prüft, was wir veröffentlichen',
    lead: 'Fehlerhafte Steuerinformationen können Menschen Geld kosten. Jeder Ratgeber und jedes Tool auf dieser Website wird von einer zugelassenen Fachperson geprüft – namentlich genannt, mit dem Datum der letzten Prüfung.',
    photo: 'Foto',
    listHeading: 'Unsere Experten',
    reviewers: [
      { tag: 'In Malta zugelassener Steuerberater · Zulassungsnr. [X]', name: '[Name], [Qualifikation]', body: 'Prüft maltesische Unternehmenssteuer, Erstattungen, Einkommensteuer und Aufenthaltsprogramme. [Kurze Bio.]', verify: 'Zulassung prüfen: [Link zum öffentlichen Register]' },
      { tag: 'Steuerberater · [Kammer]', name: '[Name], Steuerberater', body: 'Prüft Wegzugsteuer, Hinzurechnungsbesteuerung, erweiterte beschränkte Steuerpflicht und Fragen zu Doppelbesteuerungsabkommen. [Kurze Bio.]', verify: 'Mitgliedschaft prüfen: [Link zum Kammerregister]' },
      { tag: 'Rechtsanwalt in Malta · [Zulassungsnr.]', name: '[Name], Rechtsanwalt', body: 'Prüft Gesellschaftsrecht, Aufenthaltstitel und Verträge. [Kurze Bio.]' },
    ] satisfies Reviewer[],
    processEyebrow: 'Unser Prüfprozess',
    processHeading: 'Vier Schritte, bevor etwas online geht',
    steps: [
      { heading: 'Aus offiziellen Quellen geschrieben', body: 'Gesetze, Verlautbarungen der Steuerbehörden, Mandanteninformationen der Big Four.' },
      { heading: 'Vom genannten Experten geprüft', body: 'Name und Datum stehen auf der Seite.' },
      { heading: 'Zweimal im Jahr erneut geprüft', body: 'Jeden Januar und nach jedem maltesischen Haushalt im Oktober.' },
      { heading: 'Korrekturen dokumentiert', body: 'Vermerkt am Ende des Artikels.' },
    ],
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: { title: 'Our expert reviewers | Tax.Free', description: 'Every guide and tool is reviewed by a licensed professional — a Malta-warranted accountant, a German Steuerberater and a Malta advocate — named and dated.' },
    de: { title: 'Unsere Experten und der Prüfprozess | Tax.Free', description: 'Jeder Ratgeber und jedes Tool wird von zugelassenen Fachleuten geprüft – Steuerberater in Malta und Deutschland sowie Anwalt in Malta, mit Namen und Datum.' },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <>
        <PageHero
          locale={locale}
          variant="plain"
          trail={[{ label: t.about, href: href('about', locale) }]}
          current={t.crumb}
          currentHref={href('reviewers', locale)}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
        />

        <Section space="lg" labelledBy="reviewers-list">
          <h2 id="reviewers-list" className="sr-only">
            {t.listHeading}
          </h2>
          <ul className="m-0 grid list-none gap-5 p-0" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' }}>
            {t.reviewers.map((r: Reviewer, i) => (
              <li key={i} className="flex flex-col gap-3">
                <Placeholder label={t.photo} className="aspect-[4/3]" />
                <FeatureCard
                  tag={r.tag}
                  heading={r.name}
                  body={
                    <>
                      <p className="m-0">{r.body}</p>
                      {r.verify ? <p className="m-0 mt-2.5 font-bold text-brand">{r.verify}</p> : null}
                    </>
                  }
                />
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <Grid min={380} gap="gap-12" className="items-start">
            <SectionHeading eyebrow={t.processEyebrow} heading={t.processHeading} />
            <StepList steps={t.steps} />
          </Grid>
        </Section>

        <CtaBand locale={locale} />
      </>
    )
  },
}
