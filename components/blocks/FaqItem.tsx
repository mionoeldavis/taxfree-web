import { JsonLd } from '@/components/seo/JsonLd'
import { faqSchema } from '@/components/seo/schema'

export type Faq = { q: string; a: string }

export function FaqItem({ q, a }: Faq) {
  return (
    <div className="box-border flex h-full flex-col gap-2 rounded-[20px] bg-faq p-6">
      <h3 className="m-0 text-[17px] font-extrabold">{q}</h3>
      <p className="m-0 text-[15px] leading-relaxed text-body">{a}</p>
    </div>
  )
}

/** Static FAQ cards; also emits the page's FAQPage schema (use once per page). */
export function FaqList({ items, schema = true, columns = false }: { items: Faq[]; schema?: boolean; columns?: boolean }) {
  return (
    <>
      <div className={columns ? 'grid gap-3 md:grid-cols-2' : 'flex flex-col gap-3'}>
        {items.map((f) => (
          <FaqItem key={f.q} {...f} />
        ))}
      </div>
      {schema ? <JsonLd data={faqSchema(items)} /> : null}
    </>
  )
}
