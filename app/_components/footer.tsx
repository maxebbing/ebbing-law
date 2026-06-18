import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#5a8ba8] py-8 px-6 text-center">
      <p className="text-white/60 font-display text-sm tracking-[0.25em] mb-4" style={{ fontVariant: 'small-caps' }}>
        Mike Ebbing LL.M. &middot; Rechtsanwalt
      </p>
      <nav aria-label="Rechtliches" className="flex items-center justify-center gap-3 text-[0.7rem] tracking-[0.18em] uppercase">
        <Link
          href="/impressum"
          className="text-white/70 hover:text-white transition-colors duration-200"
        >
          Impressum
        </Link>
        <span className="text-white/30">&middot;</span>
        <Link
          href="/datenschutz"
          className="text-white/70 hover:text-white transition-colors duration-200"
        >
          Datenschutzerklärung
        </Link>
      </nav>
    </footer>
  )
}
