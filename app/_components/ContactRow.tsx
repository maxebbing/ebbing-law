import type { ReactNode, JSX } from 'react'

type Icon = 'location' | 'phone' | 'mobile' | 'fax' | 'email'

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
      <path d="M12 2C8.686 2 6 4.686 6 8c0 4.875 6 12 6 12s6-7.125 6-12c0-3.314-2.686-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  )
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <circle cx="12" cy="17" r="0.5" fill="currentColor" />
    </svg>
  )
}

function FaxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
      <polyline points="6 4 6 2 18 2 18 4" />
      <rect x="4" y="4" width="16" height="12" rx="1" />
      <rect x="8" y="11" width="8" height="5" />
      <circle cx="17" cy="7.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,6 12,13 22,6" />
    </svg>
  )
}

const icons: Record<Icon, () => JSX.Element> = {
  location: LocationIcon,
  phone: PhoneIcon,
  mobile: MobileIcon,
  fax: FaxIcon,
  email: EmailIcon,
}

export default function ContactRow({
  icon,
  label,
  children,
}: {
  icon: Icon
  label?: string
  children: ReactNode
}) {
  const Icon = icons[icon]
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
      <span style={{ color: '#5b87a3', display: 'flex', flexShrink: 0 }}>
        <Icon />
      </span>
      <div>
        {label && (
          <p style={{
            margin: 0,
            fontSize: '0.55rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#5b87a3',
            lineHeight: 1,
            marginBottom: '3px',
          }}>
            {label}
          </p>
        )}
        <p style={{
          margin: 0,
          fontSize: '0.9rem',
          color: '#1c3549',
          lineHeight: 1.35,
        }}>
          {children}
        </p>
      </div>
    </div>
  )
}
