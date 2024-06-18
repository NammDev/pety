'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MoreNavItems from './MoreNavItems'

interface NavItemProps {
  current: boolean
  name: string
  url: string
}

export const NavItem = ({ current, name, url }: NavItemProps) => {
  return (
    <Link
      className={cn(
        'cursor-pointer rounded-md px-2 py-1 text-left text-sm font-bold tracking-wide md:px-3',
        {
          'bg-gray-200 text-black dark:bg-gray-800 dark:text-white': current,
          'text-gray-700 hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white':
            !current,
        }
      )}
      href={url}
    >
      {name}
    </Link>
  )
}

export const NavItems = () => {
  const pathname = usePathname()

  return (
    <>
      <NavItem current={pathname === '/'} name='Home' url='/' />
      <NavItem current={pathname === '/explore'} name='Explore' url='/explore' />
      <MoreNavItems />
    </>
  )
}
