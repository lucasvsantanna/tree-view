import { Navbar } from '@/components/navbar'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col bg-gray-150 max-w-1600">
      <Navbar />
      <div className="h-full w-full p-2">
        <div className="h-full bg-white p-4 rounded">{children}</div>
      </div>
    </div>
  )
}
