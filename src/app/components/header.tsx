'use client'

import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex h-12 w-full items-center justify-center bg-[#1C1C1C] shadow-sm md:h-20">
      <div className="container items-center">
        <a href="#" className="text-lg font-semibold text-white">
          LOGO
        </a>

        <div className="md:hidden">
          <button
            className="flex size-6 flex-col items-center justify-between rounded-sm border border-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="h-[.125rem] w-full rounded-sm bg-white"></span>
            <span className="h-[.125rem] w-full rounded-sm bg-white"></span>
            <span className="h-[.125rem] w-full rounded-sm bg-white"></span>
          </button>

          <nav
            className={`absolute left-0 top-12 flex transition-all duration-200 ease-out [&>*]:transition-all ${isOpen ? 'h-96 p-3 [&>*]:opacity-100' : 'h-0 p-0 [&>*]:opacity-0'} w-full flex-col items-center justify-between gap-6 bg-[#1C1C1C] font-sans text-lg font-semibold text-white`}
            onClick={() => setIsOpen(false)}
          >
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
