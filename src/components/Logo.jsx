export default function Logo({ light = false, className = '' }) {
  const ink = light ? '#F7F8F7' : '#17231F'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" fill={light ? '#F7F8F7' : '#17231F'} />
        <path d="M32 12c4 8 12 13 12 23a12 12 0 0 1-24 0c0-6 3-9 6-12 0 5 2 8 5 9-2-7 0-14 1-20z" fill="#E0892B" />
      </svg>
      <span className="font-display text-[22px] leading-none tracking-tight" style={{ color: ink }}>
        North Ember
      </span>
    </span>
  )
}
