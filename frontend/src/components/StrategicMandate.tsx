export default function StrategicMandate() {
  return (
    <section className="py-16 px-8 bg-[#041F1E]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            alt="Futuristic data center with emerald lighting"
            className="w-full h-[400px] object-cover rounded border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwMg-f47pRxQNEuR65RC5pv73vH7lbUzTlCDRkhFX6byTMTMZRFTOEuP1X5RpQqwPEcO6KiMD37hFkOQtuMQN3O21e61lrb3qyHOCaYwBZLDjgJzBFFQOc9aWhj2XgXYl6QK4kq73q83FsN369yM5OYjXUij4MnGj7Tku01zxxI-gaB5ZEqJX_DruNUAcpeECJoYNEdfrQxfzua3vC7HySTLI2lWIDoNlKJLMp62sw-UP2ywvm9e5CcuMGfZTqyX5212DVeeRVsZSo"
          />
        </div>

        {/* Copy */}
        <div className="w-full lg:w-1/2">
          <span className="type-label-caps text-[color:var(--color-primary)] mb-4 block">
            STRATEGIC MANDATE
          </span>
          <h2 className="type-display-lg mb-4">Architecting Global Liquidity</h2>
          <p className="type-body-lg text-[color:var(--color-on-surface-variant)] mb-6">
            Omnichain Gateway was founded on the principle that digital assets shouldn't be trapped in silos.
            Our mission is to provide the underlying infrastructure that connects every chain, every asset,
            and every user into a single, unified financial layer.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="type-headline-md text-[color:var(--color-primary)]">$45B+</p>
              <p className="type-data-sm text-[color:var(--color-on-surface-variant)]">INFRASTRUCTURE SECURED</p>
            </div>
            <div>
              <p className="type-headline-md text-[color:var(--color-primary)]">120+</p>
              <p className="type-data-sm text-[color:var(--color-on-surface-variant)]">GLOBAL INTEGRATIONS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
