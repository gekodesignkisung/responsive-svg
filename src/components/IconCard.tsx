type BadgeVariant = 'sm' | 'md' | 'lg'

interface Props {
  size: number
  badge: BadgeVariant
  label: string
}

export default function IconCard({ size, badge, label }: Props) {
  return (
    <div className="card">
      <div className="icon-wrap">
        <object
          type="image/svg+xml"
          data="/icon-logo-rs.svg"
          width={size}
          height={size}
          aria-label={`아이콘 ${size}px`}
          style={{ display: 'block', flexShrink: 0 }}
        />
      </div>
      <div className="card-label">
        <div className="size-text">{size} × {size}</div>
        <span className={`variant-badge badge-${badge}`}>{label}</span>
      </div>
    </div>
  )
}
