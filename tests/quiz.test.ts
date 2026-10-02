import { describe, expect, test } from 'vitest'
import { answeredCount, emptyAnswers, fitScore, isComplete, progressPercent, QUIZ_QUESTION_COUNT, setAnswer, verdictFor } from '@/lib/quiz'

describe('quiz answers', () => {
  test('start with six unanswered questions', () => {
    const a = emptyAnswers()
    expect(a).toHaveLength(QUIZ_QUESTION_COUNT)
    expect(answeredCount(a)).toBe(0)
    expect(progressPercent(a)).toBe(0)
    expect(isComplete(a)).toBe(false)
  })

  test('setAnswer returns a new array and leaves the input unchanged', () => {
    const a = emptyAnswers()
    const b = setAnswer(a, 2, true)
    expect(b[2]).toBe(true)
    expect(a[2]).toBeNull()
  })

  test('changing an answer does not double count', () => {
    const a = setAnswer(setAnswer(emptyAnswers(), 0, true), 0, false)
    expect(answeredCount(a)).toBe(1)
    expect(fitScore(a)).toBe(0)
  })

  test('score counts yes answers, progress rounds to whole percent', () => {
    let a = emptyAnswers()
    a = setAnswer(a, 0, true)
    a = setAnswer(a, 1, false)
    a = setAnswer(a, 3, true)
    expect(fitScore(a)).toBe(2)
    expect(progressPercent(a)).toBe(50)
    expect(progressPercent(setAnswer(a, 4, true))).toBe(67)
  })

  test('complete only when all six are answered', () => {
    const all = [0, 1, 2, 3, 4, 5].reduce((acc, i) => setAnswer(acc, i, i % 2 === 0), emptyAnswers())
    expect(isComplete(all)).toBe(true)
    expect(progressPercent(all)).toBe(100)
  })

  test('rejects an out-of-range question index', () => {
    expect(() => setAnswer(emptyAnswers(), 6, true)).toThrow(RangeError)
    expect(() => setAnswer(emptyAnswers(), -1, true)).toThrow(RangeError)
  })
})

describe('verdictFor', () => {
  test.each([
    [0, 'notYet'],
    [3, 'notYet'],
    [4, 'withChanges'],
    [5, 'strong'],
    [6, 'strong'],
  ] as const)('score %i → %s', (score, verdict) => {
    expect(verdictFor(score)).toBe(verdict)
  })
})
