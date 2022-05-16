import {UserType} from "../HW8";

export type ActionType = {
    type: string,
    payload: string | number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'NAME_AZ': {
            return state.map(st => st).sort(function (a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1
                } else {
                    return 0
                }
            })
        }
        case 'NAME_ZA': {
            return state.map(st => st).sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1
                } else {
                    return 0
                }
            })
        }
        case 'AGE_40+': {
            return state.filter(st => st.age > action.payload).sort(function (a, b) {
                return a.age - b.age
            })
        }
        default:
            return state
    }
}
