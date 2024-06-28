'use client'
import { Tooltip } from 'react-tooltip'

import Image, { StaticImageData } from 'next/image'

import { Eye, GithubLogo } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

import { ProjectCardAnim } from '../animation'

interface IProjectCard {
  title: string
  text: string
  bg: StaticImageData
  techs: { title: string; image: StaticImageData }[]
  projectUrl: string
  projectRepositoryUrl: string
}

export function ProjectCard({
  title,
  text,
  bg,
  techs,
  projectUrl,
  projectRepositoryUrl,
}: IProjectCard) {
  return (
    <motion.div
      className="flex h-[30rem] w-full flex-col items-center justify-between rounded-2xl bg-zinc-700"
      variants={ProjectCardAnim}
    >
      <div className="relative flex h-1/2 w-full items-center justify-center">
        <Image
          src={bg}
          alt=""
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-2xl"
        />
      </div>

      <div className="flex h-1/2 flex-col justify-between p-4 lg:p-8">
        <h2 className="text-xl font-semibold text-white">{title}</h2>

        <p className="text-white">{text}</p>

        <div className="flex w-full items-center justify-between">
          <div className="flex gap-1 text-white">
            {techs.map((tech, index) => (
              <div key={index}>
                <Image
                  data-tooltip-id={tech.title}
                  data-tooltip-content={tech.title}
                  src={tech.image}
                  alt=""
                  className="size-8"
                />

                <Tooltip id={tech.title} className="hidden lg:block" />
              </div>
            ))}
          </div>

          <div className="flex gap-2 text-white">
            <a
              data-tooltip-id="see-project"
              data-tooltip-content="Visualizar"
              href={projectUrl}
              target="_blank"
              className="rounded-md bg-zinc-600 p-2 lg:hover:bg-zinc-800"
            >
              <Eye size={25} />
            </a>

            <Tooltip id="see-project" className="hidden lg:block" />

            <a
              data-tooltip-id="see-repository"
              data-tooltip-content="Repositório"
              href={projectRepositoryUrl}
              target="_blank"
              className="rounded-md bg-zinc-600 p-2 lg:hover:bg-zinc-800"
            >
              <GithubLogo size={25} />
            </a>

            <Tooltip id="see-repository" className="hidden lg:block" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
