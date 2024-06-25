'use client'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { Export, GithubLogo } from '@phosphor-icons/react'
import { ProjectCardAnim } from '../animation'

interface IProjectCard {
  title: string
  text: string
  bg: StaticImageData
  techs: StaticImageData[]
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
              <Image key={index} src={tech} alt="" className="size-8" />
            ))}
          </div>

          <div className="flex gap-1 text-white">
            <a
              href={projectUrl}
              target="_blank"
              className="rounded-md bg-zinc-600 p-1 lg:hover:bg-zinc-800"
            >
              <Export size={25} />
            </a>

            <a
              href={projectRepositoryUrl}
              target="_blank"
              className="rounded-md bg-zinc-600 p-1 lg:hover:bg-zinc-800"
            >
              <GithubLogo size={25} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
