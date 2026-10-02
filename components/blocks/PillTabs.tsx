import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { href, type PageKey } from '@/lib/routes'

const SETS = {
  audience: {
    label: { de: 'Für wen', en: 'Who it is for' },
    items: [
      ['forOnlineEntrepreneurs', { de: 'Online-Unternehmer', en: 'Online entrepreneurs' }],
      ['forFreelancers', { de: 'Freelancer', en: 'Freelancers' }],
      ['forInvestors', { de: 'Investoren', en: 'Investors' }],
      ['forFamilies', { de: 'Familien', en: 'Families' }],
      ['forNonEuFounders', { de: 'Nicht-EU-Gründer', en: 'Non-EU founders' }],
    ],
  },
  compare: {
    label: { de: 'Vergleiche', en: 'Comparisons' },
    items: [
      ['compareCyprus', { de: 'vs. Zypern', en: 'vs Cyprus' }],
      ['compareDubai', { de: 'vs. Dubai', en: 'vs Dubai' }],
      ['comparePortugal', { de: 'vs. Portugal', en: 'vs Portugal' }],
    ],
  },
} satisfies Record<string, { label: Record<Locale, string>; items: [PageKey, Record<Locale, string>][] }>

/** Sibling-page switcher (audience pages, comparisons). */
export function PillTabs({ set, active, locale }: { set: keyof typeof SETS; active: PageKey; locale: Locale }) {
  const s = SETS[set]
  return (
    <nav aria-label={s.label[locale]} className="flex flex-wrap gap-2">
      {s.items.map(([key, text]) =>
        key === active ? (
          <span key={key} aria-current="page" className="rounded-full bg-ink px-[15px] py-2 text-[13px] font-bold text-white">
            {text[locale]}
          </span>
        ) : (
          <Link key={key} href={href(key, locale)} className="rounded-full border border-line bg-white px-3.5 py-[7px] text-[13px] font-semibold text-ink no-underline hover:border-brand">
            {text[locale]}
          </Link>
        ),
      )}
    </nav>
  )
}
