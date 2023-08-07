import { authAPI, securityAPI } from "../api/authAPI";
import {stopSubmit} from "redux-form"
import { ResultCodes } from "../api/authAPI";

const SET_USER_DATA = 'my-app/auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'my-app/auth/GET_CAPTCHA_URL';

type InitialStateType = typeof inicialState;

let inicialState = {
    id: null         as number | null,
    email: null      as string | null,
    login: null      as string | null,
    isAuth: false    as boolean,
    captchaURL: null as string | null
}

const authReducer = (state = inicialState, action: any): InitialStateType => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };

        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.captchaURL
            }

        default:
            return state;
    }
};

type SetUserDataActionPayloadType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetUserDataActionPayloadType
}

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth }
});

type SetCaptchaURLActionType = {
    type: typeof GET_CAPTCHA_URL,
    payload: { captchaURL: string }
}

export const setCaptchaURL = (captchaURL: string): SetCaptchaURLActionType => ({
    type: GET_CAPTCHA_URL, payload: { captchaURL }
})

export const authorization = () => async (dispatch: any) => {
    const data = await authAPI.auth();
    if (data.resultCode === ResultCodes.Success) {
        const { id, email, login } = data.data;
        dispatch(setUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) =>
    async (dispatch: any) => {
        const data = await authAPI.login(email, password, rememberMe, captcha);

        if (data.resultCode === ResultCodes.Success) {

            dispatch(authorization())

        } else {

            dispatch(getCaptchaURL())

            const message = data.messages.length > 0 ? 'Неправильный email или пароль' : 'Some error'
            dispatch(stopSubmit('login', { _error: message }));
        }
    }

export const logout = () => async (dispatch: any) => {
    const data = await authAPI.logout();
    if (data.resultCode === ResultCodes.Success) {
        dispatch(setUserData(null, null, null, false))
    }
}
export const getCaptchaURL = () => async (dispatch: any) => {
    const data = await securityAPI.capcha();
    const captchaURL = data.url;
    dispatch(setCaptchaURL(captchaURL))
}

export default authReducer;