export default function CTA() {
  return (
    <section className="py-16 px-8 mb-16">
      <div
        className="max-w-5xl mx-auto p-16 rounded text-center relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <div className="absolute inset-0 opacity-10 technical-grid pointer-events-none" />

        <h2
          className="type-display-lg mb-4 relative z-10"
          style={{ color: 'var(--color-on-primary-fixed)' }}
        >
          One Gateway. Every Chain.
        </h2>

        <p
          className="type-body-lg mb-10 max-w-xl mx-auto relative z-10 opacity-90"
          style={{ color: 'var(--color-on-primary-fixed)' }}
        >
          Ready to integrate the most advanced cross-chain settlement engine into your institutional workflow?
        </p>

        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <button
            className="text-lg font-semibold px-16 py-4 rounded hover:opacity-90 transition-all whitespace-nowrap"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              backgroundColor: 'var(--color-on-primary-fixed)',
              color: 'var(--color-primary-fixed)',
            }}
          >
            Launch App
          </button>
          <button
            className="text-lg font-semibold px-16 py-4 rounded transition-all whitespace-nowrap border hover:opacity-80"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              borderColor: 'var(--color-on-primary-fixed)',
              color: 'var(--color-on-primary-fixed)',
            }}
          >
            View Documentation
          </button>
        </div>
      </div>
    </section>
  )
}