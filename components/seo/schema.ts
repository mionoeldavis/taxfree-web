import { company, siteName, siteUrl } from '@/lib/site'

export const absolute = (path: string) => (path.startsWith('http') ? path : `${siteUrl}${path}`)

export function organizationSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#organization`,
    name: siteName,
    legalName: company.legalName,
    url: siteUrl,
    areaServed: ['MT', 'DE', 'AT', 'CH'],
    availableLanguage: ['de', 'en'],
    address: { '@type': 'PostalAddress', streetAddress: company.street, addressLocality: company.town, addressCountry: company.country },
  }
}

/** A named person for schema.org, or undefined while the name is still a [placeholder]. */
export function personOrNothing(name: string) {
  return name.trim().startsWith('[') ? undefined : { '@type': 'Person', name }
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.label, item: absolute(item.href) })),
  }
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }
}
