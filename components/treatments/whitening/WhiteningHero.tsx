'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { SparklesIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export const WhiteningHero = () => {
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
              Professional Teeth Whitening Mumbai
            </p>
            <h1 className="font-serif text-h1 text-teal mb-6">
              A Brighter Smile<br />
              <span className="text-gold">in Just One Visit</span>
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed mb-8">
              Walk in with stained teeth, walk out with a radiant smile up to 8 shades brighter. 
              Safe, professional laser whitening by Dr. Gupta — results you can see immediately.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <ClockIcon className="w-5 h-5 text-teal" />
                <span className="text-charcoal">60-Minute Session</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <SparklesIcon className="w-5 h-5 text-gold" />
                <span className="text-charcoal">Up to 8 Shades Brighter</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheckIcon className="w-5 h-5 text-teal" />
                <span className="text-charcoal">100% Safe & Painless</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary-gold" href="/book-appointment">
                Book Your Whitening Session
              </Button>
              <Button variant="outline-teal" href="https://wa.me/919XXXXXXXXX" external>
                Ask About Packages
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
                src="/images/whitening-hero.webp"
                alt="Professional teeth whitening result - bright white smile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
              <SparklesIcon className="w-5 h-5 text-gold" />
              <div>
                <p className="text-sm font-semibold text-teal">Instant Results</p>
                <p className="text-xs text-warm-grey">Visible after 1 session</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}