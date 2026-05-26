'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const WhatIsRCT = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Understanding RCT</p>
          <h2 className="font-serif text-h2 text-teal mb-6">
            What Is a Root Canal?
          </h2>
          <div className="space-y-4 text-warm-grey leading-relaxed">
            <p>
              A root canal treatment (RCT) is a procedure that saves a badly infected or 
              decayed tooth from extraction. When the soft tissue inside your tooth (the pulp) 
              gets infected due to deep decay, cracks, or trauma, it causes severe pain and 
              can lead to an abscess.
            </p>
            <p>
              During RCT, we gently remove the infected pulp, clean and disinfect the root 
              canals, then fill and seal them. Finally, a crown is placed to protect and 
              restore the tooth to full function. The result? No more pain, and you keep 
              your natural tooth for years to come.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-card"
        >
          <Image
            src="/images/rct-diagram.webp"
            alt="Root canal procedure diagram showing infected tooth being saved"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </motion.div>
      </div>
    </section>
  )
}