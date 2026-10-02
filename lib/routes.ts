import { locales, type Locale } from './i18n'

/**
 * Page key → localized slug. The one place URLs are defined (master plan → Page inventory).
 * Adding a page = one entry here + one view in views/registry.ts.
 */
export const routes = {
  home: { en: '', de: '' },
  companyFormation: { en: 'malta-company-formation', de: 'firma-in-malta-gruenden' },
  relocation: { en: 'relocation-to-malta', de: 'umzug-nach-malta' },
  residency: { en: 'malta-residency', de: 'aufenthalt-malta' },
  taxAdvisory: { en: 'malta-tax-advisory', de: 'steuerberatung-malta' },
  consultation: { en: 'consultation', de: 'beratung' },
  forOnlineEntrepreneurs: { en: 'for/online-entrepreneurs', de: 'fuer/online-unternehmer' },
  forFreelancers: { en: 'for/freelancers-consultants', de: 'fuer/freelancer-berater' },
  forInvestors: { en: 'for/investors-crypto', de: 'fuer/investoren-krypto' },
  forFamilies: { en: 'for/families', de: 'fuer/familien' },
  forNonEuFounders: { en: 'for/non-eu-founders', de: 'fuer/nicht-eu-gruender' },
  guideMoving: { en: 'guide/moving-to-malta', de: 'ratgeber/auswandern-nach-malta' },
  guideTaxes: { en: 'guide/malta-taxes', de: 'ratgeber/steuern-malta' },
  guideCompany: { en: 'guide/malta-company-5-percent', de: 'ratgeber/malta-firma-5-prozent' },
  guideLeavingGermany: { en: 'guide/leaving-germany', de: 'ratgeber/wegzug-aus-deutschland' },
  blog: { en: 'blog', de: 'blog' },
  taxCalculator: { en: 'tools/tax-calculator', de: 'tools/steuerrechner' },
  costEstimator: { en: 'tools/cost-estimator', de: 'tools/kostenrechner' },
  fitQuiz: { en: 'tools/malta-fit-quiz', de: 'tools/malta-check' },
  playbook: { en: 'playbook', de: 'playbook' },
  newsletter: { en: 'newsletter', de: 'newsletter' },
  compareCyprus: { en: 'compare/malta-vs-cyprus', de: 'vergleich/malta-oder-zypern' },
  compareDubai: { en: 'compare/malta-vs-dubai', de: 'vergleich/malta-oder-dubai' },
  comparePortugal: { en: 'compare/malta-vs-portugal', de: 'vergleich/malta-oder-portugal' },
  glossary: { en: 'glossary', de: 'glossar' },
  news: { en: 'news', de: 'news' },
  about: { en: 'about', de: 'ueber-uns' },
  reviewers: { en: 'reviewers', de: 'experten' },
  caseStudies: { en: 'case-studies', de: 'fallbeispiele' },
  reviews: { en: 'reviews', de: 'bewertungen' },
  contact: { en: 'contact', de: 'kontakt' },
  imprint: { en: 'imprint', de: 'impressum' },
  privacy: { en: 'privacy', de: 'datenschutz' },
} as const satisfies Record<string, Record<Locale, string>>

export type PageKey = keyof typeof routes
export const pageKeys = Object.keys(routes) as PageKey[]

function pathFor(locale: Locale, slug: string): string {
  return slug ? `/${locale}/${slug}/` : `/${locale}/`
}

/** Site-relative URL of a page, with the trailing slash static export produces. */
export function href(key: PageKey, locale: Locale, hash?: string): string {
  return pathFor(locale, routes[key][locale]) + (hash ? `#${hash}` : '')
}

/** URL of a blog article (its slug is per locale, from the MDX file name). */
export function articleHref(locale: Locale, slug: string): string {
  return pathFor(locale, `${routes.blog[locale]}/${slug}`)
}

export type ResolvedRoute = { kind: 'page'; key: PageKey } | { kind: 'article'; slug: string }

/** Turns a catch-all slug into a page key or a blog-article slug; null when nothing matches. */
export function resolveRoute(locale: Locale, parts: readonly string[]): ResolvedRoute | null {
  const path = parts.join('/')
  const key = pageKeys.find((k) => routes[k][locale] === path)
  if (key) return { kind: 'page', key }
  const blogPrefix = `${routes.blog[locale]}/`
  if (path.startsWith(blogPrefix) && parts.length === routes.blog[locale].split('/').length + 1) {
    return { kind: 'article', slug: parts[parts.length - 1] }
  }
  return null
}

/** Every locale × page as catch-all params ([] = locale home). */
export function pageParams(): { locale: Locale; slug: string[] }[] {
  return locales.flatMap((locale) =>
    pageKeys.map((key) => {
      const slug = routes[key][locale]
      return { locale, slug: slug ? slug.split('/') : [] }
    }),
  )
}
