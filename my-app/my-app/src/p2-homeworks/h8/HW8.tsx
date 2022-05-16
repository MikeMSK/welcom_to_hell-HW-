import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW8.module.css"

export type UserType = {
    _id: number,
    name: string,
    age: number,
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {

    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}
             className={s.qwer}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortName_AZ = () => setPeople(homeWorkReducer(initialPeople, {
        type: 'NAME_AZ',
        payload: 'up'
    }))
    const sortName_ZA = () => setPeople(homeWorkReducer(initialPeople, {
        type: 'NAME_ZA',
        payload: 'down'
    }))
    const sortAge40plus = () => setPeople(homeWorkReducer(initialPeople, {
        type: 'AGE_40+',
        payload: 40
    }))
    const reset = () => {
        setPeople(initialPeople)
    }

    return (
        <div>
            <div className={s.marginHeader}>
                <span className={s.hw8}>
                    homework 8
                </span>
            </div>
            <div className={s.body}>
                {finalPeople}
            </div>
            <div className={s.button}>
                <SuperButton onClick={sortName_AZ}>А-Я</SuperButton>
                <SuperButton onClick={sortName_ZA}>Я-А</SuperButton>
                <SuperButton onClick={sortAge40plus}>40+</SuperButton>
                <SuperButton onClick={reset}>RESET</SuperButton>
            </div>
        </div>
    )
}

export default HW8



