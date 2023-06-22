import axios from 'axios';
import { ProfileDataType } from '../types/types';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "dacaeff9-9a8d-4307-b226-fe5ddd53b058" }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    follow(id: number) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}

export const profileAPI = {
    profile(userId: number) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    changeProfileInfo(profile: ProfileDataType) {
        return instance.put(`profile`, profile).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status })
    },
    setPhoto(photo: any) {
        const formData = new FormData();
        formData.append('image', photo)

        return instance.put(`profile/photo`, formData, { photo })
    }
}

export enum ResultCodes {
    Success = 0,
    Error = 1
}

type AuthResponcseType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: ResultCodes,
    messages: Array<string>
}
type LoginResponcseType = {
    data: {
        userId: 2
    },
    resultCode: ResultCodes,
    messages: Array<string>
}
type LogoutResponcseType = {
    data: any,
    resultCode: ResultCodes,
    messages: Array<string>
}

export const authAPI = {
    auth() {
        return instance.get<AuthResponcseType>(`auth/me`).then(response => response.data)
    },

    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        console.log(email, password, rememberMe, captcha)
        return instance.post<LoginResponcseType>(`auth/login`, { email, password, rememberMe, captcha }).then(response => response.data)
    },
    logout() {
        return instance.delete<LogoutResponcseType>(`auth/login`).then(response => response.data)
    }
}

export const securityAPI = {
    capcha() {
        return instance.get(`security/get-captcha-url`).then(response => response.data)
    }
}