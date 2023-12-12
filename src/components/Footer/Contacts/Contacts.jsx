import c from './Contacts.module.scss'
import tgSrc from "../../../svgs/telgram.svg";
import phSrc from "../../../svgs/phone.svg";
import wpSrc from "../../../svgs/whatsApp.svg";

function Contacts() {
    return (
        <ul className={c.contacts}>
            <li className={c.contacts__listHead}>КОНТАКТЫ</li>
            <li>+7 555 555-55-55</li>
            <li className={c.contacts__icons}>
                <img src={tgSrc} alt="telegram icon" />
                <img src={phSrc} alt="phone icon" />
                <img src={wpSrc} alt="whatsApp ico" />
            </li>   
            <li>Москва, Путевой проезд 3с1, к 902</li>
        </ul>)
}

export default Contacts