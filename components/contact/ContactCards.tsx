'use client'
import { motion } from 'framer-motion'
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'

const contactMethods = [
  {
    icon: PhoneIcon,
    title: 'Call Us',
    details: ['+91 9XXX XXXX', '+91 9XXX XXXX'],
    action: 'tel:+919XXXXXXXXX',
    actionLabel: 'Call Now',
    color: 'bg-teal/10 text-teal',
    buttonColor: 'primary-gold',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'WhatsApp',
    details: ['+91 9XXX XXXX', 'Reply within minutes'],
    action: 'https://wa.me/919XXXXXXXXX?text=Hello%20Dr.%20Gupta%20team%2C%20I%20would%20like%20to%20know%20more',
    actionLabel: 'Chat Now',
    color: 'bg-green-50 text-green-600',
    buttonColor: 'primary-gold',
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    details: ['hello@smilesforever.com', 'We reply within 2 hours'],
    action: 'mailto:hello@smilesforever.com',
    actionLabel: 'Send Email',
    color: 'bg-mint-fresh/50 text-teal',
    buttonColor: 'outline-teal',
  },
  {
    icon: MapPinIcon,
    title: 'Visit Us',
    details: ['123, Smile Street', 'Andheri West, Mumbai 400058'],
    action: 'https://maps.google.com/?q=Smiles+Forever+Dental+Clinic+Andheri+West+Mumbai',
    actionLabel: 'Get Directions',
    color: 'bg-gold/10 text-gold-dark',
    buttonColor: 'outline-teal',
  },
]

export const ContactCards = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, i) => (
          <motion.a
            key={i}
            href={method.action}
            target={method.action.startsWith('http') ? '_blank' : undefined}
            rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all text-center group"
          >
            <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 ${method.color}`}>
              <method.icon className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl text-teal mb-3">{method.title}</h3>
            {method.details.map((detail, j) => (
              <p key={j} className="text-warm-grey text-sm">{detail}</p>
            ))}
            <span className="inline-block mt-5 text-gold font-medium text-sm group-hover:underline underline-offset-4">
              {method.actionLabel} →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}