'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './components/project-card'

export function ProjectsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="section-container pb-20" id="projects">
      <div className="centralized-container">
        <div className="flex h-full w-full flex-col gap-10">
          <motion.h2
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 150 }}
            transition={{ ease: 'easeOut', duration: 0.5, delay: 0.2 }}
          >
            Projetos
          </motion.h2>

          <motion.div
            className="grid h-full w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <ProjectCard title="Projeto 1" />
            <ProjectCard title="Projeto 2" />
            <ProjectCard title="Projeto 3" />
            <ProjectCard title="Projeto 4" />
            <ProjectCard title="Projeto 5" />
            <ProjectCard title="Projeto 6" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
