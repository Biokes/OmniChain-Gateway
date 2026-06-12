const stats = [
  { label: 'TOTAL VOLUME',    value: '$1.24B', sub: '+12.4% THIS MONTH' },
  { label: 'AVG SETTLEMENT',  value: '412ms',  sub: 'P99 PERFORMANCE' },
  { label: 'ACTIVE ROUTES',   value: '1,248',  sub: 'CROSS-CHAIN PATHS' },
]

export default function MissionControl() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto glass-panel p-8 md:p-16 rounded-xl relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--color-primary)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left */}
          <div className="col-span-1">
            <span className="type-label-caps text-[color:var(--color-primary)] tracking-widest block mb-2">
              NETWORK HEALTH
            </span>
            <h2 className="type-headline-lg mb-4">Real-time Mission Control</h2>
            <p className="type-body-md text-[color:var(--color-on-surface-variant)] mb-6">
              Monitoring global settlement rails across 42 active nodes. Our infrastructure is
              battle-tested for high-velocity institutional volumes.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between type-data-sm">
                <span className="text-[color:var(--color-on-surface-variant)]">Uptime</span>
                <span className="text-[color:var(--color-tertiary)]">99.999%</span>
              </div>
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-[color:var(--color-tertiary)] h-full"
                  style={{ width: '99.9%', boxShadow: '0 0 8px #2ee288' }}
                />
              </div>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[color:var(--color-surface-container-high)] p-6 rounded border-l-2 border-[color:var(--color-primary)]"
              >
                <p className="type-label-caps text-[color:var(--color-on-surface-variant)] mb-1">{s.label}</p>
                <p className="type-headline-lg text-[color:var(--color-on-surface)] tabular-nums">{s.value}</p>
                <p className="type-data-sm text-[color:var(--color-primary-fixed-dim)] mt-2">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
