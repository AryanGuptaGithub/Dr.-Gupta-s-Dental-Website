import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => (
  <footer className="bg-teal text-white/80 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      {/* Brand */}
      <div>
        <Link href="/" className="flex items-center gap-2 mb-4">
          <span className="font-serif text-2xl text-white">Smiles Forever</span>
        </Link>
        <p className="text-sm leading-relaxed text-white/60">
          Premium dental care in Mumbai — implants, root canals, and smile makeovers with a gentle touch.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-white font-medium mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="/about" className="hover:text-gold transition-colors">About Dr. Gupta</Link></li>
          <li><Link href="/treatments" className="hover:text-gold">Treatments</Link></li>
          <li><Link href="/smile-gallery" className="hover:text-gold">Smile Gallery</Link></li>
          <li><Link href="/blog" className="hover:text-gold">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-white font-medium mb-4">Contact Us</h4>
        <div className="text-sm space-y-2">
          <p>📍 123, Smile Street, Andheri West, Mumbai 400058</p>
          <p>📞 <a href="tel:+919XXXXXXXXX" className="hover:text-gold">+91 9XXX XXXX</a></p>
          <p>✉️ <a href="mailto:hello@smilesforever.com" className="hover:text-gold">hello@smilesforever.com</a></p>
          <p>🕒 Mon–Sat: 9am – 8pm | Sun: 10am – 2pm</p>
        </div>
      </div>

      {/* Map & Social */}
      <div>
        <h4 className="text-white font-medium mb-4">Find Us</h4>
        <div className="w-full h-36 rounded-xl overflow-hidden">
          {/* Simple static map, replace with iframe when ready */}
          <Image src="/images/map-placeholder.webp" alt="Clinic location" width={300} height={150} className="object-cover w-full h-full" />
        </div>
        <div className="flex gap-4 mt-4">
          <a href="#" className="text-white/60 hover:text-gold">FB</a>
          <a href="#" className="text-white/60 hover:text-gold">IG</a>
          <a href="#" className="text-white/60 hover:text-gold">YT</a>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/40">
      &copy; {new Date().getFullYear()} Dr. Gupta’s Smiles Forever. All rights reserved. | Designed with ❤️ for healthy smiles.
    </div>
  </footer>
)