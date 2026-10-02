import { PageHero } from '@/components/blocks/PageHero'
import { Grid, Section } from '@/components/blocks/Section'
import { StatTile } from '@/components/blocks/StatTile'
import { CtaBand } from '@/components/layout/CtaBand'
import type { Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import type { View } from '../types'

// No reviews exist yet. Every slot below is a visibly bracketed placeholder; replace only with
// verified, unedited reviews from Google / Trustpilot. Do not add Review or AggregateRating schema
// until real ratings are shown. The hero buttons ("Read all on Google", "Leave a review") need the
// real profile URLs, so they are left out until those exist.

const SLOTS = 3

const copy = {
  en: {
    about: 'About',
    crumb: 'Reviews',
    eyebrow: 'Reviews',
    heading: 'What clients say',
    lead: "Verified reviews only, pulled from Google and Trustpilot. We don't edit or select them.",
    meta: '[Link: read all on Google] · [Link: leave a review]',
    ratingsHeading: 'Ratings',
    rating: '[X.X]',
    count: '[N] reviews',
    listHeading: 'Recent reviews',
    slotMeta: '[Source] · [Date] · [Reviewer initials]',
    slotText: '“[Verified review text, unedited]”',
  },
  de: {
    about: 'Über uns',
    crumb: 'Bewertungen',
    eyebrow: 'Bewertungen',
    heading: 'Was Mandanten sagen',
    lead: 'Nur verifizierte Bewertungen, direkt von Google und Trustpilot übernommen. Wir bearbeiten oder filtern sie nicht.',
    meta: '[Link: alle auf Google lesen] · [Link: Bewertung abgeben]',
    ratingsHeading: 'Bewertungen im Überblick',
    rating: '[X,X]',
    count: '[N] Bewertungen',
    listHeading: 'Aktuelle Bewertungen',
    slotMeta: '[Quelle] · [Datum] · [Initialen]',
    slotText: '„[Verifizierter Bewertungstext, unbearbeitet]“',
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: { title: 'Client reviews | Tax.Free', description: 'What clients say about moving to Malta with Tax.Free: verified reviews only, pulled from Google and Trustpilot, never edited or selected by us.' },
    de: { title: 'Bewertungen unserer Mandanten | Tax.Free', description: 'Was Mandanten über ihren Umzug nach Malta mit Tax.Free sagen: nur verifizierte Bewertungen von Google und Trustpilot, von uns nie bearbeitet oder gefiltert.' },
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
          currentHref={href('reviews', locale)}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
          meta={t.meta}
        />

        <Section space="md" labelledBy="reviews-ratings">
          <h2 id="reviews-ratings" className="sr-only">
            {t.ratingsHeading}
          </h2>
          <Grid min={260}>
            <StatTile value={t.rating} label="Google" note={t.count} />
            <StatTile value={t.rating} label="Trustpilot" note={t.count} />
          </Grid>
        </Section>

        <Section space="sm" labelledBy="reviews-list">
          <h2 id="reviews-list" className="sr-only">
            {t.listHeading}
          </h2>
          <ul className="m-0 grid list-none gap-4 p-0" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' }}>
            {Array.from({ length: SLOTS }, (_, i) => (
              <li key={i}>
                <figure className="m-0 box-border flex h-full flex-col gap-2 rounded-[20px] bg-faq p-6">
                  <figcaption className="text-[17px] font-extrabold">{t.slotMeta}</figcaption>
                  <blockquote className="m-0 text-[15px] leading-relaxed text-body">{t.slotText}</blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </Section>

        <CtaBand locale={locale} />
      </>
    )
  },
}
