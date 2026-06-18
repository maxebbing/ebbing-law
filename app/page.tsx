import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mike Ebbing LL.M. – Rechtsanwalt Berlin',
  description:
    'Rechtsanwalt Mike Ebbing LL.M. in Berlin-Zehlendorf. Buschgrabenweg 13, 14165 Berlin. Telefon: +49 (0)30 3810 9824.',
}

const contactRows = [
  { label: 'Telefon', value: '+49 (0)30 3810 9824', href: 'tel:+493038109824' },
  { label: 'Mobil',   value: '+49 (0)177 5 90 80 70', href: 'tel:+491775908070' },
  { label: 'Fax',     value: '+49 (0)30 3730 0645',   href: null },
  { label: 'E-Mail',  value: 'ebbing@ebbing-law.de',   href: 'mailto:ebbing@ebbing-law.de' },
]

export default function HomePage() {
  return (
    <div className="flex-1 flex items-center justify-center p-6 md:p-12 py-14 md:py-20">
      <article
        className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 8px 48px rgba(44, 72, 92, 0.13), 0 1px 4px rgba(44, 72, 92, 0.06)' }}
      >
        {/* ── Card header ── */}
        <header className="bg-[#5a8ba8] px-10 py-10 text-center">
          <h1
            className="font-display text-white font-normal leading-tight tracking-[0.18em]"
            style={{ fontSize: 'clamp(1.5rem, 3.8vw, 2.25rem)', fontVariant: 'small-caps' }}
          >
            Mike Ebbing LL.M.
          </h1>
          <p className="font-body text-white/70 text-[0.7rem] tracking-[0.38em] uppercase mt-3">
            Rechtsanwalt
          </p>
        </header>

        {/* ── Card body ── */}
        <div className="flex flex-col md:flex-row items-start gap-10 px-10 md:px-14 py-12 md:py-14">

          {/* Left column – contact */}
          <div className="flex-1 space-y-9">

            {/* Address */}
            <div>
              <p className="font-body text-[#5a8ba8] text-[0.62rem] tracking-[0.28em] uppercase font-medium mb-3">
                Kanzlei
              </p>
              <address className="not-italic font-body text-gray-600 text-sm leading-7">
                Buschgrabenweg 13<br />
                14165 Berlin
              </address>
            </div>

            {/* Hairline divider */}
            <div className="w-8 border-t border-[#5a8ba8]/25" />

            {/* Contact details */}
            <div className="space-y-3.5">
              {contactRows.map(({ label, value, href }) => (
                <div key={label} className="flex items-baseline gap-5">
                  <span className="font-body text-[#5a8ba8] text-[0.62rem] tracking-[0.22em] uppercase font-medium w-14 shrink-0">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="font-body text-gray-500 text-sm hover:text-[#5a8ba8] transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="font-body text-gray-500 text-sm">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column – portrait */}
          <div className="w-full md:w-44 lg:w-48 shrink-0 self-center md:self-start">
            <div className="aspect-[3/4] w-40 mx-auto md:w-full rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portrait-placeholder.svg"
                alt="Portrait von Rechtsanwalt Mike Ebbing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
