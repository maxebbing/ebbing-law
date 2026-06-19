import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <section className="card">
        <div className="content">
          <div className="left">
            <h1>Mike Ebbing LL.M.</h1>
            <h2>Rechtsanwalt</h2>

            <div className="line" />

            <div className="contact">
              <div className="row">
                <span className="icon">•</span>
                <span>Buschgrabenweg 13 · 14165 Berlin</span>
              </div>

              <div className="row">
                <span className="icon">•</span>
                <strong>Telefon:</strong>
                <span>+49 (0)30 3810 9824</span>
              </div>

              <div className="row">
                <span className="icon">•</span>
                <strong>Mobil:</strong>
                <span>+49 (0)177 5 90 80 70</span>
              </div>

              <div className="row">
                <span className="icon">•</span>
                <strong>Fax:</strong>
                <span>+49 (0)30 3730 0645</span>
              </div>

              <div className="row">
                <span className="icon">•</span>
                <strong>E-Mail:</strong>
                <span>ebbing@ebbing-law.de</span>
              </div>
            </div>
          </div>

          <div className="divider" />

          <div className="right">
            <div className="monogram">ME</div>
          </div>
        </div>

        <footer className="footer">
          <div className="footerInner">
            <p className="footerAddress">
              Buschgrabenweg 13 · 14165 Berlin
            </p>

            <p className="footerContact">
              Telefon: +49 (0)30 3810 9824 · Mobil: +49 (0)177 5 90 80 70 ·
              Fax: +49 (0)30 3730 0645 · ebbing@ebbing-law.de
            </p>

            <p className="footerBank">
              Deutsche Bank Berlin&nbsp;&nbsp; IBAN: DE50100700240014598700&nbsp;&nbsp;
              BIC: DEUTDEDBBER&nbsp;&nbsp; · &nbsp;&nbsp;USt-IdNr. DE273379852
            </p>
          </div>
        </footer>
      </section>

      <nav className="legal">
        <Link href="/impressum">Impressum</Link>
        <span>·</span>
        <Link href="/datenschutz">Datenschutzerklärung</Link>
      </nav>
    </main>
  );
}