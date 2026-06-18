import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>

        <div className="font-body text-gray-600 text-sm leading-7 space-y-8">

          <section>
            <h2 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5a8ba8] font-medium mb-3">
              Verantwortlicher
            </h2>
            <p>
              Mike Ebbing LL.M.<br />
              Rechtsanwalt<br />
              Buschgrabenweg 13<br />
              14165 Berlin<br />
              E-Mail:{' '}
              <a href="mailto:ebbing@ebbing-law.de" className="hover:text-[#5a8ba8] transition-colors duration-200">
                ebbing@ebbing-law.de
              </a>
            </p>
          </section>

          <div className="w-8 border-t border-[#5a8ba8]/20" />

          <section>
            <h2 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5a8ba8] font-medium mb-3">
              Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p>
              Beim Besuch dieser Website werden durch den Webhoster automatisch Informationen
              in sogenannten Server-Log-Dateien gespeichert, die Ihr Browser automatisch
              übermittelt. Dies sind:
            </p>
            <ul className="mt-3 space-y-1 list-none pl-0">
              {[
                'Browsertyp und Browserversion',
                'Verwendetes Betriebssystem',
                'Referrer URL',
                'Hostname des zugreifenden Rechners',
                'Uhrzeit der Serveranfrage',
                'IP-Adresse',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#5a8ba8]/50 select-none">–</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung
              dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Daten werden
              nach einer statistischen Auswertung gelöscht.
            </p>
          </section>

          <div className="w-8 border-t border-[#5a8ba8]/20" />

          <section>
            <h2 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5a8ba8] font-medium mb-3">
              Cookies
            </h2>
            <p>
              Diese Website verwendet keine Cookies.
            </p>
          </section>

          <div className="w-8 border-t border-[#5a8ba8]/20" />

          <section>
            <h2 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5a8ba8] font-medium mb-3">
              Ihre Rechte
            </h2>
            <p>
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
              personenbezogenen Daten:
            </p>
            <ul className="mt-3 space-y-1 list-none pl-0">
              {[
                'Recht auf Auskunft (Art. 15 DSGVO)',
                'Recht auf Berichtigung (Art. 16 DSGVO)',
                'Recht auf Löschung (Art. 17 DSGVO)',
                'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
                'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
                'Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
              ].map((right) => (
                <li key={right} className="flex gap-3">
                  <span className="text-[#5a8ba8]/50 select-none">–</span>
                  {right}
                </li>
              ))}
            </ul>
          </section>

          <div className="w-8 border-t border-[#5a8ba8]/20" />

          <section>
            <h2 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5a8ba8] font-medium mb-3">
              Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die
              zuständige Aufsichtsbehörde ist:
            </p>
            <p className="mt-4">
              Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
              Friedrichstraße 219<br />
              10969 Berlin<br />
              Telefon: +49 30 13889-0
            </p>
          </section>

          <div className="w-8 border-t border-[#5a8ba8]/20" />

          <section>
            <h2 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5a8ba8] font-medium mb-3">
              Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2026.
              Durch die Weiterentwicklung dieser Website kann es notwendig werden, diese
              Datenschutzerklärung anzupassen.
            </p>
          </section>

        </div>
      </article>
    </div>
  )
}
