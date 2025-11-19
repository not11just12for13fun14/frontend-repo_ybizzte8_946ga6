import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Sparkles, Microscope, Calendar, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ServiceHighlights() {
  const services = [
    {
      title: 'Laser Hair Removal',
      desc: 'Safe, effective, and tailored to your skin for long-lasting smoothness.',
    },
    {
      title: 'Permanent Makeup',
      desc: 'Natural, refined enhancements for brows, lips, and lash line.',
    },
    {
      title: 'Cosmetic Treatments',
      desc: 'Targeted, science-backed solutions for texture, tone, and glow.',
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-8">Signature Services</motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5, delay:i*0.05}} className="rounded-2xl border border-teal/10 bg-white/60 backdrop-blur p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-teal/10 grid place-items-center mb-3"><Sparkles className="text-teal"/></div>
              <div className="font-medium text-neutral-900">{s.title}</div>
              <p className="text-sm text-neutral-700 mt-1 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TrustElements() {
  const items = [
    { icon: ShieldCheck, title: 'Medical-Grade Hygiene', desc: 'Sterile protocol and single-use disposables.' },
    { icon: Microscope, title: 'Certified Expertise', desc: 'Accredited training and continuous education.' },
    { icon: CheckCircle2, title: 'Modern Technology', desc: 'FDA-cleared devices and premium formulations.' },
  ]

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5, delay:i*0.05}} className="rounded-2xl border border-teal/10 bg-white/70 backdrop-blur p-6">
              <it.icon className="text-teal w-6 h-6 mb-3" />
              <div className="font-medium text-neutral-900">{it.title}</div>
              <p className="text-sm text-neutral-700 mt-1 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-10">
          <Link to="/booking" className="rounded-full bg-teal text-ivory px-6 py-3 text-sm shadow-sm hover:shadow-md transition-all">Book Appointment</Link>
          <Link to="/services" className="rounded-full border border-teal/30 text-neutral-800 px-6 py-3 text-sm hover:border-teal hover:text-teal transition-all">Explore Services</Link>
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-teal text-ivory p-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="text-2xl font-semibold">Begin your skin journey</div>
            <p className="text-teal-50/90 mt-2">Simple online booking. Clear preparation guidance. Welcoming care.</p>
          </div>
          <div className="md:justify-self-end flex gap-3">
            <Link to="/booking" className="rounded-full bg-ivory text-teal px-6 py-3 text-sm shadow-sm hover:shadow-md transition-all">Book Now</Link>
            <Link to="/contact" className="rounded-full bg-teal/20 text-ivory px-6 py-3 text-sm hover:bg-teal/30 transition-all">Ask a Question</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
