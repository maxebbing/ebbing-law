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
              <h2>Hosting und Server-Logfiles</h2>
              <p>
                Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf dieser
                Website werden durch den Webserver automatisch technische
                Informationen verarbeitet, die Ihr Browser übermittelt. Dazu
                können insbesondere IP-Adresse, Datum und Uhrzeit der Anfrage,
                aufgerufene Seite, Referrer-URL, Browsertyp, Browserversion und
                verwendetes Betriebssystem gehören.
              </p>

              <p>
                Die Verarbeitung erfolgt zur technischen Bereitstellung,
                Stabilität und Sicherheit dieser Website. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section>
              <h2>Vercel Analytics und Speed Insights</h2>
              <p>
                Diese Website verwendet Vercel Analytics und Vercel Speed
                Insights. Die Dienste dienen der statistischen Auswertung der
                Website-Nutzung sowie der Messung und Verbesserung der
                technischen Leistung der Website.
              </p>

              <p>
                Vercel Web Analytics verwendet nach Angaben von Vercel keine
                Cookies und speichert nur anonymisierte Daten. Vercel Speed
                Insights erhebt nach Angaben von Vercel keine Daten, mit denen
                einzelne Besucher identifiziert oder seitenübergreifende
                Besuchssitzungen rekonstruiert werden können.  [oai_citation:0‡Vercel](https://vercel.com/docs/analytics)
              </p>

              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte
                Interesse liegt in der Analyse, Optimierung und sicheren
                Bereitstellung dieser Website.
              </p>
            </section>

            <section>
              <h2>Cookies</h2>
              <p>
                Diese Website verwendet keine eigenen Cookies zu Marketing- oder
                Trackingzwecken.
              </p>
            </section>

            <section>
              <h2>Kontaktaufnahme</h2>
              <p>
                Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden die
                von Ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfrage
                verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO,
                sofern die Anfrage auf ein Mandatsverhältnis gerichtet ist, im
                Übrigen Art. 6 Abs. 1 lit. f DSGVO.
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