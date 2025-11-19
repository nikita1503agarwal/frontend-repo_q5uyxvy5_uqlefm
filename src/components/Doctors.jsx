import { useEffect, useState } from 'react'

function Doctors() {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/doctors?limit=6`)
        const data = await res.json()
        setDoctors(Array.isArray(data) ? data : [])
      } catch (e) {
        setDoctors([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="doctors" className="py-16 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Médicos em destaque</h2>
            <p className="text-blue-100/80 mt-1">Encontre especialistas por especialidade, localização, patologia e preço</p>
          </div>
          <a href="#schedule" className="text-blue-300 hover:text-white">Ver todos</a>
        </div>
        {loading ? (
          <p className="text-blue-100/80">Carregando...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((d, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-4">
                  <img src={d.photo_url || 'https://i.pravatar.cc/100?img=' + (i+10)} alt={d.name} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <h3 className="text-white font-semibold">{d.name}</h3>
                    <p className="text-blue-200/80 text-sm">{(d.specialties||[]).join(', ')}</p>
                  </div>
                </div>
                <div className="mt-4 text-blue-100/80 text-sm space-y-1">
                  <p>Atende: {(d.consultation_types||[]).join(' • ') || '—'}</p>
                  <p>Localidades: {(d.cities||[]).slice(0,2).join(', ') || (d.states||[]).slice(0,2).join(', ') || 'Brasil'}</p>
                  {d.price_from != null && <p>Desde R$ {Number(d.price_from).toFixed(2)}</p>}
                </div>
                <div className="mt-4">
                  <a href="#schedule" className="inline-flex px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition">Agendar</a>
                </div>
              </div>
            ))}
            {doctors.length === 0 && (
              <div className="col-span-full text-blue-200/80">Nenhum médico cadastrado ainda.</div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Doctors
