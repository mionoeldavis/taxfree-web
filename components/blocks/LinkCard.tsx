import Link from 'next/link'
import { Placeholder } from './Placeholder'

export function LinkCard({ tag, heading, href, image }: { tag: string; heading: string; href: string; image?: string }) {
  return (
    <Link
      href={href}
      className="group box-border flex h-full flex-col overflow-hidden rounded-[18px] border border-line text-ink no-underline transition-colors hover:border-brand"
    >
      {image ? <Placeholder label={image} className="aspect-video rounded-none" /> : null}
      <span className="flex flex-col gap-1.5 px-[22px] py-5">
        <span className="text-[13px] font-bold text-brand">{tag}</span>
        <span className="text-[17px] font-extrabold leading-snug group-hover:underline">{heading}</span>
      </span>
    </Link>
  )
}
