import { AppStateType } from '../types/types'

export const getIsAuth = (state: AppStateType) => (state.auth.isAuth);
export const getLogin = (state: AppStateType) => (state.auth.login);
export const getAuthId = (state: AppStateType) => (state.auth.id);
export const getCaptcha = (state: AppStateType) => (state.auth.captchaURL);