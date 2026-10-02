export const locales = ['de', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'de'

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Copy that exists in both languages. Every view keeps its strings in one of these. */
export type Localized<T> = Record<Locale, T>

export const htmlLang: Record<Locale, string> = { de: 'de', en: 'en' }
export const ogLocale: Record<Locale, string> = { de: 'de_DE', en: 'en_GB' }

export function formatEur(value: number, locale: Locale): string {
  const n = Math.round(value).toLocaleString(locale === 'de' ? 'de-DE' : 'en-US')
  return locale === 'de' ? `${n} €` : `€${n}`
}

export function formatPercent(value: number, locale: Locale, digits = 1): string {
  const n = value.toLocaleString(locale === 'de' ? 'de-DE' : 'en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })
  return locale === 'de' ? `${n} %` : `${n}%`
}
