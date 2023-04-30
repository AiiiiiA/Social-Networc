import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'my-app/auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'my-app/auth/GET_CAPTCHA_URL';

let inicialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
}

const authReducer = (state = inicialState, action) => {

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

export const setUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth }
});

export const setCaptchaURL = (captchaURL) => ({
    type: GET_CAPTCHA_URL, captchaURL
})

export const authorization = () => async (dispatch) => {
    const data = await authAPI.auth();
    if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
        
        dispatch(authorization())
    } else {
        const message = data.messages.length > 0 ? 'Неправильный email или пароль' : 'Some error'
        dispatch(stopSubmit('login', { _error: message }));
    }
}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}
export const getCaptchaURL = () => async (dispatch) => {
    const data = await securityAPI.capcha();
    const captchaURL = data.url;
    dispatch(setCaptchaURL(captchaURL))
}

export default authReducer;