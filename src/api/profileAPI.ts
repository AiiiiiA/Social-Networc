import axios from 'axios';
import { ProfileDataType } from '../types/types';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "dacaeff9-9a8d-4307-b226-fe5ddd53b058" }

});

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