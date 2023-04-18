import { authorization } from './authReducer'

const INITIALIZED_SUCCESS = 'my-app/app/INITIALIZED_SUCCESS';

let inicialState = {
    initialized: false
}

const appReducer = (state = inicialState, action) => {
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

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
})

export const initializeApp = () => (dispatch) => {

    let promise = dispatch(authorization());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}

export default appReducer;