import { describe, expect, test } from 'vitest'
import { COST_ITEMS, countSelected, defaultSelection, estimateTotals, toggleItem, type CostItem } from '@/lib/costs'

describe('cost selection', () => {
  test('starts with 6 of 9 items ticked: director, desk and payroll off', () => {
    const s = defaultSelection()
    expect(COST_ITEMS).toHaveLength(9)
    expect(countSelected(s)).toBe(6)
    expect(s.director).toBe(false)
    expect(s.desk).toBe(false)
    expect(s.payroll).toBe(false)
    expect(s.formation).toBe(true)
  })

  test('toggleItem returns a new selection and leaves the input unchanged', () => {
    const s = defaultSelection()
    const next = toggleItem(s, 'payroll')
    expect(next.payroll).toBe(true)
    expect(s.payroll).toBe(false)
    expect(countSelected(next)).toBe(7)
    expect(toggleItem(next, 'payroll')).toEqual(s)
  })
})

describe('estimateTotals', () => {
  test('stays null while the design prices are placeholders', () => {
    expect(estimateTotals(defaultSelection())).toEqual({ setup: null, yearly: null })
  })

  test('sums one-off and yearly items separately when prices are known', () => {
    const priced: CostItem[] = COST_ITEMS.map((i, n) => ({ ...i, price: (n + 1) * 100 }))
    // formation = 100 one-off; yearly ticked by default: office..tax = 200+300+400+500+600
    expect(estimateTotals(defaultSelection(), priced)).toEqual({ setup: 100, yearly: 2000 })
    // adding payroll (900)
    expect(estimateTotals(toggleItem(defaultSelection(), 'payroll'), priced).yearly).toBe(2900)
  })

  test('an unticked unpriced item does not block the total', () => {
    const priced: CostItem[] = COST_ITEMS.map((i) => ({ ...i, price: i.id === 'desk' ? null : 50 }))
    expect(estimateTotals(defaultSelection(), priced)).toEqual({ setup: 50, yearly: 250 })
    expect(estimateTotals(toggleItem(defaultSelection(), 'desk'), priced).yearly).toBeNull()
  })

  test('nothing selected of a kind gives zero', () => {
    const priced: CostItem[] = COST_ITEMS.map((i) => ({ ...i, price: 10 }))
    expect(estimateTotals(toggleItem(defaultSelection(), 'formation'), priced).setup).toBe(0)
  })

  test('rejects negative prices', () => {
    const bad: CostItem[] = COST_ITEMS.map((i) => ({ ...i, price: -1 }))
    expect(() => estimateTotals(defaultSelection(), bad)).toThrow(RangeError)
  })
})
