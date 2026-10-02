import type { ReactNode } from 'react'

const WIDTHS: Record<number, string[]> = {
  2: ['66%', '34%'],
  3: ['36%', '32%', '32%'],
  4: ['26%', '24%', '30%', '20%'],
}

/**
 * The design's TableRow stack as a real <table>. First cell of each row is its header.
 * `highlight` marks row indexes (e.g. a total) with the tinted background.
 */
export function DataTable({
  head,
  rows,
  highlight = [],
  caption,
}: {
  head?: ReactNode[]
  rows: ReactNode[][]
  highlight?: number[]
  caption?: string
}) {
  const cols = head?.length ?? rows[0]?.length ?? 2
  const widths = WIDTHS[cols]
  return (
    <div className="overflow-x-auto rounded-[18px] border border-line">
      <table className="w-full min-w-[520px] border-collapse text-left text-[15px] leading-normal">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        {widths ? (
          <colgroup>
            {widths.map((w, i) => (
              <col key={i} style={{ width: w }} />
            ))}
          </colgroup>
        ) : null}
        {head ? (
          <thead className="bg-gray-soft text-[13px] font-extrabold uppercase tracking-[0.05em] text-body">
            <tr>
              {head.map((h, i) => (
                <th key={i} scope="col" className={`px-5 py-[15px] font-extrabold ${i === 1 ? 'text-brand' : ''}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className={`border-t border-rule ${highlight.includes(r) ? 'bg-tint' : 'bg-white'} ${!head && r === 0 ? 'border-t-0' : ''}`}>
              {row.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row" className="px-5 py-[15px] font-bold">
                    {cell}
                  </th>
                ) : (
                  <td key={c} className={`px-5 py-[15px] ${c === 1 ? (cols === 2 ? 'font-bold text-ink' : 'font-semibold text-ink') : 'text-body'}`}>
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
