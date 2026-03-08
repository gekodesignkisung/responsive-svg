import IconCard from './components/IconCard'
import SliderPreview from './components/SliderPreview'

const CARDS = [
  { size: 16,  badge: 'step1' as const, label: '단계 1' },
  { size: 32,  badge: 'step2' as const, label: '단계 2' },
  { size: 64,  badge: 'step3' as const, label: '단계 3' },
  { size: 128, badge: 'step4' as const, label: '단계 4' },
]

export default function App() {
  return (
    <>
      <h1>반응형 SVG 아이콘</h1>
      <p className="subtitle">
        하나의 SVG 파일을 렌더링 크기에 따라 다른 디테일의 아이콘으로 출력.
      </p>

      {/* 테스트: 직접 img로 확인 */}
      <section style={{ padding: '20px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
        <h2>🧪 테스트 - 직접 로드</h2>
        <img src="/icon-logo-4-rs.svg" width="128" height="128" alt="direct test" />
      </section>

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
