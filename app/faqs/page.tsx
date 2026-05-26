import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { FAQHero } from '@/components/faq/FAQHero'
import { FAQCategories } from '@/components/faq/FAQCategories'
import { FAQCTA } from '@/components/faq/FAQCTA'

export const metadata: Metadata = {
  title: 'Dental FAQs – Common Questions Answered | Dr. Gupta Mumbai',
  description: 'Find answers to common dental questions about implants, root canals, braces, whitening & more. Dr. Gupta\'s complete dental FAQ guide for Mumbai patients.',
  openGraph: {
    title: 'Dental FAQs – Common Questions Answered | Dr. Gupta Mumbai',
    description: 'Everything you need to know about dental treatments in Mumbai. Implants, RCT, braces, whitening FAQs answered by Dr. Gupta.',
    images: [{ url: '/images/faq-og.jpg' }],
  },
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <FAQHero />
        <FAQCategories />
        <FAQCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}