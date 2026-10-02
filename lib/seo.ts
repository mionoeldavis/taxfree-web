import type { Metadata } from 'next'
import { defaultLocale, locales, ogLocale, type Locale } from './i18n'
import { siteName, siteUrl } from './site'

/** Canonical, hreflang (de, en, x-default → German) and Open Graph for one page. */
export function pageMetadata({
  locale,
  title,
  description,
  paths,
  type = 'website',
}: {
  locale: Locale
  title: string
  description: string
  /** Site-relative URL of this page in every language that has it. */
  paths: Partial<Record<Locale, string>>
  type?: 'website' | 'article'
}): Metadata {
  const languages: Record<string, string> = {}
  for (const l of locales) if (paths[l]) languages[l] = paths[l]!
  if (paths[defaultLocale]) languages['x-default'] = paths[defaultLocale]!
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: { canonical: paths[locale], languages },
    openGraph: { type, siteName, title, description, url: paths[locale], locale: ogLocale[locale] },
    twitter: { card: 'summary_large_image', title, description },
  }
}
