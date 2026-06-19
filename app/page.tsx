import ContactRow from './_components/ContactRow'
import PortraitPlaceholder from './_components/PortraitPlaceholder'

export default function HomePage() {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        padding: '1.75rem',
      }}
    >
      {/* Card */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          backgroundColor: '#ffffff',
          boxShadow:
            '0 1px 3px rgba(28,53,73,0.05), 0 8px 32px rgba(28,53,73,0.10), 0 40px 80px rgba(28,53,73,0.08)',
          overflow: 'hidden',
        }}
      >
        {/* Left: contact information */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(2.5rem, 5vw, 5rem)',
          }}
        >
          {/* Name block */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                fontWeight: 500,
                color: '#1c3549',
                letterSpacing: '0.04em',
                fontVariantCaps: 'small-caps',
                lineHeight: 1.05,
                marginBottom: '0.65rem',
              }}
            >
              Mike Ebbing ll.m.
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: '0.62rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#5b87a3',
                fontWeight: 400,
              }}
            >
              Rechtsanwalt
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              backgroundColor: 'rgba(28,53,73,0.14)',
              marginBottom: '2.25rem',
            }}
          />

          {/* Contact list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <ContactRow icon="location">
              Buschgrabenweg 13 · 14165 Berlin
            </ContactRow>
            <ContactRow icon="phone" label="Telefon">
              +49&nbsp;(0)30&nbsp;3810&nbsp;9824
            </ContactRow>
            <ContactRow icon="mobile" label="Mobil">
              +49&nbsp;(0)177&nbsp;5&nbsp;90&nbsp;80&nbsp;70
            </ContactRow>
            <ContactRow icon="fax" label="Fax">
              +49&nbsp;(0)30&nbsp;3730&nbsp;0645
            </ContactRow>
            <ContactRow icon="email" label="E-Mail">
              <a
                href="mailto:ebbing@ebbing-law.de"
                className="hover:underline underline-offset-2"
              >
                ebbing@ebbing-law.de
              </a>
            </ContactRow>
          </div>
        </div>

        {/* Right: portrait */}
        <div
          className="hidden md:flex"
          style={{ width: '43%', flexShrink: 0 }}
        >
          <PortraitPlaceholder />
        </div>
      </div>
    </div>
  )
}
