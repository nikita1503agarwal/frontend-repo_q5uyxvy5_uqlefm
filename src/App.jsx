import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Doctors from './components/Doctors'
import Steps from './components/Steps'
import ScheduleCTA from './components/ScheduleCTA'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Highlights />
      <Doctors />
      <Steps />
      <ScheduleCTA />
      <Newsletter />
      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-blue-200/70 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Cannabis & Saúde – Conteúdo informativo. Não substitui consulta médica.</p>
            <nav className="flex gap-6">
              <a href="/privacy" className="hover:text-white">Política de Privacidade</a>
              <a href="/terms" className="hover:text-white">Termos de Uso</a>
              <a href="/lgpd" className="hover:text-white">LGPD</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App