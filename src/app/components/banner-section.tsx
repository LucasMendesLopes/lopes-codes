'use client'

import { motion } from 'framer-motion'

export function BannerSection() {
  return (
    <section
      id="banner"
      className="flex h-[30rem] w-full items-center justify-center sm:h-[calc(100vh-6rem)]"
    >
      <div className="centralized-container">
        <div className="flex max-w-[45rem] flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <h1 className="text-xl font-semibold text-white sm:text-3xl md:text-4xl">
              Meu nome é Lucas Mendes lopes,
            </h1>

            <span className="text-xl font-semibold text-white sm:text-3xl md:text-4xl">
              sou{' '}
              <span className="text-primary-blue">
                {'<Desenvolvedor Frontend/>'}
              </span>
            </span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            className="text-zinc-300 sm:text-lg"
          >
            Transformo ideias em projetos inovadores que fazem a diferença.
            Minha experiência em desenvolvimento web me capacita a criar
            soluções que se destacam. Estou preparado para contribuir com sua
            equipe e impulsionar o sucesso da sua empresa através de soluções
            digitais impactantes.
          </motion.span>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            href="#about"
            className="w-full rounded-2xl border border-primary-blue p-4 text-center text-lg
                font-semibold text-white duration-300 sm:w-72
                lg:hover:border-white lg:hover:text-primary-blue"
          >
            Saiba mais
          </motion.a>
        </div>
      </div>
    </section>
  )
}
