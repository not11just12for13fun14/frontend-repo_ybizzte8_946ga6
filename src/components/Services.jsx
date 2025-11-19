import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Clock, HelpCircle } from 'lucide-react'

const Section = ({ title, children }) => (
  <section className="py-10 border-b border-teal/10 last:border-0">
    <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
)

const FAQ = ({ q, a }) => (
  <div className="rounded-lg border border-teal/10 p-4 bg-white/70">
    <div className="flex items-start gap-3">
      <HelpCircle className="w-5 h-5 text-teal mt-0.5"/>
      <div>
        <div className="font-medium text-neutral-900">{q}</div>
        <p className="text-sm text-neutral-700 mt-1 leading-relaxed">{a}</p>
      </div>
    </div>
  </div>
)

export default function Services() {
  return (
    <main className="bg-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-6">Services</motion.h1>
        <div className="rounded-2xl border border-teal/10 bg-white/60 backdrop-blur p-6">
          <Section title="Laser Hair Removal">
            <p className="text-neutral-700">Medical-grade devices for smooth, long-term results with minimal discomfort.</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[{t:'Precision',i:Sparkles},{t:'Safety',i:ShieldCheck},{t:'Time-efficient',i:Clock}].map(({t,i:Icon})=> (
                <div key={t} className="rounded-lg border border-teal/10 p-4 bg-white/70 flex items-center gap-3"><Icon className="text-teal"/> <div className="text-sm font-medium">{t}</div></div>
              ))}
            </div>
            <div className="text-sm text-neutral-700">Pricing: Small area from $49 • Medium from $89 • Large from $149</div>
            <FAQ q="Is it painful?" a="Most clients describe a brief, warm sensation. We tailor settings to your comfort."/>
          </Section>

          <Section title="Permanent Makeup">
            <p className="text-neutral-700">Natural-looking brows, lips, and lash enhancements tailored to your features.</p>
            <div className="text-sm text-neutral-700">Pricing: Brows from $350 • Lips from $420 • Lash line from $250</div>
            <FAQ q="How long does it last?" a="Typically 1–3 years depending on skin type and aftercare."/>
          </Section>

          <Section title="Facial & Skincare Treatments">
            <p className="text-neutral-700">Customized facials, peels, and targeted treatments to renew skin health.</p>
            <div className="text-sm text-neutral-700">Pricing: Express from $75 • Signature from $120 • Advanced from $180</div>
            <FAQ q="Which facial is right for me?" a="We’ll assess your skin and goals during consultation to recommend the best plan."/>
          </Section>

          <Section title="Before & After Gallery">
            <div className="grid sm:grid-cols-3 gap-3">
              {[1,2,3,4,5,6].map((n)=> (
                <motion.div key={n} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:.6}} className="aspect-[4/3] rounded-lg bg-neutral-200/60" />
              ))}
            </div>
          </Section>
        </div>
      </div>
    </main>
  )
}
