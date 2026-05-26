'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SparklesIcon } from '@heroicons/react/24/outline'

export const GalleryCTA = () => {
  return (
    <section className="py-section">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal to-teal-dark rounded-3xl p-12 md:p-16 shadow-card-hover"
        >
          <SparklesIcon className="w-10 h-10 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-h3 text-white mb-4">
            Ready to Be Our Next<br />
            <span className="text-gold">Success Story?</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Every smile in this gallery started with a single step — booking a consultation. 
            Yours could be the next transformation we celebrate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary-gold" href="/book-appointment" size="lg">
              Start Your Transformation
            </Button>
            <Button
              variant="outline-white"
              href="https://wa.me/919XXXXXXXXX?text=Hi%2C%20I%20saw%20your%20smile%20gallery%20and%20I%27d%20like%20to%20know%20more"
              external
              size="lg"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}