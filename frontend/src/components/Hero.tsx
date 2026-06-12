export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-8 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuChG0Nfi6NgobnvHk7Bo0z-1CoPi0RrzS4AexNEbxSAsjh_70MeWlYGVR7xM5KOnCLf7JKXemPJmriOID3jDCWkCnThVbzIkoAspFwcPBf1mXh_zuc40oMRYFHGqnC5J3ySHSTt-Bio2UomCGOu3noPU11XlYmD80g0yLOU-SRH41yBypwwYBfzERZmB-Ks_MCt94DuJ-lU44nkwefd3kmv-1ktXTsiR9sCS4P21c8ogUephVxqLauINdJOFt95EgONN4PCs1aN30TZ"
          alt="Global financial infrastructure"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-background)]/80 via-[color:var(--color-background)]/20 to-[color:var(--color-background)]" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div className="z-10">
          <span className="inline-block py-1 px-3 border border-[color:var(--color-primary)]/30 bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] type-label-caps rounded mb-6">
            ISO 20022 COMPLIANT INFRASTRUCTURE
          </span>

          <h1 className="type-display-lg text-[color:var(--color-on-surface)] mb-4 max-w-xl">
            Move Money Across Chains Without Moving Complexity
          </h1>

          <p className="type-body-lg text-[color:var(--color-on-surface-variant)] mb-10 max-w-md">
            The institutional bridge for global capital flows. Atomic settlement, unified liquidity,
            and regulatory-grade compliance baked into every route.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[color:var(--color-primary)] text-[color:var(--color-on-primary)] text-lg font-semibold px-8 py-4 rounded hover:brightness-110 transition-all flex items-center gap-2 whitespace-nowrap" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Launch Gateway
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="border border-[color:var(--color-outline-variant)] text-[color:var(--color-on-surface)] text-lg font-semibold px-8 py-4 rounded hover:bg-[color:var(--color-surface-variant)] transition-all whitespace-nowrap" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Documentation
            </button>
          </div>
        </div>

        {/* Right: Network viz */}
        <div className="relative hidden lg:block h-[500px]">
          <div className="absolute inset-0 glass-panel rounded-xl p-4 overflow-hidden">
            <div className="absolute inset-0 bg-[#0A2F2D] opacity-40" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                <span className="type-data-sm text-[color:var(--color-primary)]">NETWORK_STATUS: OPTIMAL</span>
                <span className="type-data-sm text-[color:var(--color-on-surface-variant)]">NODE: 0x4A...22E</span>
              </div>
              <div className="flex-grow flex items-center justify-center">
                <div className="relative w-64 h-64 border border-dashed border-white/20 rounded-full flex items-center justify-center animate-pulse">
                  <div className="absolute inset-0 border-2 border-[color:var(--color-primary)]/20 rounded-full blur-xl" />
                  <span className="material-symbols-outlined text-[color:var(--color-primary)] text-6xl">hub</span>
                </div>
              </div>
              <div className="mt-4 type-data-sm text-[color:var(--color-on-surface-variant)] flex justify-between">
                <span>LATENCY: 412MS</span>
                <span>THROUGHPUT: 12.4K TPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
