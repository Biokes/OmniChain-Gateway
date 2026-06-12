const cards = [
  {
    icon: 'payments',
    title: 'Fiat Onboarding',
    desc: 'SEP-24 fully integrated. Connect domestic bank accounts directly to chain liquidity.',
    status: 'DEPLOYED',
  },
  {
    icon: 'route',
    title: 'Smart Routing',
    desc: 'Multi-hop pathfinding for lowest slippage across 12+ EVM and non-EVM chains.',
    status: 'ACTIVE',
  },
  {
    icon: 'account_balance_wallet',
    title: 'Auto Settlement',
    desc: 'Instant finality protocols. Zero-delay reconciliation for cross-border flows.',
    status: 'SYNCED',
  },
  {
    icon: 'policy',
    title: 'Compliance',
    desc: 'KYC/AML middleware baked into the protocol layer. Risk-score every route.',
    status: 'ENFORCED',
  },
]

export default function CoreSystems() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="type-headline-lg mb-2">Gateway Core Systems</h2>
          <p className="type-body-md text-[color:var(--color-on-surface-variant)] max-w-xl mx-auto">
            Enterprise-ready modules for seamless cross-chain settlement and asset movement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="glass-panel p-6 rounded-lg group hover:border-[color:var(--color-primary)]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[color:var(--color-primary)]/10 rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[color:var(--color-primary)]">{card.icon}</span>
              </div>
              <h3 className="type-headline-md mb-1">{card.title}</h3>
              <p className="type-data-sm text-[color:var(--color-on-surface-variant)] mb-4">{card.desc}</p>
              <div className="type-data-sm text-[color:var(--color-primary)] flex items-center gap-2">
                {card.status}
                <span className="w-2 h-2 rounded-full bg-[color:var(--color-primary)] animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
