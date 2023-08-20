import { authorization } from './authReducer'
import { InferActionsType } from './reduxStore'

let inicialState = { 
    initialized: false
}

const appReducer = (state = inicialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'my-app/app/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const actions = {
    initializedSuccess: () => ({ type: 'my-app/app/INITIALIZED_SUCCESS' } as const)
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authorization())
    Promise.all([promise]).then(() => { dispatch(actions.initializedSuccess()) })
}

export default appReducer

export type InitialStateType = typeof inicialState
type ActionsType = InferActionsType<typeof actions>