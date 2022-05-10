import React from 'react'
import s from "./Message.module.css"

type PropsTypeMessage = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: PropsTypeMessage) {
    return (
        <div className={s.oneMessage}>
            <div className={s.avatarMessage}>
                <img src={props.avatar} alt={"img"}/>
            </div>
            <div className={s.corner}></div>

            <div className={s.bodyMessage}>
                <div className={s.nickNameMessage}><b>{props.name}</b></div>
                <div className={s.textMessage}>{props.message}</div>
                <div className={s.timeSendMessage}>{props.time}</div>
            </div>
        </div>
    )
}

