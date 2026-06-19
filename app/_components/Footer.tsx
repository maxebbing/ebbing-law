import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-brand">
      <div className="max-w-4xl mx-auto px-6 py-6 text-white/90 text-center">
        <p className="text-xs tracking-[0.08em] leading-relaxed">
          Buschgrabenweg 13 &middot; 14165 Berlin
        </p>
        <p className="text-xs tracking-[0.06em] leading-relaxed mt-1">
          Telefon: +49&nbsp;(0)30&nbsp;3810&nbsp;9824 &middot; Mobil:
          +49&nbsp;(0)177&nbsp;5&nbsp;90&nbsp;80&nbsp;70 &middot; Fax:
          +49&nbsp;(0)30&nbsp;3730&nbsp;0645 &middot;{' '}
          <a
            href="mailto:ebbing@ebbing-law.de"
            className="hover:text-white transition-colors"
          >
            ebbing@ebbing-law.de
          </a>
        </p>
        <p className="text-xs tracking-[0.05em] leading-relaxed mt-2 text-white/70">
          Deutsche Bank Berlin &nbsp; IBAN: DE50100700240014598700 &nbsp; BIC:
          DEUTDEDBBER &middot; USt-IdNr. DE273379852
        </p>
        <div className="mt-4 pt-3 border-t border-white/20 flex justify-center gap-8">
          <Link
            href="/impressum"
            className="text-xs tracking-[0.1em] uppercase text-white/70 hover:text-white transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-xs tracking-[0.1em] uppercase text-white/70 hover:text-white transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  )
}
