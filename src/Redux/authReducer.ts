import { authAPI } from "../api/authAPI"
import { securityAPI } from "../api/securityAPI"
import { stopSubmit } from "redux-form"
import { ResultCodes } from "../api/authAPI"
import { BaseThunkType, InferActionsType } from "./reduxStore"

let inicialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaURL: null as string | null
}

const authReducer = (state = inicialState, action: ActionsType): InitialStateType => {

    switch (action.type) {

        case 'my-app/auth/SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }

        case 'my-app/auth/GET_CAPTCHA_URL':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export const actions = {
    setUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'my-app/auth/SET_USER_DATA',
        payload: { id, email, login, isAuth }
    } as const),

    setCaptchaURL: (captchaURL: string) => ({
        type: 'my-app/auth/GET_CAPTCHA_URL',
        payload: { captchaURL }
    } as const)
}

export const authorization = (): ThuncType => async (dispatch) => {
    const data = await authAPI.auth()
    if (data.resultCode === ResultCodes.Success) {
        const { id, email, login } = data.data
        dispatch(actions.setUserData(id, email, login, true))
    }
}
export const setUserData = actions.setUserData
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThuncType =>
    async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe, captcha)

        if (data.resultCode === ResultCodes.Success) {

            dispatch(authorization())

        } else {

            dispatch(getCaptchaURL())
            const message = data.messages.length > 0 ? 'Неправильный email или пароль' : 'Some error'
            dispatch(stopSubmit('login', { _error: message }))
        }
    }

export const logout = (): ThuncType => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === ResultCodes.Success) {
        dispatch(actions.setUserData(null, null, null, false))
    }
}
export const getCaptchaURL = (): ThuncType => async (dispatch) => {
    const data = await securityAPI.capcha()
    const captchaURL = data.url
    dispatch(actions.setCaptchaURL(captchaURL))
}

export default authReducer

type InitialStateType = typeof inicialState
type ActionsType = InferActionsType<typeof actions>
type ThuncType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>