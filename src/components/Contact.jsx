import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <main className="bg-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-6">Contact</motion.h1>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 rounded-2xl border border-teal/10 bg-white/60 backdrop-blur p-6">
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">Full Name</label>
                  <input className="w-full rounded-lg border border-teal/20 bg-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-teal/40"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">Email</label>
                  <input type="email" className="w-full rounded-lg border border-teal/20 bg-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-teal/40"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-1">Message</label>
                <textarea rows={5} className="w-full rounded-lg border border-teal/20 bg-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-teal/40"/>
              </div>
              <button className="rounded-full bg-teal text-ivory px-6 py-3 text-sm shadow-sm hover:shadow-md transition-all">Send Message</button>
            </form>
          </div>
          <aside className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-teal/10 bg-white/60 backdrop-blur p-6">
              <div className="font-medium text-neutral-900 mb-2">Visit us</div>
              <div className="flex items-start gap-3 text-neutral-700 text-sm mb-2"><MapPin className="w-5 h-5 text-teal"/> 123 Calm Street, Suite 4B, City</div>
              <div className="flex items-center gap-3 text-neutral-700 text-sm mb-2"><Phone className="w-5 h-5 text-teal"/> (555) 123-4567</div>
              <div className="flex items-center gap-3 text-neutral-700 text-sm"><Mail className="w-5 h-5 text-teal"/> hello@monterclinic.com</div>
            </div>
            <div className="rounded-2xl border border-teal/10 bg-teal text-ivory p-6">
              <div className="font-medium mb-2">Office Hours</div>
              <div className="text-sm space-y-1 opacity-90">
                <div>Mon–Fri: 9:00 – 17:30</div>
                <div>Sat: 10:00 – 14:00</div>
                <div>Sun: Closed</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-teal/10">
              <iframe title="map" src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-56"></iframe>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
