import { PageHero } from '@/components/blocks/PageHero'
import { Section } from '@/components/blocks/Section'
import { TopicFilter } from '@/components/islands/TopicFilter'
import { JsonLd } from '@/components/seo/JsonLd'
import { absolute } from '@/components/seo/schema'
import type { Localized } from '@/lib/i18n'
import { href } from '@/lib/routes'
import type { View } from '../types'

/** [term, topic, definition] */
type Term = [string, string, string]

const copy = {
  en: {
    crumbSection: 'Compare',
    crumb: 'Glossary',
    eyebrow: 'Reference',
    heading: 'Malta and German tax terms, in plain language',
    lead: 'Every term we use on this site, explained in one or two sentences.',
    allLabel: 'All',
    groupLabel: 'Filter by topic',
    countLabel: 'Showing {n} terms',
    countLabelOne: 'Showing {n} term',
    setName: 'Malta and German tax glossary',
    topics: ['Company', 'Malta personal', 'Residency', 'Germany'],
    terms: [
      ['6/7 refund', 'Company', 'The share of Malta corporate tax a shareholder can reclaim on distributed trading profits. Leads to the 5% effective rate.'],
      ['Imputation system', 'Company', 'Company tax is credited to the shareholder when profits are paid out, so the same profit is not taxed twice.'],
      ['Participation exemption', 'Company', 'Qualifying dividends and gains from holdings in other companies are exempt from Malta tax.'],
      ['Substance', 'Company', 'Real presence in Malta: management, decisions, office and staff. Needed for the company to be Maltese for tax.'],
      ['FITWI', 'Company', 'Optional 15% final tax without refunds, introduced in 2025 with a five-year lock-in.'],
      ['Pillar Two', 'Company', 'OECD global minimum tax of 15% for groups with €750 million or more in revenue.'],
      ['Non-dom', 'Malta personal', 'A Malta resident whose domicile is elsewhere. Taxed on foreign income only when it is brought to Malta.'],
      ['Remittance basis', 'Malta personal', 'Foreign income is taxed only when it is transferred to or received in Malta.'],
      ['Minimum tax', 'Malta personal', '€5,000 a year for non-doms with €35,000 or more foreign income.'],
      ['Global Residence Programme', 'Residency', '15% on foreign income remitted to Malta, with a €15,000 yearly minimum.'],
      ['Nomad Residence Permit', 'Residency', 'Permit for non-EU remote workers. Year one tax-exempt, then 10%.'],
      ['Identità', 'Residency', 'The Maltese agency that issues residence documents and ID cards.'],
      ['Wegzugsteuer', 'Germany', 'German exit tax on unrealised gains in shareholdings of 1% or more when you move abroad.'],
      ['Hinzurechnungsbesteuerung', 'Germany', 'German CFC rules: passive income of low-taxed foreign companies is added to a German resident’s income.'],
      ['Erweiterte beschränkte Steuerpflicht', 'Germany', 'Up to ten years of extended German tax liability after moving to a low-tax country, if conditions are met.'],
      ['Abmeldung', 'Germany', 'Deregistering your German address. Necessary, but on its own it does not end tax residence.'],
    ] satisfies Term[],
  },
  de: {
    crumbSection: 'Vergleich',
    crumb: 'Glossar',
    eyebrow: 'Nachschlagen',
    heading: 'Steuerbegriffe aus Malta und Deutschland, einfach erklärt',
    lead: 'Jeder Begriff, den wir auf dieser Website verwenden, in ein oder zwei Sätzen erklärt.',
    allLabel: 'Alle',
    groupLabel: 'Nach Thema filtern',
    countLabel: '{n} Begriffe',
    countLabelOne: '{n} Begriff',
    setName: 'Glossar: Steuerbegriffe aus Malta und Deutschland',
    topics: ['Firma', 'Malta privat', 'Aufenthalt', 'Deutschland'],
    terms: [
      ['6/7-Erstattung', 'Firma', 'Der Anteil der maltesischen Körperschaftsteuer, den ein Gesellschafter auf ausgeschüttete operative Gewinne zurückfordern kann. Führt zum effektiven Satz von 5 %.'],
      ['Anrechnungssystem', 'Firma', 'Die Körperschaftsteuer wird dem Gesellschafter bei der Ausschüttung angerechnet, damit derselbe Gewinn nicht zweimal besteuert wird.'],
      ['Beteiligungsbefreiung', 'Firma', 'Qualifizierte Dividenden und Veräußerungsgewinne aus Beteiligungen an anderen Gesellschaften sind in Malta steuerfrei.'],
      ['Substanz', 'Firma', 'Echte Präsenz in Malta: Geschäftsleitung, Entscheidungen, Büro und Personal. Nötig, damit die Firma steuerlich als maltesisch gilt.'],
      ['FITWI', 'Firma', 'Optionale Abgeltungsteuer von 15 % ohne Erstattungen, eingeführt 2025 mit fünfjähriger Bindung.'],
      ['Pillar Two', 'Firma', 'Globale OECD-Mindeststeuer von 15 % für Konzerne mit mindestens 750 Mio. € Umsatz.'],
      ['Non-Dom', 'Malta privat', 'In Malta ansässige Person mit Domizil in einem anderen Land. Ausländische Einkünfte werden nur besteuert, wenn sie nach Malta gebracht werden.'],
      ['Remittance-Basis', 'Malta privat', 'Ausländische Einkünfte werden nur besteuert, wenn sie nach Malta überwiesen oder dort vereinnahmt werden.'],
      ['Mindeststeuer', 'Malta privat', '5.000 € pro Jahr für Non-Doms mit ausländischen Einkünften ab 35.000 €.'],
      ['Global Residence Programme', 'Aufenthalt', '15 % auf nach Malta überwiesene ausländische Einkünfte, mindestens 15.000 € pro Jahr.'],
      ['Nomad Residence Permit', 'Aufenthalt', 'Aufenthaltstitel für Remote-Arbeitende aus Nicht-EU-Ländern. Im ersten Jahr steuerfrei, danach 10 %.'],
      ['Identità', 'Aufenthalt', 'Die maltesische Behörde, die Aufenthaltsdokumente und ID-Karten ausstellt.'],
      ['Wegzugsteuer', 'Deutschland', 'Deutsche Steuer auf nicht realisierte Wertzuwächse bei Beteiligungen ab 1 %, wenn Sie ins Ausland ziehen.'],
      ['Hinzurechnungsbesteuerung', 'Deutschland', 'Deutsche CFC-Regeln: Passive Einkünfte niedrig besteuerter ausländischer Gesellschaften werden dem Einkommen eines in Deutschland Ansässigen hinzugerechnet.'],
      ['Erweiterte beschränkte Steuerpflicht', 'Deutschland', 'Bis zu zehn Jahre erweiterte deutsche Steuerpflicht nach einem Umzug in ein Niedrigsteuerland, wenn die Voraussetzungen erfüllt sind.'],
      ['Abmeldung', 'Deutschland', 'Die Abmeldung Ihres Wohnsitzes in Deutschland. Notwendig, beendet aber für sich allein nicht die steuerliche Ansässigkeit.'],
    ] satisfies Term[],
  },
} satisfies Localized<unknown>

