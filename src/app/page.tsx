import Link from 'next/link'
import {
  AboutSection,
  BannerSection,
  Header,
  ProjectsSection,
  KnowledgeSection,
} from './components'

export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <AboutSection />
      <KnowledgeSection />
      <ProjectsSection />

      <footer className="flex h-16 w-full items-center justify-center border-t border-white text-center">
        <div className="centralized-container ">
          <span className="text-white">
            Copyright © 2024{' '}
            <Link
              href="https://lopescodes.com"
              className="text-primary-blue"
              target="_blank"
            >
              lopescodes.com
            </Link>
            . Todos os direitos reservados
          </span>
        </div>
      </footer>
    </>
  )
}
