/**
 * Cost estimator maths. The design lists the line items but leaves every price as a placeholder,
 * so prices are `null` until real fees are published. A total is only computed when every
 * selected item of that kind has a price; otherwise it stays `null` (shown as a placeholder).
 */

export type CostKind = 'oneOff' | 'yearly'

export const COST_ITEM_IDS = ['formation', 'office', 'secretary', 'accounting', 'audit', 'tax', 'director', 'desk', 'payroll'] as const
export type CostItemId = (typeof COST_ITEM_IDS)[number]

export interface CostItem {
  id: CostItemId
  kind: CostKind
  /** Euro amount (per year for yearly items); null = not published yet. */
  price: number | null
}

export const COST_ITEMS: readonly CostItem[] = [
  { id: 'formation', kind: 'oneOff', price: null },
  { id: 'office', kind: 'yearly', price: null },
  { id: 'secretary', kind: 'yearly', price: null },
  { id: 'accounting', kind: 'yearly', price: null },
  { id: 'audit', kind: 'yearly', price: null },
  { id: 'tax', kind: 'yearly', price: null },
  { id: 'director', kind: 'yearly', price: null },
  { id: 'desk', kind: 'yearly', price: null },
  { id: 'payroll', kind: 'yearly', price: null },
]

/** Optional items the design leaves unticked at first. */
export const DEFAULT_EXCLUDED: readonly CostItemId[] = ['director', 'desk', 'payroll']

export type CostSelection = Readonly<Record<CostItemId, boolean>>

export function defaultSelection(): CostSelection {
  return Object.fromEntries(COST_ITEM_IDS.map((id) => [id, !DEFAULT_EXCLUDED.includes(id)])) as CostSelection
}

/** Returns a new selection with one item flipped (the input is left untouched). */
export function toggleItem(selection: CostSelection, id: CostItemId): CostSelection {
  return { ...selection, [id]: !selection[id] }
}

export function countSelected(selection: CostSelection): number {
  return COST_ITEM_IDS.filter((id) => selection[id]).length
}

export interface CostTotals {
  setup: number | null
  yearly: number | null
}

function sumKind(items: readonly CostItem[], selection: CostSelection, kind: CostKind): number | null {
  const chosen = items.filter((i) => i.kind === kind && selection[i.id])
  if (chosen.some((i) => i.price === null)) return null
  return chosen.reduce((sum, i) => {
    const price = i.price as number
    if (!Number.isFinite(price) || price < 0) throw new RangeError(`price of ${i.id} must be a non-negative number, got ${price}`)
    return sum + price
  }, 0)
}

export function estimateTotals(selection: CostSelection, items: readonly CostItem[] = COST_ITEMS): CostTotals {
  return { setup: sumKind(items, selection, 'oneOff'), yearly: sumKind(items, selection, 'yearly') }
}
