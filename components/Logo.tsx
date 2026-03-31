export default function Logo({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Crown — the delusion of royalty */}
      <path d="M4 30 L4 14 L13 22 L20 8 L27 22 L36 14 L36 30 Z"
        fill="var(--color-accent, #f0b429)" opacity="0.9"/>
      <rect x="4" y="30" width="32" height="4" rx="1" fill="var(--color-accent, #f0b429)" opacity="0.6"/>
    </svg>
  )
}
