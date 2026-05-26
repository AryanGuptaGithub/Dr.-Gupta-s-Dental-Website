'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { SparklesIcon } from '@heroicons/react/24/outline'

export const BracesHero = () => {
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
              Orthodontics Mumbai
            </p>
            <h1 className="font-serif text-h1 text-teal mb-6">
              Straighten Your Smile<br />
              <span className="text-gold">Discreetly & Comfortably</span>
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed mb-8">
              From invisible aligners to barely-noticeable ceramic braces — 
              get the straight smile you've always wanted without anyone noticing 
              you're in treatment.
            </p>

            <div className="flex items-center gap-2 text-sm mb-8">
              <SparklesIcon className="w-5 h-5 text-gold" />
              <span className="text-charcoal font-medium">Free 3D smile simulation — see your future smile</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary-gold" href="/book-appointment">
                Get Free Smile Assessment
              </Button>
              <Button variant="outline-teal" href="https://wa.me/919XXXXXXXXX" external>
                Ask About Aligners
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
                src="/images/braces-hero.webp"
                alt="Clear aligners and ceramic braces treatment in Mumbai"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card p-4">
              <p className="text-sm font-semibold text-teal">Kids, Teens & Adults</p>
              <p className="text-xs text-warm-grey">Custom treatment for every age</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}