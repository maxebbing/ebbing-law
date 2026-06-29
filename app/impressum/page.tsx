import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <main className="legalPage">
      <div className="legalPageWrap">
        <Link href="/" className="backLink">
          ← Mike Ebbing LL.M.
        </Link>

        <article className="legalCard">
          <h1>Impressum</h1>

          <div className="legalContent">
            <section>
              <h2>Anbieterkennzeichnung</h2>
              <p>
                Mike Ebbing LL.M.
                <br />
                Rechtsanwalt
                <br />
                Buschgrabenweg 13
                <br />
                14165 Berlin
              </p>
            </section>

            <section>
              <h2>Kontakt</h2>
              <p>
                Telefon: +49 (0)30 3810 9824
                <br />
                Mobil: +49 (0)177 5 90 80 70
                <br />
                Fax: +49 (0)30 3730 0645
                <br />
                E-Mail:{" "}
                <a href="mailto:ebbing@ebbing-law.de">
                  ebbing@ebbing-law.de
                </a>
              </p>
            </section>

            <section>
              <h2>Berufsbezeichnung und zuständige Kammer</h2>
              <p>
                Berufsbezeichnung: Rechtsanwalt
                <br />
                verliehen in der Bundesrepublik Deutschland
              </p>

              <p>
                Zuständige Rechtsanwaltskammer:
                <br />
                Rechtsanwaltskammer Berlin
                <br />
                Littenstraße 9
                <br />
                10179 Berlin
              </p>
            </section>

            <section>
              <h2>Berufsrechtliche Regelungen</h2>
              <ul>
                <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                <li>Fachanwaltsordnung (FAO)</li>
                <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                <li>
                  Berufsregeln der Rechtsanwälte der Europäischen Union
                  (CCBE-Berufsregeln)
                </li>
              </ul>
              <p>
                Die berufsrechtlichen Regelungen sind über die Website der
                Bundesrechtsanwaltskammer abrufbar.
              </p>
            </section>

            <section>
              <h2>Umsatzsteuer-Identifikationsnummer</h2>
              <p>DE273379852</p>
            </section>

            <section>
              <h2>Verantwortlich für den Inhalt</h2>
              <p>
                Verantwortlich nach § 18 Abs. 2 MStV:
                <br />
                Mike Ebbing LL.M.
                <br />
                Buschgrabenweg 13
                <br />
                14165 Berlin
              </p>
            </section>

            <section>
              <h2>Haftung für Inhalte</h2>
              <p>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
                erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                der Inhalte kann jedoch keine Gewähr übernommen werden.
              </p>
            </section>

            <section>
              <h2>Webdesign und technische Umsetzung</h2>
              <p>
                Website erstellt von{" "}
                <a
                  href="https://maxebbing.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Max Ebbing
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}