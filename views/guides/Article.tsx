import type { ReactNode } from 'react'
import { compileMDX } from 'next-mdx-remote/rsc'
import { DataTable } from '@/components/blocks/DataTable'
import { FaqList } from '@/components/blocks/FaqItem'
import { FeatureCard } from '@/components/blocks/FeatureCard'
import { Grid } from '@/components/blocks/Section'
import { LinkCard } from '@/components/blocks/LinkCard'
import { PageHero } from '@/components/blocks/PageHero'
import { Placeholder } from '@/components/blocks/Placeholder'
import { StepList } from '@/components/blocks/StepItem'
import { CtaBand } from '@/components/layout/CtaBand'
import { JsonLd } from '@/components/seo/JsonLd'
import { absolute, personOrNothing } from '@/components/seo/schema'
import type { ArticleMeta } from '@/lib/content'
import type { Locale } from '@/lib/i18n'
import { articleHref, href, type PageKey } from '@/lib/routes'
import { siteName, siteUrl } from '@/lib/site'

const T = {
  en: { guides: 'Guides', read: 'min read', by: 'By', reviewed: 'Reviewed by', updated: 'Updated', sources: 'Sources', notAdvice: 'General information, not individual advice.', calcHeading: 'Run your own numbers', calcBody: 'Profit, income type and the refund, in one view.', calcLink: 'Open the calculator' },
  de: { guides: 'Ratgeber', read: 'Min. Lesezeit', by: 'Von', reviewed: 'Geprüft von', updated: 'Aktualisiert am', sources: 'Quellen', notAdvice: 'Allgemeine Information, keine individuelle Beratung.', calcHeading: 'Eigene Zahlen rechnen', calcBody: 'Gewinn, Einkunftsart und Erstattung auf einen Blick.', calcLink: 'Zum Rechner' },
} as const

function formatDate(iso: string, locale: Locale) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

/** Components available inside MDX articles. Page links use route keys so they stay correct in both languages. */
function mdxComponents(locale: Locale) {
  const t = T[locale]
  return {
    StepList,
    DataTable,
    FaqList: (p: { items: { q: string; a: string }[] }) => <FaqList items={p.items} />,
    Figure: ({ label }: { label: string }) => <Placeholder label={label} className="aspect-[2/1]" />,
    CalculatorCard: () => <FeatureCard variant="soft" heading={t.calcHeading} body={t.calcBody} link={{ label: t.calcLink, href: href('taxCalculator', locale) }} />,
    PageLink: ({ to, children }: { to: PageKey; children: ReactNode }) => <a href={href(to, locale)}>{children}</a>,
    Related: ({ items }: { items: { to: PageKey; tag: string; heading: string }[] }) => (
      <Grid min={220} gap="gap-3">
        {items.map((i) => (
          <LinkCard key={i.to} tag={i.tag} heading={i.heading} href={href(i.to, locale)} />
        ))}
      </Grid>
    ),
  }
}

export async function ArticlePage({ locale, meta, body }: { locale: Locale; meta: ArticleMeta; body: string }) {
  const t = T[locale]
  const { content } = await compileMDX({
    source: body,
    components: mdxComponents(locale),
    // MDX lives in the repo (trusted); props need JS expressions. eval/Function stay blocked.
    options: { blockJS: false, blockDangerousJS: true },
  })
  const url = articleHref(locale, meta.slug)
  return (
    <>
      <PageHero
        locale={locale}
        variant="plain"
        trail={[{ label: t.guides, href: href('blog', locale) }]}
        current={meta.title}
        currentHref={url}
        eyebrow={`${meta.topic} · ${meta.minutes} ${t.read}`}
        heading={meta.title}
        lead={meta.description}
        meta={
          <>
            {t.by} {meta.author} · {t.reviewed} {meta.reviewer} · {t.updated} <time dateTime={meta.updated}>{formatDate(meta.updated, locale)}</time>
          </>
        }
      />
      <article className="prose-article mx-auto box-border flex max-w-[760px] flex-col gap-[22px] px-6 pt-8">
        {content}
        <footer className="border-t border-rule pt-4 text-[13px] leading-relaxed text-muted">
          {meta.sources.length ? (
            <>
              {t.sources}:{' '}
              {meta.sources.map((s, i) => (
                <span key={s.url}>
                  {i ? '; ' : ''}
                  <a href={s.url} rel="noopener" className="font-normal text-muted underline">
                    {s.label}
                  </a>
                </span>
              ))}
              .{' '}
            </>
          ) : null}
          {t.notAdvice}
        </footer>
      </article>
      <CtaBand locale={locale} />
      <JsonLd
        data={{
          '@type': 'Article',
          headline: meta.title,
          description: meta.description,
          inLanguage: locale,
          dateModified: meta.updated,
          mainEntityOfPage: absolute(url),
          author: personOrNothing(meta.author),
          reviewedBy: personOrNothing(meta.reviewer),
          publisher: { '@id': `${siteUrl}/#organization`, name: siteName },
        }}
      />
    </>
  )
}
