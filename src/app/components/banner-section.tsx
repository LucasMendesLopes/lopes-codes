'use client'

import { motion } from 'framer-motion'
import { AnimatedText } from './animated-text'

export function BannerSection() {
  return (
    <section
      id="banner"
      className="flex h-[calc(100vh-3rem)] w-full items-center justify-center md:h-[calc(100vh-5rem)]"
    >
      <div className="container flex-col items-center gap-20 lg:flex-row lg:gap-0">
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
            className="text-xl font-semibold text-[#8685EF]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 0.6, ease: 'easeIn' },
          }}
          className="size-[20rem] rounded-[60%40%32%71%/60%30%70%40%] bg-[url(../../assets/photo.jpg)] bg-cover bg-center md:size-[25rem]"
        />
      </div>
    </section>
  )
}
