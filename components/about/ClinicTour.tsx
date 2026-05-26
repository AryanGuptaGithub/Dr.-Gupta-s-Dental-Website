'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const images = [
  { src: 'https://skydecengineers.com/wp-content/uploads/2023/08/Dental-Clinic-Reception-Design-Ideas-800x800.jpg', alt: 'Premium clinic reception area' },
  { src: 'https://static.wixstatic.com/media/c3d08c_236a880e283e419fb58bbaa0e1431043~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/c3d08c_236a880e283e419fb58bbaa0e1431043~mv2.jpg', alt: 'Modern dental treatment room' },
  { src: 'https://www.fsroson.com/wp-content/uploads/2025/12/oil-free-sound-shields-noise-guide-1.jpg', alt: 'ISO certified sterilization area' },
  { src: 'https://www.welcomeware.live/wp-content/uploads/2022/10/patients-in-the-waiting-room-area.jpg', alt: 'Comfortable patient waiting lounge' },
  { src: 'https://cdn.dentzzdental.com/dentzz/uploads/media/source/cqDgKq-3DCTScan.jpg', alt: 'Advanced 3D CBCT scanning equipment' },
  { src: 'https://i.pinimg.com/736x/59/58/be/5958bee1c7a9a1456f7f4c3ec2e22aef.jpg', alt: 'Private consultation room' },
]

export const ClinicTour = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Our Clinic</p>
        <h2 className="font-serif text-h2 text-teal">Designed for Your Comfort</h2>
        <p className="text-warm-grey mt-4 max-w-xl mx-auto">
          Step inside our state‑of‑the‑art facility where modern technology meets spa‑like tranquility.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => openLightbox(i)}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card cursor-pointer group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-teal/0 group-hover:bg-teal/20 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-white/90 text-teal text-xs font-medium px-3 py-1 rounded-full">
                {img.alt}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 text-white/70 hover:text-white z-10"
            >
              <ChevronLeftIcon className="w-10 h-10" />
            </button>

            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 text-white/70 hover:text-white z-10"
            >
              <ChevronRightIcon className="w-10 h-10" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-6 text-white/60 text-sm">
              {currentImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}