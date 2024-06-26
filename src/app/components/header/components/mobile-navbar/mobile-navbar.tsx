'use client'

import { useState } from 'react'

import Link from 'next/link'

import './styles.css'
import { navItems } from '../../constants'

export function MobileNavbar() {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

  return (
    <div className="md:hidden">
      <button
        className="flex h-7 w-8 flex-col items-center justify-between rounded-sm p-1"
        onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
      >
        <span
          className={`mobile-button ${isOpenMobileNav && 'translate-y-3 rotate-45'}`}
        />
        <span className={`mobile-button ${isOpenMobileNav && 'opacity-0'}`} />
        <span
          className={`mobile-button ${isOpenMobileNav && '-translate-y-1.5 -rotate-45'}`}
        />
      </button>

      <nav
        className={`mobile-nav ${isOpenMobileNav ? 'h-96 p-3 [&>*]:opacity-100' : 'h-0 p-0 [&>*]:opacity-0'}`}
        onClick={() => setIsOpenMobileNav(false)}
      >
        {navItems.map((item) => (
          <Link href={item.id} key={item.id} className="nav-item">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
