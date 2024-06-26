import Image from 'next/image'

import { Logo2 } from '@/assets'

import { MobileNavbar, WebNavbar } from './components'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-12 w-full items-center justify-center bg-zinc-900 shadow-sm md:h-20">
      <div className="centralized-container">
        <div className="flex h-full w-full items-center justify-between">
          <Image
            alt="Logotipo Lopes Codes"
            src={Logo2}
            className="w-20 md:w-32"
            quality={100}
          />

          <MobileNavbar />

          <WebNavbar />
        </div>
      </div>
    </header>
  )
}
