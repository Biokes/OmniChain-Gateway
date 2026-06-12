const benefits = [
  {
    icon: 'account_balance',
    title: 'Capital Efficiency',
    desc: 'Our JIT liquidity models ensure 0% wasted capital. Every dollar is optimized for routing at the moment of trade.',
  },
  {
    icon: 'verified_user',
    title: 'Unified Compliance',
    desc: 'One integration, global reach. We handle local regulatory requirements for every destination chain.',
  },
  {
    icon: 'bolt',
    title: 'Atomic Finality',
    desc: 'Eliminate counterparty risk. Assets are swapped atomically or returned, never stuck in transit.',
  },
]

export default function OmnichainAdvantage() {
  return (
    <section className="py-16 px-8 bg-[color:var(--color-surface-container-lowest)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="type-headline-lg mb-2">The Omnichain Advantage</h2>
          <p className="type-body-md text-[color:var(--color-on-surface-variant)] max-w-2xl mx-auto">
            We don't just bridge assets; we build the foundational infrastructure for the future of finance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 glass-panel flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-[color:var(--color-primary)]">{b.icon}</span>
                </div>
                <div>
                  <h4 className="type-headline-md mb-1">{b.title}</h4>
                  <p className="type-body-sm text-[color:var(--color-on-surface-variant)]">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visualization */}
          <div className="lg:col-span-2 relative min-h-[300px]">
            <img
              alt="Technical global network visualization"
              className="w-full h-full object-cover rounded-xl border border-white/10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1pVwaTYqwZLYADlM_tqNa0kCIT1BVGjQ_v9NonUG5X3svAMzr4k9LDSiOQlUAyv1WVZBcmWZLutoLZjLQydqqCZbUJewc0nMMfG_BvirQv7MxulE3GkrkMxKorlfHdeWJpeRKFSRZB7ASi7Ubi4emdOAR8bu9r_PE_4wuXe_uiEBpYjx1KaEG9eZY0p3HbHVJlE4M1DCIrG3emsOJ8t8_5mVIPLE5fAKZPjmg_Mr5ISBsynw6sMZBKOPBhvc98VssELn3RN9Um_wc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-background)] via-transparent to-transparent rounded-xl" />
            <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-lg">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[color:var(--color-tertiary)] rounded-full animate-ping" />
                <span className="type-data-sm text-[color:var(--color-on-surface)]">
                  LIVE ROUTE OPTIMIZATION ENGINE v4.2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
