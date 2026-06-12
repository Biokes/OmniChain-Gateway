const transactions = [
  { time: '14:22:01.04', route: ['NGN', 'USDC'], amount: '12,500.00', status: 'SETTLED', routing: false },
  { time: '14:21:58.92', route: ['ETH', 'SOL'],  amount: '45.00',     status: 'SETTLED', routing: false },
  { time: '14:21:55.12', route: ['EURC', 'BASE'], amount: '1,200.00', status: 'SETTLED', routing: false },
  { time: '14:21:52.05', route: ['USDT', 'ARB'],  amount: '50,000.00',status: 'ROUTING', routing: true },
  { time: '14:21:49.44', route: ['NGN', 'ETH'],   amount: '3,200.00', status: 'SETTLED', routing: false },
]

export default function SettlementStream() {
  return (
    <section className="py-16 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="type-headline-md mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined">analytics</span>
          Recent Settlement Stream
        </h2>

        <div className="bg-[color:var(--color-surface-container-lowest)] border border-white/10 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[color:var(--color-surface-container-high)] px-4 py-2 type-data-sm flex gap-6 text-[color:var(--color-on-surface-variant)] border-b border-white/10">
            <span className="w-1/4">TIMESTAMP</span>
            <span className="w-1/4">ROUTE</span>
            <span className="w-1/4">ASSET</span>
            <span className="w-1/4">STATUS</span>
          </div>

          {/* Rows */}
          <div className="h-64 overflow-y-auto terminal-scroll" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '14px', fontWeight: 500 }}>
            {transactions.map((tx, i) => (
              <div
                key={i}
                className="px-4 py-2 border-b border-white/5 flex gap-6 hover:bg-white/5 transition-colors"
              >
                <span className="w-1/4 text-[color:var(--color-on-surface-variant)]">{tx.time}</span>
                <span className="w-1/4 text-[color:var(--color-primary)] flex items-center gap-1 flex-wrap">
                  {tx.route[0]}
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                  {tx.route[1]}
                </span>
                <span className="w-1/4">{tx.amount}</span>
                <span className={`w-1/4 ${tx.routing ? 'text-[color:var(--color-primary)] animate-pulse' : 'text-[color:var(--color-tertiary)]'}`}>
                  [ {tx.status} ]
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
