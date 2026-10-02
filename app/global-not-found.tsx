import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import { manrope } from './fonts'
import { Logo } from '@/components/layout/Logo'
import { href } from '@/lib/routes'

export const metadata: Metadata = { title: '404 — Seite nicht gefunden · Page not found', robots: { index: false } }

export default function GlobalNotFound() {
  return (
    <html lang="de" className={manrope.variable}>
      <body>
        <main className="mx-auto flex min-h-svh max-w-[640px] flex-col justify-center gap-6 px-6">
          <Logo homeHref={href('home', 'de')} />
          <h1 className="h1 m-0">404</h1>
          <p className="m-0 text-lg text-body">Diese Seite gibt es nicht (mehr). · This page does not exist.</p>
          <div className="flex flex-wrap gap-3">
            <Link href={href('home', 'de')} className="rounded-btn bg-brand px-6 py-4 font-bold text-white no-underline">
              Zur Startseite
            </Link>
            <Link href={href('home', 'en')} className="rounded-btn border border-line-strong px-6 py-4 font-bold text-ink no-underline">
              Go to homepage
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
