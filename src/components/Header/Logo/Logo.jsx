import c from './Logo.module.scss'
import logoSrc from "../../../svgs/logo.svg"

function Logo() {
    return (
        <div className={c.logo}>
            <img src={logoSrc} alt="logo" className={c.logo__img} />
            <br />
            <span className={c.logo__text}>
                крупный интегратор CRM <br /> в Росcии и ещё 8 странах
            </span>
        </div>
    )
}

export default Logo