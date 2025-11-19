import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-teal text-ivory grid place-items-center shadow-sm">
              <span className="font-semibold">M</span>
            </div>
            <div className="text-left">
              <div className="text-sm tracking-widest uppercase text-teal/80">Monter</div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900">Medical Skin Care</h1>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-neutral-700 leading-relaxed">
            Advanced, gentle treatments for healthy, luminous skin. Calm, clinical, and always client-first.
          </p>

          <div className="flex justify-center gap-3 mt-8">
            <Link to="/booking" className="rounded-full bg-teal text-ivory px-6 py-3 text-sm shadow-sm hover:shadow-md transition-all">Book Appointment</Link>
            <Link to="/services" className="rounded-full border border-teal/30 text-neutral-800 px-6 py-3 text-sm hover:border-teal hover:text-teal transition-all">Explore Services</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
