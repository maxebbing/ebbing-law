import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Mike Ebbing LL.M.',
  robots: { index: false },
}

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>

        <Section title="Verantwortlicher">
          <p>
            Rechtsanwalt Mike Ebbing LL.M.
            <br />
            Buschgrabenweg 13
            <br />
            14165 Berlin
            <br />
            E-Mail:{' '}
            <a
              href="mailto:ebbing@ebbing-law.de"
              className="hover:underline underline-offset-2"
              style={{ color: '#5b87a3' }}
            >
              ebbing@ebbing-law.de
            </a>
          </p>
        </Section>

        <Section title="Allgemeines zur Datenverarbeitung">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
            Diese Datenschutzerklärung informiert Sie darüber, welche
            personenbezogenen Daten wir erheben, zu welchem Zweck und auf
            welcher Rechtsgrundlage wir diese verarbeiten.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Rechtsgrundlage für die Datenverarbeitung ist, soweit nicht anders
            angegeben, Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes
            Interesse am Betrieb einer Informationswebsite).
          </p>
        </Section>

        <Section title="Hosting und Bereitstellung der Website">
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet. Die
            personenbezogenen Daten, die auf dieser Website erfasst werden,
            werden auf den Servern des Hosters gespeichert. Bei jedem Abruf
            der Website werden automatisch Informationen in Server-Logdateien
            gespeichert:
          </p>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', listStyle: 'none' }}>
            <li style={{ marginBottom: '0.25rem' }}>– IP-Adresse des anfragenden Rechners</li>
            <li style={{ marginBottom: '0.25rem' }}>– Datum und Uhrzeit des Zugriffs</li>
            <li style={{ marginBottom: '0.25rem' }}>– Name und URL der abgerufenen Datei</li>
            <li style={{ marginBottom: '0.25rem' }}>– Website, von der aus der Zugriff erfolgt (Referrer)</li>
            <li style={{ marginBottom: '0.25rem' }}>– verwendeter Browser und ggf. Betriebssystem</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            Die Daten werden zur Sicherstellung eines störungsfreien Betriebs
            der Website ausgewertet und gelöscht, sobald der Zweck der Erhebung
            entfällt.
          </p>
        </Section>

        <Section title="Kontaktaufnahme per E-Mail">
          <p>
            Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen
            mitgeteilten Daten zum Zweck der Bearbeitung Ihrer Anfrage
            verarbeitet. Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1
            lit.&nbsp;b DSGVO (Vertragsanbahnung oder -erfüllung) bzw.
            lit.&nbsp;f DSGVO (berechtigtes Interesse). Die Daten werden
            gelöscht, sobald der Zweck entfällt und keine gesetzlichen
            Aufbewahrungsfristen entgegenstehen.
          </p>
        </Section>

        <Section title="Keine Cookies und kein Tracking">
          <p>
            Diese Website verwendet keine Cookies, keine Tracking-Technologien
            und keine Analyse-Dienste. Es werden keine Daten an Dritte zu
            Werbezwecken weitergegeben.
          </p>
        </Section>

        <Section title="Ihre Rechte als betroffene Person">
          <p>Sie haben gegenüber uns folgende Rechte:</p>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', listStyle: 'none' }}>
            <li style={{ marginBottom: '0.25rem' }}>– Recht auf Auskunft (Art.&nbsp;15 DSGVO)</li>
            <li style={{ marginBottom: '0.25rem' }}>– Recht auf Berichtigung (Art.&nbsp;16 DSGVO)</li>
            <li style={{ marginBottom: '0.25rem' }}>– Recht auf Löschung (Art.&nbsp;17 DSGVO)</li>
            <li style={{ marginBottom: '0.25rem' }}>– Recht auf Einschränkung der Verarbeitung (Art.&nbsp;18 DSGVO)</li>
            <li style={{ marginBottom: '0.25rem' }}>– Recht auf Datenübertragbarkeit (Art.&nbsp;20 DSGVO)</li>
            <li style={{ marginBottom: '0.25rem' }}>– Recht auf Widerspruch (Art.&nbsp;21 DSGVO)</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
            <a
              href="mailto:ebbing@ebbing-law.de"
              className="hover:underline underline-offset-2"
              style={{ color: '#5b87a3' }}
            >
              ebbing@ebbing-law.de
            </a>
          </p>
        </Section>

        <Section title="Beschwerderecht bei der Aufsichtsbehörde">
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
            zu beschweren. Die zuständige Aufsichtsbehörde für Berlin ist:
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Berliner Beauftragte für Datenschutz und Informationsfreiheit
            <br />
            Friedrichstr. 219
            <br />
            10969 Berlin
            <br />
            <a
              href="https://www.datenschutz-berlin.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-2"
              style={{ color: '#5b87a3' }}
            >
              www.datenschutz-berlin.de
            </a>
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
      <div style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#2c4558' }}>
        {children}
      </div>
    </section>
  )
}
