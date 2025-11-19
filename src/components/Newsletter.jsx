import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, interests: ['Notícias', 'Tratamentos'] })
      })
      setSent(res.ok)
      setEmail('')
    } catch {
      setSent(false)
    }
  }

  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 p-8 md:p-10">
          <div className="md:flex items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-white text-2xl font-bold">Assine nossa newsletter</h3>
              <p className="text-blue-100/90 mt-2">Receba conteúdos, estudos e novidades sobre regulamentação.</p>
            </div>
            <form onSubmit={subscribe} className="mt-6 md:mt-0 flex w-full md:w-auto gap-3">
              <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Seu e-mail" className="flex-1 md:w-80 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200/70 border border-white/10" />
              <button className="px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">Inscrever</button>
            </form>
          </div>
          {sent != null && (
            <p className={`mt-3 text-sm ${sent ? 'text-green-300' : 'text-red-300'}`}>
              {sent ? 'Inscrição confirmada!' : 'Falha ao inscrever, tente novamente.'}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
