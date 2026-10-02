/**
 * Calculator maths. Simplified, indicative models only — the pages say so next to every result.
 *
 * Germany: GmbH profit fully distributed to a resident individual shareholder holding privately
 * (Abgeltungsteuer), no church tax.
 * Malta: Ltd under the full imputation system; the shareholder claims a refund of the tax paid
 * when profits are distributed.
 */

export const DE_CORPORATE_TAX_WITH_SOLI = 0.15825 // 15% KSt × 1.055 Soli
export const DE_TRADE_TAX_BASE_RATE = 0.035 // Steuermesszahl, multiplied by the municipal Hebesatz
export const DE_DIVIDEND_TAX_WITH_SOLI = 0.26375 // 25% Abgeltungsteuer × 1.055 Soli
export const MT_CORPORATE_TAX = 0.35

export const PROFIT_PRESETS = [100_000, 250_000, 500_000, 1_000_000] as const
export const HEBESATZ_PRESETS = [400, 450, 490] as const

export type MaltaIncomeKind = 'trading' | 'passive' | 'holding'

/** Share of the Malta tax paid that comes back to the shareholder on distribution. */
export const MT_REFUND_SHARE: Record<MaltaIncomeKind, number> = {
  trading: 6 / 7,
  passive: 5 / 7, // passive interest and royalties
  holding: 0, // participation exemption: no tax paid, so nothing to refund
}

export interface GermanyResult {
  corporateTax: number
  tradeTax: number
  dividend: number
  dividendTax: number
  total: number
  rate: number
}

export interface MaltaResult {
  corporateTax: number
  refund: number
  total: number
  rate: number
}

function assertProfit(profit: number): void {
  if (!Number.isFinite(profit) || profit < 0) throw new RangeError(`profit must be a non-negative number, got ${profit}`)
}

const rateOf = (total: number, profit: number) => (profit > 0 ? total / profit : 0)

export function germanyGmbh(profit: number, hebesatzPercent: number): GermanyResult {
  assertProfit(profit)
  if (!Number.isFinite(hebesatzPercent) || hebesatzPercent < 200) {
    throw new RangeError(`Hebesatz must be at least the legal minimum of 200%, got ${hebesatzPercent}`)
  }
  const corporateTax = profit * DE_CORPORATE_TAX_WITH_SOLI
  const tradeTax = profit * DE_TRADE_TAX_BASE_RATE * (hebesatzPercent / 100)
  const dividend = profit - corporateTax - tradeTax
  const dividendTax = dividend * DE_DIVIDEND_TAX_WITH_SOLI
  const total = corporateTax + tradeTax + dividendTax
  return { corporateTax, tradeTax, dividend, dividendTax, total, rate: rateOf(total, profit) }
}

export function maltaLtd(profit: number, kind: MaltaIncomeKind = 'trading'): MaltaResult {
  assertProfit(profit)
  const corporateTax = kind === 'holding' ? 0 : profit * MT_CORPORATE_TAX
  const refund = corporateTax * MT_REFUND_SHARE[kind]
  const total = corporateTax - refund
  return { corporateTax, refund, total, rate: rateOf(total, profit) }
}

/** Yearly difference Germany − Malta before Malta running costs (positive = Malta is cheaper). */
export function compare(profit: number, hebesatzPercent: number) {
  const germany = germanyGmbh(profit, hebesatzPercent)
  const malta = maltaLtd(profit, 'trading')
  return { germany, malta, difference: germany.total - malta.total }
}
