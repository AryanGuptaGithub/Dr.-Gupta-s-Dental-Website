import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { ImplantHero } from '@/components/treatments/implants/ImplantHero'
import { WhatAreImplants } from '@/components/treatments/implants/WhatAreImplants'
import { WhyChooseImplants } from '@/components/treatments/implants/WhyChooseImplants'
import { ImplantProcess } from '@/components/treatments/implants/ImplantProcess'
import { ImplantTypes } from '@/components/treatments/implants/ImplantTypes'
import { ImplantCost } from '@/components/treatments/implants/ImplantCost'
import { ImplantBeforeAfter } from '@/components/treatments/implants/ImplantBeforeAfter'
import { ImplantFAQ } from '@/components/treatments/implants/ImplantFAQ'
import { ImplantCTA } from '@/components/treatments/implants/ImplantCTA'

export const metadata: Metadata = {
  title: 'Dental Implants Mumbai – Permanent Teeth in 3 Days | Dr. Gupta',
  description: 'Best dental implants in Mumbai using German implant systems. Painless procedure, 98% success rate, EMI options available. Free consultation – book now.',
  openGraph: {
    title: 'Dental Implants Mumbai – Permanent Teeth in 3 Days',
    description: 'Painless dental implants with German precision. 5000+ successful cases. EMI available.',
    images: [{ url: '/images/implants-og.jpg' }],
  },
}

export default function DentalImplantsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ImplantHero />
        <WhatAreImplants />
        <WhyChooseImplants />
        <ImplantProcess />
        <ImplantTypes />
        <ImplantCost />
        <ImplantBeforeAfter />
        <ImplantFAQ />
        <ImplantCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}