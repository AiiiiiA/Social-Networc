import { authorization } from './authReducer'

const INITIALIZED_SUCCESS = 'my-app/app/INITIALIZED_SUCCESS';

type InitialStateType = typeof inicialState

let inicialState = {
    initialized: false
}

const appReducer = (state = inicialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch: any) => {

    let promise = dispatch(authorization());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}

export default appReducer;