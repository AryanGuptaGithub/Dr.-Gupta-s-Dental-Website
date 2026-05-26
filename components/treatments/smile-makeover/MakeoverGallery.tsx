'use client'
import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const cases = [
  { before: '/images/makeover-before-1.webp', after: '/images/makeover-after-1.webp', title: 'Veneers + Whitening' },
  { before: '/images/makeover-before-2.webp', after: '/images/makeover-after-2.webp', title: 'Full Smile Makeover' },
  { before: '/images/makeover-before-3.webp', after: '/images/makeover-after-3.webp', title: 'Bonding + Contouring' },
]

export const MakeoverGallery = () => {
  const [activeCase, setActiveCase] = useState(0)
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    setPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)))
  }, [])

  const current = cases[activeCase]

  return (
    <section className="py-section bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Transformations</p>
          <h2 className="font-serif text-h2 text-teal">Smile Makeover Results</h2>
          <p className="text-warm-grey mt-4">Drag the slider to see the transformation</p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveCase(i)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                i === activeCase ? 'bg-teal text-white shadow' : 'bg-ivory text-warm-grey hover:bg-mint-fresh/50'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-card cursor-ew-resize select-none"
          onMouseDown={() => { isDragging.current = true }}
          onMouseUp={() => { isDragging.current = false }}
          onMouseLeave={() => { isDragging.current = false }}
          onMouseMove={(e) => { if (isDragging.current) updatePosition(e.clientX) }}
          onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
          onTouchEnd={() => { isDragging.current = false }}
          onTouchStart={() => { isDragging.current = true }}
        >
          <Image src={current.after} alt="After smile makeover" fill className="object-cover" />
          <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${position}%` }}>
            <Image src={current.before} alt="Before smile makeover" fill className="object-cover" />
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium">Before</div>
          </div>
          <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg" style={{ left: `${position}%` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-1 h-5 bg-gold rounded-full" />
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium">After</div>
        </div>

        <div className="text-center mt-10">
          <Button variant="text-link" href="/smile-gallery">View Full Smile Gallery →</Button>
        </div>
      </div>
    </section>
  )
}