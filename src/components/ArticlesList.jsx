import { useEffect, useState } from 'react'

export default function ArticlesList(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('')

  useEffect(()=>{
    const load = async()=>{
      try{
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const params = new URLSearchParams()
        if(q) params.append('q', q)
        if(category) params.append('category', category)
        const res = await fetch(`${baseUrl}/articles?${params.toString()}`)
        const data = await res.json()
        setItems(Array.isArray(data)?data:[])
      }catch{
        setItems([])
      }finally{
        setLoading(false)
      }
    }
    load()
  },[q, category])

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar artigos" className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-blue-200/70 border border-white/10" />
          <select value={category} onChange={e=>setCategory(e.target.value)} className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/10">
            <option value="">Todas categorias</option>
            <option>Tratamentos</option>
            <option>Pesquisa</option>
            <option>Regulamentação</option>
            <option>Casos de Pacientes</option>
          </select>
        </div>
        {loading ? (
          <p className="text-blue-100/80">Carregando...</p>
        ) : items.length === 0 ? (
          <p className="text-blue-100/80">Nenhum conteúdo publicado ainda.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((a, i)=> (
              <a key={i} href={`/articles/${a.slug}`} className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-4">
                {a.cover_image && <img src={a.cover_image} alt={a.title} className="rounded-lg mb-3 aspect-video object-cover" />}
                <div className="text-xs text-blue-200/80">{a.category || 'Conteúdo'}</div>
                <h3 className="text-white font-semibold mt-1">{a.title}</h3>
                {a.summary && <p className="text-blue-100/80 text-sm mt-1 line-clamp-2">{a.summary}</p>}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
