import { motion } from 'framer-motion'
import Image from 'next/image'

interface IKnowledgeCard {
  image: string
  text: string
}

export function KnowledgeCard({ image, text }: IKnowledgeCard) {
  const knowledgeCardAnim = {
    hidden: {
      opacity: 0,
      y: 150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className="relative flex h-32 w-[45%] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-primary-blue bg-transparent p-2 duration-500 sm:size-40 lg:border-zinc-400 lg:hover:border-primary-blue"
      variants={knowledgeCardAnim}
    >
      <Image src={image} alt={`Ícone do ${text}`} className="size-14" />

      <span className="text-sm font-semibold text-white">{text}</span>
    </motion.div>
  )
}
