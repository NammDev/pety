/* eslint-disable @next/next/no-img-element */
import type { FC } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

interface LoginButtonProps {
  className?: string
  isBig?: boolean
  isFullWidth?: boolean
  title?: string
}

const LoginButton: FC<LoginButtonProps> = ({
  className = '',
  isBig = false,
  isFullWidth = false,
  title = 'Login',
}) => {
  // const { setShowAuthModal } = useGlobalModalStateStore()

  return (
    <Button
      className={cn(isFullWidth ? 'flex w-full items-center justify-center' : className)}
      icon={<img alt='Lens Logo' className='mr-0.5 h-3' height={12} src='/lens.svg' width={19} />}
      onClick={(e) => {
        e.stopPropagation()
        // setShowAuthModal(true)
        // Leafwatch.track(AUTH.OPEN_LOGIN)
      }}
      size={isBig ? 'lg' : 'md'}
    >
      {title}
    </Button>
  )
}

export default LoginButton
