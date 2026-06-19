import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ backgroundColor: '#5b87a3' }}>
      <div style={{ padding: '1.25rem 2rem', textAlign: 'center' }}>
        <Link href="/">
          <p
            style={{
              color: '#ffffff',
              fontSize: '1.05rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              fontVariantCaps: 'small-caps',
              lineHeight: 1,
              margin: 0,
            }}
          >
            Mike Ebbing ll.m.
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.78)',
              fontSize: '0.6rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              marginTop: '0.5rem',
              marginBottom: 0,
            }}
          >
            Rechtsanwalt
          </p>
        </Link>
      </div>
    </header>
  )
}
