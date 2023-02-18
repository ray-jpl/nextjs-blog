import React, { Fragment } from "react";
import Link from 'next/link';
import { siteTitle } from "./Layout";

import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function transitionTheme(theme: string, dark: boolean) {
  document.documentElement.classList.add('theme-transition')
  document.documentElement.setAttribute('data-theme', theme)
  if (dark && !document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark')
  } else if (!dark) {
    document.documentElement.classList.remove('dark')
  }

  window.setTimeout(function() {
    document.documentElement.classList.remove('theme-transition')
  }, 1000)
}

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-1 sm:px-4 mt-2 pb-2 flex flex-row justify-between shadow-sm">
      <div className="w-60 flex">
        <Menu as="div" className="relative inline-block text-left sm:hidden">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 py-2 text-sm font-medium text-skin-primary hover:bg-skin-fillDark hover:text-skin-accent">
              <svg className="fill-skin-accent h-6 w-6" viewBox="0 0 20 20">
                  <path d="M1,4 H18 V6 H1 V4 M1,9 H18 V11 H1 V7 M3,14 H18 V16 H1 V14" />
              </svg>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-skin-fillDark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/projects'>
                      <a 
                        className={classNames(
                          active ? 'bg-skin-primary text-skin-inverted' : 'text-skin-primary',
                          'block px-4 py-2 text-sm')}
                      >
                        Projects
                      </a>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/blog'>
                      <a 
                        className={classNames(
                          active ? 'bg-skin-primary text-skin-inverted' : 'text-skin-primary',
                          'block px-4 py-2 text-sm')}
                      >
                        Blog
                      </a>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/#contact'>
                      <a 
                        className={classNames(
                          active ? 'bg-skin-primary text-skin-inverted' : 'text-skin-primary',
                          'block px-4 py-2 text-sm')}
                      >
                        Contact
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <div className="p-2 mx-1 w-fit rounded-lg hover:bg-skin-fillDark text-xl font-bold hover:text-skin-accent transition-transform ease-in-out scale-100 hover:scale-105 duration-300">
          <Link href="/"><div className="transition ease-in-out scale-100 hover:scale-105 duration-300">{siteTitle}</div></Link>
        </div>
      </div>  

      <div className="hidden sm:flex margin-0 w-60 justify-center">
        <Link href="/projects"><a className="p-2 mx-1 rounded-lg hover:bg-skin-fillDark hover:text-skin-accent transition-transform ease-in-out scale-100 hover:scale-105 duration-300">Projects</a></Link>
        <Link href="/blog"><a className="p-2 mx-1 rounded-lg hover:bg-skin-fillDark hover:text-skin-accent transition-transform ease-in-out scale-100 hover:scale-105 duration-300">Blog</a></Link>
        <Link href="/#contact"><a className="p-2 mx-1 rounded-lg hover:bg-skin-fillDark hover:text-skin-accent transition-transform ease-in-out scale-100 hover:scale-105 duration-300">Contact</a></Link>
      </div>

      <div className="w-60 flex justify-end">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 py-2 text-sm font-medium text-skin-primary hover:bg-skin-fillDark hover:text-skin-accent transition ease-in-out scale-100 hover:scale-105 duration-300">
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="fill-skin-accent h-6 w-6 m-0 sm:mr-2">
                <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495V.5z"></path> 
                <path d="M0 12.995V13a3.07 3.07 0 0 0 0-.005z"></path> 
              </svg>
              <div className="hidden sm:flex">Themes</div>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-skin-fillDark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-skin-primary text-skin-inverted' : 'text-skin-primary',
                        'block px-4 py-2 text-sm w-full text-left'
                      )}
                      onClick={() => {transitionTheme('default', false)}}
                    >
                      Default
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-skin-primary text-skin-inverted' : 'text-skin-primary',
                        'block px-4 py-2 text-sm w-full text-left'
                      )}
                      onClick={() => {transitionTheme('BW', true)}}
                    >
                      Black & White
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-skin-primary text-skin-inverted' : 'text-skin-primary',
                        'block px-4 py-2 text-sm w-full text-left'
                      )}
                      onClick={() => {transitionTheme('dusk', true)}}
                    >
                      Dusk
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

    </nav>

  )
}

export default Navbar