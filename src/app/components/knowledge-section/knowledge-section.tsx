'use client'

import {
  CSSIcon,
  HTMLIcon,
  JSIcon,
  TSIcon,
  ReactIcon,
  NextIcon,
  StyledIcon,
  TailwindIcon,
  TrelloIcon,
  GitIcon,
  GithubIcon,
  GitlabIcon,
} from '@/assets'
import { motion } from 'framer-motion'

import { KnowledgeContainerAnim } from './animation'
import { KnowledgeCard } from './components/knowledge-card'

export function KnowledgeSection() {
  return (
    <section
      className="section-container bg-zinc-800 2xl:h-screen 2xl:p-0"
      id="knowledge"
    >
      <div className="centralized-container">
        <div className="flex h-full w-full flex-col gap-10">
          <motion.h2
            className="text-4xl font-bold text-white md:text-center"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeOut', duration: 0.5, delay: 0.2 }}
          >
            Conhecimentos
          </motion.h2>

          <motion.div
            className="flex h-full w-full flex-wrap items-center justify-between gap-4 md:justify-center"
            variants={KnowledgeContainerAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <KnowledgeCard image={HTMLIcon} text="HTML" />
            <KnowledgeCard image={CSSIcon} text="CSS" />
            <KnowledgeCard image={JSIcon} text="JavaScript" />
            <KnowledgeCard image={TSIcon} text="TypeScript" />
            <KnowledgeCard image={ReactIcon} text="React JS" />
            <KnowledgeCard image={NextIcon} text="Next JS" />
            <KnowledgeCard image={StyledIcon} text="Styled Components" />
            <KnowledgeCard image={TailwindIcon} text="Tailwind CSS" />
            <KnowledgeCard image={GitIcon} text="Git" />
            <KnowledgeCard image={GithubIcon} text="Github" />
            <KnowledgeCard image={GitlabIcon} text="Gitlab" />
            <KnowledgeCard image={TrelloIcon} text="Trello" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
