'use client'

import { motion } from 'framer-motion'
import { AnimatedText } from './animated-text'
import Image from 'next/image'
import { Photo } from '@/assets'

export function BannerSection() {
  return (
    <section
      id="banner"
      className="flex h-[calc(100vh-6rem)] w-full items-center justify-center md:h-[calc(100vh-10rem)]"
    >
      <div className="centralized-container">
        <div className="flex h-full w-full flex-col items-center justify-between gap-20 lg:flex-row lg:gap-0">
          <div className="flex flex-col gap-3">
            <motion.h1
              className="text-3xl font-bold text-white md:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeIn', delay: 0.2 }}
            >
              Lucas Mendes Lopes
            </motion.h1>

            <AnimatedText
              text="<Frontend Developer/>"
              el="h2"
              className="text-xl font-semibold text-primary-blue"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: 0.6, ease: 'easeIn' },
            }}
            className="relative size-[20rem] rounded-full md:size-[25rem]"
          >
            <Image
              src={Photo}
              alt={''}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
