'use client'

import { motion } from 'framer-motion'

export function BannerSection() {
  return (
    <section
      id="banner"
      className="flex h-[30rem] w-full items-center justify-center bg-zinc-800 sm:h-[calc(100vh-5rem)]"
    >
      <div className="centralized-container lg:pb-4">
        <div className="flex max-w-[45rem] flex-col gap-8">
          <motion.h1
            className="text-xl font-semibold text-primary-blue sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            {'<Desenvolvedor Frontend/>'}
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            className="text-white sm:text-lg"
          >
            Meu nome é Lucas Mendes Lopes, transformo ideias em projetos
            inovadores que fazem a diferença. Minha experiência em
            desenvolvimento web me capacita a criar soluções que se destacam.
            Estou preparado para contribuir e impulsionar através de soluções
            digitais impactantes.
          </motion.span>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            href="#about"
            className="w-full rounded-2xl border-2 border-primary-blue p-4 text-center text-lg font-semibold
                text-white duration-300 sm:w-72 lg:hover:scale-105
                lg:hover:border-white lg:hover:text-primary-blue"
          >
            Saiba mais
          </motion.a>
        </div>
      </div>
    </section>
  )
}
