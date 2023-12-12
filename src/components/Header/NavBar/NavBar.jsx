import c from './NavBar.module.scss'

function NavBar() {
    return (
        <ul className={c.navBar}>
            <li>Услуги</li>
            <li>Виджеты</li>
            <li>Интеграции</li>
            <li>Кейсы</li>
            <li>Сертификаты</li>
        </ul>
    )
}

export default NavBar