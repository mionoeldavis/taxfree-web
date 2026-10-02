import { ButtonLink } from '@/components/blocks/ButtonLink'
import { FeatureCard } from '@/components/blocks/FeatureCard'
import { PageHero } from '@/components/blocks/PageHero'
import { Section } from '@/components/blocks/Section'
import { CostEstimator } from '@/components/islands/CostEstimator'
import { CtaBand } from '@/components/layout/CtaBand'
import type { Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import type { View } from '../types'

const copy = {
  en: {
    tools: 'Tools',
    crumb: 'Cost estimator',
    eyebrow: 'Free tool',
    heading: 'What a Malta company costs per year',
    lead: 'Tick what you need. You see every line item — no hidden fees, no percentage of your savings.',
    ruleHeading: 'Rule of thumb',
    ruleBody: 'Malta pays off when your yearly tax saving is several times the running costs.',
    ruleLink: 'Compare with the tax calculator',
    quote: 'Get a fixed-fee quote',
  },
  de: {
    tools: 'Tools',
    crumb: 'Kostenrechner',
    eyebrow: 'Kostenloses Tool',
    heading: 'Was eine Malta-Firma pro Jahr kostet',
    lead: 'Haken Sie an, was Sie brauchen. Sie sehen jede Position einzeln – keine versteckten Gebühren, kein Prozentsatz Ihrer Ersparnis.',
    ruleHeading: 'Faustregel',
    ruleBody: 'Malta lohnt sich, wenn Ihre jährliche Steuerersparnis ein Mehrfaches der laufenden Kosten beträgt.',
    ruleLink: 'Mit dem Steuerrechner vergleichen',
    quote: 'Festpreis-Angebot anfragen',
  },
} satisfies Localized<unknown>

export const view: View = {
  meta: {
    en: {
      title: 'Malta company cost estimator | Tax.Free',
      description: 'What a Malta company costs per year: tick formation, office, secretary, accounts, audit and tax returns. Every line item shown, no hidden fees.',
    },
    de: {
      title: 'Kostenrechner Malta-Firma | Tax.Free',
      description: 'Was eine Malta-Firma pro Jahr kostet: Gründung, Geschäftsadresse, Secretary, Buchhaltung, Prüfung und Steuererklärung – jede Position einzeln sichtbar.',
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
          currentHref={href('costEstimator', locale)}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
        />

        <Section space="sm">
          <CostEstimator locale={locale}>
            <FeatureCard variant="soft" heading={t.ruleHeading} body={t.ruleBody} link={{ label: t.ruleLink, href: href('taxCalculator', locale) }} />
            <ButtonLink href={href('consultation', locale)} className="px-[22px]">
              {t.quote}
            </ButtonLink>
          </CostEstimator>
        </Section>

        <CtaBand locale={locale} />
      </>
    )
  },
}
