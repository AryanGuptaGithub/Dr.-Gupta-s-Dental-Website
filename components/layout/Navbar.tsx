'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
  ClockIcon,
  SparklesIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  FaceSmileIcon,
  SunIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'

const treatmentLinks = [
  {
    label: 'Dental Implants',
    href: '/treatments/dental-implants',
    desc: 'Permanent teeth in 3 days',
    icon: PuzzlePieceIcon,
  },
  {
    label: 'Root Canal',
    href: '/treatments/root-canal',
    desc: 'Painless single-sitting RCT',
    icon: WrenchScrewdriverIcon,
  },
  {
    label: 'Smile Makeover',
    href: '/treatments/smile-makeover',
    desc: 'Digital Smile Design',
    icon: SparklesIcon,
  },
  {
    label: 'Braces & Aligners',
    href: '/treatments/braces-aligners',
    desc: 'Invisible teeth straightening',
    icon: FaceSmileIcon,
  },
  {
    label: 'Teeth Whitening',
    href: '/treatments/teeth-whitening',
    desc: 'Brighten up to 8 shades',
    icon: SunIcon,
  },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Smile Gallery', href: '/smile-gallery' },
  { label: 'Reviews', href: '/patient-reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [treatmentOpen, setTreatmentOpen] = useState(false)
  const [topBarVisible, setTopBarVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setTopBarVisible(window.scrollY < 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      {/* Top Bar */}
      <AnimatePresence>
        {topBarVisible && !scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="hidden md:block bg-teal text-white/80 text-xs overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <a href="tel:+919XXXXXXXXX" className="flex items-center gap-1.5 hover:text-gold transition-colors">
                  <PhoneIcon className="w-3.5 h-3.5" />
                  +91 9XXX XXXX
                </a>
                <span className="flex items-center gap-1.5">
                  <ClockIcon className="w-3.5 h-3.5" />
                  Mon–Sat: 9AM–8PM | Sun: 10AM–2PM
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <StarIcon className="w-3.5 h-3.5 text-gold" />
                  4.9 Google Rating • 500+ Reviews
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-500 ${
          topBarVisible && !scrolled ? 'top-8 md:top-7' : 'top-0'
        } ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] border-b border-mint-fresh/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 z-50 group">
              {/* Premium Tooth Icon */}
              <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                scrolled ? 'bg-teal' : 'bg-white/15 backdrop-blur-sm'
              }`}>
                <svg
                  className={`w-6 h-6 transition-colors duration-500 ${
                    scrolled ? 'text-white' : 'text-white'
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3c-3.5 0-7 3.5-7 7v4c0 1.8.7 3.2 1.8 4.2V21h2v-2h1v2h5v-2h1v2h2v-2.5c1-1 1.8-2.4 1.8-4.2v-4c0-3.5-3.5-7-7-7z" />
                  <circle cx="9" cy="12" r="1.2" fill="currentColor" />
                  <circle cx="15" cy="12" r="1.2" fill="currentColor" />
                </svg>
              </div>
              {/* Brand Name */}
              <div>
                <span className={`block font-serif text-xl tracking-wide leading-none transition-colors duration-500 ${
                  scrolled ? 'text-teal' : 'text-white'
                }`}>
                  Smiles Forever
                </span>
                <span className={`block text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                  scrolled ? 'text-gold' : 'text-gold/80'
                }`}>
                  Dental & Implant Centre
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                    scrolled
                      ? 'text-charcoal/80 hover:text-teal hover:bg-mint-fresh/30'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    scrolled ? '' : 'group-hover:w-4'
                  }`} />
                </Link>
              ))}

              {/* Treatments Mega Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setTreatmentOpen(true)}
                onMouseLeave={() => setTreatmentOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    scrolled
                      ? 'text-charcoal/80 hover:text-teal hover:bg-mint-fresh/30'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  } ${treatmentOpen ? (scrolled ? 'text-teal bg-mint-fresh/30' : 'text-white bg-white/10') : ''}`}
                >
                  Treatments
                  <motion.div
                    animate={{ rotate: treatmentOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Mega Dropdown */}
                <AnimatePresence>
                  {treatmentOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] bg-white rounded-2xl shadow-xl border border-mint-fresh/10 overflow-hidden"
                    >
                      <div className="p-4 grid grid-cols-1 gap-1">
                        <div className="px-4 py-2 mb-2">
                          <p className="text-xs text-warm-grey uppercase tracking-widest font-medium">Our Signature Treatments</p>
                        </div>
                        {treatmentLinks.map((item, j) => (
                          <Link
                            key={j}
                            href={item.href}
                            className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-mint-fresh/20 transition-colors group/item"
                          >
                            <div className="p-2 bg-mint-fresh/30 rounded-lg group-hover/item:bg-teal group-hover/item:text-white transition-all">
                              <item.icon className="w-5 h-5 text-teal group-hover/item:text-white transition-colors" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-charcoal group-hover/item:text-teal transition-colors">
                                {item.label}
                              </p>
                              <p className="text-xs text-warm-grey">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="bg-mint-fresh/10 px-4 py-3 text-center">
                        <Link
                          href="/treatments"
                          className="text-xs font-medium text-gold hover:text-teal transition-colors"
                        >
                          View All Treatments →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3 z-50">
              <Button
                variant="primary-gold"
                href="/book-appointment"
                size="sm"
                className="hidden md:inline-flex shadow-gold-glow"
              >
                Book Now
              </Button>

              {/* Mobile CTA (smaller) */}
              <Button
                variant="primary-gold"
                href="/book-appointment"
                size="sm"
                className="md:hidden text-xs px-4 py-2"
              >
                Book
              </Button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-xl transition-all ${
                  scrolled
                    ? 'text-charcoal hover:bg-mint-fresh/30'
                    : 'text-white hover:bg-white/15'
                }`}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-teal/95 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="relative h-full flex flex-col justify-center px-8 overflow-y-auto"
            >
              {/* Main Links */}
              <nav className="space-y-1 mb-10">
                <p className="text-gold/70 text-xs uppercase tracking-[0.2em] font-medium mb-6 pl-4">Menu</p>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-2xl font-serif text-white/90 hover:text-gold transition-colors rounded-xl hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Treatments in mobile */}
              <div className="mb-10">
                <p className="text-gold/70 text-xs uppercase tracking-[0.2em] font-medium mb-4 pl-4">Treatments</p>
                <div className="space-y-1">
                  {treatmentLinks.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-white/80 hover:text-gold transition-colors rounded-xl hover:bg-white/5"
                      >
                        <item.icon className="w-5 h-5 text-gold/60" />
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <a
                  href="tel:+919XXXXXXXXX"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm mb-3"
                >
                  <PhoneIcon className="w-4 h-4" />
                  +91 9XXX XXXX
                </a>
                <p className="text-white/40 text-xs">
                  Mon–Sat: 9AM–8PM | Sun: 10AM–2PM
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}