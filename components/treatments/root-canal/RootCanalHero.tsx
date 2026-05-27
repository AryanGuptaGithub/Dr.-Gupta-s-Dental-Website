"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ShieldCheckIcon, ClockIcon } from "@heroicons/react/24/outline";

export const RootCanalHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-white to-mint-fresh/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Root Canal Treatment Mumbai
            </p>
            <h1 className="font-serif text-h1 text-teal mb-6">
              Painless Root Canal — <br />
              <span className="text-gold">Save Your Tooth in One Visit</span>
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed mb-8">
              Think root canals are painful? Think again. With modern microscope
              dentistry and advanced anesthesia, our patients feel nothing — and
              walk out with their natural tooth saved.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheckIcon className="w-5 h-5 text-teal" />
                <span className="text-charcoal">100% Painless Promise</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ClockIcon className="w-5 h-5 text-gold" />
                <span className="text-charcoal">Single Sitting RCT</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary-gold" href="/book-appointment">
                Book Emergency Appointment
              </Button>
              <Button variant="outline-teal" href="tel:+919XXXXXXXXX">
                Call Now for Pain Relief
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-card-hover">
              <Image
                src="/images/painless-rct.png"
                alt="Painless root canal treatment under dental microscope in Mumbai"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
