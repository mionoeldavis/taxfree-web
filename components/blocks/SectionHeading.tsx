export function SectionHeading({ eyebrow, heading, lead, id, onDark = false }: { eyebrow?: string; heading: string; lead?: string; id?: string; onDark?: boolean }) {
  return (
    <div className="flex w-full max-w-[760px] flex-col gap-2.5">
      {eyebrow ? <div className={`eyebrow ${onDark ? 'text-mint' : 'text-brand'}`}>{eyebrow}</div> : null}
      <h2 id={id} className={`h2 m-0 ${onDark ? 'text-white' : 'text-ink'}`}>
        {heading}
      </h2>
      {lead ? <p className={`m-0 text-base leading-relaxed ${onDark ? 'text-on-dark-muted' : 'text-muted'}`}>{lead}</p> : null}
    </div>
  )
}
