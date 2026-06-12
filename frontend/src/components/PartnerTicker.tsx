const partners = ['STELLAR', 'ARBITRUM', 'CIRCLE', 'POLYGON', 'BASE', 'CHAINLINK']

export default function PartnerTicker() {
  return (
    <section
      className="relative border-y border-white/5 bg-[color:var(--color-surface-container-lowest)] py-10"
      style={{ overflow: 'hidden' }}
    >
      <div className="relative w-full" style={{ filter: 'blur(8px)', opacity: 0.35 }}>
        <div className="flex animate-ticker" style={{ width: 'max-content' }}>
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-16 px-10 shrink-0">
              {partners.map((name) => (
                <span key={name} className="type-headline-md tracking-tighter whitespace-nowrap">
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

ææ      <div
 æ       className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(7px)',
          background: 'rgba(0,23,22,0.15)',
        }}
      />
    </section>
  )
}
