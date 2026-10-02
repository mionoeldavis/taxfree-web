import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/layout/Logo'
import { href } from '@/lib/routes'
import { siteName, siteUrl } from '@/lib/site'

// The host redirects / → /de/ (public/_redirects, vercel.json). This page is the fallback.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} — Malta relocation & tax`,
  description: 'Choose your language · Sprache wählen',
  alternates: { canonical: href('home', 'de'), languages: { de: href('home', 'de'), en: href('home', 'en'), 'x-default': href('home', 'de') } },
  robots: { index: false, follow: true },
}

export default function LanguageChooser() {
  return (
    <main className="mx-auto flex min-h-svh max-w-[560px] flex-col justify-center gap-8 px-6">
      <Logo homeHref={href('home', 'de')} />
      <h1 className="h2 m-0">Sprache wählen · Choose your language</h1>
      <div className="flex flex-wrap gap-3">
        <Link href={href('home', 'de')} lang="de" hrefLang="de" className="rounded-btn bg-brand px-6 py-4 font-bold text-white no-underline">
          Deutsch
        </Link>
        <Link href={href('home', 'en')} lang="en" hrefLang="en" className="rounded-btn border border-line-strong px-6 py-4 font-bold text-ink no-underline">
          English
        </Link>
      </div>
    </main>
  )
}
