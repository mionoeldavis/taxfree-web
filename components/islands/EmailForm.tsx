'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useId, useState, type FormEvent, type ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { integrations } from '@/lib/site'

type Field = 'name' | 'email' | 'phone' | 'country' | 'profit' | 'message'
type Status = 'idle' | 'sending' | 'sent' | 'error'

const T = {
  en: {
    labels: { name: 'Name', email: 'Email', phone: 'Phone (optional)', country: 'You live in', profit: 'Approx. annual profit', message: 'Your question' },
    consent: (privacy: ReactNode) => <>I agree that my details are stored to answer my request. See {privacy}.</>,
    privacy: 'privacy policy',
    sending: 'Sending…',
    error: 'Something went wrong. Please try again or email us directly.',
    notConfigured: 'The form is not connected yet. Please email us directly.',
    invalidEmail: 'Please enter a valid email address.',
    required: 'Please fill in this field.',
    consentRequired: 'Please agree so we can answer you.',
    challenge: 'Please complete the spam check.',
  },
  de: {
    labels: { name: 'Name', email: 'E-Mail', phone: 'Telefon (optional)', country: 'Sie wohnen in', profit: 'Ungefährer Jahresgewinn', message: 'Ihre Frage' },
    consent: (privacy: ReactNode) => <>Ich bin einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert werden. Siehe {privacy}.</>,
    privacy: 'Datenschutzerklärung',
    sending: 'Wird gesendet …',
    error: 'Das hat nicht geklappt. Bitte erneut versuchen oder direkt per E-Mail schreiben.',
    notConfigured: 'Das Formular ist noch nicht angebunden. Bitte schreiben Sie uns direkt per E-Mail.',
    invalidEmail: 'Bitte eine gültige E-Mail-Adresse eingeben.',
    required: 'Bitte dieses Feld ausfüllen.',
    consentRequired: 'Bitte stimmen Sie zu, damit wir antworten können.',
    challenge: 'Bitte schließen Sie die Spam-Prüfung ab.',
  },
} as const

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_LEN: Record<Field, number> = { name: 120, email: 254, phone: 40, country: 80, profit: 80, message: 4000 }

/**
 * Lead / contact / newsletter form. Static export has no server, so it posts multipart data to
 * NEXT_PUBLIC_FORM_ENDPOINT (Supabase Edge Function or Formspree). Spam guards: honeypot field
 * `company_website` and, when NEXT_PUBLIC_TURNSTILE_SITE_KEY is set, Cloudflare Turnstile
 * (token arrives as `cf-turnstile-response`). The endpoint must validate again server-side.
 */
