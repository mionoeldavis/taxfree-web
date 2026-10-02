import type { ReactNode } from 'react'
import type { Locale, Localized } from '@/lib/i18n'

export type PageMeta = { title: string; description: string }
export type ViewProps = { locale: Locale }

/** One page: its localized <title>/description and the component that renders its body (between header and footer). */
export interface View {
  meta: Localized<PageMeta>
  Page: (props: ViewProps) => ReactNode | Promise<ReactNode>
}
