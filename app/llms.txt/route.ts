import { listArticles } from '@/lib/content'
import { articleHref, href, type PageKey } from '@/lib/routes'
import { siteName, siteUrl } from '@/lib/site'
import { views } from '@/views/registry'

export const dynamic = 'force-static'

const SECTIONS: [string, PageKey[]][] = [
  ['Services', ['companyFormation', 'relocation', 'residency', 'taxAdvisory', 'consultation']],
  ['Pillar guides', ['guideMoving', 'guideTaxes', 'guideCompany', 'guideLeavingGermany']],
  ['Tools', ['taxCalculator', 'costEstimator', 'fitQuiz']],
  ['Comparisons', ['compareCyprus', 'compareDubai', 'comparePortugal', 'glossary']],
  ['Trust', ['about', 'reviewers', 'caseStudies', 'contact']],
]

/** AI-search summary (llmstxt.org format), English with German equivalents. */
export function GET() {
  const line = (key: PageKey) => {
    const m = views[key].meta.en
    return `- [${m.title}](${siteUrl}${href(key, 'en')}): ${m.description} (Deutsch: ${siteUrl}${href(key, 'de')})`
  }
  const articles = listArticles('en').map((a) => `- [${a.title}](${siteUrl}${articleHref('en', a.slug)}): ${a.description}`)
  const body = [
    `# ${siteName}`,
    '',
    '> Relocation and tax structuring for founders moving from Germany, Austria and Switzerland to Malta. Every tax page names its reviewer, last-updated date and sources. General information, not individual tax advice.',
    '',
    ...SECTIONS.flatMap(([title, keys]) => [`## ${title}`, '', ...keys.map(line), '']),
    '## Articles',
    '',
    ...articles,
    '',
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
