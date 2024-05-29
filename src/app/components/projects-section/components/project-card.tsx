'use client'
import { motion } from 'framer-motion'

interface IProjectCard {
  title: string
}

export function ProjectCard({ title }: IProjectCard) {
  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.a
      href="#projects"
      className="group/text flex h-[15rem] w-full items-center justify-center rounded-2xl bg-zinc-600 hover:bg-zinc-700"
      variants={item}
    >
      <div className="gap flex flex-col gap-3 group-hover/text:flex lg:hidden">
        <span className="text-2xl font-bold text-white">{title}</span>
      </div>
    </motion.a>
  )
}
