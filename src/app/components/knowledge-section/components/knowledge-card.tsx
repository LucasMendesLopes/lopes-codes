import Image from 'next/image'

import { motion } from 'framer-motion'

import { knowledgeCardAnim } from '../animation'

interface IKnowledgeCard {
  image: string
  text: string
}

export function KnowledgeCard({ image, text }: IKnowledgeCard) {
  return (
    <motion.div
      className="group relative flex h-32 w-[45%] cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-primary-blue bg-transparent p-2 duration-500 sm:size-40 lg:border-zinc-600 lg:hover:border-primary-blue"
      variants={knowledgeCardAnim}
    >
      <Image
        src={image}
        alt={`Ícone do ${text}`}
        className="size-14 transition-transform duration-300 lg:translate-y-3 lg:group-hover:-translate-y-3"
      />

      <span className="text-sm font-semibold text-white transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
        {text}
      </span>
    </motion.div>
  )
}
