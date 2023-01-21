import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const copyState = [...state]
            return copyState.sort((a, b) => {
                if (action.payload === 'up') return a.name.localeCompare(b.name)
                return b.name.localeCompare(a.name)
            })
        }
        case 'check': {

            return state.filter(obj => obj.age >= action.payload)
        }
        default:
            return state
    }
}
