import { useState } from 'react'

const faqs = [
  {
    q: 'How does atomic settlement prevent slippage?',
    a: 'Atomic settlement uses on-chain escrow contracts that either complete the entire swap in a single transaction or revert entirely. This eliminates price exposure windows that cause slippage in multi-step bridging.',
  },
  {
    q: 'What compliance standards do you support?',
    a: 'We support ISO 20022, FATF Travel Rule, MiCA, and integrate with KYC/AML providers including Chainalysis, Elliptic, and ComplyAdvantage across all destination chains.',
  },
  {
    q: 'How are transaction fees calculated across chains?',
    a: 'Fees are dynamically computed using real-time gas oracle data from all connected chains, combined with our liquidity depth model. You always see the total cost before confirming.',
  },
  {
    q: 'Is your bridge audit history public?',
    a: 'Yes. All smart contract audits conducted by Trail of Bits, Halborn, and Certik are available in our documentation under Security Audits. We publish findings and remediation reports.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="type-headline-lg mb-10 text-center">Technical Specifications</h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="glass-panel rounded-lg overflow-hidden border border-white/10">
              <button
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="type-headline-md pr-4">{item.q}</span>
                <span
                  className={`material-symbols-outlined text-[color:var(--color-on-surface-variant)] group-hover:text-[color:var(--color-primary)] transition-transform duration-300 shrink-0 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 type-body-md text-[color:var(--color-on-surface-variant)]">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
