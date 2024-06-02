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

      <footer className="flex h-16 w-full items-center justify-center border-t border-white">
        <span className="text-white">
          © Lucas Codes. Todos os direitos reservados
        </span>
      </footer>
    </>
  )
}
