import axios from 'axios';
import { PhotoType, ProfileDataType } from '../types/types';
import { ResponseType } from './authAPI';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "dacaeff9-9a8d-4307-b226-fe5ddd53b058" }

});

type SavePhotoRespons = {
    photo: PhotoType
}

export const profileAPI = {
    profile(userId: number) {
        return instance.get<ProfileDataType>(`profile/` + userId).then(res => res.data)
    },
    changeProfileInfo(profile: ProfileDataType) {
        return instance.put<ResponseType>(`profile`, profile).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, { status })
    },
    setPhoto(photo: any) {
        const formData = new FormData();
        formData.append('image', photo)
        return instance.put<ResponseType<SavePhotoRespons>>(`profile/photo`, formData, { photo })
    }
}