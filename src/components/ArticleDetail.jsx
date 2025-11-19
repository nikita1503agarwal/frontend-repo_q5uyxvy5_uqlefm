import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ArticleDetail(){
  const { slug } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const load = async()=>{
      try{
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/articles/${slug}`)
        if(res.ok){
          const data = await res.json()
          setItem(data)
          // Update SEO tags
          document.title = `${data.title} | Cannabis & Saúde`
          const desc = data.summary || 'Artigo do portal Cannabis & Saúde'
          let meta = document.querySelector('meta[name="description"]')
          if(!meta){
            meta = document.createElement('meta')
            meta.setAttribute('name','description')
            document.head.appendChild(meta)
          }
          meta.setAttribute('content', desc)
        }
      } finally {
        setLoading(false)
      }
    }
    load()
  },[slug])

  if(loading) return <div className="min-h-screen bg-slate-950 text-blue-100/80 p-8">Carregando...</div>
  if(!item) return <div className="min-h-screen bg-slate-950 text-blue-100/80 p-8">Conteúdo não encontrado.</div>

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-xs text-blue-200/80"><a href="/">Home</a> / <a href="/articles">Artigos</a> / {item.category || 'Conteúdo'}</div>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">{item.title}</h1>
        {item.author && <div className="text-blue-200/80 mt-1 text-sm">Por {item.author}</div>}
        {item.published_at && <div className="text-blue-200/70 text-xs">{new Date(item.published_at).toLocaleDateString('pt-BR')}</div>}
        {item.cover_image && <img src={item.cover_image} alt="" className="rounded-xl mt-6 aspect-video object-cover" />}
        {item.summary && <p className="mt-6 text-blue-100/90 text-lg">{item.summary}</p>}
        {item.content && <article className="prose prose-invert prose-slate max-w-none mt-6" dangerouslySetInnerHTML={{__html: item.content}} />}
      </div>
    </div>
  )
}
