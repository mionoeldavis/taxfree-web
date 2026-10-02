import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { href } from '@/lib/routes'
import { company, siteName } from '@/lib/site'
import { ui } from '@/lib/ui'
import { Logo } from './Logo'

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = ui[locale]
  return (
    <footer className="w-full bg-ink text-on-dark-muted">
      <div className="mx-auto box-border flex max-w-[1200px] flex-col gap-12 px-6 pb-8 pt-16">
        <div className="grid gap-8 text-[15px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))' }}>
          <div className="flex flex-col gap-3">
            <Logo homeHref={href('home', locale)} onDark />
            <p className="m-0 text-sm leading-relaxed">{t.footerTagline}</p>
            <p className="m-0 text-sm">{t.footerLanguages}</p>
          </div>
          {t.footerColumns.map(([title, links]) => (
            <nav key={title} aria-label={title} className="flex flex-col gap-2.5">
              <div className="font-bold text-white">{title}</div>
              {links.map(([key, label]) => (
                <Link key={key} href={href(key, locale)} className="text-on-dark-muted no-underline hover:text-white">
                  {label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-dark-rule pt-6 text-[13px]">
          <span>
            © {siteName} · {company.companyNo} · {company.street}, {company.town}, Malta
          </span>
          <span>
            <Link href={href('imprint', locale)} className="text-on-dark-muted underline hover:text-white">
              {t.imprint}
            </Link>{' '}
            ·{' '}
            <Link href={href('privacy', locale)} className="text-on-dark-muted underline hover:text-white">
              {t.privacy}
            </Link>{' '}
            · {t.footerDisclaimer}
          </span>
        </div>
      </div>
    </footer>
  )
}
