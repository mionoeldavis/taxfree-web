/**
 * Malta fit quiz scoring: six yes/no questions, one point per "yes".
 * Verdict bands as the design defines them: ≤3 not yet, 4 with changes, 5–6 strong fit.
 */

export const QUIZ_QUESTION_COUNT = 6

export type Answer = boolean | null
export type Answers = readonly Answer[]
export type Verdict = 'strong' | 'withChanges' | 'notYet'

export function emptyAnswers(count: number = QUIZ_QUESTION_COUNT): Answers {
  return Array.from({ length: count }, () => null)
}

/** Returns new answers with question `index` set (the input is left untouched). */
export function setAnswer(answers: Answers, index: number, value: boolean): Answers {
  if (!Number.isInteger(index) || index < 0 || index >= answers.length) {
    throw new RangeError(`question index out of range: ${index}`)
  }
  return answers.map((a, i) => (i === index ? value : a))
}

export const answeredCount = (answers: Answers): number => answers.filter((a) => a !== null).length

export const fitScore = (answers: Answers): number => answers.filter((a) => a === true).length

export const isComplete = (answers: Answers): boolean => answers.length > 0 && answeredCount(answers) === answers.length

/** Share of questions answered, as a whole percentage (0–100). */
export function progressPercent(answers: Answers): number {
  return answers.length ? Math.round((answeredCount(answers) / answers.length) * 100) : 0
}

export function verdictFor(score: number): Verdict {
  if (score <= 3) return 'notYet'
  if (score <= 4) return 'withChanges'
  return 'strong'
}
