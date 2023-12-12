import c from './EarnMore.module.scss'

function EarnMore() {
    return (
        <div className={c.earnMore}>
            <h2 className={c.earnMore__title}>
                Зарабатывайте
                <br />
                больше
                <br />
                <span className={c.earnMore__title_orange}> c WELBEX</span>
            </h2>
            <span className={c.earnMore__descript}>Развиваем и контролируем <br /> продажи за вас</span>
        </div>
    )
}

export default EarnMore