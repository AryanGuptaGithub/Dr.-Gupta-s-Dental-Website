'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-mint-fresh/30" />
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-teal/10 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-card-hover">
              <Image
                src="https://as1.ftcdn.net/v2/jpg/02/67/54/50/1000_F_267545052_uMCxxw1ThFkB1lFL0sLtbWiaRqYtvckg.jpg"
                alt="Dr. Gupta – Best Dentist in Mumbai"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
            {/* Floating credential badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card-hover p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-mint-fresh rounded-full flex items-center justify-center text-teal font-serif text-lg">20+</div>
              <div>
                <p className="text-sm font-semibold text-charcoal">Years Experience</p>
                <p className="text-xs text-warm-grey">5000+ Smiles</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Meet the Smile Architect
            </p>
            <h1 className="font-serif text-h1 text-teal mb-4">
              Dr. Gupta, <span className="text-gold">MDS</span>
            </h1>
            <p className="text-warm-grey text-lg mb-2">Fellow in Implantology & Aesthetic Dentistry</p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              For over two decades, Dr. Gupta has been transforming lives through precision dentistry — 
              combining German implant technology with a gentle, patient‑first philosophy that makes 
              every visit comfortable and every smile beautiful.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary-gold" href="/book-appointment">
                Book a Consultation
              </Button>
              <Button variant="outline-teal" href="tel:+919XXXXXXXXX">
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}