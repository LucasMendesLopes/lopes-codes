'use client'

import { motion } from 'framer-motion'

export function ContactSection() {
  return (
    <section
      className="section-container bg-zinc-800 2xl:h-screen 2xl:p-0"
      id="contact"
    >
      <div className="centralized-container ">
        <div className="flex h-full w-full flex-col gap-10">
          <motion.h2
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 150 }}
            transition={{ ease: 'easeOut', duration: 0.5, delay: 0.2 }}
          >
            Contato
          </motion.h2>

          <form>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                id="name"
                className="text-gray-900 text-md block w-full rounded-lg p-3 outline-none"
                placeholder="nome"
                required
              />

              <input
                type="email"
                id="email"
                className="bg-gray-50 text-gray-900 text-md block w-full rounded-lg p-3 outline-none"
                placeholder="e-mail"
                required
              />

              <textarea
                id="text"
                className="bg-gray-50 text-gray-900 text-md block min-h-56 w-full rounded-lg p-3 outline-none"
                placeholder="mensagem"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-block w-full rounded-2xl border-2 border-transparent bg-primary-blue p-4 text-center text-lg font-semibold text-white duration-300 sm:w-72 lg:hover:border-primary-blue lg:hover:bg-transparent lg:hover:text-primary-blue"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
