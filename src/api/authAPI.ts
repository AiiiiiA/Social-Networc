import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "dacaeff9-9a8d-4307-b226-fe5ddd53b058" }

});

export enum ResultCodes {
    Success = 0,
    Error = 1
}

export type ResponseType<D = {}, RC = ResultCodes> = {
    data: D
    resultCode: RC
    messages: Array<string>
}

type AuthResponcseData = {
    id: number,
    email: string,
    login: string
}

type LoginResponcseType = {
    userId: 2
}

type LogoutResponcseType = {
    data: any
}

export const authAPI = {
    auth() {
        return instance.get<ResponseType<AuthResponcseData>>(`auth/me`).then(res => res.data)
    },

    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        console.log(email, password, rememberMe, captcha)
        return instance.post<ResponseType<LoginResponcseType>>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data)
    },
    logout() {
        return instance.delete<ResponseType<LogoutResponcseType>>(`auth/login`).then(res => res.data)
    }
}

