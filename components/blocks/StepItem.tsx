export function StepItem({ n, heading, body }: { n: number | string; heading: string; body?: string }) {
  return (
    <li className="flex gap-[18px] border-t border-rule py-[18px]">
      <span aria-hidden="true" className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-brand font-extrabold text-white">
        {n}
      </span>
      <div className="flex flex-col gap-1">
        <div className="text-[17px] font-extrabold">{heading}</div>
        {body ? <div className="text-[15px] leading-normal text-muted">{body}</div> : null}
      </div>
    </li>
  )
}

/** Ordered list wrapper so screen readers announce the steps as a sequence. */
export function StepList({ steps }: { steps: { heading: string; body?: string }[] }) {
  return (
    <ol className="m-0 flex list-none flex-col p-0">
      {steps.map((s, i) => (
        <StepItem key={s.heading} n={i + 1} heading={s.heading} body={s.body} />
      ))}
    </ol>
  )
}
