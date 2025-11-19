import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { ServiceHighlights, TrustElements, CTA } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-ivory text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <ServiceHighlights />
        <TrustElements />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
