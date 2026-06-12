import { useState } from 'react'

const navLinks = [
  { label: 'Network', active: true },
  { label: 'Settlement', active: false },
  { label: 'Liquidity', active: false },
  { label: 'Governance', active: false },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-white/10 px-8 py-4 flex justify-between items-center"
      style={{ background: 'rgba(0,23,22,0.85)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
    >
      {/* Logo + Desktop Links */}
      <div className="flex items-center gap-10">
        <span className="type-headline-md text-[color:var(--color-on-surface)] font-bold tracking-tighter">
          Omnichain Gateway
        </span>

        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`type-label-caps transition-colors duration-200 ${
                link.active
                  ? 'text-[color:var(--color-primary)] border-b-2 border-[color:var(--color-primary)] pb-1'
                  : 'text-[color:var(--color-on-surface-variant)] hover:text-[color:var(--color-primary)]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 text-[color:var(--color-on-surface-variant)] hover:text-[color:var(--color-primary)] transition-colors"
          aria-label="Settings"
        >
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button className="bg-[color:var(--color-primary-container)] px-4 py-2 text-[color:var(--color-on-primary-container)] type-label-caps rounded hover:opacity-90 active:scale-95 transition-all whitespace-nowrap">
          Connect Wallet
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[color:var(--color-on-surface-variant)] hover:text-[color:var(--color-primary)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full border-b border-white/10 py-4 px-8 flex flex-col gap-4 md:hidden"
          style={{ background: 'rgba(0,23,22,0.97)', backdropFilter: 'blur(24px)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              onClick={() => setMenuOpen(false)}
              className={`type-label-caps py-2 transition-colors ${
                link.active
                  ? 'text-[color:var(--color-primary)]'
                  : 'text-[color:var(--color-on-surface-variant)] hover:text-[color:var(--color-primary)]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
