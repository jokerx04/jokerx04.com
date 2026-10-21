
import logoBlack from '@/assets/images/logo-black.png'
import logoSm from '@/assets/images/logo-sm.png'
import logo from '@/assets/images/logo.png'

const AppLogo = () => {
  return (
    <>
      <span className="logo logo-light">
        <span className="logo-lg">
          <img src={logo} width={94.47} height={22} alt="logo" />
        </span>
        <span className="logo-sm">
          <img src={logoSm} height={26} width={24.48} alt="small logo" />
        </span>
      </span>

      <span className="logo logo-dark">
        <span className="logo-lg">
          <img src={logoBlack} width={94.47} height={22} alt="dark logo" />
        </span>
        <span className="logo-sm">
          <img src={logoSm} height={26} width={24.48} alt="small logo" />
        </span>
      </span>
    </>
  )
}

export default AppLogo
