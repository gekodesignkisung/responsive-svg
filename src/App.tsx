import IconCard from './components/IconCard'
import SliderPreview from './components/SliderPreview'

const CARDS = [
  { size: 16,  badge: 'step1' as const, label: '단계 1 (≤ 16px)' },
  { size: 24,  badge: 'step2' as const, label: '단계 2 (17–32px)' },
  { size: 32,  badge: 'step2' as const, label: '단계 2 (17–32px)' },
  { size: 48,  badge: 'step3' as const, label: '단계 3 (33–64px)' },
  { size: 64,  badge: 'step3' as const, label: '단계 3 (33–64px)' },
  { size: 128, badge: 'step4' as const, label: '단계 4 (≥ 65px)' },
  { size: 192, badge: 'step4' as const, label: '단계 4 (≥ 65px)' },
]

export default function App() {
  return (
    <>
      <h1>반응형 SVG 아이콘</h1>

      <p className="subtitle">
        하나의 SVG 파일을 렌더링 크기에 따라 다른 디테일의 아이콘으로 출력.
      </p>

      <section>
        <div className="card-grid">
          {CARDS.map(({ size, badge, label }) => (
            <IconCard key={size} size={size} badge={badge} label={label} />
          ))}
        </div>
      </section>

      <SliderPreview />
    </>
  )
}
