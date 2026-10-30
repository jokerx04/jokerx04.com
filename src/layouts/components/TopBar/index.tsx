'use client'

import useScrollEvent from '@/hooks/useScrollEvent'
import clsx from 'clsx'
import CustomizerToggler from './components/CustomizerToggler'

import FullscreenToggler from './components/FullscreenToggler'
import LanguageSelector from './components/LanguageSelector'

import MegamenuApps from './components/MegamenuApps'

import MegamenuHeader from './components/MegamenuHeader'

import MonochromeToggler from './components/MonochromeToggler'
import NotificationDropdownAlert from './components/NotificationDropdownAlert'

import SearchBox from './components/SearchBox'

import SimpleMessagesDropdown from './components/SimpleMessagesDropdown'

import ThemeToggler from './components/ThemeToggler'

import logoBlackSm from '@/assets/images/logo-black-sm.png'
import logoBlack from '@/assets/images/logo-black.png'
import logoSm from '@/assets/images/logo-sm.png'
import logo from '@/assets/images/logo.png'
import Link from 'next/link'

import AppsDropdownRounded from './components/AppsDropdownRounded'

import Image from 'next/image'
import MenuToggler from './components/MenuToggler'
import SimpleUserDropdown from './components/SimpleUserDropdown'

const TopBar = () => {
  const { scrollY } = useScrollEvent()

  return (
    <header className={clsx('app-header', { 'topbar-active': scrollY > 50 })}>
      <div className="container-fluid flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="logo-topbar">
            <Link href="/" className="logo-box">
              <div className="logo-light">
                <Image src={logo} className="logo-lg h-6" height={22} alt="Light logo" />
                <Image src={logoSm} className="logo-sm h-6" height={26} width={24.48} alt="Small logo" />
              </div>

              <div className="logo-dark">
                <Image src={logoBlack} className="logo-lg h-6" height={22} alt="Dark logo" />
                <Image src={logoBlackSm} className="logo-sm h-6" height={26} width={24.48} alt="Small logo" />
              </div>
            </Link>
          </div>

          <MenuToggler />

          <SearchBox />

          <MegamenuHeader />

          <MegamenuApps />
        </div>
        <div className="flex items-center gap-2.5">
          <ThemeToggler />

          <AppsDropdownRounded />

          <SimpleMessagesDropdown />

          <NotificationDropdownAlert />

          <FullscreenToggler />

          <MonochromeToggler />

          <CustomizerToggler />

          <LanguageSelector />

          <SimpleUserDropdown />
        </div>
      </div>
    </header>
  )
}

export default TopBar
