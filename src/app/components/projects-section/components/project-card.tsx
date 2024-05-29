'use client'
import { motion } from 'framer-motion'

interface IProjectCard {
  title: string
  subTitle: string
}

export function ProjectCard({ title, subTitle }: IProjectCard) {
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
      className="group/text flex h-[15rem] w-full items-center justify-center rounded-lg bg-zinc-600 hover:bg-zinc-700"
      variants={item}
    >
      <div className="gap flex flex-col gap-3 group-hover/text:flex lg:hidden">
        <h2 className="text-2xl font-bold text-cyan-300">{title}</h2>
        <h3 className="text-xl font-medium text-purple-900">{subTitle}</h3>
      </div>
    </motion.a>
  )
}
