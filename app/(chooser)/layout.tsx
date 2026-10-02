import type { ReactNode } from 'react'
import '../globals.css'
import { manrope } from '../fonts'

export default function ChooserLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={manrope.variable}>
      <body>{children}</body>
    </html>
  )
}
