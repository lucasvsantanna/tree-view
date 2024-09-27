import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TanstackProvider } from '@/providers/tanstack-provider'
import { SelectedUnitProvider } from '@/contexts/selected-unit-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tree View Application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased min-h-screen">
        <SelectedUnitProvider>
          <TanstackProvider>
            {children}
          </TanstackProvider>
        </SelectedUnitProvider>
      </body>
    </html>
  )
}
