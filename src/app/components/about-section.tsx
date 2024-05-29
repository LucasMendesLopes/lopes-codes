'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <motion.main
      className="flex h-full w-full items-center justify-center overflow-hidden pt-28 lg:h-screen lg:pt-0"
      id="about"
    >
      <div className="container items-center">
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <motion.div
            className="flex h-96 w-full items-center justify-center rounded-lg bg-zinc-600 md:size-[31.25rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.5, delay: 0.2 }}
          >
            <p className="text-white">FOTO</p>
          </motion.div>

          <motion.div className="flex flex-1 flex-col gap-6">
            <motion.h2
              className="text-3xl font-semibold text-cyan-300"
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 150 }}
              transition={{ ease: 'easeOut', duration: 0.5, delay: 0.4 }}
            >
              Sobre mim
            </motion.h2>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 150 }}
              transition={{ ease: 'easeOut', duration: 0.5, delay: 0.5 }}
            >
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quis veritatis! Esse blanditiis doloribus, quibusdam
                necessitatibus facilis voluptatum, quod libero iure quidem
                deleniti minus reiciendis illum ducimus porro ipsum beatae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                velit voluptatem. Natus, officia aut, quos corrupti distinctio
                accusamus sunt beatae placeat odio, laborum dicta. Ipsum atque
                quasi veniam odio sed.
              </p>

              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                dolores magnam! Consectetur accusamus totam nostrum? Laborum,
                neque. Ipsum velit quas temporibus placeat assumenda eaque,
                libero, consequuntur pariatur nam, a rem. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dolor, dolores magnam!
                Consectetur accusamus totam nostrum? Laborum, neque. Ipsum velit
                quas temporibus placeat assumenda eaque, libero, consequuntur
                pariatur nam, a rem.
              </p>

              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                dolores magnam! Consectetur accusamus totam nostrum? Laborum,
                neque. Ipsum velit quas temporibus placeat assumenda eaque,
                libero, consequuntur pariatur nam, a rem. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dolor, dolores magnam!
                Consectetur accusamus totam nostrum? Laborum, neque. Ipsum velit
                quas temporibus placeat assumenda eaque, libero, consequuntur
                pariatur nam, a rem.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  )
}
