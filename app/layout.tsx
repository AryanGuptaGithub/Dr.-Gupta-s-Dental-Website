import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Dr. Gupta's Smiles Forever – Best Dentist in Mumbai",
    template: "%s | Dr. Gupta's Smiles Forever",
  },
  description: "Premium dental implants, root canals, and smile makeovers in Mumbai. 20+ years of gentle, world‑class care.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}