import c from './Contacts.module.scss';
import tgIcon from "../../../svgs/telgram.svg";
import wpIcon from "../../../svgs/whatsApp.svg";
import phIcon from "../../../svgs/phone.svg";

function Contacts() {
    return (
        <div className={c.contacts}>
            <span className={c.contacts__number}>+7 555 555-55-55</span>
            <div className={c.contacts__icons}>
                <img src={tgIcon} alt="telegram Icon" className={c.contacts__icon} />
                <img src={wpIcon} alt="whatsApp Icon" className={c.contacts__icon} />
                <img src={phIcon} alt="phone Icon" className={c.contacts__icon} />
            </div>
        </div>
    )
}

export default Contacts