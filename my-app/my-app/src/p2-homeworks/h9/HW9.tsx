import React from 'react'
import Clock from './Clock'
import s from "./HW9.module.css"
import AlternativeClock from "./AlternativeClock";

function HW9() {
    return (
        <div>
            <div className={s.marginHeader}>
                <span className={s.hw9}>
                    homework 9
                </span>
            </div>
            <div className={s.body}>
                Original clock:
                <Clock/>
                <br/>
                Alternative clock (moment.js):
                <AlternativeClock/>
            </div>
        </div>
    )
}

export default HW9
