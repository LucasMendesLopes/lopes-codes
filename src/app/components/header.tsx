export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-12 w-full items-center justify-center bg-slate-950 shadow-sm md:h-20">
      <div className="container items-center">
        <a href="#" className="text-lg font-semibold text-white">
          LOGO
        </a>

        <nav className="md:hidden">
          <button className="flex size-4 items-center justify-center rounded-sm border border-white text-center">
            <p className="text-white">...</p>
          </button>
        </nav>

        <nav className="hidden gap-6 font-sans text-lg font-semibold text-white md:flex">
          <a href="#about" className="hover:text-cyan-300">
            Sobre
          </a>

          <a
            href="#tecnologies"
            className="hover:text-cyan-300 active:text-cyan-300"
          >
            Tecnologias
          </a>

          <a href="#projects" className="hover:text-cyan-300">
            Projetos
          </a>

          <a href="#contact" className="hover:text-cyan-300">
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}
