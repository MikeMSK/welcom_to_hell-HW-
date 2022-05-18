import React from 'react'
import Clock from './Clock'
import s from "./HW9.module.css"

function HW9() {
    return (
        <div>
            <div className={s.marginHeader}>
                <span className={s.hw9}>
                    homework 9
                </span>
            </div>
            <div className={s.body}>
                <Clock/>
            </div>
        </div>
    )
}

export default HW9
