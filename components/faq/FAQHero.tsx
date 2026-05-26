'use client'
import { motion } from 'framer-motion'
import { QuestionMarkCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export const FAQHero = () => {
  const [searchQuery, setSearchQuery] = useState('')

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
          <div className="inline-flex items-center gap-2 bg-mint-fresh/50 text-teal text-sm font-medium px-4 py-2 rounded-full mb-6">
            <QuestionMarkCircleIcon className="w-4 h-4" />
            Got Questions? We've Got Answers
          </div>
          <h1 className="font-serif text-h1 text-teal mb-6">
            Frequently Asked <span className="text-gold">Questions</span>
          </h1>
          <p className="text-warm-grey text-lg max-w-2xl mx-auto mb-10">
            Everything you need to know about dental treatments, costs, recovery, and more — 
            answered by Dr. Gupta and the Smiles Forever team.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <MagnifyingGlassIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-grey" />
            <input
              type="text"
              placeholder="Search for a question... (e.g., implant cost, root canal pain)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-5 py-4 bg-white rounded-full border-2 border-mint-fresh/30 focus:border-teal outline-none text-charcoal placeholder:text-warm-grey/50 shadow-card transition-colors"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}