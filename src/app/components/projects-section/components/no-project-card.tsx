'use client'
import { Coffee, Image as Picture } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { ProjectCardAnim } from '../animation'

export function NoProjectCard() {
  return (
    <motion.div
      className="flex h-[30rem] w-full flex-col items-center justify-between rounded-2xl bg-zinc-700"
      variants={ProjectCardAnim}
    >
      <div className="relative flex h-1/2 w-full items-center justify-center rounded-t-2xl bg-zinc-600">
        <Picture size={100} weight="light" alt="" className="text-white" />
      </div>

      <div className="flex h-1/2 items-center justify-center gap-3 p-4 lg:p-8">
        <p className="text-xl font-semibold text-white">
          Pegue um café e aguarde novidades
        </p>

        <Coffee size={40} className="text-primary-blue" />
      </div>
    </motion.div>
  )
}
