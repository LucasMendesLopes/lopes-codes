'use client'

import { motion } from 'framer-motion'

export function TecnologiesSection() {
  return (
    <section
      className="flex h-full w-full items-center justify-center pt-28 lg:h-screen lg:pt-0"
      id="tecnologies"
    >
      <div className="container">
        <motion.h2
          className="text-4xl text-primary-blue"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 150 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.2 }}
        >
          Tecnologias
        </motion.h2>
      </div>
    </section>
  )
}
