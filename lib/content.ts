import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { locales, type Locale } from './i18n'

/**
 * MDX articles in content/<locale>/blog/<slug>.mdx. Frontmatter feeds the article header,
 * the reviewer box (E-E-A-T), Article schema and hreflang pairing (`id` is shared across languages).
 */
export interface ArticleMeta {
  id: string
  slug: string
  locale: Locale
  title: string
  description: string
  topic: string
  minutes: number
  author: string
  reviewer: string
  updated: string
  sources: { label: string; url: string }[]
}

const CONTENT_DIR = path.join(process.cwd(), 'content')
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

function fail(file: string, problem: string): never {
  throw new Error(`content/${file}: ${problem}`)
}

function str(data: Record<string, unknown>, key: string, file: string): string {
  const v = data[key]
  if (typeof v !== 'string' || !v.trim()) fail(file, `frontmatter "${key}" must be a non-empty string`)
  return v.trim()
}

function parse(locale: Locale, fileName: string): { meta: ArticleMeta; body: string } {
  const rel = `${locale}/blog/${fileName}`
  const slug = fileName.replace(/\.mdx$/, '')
  if (!SLUG_RE.test(slug)) fail(rel, 'file name must be a lowercase-hyphenated slug')
  const { data, content } = matter(fs.readFileSync(path.join(CONTENT_DIR, rel), 'utf8'))
  // gray-matter turns unquoted YAML dates into Date objects; normalise to YYYY-MM-DD.
  const updated = data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : str(data, 'updated', rel)
  if (!DATE_RE.test(updated)) fail(rel, 'frontmatter "updated" must be YYYY-MM-DD')
  const minutes = Number(data.minutes)
  if (!Number.isInteger(minutes) || minutes < 1) fail(rel, 'frontmatter "minutes" must be a positive integer')
  const sources = Array.isArray(data.sources) ? data.sources : []
  for (const s of sources) {
    if (!s || typeof s.label !== 'string' || typeof s.url !== 'string' || !/^https:\/\//.test(s.url)) fail(rel, 'each source needs a label and an https url')
  }
  return {
    meta: {
      id: str(data, 'id', rel),
      slug,
      locale,
      title: str(data, 'title', rel),
      description: str(data, 'description', rel),
      topic: str(data, 'topic', rel),
      minutes,
      author: str(data, 'author', rel),
      reviewer: str(data, 'reviewer', rel),
      updated,
      sources,
    },
    body: content,
  }
}

function files(locale: Locale): string[] {
  const dir = path.join(CONTENT_DIR, locale, 'blog')
  return fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.mdx')) : []
}

/** Articles of one language, newest first. */
export function listArticles(locale: Locale): ArticleMeta[] {
  return files(locale)
    .map((f) => parse(locale, f).meta)
    .sort((a, b) => b.updated.localeCompare(a.updated) || a.title.localeCompare(b.title))
}

export function getArticle(locale: Locale, slug: string): { meta: ArticleMeta; body: string } | null {
  if (!SLUG_RE.test(slug)) return null
  return files(locale).includes(`${slug}.mdx`) ? parse(locale, `${slug}.mdx`) : null
}

/** The same article in another language, matched by `id`. */
export function translationOf(meta: ArticleMeta, locale: Locale): ArticleMeta | null {
  return listArticles(locale).find((a) => a.id === meta.id) ?? null
}

export function articleParams(): { locale: Locale; slug: string }[] {
  return locales.flatMap((locale) => listArticles(locale).map((a) => ({ locale, slug: a.slug })))
}
