export default function StaticPage({ title, children }){
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <div className="mt-6 text-blue-100/90 space-y-4">
          {children}
        </div>
      </div>
    </div>
  )
}
