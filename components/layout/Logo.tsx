import Link from 'next/link'
import { siteName } from '@/lib/site'

export function Logo({ homeHref, onDark = false }: { homeHref: string; onDark?: boolean }) {
  return (
    <Link href={homeHref} className={`flex items-center gap-2.5 text-2xl font-extrabold tracking-[-0.02em] no-underline ${onDark ? 'text-white' : 'text-ink'}`}>
      <span aria-hidden="true" className={`inline-block size-[30px] rounded-[9px] ${onDark ? 'bg-mint' : 'bg-brand'}`} />
      {siteName}
    </Link>
  )
}
