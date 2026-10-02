# Changelog

All notable changes to this project are documented here. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versions follow semver.

## Version 0.1.0

### Added

- Static Next.js 16 site (`output: 'export'`) for Tax.Free in German (`/de/`) and English (`/en/`) with localized slugs for all 33 pages of the master plan.
- Clarity design system: Tailwind theme tokens, Manrope via `next/font`, and one React component per design component.
- Malta company tax calculator (home) and Malta-vs-Germany calculator (tools), backed by unit-tested maths in `lib/tax.ts`.
- MDX blog with reviewer/author/updated/sources frontmatter; first article "Malta's 5% explained" in both languages.
- SEO: canonical + hreflang (x-default → German), sitemap with language alternates, robots.txt, llms.txt, JSON-LD (ProfessionalService, BreadcrumbList, FAQPage, Article).
- Lead capture without a server: form posts to a configurable endpoint with honeypot and optional Cloudflare Turnstile; Cal.com booking loaded on click; analytics only after consent.
- Host config for Cloudflare Pages (`_redirects`, `_headers`) and Vercel (`vercel.json`): `/` → `/de/` and security headers.
