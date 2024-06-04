'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  CSSIcon,
  HTMLIcon,
  JSIcon,
  TSIcon,
  ReactIcon,
  NextIcon,
  StyledIcon,
  TailwindIcon,
} from '@/assets'

export function TecnologiesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  }

  const item = {
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
    <section
      className="section-container 2xl:h-screen 2xl:p-0"
      id="tecnologies"
    >
      <div className="centralized-container">
        <div className="flex h-full w-full flex-col gap-10">
          <motion.h2
            className="text-4xl text-white"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 150 }}
            transition={{ ease: 'easeOut', duration: 0.5, delay: 0.2 }}
          >
            Tecnologias
          </motion.h2>

          <motion.div
            className="flex h-full w-full flex-wrap items-center justify-between gap-4 sm:justify-start"
            variants={container}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <motion.div
              className="relative flex h-32 w-[45%] items-center justify-center rounded-2xl border border-primary-blue bg-zinc-800 duration-500 sm:size-32 lg:border-zinc-700 lg:hover:border-primary-blue"
              variants={item}
            >
              <Image src={HTMLIcon} alt={''} className="size-14" />
            </motion.div>

            <motion.div
              className="relative flex h-32 w-[45%] items-center justify-center rounded-2xl border border-primary-blue bg-zinc-800 duration-500 sm:size-32 lg:border-zinc-700 lg:hover:border-primary-blue"
              variants={item}
            >
              <Image src={CSSIcon} alt={''} className="size-14" />
            </motion.div>

            <motion.div
              className="relative flex h-32 w-[45%] items-center justify-center rounded-2xl border border-primary-blue bg-zinc-800 duration-500 sm:size-32 lg:border-zinc-700 lg:hover:border-primary-blue"
              variants={item}
            >
              <Image src={JSIcon} alt={''} className="size-14" />
            </motion.div>

            <motion.div
              className="relative flex h-32 w-[45%] items-center justify-center rounded-2xl border border-primary-blue bg-zinc-800 duration-500 sm:size-32 lg:border-zinc-700 lg:hover:border-primary-blue"
              variants={item}
            >
              <Image src={TSIcon} alt={''} className="size-14" />
            </motion.div>

            <motion.div
              className="relative flex h-32 w-[45%] items-center justify-center rounded-2xl border border-primary-blue bg-zinc-800 duration-500 sm:size-32 lg:border-zinc-700 lg:hover:border-primary-blue"
              variants={item}
            >
              <Image src={ReactIcon} alt={''} className="size-14" />
            </motion.div>

            <motion.div
              className="relative flex h-32 w-[45%] items-center justify-center rounded-2xl border border-primary-blue bg-zinc-800 duration-500 sm:size-32 lg:border-zinc-700 lg:hover:border-primary-blue"
              variants={item}
            >
              <Image src={NextIcon} alt={''} className="size-14" />
            </motion.div>

            <motion.div
              className="relative flex h-32 w-[45%] items-center justify-center rounded-2xl border border-primary-blue bg-zinc-800 duration-500 sm:size-32 lg:border-zinc-700 lg:hover:border-primary-blue"
              variants={item}
            >
              <Image src={StyledIcon} alt={''} className="size-14" />
            </motion.div>

            <motion.div
              className="relative flex h-32 w-[45%] items-center justify-center rounded-2xl border border-primary-blue bg-zinc-800 duration-500 sm:size-32 lg:border-zinc-700 lg:hover:border-primary-blue"
              variants={item}
            >
              <Image src={TailwindIcon} alt={''} className="size-14" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
