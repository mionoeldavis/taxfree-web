import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { href } from '@/lib/routes'
import { ui } from '@/lib/ui'
import { Logo } from './Logo'

/**
 * Zero-JS header. On small screens the nav folds into a <details> disclosure.
 * `alternate` is the same page in the other language (hreflang pair), used by the language switch.
 */
export function SiteHeader({ locale, alternate }: { locale: Locale; alternate: { locale: Locale; href: string } }) {
  const t = ui[locale]
  const links = t.nav.map(([key, label]) => (
    <Link key={key} href={href(key, locale)} className="py-2 text-[15px] font-medium text-ink no-underline hover:text-brand">
      {label}
    </Link>
  ))
  const lang = (
    <Link href={alternate.href} hrefLang={alternate.locale} lang={alternate.locale} aria-label={t.switchLanguage} className="py-2 text-[15px] font-medium text-muted no-underline hover:text-ink">
      <span className={locale === 'en' ? 'font-extrabold text-ink' : ''}>EN</span> · <span className={locale === 'de' ? 'font-extrabold text-ink' : ''}>DE</span>
    </Link>
  )
  const cta = (
    <Link href={href('consultation', locale)} className="inline-flex min-h-11 items-center rounded-btn bg-brand px-5 py-3 font-bold text-white no-underline hover:bg-[#094c33]">
      {t.freeConsultation}
    </Link>
  )
  return (
    <header className="w-full border-b border-rule bg-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-btn focus:bg-ink focus:px-4 focus:py-3 focus:text-white">
        {t.skipToContent}
      </a>
      <div className="mx-auto box-border flex min-h-20 max-w-[1200px] items-center justify-between gap-4 px-6">
        <Logo homeHref={href('home', locale)} />
        <nav aria-label={t.mainNav} className="hidden items-center gap-[26px] lg:flex">
          {links}
          {lang}
          {cta}
        </nav>
        <details key={alternate.href} className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-btn border border-line-strong px-4 font-bold [&::-webkit-details-marker]:hidden">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            {t.menu}
          </summary>
          <nav aria-label={t.mainNav} className="absolute right-0 top-[calc(100%+8px)] z-40 flex w-[min(86vw,320px)] flex-col gap-1 rounded-card border border-line bg-white p-5 shadow-[0_12px_32px_rgba(14,31,25,0.14)]">
            {links}
            {lang}
            <div className="pt-2">{cta}</div>
          </nav>
        </details>
      </div>
    </header>
  )
}
