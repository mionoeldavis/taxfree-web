import type { MetadataRoute } from 'next'
import { hasRealSiteUrl, siteUrl } from '@/lib/site'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  if (!hasRealSiteUrl) return { rules: [{ userAgent: '*', disallow: '/' }] }
  return { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl }
}
