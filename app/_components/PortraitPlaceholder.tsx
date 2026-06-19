export default function PortraitPlaceholder() {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5b87a3',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial gradient for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.08) 0%, transparent 70%)',
        }}
      />
      {/* Person silhouette */}
      <svg
        viewBox="0 0 180 240"
        fill="none"
        stroke="rgba(255,255,255,0.28)"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: '52%', maxWidth: '170px', position: 'relative' }}
        aria-hidden="true"
      >
        <ellipse cx="90" cy="80" rx="44" ry="52" strokeWidth="1.5" />
        <line x1="74" y1="129" x2="67" y2="152" strokeWidth="1.5" />
        <line x1="106" y1="129" x2="113" y2="152" strokeWidth="1.5" />
        <path d="M8 240 C8 182 67 158 90 158 C113 158 172 182 172 240" strokeWidth="1.5" />
      </svg>
    </div>
  )
}
