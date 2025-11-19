import { useEffect, useState } from 'react'

export default function Test(){
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  useEffect(()=>{
    const run = async()=>{
      const res = await fetch(`${baseUrl}/test`)
      const data = await res.json()
      setStatus(data)
    }
    run()
  },[])

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Diagnóstico</h1>
      <pre className="bg-white/5 p-4 rounded-lg overflow-auto text-sm">{JSON.stringify(status, null, 2)}</pre>
      <div className="mt-6 space-x-3">
        <a href="/sitemap.xml" className="text-blue-300 underline">Sitemap</a>
        <a href="/robots.txt" className="text-blue-300 underline">Robots</a>
      </div>
    </div>
  )
}
