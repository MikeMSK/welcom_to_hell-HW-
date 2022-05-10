import React, {useState} from 'react'
import Affairs from './Affairs'
import s from "./Affairs.module.css"

type DefaultAffairsType = Array<AffairType>
export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    _id: number,
    name: string,
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: DefaultAffairsType = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: DefaultAffairsType, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') {
        return affairs
    } else {
        return affairs.filter(t => t.priority === filter)
    }

    //мой вариант
    // } else if (filter === "high") {
    //     let filteredAffairs = affairs.filter(t => t.priority === "high")
    //     return filteredAffairs
    // } else if (filter === "middle") {
    //     let filteredAffairs = affairs.filter(t => t.priority === "middle")
    //     return filteredAffairs
    // } else if (filter === "low") {
    //     let filteredAffairs = affairs.filter(t => t.priority === "low")
    //     return filteredAffairs
    // } else return affairs
}
export const deleteAffair = (affairs: DefaultAffairsType, _id: number): Array<AffairType> => { // need to fix any
    let filteredAffairs = affairs.filter(t => t._id !== _id)
    return filteredAffairs
}

function HW2() {
    const [affairs, setAffairs] = useState<DefaultAffairsType>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div className={s.hw2}>
            <span>homeworks 2</span>
            <div className={s.a}>
                <Affairs data={filteredAffairs}
                         setFilter={setFilter}
                         deleteAffairCallback={deleteAffairCallback}
                />
            </div>
        </div>
    )
}

export default HW2
