import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <main className="legalPage">
      <div className="legalPageWrap">
        <Link href="/" className="backLink">
          ← Mike Ebbing LL.M.
        </Link>

        <article className="legalCard">
          <h1>Datenschutzerklärung</h1>

          <div className="legalContent">
            <section>
              <h2>Verantwortlicher</h2>
              <p>
                Mike Ebbing LL.M.
                <br />
                Rechtsanwalt
                <br />
                Buschgrabenweg 13
                <br />
                14165 Berlin
                <br />
                E-Mail:{" "}
                <a href="mailto:ebbing@ebbing-law.de">
                  ebbing@ebbing-law.de
                </a>
              </p>
            </section>

            <section>
              <h2>Server-Logfiles</h2>
              <p>
                Beim Aufruf dieser Website werden durch den Webserver automatisch
                Informationen verarbeitet, die Ihr Browser übermittelt. Dazu
                können insbesondere Browsertyp und Browserversion, verwendetes
                Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners,
                Uhrzeit der Serveranfrage und IP-Adresse gehören.
              </p>

              <p>
                Die Verarbeitung erfolgt zur technischen Bereitstellung,
                Stabilität und Sicherheit dieser Website. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im
                sicheren und funktionsfähigen Betrieb dieser Website.
              </p>

              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen. Die Server-Logfiles werden nur so lange
                gespeichert, wie dies für die genannten Zwecke erforderlich ist.
              </p>
            </section>

            <section>
              <h2>Cookies und Tracking</h2>
              <p>
                Diese Website verwendet keine Cookies, keine Analyse-Tools und
                kein Tracking.
              </p>
            </section>

            <section>
              <h2>Kontaktaufnahme per E-Mail oder Telefon</h2>
              <p>
                Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden die
                von Ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfrage
                verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO,
                sofern die Anfrage auf den Abschluss oder die Durchführung eines
                Mandatsverhältnisses gerichtet ist, im Übrigen Art. 6 Abs. 1
                lit. f DSGVO.
              </p>
            </section>

            <section>
              <h2>Ihre Rechte</h2>
              <p>
                Sie haben nach Maßgabe der gesetzlichen Voraussetzungen das Recht
                auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die
                Verarbeitung Ihrer personenbezogenen Daten.
              </p>

              <ul>
                <li>Auskunft gemäß Art. 15 DSGVO</li>
                <li>Berichtigung gemäß Art. 16 DSGVO</li>
                <li>Löschung gemäß Art. 17 DSGVO</li>
                <li>Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
                <li>Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
                <li>Widerspruch gemäß Art. 21 DSGVO</li>
              </ul>
            </section>

            <section>
              <h2>Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
                über die Verarbeitung Ihrer personenbezogenen Daten zu
                beschweren.
              </p>

              <p>
                Berliner Beauftragte für Datenschutz und Informationsfreiheit
                <br />
                Alt-Moabit 59–61
                <br />
                10555 Berlin
                <br />
                Telefon: +49 30 13889-0
                <br />
                E-Mail: mailbox@datenschutz-berlin.de
              </p>
            </section>

            <section>
              <h2>Stand</h2>
              <p>Diese Datenschutzerklärung hat den Stand Juni 2026.</p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}