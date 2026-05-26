'use client'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/outline'

export const GalleryHero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-teal/5 via-white to-white" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark text-sm font-medium px-4 py-2 rounded-full mb-6">
            <SparklesIcon className="w-4 h-4" />
            5000+ Smiles Transformed
          </div>
          <h1 className="font-serif text-h1 text-teal mb-6">
            Real Smiles, <span className="text-gold">Real Confidence</span>
          </h1>
          <p className="text-warm-grey text-lg max-w-2xl mx-auto">
            Every smile you see here belongs to a real patient of Dr. Gupta. 
            Drag the slider on any image to see the before and after — no filters, no edits, just real results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}