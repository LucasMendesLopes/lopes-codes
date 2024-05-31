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
            className="flex h-96 w-full items-center justify-center rounded-2xl bg-[url(../../assets/moto.jpg)] bg-cover bg-center md:size-[31.25rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ y: 0 }}
            transition={{ ease: 'linear', duration: 0.5, delay: 0.2 }}
          />

          <motion.div className="flex flex-1 flex-col gap-6">
            <motion.h2
              className="text-3xl font-semibold text-[#8685EF]"
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
                Com uma trajetória de 3 anos no mercado de programação, adquiri
                experiência valiosa que moldou minha carreira. Iniciei minha
                jornada na Digital Business, onde mergulhei profundamente no
                desenvolvimento web, focando em HTML, CSS e JavaScript.
                Trabalhei na criação de páginas web responsivas e animações
                publicitárias para multinacionais, o que me proporcionou uma
                base sólida em Frontend e uma compreensão profunda das
                tecnologias essenciais para construir interfaces cativantes e
                eficazes.
              </p>

              <p className="text-white">
                Atualmente, faço parte da equipe da Paipe Tecnologia e Inovação,
                onde continuo aprimorando minhas habilidades e contribuindo para
                o desenvolvimento de aplicações web inovadoras. Tenho orgulho de
                estar envolvido em projetos desafiadores que ampliam meu
                conhecimento em tecnologias como HTML, CSS, JavaScript,
                TypeScript, React JS, Context API, Styled Components, Tailwind
                CSS, Material-UI (MUI), integrações com API REST, metodologias
                ágeis como Scrum e Kanban, gerenciamento de código com Git e
                utilização do GitFlow, além de colaboração em plataformas como
                GitLab, Trello e Jira.
              </p>

              <p className="text-white">
                Minha formação técnica em informática também desempenhou um
                papel fundamental em minha jornada, proporcionando uma base
                sólida em lógica de programação e familiarização com diversas
                linguagens.
              </p>

              <p className="text-white">
                OBS: Quando não estou codando, estou pelas estradas pegando um
                vento no rosto.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  )
}
