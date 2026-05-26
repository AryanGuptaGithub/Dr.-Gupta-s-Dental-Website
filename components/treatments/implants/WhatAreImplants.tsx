    'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const WhatAreImplants = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Understanding Implants</p>
          <h2 className="font-serif text-h2 text-teal mb-6">
            What Are Dental Implants?
          </h2>
          <div className="space-y-4 text-warm-grey leading-relaxed">
            <p>
              A dental implant is a small titanium post that acts as an artificial tooth root. 
              It's surgically placed into your jawbone, where it fuses naturally with the bone 
              over a few months. Once healed, a custom‑made crown is attached — giving you a 
              tooth that looks, feels, and functions exactly like a natural one.
            </p>
            <p>
              Unlike dentures or bridges, implants are a permanent solution. They don't slip, 
              don't affect neighboring teeth, and with proper care, can last a lifetime.
            </p>
          </div>
          <div className="mt-6 flex gap-6">
            <div className="text-center">
              <p className="font-serif text-3xl text-teal">98%</p>
              <p className="text-xs text-warm-grey">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl text-teal">25+</p>
              <p className="text-xs text-warm-grey">Years Lifespan</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl text-teal">3 Days</p>
              <p className="text-xs text-warm-grey">New Smile</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-card"
        >
          <Image
            src="/images/implant-diagram.webp"
            alt="How dental implants work – titanium post, abutment, and crown"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </motion.div>
      </div>
    </section>
  )
}