const slug = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export const view: View = {
  meta: {
    en: {
      title: 'Malta and German tax glossary | Tax.Free',
      description: 'Malta and German tax terms in plain language: 6/7 refund, non-dom, remittance basis, Wegzugsteuer, CFC rules and more, each in one or two sentences.',
    },
    de: {
      title: 'Glossar: Steuerbegriffe Malta & Deutschland | Tax.Free',
      description: 'Steuerbegriffe aus Malta und Deutschland einfach erklärt: 6/7-Erstattung, Non-Dom, Remittance-Basis, Wegzugsteuer und mehr – jeweils in ein oder zwei Sätzen.',
    },
  },
  Page: ({ locale }) => {
    const t = copy[locale]
    const pageHref = href('glossary', locale)
    const items = t.terms.map(([term, topic, def]) => ({
      id: slug(term),
      topic,
      node: (
        <div id={slug(term)} className="grid gap-x-8 gap-y-2 border-b border-line pb-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))' }}>
          <div className="flex flex-col gap-1">
            <h2 className="m-0 text-lg font-extrabold">{term}</h2>
            <span className="text-[13px] font-bold text-brand">{topic}</span>
          </div>
          <p className="m-0 text-base leading-relaxed text-body">{def}</p>
        </div>
      ),
    }))
    return (
      <>
        <PageHero
          locale={locale}
          variant="plain"
          trail={[{ label: t.crumbSection, href: href('compareCyprus', locale) }]}
          current={t.crumb}
          currentHref={pageHref}
          eyebrow={t.eyebrow}
          heading={t.heading}
          lead={t.lead}
        />
        <Section space="sm" className="pb-20">
          <TopicFilter topics={t.topics} allLabel={t.allLabel} groupLabel={t.groupLabel} countLabel={t.countLabel} countLabelOne={t.countLabelOne} items={items} gridMin={1200} />
        </Section>
        <JsonLd
          data={{
            '@type': 'DefinedTermSet',
            '@id': `${absolute(pageHref)}#terms`,
            name: t.setName,
            url: absolute(pageHref),
            inLanguage: locale,
            hasDefinedTerm: t.terms.map(([term, , def]) => ({
              '@type': 'DefinedTerm',
              name: term,
              description: def,
              url: `${absolute(pageHref)}#${slug(term)}`,
            })),
          }}
        />
      </>
    )
  },
}
