'use client'

import { useState } from 'react'
import { formatEur, formatPercent, type Locale } from '@/lib/i18n'
import { compare, HEBESATZ_PRESETS, PROFIT_PRESETS } from '@/lib/tax'
import { ChoiceGroup } from './ChoiceGroup'
import { profitLabel } from './MaltaRateCalculator'

const T = {
  en: {
    inputs: 'Your inputs',
    profit: 'Annual profit before tax',
    hebe: 'German trade-tax multiplier (Hebesatz)',
    hebeHint: '400% is common; large cities are often higher.',
    assumptions: 'Assumes trading profit, full distribution, no church tax, Malta company run from Malta and you resident there as a non-dom.',
    de: 'Germany (GmbH)',
    mt: 'Malta (Ltd)',
    totalTax: 'total tax',
    difference: 'Difference per year, before running costs',
    deSteps: 'Germany, step by step',
    kst: 'Corporate tax + Soli (15.825%)',
    gew: (h: string) => `Trade tax (3.5% × ${h})`,
    abg: (d: string) => `Dividend tax 26.375% on ${d}`,
    mtSteps: 'Malta, step by step',
    mtCorp: 'Corporate tax at 35%',
    mtRefund: 'Shareholder refund (6/7)',
    disclaimer: 'Indicative only. Excludes Malta running costs, German exit tax and personal circumstances. Not tax advice.',
  },
  de: {
    inputs: 'Ihre Angaben',
    profit: 'Jahresgewinn vor Steuern',
    hebe: 'Gewerbesteuer-Hebesatz',
    hebeHint: '400 % ist üblich; Großstädte liegen oft darüber.',
    assumptions: 'Annahmen: operativer Gewinn, Vollausschüttung, keine Kirchensteuer, Malta-Firma wird von Malta aus geführt und Sie sind dort als Non-Dom ansässig.',
    de: 'Deutschland (GmbH)',
    mt: 'Malta (Ltd)',
    totalTax: 'Gesamtsteuer',
    difference: 'Differenz pro Jahr, vor laufenden Kosten',
    deSteps: 'Deutschland, Schritt für Schritt',
    kst: 'Körperschaftsteuer + Soli (15,825 %)',
    gew: (h: string) => `Gewerbesteuer (3,5 % × ${h})`,
    abg: (d: string) => `Abgeltungsteuer 26,375 % auf ${d}`,
    mtSteps: 'Malta, Schritt für Schritt',
    mtCorp: 'Körperschaftsteuer 35 %',
    mtRefund: 'Erstattung an Gesellschafter (6/7)',
    disclaimer: 'Nur Richtwerte. Ohne laufende Kosten in Malta, deutsche Wegzugsteuer und persönliche Umstände. Keine Steuerberatung.',
  },
} as const

function Line({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex justify-between gap-3 border-t border-rule px-5 py-3">
      <span>{label}</span>
      <b className={accent ? 'text-brand' : ''}>{value}</b>
    </div>
  )
}

/** Full Malta-vs-Germany calculator (tools page). Explanatory text around it is static HTML. */
export function TaxCalculator({ locale }: { locale: Locale }) {
  const t = T[locale]
  const [profit, setProfit] = useState<number>(250_000)
  const [hebe, setHebe] = useState<number>(400)
  const { germany: de, malta: mt, difference } = compare(profit, hebe)
  const eur = (n: number) => formatEur(n, locale)
  const pct = (n: number) => formatPercent(n * 100, locale)
  const hebeLabel = formatPercent(hebe, locale, 0)
  return (
    <div className="grid items-start gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))' }}>
      <div className="flex flex-col gap-[22px] rounded-[24px] border border-line p-7">
        <h2 className="m-0 text-lg font-extrabold">{t.inputs}</h2>
        <ChoiceGroup legend={t.profit} value={profit} onChange={setProfit} options={PROFIT_PRESETS.map((v) => ({ value: v, label: profitLabel(v, locale) }))} />
        <div className="flex flex-col gap-2.5">
          <ChoiceGroup legend={t.hebe} value={hebe} onChange={setHebe} options={HEBESATZ_PRESETS.map((v) => ({ value: v, label: formatPercent(v, locale, 0) }))} />
          <p className="m-0 text-[13px] text-muted">{t.hebeHint}</p>
        </div>
        <p className="m-0 rounded-2xl bg-faq p-4 text-sm leading-relaxed text-body">{t.assumptions}</p>
      </div>

      <div className="flex flex-col gap-4" aria-live="polite">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5 rounded-card border border-line p-6">
            <div className="text-sm font-bold text-muted">{t.de}</div>
            <div className="text-[clamp(26px,3vw,36px)] font-extrabold tracking-[-0.02em]">{eur(de.total)}</div>
            <div className="text-[15px] text-body">
              {pct(de.rate)} {t.totalTax}
            </div>
          </div>
          <div className="flex flex-col gap-1.5 rounded-card bg-brand p-6 text-white">
            <div className="text-sm font-bold text-on-dark">{t.mt}</div>
            <div className="text-[clamp(26px,3vw,36px)] font-extrabold tracking-[-0.02em]">{eur(mt.total)}</div>
            <div className="text-[15px] text-on-dark">
              {pct(mt.rate)} {t.totalTax}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-2 rounded-card bg-ink p-6 text-white">
          <span className="text-base text-on-dark">{t.difference}</span>
          <span className="text-[clamp(28px,3vw,36px)] font-extrabold text-mint">{eur(difference)}</span>
        </div>
        <div className="overflow-hidden rounded-card border border-line text-[15px]">
          <div className="bg-gray-soft px-5 py-3.5 font-extrabold">{t.deSteps}</div>
          <Line label={t.kst} value={eur(de.corporateTax)} />
          <Line label={t.gew(hebeLabel)} value={eur(de.tradeTax)} />
          <Line label={t.abg(eur(de.dividend))} value={eur(de.dividendTax)} />
          <div className="border-t border-rule bg-gray-soft px-5 py-3.5 font-extrabold">{t.mtSteps}</div>
          <Line label={t.mtCorp} value={eur(mt.corporateTax)} />
          <Line label={t.mtRefund} value={`−${eur(mt.refund)}`} accent />
        </div>
        <p className="m-0 text-[13px] leading-relaxed text-muted">{t.disclaimer}</p>
      </div>
    </div>
  )
}
