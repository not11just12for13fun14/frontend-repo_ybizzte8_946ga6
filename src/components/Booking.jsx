import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const SERVICES = [
  { id: 'laser-small', name: 'Laser Hair Removal - Small Area', duration: 30 },
  { id: 'laser-medium', name: 'Laser Hair Removal - Medium Area', duration: 45 },
  { id: 'pmu-brows', name: 'Permanent Makeup - Brows', duration: 90 },
  { id: 'facial-signature', name: 'Facial - Signature', duration: 60 },
]

const times = ['09:00','10:00','11:00','12:00','13:30','15:00','16:30']

export default function Booking() {
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const selected = useMemo(() => SERVICES.find(s => s.id === service), [service])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-6">Online Booking</motion.h1>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 rounded-2xl border border-teal/10 bg-white/60 backdrop-blur p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">Select Service</label>
                  <select value={service} onChange={(e)=>setService(e.target.value)} required className="w-full rounded-lg border border-teal/20 bg-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-teal/40">
                    <option value="" disabled>Select…</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                  {selected && (<p className="text-xs text-neutral-600 mt-1">Estimated duration: {selected.duration} minutes</p>)}
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-neutral-800 mb-1">Date</label>
                    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} required className="w-full rounded-lg border border-teal/20 bg-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-teal/40"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-800 mb-1">Time</label>
                    <select value={time} onChange={(e)=>setTime(e.target.value)} required className="w-full rounded-lg border border-teal/20 bg-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-teal/40">
                      <option value="" disabled>Select…</option>
                      {times.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-neutral-800 mb-1">Full Name</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} required className="w-full rounded-lg border border-teal/20 bg-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-teal/40"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-800 mb-1">Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full rounded-lg border border-teal/20 bg-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-teal/40"/>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">Notes / Preparation</label>
                  <textarea value={notes} onChange={(e)=>setNotes(e.target.value)} rows={4} className="w-full rounded-lg border border-teal/20 bg-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-teal/40" placeholder="Allergies, sensitivities, or questions"/>
                  <p className="text-xs text-neutral-600 mt-1">Please arrive with clean skin, avoid active retinoids 48h before treatments.</p>
                </div>

                <button className="rounded-full bg-teal text-ivory px-6 py-3 text-sm shadow-sm hover:shadow-md transition-all">Confirm Booking</button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="text-xl font-medium text-neutral-900 mb-2">Thank you!</div>
                <p className="text-neutral-700">We’ve reserved your slot and sent a confirmation email with preparation tips.</p>
              </div>
            )}
          </div>

          <aside className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-teal/10 bg-white/60 backdrop-blur p-6">
              <div className="font-medium text-neutral-900 mb-2">How it works</div>
              <ol className="list-decimal pl-5 text-sm text-neutral-700 space-y-1">
                <li>Choose a service and time</li>
                <li>Share contact details</li>
                <li>Receive email confirmation</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-teal/10 bg-white/60 backdrop-blur p-6">
              <div className="font-medium text-neutral-900 mb-2">Preparation tips</div>
              <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1">
                <li>Arrive with clean, product-free skin</li>
                <li>Avoid sun exposure and tanning 1 week prior</li>
                <li>Discontinue active acids/retinoids 48 hours before</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
