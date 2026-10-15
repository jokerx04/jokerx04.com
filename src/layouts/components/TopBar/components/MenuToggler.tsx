import Icon from '@/components/wrappers/Icon'
import { showBackdrop, useLayoutContext } from '@/context/useLayoutContext'

const MenuToggler = () => {
  const { updateSettings, sidenavSize } = useLayoutContext()

  const toggleSideNav = () => {
    const currentSize = sidenavSize

    if (currentSize === 'offcanvas') {
      showBackdrop()
    } else if (sidenavSize === 'default') {
      updateSettings({ sidenavSize: currentSize === 'default' ? 'condensed' : 'default' })
    } else {
      updateSettings({ sidenavSize: currentSize === 'condensed' ? 'default' : 'condensed' })
    }
  }

  return (
    <>
      <button id="button-toggle-menu" className="sidenav-toggle-button btn btn-icon" onClick={toggleSideNav}>
        <Icon icon="menu-4" className="text-xl" />
      </button>
      <div className="topnav-toggle-button">
        <button type="button" className="hs-collapse-toggle btn topnav-toggle-button" data-hs-collapse="#topnav-menu" id="topnav-menu-collapse" aria-expanded="false" aria-controls="topnav-menu" aria-label="Toggle navigation" onClick={toggleSideNav}>
          <Icon icon="menu-4" className="text-xl" />
        </button>
      </div>
    </>
  )
}

export default MenuToggler
