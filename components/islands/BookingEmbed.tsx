'use client'

import { useState } from 'react'
import type { Locale } from '@/lib/i18n'
import { integrations } from '@/lib/site'

const T = {
  en: {
    load: 'Show available times',
    notice: 'The calendar is provided by Cal.com. Loading it sends your IP address to Cal.com.',
    fallback: 'Online booking is not connected yet.',
    fallbackCta: 'Send us a message instead',
    frameTitle: 'Book a free consultation',
  },
  de: {
    load: 'Freie Termine anzeigen',
    notice: 'Der Kalender wird von Cal.com bereitgestellt. Beim Laden wird Ihre IP-Adresse an Cal.com übermittelt.',
    fallback: 'Die Online-Buchung ist noch nicht angebunden.',
    fallbackCta: 'Schreiben Sie uns stattdessen',
    frameTitle: 'Kostenlose Beratung buchen',
  },
} as const

/** Cal.com booking calendar, loaded only after a click (no third-party request before consent). */
export function BookingEmbed({ locale, contactHref }: { locale: Locale; contactHref: string }) {
  const t = T[locale]
  const [loaded, setLoaded] = useState(false)
  const link = integrations.calLink.replace(/^\/+/, '')

  if (!link) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-card border border-line p-7">
        <p className="m-0 text-base text-body">{t.fallback}</p>
        <a href={contactHref} className="font-bold text-brand underline">
          {t.fallbackCta}
        </a>
      </div>
    )
  }
  if (loaded) {
    return (
      <iframe
        title={t.frameTitle}
        src={`https://cal.com/${encodeURI(link)}?embed=true&locale=${locale}`}
        className="h-[720px] w-full rounded-card border border-line"
        loading="lazy"
      />
    )
  }
  return (
    <div className="flex flex-col items-start gap-3 rounded-card border border-line p-7">
      <button type="button" onClick={() => setLoaded(true)} className="min-h-12 rounded-btn bg-brand px-6 py-4 font-bold text-white hover:bg-[#094c33]">
        {t.load}
      </button>
      <p className="m-0 text-sm text-muted">{t.notice}</p>
    </div>
  )
}
