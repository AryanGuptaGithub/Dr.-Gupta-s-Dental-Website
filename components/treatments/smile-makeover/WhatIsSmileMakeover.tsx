'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const WhatIsSmileMakeover = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Smile Transformation</p>
          <h2 className="font-serif text-h2 text-teal mb-6">
            What Is a Smile Makeover?
          </h2>
          <div className="space-y-4 text-warm-grey leading-relaxed">
            <p>
              A smile makeover is a custom combination of cosmetic and restorative dental 
              procedures designed to give you the smile you've always wanted. It's not one 
              procedure — it's a personalized treatment plan that may include veneers, 
              whitening, bonding, crowns, and gum contouring.
            </p>
            <p>
              At Smiles Forever, every makeover starts with Digital Smile Design (DSD). 
              We take photographs and scans of your face and teeth, then use software to 
              design your ideal smile based on your facial features, personality, and desires. 
              You see the result before we begin — so there are no surprises, only confidence.
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
            src="/images/digital-smile-design.webp"
            alt="Digital Smile Design process showing smile preview on screen"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </motion.div>
      </div>
    </section>
  )
}