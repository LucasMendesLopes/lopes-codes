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

      <footer className="flex h-16 w-full items-center justify-center border-t border-zinc-300 text-center">
        <div className="centralized-container ">
          <span className="text-white">
            2024 © Todos os direitos reservados
          </span>
        </div>
      </footer>
    </>
  )
}
