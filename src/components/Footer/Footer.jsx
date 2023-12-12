import c from './Footer.module.scss'
import AbouteList from './AbouteList/AbouteList'
import MenuList from './MenuList/MenuList'
import Contacts from './Contacts/Contacts'

function Footer() {
    return (
        <div className={c.footer}>
            <AbouteList />
            <MenuList />
            <Contacts />
        </div >
    )
}

export default Footer