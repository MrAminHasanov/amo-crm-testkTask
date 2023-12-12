import c from './Header.module.scss'
import Contacts from './Contacts/Contacts'
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'

function Header() {
  return (
    <div className={c.header}>
      <div className={c.header__logoNavBarCont}>
        <Logo />
        <NavBar />
      </div>
      <Contacts />
    </div>
  )
}

export default Header