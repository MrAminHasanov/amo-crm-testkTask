import c from './PageBackground.module.scss'

function PageBackground() {
    return (
        <div className={c.pageBackground}>
            <span className={`${c.pageBackground__shine} ${c.pageBackground__shine_leftRed}`}></span>
            <span className={`${c.pageBackground__shine} ${c.pageBackground__shine_topCenterPurple}`}></span>
            <span className={`${c.pageBackground__ball} ${c.pageBackground__ball_bigRed}`}></span>
            <span className={`${c.pageBackground__ball} ${c.pageBackground__ball_purple}`}></span>
            <span className={`${c.pageBackground__ball} ${c.pageBackground__ball_smallRed}`}></span>
        </div>
    )
}

export default PageBackground