import c from './Consultation.module.scss'
import { useEffect, useState } from 'react';

function Consultation() {
    const [isThisMobileScreen, setIsThisMobileScreen] = useState(window.innerWidth < 661);
    useEffect(() => {
        window.addEventListener('resize',
            () => setIsThisMobileScreen(window.innerWidth < 661));
        return () => {
            window.removeEventListener('resize',
                () => setIsThisMobileScreen(window.innerWidth < 661));
        };
    }, []);

    return (
        <div className={c.consultation}>
            <h3 className={c.consultation__title}>
                Вместе с <span className={c.consultation__title_orange}>
                    бесплатной <br /> консультацией
                </span> мы дарим:
            </h3>

            <div className={c.consultation__list}>
                <div className={c.consultation__box}>
                    <h4 className={c.consultation__boxTitle}>
                        {isThisMobileScreen ? "SKYPE АУДИТ" : "ВИДЖЕТЫ"}
                    </h4>
                    <p className={c.consultation__boxText}>30 готовых<br />решений</p>
                </div>
                <div className={c.consultation__box}>
                    <h4 className={c.consultation__boxTitle}>
                        {isThisMobileScreen ? "30 ВИДЖЕТОВ" : "DASHBOARD"}
                    </h4>
                    <p className={c.consultation__boxText}>с показателями <br />вашего бизнеса</p>
                </div>
                <div className={c.consultation__box}>
                    <h4 className={c.consultation__boxTitle}>
                        {isThisMobileScreen ? "DASHBOARD" : "SKYPE АУДИТ"}
                    </h4>
                    <p className={c.consultation__boxText}>отдела продаж <br /> и CRM системы</p>
                </div>
                <div className={c.consultation__box}>
                    <h4 className={c.consultation__boxTitle}>
                        {isThisMobileScreen ? "МЕСЯЦ AMOCRM" : "35 ДНЕЙ"}
                    </h4>
                    <p className={c.consultation__boxText}>использования <br />CRM</p>
                </div>
            </div>
            <button className={c.consultation__btn}>Получить консультацию</button>
        </div>
    )
}

export default Consultation