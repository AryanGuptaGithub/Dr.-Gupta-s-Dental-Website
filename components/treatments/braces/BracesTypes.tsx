'use client'
import { motion } from 'framer-motion'

const types = [
  {
    title: 'Metal Braces',
    desc: 'The classic, most affordable option. Modern metal braces are smaller and more comfortable than ever. Ideal for children and teens.',
    icon: '🔩',
    tag: 'Most Affordable',
  },
  {
    title: 'Ceramic Braces',
    desc: 'Tooth-colored brackets that blend with your natural teeth. Far less noticeable than metal — popular with adults and image-conscious teens.',
    icon: '🤍',
    tag: 'Discreet',
  },
  {
    title: 'Lingual Braces',
    desc: 'Placed behind the teeth — completely hidden from view. Custom-made for each tooth. The ultimate invisible fixed option.',
    icon: '👻',
    tag: '100% Invisible',
  },
]

export const BracesTypes = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Braces Options</p>
        <h2 className="font-serif text-h2 text-teal">Types of Braces We Offer</h2>
        <p className="text-warm-grey mt-4 max-w-xl mx-auto">
          Not all braces are the same. Choose the type that fits your lifestyle and aesthetic preference.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {types.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white rounded-3xl p-8 shadow-card text-center relative overflow-hidden group hover:shadow-card-hover transition-shadow"
          >
            <span className="text-5xl mb-4 block">{item.icon}</span>
            <span className="inline-block bg-gold/10 text-gold-dark text-xs font-medium px-3 py-1 rounded-full mb-4">
              {item.tag}
            </span>
            <h3 className="font-serif text-xl text-teal mb-3">{item.title}</h3>
            <p className="text-warm-grey text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}