'use client'

import { useId, useState } from 'react'

/** Expandable FAQ (home page). Answers stay in the HTML for crawlers; only visibility toggles. */
export function FaqAccordion({ items, initiallyOpen = 0 }: { items: { q: string; a: string }[]; initiallyOpen?: number }) {
  const [open, setOpen] = useState(initiallyOpen)
  const base = useId()
  return (
    <div className="flex flex-col border-t border-line">
      {items.map((f, i) => {
        const isOpen = open === i
        const panelId = `${base}-panel-${i}`
        return (
          <div key={f.q} className="border-b border-line">
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 border-0 bg-transparent py-[22px] text-left text-lg font-bold text-ink hover:text-brand"
              >
                {f.q}
                <span aria-hidden="true" className="shrink-0 text-[22px] text-brand">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen} className="max-w-[640px] pb-[22px] text-base leading-[1.65] text-body">
              {f.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}
