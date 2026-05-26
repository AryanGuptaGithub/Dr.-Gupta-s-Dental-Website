'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export const DoctorIntro = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-100px' }}
    className="py-section max-w-7xl mx-auto px-6"
  >
    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Image */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-card-hover"
      >
        <Image
          src="https://t4.ftcdn.net/jpg/08/71/85/87/360_F_871858750_ob0J7SnU9pU86G1VKMpThhjojzw0qPcx.jpg"
          alt="Dr. Gupta - Best Dentist in Mumbai"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gold uppercase tracking-widest text-sm font-medium">Meet the Smile Architect</p>
        <h2 className="font-serif text-h2 text-teal mt-2 mb-6">Dr. Gupta, MDS</h2>
        <div className="space-y-4 text-warm-grey leading-relaxed">
          <p>With over two decades of dedicated practice, I’ve made it my life’s mission to deliver pain‑free, world‑class dentistry to Mumbai families.</p>
          <p>Every implant placed, every smile designed, carries a promise of gentle care and lasting confidence. I believe in treating not just teeth, but the person behind every smile.</p>
        </div>
        <div className="mt-8 flex items-center gap-6 flex-wrap">
          <Button href="/about" variant="text-link" className="text-lg">Read My Full Story →</Button>
          <div className="flex items-center gap-3 text-warm-grey text-sm">
            <span className="w-10 h-10 bg-mint-fresh rounded-full flex items-center justify-center font-bold text-teal text-xs">IDA</span>
            <span>Member, Indian Dental Association</span>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
)