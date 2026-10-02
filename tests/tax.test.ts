import { describe, expect, test } from 'vitest'
import { compare, germanyGmbh, maltaLtd } from '@/lib/tax'

describe('maltaLtd', () => {
  test('trading profit: 35% paid, 6/7 refunded, 5% effective', () => {
    const r = maltaLtd(100_000, 'trading')
    expect(r.corporateTax).toBeCloseTo(35_000)
    expect(r.refund).toBeCloseTo(30_000)
    expect(r.total).toBeCloseTo(5_000)
    expect(r.rate).toBeCloseTo(0.05)
  })

  test('passive income: 5/7 refunded, 10% effective', () => {
    const r = maltaLtd(100_000, 'passive')
    expect(r.refund).toBeCloseTo(25_000)
    expect(r.rate).toBeCloseTo(0.1)
  })

  test('holding: exempt participation income pays nothing', () => {
    expect(maltaLtd(250_000, 'holding')).toEqual({ corporateTax: 0, refund: 0, total: 0, rate: 0 })
  })

  test('zero profit gives a zero rate instead of NaN', () => {
    expect(maltaLtd(0).rate).toBe(0)
  })

  test('rejects negative or non-numeric profit', () => {
    expect(() => maltaLtd(-1)).toThrow(RangeError)
    expect(() => maltaLtd(Number.NaN)).toThrow(RangeError)
  })
})

describe('germanyGmbh', () => {
  test('250k profit at 400% Hebesatz matches the case-study figure (≈ €120,800)', () => {
    const r = germanyGmbh(250_000, 400)
    expect(r.corporateTax).toBeCloseTo(39_562.5)
    expect(r.tradeTax).toBeCloseTo(35_000)
    expect(r.dividend).toBeCloseTo(175_437.5)
    expect(r.dividendTax).toBeCloseTo(46_271.64, 1)
    expect(Math.round(r.total / 100) * 100).toBe(120_800)
  })

  test('a higher Hebesatz raises only the trade tax and what follows from it', () => {
    const low = germanyGmbh(100_000, 400)
    const high = germanyGmbh(100_000, 490)
    expect(high.corporateTax).toBe(low.corporateTax)
    expect(high.tradeTax).toBeGreaterThan(low.tradeTax)
    expect(high.total).toBeGreaterThan(low.total)
  })

  test('rejects a Hebesatz below the legal minimum of 200%', () => {
    expect(() => germanyGmbh(100_000, 150)).toThrow(RangeError)
  })
})

describe('compare', () => {
  test('difference is Germany total minus Malta total', () => {
    const r = compare(500_000, 450)
    expect(r.difference).toBeCloseTo(r.germany.total - r.malta.total)
    expect(r.difference).toBeGreaterThan(0)
  })
})
