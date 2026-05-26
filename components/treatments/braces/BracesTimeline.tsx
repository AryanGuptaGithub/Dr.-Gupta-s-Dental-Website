'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Free Smile Assessment',
    desc: 'We examine your teeth, take digital scans, and discuss your goals. No commitment required.',
    icon: '🔍',
    duration: 'Visit 1',
  },
  {
    number: '02',
    title: 'Custom Treatment Plan',
    desc: 'We create a 3D simulation of your tooth movements and show you the predicted final result.',
    icon: '📋',
    duration: 'Visit 2',
  },
  {
    number: '03',
    title: 'Start Treatment',
    desc: 'Braces are fitted or your first set of aligners is delivered. We guide you through care instructions.',
    icon: '🦷',
    duration: 'Visit 3',
  },
  {
    number: '04',
    title: 'Regular Check-ups',
    desc: 'Monthly adjustments for braces, or aligner pickups every 6-8 weeks. We track your progress closely.',
    icon: '📊',
    duration: 'Monthly',
  },
  {
    number: '05',
    title: 'Reveal Your Smile',
    desc: 'Treatment complete! We remove braces or finish aligners, polish your teeth, and fit retainers.',
    icon: '🎉',
    duration: 'Final Visit',
  },
]

export const BracesTimeline = () => {
  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">The Journey</p>
          <h2 className="font-serif text-h2 text-teal">What to Expect</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-mint-fresh hidden md:block" />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start relative"
                >
                  <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center text-2xl shrink-0 relative z-10 shadow-card">
                    {step.icon}
                  </div>
                  <div className="bg-ivory rounded-3xl p-6 flex-grow border border-mint-fresh/20">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-lg text-teal">{step.title}</h3>
                      <span className="text-xs bg-gold/10 text-gold-dark px-3 py-1 rounded-full shrink-0 ml-4">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-warm-grey text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}