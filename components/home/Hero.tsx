'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Ken Burns */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/clinic-hero.webp" // Replace with actual clinic interior
          alt="Dr. Gupta's premium dental clinic in Mumbai"
          fill
          className="object-cover animate-kenburns"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal/75 to-teal/25" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-gold uppercase tracking-[0.25em] text-sm mb-4 font-medium">
            Mumbai’s Most Trusted Dental Clinic
          </p>
          <h1 className="font-serif text-h1 text-white mb-6">
            Crafting Smiles <br />
            <span className="text-gold">That Last a Lifetime</span>
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-xl">
            Dr. Gupta combines 20+ years of expertise with German precision and a gentle touch.
            Rediscover the joy of a healthy, beautiful smile.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary-gold" href="/book-appointment">
              Book Consultation
            </Button>
            <Button
              variant="outline-white"
              href="https://wa.me/919XXXXXXXXX?text=Hello%20team%2C%20I%27d%20like%20to%20know%20more"
              external
            >
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll down arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDownIcon className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  )
}