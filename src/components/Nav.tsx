const links = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 flex justify-center">
      <nav className="mt-4 flex gap-6 rounded-full border border-slate-800 bg-slate-950/80 px-6 py-2 backdrop-blur">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-sky-400">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
