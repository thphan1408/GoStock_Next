import React from 'react'
import { ModeToggle } from './mode-theme'
import Link from 'next/link'
const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/">Go Stock</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Sign up</Link>
          </li>
        </ul>
      </nav>

      <ModeToggle />
    </header>
  )
}

export default Header
