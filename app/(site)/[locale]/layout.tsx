import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import '../../globals.css'
import { manrope } from '../../fonts'
import { ConsentBanner } from '@/components/islands/ConsentBanner'
import { htmlLang, isLocale, locales } from '@/lib/i18n'
import { href } from '@/lib/routes'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <html lang={htmlLang[locale]} className={manrope.variable}>
      <body>
        {children}
        <ConsentBanner locale={locale} privacyHref={href('privacy', locale)} />
      </body>
    </html>
  )
}
