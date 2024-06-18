'use client'

import Link from 'next/link'
import './styles.css'
import { navItems } from '../../constants'

export function WebNavbar() {
  return (
    <nav className="hidden gap-6 font-sans text-lg font-semibold text-zinc-300 md:flex">
      {navItems.map((item) => (
        <Link href={item.id} key={item.id} className="nav-item">
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
