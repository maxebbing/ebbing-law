import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <div className="flex-1 flex flex-col items-center px-6 py-14 md:py-20">

      {/* Back link */}
      <div className="w-full max-w-2xl mb-10">
        <Link
          href="/"
          className="font-body text-[#5a8ba8] text-[0.7rem] tracking-[0.22em] uppercase hover:text-[#4a7a97] transition-colors duration-200"
        >
          ← Mike Ebbing LL.M.
        </Link>
      </div>

      {/* Content card */}
      <article
        className="w-full max-w-2xl bg-white rounded-2xl px-10 md:px-14 py-12 md:py-14"
        style={{ boxShadow: '0 8px 48px rgba(44, 72, 92, 0.10), 0 1px 4px rgba(44, 72, 92, 0.05)' }}
      >
        <h1
          className="font-display text-[#5a8ba8] font-normal tracking-[0.15em] mb-10"
          style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontVariant: 'small-caps' }}
        >
          Impressum
        </h1>

        <div className="font-body text-gray-600 text-sm leading-7 space-y-8">

          <section>
            <h2 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5a8ba8] font-medium mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Mike Ebbing LL.M.<br />
              Rechtsanwalt<br />
              Buschgrabenweg 13<br />
              14165 Berlin
            </p>
          </section>

          <div className="w-8 border-t border-[#5a8ba8]/20" />

          <section>
            <h2 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5a8ba8] font-medium mb-3">
              Kontakt
            </h2>
            <p>
              Telefon: +49 (0)30 3810 9824<br />
              Fax: +49 (0)30 3730 0645<br />
              E-Mail:{' '}
              <a href="mailto:ebbing@ebbing-law.de" className="hover:text-[#5a8ba8] transition-colors duration-200">
                ebbing@ebbing-law.de
              </a>
            </p>
          </section>

          <div className="w-8 border-t border-[#5a8ba8]/20" />

          <section>
            <h2 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5a8ba8] font-medium mb-3">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p>
              Berufsbezeichnung: Rechtsanwalt<br />
              (verliehen in der Bundesrepublik Deutschland)
            </p>
            <p className="mt-4">
              Zuständige Rechtsanwaltskammer:<br />
              Rechtsanwaltskammer Berlin<br />
              Littenstraße 9<br />
              10179 Berlin
            </p>
            <p className="mt-4">
              Es gelten folgende berufsrechtliche Regelungen:
            </p>
            <ul className="mt-2 space-y-1 list-none pl-0">
              {[
                'Bundesrechtsanwaltsordnung (BRAO)',
                'Berufsordnung für Rechtsanwälte (BORA)',
                'Fachanwaltsordnung (FAO)',
                'Rechtsanwaltsvergütungsgesetz (RVG)',
              ].map((rule) => (
                <li key={rule} className="flex gap-3">
                  <span className="text-[#5a8ba8]/50 select-none">–</span>
                  {rule}
                </li>
              ))}
            </ul>
          </section>

          <div className="w-8 border-t border-[#5a8ba8]/20" />

          <section>
            <h2 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5a8ba8] font-medium mb-3">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>DE273379852</p>
          </section>

          <div className="w-8 border-t border-[#5a8ba8]/20" />

          <section>
            <h2 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5a8ba8] font-medium mb-3">
              Bankverbindung
            </h2>
            <p>
              Deutsche Bank Berlin<br />
              IBAN: DE50100700240014598700<br />
              BIC: DEUTDEDBBER
            </p>
          </section>

          <div className="w-8 border-t border-[#5a8ba8]/20" />

          <section>
            <h2 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5a8ba8] font-medium mb-3">
              Haftungsausschluss
            </h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr
              übernommen werden. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

        </div>
      </article>
    </div>
  )
}
