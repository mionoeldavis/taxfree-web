import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  trailingSlash: true, // /de/kontakt/ -> /de/kontakt/index.html
  images: { unoptimized: true },
  experimental: {
    globalNotFound: true, // two root layouts (chooser + [locale]) need a global 404
  },
}

export default config
