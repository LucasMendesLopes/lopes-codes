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
        delayChildren: 0.2,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      className="flex h-full w-full items-center justify-center pt-28 lg:h-screen lg:pt-0"
      id="projects"
    >
      <div className="container flex-col gap-10">
        <h2 className="text-4xl text-cyan-300">Projetos</h2>

        <motion.div
          className="grid h-full w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          <ProjectCard title="Projeto 1" subTitle="Website" />
          <ProjectCard title="Projeto 2" subTitle="Website" />
          <ProjectCard title="Projeto 3" subTitle="Website" />
          <ProjectCard title="Projeto 4" subTitle="Website" />
          <ProjectCard title="Projeto 5" subTitle="Website" />
          <ProjectCard title="Projeto 6" subTitle="Website" />
        </motion.div>
      </div>
    </section>
  )
}
