import type { Metadata } from 'next'
import { heyFont } from '@/helpers/fonts'
import './globals.css'
import Providers from '@/components/Common/Providers'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={heyFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
