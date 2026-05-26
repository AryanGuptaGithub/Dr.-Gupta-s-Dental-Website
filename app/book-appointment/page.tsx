import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { BookingHero } from '@/components/booking/BookingHero'
import { WhyBook } from '@/components/booking/WhyBook'
import { WhatNext } from '@/components/booking/WhatNext'
import { EmergencyBooking } from '@/components/booking/EmergencyBooking'

export const metadata: Metadata = {
  title: 'Book Appointment – Dr. Gupta\'s Smiles Forever Dental Clinic Mumbai',
  description: 'Book your dental appointment online. Free consultation, same-day appointments available. Call or WhatsApp for instant booking. Dr. Gupta\'s Smiles Forever, Mumbai.',
  openGraph: {
    title: 'Book Dental Appointment – Dr. Gupta Mumbai',
    description: 'Schedule your visit to Mumbai\'s most trusted dental clinic. Free consultation, painless treatments, EMI available.',
    images: [{ url: '/images/booking-og.jpg' }],
  },
}

export default function BookAppointmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <BookingHero />
        <WhyBook />
        <WhatNext />
        <EmergencyBooking />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}