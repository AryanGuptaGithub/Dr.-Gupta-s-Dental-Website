'use client'
import { motion } from 'framer-motion'
import { PhoneIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'

export const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-white to-mint-fresh/20" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-h1 text-teal mb-6">
            We'd Love to <span className="text-gold">Hear From You</span>
          </h1>
          <p className="text-warm-grey text-lg max-w-2xl mx-auto mb-8">
            Whether you're ready to book an appointment, have a question about a treatment, 
            or need emergency dental care — we're here for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary-gold" href="tel:+919XXXXXXXXX" size="lg">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call Now: +91 9XXX XXXX
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}