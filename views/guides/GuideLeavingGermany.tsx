import type { Localized } from '@/lib/i18n'
import type { View } from '../types'
import { GuidePage, type GuideCopy } from './GuidePage'

const copy = {
  en: {
    variant: 'dark',
    crumb: 'Leaving Germany',
    eyebrow: 'Pillar guide · 20 min read',
    heading: 'Leaving Germany: what Germany still taxes after you move to Malta',
    lead: 'The 5% only works if Germany lets go. Four rules decide whether it does — and most must be planned before you deregister.',
    author: '[Author]',
    reviewer: '[German Steuerberater]',
    updated: '2026-10',
    primary: { label: 'Book an exit check', to: 'consultation' },
    shortAnswer: { variant: 'warn', label: 'Read this first', body: 'These rules are complex and change. This guide gives you the map — the decisions belong with a German Steuerberater, before you move.' },
    sections: [
      {
        id: 'residence',
        toc: '1 · Ending German residence',
        heading: '1 · Ending German tax residence',
        blocks: [{ kind: 'p', text: 'You stay fully taxable in Germany as long as you have a home (Wohnsitz) or habitual abode there. Keeping a flat you can use, or leaving your family behind, can keep you German-resident. The Germany–Malta tax treaty then decides where you count as resident — usually where your centre of life is.' }],
      },
      {
        id: 'exit',
        toc: '2 · Wegzugsteuer',
        heading: '2 · Wegzugsteuer (exit tax)',
        blocks: [{ kind: 'p', text: 'If you hold 1% or more of a corporation, such as your own GmbH, moving abroad is treated like a sale: unrealised gains are taxed. It applies if you were German-taxable for at least seven of the last twelve years. Payment can usually be spread over seven years, typically against security.' }],
      },
      {
        id: 'cfc',
        toc: '3 · Hinzurechnungsbesteuerung',
        heading: '3 · Hinzurechnungsbesteuerung (CFC rules)',
        blocks: [{ kind: 'p', text: "If you stay German-resident and own a low-taxed foreign company with passive income, Germany adds that income to your own. Malta counts as low-taxed once refunds are considered. That's why a Malta company without moving yourself rarely saves anything." }],
      },
      {
        id: 'extended',
        toc: '4 · Erweiterte beschränkte Steuerpflicht',
        heading: '4 · Erweiterte beschränkte Steuerpflicht',
        blocks: [{ kind: 'p', text: 'German citizens who move to a low-tax country and keep substantial economic interests in Germany can remain partly taxable there for up to ten years. A non-dom status in Malta can trigger this. Planning your German assets and income avoids surprises.' }],
      },
      {
        id: 'order',
        toc: 'The right order of steps',
        heading: 'The right order of steps',
        blocks: [
          {
            kind: 'steps',
            steps: [
              { heading: 'Exit check', body: 'Shareholdings, home, family and German income, with a Steuerberater.' },
              { heading: 'Decide on your GmbH', body: 'Keep, sell or restructure.' },
              { heading: 'Set up Malta', body: 'Company and Maltese home.' },
              { heading: 'Move and deregister', body: 'Give up the German home.' },
              { heading: 'Run it from Malta', body: 'Management in Malta from day one.' },
            ],
          },
        ],
      },
    ],
    sourcesLabel: 'Legal basis',
    sources: ['§§ 2, 6, 7–14 AStG', '§§ 8, 9 AO', 'DBA Deutschland–Malta'],
    cta: { heading: 'Plan your exit before you move', lead: 'A 30-minute call shows which German rules apply to you and what to do first.' },
  },
  de: {
    variant: 'dark',
    crumb: 'Wegzug aus Deutschland',
    eyebrow: 'Ratgeber · 20 Min. Lesezeit',
    heading: 'Wegzug aus Deutschland: Was Deutschland nach dem Umzug nach Malta noch besteuert',
    lead: 'Die 5 % funktionieren nur, wenn Deutschland loslässt. Vier Regeln entscheiden darüber – und die meisten müssen vor der Abmeldung geplant werden.',
    author: '[Autor]',
    reviewer: '[Deutscher Steuerberater]',
    updated: '2026-10',
    primary: { label: 'Wegzugs-Check buchen', to: 'consultation' },
    shortAnswer: { variant: 'warn', label: 'Bitte zuerst lesen', body: 'Diese Regeln sind komplex und ändern sich. Dieser Ratgeber gibt Ihnen den Überblick – die Entscheidungen gehören zu einem deutschen Steuerberater, und zwar vor dem Umzug.' },
    sections: [
      {
        id: 'residence',
        toc: '1 · Ende der Ansässigkeit',
        heading: '1 · Ende der unbeschränkten Steuerpflicht',
        blocks: [{ kind: 'p', text: 'Sie bleiben in Deutschland unbeschränkt steuerpflichtig, solange Sie dort einen Wohnsitz oder Ihren gewöhnlichen Aufenthalt haben. Eine Wohnung, die Sie weiter nutzen können, oder eine Familie, die in Deutschland bleibt, kann Sie in Deutschland ansässig halten. Das Doppelbesteuerungsabkommen Deutschland–Malta entscheidet dann, wo Sie als ansässig gelten – meist dort, wo Ihr Lebensmittelpunkt liegt.' }],
      },
      {
        id: 'exit',
        toc: '2 · Wegzugsteuer',
        heading: '2 · Wegzugsteuer',
        blocks: [{ kind: 'p', text: 'Halten Sie 1 % oder mehr an einer Kapitalgesellschaft, etwa Ihrer eigenen GmbH, wird der Wegzug wie ein Verkauf behandelt: Nicht realisierte Wertzuwächse werden besteuert. Das gilt, wenn Sie in mindestens sieben der letzten zwölf Jahre in Deutschland unbeschränkt steuerpflichtig waren. Die Zahlung lässt sich meist auf sieben Jahre verteilen, in der Regel gegen Sicherheitsleistung.' }],
      },
      {
        id: 'cfc',
        toc: '3 · Hinzurechnungsbesteuerung',
        heading: '3 · Hinzurechnungsbesteuerung',
        blocks: [{ kind: 'p', text: 'Bleiben Sie in Deutschland ansässig und besitzen eine niedrig besteuerte ausländische Firma mit passiven Einkünften, rechnet Deutschland Ihnen diese Einkünfte zu. Malta gilt unter Berücksichtigung der Erstattungen als Niedrigsteuerland. Deshalb spart eine Malta-Firma ohne eigenen Umzug selten etwas.' }],
      },
      {
        id: 'extended',
        toc: '4 · Erweiterte beschränkte Steuerpflicht',
        heading: '4 · Erweiterte beschränkte Steuerpflicht',
        blocks: [{ kind: 'p', text: 'Deutsche Staatsbürger, die in ein Niedrigsteuerland ziehen und wesentliche wirtschaftliche Interessen in Deutschland behalten, können dort bis zu zehn Jahre teilweise steuerpflichtig bleiben. Ein Non-Dom-Status in Malta kann das auslösen. Wer sein deutsches Vermögen und seine deutschen Einkünfte plant, vermeidet Überraschungen.' }],
      },
      {
        id: 'order',
        toc: 'Die richtige Reihenfolge',
        heading: 'Die richtige Reihenfolge',
        blocks: [
          {
            kind: 'steps',
            steps: [
              { heading: 'Wegzugs-Check', body: 'Beteiligungen, Wohnung, Familie und deutsche Einkünfte, mit einem Steuerberater.' },
              { heading: 'Über Ihre GmbH entscheiden', body: 'Behalten, verkaufen oder umstrukturieren.' },
              { heading: 'Malta aufsetzen', body: 'Firma und Wohnung in Malta.' },
              { heading: 'Umziehen und abmelden', body: 'Die deutsche Wohnung aufgeben.' },
              { heading: 'Von Malta aus führen', body: 'Geschäftsleitung in Malta vom ersten Tag an.' },
            ],
          },
        ],
      },
    ],
    sourcesLabel: 'Rechtsgrundlagen',
    sources: ['§§ 2, 6, 7–14 AStG', '§§ 8, 9 AO', 'DBA Deutschland–Malta'],
    cta: { heading: 'Planen Sie den Wegzug, bevor Sie umziehen', lead: 'Ein 30-Minuten-Gespräch zeigt, welche deutschen Regeln für Sie gelten und was Sie zuerst tun sollten.' },
  },
} satisfies Localized<GuideCopy>

export const view: View = {
  meta: {
    en: { title: 'Leaving Germany: what Germany still taxes | Tax.Free', description: 'Moving to Malta? Four German rules decide whether Germany lets go: tax residence, Wegzugsteuer, CFC rules and extended limited tax liability.' },
    de: { title: 'Wegzug nach Malta: Was Deutschland noch besteuert | Tax.Free', description: 'Vier Regeln entscheiden, ob Deutschland Sie nach Malta loslässt: Wohnsitz, Wegzugsteuer, Hinzurechnungsbesteuerung und erweiterte beschränkte Steuerpflicht.' },
  },
  Page: ({ locale }) => <GuidePage locale={locale} page="guideLeavingGermany" t={copy[locale]} />,
}
