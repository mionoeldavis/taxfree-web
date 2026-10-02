import type { MetadataRoute } from 'next'
import { listArticles, translationOf } from '@/lib/content'
import { locales, type Locale } from '@/lib/i18n'
import { articleHref, href, pageKeys } from '@/lib/routes'
import { siteUrl } from '@/lib/site'

export const dynamic = 'force-static'

const abs = (p: string) => `${siteUrl}${p}`

/** Every locale × page, each entry listing its language alternates (hreflang in the sitemap). */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.flatMap((locale) =>
    pageKeys.map((key) => ({
      url: abs(href(key, locale)),
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, abs(href(key, l))])) },
    })),
  )
  const articles = locales.flatMap((locale) =>
    listArticles(locale).map((a) => {
      const languages: Partial<Record<Locale, string>> = { [locale]: abs(articleHref(locale, a.slug)) }
      for (const l of locales) {
        const t = l === locale ? null : translationOf(a, l)
        if (t) languages[l] = abs(articleHref(l, t.slug))
      }
      return { url: abs(articleHref(locale, a.slug)), lastModified: a.updated, alternates: { languages } }
    }),
  )
  return [...pages, ...articles]
}
