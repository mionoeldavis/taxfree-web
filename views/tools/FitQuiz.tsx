import { PageHero } from '@/components/blocks/PageHero'
import { FitQuiz } from '@/components/islands/FitQuiz'
import type { Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import type { View } from '../types'

const copy = {
  en: {
    tools: 'Tools',
    crumb: 'Malta fit quiz',
    eyebrow: 'Free tool · 2 minutes',
    heading: 'Is Malta right for you? Six honest questions.',
    lead: 'Answer yes or no. You get an honest verdict — including when Malta is not worth it.',
  },
  de: {
    tools: 'Tools',
    crumb: 'Malta-Check',
    eyebrow: 'Kostenloses Tool · 2 Minuten',
    heading: 'Passt Malta zu Ihnen? Sechs ehrliche Fragen.',
    lead: 'Antworten Sie mit Ja oder Nein. Sie erhalten ein ehrliches Ergebnis – auch dann, wenn sich Malta nicht lohnt.',
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: {
      title: 'Is Malta right for you? 6-question fit quiz | Tax.Free',
      description: 'Six yes-or-no questions, two minutes: business, profit, home, family, management and EU. Get an honest verdict, including when Malta is not worth it.',
    },
    de: {
      title: 'Malta-Check: Passt Malta zu Ihnen? | Tax.Free',
      description: 'Sechs Ja-Nein-Fragen in zwei Minuten: Geschäft, Gewinn, Wohnung, Familie, Geschäftsführung und EU. Ehrliches Ergebnis – auch wenn sich Malta nicht lohnt.',
    },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    return (
      <>
        <PageHero
          locale={locale}
          variant="plain"
          trail={[{ label: t.tools, href: href('taxCalculator', locale) }]}
          current={t.crumb}
          currentHref={href('fitQuiz', locale)}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
        />
        <section aria-label={t.crumb} className="mx-auto box-border w-full max-w-[820px] px-6 pt-8 pb-20">
          <FitQuiz locale={locale} />
        </section>
      </>
    )
  },
}
