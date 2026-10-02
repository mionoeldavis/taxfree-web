export type StatTileVariant = 'outline' | 'soft' | 'dark' | 'accent'

const STYLES: Record<StatTileVariant, { box: string; value: string; fg: string; muted: string }> = {
  outline: { box: 'bg-white border border-line', value: 'text-brand', fg: 'text-ink', muted: 'text-muted' },
  soft: { box: 'bg-soft border border-soft', value: 'text-brand', fg: 'text-ink', muted: 'text-body' },
  dark: { box: 'bg-ink-2 border border-ink-2', value: 'text-white', fg: 'text-white', muted: 'text-on-dark-muted' },
  accent: { box: 'bg-brand border border-brand', value: 'text-white', fg: 'text-white', muted: 'text-on-dark' },
}

export function StatTile({ variant = 'outline', value, label, note }: { variant?: StatTileVariant; value: string; label: string; note?: string }) {
  const s = STYLES[variant]
  return (
    <div className={`box-border flex h-full flex-col gap-1.5 rounded-[20px] p-6 ${s.box}`}>
      <div className={`text-4xl font-extrabold tracking-[-0.02em] ${s.value}`}>{value}</div>
      <div className={`text-base font-bold ${s.fg}`}>{label}</div>
      {note ? <div className={`text-sm leading-normal ${s.muted}`}>{note}</div> : null}
    </div>
  )
}
