'use client'

import { motion } from 'framer-motion'

import './styles.css'

export function BannerSection() {
  const buttonContainerAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  }

  const buttonAnim = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="flex h-[30rem] w-full items-center justify-center bg-zinc-800 sm:h-[calc(100vh-5rem)]">
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

          <motion.div
            variants={buttonContainerAnim}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-5 sm:flex-row sm:gap-10"
          >
            <motion.a
              variants={buttonAnim}
              href="#about"
              className="banner-button"
            >
              Saiba mais
            </motion.a>

            <motion.a
              variants={buttonAnim}
              href="/files/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="banner-button lg:hover:w-80"
            >
              Baixar currículo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
