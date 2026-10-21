import { Link } from 'react-router'

import logoBlack from '@/assets/images/logo-black.png'
import logoSm from '@/assets/images/logo-sm.png'
import logo from '@/assets/images/logo.png'

import logoBlackSm from '@/assets/images/logo-black-sm.png'

const AppLogo = () => {
  return (
    <Link to="/" className="logo">
      <span className="logo logo-light">
        <span className="logo-lg">
          <img src={logo} alt="logo" className="h-6 w-auto object-contain" />
        </span>
        <span className="logo-sm">
          <img src={logoSm} alt="small logo" />
        </span>
      </span>
      <span className="logo logo-dark">
        <span className="logo-lg">
          <img src={logoBlack} alt="dark logo" className="h-6 w-auto object-contain" />
        </span>
        <span className="logo-sm">
          {/* <img src={logoSm} alt="small logo" /> */}

	  <img src={logoBlackSm} alt="small logo" />
	  
        </span>
      </span>
    </Link>
  )
}

export default AppLogo
