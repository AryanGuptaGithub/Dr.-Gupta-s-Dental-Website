'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'

type Category = 'all' | 'implants' | 'veneers' | 'whitening' | 'braces'

interface GalleryItem {
  id: number
  before: string
  after: string
  title: string
  category: Category
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    before: '/images/gallery-implant-before-1.webp',
    after: '/images/gallery-implant-after-1.webp',
    title: 'Single Tooth Implant',
    category: 'implants',
    description: 'Replaced missing front tooth with a dental implant and crown. Natural-looking result that blends perfectly.',
  },
  {
    id: 2,
    before: '/images/gallery-veneers-before-1.webp',
    after: '/images/gallery-veneers-after-1.webp',
    title: 'Porcelain Veneers (4 teeth)',
    category: 'veneers',
    description: 'Transformed chipped and discolored front teeth with custom porcelain veneers for a symmetrical, bright smile.',
  },
  {
    id: 3,
    before: '/images/gallery-whitening-before-1.webp',
    after: '/images/gallery-whitening-after-1.webp',
    title: 'Laser Whitening',
    category: 'whitening',
    description: 'Single session laser whitening. Teeth went from stained to 7 shades brighter in 60 minutes.',
  },
  {
    id: 4,
    before: '/images/gallery-braces-before-1.webp',
    after: '/images/gallery-braces-after-1.webp',
    title: 'Clear Aligners (12 months)',
    category: 'braces',
    description: 'Corrected crowding and gaps with invisible aligners. No metal, no one noticed during treatment.',
  },
  {
    id: 5,
    before: '/images/gallery-implant-before-2.webp',
    after: '/images/gallery-implant-after-2.webp',
    title: 'Full Mouth Implants',
    category: 'implants',
    description: 'Life-changing full mouth restoration with implant-supported bridge. Patient went from dentures to fixed teeth.',
  },
  {
    id: 6,
    before: '/images/gallery-veneers-before-2.webp',
    after: '/images/gallery-veneers-after-2.webp',
    title: 'Smile Makeover (8 Veneers)',
    category: 'veneers',
    description: 'Complete smile transformation with Digital Smile Design and porcelain veneers for a celebrity-style smile.',
  },
  {
    id: 7,
    before: '/images/gallery-whitening-before-2.webp',
    after: '/images/gallery-whitening-after-2.webp',
    title: 'Combo Whitening Package',
    category: 'whitening',
    description: 'In-clinic laser session followed by take-home maintenance. Long-lasting, brilliant white result.',
  },
  {
    id: 8,
    before: '/images/gallery-braces-before-2.webp',
    after: '/images/gallery-braces-after-2.webp',
    title: 'Ceramic Braces (18 months)',
    category: 'braces',
    description: 'Adult orthodontic treatment with barely-visible ceramic brackets. Straight smile without metal mouth.',
  },
]

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Smiles' },
  { value: 'implants', label: 'Implants' },
  { value: 'veneers', label: 'Veneers' },
  { value: 'whitening', label: 'Whitening' },
  { value: 'braces', label: 'Braces' },
]

export const GalleryGrid = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter)

  const openLightbox = (index: number) => {
    const globalIndex = galleryItems.findIndex(item => item.id === filteredItems[index].id)
    setCurrentImage(globalIndex)
    setSliderPosition(50)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryItems.length)
    setSliderPosition(50)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
    setSliderPosition(50)
  }

  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left
    setSliderPosition(Math.max(0, Math.min(100, (x / containerRect.width) * 100)))
  }

  const current = galleryItems[currentImage]

  return (
    <>
      {/* Filter Bar */}
      <section className="py-8 sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-mint-fresh/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat.value
                    ? 'bg-teal text-white shadow-md'
                    : 'bg-ivory text-warm-grey hover:bg-mint-fresh/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-section max-w-7xl mx-auto px-6">
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
                  {/* Show after image by default, before on hover */}
                  <Image
                    src={item.after}
                    alt={`${item.title} - After`}
                    fill
                    className="object-cover group-hover:opacity-0 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <Image
                    src={item.before}
                    alt={`${item.title} - Before`}
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-medium text-sm">{item.title}</h3>
                    <p className="text-white/70 text-xs mt-1">{item.description.substring(0, 60)}...</p>
                  </div>
                  {/* Compare icon */}
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowsRightLeftIcon className="w-4 h-4 text-teal" />
                  </div>
                  {/* Before/After labels */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-teal text-xs font-medium px-2 py-1 rounded-full opacity-100 group-hover:opacity-0 transition-opacity">
                      After
                    </span>
                    <span className="bg-white/90 text-teal text-xs font-medium px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity absolute top-0 left-0">
                      Before
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-warm-grey text-lg">No results for this category yet.</p>
            <p className="text-warm-grey text-sm mt-2">More transformations coming soon!</p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            {/* Previous */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white z-10"
            >
              <ChevronLeftIcon className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Slider */}
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={(e) => {
                if (isDragging) {
                  const rect = e.currentTarget.getBoundingClientRect()
                  handleSliderMove(e.clientX, rect)
                }
              }}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                handleSliderMove(e.touches[0].clientX, rect)
              }}
            >
              <Image
                src={current.after}
                alt="After"
                fill
                className="object-contain"
                sizes="90vw"
              />
              <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
                <Image
                  src={current.before}
                  alt="Before"
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Before
                </div>
              </div>
              <div className="absolute top-0 bottom-0 w-0.5 bg-gold shadow-lg" style={{ left: `${sliderPosition}%` }}>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <ArrowsRightLeftIcon className="w-5 h-5 text-teal" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium">
                After
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white z-10"
            >
              <ChevronRightIcon className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Info bar */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-medium">{current.title}</p>
              <p className="text-white/50 text-sm mt-1 max-w-md">{current.description}</p>
              <p className="text-white/30 text-xs mt-2">{currentImage + 1} / {galleryItems.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}