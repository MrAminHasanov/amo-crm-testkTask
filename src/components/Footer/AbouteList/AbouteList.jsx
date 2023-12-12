import c from './AbouteList.module.scss'

function AbouteList() {
    return (
        <ul className={c.abouteList}>
            <li className={c.abouteList__listHead}>О КОМПАНИИ</li>
            <li><a href="#">Партнёрская программа</a></li>
            <li><a href="#">Вакансии</a></li>
        </ul>
    )
}

export default AbouteList