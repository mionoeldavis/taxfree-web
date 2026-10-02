'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Locale } from '@/lib/i18n'
import { answeredCount, emptyAnswers, fitScore, isComplete, progressPercent, setAnswer, verdictFor, type Verdict } from '@/lib/quiz'
import { href } from '@/lib/routes'

const T = {
  en: {
    questions: [
      'Can your business run without you being in Germany most weeks?',
      'Is your yearly profit clearly above what a Malta company costs to run?',
      'Are you ready to give up your home in Germany?',
      'Would your partner and children move with you (or do you move alone)?',
      'Can the company be managed from Malta, with real decisions made there?',
      'Do you want to stay inside the EU, with the euro?',
    ],
    yes: 'Yes',
    no: 'No',
    answered: (n: number, of: number) => `${n} of ${of} answered`,
    score: (n: number, of: number) => `Fit score ${n} / ${of}`,
    progress: 'Quiz progress',
    result: 'Your result',
    verdicts: {
      strong: ['Malta looks like a strong fit.', 'Your situation matches what makes the structure work. Next: run your numbers and plan the exit from Germany.'],
      withChanges: ['Malta could work, with some changes.', 'One or two points need solving first — usually the German home, family or how the company is managed.'],
      notYet: ['Malta probably isn’t right for you yet.', 'Too many ties or too little profit would undo the benefit. A call can show what would need to change.'],
    } satisfies Record<Verdict, [string, string]>,
    discuss: 'Discuss my result',
    numbers: 'See the numbers',
  },
  de: {
    questions: [
      'Kann Ihr Geschäft laufen, ohne dass Sie die meisten Wochen in Deutschland sind?',
      'Liegt Ihr Jahresgewinn deutlich über den laufenden Kosten einer Malta-Firma?',
      'Sind Sie bereit, Ihre Wohnung in Deutschland aufzugeben?',
      'Würden Partner und Kinder mitziehen (oder ziehen Sie allein)?',
      'Kann die Firma von Malta aus geführt werden, mit echten Entscheidungen vor Ort?',
      'Möchten Sie in der EU und beim Euro bleiben?',
    ],
    yes: 'Ja',
    no: 'Nein',
    answered: (n: number, of: number) => `${n} von ${of} beantwortet`,
    score: (n: number, of: number) => `Punktzahl ${n} / ${of}`,
    progress: 'Fortschritt',
    result: 'Ihr Ergebnis',
    verdicts: {
      strong: ['Malta passt sehr gut zu Ihnen.', 'Ihre Situation erfüllt, was die Struktur trägt. Nächster Schritt: Zahlen durchrechnen und den Wegzug aus Deutschland planen.'],
      withChanges: ['Malta könnte passen – mit einigen Änderungen.', 'Ein oder zwei Punkte müssen vorher gelöst werden – meist die Wohnung in Deutschland, die Familie oder die Geschäftsführung der Firma.'],
      notYet: ['Malta passt wahrscheinlich noch nicht zu Ihnen.', 'Zu viele Bindungen oder zu wenig Gewinn würden den Vorteil aufheben. Ein Gespräch zeigt, was sich ändern müsste.'],
    } satisfies Record<Verdict, [string, string]>,
    discuss: 'Ergebnis besprechen',
    numbers: 'Zahlen ansehen',
  },
} as const

function AnswerButton({ label, pressed, tone, onClick }: { label: string; pressed: boolean; tone: 'yes' | 'no'; onClick: () => void }) {
  const on = tone === 'yes' ? 'border-2 border-brand bg-soft px-[22px] py-[11px] font-extrabold text-ink' : 'border-2 border-warn bg-warn-bg px-[22px] py-[11px] font-extrabold text-ink'
  const off = 'border border-line-strong bg-white px-[22px] py-3 font-semibold text-body hover:border-brand'
  return (
    <button type="button" aria-pressed={pressed} onClick={onClick} className={`min-h-11 rounded-[12px] transition-colors ${pressed ? on : off}`}>
      {label}
    </button>
  )
}

/** Six yes/no questions with a live fit score and a verdict once all are answered. */
export function FitQuiz({ locale }: { locale: Locale }) {
  const t = T[locale]
  const [answers, setAnswers] = useState(() => emptyAnswers(t.questions.length))
  const total = t.questions.length
  const answered = answeredCount(answers)
  const score = fitScore(answers)
  const progress = progressPercent(answers)
  const [verdict, advice] = t.verdicts[verdictFor(score)]
  const answer = (i: number, v: boolean) => setAnswers((a) => setAnswer(a, i, v))
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm text-muted" aria-live="polite">
          <span>{t.answered(answered, total)}</span>
          <span>{t.score(score, total)}</span>
        </div>
        <div role="progressbar" aria-label={t.progress} aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} className="h-2 overflow-hidden rounded-full bg-rule">
          <div className="h-full origin-left rounded-full bg-brand transition-transform duration-300" style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      </div>
      <ol className="m-0 flex list-none flex-col gap-6 p-0">
        {t.questions.map((q, i) => (
          <li key={q}>
            <fieldset className="m-0 flex flex-col gap-3.5 rounded-[20px] border border-line p-[22px]">
              <legend className="float-left mb-3.5 w-full p-0 text-[17px] font-extrabold">
                {i + 1}. {q}
              </legend>
              <div className="clear-both flex gap-2.5">
                <AnswerButton label={t.yes} tone="yes" pressed={answers[i] === true} onClick={() => answer(i, true)} />
                <AnswerButton label={t.no} tone="no" pressed={answers[i] === false} onClick={() => answer(i, false)} />
              </div>
            </fieldset>
          </li>
        ))}
      </ol>
      <div aria-live="polite">
        {isComplete(answers) ? (
          <div className="flex flex-col gap-3 rounded-[24px] bg-ink p-7 text-white">
            <h2 className="m-0 text-sm font-extrabold uppercase tracking-[0.08em] text-mint">{t.result}</h2>
            <p className="m-0 text-[26px] font-extrabold leading-tight">{verdict}</p>
            <p className="m-0 text-base leading-relaxed text-on-dark">{advice}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={href('consultation', locale)} className="inline-flex min-h-11 items-center rounded-btn bg-white px-5 py-3.5 font-bold text-ink no-underline hover:bg-soft">
                {t.discuss}
              </Link>
              <Link href={href('taxCalculator', locale)} className="inline-flex min-h-11 items-center rounded-btn border border-dark-line px-5 py-3.5 font-bold text-white no-underline hover:border-mint">
                {t.numbers}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
