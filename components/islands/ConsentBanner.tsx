'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useSyncExternalStore } from 'react'
import type { Locale } from '@/lib/i18n'
import { integrations } from '@/lib/site'

const KEY = 'tf-consent-v1'
type Choice = 'granted' | 'denied'

const T = {
  en: { text: 'We would like to measure visits with privacy-friendly analytics (no cookies for advertising). Allowed only with your consent.', accept: 'Allow', decline: 'Decline', more: 'Privacy policy' },
  de: { text: 'Wir möchten Besuche mit datenschutzfreundlicher Statistik messen (keine Werbe-Cookies). Nur mit Ihrer Einwilligung.', accept: 'Erlauben', decline: 'Ablehnen', more: 'Datenschutz' },
} as const

let sessionChoice: Choice | null = null
const listeners = new Set<() => void>()
function subscribe(cb: () => void) {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

function readChoice(): Choice | null {
  try {
    const v = window.localStorage.getItem(KEY)
    return v === 'granted' || v === 'denied' ? v : sessionChoice
  } catch {
    return sessionChoice
  }
}

/** Consent banner; the analytics script is injected only after an explicit “Allow”. Hidden when no analytics is configured. */
export function ConsentBanner({ locale, privacyHref }: { locale: Locale; privacyHref: string }) {
  const t = T[locale]
  // undefined on the server / first paint, so the banner never flashes before storage is read
  const choice = useSyncExternalStore(subscribe, readChoice, () => undefined)
  const domain = integrations.plausibleDomain

  function decide(c: Choice) {
    try {
      window.localStorage.setItem(KEY, c)
    } catch {
      // storage blocked: the banner will ask again on the next page
    }
    sessionChoice = c
    listeners.forEach((l) => l())
  }

  if (!domain) return null
  return (
    <>
      {choice === 'granted' ? <Script defer data-domain={domain} src="https://plausible.io/js/script.js" strategy="afterInteractive" /> : null}
      {choice === null ? (
        <div role="region" aria-label={t.more} className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-[720px] flex-col gap-4 rounded-card border border-line bg-white p-5 shadow-[0_12px_32px_rgba(14,31,25,0.18)] sm:flex-row sm:items-center">
          <p className="m-0 flex-1 text-sm leading-normal text-body">
            {t.text}{' '}
            <Link href={privacyHref} className="underline">
              {t.more}
            </Link>
          </p>
          <div className="flex gap-2">
            <button type="button" onClick={() => decide('denied')} className="min-h-11 rounded-btn border border-ink px-4 font-bold">
              {t.decline}
            </button>
            <button type="button" onClick={() => decide('granted')} className="min-h-11 rounded-btn bg-brand px-4 font-bold text-white">
              {t.accept}
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
