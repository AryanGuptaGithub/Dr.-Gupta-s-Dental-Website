'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import {
  BuildingStorefrontIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  FaceSmileIcon,
  HeartIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

interface FAQItem {
  q: string
  a: string
}

interface FAQCategory {
  id: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  questions: FAQItem[]
}

const categories: FAQCategory[] = [
  {
    id: 'general',
    icon: BuildingStorefrontIcon,
    title: 'General Dentistry',
    description: 'About our clinic, appointments, payments, and what to expect',
    questions: [
      {
        q: 'Where is Smiles Forever located in Mumbai?',
        a: 'We are located in Andheri West, Mumbai. Our full address is 123, Smile Street, Near Andheri Sports Complex, Andheri West, Mumbai 400058. We have clear landmarks and ample parking available. You can find us easily on Google Maps.',
      },
      {
        q: 'What are your clinic timings?',
        a: 'We are open Monday to Saturday from 9:00 AM to 8:00 PM, and on Sundays from 10:00 AM to 2:00 PM. We also accommodate emergency appointments outside these hours — just call us.',
      },
      {
        q: 'Do you offer same-day appointments?',
        a: 'Yes! We understand that dental issues can be urgent. Call us in the morning, and we will do our best to fit you in the same day. Emergency cases are always prioritized.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash, all major credit/debit cards, UPI (Google Pay, PhonePe), and bank transfers. We also offer EMI options through leading financial partners for larger treatments.',
      },
      {
        q: 'Do you have EMI or payment plans?',
        a: 'Yes! We offer flexible EMI plans for treatments like dental implants, smile makeovers, and braces. You can pay in easy monthly installments over 6-24 months. We\'ll help you choose the best plan at your consultation.',
      },
      {
        q: 'Is parking available at the clinic?',
        a: 'Yes, we have free parking available for patients right outside the clinic. There is also a public parking lot within 2 minutes walking distance.',
      },
    ],
  },
  {
    id: 'implants',
    icon: PuzzlePieceIcon,
    title: 'Dental Implants',
    description: 'Everything about implant procedures, costs, and recovery',
    questions: [
      {
        q: 'What is a dental implant?',
        a: 'A dental implant is a small titanium post that acts as an artificial tooth root. It is surgically placed into your jawbone, where it fuses naturally with the bone. A custom-made crown is then attached, giving you a tooth that looks, feels, and functions exactly like a natural one.',
      },
      {
        q: 'Is dental implant surgery painful?',
        a: 'No — with our advanced local anesthesia and gentle surgical technique, most patients feel no pain during the procedure. Any post-surgery soreness is mild and managed with over-the-counter pain relief. Many patients return to work the next day.',
      },
      {
        q: 'How long do dental implants last?',
        a: 'With proper oral hygiene and regular dental checkups, dental implants can last 25+ years — often a lifetime. We use premium German implant systems that come with manufacturer warranties.',
      },
      {
        q: 'How much does a dental implant cost in Mumbai?',
        a: 'The cost varies depending on the implant system, number of implants, and whether bone grafting is needed. We provide a transparent, all-inclusive estimate at your free consultation. EMI options make implants affordable for everyone.',
      },
      {
        q: 'How long does the implant process take?',
        a: 'With immediate loading protocols, you can have temporary teeth the same week. The complete process — from implant placement to final crown — typically takes 3-4 months to allow proper healing and bone integration.',
      },
      {
        q: 'Can I get implants if I have bone loss?',
        a: 'Yes! We offer bone grafting procedures to rebuild lost bone. Even patients who were told they cannot get implants elsewhere have been successfully treated at our clinic.',
      },
      {
        q: 'Are dental implants better than bridges or dentures?',
        a: 'Implants are considered the gold standard for tooth replacement. Unlike bridges, they don\'t require grinding down healthy adjacent teeth. Unlike dentures, they are fixed, don\'t slip, and preserve jawbone health.',
      },
    ],
  },
  {
    id: 'root-canal',
    icon: WrenchScrewdriverIcon,
    title: 'Root Canal Treatment',
    description: 'The truth about RCT — pain, process, and alternatives',
    questions: [
      {
        q: 'Is root canal treatment painful?',
        a: 'Modern root canal treatment is NOT painful. With advanced anesthesia, microscope-guided precision, and rotary endodontics, most patients feel nothing during the procedure. The real pain is from the infected tooth before treatment — RCT relieves that pain.',
      },
      {
        q: 'How long does a root canal take?',
        a: 'Most root canals are completed in a single sitting of 45-90 minutes. Complex cases or molars with multiple canals may require two visits. We use rotary instruments which are significantly faster than traditional hand files.',
      },
      {
        q: 'Is it better to extract the tooth instead?',
        a: 'Saving your natural tooth is always the best option. Extraction creates gaps, causes bone loss, and may lead to expensive replacements like implants. Root canal treatment preserves your natural smile and is more cost-effective long-term.',
      },
      {
        q: 'How much does a root canal cost in Mumbai?',
        a: 'Cost depends on the tooth location (front tooth vs. molar) and complexity. We provide a clear estimate at your consultation. Our RCT costs are competitive and include the final crown.',
      },
      {
        q: 'Will I need a crown after RCT?',
        a: 'Yes — a crown protects the treated tooth from fracture and restores full function. We create custom porcelain crowns that match your natural teeth perfectly.',
      },
    ],
  },
  {
    id: 'smile-makeover',
    icon: SparklesIcon,
    title: 'Smile Makeover & Cosmetic',
    description: 'Veneers, whitening, and designing your dream smile',
    questions: [
      {
        q: 'What is Digital Smile Design (DSD)?',
        a: 'DSD is advanced software that creates a digital preview of your new smile before any treatment begins. We take photos and scans of your face, then design a smile that perfectly complements your features. You approve the design first — no surprises.',
      },
      {
        q: 'How long does a smile makeover take?',
        a: 'Simple cases (whitening + bonding) can be completed in 1-2 visits. Full smile makeovers with veneers typically take 2-3 weeks from design to delivery. We give you a precise timeline at your consultation.',
      },
      {
        q: 'Are veneers permanent?',
        a: 'Porcelain veneers are considered a permanent treatment because a thin layer of enamel is removed. They last 10-15 years or longer with proper care, after which they may need replacement.',
      },
      {
        q: 'Is teeth whitening safe?',
        a: 'Yes — professional whitening under dentist supervision is completely safe. We protect your gums and use pH-balanced gel that whitens without damaging enamel. It\'s far safer than over-the-counter products.',
      },
      {
        q: 'How white will my teeth get?',
        a: 'Most patients see an improvement of 5-8 shades in a single laser whitening session. We measure your starting shade and show you the difference — the results are visible immediately.',
      },
    ],
  },
  {
    id: 'braces',
    icon: FaceSmileIcon,
    title: 'Braces & Aligners',
    description: 'Straightening options, duration, and costs for all ages',
    questions: [
      {
        q: 'Which is better — braces or clear aligners?',
        a: 'It depends on your case. Braces are better for complex corrections and severe misalignment. Clear aligners work beautifully for mild to moderate cases and offer superior aesthetics. Dr. Gupta will recommend the best option for you.',
      },
      {
        q: 'How long does orthodontic treatment take?',
        a: 'Treatment ranges from 6-24 months depending on complexity. Clear aligners average 12-18 months, while braces may take 12-24 months. We provide a precise timeline during your consultation.',
      },
      {
        q: 'Can adults get braces?',
        a: 'Absolutely! 40% of our orthodontic patients are adults. With ceramic braces and clear aligners, treatment is discreet and professional. It\'s never too late for a straight smile.',
      },
      {
        q: 'Do braces hurt?',
        a: 'You may feel pressure for a few days after each adjustment. This is normal — it means your teeth are moving! Mild pain relief helps, and most patients adapt within a week.',
      },
      {
        q: 'How much do braces cost in Mumbai?',
        a: 'Cost depends on the type (metal, ceramic, lingual, or aligners) and treatment complexity. We offer all-inclusive packages with flexible EMI plans starting at affordable monthly amounts.',
      },
    ],
  },
  {
    id: 'kids',
    icon: HeartIcon,
    title: 'Kids Dentistry',
    description: 'Your child\'s first visit, preventive care, and gentle treatment',
    questions: [
      {
        q: 'At what age should my child first visit the dentist?',
        a: 'The Indian Dental Association recommends a child\'s first dental visit by age 1, or within 6 months of the first tooth appearing. Early visits help catch issues and make your child comfortable with dental care.',
      },
      {
        q: 'Is my child scared of the dentist? How do you help?',
        a: 'We specialize in gentle, child-friendly dentistry. Our team uses tell-show-do techniques, positive reinforcement, and a warm, playful environment. Most anxious children leave smiling. We also offer sedation for extremely fearful kids.',
      },
      {
        q: 'What are dental sealants and fluoride treatments?',
        a: 'Sealants are thin protective coatings applied to chewing surfaces of back teeth to prevent cavities. Fluoride treatments strengthen enamel. Both are quick, painless, and highly effective for cavity prevention in children.',
      },
      {
        q: 'Do baby teeth really matter?',
        a: 'Yes! Baby teeth hold space for permanent teeth, help with proper chewing and speech development, and guide jaw growth. Premature loss can cause alignment problems later.',
      },
    ],
  },
  {
    id: 'emergency',
    icon: ExclamationTriangleIcon,
    title: 'Dental Emergencies',
    description: 'What to do when you need urgent dental care',
    questions: [
      {
        q: 'What qualifies as a dental emergency?',
        a: 'Severe tooth pain, knocked-out tooth, broken tooth, swelling or abscess, uncontrolled bleeding, or injury to the mouth are all emergencies. If you\'re unsure, call us — we\'ll guide you.',
      },
      {
        q: 'I knocked out a tooth — what should I do?',
        a: 'Pick up the tooth by the crown (never the root). Rinse gently with water — don\'t scrub. Try to place it back in the socket. If not possible, keep it in milk or saliva. Come to the clinic IMMEDIATELY — time is critical for saving the tooth.',
      },
      {
        q: 'Do you offer emergency appointments after hours?',
        a: 'Yes! We provide after-hours emergency care. Call our emergency number and Dr. Gupta or a team member will assist you. We\'re here when you need us most.',
      },
      {
        q: 'What should I do for severe toothache at night?',
        a: 'Rinse with warm salt water, floss gently to remove any trapped food, and take over-the-counter pain relief. Avoid placing aspirin directly on the gum. Call us first thing in the morning for an emergency appointment.',
      },
    ],
  },
]

