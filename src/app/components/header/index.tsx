'use client'

import { useState } from 'react'
import './styles.css'
import Link from 'next/link'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex h-12 w-full items-center justify-center bg-[#1C1C1C] shadow-sm md:h-20">
      <div className="centralized-container">
        <div className="flex h-full w-full items-center justify-between">
          <span className="text-lg font-semibold text-white">LOGO</span>

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
              <Link href="#about">Sobre</Link>

              <Link href="#tecnologies">Tecnologias</Link>

              <Link href="#projects">Projetos</Link>

              <Link href="#">Contato</Link>
            </nav>
          </div>

          <nav className="hidden gap-6 font-sans text-lg font-semibold text-zinc-300 md:flex">
            <Link href="#about" className="nav-item">
              Sobre
            </Link>

            <Link href="#tecnologies" className="nav-item">
              Tecnologias
            </Link>

            <Link href="#projects" className="nav-item">
              Projetos
            </Link>

            <Link href="" className="nav-item">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
