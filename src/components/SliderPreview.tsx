import { useState } from 'react'

type BadgeVariant = 'step1' | 'step2' | 'step3' | 'step4'

interface BadgeInfo {
  variant: BadgeVariant
  label: string
}

function getBadge(size: number): BadgeInfo {
  if (size <= 16) return { variant: 'step1', label: '단계 1 (≤ 16px)' }
  if (size <= 32) return { variant: 'step2', label: '단계 2 (17–32px)' }
  if (size <= 64) return { variant: 'step3', label: '단계 3 (33–64px)' }
  return { variant: 'step4', label: '단계 4 (≥ 65px)' }
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
            min={12}
            max={256}
            step={1}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
          <span className="size-display">{size} px</span>
        </div>

        <div className="live-preview">
          <div className="icon-bg">
            <object
              key={size}
              type="image/svg+xml"
              data={`/icon-logo-4-rs.svg?${size}`}
              width={size}
              height={size}
              aria-label="아이콘 (크기 조절)"
              style={{ display: 'block', transition: 'width .12s, height .12s' }}
            >
              <img
                key={size}
                src={`/icon-logo-4-rs.svg?${size}`}
                width={size}
                height={size}
                alt="아이콘 (크기 조절)"
                style={{ display: 'block', transition: 'width .12s, height .12s' }}
              />
            </object>
          </div>
          <span className={`variant-badge badge-${badge.variant}`}>
            {badge.label}
          </span>
        </div>
      </div>
    </section>
  )
}
