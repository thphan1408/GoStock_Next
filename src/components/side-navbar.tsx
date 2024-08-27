'use client'

import {
  ChevronRight,
  Home,
  LayoutDashboard,
  Newspaper,
  Settings,
  ShoppingCart,
  User,
  Wallet,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Nav } from '@/components/ui/nav'
import { Button } from '@/components/ui/button'
import { useViewPortWidth } from '@/hooks/useViewPortWidth'
import { set } from 'zod'

interface ISideNavBarProps {}

const SideNavbar = ({}: ISideNavBarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [mobileWidth, setMobileWidth] = useState(false)

  const width = useViewPortWidth()

  useEffect(() => {
    setMobileWidth(width < 768)
  }, [width])

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="relative min-w-fit border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            variant={'secondary'}
            className="rounded-full p-2"
            size="icon"
            onClick={toggleCollapse}
          >
            <ChevronRight />
          </Button>
        </div>
      )}

      <Nav
        className="space-y-3"
        // isCollapsed={isCollapsed}
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: 'Home',
            label: '',
            icon: Home,
            variant: 'default',
            href: '/',
          },
          {
            title: 'Dashboard',
            label: '',
            icon: LayoutDashboard,
            variant: 'ghost',
            href: '/dashboard',
          },
          {
            title: 'Users',
            label: '',
            icon: User,
            variant: 'ghost',
            href: '/dashboard/users',
          },

          {
            title: 'Orders',
            label: '',
            icon: ShoppingCart,
            variant: 'ghost',
            href: '/dashboard/orders',
          },
          {
            title: 'Settings',
            label: '',
            icon: Settings,
            variant: 'ghost',
            href: '/dashboard/setting',
          },
        ]}
      />
    </div>
  )
}

export default SideNavbar
