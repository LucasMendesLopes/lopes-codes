'use client'

import { ArrowUp } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="relative flex h-16 w-full items-center justify-center border-t border-zinc-600 text-center">
      <div className="centralized-container flex items-center justify-between sm:block">
        <span className="text-white">2024 © Todos os direitos reservados</span>

        <button
          onClick={() => {
            history.pushState({}, '', '/')
            window.scrollTo({ top: 0 })
          }}
          className="group/button flex size-10 items-center justify-center rounded-lg border border-primary-blue text-white sm:absolute sm:right-10 sm:top-1/2 sm:-translate-y-1/2"
        >
          <ArrowUp
            size={20}
            className="duration-300 ease-out lg:group-hover/button:-translate-y-1 lg:group-hover/button:fill-primary-blue"
          />
        </button>
      </div>
    </footer>
  )
}
