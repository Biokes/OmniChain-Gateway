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
      className="fixed top-0 w-full z-50 border-b border-white/10 px-[32px] py-[16px] flex justify-between items-center"
      style={{ background: 'rgba(0,23,22,0.8)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
    >
      {/* Left: Logo + Desktop Links */}
      <div className="flex items-center gap-[40px]">
        <span className="font-headline-md text-[color:var(--color-on-surface)] font-bold tracking-tighter">
          Omnichain Gateway
        </span>

        <div className="hidden md:flex gap-[24px] items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`font-label-caps transition-colors duration-200 ${
                link.active
                  ? 'text-[color:var(--color-primary)] font-bold border-b-2 border-[color:var(--color-primary)] pb-1'
                  : 'text-[color:var(--color-on-surface-variant)] hover:text-[color:var(--color-primary)]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right: Settings + Connect */}
      <div className="flex items-center gap-[16px]">
        <button
          className="p-[8px] text-[color:var(--color-on-surface-variant)] hover:text-[color:var(--color-primary)] transition-colors"
          aria-label="Settings"
        >
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button className="bg-[color:var(--color-primary-container)] px-[16px] py-[8px] text-[color:var(--color-on-primary-container)] font-label-caps rounded hover:opacity-90 active:scale-95 transition-all">
          Connect Wallet
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-[8px] text-[color:var(--color-on-surface-variant)] hover:text-[color:var(--color-primary)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full border-b border-white/10 py-[16px] px-[32px] flex flex-col gap-[16px] md:hidden"
          style={{ background: 'rgba(0,23,22,0.97)', backdropFilter: 'blur(24px)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              onClick={() => setMenuOpen(false)}
              className={`font-label-caps py-[8px] transition-colors ${
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
