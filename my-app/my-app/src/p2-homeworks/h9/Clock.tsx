import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW9.module.css"

function Clock() {

    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date ? date.toLocaleTimeString() : ""// fix with date
    const stringDate = date ? date.toLocaleDateString() : "" // fix with date

    return (
        <div>
            <div className={s.newDateStyle}>
                <div onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
