import { Link } from 'react-router-dom'
import { Instagram, Facebook, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-teal/10 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-teal text-ivory grid place-items-center shadow-sm">
              <span className="font-semibold">M</span>
            </div>
            <div className="font-semibold text-neutral-800">Monter Medical Skin Care</div>
          </div>
          <p className="text-neutral-600 text-sm leading-relaxed">
            Calm, clinical, and caring. Evidence-based treatments delivered with a gentle touch.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-neutral-900 font-medium">Explore</div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link to="/services" className="text-neutral-700 hover:text-teal">Services</Link>
            <Link to="/about" className="text-neutral-700 hover:text-teal">About</Link>
            <Link to="/booking" className="text-neutral-700 hover:text-teal">Book</Link>
            <Link to="/contact" className="text-neutral-700 hover:text-teal">Contact</Link>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-neutral-900 font-medium">Get in touch</div>
          <div className="flex items-center gap-3 text-neutral-700 text-sm"><Phone className="w-4 h-4"/> (555) 123-4567</div>
          <div className="flex items-center gap-3 text-neutral-700 text-sm"><Mail className="w-4 h-4"/> hello@monterclinic.com</div>
          <div className="flex gap-4 pt-2">
            <a href="#" aria-label="Instagram" className="text-neutral-700 hover:text-teal"><Instagram/></a>
            <a href="#" aria-label="Facebook" className="text-neutral-700 hover:text-teal"><Facebook/></a>
          </div>
          <Link to="/booking" className="inline-flex mt-4 items-center rounded-full bg-teal text-ivory px-4 py-2 text-sm shadow-sm hover:shadow-md transition-all">Book Appointment</Link>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 py-6 border-t border-teal/10">
        © {new Date().getFullYear()} Monter Medical Skin Care • All rights reserved • Privacy • Terms
      </div>
    </footer>
  )
}
