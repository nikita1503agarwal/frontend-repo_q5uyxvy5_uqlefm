import { Menu, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Portal Cannabis Medicinal" className="h-8 w-8" />
          <span className="text-white font-semibold">Cannabis & Saúde</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/90">
          <a href="#news" className="hover:text-white transition">Notícias</a>
          <a href="#doctors" className="hover:text-white transition">Médicos</a>
          <a href="#steps" className="hover:text-white transition">Como começar</a>
          <a href="#schedule" className="text-blue-300 hover:text-white transition">Agende sua consulta</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-white/10 text-white hover:bg-white/15 transition">
            <Search size={16} />
            Buscar
          </button>
          <button className="md:hidden text-white/90">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
