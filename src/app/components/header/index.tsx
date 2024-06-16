'use client'

import { useState } from 'react'
import './styles.css'
import Link from 'next/link'
import Image from 'next/image'
import { Logo2 } from '@/assets'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex h-12 w-full items-center justify-center bg-zinc-900 shadow-sm md:h-20">
      <div className="centralized-container">
        <div className="flex h-full w-full items-center justify-between">
          <Image
            alt="Logotipo Lopes Codes"
            src={Logo2}
            className="w-20 md:w-32"
            quality={100}
          />

          <div className="md:hidden">
            <button
              className="flex h-7 w-8 flex-col items-center justify-between rounded-sm p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`h-[.125rem] w-full rounded-sm bg-white ${isOpen && 'translate-y-3 rotate-45'} transition-all duration-300`}
              />
              <span
                className={`h-[.125rem] w-full rounded-sm bg-white ${isOpen && 'opacity-0'} transition-all duration-300`}
              />
              <span
                className={`h-[.125rem] w-full rounded-sm bg-white ${isOpen && '-translate-y-1.5 -rotate-45'} transition-all duration-300`}
              />
            </button>

            <nav
              className={`absolute left-0 top-12 flex transition-all duration-200 ease-out [&>*]:transition-all ${isOpen ? 'h-96 p-3 [&>*]:opacity-100' : 'h-0 p-0 [&>*]:opacity-0'} w-full flex-col items-center justify-between gap-6 bg-zinc-900 font-sans text-lg font-semibold text-white duration-300`}
              onClick={() => setIsOpen(false)}
            >
              <Link href="#about">Sobre</Link>

              <Link href="#knowledge">Conhecimentos</Link>

              <Link href="#projects">Projetos</Link>

              <Link href="#">Contato</Link>
            </nav>
          </div>

          <nav className="hidden gap-6 font-sans text-lg font-semibold text-zinc-300 md:flex">
            <Link href="#about" className="nav-item">
              Sobre
            </Link>

            <Link href="#knowledge" className="nav-item">
              Conhecimentos
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
