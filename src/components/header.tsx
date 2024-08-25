'use client'

import React from 'react'
import { ModeToggle } from './mode-theme'
import Link from 'next/link'

import { Navbar } from 'flowbite-react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

interface NavProps {
  links: {
    variant: 'default' | 'ghost'
  }[]
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)

  const toggleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="container">
      <Navbar fluid>
        <Link href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            GoStock
          </span>
        </Link>

        <div className="flex md:order-2 items-center space-x-3">
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: 'ghost' }), 'p-3')}
          >
            Log in
          </Link>
          <Link
            href="/register"
            className={cn(buttonVariants({ variant: 'default' }), 'p-3')}
          >
            Sign up
          </Link>
          <ModeToggle />
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
