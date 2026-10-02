import type { Locale } from '@/lib/i18n'
import { href } from '@/lib/routes'
import { ui } from '@/lib/ui'
import { ButtonLink } from '@/components/blocks/ButtonLink'

export function CtaBand({ locale, heading, lead }: { locale: Locale; heading?: string; lead?: string }) {
  const t = ui[locale]
  return (
    <section aria-labelledby="cta-band-heading" className="mx-auto box-border w-full max-w-[1200px] px-6 py-20">
      <div
        className="grid items-center gap-8 rounded-panel bg-soft p-[clamp(28px,5vw,56px)]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))' }}
      >
        <div className="flex flex-col gap-3">
          <h2 id="cta-band-heading" className="m-0 text-[clamp(28px,3vw,38px)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            {heading ?? t.ctaHeading}
          </h2>
          <p className="m-0 text-[17px] leading-relaxed text-body">{lead ?? t.ctaLead}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <ButtonLink href={href('consultation', locale)}>{t.ctaPrimary}</ButtonLink>
          <ButtonLink href={href('playbook', locale)} variant="secondary">
            {t.ctaSecondary}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
