import IconCard from './components/IconCard'
import SliderPreview from './components/SliderPreview'
import FourIcons from './components/FourIcons'

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
      <section>
        <h2>원본 4icons.svg</h2>
        <FourIcons />
      </section>
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
