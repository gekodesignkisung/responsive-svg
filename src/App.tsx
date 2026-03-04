import IconCard from './components/IconCard'
import SliderPreview from './components/SliderPreview'

const CARDS = [
  { size: 16,  badge: 'sm' as const, label: 'Small 버전' },
  { size: 32,  badge: 'sm' as const, label: 'Small 버전' },
  { size: 48,  badge: 'md' as const, label: 'Medium 버전' },
  { size: 64,  badge: 'md' as const, label: 'Medium 버전' },
  { size: 96,  badge: 'lg' as const, label: 'Large 버전' },
  { size: 160, badge: 'lg' as const, label: 'Large 버전' },
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
