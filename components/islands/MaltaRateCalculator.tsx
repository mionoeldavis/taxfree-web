'use client'

import Link from 'next/link'
import { useState } from 'react'
import { formatEur, formatPercent, type Locale } from '@/lib/i18n'
import { maltaLtd, PROFIT_PRESETS, type MaltaIncomeKind } from '@/lib/tax'
import { ChoiceGroup } from './ChoiceGroup'

const T = {
  en: {
    title: 'Malta company tax calculator',
    illustrative: 'Illustrative',
    profit: 'Annual profit',
    kind: 'Type of income',
    kinds: { trading: 'Trading', passive: 'Royalties', holding: 'Holding' },
    corp: 'Corporate tax paid',
    refund: 'Shareholder refund',
    refundNone: 'none needed',
    net: 'Net tax in Malta',
    rate: 'Effective rate',
    notes: {
      trading: 'Trading profits: 35% paid, 6/7 refunded to the shareholder on distribution.',
      passive: 'Passive interest and royalties: 35% paid, 5/7 refunded.',
      holding: 'Qualifying dividends and gains from participations are exempt.',
    },
    caveat: 'Excludes home-country taxes and running costs. Requires real substance in Malta.',
    cta: 'Compare with my current tax',
  },
  de: {
    title: 'Steuerrechner Malta-Firma',
    illustrative: 'Beispielrechnung',
    profit: 'Jahresgewinn',
    kind: 'Art der Einkünfte',
    kinds: { trading: 'Handel/Dienstl.', passive: 'Lizenzen', holding: 'Holding' },
    corp: 'Gezahlte Körperschaftsteuer',
    refund: 'Erstattung an Gesellschafter',
    refundNone: 'nicht nötig',
    net: 'Nettosteuer in Malta',
    rate: 'Effektiver Satz',
    notes: {
      trading: 'Operative Gewinne: 35 % gezahlt, 6/7 bei Ausschüttung an den Gesellschafter erstattet.',
      passive: 'Passive Zinsen und Lizenzgebühren: 35 % gezahlt, 5/7 erstattet.',
      holding: 'Qualifizierte Dividenden und Veräußerungsgewinne aus Beteiligungen sind steuerfrei.',
    },
    caveat: 'Ohne Steuern im Heimatland und laufende Kosten. Setzt echte Substanz in Malta voraus.',
    cta: 'Mit meiner aktuellen Steuer vergleichen',
  },
} as const

const REFUND_LABEL: Record<MaltaIncomeKind, string | null> = { trading: '6/7', passive: '5/7', holding: null }

export function profitLabel(v: number, locale: Locale) {
  if (v >= 1_000_000) return locale === 'de' ? '1 Mio. €' : '€1M'
  return locale === 'de' ? `${v / 1000}k €` : `€${v / 1000}k`
}

/** Home-page hero calculator: Malta-side rate for a profit and income type. */
export function MaltaRateCalculator({ locale, compareHref }: { locale: Locale; compareHref: string }) {
  const t = T[locale]
  const [profit, setProfit] = useState<number>(250_000)
  const [kind, setKind] = useState<MaltaIncomeKind>('trading')
  const r = maltaLtd(profit, kind)
  const refundLabel = REFUND_LABEL[kind] ?? t.refundNone
  const rows: [string, string, boolean][] = [
    [t.corp, formatEur(r.corporateTax, locale), false],
    [`${t.refund} (${refundLabel})`, `+${formatEur(r.refund, locale)}`, true],
    [t.net, formatEur(r.total, locale), false],
  ]
  return (
    <div className="flex flex-col gap-5 rounded-card border border-line-strong bg-white p-7 shadow-[0_1px_2px_rgba(14,31,25,0.06)]">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="m-0 text-xl font-extrabold">{t.title}</h2>
        <span className="text-[13px] text-muted">{t.illustrative}</span>
      </div>
      <ChoiceGroup legend={t.profit} value={profit} onChange={setProfit} options={PROFIT_PRESETS.map((v) => ({ value: v, label: profitLabel(v, locale) }))} />
      <ChoiceGroup
        legend={t.kind}
        look="segmented"
        value={kind}
        onChange={setKind}
        options={(['trading', 'passive', 'holding'] as const).map((k) => ({ value: k, label: t.kinds[k] }))}
      />
      <div className="flex flex-col overflow-hidden rounded-[14px] border border-rule" aria-live="polite">
        {rows.map(([label, value, accent]) => (
          <div key={label} className="flex justify-between gap-3 border-b border-[#EEF2F0] px-4 py-3 text-[15px]">
            <span className="text-body">{label}</span>
            <span className={`font-bold ${accent ? 'text-brand' : ''}`}>{value}</span>
          </div>
        ))}
        <div className="flex items-baseline justify-between bg-brand p-4 text-white">
          <span className="text-[15px] font-semibold">{t.rate}</span>
          <span className="text-[34px] font-extrabold tracking-[-0.02em]">{formatPercent(r.rate * 100, locale)}</span>
        </div>
      </div>
      <p className="m-0 text-[13px] leading-normal text-muted">
        {t.notes[kind]} {t.caveat}
      </p>
      <Link href={compareHref} className="rounded-btn bg-ink p-4 text-center text-base font-bold text-white no-underline hover:bg-ink-2">
        {t.cta} <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}
