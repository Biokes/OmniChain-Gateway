const chains = [
  { name: 'ETHEREUM', value: '$2.4B', label: 'LOCKED LIQUIDITY' },
  { name: 'SOLANA',   value: '65K',   label: 'TX / SECOND' },
  { name: 'ARBITRUM', value: '12MS',  label: 'AVG LATENCY' },
  { name: 'BASE',     value: '8.2M',  label: 'DAILY VOL' },
  { name: 'POLYGON',  value: '$0.001',label: 'AVG FEE' },
  { name: 'STELLAR',  value: '99.9%', label: 'UPTIME' },
]

export default function ConnectedEcosystem() {
  return (
    <section className="py-16 bg-[color:var(--color-surface-container-low)] px-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="type-headline-lg mb-10 text-center">Connected Ecosystem</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="p-4 border border-white/5 hover:border-[color:var(--color-primary)]/20 bg-[color:var(--color-surface-container)] transition-colors rounded"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="type-label-caps text-[color:var(--color-on-surface-variant)]">{chain.name}</span>
                <span className="w-2 h-2 rounded-full bg-[color:var(--color-primary)]" />
              </div>
              <p className="type-data-lg text-[color:var(--color-on-surface)]">{chain.value}</p>
              <p className="type-data-sm text-[color:var(--color-on-surface-variant)]">{chain.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
