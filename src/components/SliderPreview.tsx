import { useState } from 'react'

type BadgeVariant = 'sm' | 'md' | 'lg'

interface BadgeInfo {
  variant: BadgeVariant
  label: string
}

function getBadge(size: number): BadgeInfo {
  if (size <= 32) return { variant: 'sm', label: 'Small 버전 (≤ 32px)' }
  if (size <= 64) return { variant: 'md', label: 'Medium 버전 (33–64px)' }
  return { variant: 'lg', label: 'Large 버전 (≥ 65px)' }
}

export default function SliderPreview() {
  const [size, setSize] = useState(48)
  const badge = getBadge(size)

  return (
    <section>
      <h2>인터랙티브 — 슬라이더로 크기 조절</h2>
      <div className="slider-section">
        <div className="slider-row">
          <label htmlFor="size-slider">아이콘 크기</label>
          <input
            id="size-slider"
            type="range"
            min={16}
            max={200}
            step={1}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
          <span className="size-display">{size} px</span>
        </div>

        <div className="live-preview">
          <div className="icon-bg">
            <object
              type="image/svg+xml"
              data="/icon-logo-rs.svg"
              width={size}
              height={size}
              aria-label="아이콘 (크기 조절)"
              style={{ display: 'block', transition: 'width .12s, height .12s' }}
            />
          </div>
          <span className={`variant-badge badge-${badge.variant}`}>
            {badge.label}
          </span>
        </div>
      </div>
    </section>
  )
}
