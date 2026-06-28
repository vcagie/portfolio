const links = [
  { href: '#home', label: 'home' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 flex justify-center px-4">
      <nav className="mt-4 flex items-center gap-1 rounded-md border border-white/10 bg-term-chrome/90 px-2 py-1.5 font-mono text-xs backdrop-blur">
        <span className="hidden pr-2 text-term-green sm:inline">$</span>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded px-3 py-1.5 text-slate-400 transition hover:bg-white/5 hover:text-term-green"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
