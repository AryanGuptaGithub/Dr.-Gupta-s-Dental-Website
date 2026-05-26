import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactCards } from '@/components/contact/ContactCards'
import { ContactMap } from '@/components/contact/ContactMap'
import { ContactFormSection } from '@/components/contact/ContactFormSection'
import { WorkingHours } from '@/components/contact/WorkingHours'
import { HowToReach } from '@/components/contact/HowToReach'
import { EmergencyContact } from '@/components/contact/EmergencyContact'

export const metadata: Metadata = {
  title: 'Contact Us – Dr. Gupta\'s Smiles Forever Dental Clinic Mumbai',
  description: 'Contact Dr. Gupta\'s dental clinic in Andheri West, Mumbai. Call, WhatsApp, or visit us. Same-day appointments available. Book your consultation today.',
  openGraph: {
    title: 'Contact Dr. Gupta – Smiles Forever Dental Clinic Mumbai',
    description: 'Get in touch with Mumbai\'s trusted dental clinic. Book appointments, ask questions, or visit us in Andheri West.',
    images: [{ url: '/images/contact-og.jpg' }],
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactCards />
        <ContactMap />
        <ContactFormSection />
        <WorkingHours />
        <HowToReach />
        <EmergencyContact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}