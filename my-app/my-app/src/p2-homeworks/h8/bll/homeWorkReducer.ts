import {UserType} from "../HW8";

export type ActionType = {
    type: string,
    payload: string | number
}
//ignat
// export type ActionType = {type:"sort",payload:"up" | "down"} | {type:"check", payload:number}


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'NAME_AZ': {
            return state.map(st => st).sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1
                } else {
                    return 0
                }
            })
        }
        case 'NAME_ZA': {
            return state.map(st => st).sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1
                } else {
                    return 0
                }
            })
        }
        case 'AGE_40+': {
            return state.filter(st => st.age > action.payload).sort((a, b) => {
                return a.age - b.age
            })
        }
        default:
            return state
    }
}

//ignat
// case"sort":{
//     const newState = [...state].sort((a,b)=>{
//         if(a.name > b.name) return 1
//         else if (a.name < b.name) return -1
//         else return 0
//     })
//     return action.payload ==="up"? newState: newState.reverse()
// }
// }