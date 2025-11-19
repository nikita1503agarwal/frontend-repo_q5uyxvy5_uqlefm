function Highlights() {
  const items = [
    { title: 'Guia completo de patologias', desc: 'Entenda como a Cannabis pode auxiliar no tratamento de mais de 40 condições', href: '#'},
    { title: 'Pesquisas e evidências', desc: 'Estudos científicos e revisões sobre eficácia e segurança', href: '#'},
    { title: 'Histórias de pacientes', desc: 'Relatos reais de quem transformou a qualidade de vida', href: '#'},
  ];

  return (
    <section id="highlights" className="relative z-10 py-16 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <a key={i.title} href={i.href} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:underline">{i.title}</h3>
              <p className="text-blue-100/80 text-sm">{i.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
