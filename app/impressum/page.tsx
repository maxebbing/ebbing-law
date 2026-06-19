import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – Mike Ebbing LL.M.',
  robots: { index: false },
}

export default function Impressum() {
  return (
    <div style={{ flex: 1, padding: '3.5rem 1.5rem' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '1.9rem',
            fontWeight: 500,
            color: '#1c3549',
            letterSpacing: '0.06em',
            fontVariantCaps: 'small-caps',
            marginBottom: '3rem',
            marginTop: 0,
          }}
        >
          Impressum
        </h1>

        <Section title="Angaben gemäß § 5 TMG">
          <p>
            Rechtsanwalt Mike Ebbing LL.M.
            <br />
            Buschgrabenweg 13
            <br />
            14165 Berlin
          </p>
        </Section>

        <Section title="Kontakt">
          <p>
            Telefon: +49&nbsp;(0)30&nbsp;3810&nbsp;9824
            <br />
            Mobil: +49&nbsp;(0)177&nbsp;5&nbsp;90&nbsp;80&nbsp;70
            <br />
            Fax: +49&nbsp;(0)30&nbsp;3730&nbsp;0645
            <br />
            E-Mail:{' '}
            <a href="mailto:ebbing@ebbing-law.de" className="hover:underline underline-offset-2" style={{ color: '#5b87a3' }}>
              ebbing@ebbing-law.de
            </a>
          </p>
        </Section>

        <Section title="Umsatzsteuer-Identifikationsnummer">
          <p>
            USt-IdNr. gemäß § 27&nbsp;a Umsatzsteuergesetz: DE273379852
          </p>
        </Section>

        <Section title="Berufsbezeichnung und berufsrechtliche Regelungen">
          <p>Berufsbezeichnung: Rechtsanwalt (Bundesrepublik Deutschland)</p>
          <p style={{ marginTop: '0.75rem' }}>
            Zuständige Kammer:
            <br />
            Rechtsanwaltskammer Berlin
            <br />
            Littenstraße 9
            <br />
            10179 Berlin
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Anwendbare berufsrechtliche Regelungen: Bundesrechtsanwaltsordnung
            (BRAO), Berufsordnung für Rechtsanwälte (BORA),
            Rechtsanwaltsvergütungsgesetz (RVG), Fachanwaltsordnung (FAO)
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Die berufsrechtlichen Regelungen sind abrufbar unter:{' '}
            <a
              href="https://www.brak.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-2"
              style={{ color: '#5b87a3' }}
            >
              www.brak.de
            </a>
          </p>
        </Section>

        <Section title="Haftungsausschluss">
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
            erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
            Inhalte kann jedoch keine Gewähr übernommen werden. Als
            Diensteanbieter sind wir gemäß § 7 Abs.&nbsp;1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich.
          </p>
        </Section>

        <Section title="Berufshaftpflichtversicherung">
          <p>
            Rechtsanwalt Mike Ebbing LL.M. ist im Rahmen seiner Berufsausübung
            haftpflichtversichert. Angaben zur Berufshaftpflichtversicherung
            werden auf Anfrage mitgeteilt.
          </p>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '2.25rem' }}>
      <h2
        style={{
          fontSize: '0.58rem',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#5b87a3',
          marginBottom: '0.6rem',
          marginTop: 0,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontSize: '0.92rem',
          lineHeight: 1.7,
          color: '#2c4558',
        }}
      >
        {children}
      </div>
    </section>
  )
}
