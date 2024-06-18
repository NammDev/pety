import { Button } from '@/components/ui/button'
import type { FC } from 'react'

const SignupButton: FC = () => {
  // const { setShowAuthModal } = useGlobalModalStateStore()
  // const { setScreen } = useSignupStore()

  return (
    <Button
      onClick={() => {
        // setScreen('choose')
        // setShowAuthModal(true, 'signup')
        // Leafwatch.track(AUTH.OPEN_SIGNUP)
      }}
      outline
      size='md'
    >
      Signup
    </Button>
  )
}

export default SignupButton
