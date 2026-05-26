'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline'

export const ImplantHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-white to-mint-fresh/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Dental Implants Mumbai
            </p>
            <h1 className="font-serif text-h1 text-teal mb-6">
              Permanent Teeth <br />
              <span className="text-gold">in Just 3 Days</span>
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed mb-8">
              Replace missing teeth with the most advanced German implant systems. 
              Painless procedure, natural‑looking results, and a smile that lasts a lifetime.
            </p>

            {/* Trust micro-indicators */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheckIcon className="w-5 h-5 text-teal" />
                <span className="text-charcoal">98% Success Rate</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <StarIcon className="w-5 h-5 text-gold" />
                <span className="text-charcoal">5000+ Implants Placed</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary-gold" href="/book-appointment">
                Book Free Consultation
              </Button>
              <Button variant="outline-teal" href="https://wa.me/919XXXXXXXXX" external>
                Ask on WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-card-hover">
              <Image
                src="/images/implant-hero.webp"
                alt="Dental implant model showing permanent teeth solution"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card p-4">
              <p className="text-sm font-semibold text-teal">German Implant System</p>
              <p className="text-xs text-warm-grey">Lifetime Warranty</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}