type BadgeVariant = 'step1' | 'step2' | 'step3' | 'step4'

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
          key={size}
          type="image/svg+xml"
          data={`/icon-logo-4-rs.svg?${size}`}
          width={size}
          height={size}
          aria-label={`아이콘 ${size}px`}
          style={{ display: 'block', flexShrink: 0 }}
        >
          {/* object가 실패하면 이미지 구성 */}
          <img
            key={size}
            src={`/icon-logo-4-rs.svg?${size}`}
            width={size}
            height={size}
            alt={`아이콘 ${size}px`}
            style={{ display: 'block' }}
          />
        </object>
      </div>
      <div className="card-label">
        <div className="size-text">{size} × {size}</div>
        <span className={`variant-badge badge-${badge}`}>{label}</span>
      </div>
    </div>
  )
}
