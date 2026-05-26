'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const DoctorStory = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-5 gap-16 items-center">
        {/* Small image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
            <Image
              src="https://thumbs.dreamstime.com/b/male-dentist-medical-treatment-to-female-patient-clinic-young-confident-asian-male-dentist-medical-treatment-to-female-108670797.jpg"
              alt="Dr. Gupta at his dental clinic in Mumbai"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </motion.div>

        {/* Story text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3"
        >
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">My Story</p>
          <h2 className="font-serif text-h2 text-teal mb-8">
            From Precision to Passion —<br />
            <span className="text-gold">A Journey of 20+ Years</span>
          </h2>
          
          <div className="space-y-5 text-warm-grey leading-relaxed">
            <p>
              I completed my BDS and MDS from the prestigious Government Dental College, Mumbai, 
              where I developed a deep appreciation for the art and science of restorative dentistry. 
              My fascination with dental implants led me to pursue advanced training in Germany, 
              where I mastered the latest implant systems and 3D-guided surgical techniques.
            </p>
            <p>
              But what truly shaped my practice wasn't just the technology — it was understanding 
              the fear and anxiety that so many patients carry. I've made it my mission to create 
              an experience where patients feel genuinely cared for, not just treated.
            </p>
            <p>
              Today, Smiles Forever stands as a testament to that philosophy. Every smile we 
              transform, every implant we place, and every anxious patient who leaves with 
              newfound confidence — that's what keeps me going after all these years.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-8">
            <p className="font-serif text-2xl text-teal">— Dr. Gupta</p>
            <p className="text-warm-grey text-sm">MDS, Fellow in Implantology</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}