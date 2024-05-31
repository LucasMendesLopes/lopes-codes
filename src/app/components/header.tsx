export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-12 w-full items-center justify-center bg-[#1C1C1C] shadow-sm md:h-20">
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
          <a
            href="#about"
            className="inline-block after:block after:origin-left after:scale-x-0 after:border-b-2 after:border-[#8685EF] after:transition-transform after:content-[''] hover:after:scale-x-100"
          >
            Sobre
          </a>

          <a
            href="#tecnologies"
            className="inline-block after:block after:origin-left after:scale-x-0 after:border-b-2 after:border-[#8685EF] after:transition-transform after:content-[''] hover:after:scale-x-100"
          >
            Tecnologias
          </a>

          <a
            href="#projects"
            className="inline-block after:block after:origin-left after:scale-x-0 after:border-b-2 after:border-[#8685EF] after:transition-transform after:content-[''] hover:after:scale-x-100"
          >
            Projetos
          </a>

          <a
            href="#contact"
            className="inline-block after:block after:origin-left after:scale-x-0 after:border-b-2 after:border-[#8685EF] after:transition-transform after:content-[''] hover:after:scale-x-100"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}
