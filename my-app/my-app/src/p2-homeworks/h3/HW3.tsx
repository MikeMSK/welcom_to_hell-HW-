import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from "./Greeting.module.css"

export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        setUsers([{_id: v1(), name: name}, ...users])
    }
    console.log(users)
    return (
        <div className={s.marginHeader}>
            <span className={s.hw3}>
                homeworks 3
            </span>
            <div className={s.componentGreeting}>
                <GreetingContainer users={users}
                                   addUserCallback={addUserCallback}/>
            </div>
        </div>
    )
}

export default HW3
