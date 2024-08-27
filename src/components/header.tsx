'use client'

import React, { useState } from 'react'
import { ModeToggle } from './mode-theme'
import Link from 'next/link'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'

import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'

interface NavProps {
  links: {
    variant: 'default' | 'ghost'
  }[]
}

const Header = () => {
  const pathName = usePathname
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // const products = [
  //   {
  //     name: 'Analytics',
  //     description: 'Get a better understanding of your traffic',
  //     href: '#',
  //     icon: ChartPieIcon,
  //   },
  //   {
  //     name: 'Engagement',
  //     description: 'Speak directly to your customers',
  //     href: '#',
  //     icon: CursorArrowRaysIcon,
  //   },
  //   {
  //     name: 'Security',
  //     description: 'Your customers’ data will be safe and secure',
  //     href: '#',
  //     icon: FingerPrintIcon,
  //   },
  //   {
  //     name: 'Integrations',
  //     description: 'Connect with third-party tools',
  //     href: '#',
  //     icon: SquaresPlusIcon,
  //   },
  //   {
  //     name: 'Automations',
  //     description: 'Build strategic funnels that will convert',
  //     href: '#',
  //     icon: ArrowPathIcon,
  //   },
  // ]
  // const callsToAction = [
  //   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  //   { name: 'Contact sales', href: '#', icon: PhoneIcon },
  // ]

  return (
    <header className="dark:bg-gray-800 border-b divide-slate-700">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            {/* <span className="sr-only">GOSTOCK</span> */}
            <img
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
            <span
              className="text-xl font-semibold ml-2
            "
            >
              GOSTOCK
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <div className="mr-3">
            <ModeToggle />
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
              <ChevronDown
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover> */}

          <Link href="/dashboard" className="text-sm font-semibold leading-6 ">
            Dashboard
          </Link>

          <Link
            href="https://stocktraders.vn/index"
            className="text-sm font-semibold leading-6 "
          >
            Stock Trader Company
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-5 lg:items-center">
          <Link href="/login" className="text-sm font-semibold leading-6">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
          <ModeToggle />
        </div>

        {/* <div className="hidden lg:flex lg:flex-1"></div> */}
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5 flex items-center">
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
              <span
                className="text-xl font-semibold ml-2
            "
              >
                GOSTOCK
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDown
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure> */}
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-black hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/dashboard"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-black hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>

                <Link
                  href="https://stocktraders.vn/index"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-black hover:bg-gray-50"
                >
                  Stock Trader Company
                </Link>
              </div>
              <div className="py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7  hover:text-black hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header
