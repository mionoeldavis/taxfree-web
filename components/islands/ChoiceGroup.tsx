'use client'

/** Segmented preset picker (profit, Hebesatz …): a fieldset of pressed/unpressed buttons. */
export function ChoiceGroup<T extends string | number>({
  legend,
  options,
  value,
  onChange,
  columns,
  look = 'tiles',
}: {
  legend: string
  options: { value: T; label: string }[]
  value: T
  onChange: (v: T) => void
  columns?: number
  look?: 'tiles' | 'segmented'
}) {
  const segmented = look === 'segmented'
  return (
    <fieldset className="m-0 flex min-w-0 flex-col gap-2.5 border-0 p-0">
      <legend className="mb-2.5 p-0 text-sm font-bold">{legend}</legend>
      <div
        className={`grid ${segmented ? 'gap-1.5 rounded-[14px] bg-gray-soft p-1.5' : 'gap-2'}`}
        style={{ gridTemplateColumns: `repeat(${columns ?? options.length}, minmax(0, 1fr))` }}
      >
        {options.map((o) => {
          const on = o.value === value
          const cls = segmented
            ? on
              ? 'bg-white font-extrabold text-ink shadow-[0_1px_3px_rgba(14,31,25,0.12)]'
              : 'bg-transparent font-semibold text-muted hover:text-ink'
            : on
              ? 'border-2 border-brand bg-soft font-extrabold text-ink'
              : 'border border-line-strong bg-white font-semibold text-body hover:border-brand'
          return (
            <button
              key={String(o.value)}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(o.value)}
              className={`min-h-11 rounded-[12px] px-1.5 py-3 text-[15px] transition-colors ${segmented ? 'rounded-[10px] text-sm' : ''} ${cls}`}
            >
              {o.label}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
