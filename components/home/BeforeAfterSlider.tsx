'use client'
import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const cases = [
  {
    before: 'https://images.pexels.com/photos/6627467/pexels-photo-6627467.jpeg',
    after: 'https://images.pexels.com/photos/6627455/pexels-photo-6627455.jpeg',
    title: 'Dental Implants'
  },
  {
    before: 'https://images.pexels.com/photos/3845819/pexels-photo-3845819.jpeg',
    after: 'https://images.pexels.com/photos/3845820/pexels-photo-3845820.jpeg',
    title: 'Smile Makeover'
  },
  {
    before: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg',
    after: 'https://images.pexels.com/photos/3762454/pexels-photo-3762454.jpeg',
    title: 'Teeth Whitening'
  },
]

export const BeforeAfterSlider = () => {
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
    <div className="bg-white py-section">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="font-serif text-h2 text-teal text-center mb-12">
          Real Smiles, Real Confidence
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveCase(i)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                i === activeCase
                  ? 'bg-teal text-white shadow'
                  : 'bg-ivory text-warm-grey hover:bg-mint-fresh/50'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Slider */}
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
          {/* After image */}
          <Image
            src={current.after}
            alt="After treatment"
            fill
            className="object-cover"
          />

          {/* Before image (clipped) */}
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <Image
              src={current.before}
              alt="Before treatment"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
              Before
            </div>
          </div>

          {/* Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-1 h-5 bg-gold rounded-full" />
            </div>
          </div>

          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
            After
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="text-link" href="/smile-gallery">
            View Full Smile Gallery →
          </Button>
        </div>
      </div>
    </div>
  )
}