import { FC, ReactNode } from 'react'
import Navbar from '../Shared/Navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* <PageMetatags />
      <Toaster
        containerStyle={{ wordBreak: 'break-word' }}
        position='bottom-right'
        toastOptions={getToastOptions(resolvedTheme)}
      />
      <GlobalModals />
      <GlobalAlerts /> */}
      <div className='flex flex-col min-h-screen pb-14 md:pb-0'>
        <Navbar />
        {/* <GlobalBanners />
        <BottomNavigation /> */}
        {children}
      </div>
    </>
  )
}

export default Layout
