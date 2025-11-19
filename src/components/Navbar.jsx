import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/booking', label: 'Online Booking' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-ivory/80 border-b border-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-teal text-ivory grid place-items-center shadow-sm shadow-teal/30">
              <span className="font-semibold">M</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm tracking-widest uppercase text-teal/80">Monter</div>
              <div className="font-semibold text-neutral-800">Medical Skin Care</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-teal' : 'text-neutral-700 hover:text-teal'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/booking"
              className="inline-flex items-center rounded-full bg-teal text-ivory px-4 py-2 text-sm shadow-sm hover:shadow-md hover:brightness-105 transition-all"
            >
              Book Appointment
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-neutral-200/60" aria-label="Toggle Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-teal/10 bg-ivory">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-2 rounded-md ${isActive ? 'text-teal bg-teal/5' : 'text-neutral-800 hover:bg-neutral-200/60'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full bg-teal text-ivory px-4 py-2 text-sm shadow-sm hover:shadow-md transition-all"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
