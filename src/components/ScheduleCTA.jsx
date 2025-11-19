import { useState } from 'react'

function ScheduleCTA() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      patient_name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      pathology: form.get('pathology'),
      consultation_type: form.get('type'),
      preferred_dates: form.get('dates') ? String(form.get('dates')).split(',').map(s=>s.trim()) : [],
      state: form.get('state') || undefined,
      city: form.get('city') || undefined,
      notes: form.get('notes') || undefined,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/appointment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true, id: data.id })
      else setStatus({ ok: false, message: data.detail || 'Falha ao enviar' })
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
      e.currentTarget.reset()
    }
  }

  return (
    <section id="schedule" className="py-16 bg-gradient-to-b from-slate-900/60 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Agende sua consulta</h2>
            <p className="text-blue-100/90 mt-2">Telemedicina e atendimento presencial. A partir de R$ 200,00.</p>
            <ul className="mt-6 text-blue-100/80 space-y-2 list-disc list-inside">
              <li>Mais de 250 médicos prescritores</li>
              <li>Filtros por especialidade, localização e patologia</li>
              <li>Atendimento humanizado e seguro</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Seu nome" className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200/70 border border-white/10" />
              <input name="email" type="email" required placeholder="E-mail" className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200/70 border border-white/10" />
              <input name="phone" required placeholder="Telefone/WhatsApp" className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200/70 border border-white/10" />
              <input name="pathology" required placeholder="Patologia (ex: Dor crônica)" className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200/70 border border-white/10" />
              <select name="type" className="px-4 py-3 rounded-lg bg-white/10 text-white border border-white/10">
                <option value="telemedicine">Telemedicina</option>
                <option value="in-person">Presencial</option>
              </select>
              <input name="dates" placeholder="Datas preferidas (separadas por vírgula)" className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200/70 border border-white/10" />
              <input name="state" placeholder="Estado" className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200/70 border border-white/10" />
              <input name="city" placeholder="Cidade" className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200/70 border border-white/10" />
            </div>
            <textarea name="notes" placeholder="Observações" className="mt-4 w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-blue-200/70 border border-white/10" rows="3"></textarea>
            <button disabled={loading} className="mt-4 inline-flex px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition disabled:opacity-60">
              {loading ? 'Enviando...' : 'Enviar pré-agendamento'}
            </button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-green-300' : 'text-red-300'}`}>
                {status.ok ? 'Recebemos seu pedido! Em breve entraremos em contato.' : status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ScheduleCTA
