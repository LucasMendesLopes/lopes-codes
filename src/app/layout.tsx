import type { Metadata } from 'next'
import './global.css'
import { Inter } from 'next/font/google'
import { Logo } from '@/assets'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lopes Codes',
  icons: Logo.src,
  description:
    'Transformo ideias em projetos inovadores que fazem a diferença. Minha experiência em desenvolvimento web me capacita a criar soluções que se destacam. Estou preparado para contribuir e impulsionar através de soluções digitais impactantes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
