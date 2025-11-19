import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative pt-24" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-transparent pointer-events-none"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-blue-300/80 bg-blue-500/10 ring-1 ring-blue-500/20 px-3 py-1 rounded-full mb-6">O maior portal de Cannabis Medicinal do Brasil</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Informação confiável e atendimento médico em um só lugar
          </h1>
          <p className="mt-6 text-blue-100/90 text-lg">
            Educação, notícias, estudos clínicos e um diretório com mais de 250 médicos prescritores. Agende sua consulta online a partir de R$ 200,00.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#schedule" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">Agendar consulta</a>
            <a href="#news" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/15 transition">Ler conteúdos</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;