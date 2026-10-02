import { Manrope } from 'next/font/google'

// Self-hosted at build time by next/font: no request to Google from visitors.
export const manrope = Manrope({ subsets: ['latin', 'latin-ext'], weight: ['400', '500', '600', '700', '800'], display: 'swap', variable: '--font-manrope' })
