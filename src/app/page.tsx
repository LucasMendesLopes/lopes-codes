import Link from 'next/link'
import {
  AboutSection,
  BannerSection,
  Header,
  ProjectsSection,
  TecnologiesSection,
} from './components'

export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <AboutSection />
      <TecnologiesSection />
      <ProjectsSection />

      <footer className="flex h-16 w-full items-center justify-center border-t border-white text-center">
        <div className="centralized-container ">
          <span className="text-white">
            Copyright © 2024{' '}
            <Link
              href="https://lucascodes.vercel.app"
              className="text-primary-blue"
              target="_blank"
            >
              lucascodes.vercel.app
            </Link>
            . Todos os direitos reservados
          </span>
        </div>
      </footer>
    </>
  )
}
