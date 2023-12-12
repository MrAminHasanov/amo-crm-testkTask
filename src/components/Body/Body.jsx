import c from './Body.module.scss'
import Consultation from './Consultation/Consultation'
import EarnMore from './EarnMore/EarnMore'

function Body() {
    return (
        <div className={c.body}>
            <EarnMore />
            <Consultation />
        </div>
    )
}

export default Body