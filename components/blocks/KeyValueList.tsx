export type KeyValue = { label: string; value: string; accent?: boolean }

export function KeyValueList({ rows, dark = false }: { rows: KeyValue[]; dark?: boolean }) {
  return (
    <dl className="m-0 flex flex-col">
      {rows.map((r) => (
        <div key={r.label} className={`flex justify-between gap-4 border-t py-3.5 text-base ${dark ? 'border-dark-rule' : 'border-rule'}`}>
          <dt className={dark ? 'text-on-dark-muted' : 'text-muted'}>{r.label}</dt>
          <dd className={`m-0 text-right font-extrabold ${r.accent ? (dark ? 'text-mint' : 'text-brand') : dark ? 'text-white' : 'text-ink'}`}>{r.value}</dd>
        </div>
      ))}
    </dl>
  )
}
