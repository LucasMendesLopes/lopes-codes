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
            transition={{ duration: 0.5, ease: 'easeIn' }}
          >
            Lucas Mendes Lopes
          </motion.h1>

          <AnimatedText
            text="<Frontend Developer/>"
            el="h2"
            className="text-xl font-semibold text-cyan-300"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 0.6, ease: 'easeIn' },
          }}
        >
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: -50 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            src="/images/astronaut.png"
            className="w-[32rem]"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  )
}
