import type { FC } from 'react'

import Link from 'next/link'
import SignupButton from './SignupButton'
import LoginButton from '../LoginButton'

export const NextLink = ({ children, href, ...rest }: Record<string, any>) => (
  <Link href={href} {...rest}>
    {children}
  </Link>
)

const MenuItems: FC = () => {
  return (
    <div className='flex items-center space-x-2'>
      <SignupButton />
      <LoginButton />
    </div>
  )
}

export default MenuItems
