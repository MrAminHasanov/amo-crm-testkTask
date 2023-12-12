import c from './MenuList.module.scss'

function MenuList() {
    return (
        <ul className={c.menuList}>
            <li>
                <ul>
                    <li className={c.menuList__listHead}>МЕНЮ</li>
                    <li><a href="#">Расчёт стоимости</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">Виджеты</a></li>
                    <li><a href="#">Интеграции</a></li>
                    <li><a href="#">Наши клиенты</a></li>
                </ul>
            </li>
            <li>
                <ul>
                    <li className={c.footer__listHead}></li>
                    <li><a href="#">Кейсы</a></li>
                    <li><a href="#">Благодарственные письма</a></li>
                    <li><a href="#">Сертификаты</a></li>
                    <li><a href="#">Блог на Youtube</a></li>
                    <li><a href="#">Вопрос / Ответ</a></li>
                </ul>
            </li>
        </ul>
    )
}

export default MenuList