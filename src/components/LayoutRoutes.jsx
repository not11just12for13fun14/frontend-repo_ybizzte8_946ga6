import { Routes, Route } from 'react-router-dom'
import App from '../App'
import About from './About'
import Services from './Services'
import Booking from './Booking'
import Contact from './Contact'

export default function LayoutRoutes(){
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
