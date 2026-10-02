import type { Localized } from './i18n'
import type { PageKey } from './routes'

/** Strings used by shared layout components. Page copy lives next to each view. */
export const ui = {
  de: {
    skipToContent: 'Zum Inhalt springen',
    home: 'Startseite',
    menu: 'Menü',
    mainNav: 'Hauptnavigation',
    freeConsultation: 'Kostenlose Beratung',
    switchLanguage: 'Sprache wechseln',
    nav: [
      ['companyFormation', 'Leistungen'],
      ['forOnlineEntrepreneurs', 'Für wen'],
      ['blog', 'Ratgeber'],
      ['taxCalculator', 'Rechner'],
      ['compareCyprus', 'Vergleich'],
      ['about', 'Über uns'],
    ],
    footerTagline: 'Umzug und Steuerstrukturierung für Gründer, die nach Malta ziehen.',
    footerLanguages: 'Deutsch · English',
    footerColumns: [
      ['Leistungen', [['companyFormation', 'Firmengründung'], ['relocation', 'Umzug'], ['residency', 'Aufenthalt'], ['taxAdvisory', 'Steuerberatung'], ['consultation', 'Beratung']]],
      ['Für wen', [['forOnlineEntrepreneurs', 'Online-Unternehmer'], ['forFreelancers', 'Freelancer'], ['forInvestors', 'Investoren & Krypto'], ['forFamilies', 'Familien'], ['forNonEuFounders', 'Nicht-EU-Gründer']]],
      ['Ratgeber', [['guideMoving', 'Auswandern nach Malta'], ['guideTaxes', 'Steuern in Malta'], ['guideCompany', 'Malta-Firma & 5 %'], ['guideLeavingGermany', 'Wegzug aus Deutschland'], ['blog', 'Alle Artikel']]],
      ['Tools', [['taxCalculator', 'Steuerrechner'], ['costEstimator', 'Kostenrechner'], ['fitQuiz', 'Malta-Check'], ['playbook', 'Playbook (PDF)'], ['newsletter', 'Newsletter']]],
      ['Vergleich', [['compareCyprus', 'Malta oder Zypern'], ['compareDubai', 'Malta oder Dubai'], ['comparePortugal', 'Malta oder Portugal'], ['glossary', 'Glossar'], ['news', 'News']]],
      ['Unternehmen', [['about', 'Über uns & Team'], ['reviewers', 'Unsere Experten'], ['caseStudies', 'Fallbeispiele'], ['reviews', 'Bewertungen'], ['contact', 'Kontakt']]],
    ],
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    footerDisclaimer: 'Nur Information, keine Steuerberatung vor Mandatserteilung.',
    ctaHeading: 'Sprechen Sie diese Woche mit einem Berater',
    ctaLead: 'Kostenloses 30-Minuten-Gespräch auf Deutsch oder Englisch. Sie gehen mit einem klaren Ja oder Nein.',
    ctaPrimary: 'Kostenlose Beratung buchen',
    ctaSecondary: 'Malta Playbook holen (PDF)',
    breadcrumb: 'Brotkrumen',
    imagePlaceholder: 'Bild',
  },
  en: {
    skipToContent: 'Skip to content',
    home: 'Home',
    menu: 'Menu',
    mainNav: 'Main',
    freeConsultation: 'Free consultation',
    switchLanguage: 'Switch language',
    nav: [
      ['companyFormation', 'Services'],
      ['forOnlineEntrepreneurs', "Who it's for"],
      ['blog', 'Guides'],
      ['taxCalculator', 'Calculator'],
      ['compareCyprus', 'Compare'],
      ['about', 'About'],
    ],
    footerTagline: 'Relocation and tax structuring for founders moving to Malta.',
    footerLanguages: 'English · Deutsch',
    footerColumns: [
      ['Services', [['companyFormation', 'Company formation'], ['relocation', 'Relocation'], ['residency', 'Residency'], ['taxAdvisory', 'Tax advisory'], ['consultation', 'Consultation']]],
      ["Who it's for", [['forOnlineEntrepreneurs', 'Online entrepreneurs'], ['forFreelancers', 'Freelancers'], ['forInvestors', 'Investors & crypto'], ['forFamilies', 'Families'], ['forNonEuFounders', 'Non-EU founders']]],
      ['Guides', [['guideMoving', 'Moving to Malta'], ['guideTaxes', 'Malta taxes'], ['guideCompany', 'Malta company & 5%'], ['guideLeavingGermany', 'Leaving Germany'], ['blog', 'All articles']]],
      ['Tools', [['taxCalculator', 'Tax calculator'], ['costEstimator', 'Cost estimator'], ['fitQuiz', 'Malta fit quiz'], ['playbook', 'Playbook (PDF)'], ['newsletter', 'Newsletter']]],
      ['Compare', [['compareCyprus', 'Malta vs Cyprus'], ['compareDubai', 'Malta vs Dubai'], ['comparePortugal', 'Malta vs Portugal'], ['glossary', 'Glossary'], ['news', 'News']]],
      ['Company', [['about', 'About & team'], ['reviewers', 'Our reviewers'], ['caseStudies', 'Case studies'], ['reviews', 'Reviews'], ['contact', 'Contact']]],
    ],
    imprint: 'Imprint',
    privacy: 'Privacy',
    footerDisclaimer: 'Information only, not tax advice until engagement.',
    ctaHeading: 'Talk to an advisor this week',
    ctaLead: 'Free 30-minute call in English or German. You leave with a clear yes or no.',
    ctaPrimary: 'Book a free consultation',
    ctaSecondary: 'Get the Malta Playbook (PDF)',
    breadcrumb: 'Breadcrumb',
    imagePlaceholder: 'Image',
  },
} satisfies Localized<{
  nav: [PageKey, string][]
  footerColumns: [string, [PageKey, string][]][]
  [k: string]: unknown
}>
