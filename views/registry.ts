import type { PageKey } from '@/lib/routes'
import type { View } from './types'
import { view as home } from './core/Home'
import { view as companyFormation } from './core/CompanyFormation'
import { view as relocation } from './core/Relocation'
import { view as residency } from './core/Residency'
import { view as taxAdvisory } from './core/TaxAdvisory'
import { view as consultation } from './core/Consultation'
import { view as forOnlineEntrepreneurs } from './audience/ForOnlineEntrepreneurs'
import { view as forFreelancers } from './audience/ForFreelancers'
import { view as forInvestors } from './audience/ForInvestors'
import { view as forFamilies } from './audience/ForFamilies'
import { view as forNonEuFounders } from './audience/ForNonEuFounders'
import { view as guideMoving } from './guides/GuideMoving'
import { view as guideTaxes } from './guides/GuideTaxes'
import { view as guideCompany } from './guides/GuideCompany'
import { view as guideLeavingGermany } from './guides/GuideLeavingGermany'
import { view as blog } from './guides/Blog'
import { view as taxCalculator } from './tools/TaxCalculator'
import { view as costEstimator } from './tools/CostEstimator'
import { view as fitQuiz } from './tools/FitQuiz'
import { view as playbook } from './tools/Playbook'
import { view as newsletter } from './tools/Newsletter'
import { view as compareCyprus } from './compare/CompareCyprus'
import { view as compareDubai } from './compare/CompareDubai'
import { view as comparePortugal } from './compare/ComparePortugal'
import { view as glossary } from './compare/Glossary'
import { view as news } from './compare/News'
import { view as about } from './trust/About'
import { view as reviewers } from './trust/Reviewers'
import { view as caseStudies } from './trust/CaseStudies'
import { view as reviews } from './trust/Reviews'
import { view as contact } from './trust/Contact'
import { view as imprint } from './trust/Imprint'
import { view as privacy } from './trust/Privacy'

/** Page key → view. Type-checked against routes.ts so no page can be missing. */
export const views: Record<PageKey, View> = {
  home,
  companyFormation,
  relocation,
  residency,
  taxAdvisory,
  consultation,
  forOnlineEntrepreneurs,
  forFreelancers,
  forInvestors,
  forFamilies,
  forNonEuFounders,
  guideMoving,
  guideTaxes,
  guideCompany,
  guideLeavingGermany,
  blog,
  taxCalculator,
  costEstimator,
  fitQuiz,
  playbook,
  newsletter,
  compareCyprus,
  compareDubai,
  comparePortugal,
  glossary,
  news,
  about,
  reviewers,
  caseStudies,
  reviews,
  contact,
  imprint,
  privacy,
}
