const footerLinks = [
  { label: 'Network Status', href: '#' },
  { label: 'Protocol Docs',  href: '#' },
  { label: 'Legal',          href: '#' },
  { label: 'Security Audit', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-surface-container-lowest)] border-t border-white/5 py-10 px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex flex-col gap-1 text-center md:text-left">
        <span className="type-label-caps text-[color:var(--color-on-surface-variant)]">OMNICHAIN GATEWAY</span>
        <p className="type-data-sm text-[color:var(--color-on-surface-variant)] opacity-60">
          © 2024 Omnichain Gateway. All rights reserved. ISO 20022 Compliant.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 type-data-sm">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[color:var(--color-on-surface-variant)] hover:text-[color:var(--color-tertiary)] transition-colors hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
