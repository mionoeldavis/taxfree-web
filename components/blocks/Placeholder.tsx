/**
 * Stand-in for a photo or diagram that has not been produced yet (designs mark these as “[Photo: …]”).
 * Swap for a pre-optimised WebP/AVIF <img> with explicit width/height when the asset exists.
 */
export function Placeholder({ label, className = '', dark = false }: { label: string; className?: string; dark?: boolean }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`box-border flex items-center justify-center rounded-[22px] p-4 text-center text-sm ${dark ? 'bg-ink-2 text-on-dark-muted' : 'bg-placeholder text-muted'} ${className}`}
    >
      [{label}]
    </div>
  )
}
