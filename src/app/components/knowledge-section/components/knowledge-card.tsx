import { motion } from 'framer-motion'
import Image from 'next/image'

import { knowledgeCardAnim } from '../animation'

interface IKnowledgeCard {
  image: string
  text: string
}

export function KnowledgeCard({ image, text }: IKnowledgeCard) {
  return (
    <motion.div
      className="relative flex h-32 w-[45%] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-primary-blue bg-transparent p-2 duration-500 sm:size-40 lg:border-zinc-600 lg:hover:border-primary-blue"
      variants={knowledgeCardAnim}
    >
      <Image src={image} alt={`Ícone do ${text}`} className="size-14" />

      <span className="text-sm font-semibold text-white">{text}</span>
    </motion.div>
  )
}
