import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "dacaeff9-9a8d-4307-b226-fe5ddd53b058" }

});

type CapchaResponse = {
    url: string
}

export const securityAPI = {
    capcha() {
        return instance.get<CapchaResponse>(`security/get-captcha-url`).then(res => res.data)
    }
}