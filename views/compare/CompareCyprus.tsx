import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { ComparePage, type CompareCopy } from './ComparePage'

const AGP_URL = 'https://www.agplaw.com/cyprus-tax-reform-2026-a-comprehensive-legal-analysis-of-the-new-tax-framework-in-force-from-1-january-2026/'

const copy = {
  en: {
    crumb: 'Malta vs Cyprus',
    heading: 'Malta vs Cyprus for entrepreneurs (2026)',
    lead: 'Both are English-speaking EU islands with non-dom regimes. The difference is how company profits are taxed — and Cyprus changed its rules on 1 January 2026.',
    stats: [
      { variant: 'accent', value: '≈5%', label: 'Malta · distributed trading profit', note: '35% company tax, 6/7 refunded' },
      { value: '≈15%', label: 'Cyprus · distributed profit to a non-dom', note: '15% company tax, dividends exempt for non-doms' },
    ],
    tableHeading: 'Side by side',
    head: ['', 'Malta', 'Cyprus'],
    rows: [
      ['Corporate tax', '35%, ≈5% after refund', '15% (from 2026, was 12.5%)'],
      ['Dividends to a non-dom', 'Imputation credit covers it', 'Exempt from SDC'],
      ['Non-dom regime', 'Remittance basis, €5,000 minimum', '17 years of non-dom status'],
      ['Top personal rate', '35%', '35% above €72,000'],
      ['Tax residence', 'Based on where you live', '183-day or 60-day rule'],
      ['Language', 'English official', 'Greek official, English widely used'],
      ['EU · euro · treaty with Germany', 'Yes · yes · yes', 'Yes · yes · yes'],
    ],
    sources: ['Sources: ', { label: 'AGP Law on the Cyprus 2026 reform', url: AGP_URL }, '; Malta figures see ', { label: 'our company guide', page: 'guideCompany' }, '.'],
    cardsMin: 380,
    cards: [
      { variant: 'soft', heading: 'Choose Malta if…', body: 'you run an active business and want the lowest tax on profits you pay out, with English as the official language.' },
      { heading: 'Consider Cyprus if…', body: 'you want simpler company tax without a refund process, or the 60-day rule fits how you travel.' },
    ],
  },
  de: {
    crumb: 'Malta oder Zypern',
    heading: 'Malta oder Zypern für Unternehmer (2026)',
    lead: 'Beides sind englischsprachige EU-Inseln mit Non-Dom-Regelungen. Der Unterschied liegt in der Besteuerung von Firmengewinnen – und Zypern hat seine Regeln zum 1. Januar 2026 geändert.',
    stats: [
      { variant: 'accent', value: '≈5 %', label: 'Malta · ausgeschütteter operativer Gewinn', note: '35 % Körperschaftsteuer, 6/7 erstattet' },
      { value: '≈15 %', label: 'Zypern · ausgeschütteter Gewinn an einen Non-Dom', note: '15 % Körperschaftsteuer, Dividenden für Non-Doms steuerfrei' },
    ],
    tableHeading: 'Im direkten Vergleich',
    head: ['', 'Malta', 'Zypern'],
    rows: [
      ['Körperschaftsteuer', '35 %, ≈5 % nach Erstattung', '15 % (seit 2026, vorher 12,5 %)'],
      ['Dividenden an einen Non-Dom', 'Durch die Anrechnung abgedeckt', 'Befreit von der SDC'],
      ['Non-Dom-Regelung', 'Remittance-Basis, 5.000 € Mindeststeuer', '17 Jahre Non-Dom-Status'],
      ['Spitzensteuersatz', '35 %', '35 % ab 72.000 €'],
      ['Steuerliche Ansässigkeit', 'Je nachdem, wo Sie leben', '183-Tage- oder 60-Tage-Regel'],
      ['Sprache', 'Englisch ist Amtssprache', 'Griechisch ist Amtssprache, Englisch weit verbreitet'],
      ['EU · Euro · DBA mit Deutschland', 'Ja · ja · ja', 'Ja · ja · ja'],
    ],
    sources: ['Quellen: ', { label: 'AGP Law zur zyprischen Steuerreform 2026', url: AGP_URL }, '; Zahlen zu Malta siehe ', { label: 'unseren Firmen-Ratgeber', page: 'guideCompany' }, '.'],
    cardsMin: 380,
    cards: [
      { variant: 'soft', heading: 'Wählen Sie Malta, wenn …', body: 'Sie ein aktives Geschäft betreiben und die niedrigste Steuer auf ausgeschüttete Gewinne wollen – mit Englisch als Amtssprache.' },
      { heading: 'Ziehen Sie Zypern in Betracht, wenn …', body: 'Sie eine einfachere Firmenbesteuerung ohne Erstattungsverfahren wollen oder die 60-Tage-Regel zu Ihrem Reiseverhalten passt.' },
    ],
  },
} satisfies Localized<CompareCopy>

export const view: View = {
  meta: {
    en: {
      title: 'Malta vs Cyprus for entrepreneurs (2026) | Tax.Free',
      description: 'Malta taxes distributed trading profits at about 5%, Cyprus at about 15% after its 2026 reform. Compare company tax, non-dom rules and tax residence.',
    },
    de: {
      title: 'Malta oder Zypern für Unternehmer (2026) | Tax.Free',
      description: 'Malta besteuert ausgeschüttete Gewinne mit rund 5 %, Zypern nach der Reform 2026 mit rund 15 %. Körperschaftsteuer, Non-Dom und Ansässigkeit im Vergleich.',
    },
  },
  Page: ({ locale }) => <ComparePage locale={locale} pageKey="compareCyprus" t={copy[locale]} />,
}
