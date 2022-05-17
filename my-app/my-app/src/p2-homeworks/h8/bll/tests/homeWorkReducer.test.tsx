import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'NAME_AZ', payload: 'up'})
    expect(newState[0]._id).toBe(1)

    expect(newState[0].name.toLowerCase() < newState[1].name.toLowerCase()).toBe(true)

    // const result = [1, 3, 4, 5, 2, 0].filter((el, i) => el === newState[i]._id)
    // expect(result.length).toBe(newState.length)
    //test ignat
})


test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'NAME_ZA', payload: 'down'})
    expect(newState[5]._id).toBe(1)
})

test('AGE_40+', () => {
    const newState = homeWorkReducer(initialState, {type: 'AGE_40+', payload: 40})
    expect(newState.length).toBe(3)

})
