/** Working brand name; final name and domain are still open (see build plan → Setup). */
export const siteName = 'Tax.Free'
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.example.com').replace(/\/$/, '')
/** False for a build without NEXT_PUBLIC_SITE_URL: robots.txt then blocks crawling so placeholder URLs never get indexed. */
export const hasRealSiteUrl = Boolean(process.env.NEXT_PUBLIC_SITE_URL)

/** Placeholders the business must fill before launch. Kept in one place so nothing ships half-filled by accident. */
export const company = {
  legalName: 'Tax.Free Ltd',
  companyNo: '[Company no.]',
  street: '[Street]',
  town: '[Town]',
  country: 'MT',
  phone: '[Phone]',
  email: '[hello@domain]',
}

export const integrations = {
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '',
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '',
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? '',
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? '',
}
