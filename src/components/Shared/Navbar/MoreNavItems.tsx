import type { FC } from 'react'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { cn } from '@/lib/utils'
import MenuTransition from '../MenuTransition'
import Support from './Support'

const MoreNavItems: FC = () => {
  return (
    <Menu as='div'>
      {({ open }) => (
        <>
          <MenuButton
            className={cn(
              'w-full cursor-pointer rounded-md px-2 py-1 text-left text-sm font-bold tracking-wide md:px-3',
              {
                'bg-gray-200 text-black dark:bg-gray-800 dark:text-white': open,
                'text-gray-700 hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white':
                  !open,
              }
            )}
          >
            More
          </MenuButton>
          <MenuTransition>
            <MenuItems
              className='absolute mt-2 bg-white border shadow-sm rounded-xl focus:outline-none dark:border-gray-700 dark:bg-gray-900'
              static
            >
              {/* {currentProfile ? (
                <>
                  <MenuItem
                    as='div'
                    className={({ focus }: { focus: boolean }) =>
                      cn({ 'dropdown-active': focus }, 'm-2 rounded-lg')
                    }
                  >
                    <Bookmarks />
                  </MenuItem>
                  <div className='divider' />
                </>
              ) : null} */}
              <MenuItem
                as='div'
                className={({ focus }: { focus: boolean }) =>
                  cn({ 'dropdown-active': focus }, 'm-2 rounded-lg')
                }
              >
                <Support />
              </MenuItem>
            </MenuItems>
          </MenuTransition>
        </>
      )}
    </Menu>
  )
}

export default MoreNavItems
