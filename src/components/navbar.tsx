import { companiesApi } from '@/services/companies/companies-api'
import { TractianLogo } from './logo-tractian'
import { NavbarButtons } from './navbar-buttons'
import { Suspense } from 'react'

export async function Navbar() {
  return (
    <nav className="bg-dark-blue w-full h-14 flex justify-between items-center px-4">
      <TractianLogo />

      <Suspense fallback={<div className='text-white z-10 bg-white'>Loading...</div>}>
        <NavbarButtons />
      </Suspense>
    </nav>
  )
}
