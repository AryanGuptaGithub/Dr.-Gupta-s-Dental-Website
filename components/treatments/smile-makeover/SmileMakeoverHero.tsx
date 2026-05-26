'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { SparklesIcon, StarIcon } from '@heroicons/react/24/outline'

export const SmileMakeoverHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-white to-mint-fresh/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Cosmetic Dentistry Mumbai
            </p>
            <h1 className="font-serif text-h1 text-teal mb-6">
              Design Your<br />
              <span className="text-gold">Dream Smile</span>
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed mb-6">
              Using advanced Digital Smile Design technology, you can see your new smile 
              before we even touch a tooth. Veneers, whitening, and alignment — harmonised 
              perfectly to your face.
            </p>

            <div className="flex items-center gap-2 text-sm mb-8">
              <SparklesIcon className="w-5 h-5 text-gold" />
              <span className="text-charcoal font-medium">Preview your smile before treatment begins</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary-gold" href="/book-appointment">
                Start Your Smile Design
              </Button>
              <Button variant="outline-teal" href="https://wa.me/919XXXXXXXXX" external>
                Send Your Photo for Preview
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-card-hover">
              <Image
                src="/images/smile-makeover-hero.webp"
                alt="Beautiful smile makeover result by Dr. Gupta Mumbai"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
              <StarIcon className="w-5 h-5 text-gold" />
              <div>
                <p className="text-sm font-semibold text-teal">5000+ Smiles</p>
                <p className="text-xs text-warm-grey">Designed & Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}