function Steps() {
  const steps = [
    { title: 'Avaliação', desc: 'Entenda se o seu caso é elegível para tratamento com Cannabis.' },
    { title: 'Consulta', desc: 'Escolha um médico e agende online (telemedicina ou presencial).' },
    { title: 'Laudo & Prescrição', desc: 'Receba orientação segura e personalizada.' },
    { title: 'Acesso Legal', desc: 'Importação ou aquisição conforme regulamentação da ANVISA.' },
  ]

  return (
    <section id="steps" className="py-16 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Como ter acesso legal ao tratamento</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-bold text-blue-300/90">{i+1}</div>
              <h3 className="text-white font-semibold mt-2">{s.title}</h3>
              <p className="text-blue-100/80 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
