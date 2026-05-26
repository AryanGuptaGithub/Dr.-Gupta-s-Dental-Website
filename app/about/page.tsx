import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { AboutHero } from '@/components/about/AboutHero'
import { DoctorStory } from '@/components/about/DoctorStory'
import { Credentials } from '@/components/about/Credentials'
import { ClinicTour } from '@/components/about/ClinicTour'
import { Philosophy } from '@/components/about/Philosophy'
import { AboutCTA } from '@/components/about/AboutCTA'

export const metadata: Metadata = {
  title: 'About Dr. Gupta – Best Dentist in Mumbai',
  description: 'Meet Dr. Gupta, MDS — 20+ years of experience in painless dental implants, smile makeovers, and family dentistry in Mumbai. ISO certified clinic.',
  openGraph: {
    title: 'About Dr. Gupta – Best Dentist in Mumbai',
    description: '20+ years of experience in painless dental care. Meet the smile architect behind 5000+ transformations.',
    images: [{ url: '/images/dr-gupta-og.jpg' }],
  },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <DoctorStory />
        <Credentials />
        <ClinicTour />
        <Philosophy />
        <AboutCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}