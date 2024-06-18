import type { ReactNode } from 'react'

import { ThemeProvider } from 'next-themes'
import Layout from '../Layout'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </>
  )
}

export default Providers
