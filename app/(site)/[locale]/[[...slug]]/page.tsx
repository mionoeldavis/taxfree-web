import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { organizationSchema } from '@/components/seo/schema'
import { articleParams, getArticle, translationOf } from '@/lib/content'
import { isLocale, locales, type Locale } from '@/lib/i18n'
import { articleHref, href, pageParams, resolveRoute, routes } from '@/lib/routes'
import { pageMetadata } from '@/lib/seo'
import { ArticlePage } from '@/views/guides/Article'
import { views } from '@/views/registry'

type Params = { locale: string; slug?: string[] }

export const dynamicParams = false

export function generateStaticParams(): { locale: Locale; slug: string[] }[] {
  const articles = articleParams().map(({ locale, slug }) => ({ locale, slug: [...routes.blog[locale].split('/'), slug] }))
  return [...pageParams(), ...articles]
}

/** Resolves params to what the page renders plus its URL in each language. */
function load(params: Params) {
  if (!isLocale(params.locale)) return null
  const locale = params.locale
  const route = resolveRoute(locale, params.slug ?? [])
  if (!route) return null
  if (route.kind === 'page') {
    const paths = Object.fromEntries(locales.map((l) => [l, href(route.key, l)])) as Record<Locale, string>
    return { locale, paths, page: route.key, article: null }
  }
  const article = getArticle(locale, route.slug)
  if (!article) return null
  const paths: Partial<Record<Locale, string>> = { [locale]: articleHref(locale, article.meta.slug) }
  for (const l of locales) {
    const t = l === locale ? null : translationOf(article.meta, l)
    if (t) paths[l] = articleHref(l, t.slug)
  }
  return { locale, paths, page: null, article }
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const loaded = load(await params)
  if (!loaded) return {}
  const { locale, paths, page, article } = loaded
  if (article) return pageMetadata({ locale, paths, title: article.meta.title, description: article.meta.description, type: 'article' })
  const meta = views[page!].meta[locale]
  return pageMetadata({ locale, paths, title: meta.title, description: meta.description })
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const loaded = load(await params)
  if (!loaded) notFound()
  const { locale, paths, page, article } = loaded
  const other: Locale = locale === 'de' ? 'en' : 'de'
  // An article without a translation switches to the other language's blog index.
  const alternate = { locale: other, href: paths[other] ?? href('blog', other) }
  const View = page ? views[page].Page : null
  return (
    <>
      <SiteHeader locale={locale} alternate={alternate} />
      <main id="main">{article ? <ArticlePage locale={locale} meta={article.meta} body={article.body} /> : View ? <View locale={locale} /> : null}</main>
      <SiteFooter locale={locale} />
      <JsonLd data={organizationSchema()} />
    </>
  )
}