export function EmailForm({
  locale,
  form,
  fields,
  selects = {},
  optional = ['phone'],
  labels = {},
  submitLabel,
  successMessage,
  privacyHref,
  dark = false,
}: {
  locale: Locale
  /** Identifies the source on the endpoint: contact, consultation, playbook, newsletter … */
  form: string
  fields: Field[]
  /** Fields rendered as a <select> with these options (submitted value = option text). */
  selects?: Partial<Record<Field, string[]>>
  /** Fields that may stay empty (default: phone). */
  optional?: Field[]
  /** Per-field label overrides. */
  labels?: Partial<Record<Field, string>>
  submitLabel: string
  successMessage: string
  privacyHref: string
  dark?: boolean
}) {
  const t = T[locale]
  const id = useId()
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const endpoint = integrations.formEndpoint

  function validate(data: FormData): Partial<Record<Field, string>> {
    const found: Partial<Record<Field, string>> = {}
    for (const f of fields) {
      const value = String(data.get(f) ?? '').trim()
      const options = selects[f]
      if (!value && !optional.includes(f)) found[f] = t.required
      else if (options && value && !options.includes(value)) found[f] = t.required
      else if (value.length > MAX_LEN[f]) found[f] = t.required
      else if (f === 'email' && !EMAIL_RE.test(value)) found[f] = t.invalidEmail
    }
    return found
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (String(data.get('company_website') ?? '')) {
      setStatus('sent') // honeypot filled: pretend success, send nothing
      return
    }
    const found = validate(data)
    setErrors(found)
    // noValidate disables the browser's own checks, so consent and the spam challenge are checked here.
    const blocking = data.get('consent') !== 'yes' ? t.consentRequired : integrations.turnstileSiteKey && !data.get('cf-turnstile-response') ? t.challenge : null
    setFormError(blocking)
    if (Object.keys(found).length || blocking) return
    if (!endpoint) {
      setStatus('error')
      return
    }
    data.set('form', form)
    data.set('locale', locale)
    setStatus('sending')
    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error(`Form endpoint answered ${res.status}`)
      setStatus('sent')
    } catch (err) {
      console.error('Form submission failed', err)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p role="status" className={`m-0 rounded-2xl p-5 text-base font-semibold ${dark ? 'bg-ink-2 text-mint' : 'bg-soft text-brand'}`}>
        {successMessage}
      </p>
    )
  }

  const input = `min-h-12 w-full rounded-btn border px-4 py-3 text-base ${dark ? 'border-dark-line bg-ink-2 text-white placeholder:text-on-dark-muted' : 'border-line-strong bg-white text-ink'}`
  const label = `text-sm font-bold ${dark ? 'text-white' : 'text-ink'}`
  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-4">
      {fields.map((f) => {
        const fid = `${id}-${f}`
        const err = errors[f]
        return (
          <div key={f} className="flex flex-col gap-1.5">
            <label htmlFor={fid} className={label}>
              {labels[f] ?? t.labels[f]}
            </label>
            {selects[f] ? (
              <select id={fid} name={f} defaultValue={selects[f][0]} aria-invalid={!!err} aria-describedby={err ? `${fid}-err` : undefined} className={input}>
                {selects[f].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : f === 'message' ? (
              <textarea id={fid} name={f} rows={5} maxLength={MAX_LEN[f]} aria-invalid={!!err} aria-describedby={err ? `${fid}-err` : undefined} className={input} />
            ) : (
              <input
                id={fid}
                name={f}
                type={f === 'email' ? 'email' : f === 'phone' ? 'tel' : 'text'}
                autoComplete={f === 'name' ? 'name' : f === 'email' ? 'email' : f === 'phone' ? 'tel' : 'off'}
                maxLength={MAX_LEN[f]}
                aria-invalid={!!err}
                aria-describedby={err ? `${fid}-err` : undefined}
                className={input}
              />
            )}
            {err ? (
              <span id={`${fid}-err`} className="text-sm font-semibold text-warn">
                {err}
              </span>
            ) : null}
          </div>
        )
      })}
      {/* Honeypot: hidden from people and assistive tech, bots fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-hp`}>Website</label>
        <input id={`${id}-hp`} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label className={`flex gap-3 text-sm leading-normal ${dark ? 'text-on-dark-muted' : 'text-body'}`}>
        <input type="checkbox" name="consent" value="yes" required aria-invalid={formError === t.consentRequired} className="mt-0.5 size-5 shrink-0 accent-brand" />
        <span>
          {t.consent(
            <Link href={privacyHref} className="underline">
              {t.privacy}
            </Link>,
          )}
        </span>
      </label>
      {integrations.turnstileSiteKey ? (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
          <div className="cf-turnstile" data-sitekey={integrations.turnstileSiteKey} data-language={locale} />
        </>
      ) : null}
      <button type="submit" disabled={status === 'sending'} className="min-h-12 rounded-btn bg-brand px-6 py-4 font-bold text-white hover:bg-[#094c33] disabled:opacity-60">
        {status === 'sending' ? t.sending : submitLabel}
      </button>
      {formError ? (
        <p role="alert" className="m-0 text-sm font-semibold text-warn">
          {formError}
        </p>
      ) : null}
      {status === 'error' ? (
        <p role="alert" className="m-0 text-sm font-semibold text-warn">
          {endpoint ? t.error : t.notConfigured}
        </p>
      ) : null}
    </form>
  )
}
