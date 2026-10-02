'use client'

import { useState, type ReactNode } from 'react'

export type FilterItem = { id: string; topic: string; node: ReactNode }

/**
 * Topic pills over a pre-rendered list (blog, glossary). Every item is in the static HTML;
 * filtering only hides items, so crawlers and no-JS visitors still see all of them.
 */
export function TopicFilter({
  topics,
  allLabel,
  groupLabel,
  countLabel,
  countLabelOne,
  items,
  gridMin = 340,
}: {
  topics: string[]
  allLabel: string
  groupLabel: string
  /** e.g. "Showing {n} articles" */
  countLabel: string
  /** Singular form for exactly one item, e.g. "Showing {n} article" */
  countLabelOne?: string
  items: FilterItem[]
  gridMin?: number
}) {
  const [topic, setTopic] = useState<string | null>(null)
  const visible = items.filter((i) => topic === null || i.topic === topic)
  const pills: [string | null, string][] = [[null, allLabel], ...topics.map((t): [string, string] => [t, t])]
  return (
    <div className="flex flex-col gap-6">
      <div role="group" aria-label={groupLabel} className="flex flex-wrap gap-2">
        {pills.map(([value, label]) => {
          const on = value === topic
          return (
            <button
              key={label}
              type="button"
              aria-pressed={on}
              onClick={() => setTopic(value)}
              className={`min-h-10 rounded-full px-4 text-sm ${on ? 'border-0 bg-ink font-bold text-white' : 'border border-line bg-white font-semibold text-body hover:border-brand'}`}
            >
              {label}
            </button>
          )
        })}
      </div>
      <ul className="m-0 grid list-none gap-5 p-0" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${gridMin}px), 1fr))` }}>
        {items.map((i) => (
          <li key={i.id} hidden={!visible.includes(i)}>
            {i.node}
          </li>
        ))}
      </ul>
      <p className="m-0 text-sm text-muted" aria-live="polite">
        {(visible.length === 1 && countLabelOne ? countLabelOne : countLabel).replace('{n}', String(visible.length))}
      </p>
    </div>
  )
}
