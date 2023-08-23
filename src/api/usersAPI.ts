import axios, { AxiosPromise } from 'axios';
import { GetItemsType } from './api';
import { ResponseType } from './authAPI';
import { FilterType } from '../Redux/userReducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "dacaeff9-9a8d-4307-b226-fe5ddd53b058" }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, filter: FilterType) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${filter.term}&friend=${filter.friend}`).then(res => res.data);
    },

    follow(id: number) {
        return instance.post<ResponseType>(`follow/${id}`).then(res => res.data);
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`).then(res => res.data) as Promise<ResponseType>;
    }
}