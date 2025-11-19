import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="bg-ivory">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-6">About Me</motion.h1>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.1}} className="aspect-[4/5] rounded-2xl bg-neutral-200/50 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-tr from-neutral-200 to-white grid place-items-center text-neutral-500">Portrait</div>
          </motion.div>
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.15}} className="space-y-4 text-neutral-700 leading-relaxed">
            <p>
              I’m a medical-aesthetic practitioner specializing in gentle, results-driven skin treatments. My approach blends clinical rigor with a warm, supportive experience.
            </p>
            <p>
              Certifications include laser safety, micropigmentation, and advanced skincare. I invest in ongoing training and only use vetted, medical-grade technologies.
            </p>
            <p>
              Every treatment begins with a calm, thorough consultation. We’ll align on goals, comfort, and aftercare—so you feel confident at every step.
            </p>
            <div className="rounded-xl border border-teal/10 bg-white/70 p-4">
              <div className="font-medium text-neutral-900 mb-2">Credentials & Values</div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Certified in laser safety and micropigmentation</li>
                <li>Clean, sterile environment with strict protocols</li>
                <li>Evidence-based products and techniques</li>
                <li>Transparent pricing and expectations</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
