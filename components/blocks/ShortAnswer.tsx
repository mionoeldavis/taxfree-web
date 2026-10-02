import type { ReactNode } from 'react'

const STYLES = {
  dark: { box: 'bg-ink', label: 'text-mint', fg: 'text-white' },
  warn: { box: 'bg-warn-bg border border-warn-line', label: 'text-warn', fg: 'text-body-strong' },
  soft: { box: 'bg-soft', label: 'text-brand', fg: 'text-body-strong' },
} as const

export function ShortAnswer({ variant = 'dark', label, children }: { variant?: keyof typeof STYLES; label: string; children: ReactNode }) {
  const s = STYLES[variant]
  return (
    <aside className={`box-border flex w-full flex-col gap-2 rounded-[20px] px-7 py-6 ${s.box}`}>
      <div className={`text-sm font-extrabold uppercase tracking-[0.06em] ${s.label}`}>{label}</div>
      <div className={`text-[17px] leading-relaxed ${s.fg}`}>{children}</div>
    </aside>
  )
}
