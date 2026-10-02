'use client'

import { useState, type ReactNode } from 'react'
import { formatEur, type Locale } from '@/lib/i18n'
import { COST_ITEMS, countSelected, defaultSelection, estimateTotals, toggleItem, type CostItem, type CostItemId } from '@/lib/costs'

const T = {
  en: {
    listLabel: 'Line items',
    items: {
      formation: ['Company formation', 'One-off · incorporation and registration'],
      office: ['Registered office', 'Yearly · Maltese address'],
      secretary: ['Company secretary', 'Yearly · required by law'],
      accounting: ['Bookkeeping and accounts', 'Yearly · monthly or quarterly'],
      audit: ['Statutory audit', 'Yearly · required for every Malta company'],
      tax: ['Tax return and refund claims', 'Yearly · company and shareholder'],
      director: ['Resident director', 'Yearly · supports substance'],
      desk: ['Office desk', 'Yearly · serviced office or coworking'],
      payroll: ['Payroll', 'Yearly · if you employ staff'],
    } satisfies Record<CostItemId, [string, string]>,
    price: (item: CostItem) => (item.price === null ? '€[PRICE]' : formatEur(item.price, 'en')) + (item.kind === 'yearly' ? '/yr' : ''),
    estimate: 'Your estimate',
    setup: 'One-off setup',
    yearly: 'Yearly running costs',
    setupPlaceholder: '€[SETUP TOTAL]',
    yearlyPlaceholder: '€[YEARLY TOTAL]',
    selected: (n: number, of: number) => `${n} of ${of} items selected`,
  },
  de: {
    listLabel: 'Kostenpositionen',
    items: {
      formation: ['Firmengründung', 'Einmalig · Gründung und Registrierung'],
      office: ['Geschäftsadresse', 'Jährlich · Adresse in Malta'],
      secretary: ['Company Secretary', 'Jährlich · gesetzlich vorgeschrieben'],
      accounting: ['Buchhaltung und Abschluss', 'Jährlich · monatlich oder quartalsweise'],
      audit: ['Gesetzliche Abschlussprüfung', 'Jährlich · Pflicht für jede Malta-Firma'],
      tax: ['Steuererklärung und Erstattungsanträge', 'Jährlich · Firma und Gesellschafter'],
      director: ['Ansässiger Direktor', 'Jährlich · stärkt die Substanz'],
      desk: ['Büroarbeitsplatz', 'Jährlich · Serviced Office oder Coworking'],
      payroll: ['Lohnabrechnung', 'Jährlich · wenn Sie Mitarbeiter beschäftigen'],
    } satisfies Record<CostItemId, [string, string]>,
    price: (item: CostItem) => (item.price === null ? '[PREIS] €' : formatEur(item.price, 'de')) + (item.kind === 'yearly' ? '/Jahr' : ''),
    estimate: 'Ihre Schätzung',
    setup: 'Einmalige Gründung',
    yearly: 'Laufende Kosten pro Jahr',
    setupPlaceholder: '[SUMME GRÜNDUNG] €',
    yearlyPlaceholder: '[SUMME PRO JAHR] €',
    selected: (n: number, of: number) => `${n} von ${of} Positionen ausgewählt`,
  },
} as const

/** Tick-list of Malta company line items with a running estimate. `children` render below the estimate. */
export function CostEstimator({ locale, children }: { locale: Locale; children?: ReactNode }) {
  const t = T[locale]
  const [selection, setSelection] = useState(defaultSelection)
  const totals = estimateTotals(selection)
  const count = countSelected(selection)
  return (
    <div className="grid items-start gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))' }}>
      <ul aria-label={t.listLabel} className="m-0 list-none overflow-hidden rounded-[24px] border border-line p-0">
        {COST_ITEMS.map((item) => {
          const on = selection[item.id]
          const [name, note] = t.items[item.id]
          return (
            <li key={item.id} className="border-b border-rule last:border-b-0">
              <button
                type="button"
                role="checkbox"
                aria-checked={on}
                onClick={() => setSelection((s) => toggleItem(s, item.id))}
                className="flex min-h-11 w-full items-center gap-4 border-0 bg-white px-[22px] py-[18px] text-left text-ink transition-colors hover:bg-faq"
              >
                <span
                  aria-hidden="true"
                  className={`flex size-6 shrink-0 items-center justify-center rounded-[7px] text-[15px] font-extrabold ${on ? 'bg-brand text-white' : 'border border-[#9db8a9] bg-white'}`}
                >
                  {on ? '✓' : null}
                </span>
                <span className="flex grow flex-col gap-0.5">
                  <span className="text-base font-bold">{name}</span>
                  <span className="text-sm text-muted">{note}</span>
                </span>
                <span className="whitespace-nowrap text-[15px] font-bold">{t.price(item)}</span>
              </button>
            </li>
          )
        })}
      </ul>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 rounded-[24px] bg-ink p-7 text-white" aria-live="polite">
          <h2 className="m-0 text-sm font-extrabold uppercase tracking-[0.08em] text-mint">{t.estimate}</h2>
          <dl className="m-0 flex flex-col gap-3 text-base text-on-dark">
            <div className="flex justify-between gap-4">
              <dt>{t.setup}</dt>
              <dd className="m-0">{totals.setup === null ? t.setupPlaceholder : formatEur(totals.setup, locale)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>{t.yearly}</dt>
              <dd className="m-0">{totals.yearly === null ? t.yearlyPlaceholder : formatEur(totals.yearly, locale)}</dd>
            </div>
          </dl>
          <p className="m-0 border-t border-dark-rule pt-3 text-[15px] text-on-dark">{t.selected(count, COST_ITEMS.length)}</p>
        </div>
        {children}
      </div>
    </div>
  )
}