export const FAQCategories = () => {
  const [openCategory, setOpenCategory] = useState<string | null>('general')
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({})

  const toggleQuestion = (key: string) => {
    setOpenQuestions((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section className="py-section max-w-4xl mx-auto px-6">
      <div className="space-y-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-card overflow-hidden border border-mint-fresh/10"
          >
            {/* Category Header */}
            <button
              onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
              className="w-full flex items-center gap-4 p-6 md:p-8 text-left hover:bg-mint-fresh/5 transition-colors"
            >
              <div className="p-3 bg-mint-fresh/50 rounded-2xl shrink-0">
                <category.icon className="w-6 h-6 text-teal" />
              </div>
              <div className="flex-grow">
                <h3 className="font-serif text-xl md:text-2xl text-teal">{category.title}</h3>
                <p className="text-warm-grey text-sm mt-1">{category.description}</p>
              </div>
              <motion.div
                animate={{ rotate: openCategory === category.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0"
              >
                <ChevronDownIcon className="w-6 h-6 text-gold" />
              </motion.div>
            </button>

            {/* Questions */}
            <AnimatePresence>
              {openCategory === category.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-8 space-y-3">
                    {category.questions.map((faq, i) => {
                      const questionKey = `${category.id}-${i}`
                      return (
                        <div
                          key={questionKey}
                          className="bg-ivory rounded-2xl overflow-hidden"
                        >
                          <button
                            onClick={() => toggleQuestion(questionKey)}
                            className="w-full flex justify-between items-center p-5 text-left font-medium text-charcoal hover:text-teal transition-colors"
                          >
                            <span className="pr-4 text-sm md:text-base">{faq.q}</span>
                            <motion.div
                              animate={{ rotate: openQuestions[questionKey] ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="shrink-0"
                            >
                              <ChevronDownIcon className="w-4 h-4 text-gold" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {openQuestions[questionKey] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <p className="px-5 pb-5 text-warm-grey text-sm leading-relaxed">
                                  {faq.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}