'use client'

import { motion } from 'framer-motion'
import { Moto } from '@/assets'
import Image from 'next/image'

export function AboutSection() {
  return (
    <motion.main className="section-container 2xl:h-screen 2xl:p-0" id="about">
      <div className="centralized-container">
        <div className="flex flex-col items-center gap-5 xl:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ y: 0 }}
            transition={{ ease: 'linear', duration: 0.5, delay: 0.2 }}
            className="relative h-96 w-full md:size-[31.25rem]"
          >
            <Image
              src={Moto}
              alt="Eu e minha esposa, em cima de uma moto azul, numa linda estrada, repleta de árvores"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-2xl"
            />
          </motion.div>

          <motion.div className="flex flex-1 flex-col gap-6">
            <motion.h2
              className="text-3xl font-semibold text-primary-blue"
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 150 }}
              transition={{ ease: 'easeOut', duration: 0.5, delay: 0.5 }}
            >
              Sobre mim
            </motion.h2>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 150 }}
              transition={{ ease: 'easeOut', duration: 0.5, delay: 0.7 }}
            >
              <p className="text-white">
                Com 3 anos de experiência no mercado de programação, construí
                uma trajetória sólida e diversificada. Iniciei minha carreira na
                Digital Business, onde fui responsável pelo desenvolvimento de
                páginas web responsivas e animações publicitárias para
                multinacionais, dentre elas, VW, GM, Nestlé, Ferrero. Esse
                trabalho inicial me proporcionou uma base robusta em Frontend,
                permitindo-me adquirir habilidades essenciais e uma compreensão
                profunda das melhores práticas para a criação de interfaces
                atrativas e eficazes.
              </p>

              <p className="text-white">
                Atualmente, integro a equipe da Paipe Tecnologia e Inovação,
                onde continuo a expandir minhas competências e contribuir para o
                desenvolvimento de aplicações web inovadoras. Tenho orgulho de
                estar envolvido em projetos desafiadores que me permitem aplicar
                e aprimorar meus conhecimentos continuamente, sempre buscando
                superar as expectativas e entregar soluções de alta qualidade.
              </p>

              <p className="text-white">
                Minha formação técnica em informática foi fundamental para minha
                jornada, oferecendo-me uma base sólida em lógica de programação
                e familiaridade com diversas práticas e ferramentas do mercado.
                Esse conhecimento técnico, aliado à minha experiência prática,
                permite-me enfrentar desafios com confiança e eficiência.
              </p>

              <p className="text-white">
                OBS: Quando não estou programando, gosto de pegar a estrada e
                sentir o vento no rosto.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  )
}
