import AppLogo from '@/components/AppLogo'
import { SimpleBar } from '@/components/wrappers/SimpleBar'
import Link from 'next/link'
import AppMenu from './components/AppMenu'
import OnHoverToggle from './components/OnHoverToggle'

import UserProfileSettings from './components/UserProfileSettings'

const Sidenav = () => {
  return (
    <aside id="app-menu" className="app-menu">
      <Link href="/" className="logo-box">
        <AppLogo />
      </Link>

      <OnHoverToggle />

      <div className="relative min-h-0 grow" id="sidenav-menu">
        <SimpleBar className="size-full">
          <UserProfileSettings />

          <div>
            <AppMenu />
          </div>
        </SimpleBar>
      </div>
    </aside>
  )
}

export default Sidenav
