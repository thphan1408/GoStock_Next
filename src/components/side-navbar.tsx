'use client'

import {
  ChevronRight,
  Home,
  LayoutDashboard,
  Newspaper,
  User,
  Wallet,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Nav } from '@/components/ui/nav'
import { useWindowWidth } from '@react-hook/window-size'
import { Button } from '@/components/ui/button'

interface ISideNavBarProps {}

const SideNavbar = ({}: ISideNavBarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  // const onlyWidth = useWindowWidth()
  // const mobileWidth = onlyWidth < 768

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="relative min-w-fit border-r px-3 pb-10 pt-24">
      {/* {!mobileWidth && ( */}
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
      {/* )} */}
      <Nav
        className="space-y-3"
        isCollapsed={isCollapsed}
        // isCollapsed={mobileWidth ? true : isCollapsed}
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
            title: 'Wallet',
            label: '',
            icon: Wallet,
            variant: 'ghost',
            href: '/dashboard/wallet',
          },
          {
            title: 'News',
            label: '',
            icon: Newspaper,
            variant: 'ghost',
            href: '/dashboard/news',
          },
          // {
          //   title: 'Settings',
          //   label: '',
          //   icon: Settings,
          //   variant: 'ghost',
          //   href: '/dashboard/settings',
          // },
          // {
          //   title: 'Stock and funds',
          //   label: '',
          //   icon: Layers,
          //   variant: 'ghost',
          //   //
          // },
        ]}
      />
    </div>
  )
}

export default SideNavbar
