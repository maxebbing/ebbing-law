import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <section className="card">
        <div className="content">
          <div className="left">
            <h1>Mike Ebbing LL.M.</h1>
            <h2>Rechtsanwalt</h2>
          </div>

          <div className="divider" />

          <div className="right">
            <Image
              src="/mike.webp"
              alt="Mike Ebbing LL.M."
              width={900}
              height={1175}
              priority
              className="portrait"
            />
          </div>
        </div>

        <footer className="footer">
          <div className="footerInner">
            <p className="footerName">
              Rechtsanwalt Mike Ebbing LL.M. · Buschgrabenweg 13 · 14165 Berlin
            </p>

            <p className="footerContact">
              Telefon: +49 (0)30 3810 9824 · Mobil: +49 (0)177 5 90 80 70 · Fax:
              +49 (0)30 3730 0645 · ebbing@ebbing-law.de
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